"use client"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import api from "@/app/utils/api"; // Using the preconfigured axios instance
import { useToast } from "@/hooks/use-toast"
import { ToastAction } from "@radix-ui/react-toast"
import Link from "next/link";
import { useRouter } from "next/navigation"

export default function SignupForm({
  className,
  ...props
}) {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [address, setAddress] = useState("")

  const { toast } = useToast()
  const router = useRouter()

  const submitForm = async (e) => {
    e.preventDefault()
    if (!username || !email || !password || !confirmPassword || !address) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
      return
    }

    if (password !== confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
      return
    }

    try {
      const response = await api.post("/api/v1/auth/signup", { username, email, password, address })
      if (response.data.error) {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: response.data.error,
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        })
        return
      }
      router.push('/login')
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: error.response?.data?.error || "An unexpected error occurred",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8" onSubmit={submitForm}>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Create Account</h1>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="s-username">Username</Label>
                <Input onChange={(e) => setUsername(e.target.value)} id="s-username" placeholder="Username" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="s-email">Email</Label>
                <Input onChange={(e) => setEmail(e.target.value)} id="s-email" type="email" placeholder="m@example.com" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="s-address">Address</Label>
                <Input onChange={(e) => setAddress(e.target.value)} id="s-address" placeholder="123 Main St" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="s-password">Password</Label>
                <Input onChange={(e) => setPassword(e.target.value)} id="s-password" type="password" placeholder="Password" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="s-confirm-password">Confirm Password</Label>
                <Input onChange={(e) => setConfirmPassword(e.target.value)} id="s-confirm-password" type="password" placeholder="Confirm Password" required />
              </div>
              <Button type="submit" className="w-full">
                Sign Up
              </Button>
            </div>
          </form>
          <div className="relative hidden bg-muted md:block">
            <img
              src="/MountainMan.png"
              alt="Image"
              className="absolute inset-0 h-52 w-44 object-cover dark:brightness-[0.2] dark:grayscale" />
            <img
              src="/illustration.png"
              alt="Image"
              className="absolute inset-0 h-44 w-48 object-cover dark:brightness-[0.2] dark:grayscale self-center justify-self-end " />
            <img
              src="/raining_money.png"
              alt="Image"
              className="absolute inset-0 h-52 w-52 object-cover dark:brightness-[0.2] dark:grayscale self-end" />
          </div>
        </CardContent>
      </Card>
      <div
        className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
        By clicking continue, you agree to our <Link href="#">Terms of Service</Link>{" "}
        and <Link href="#">Privacy Policy</Link>.
      </div>
    </div>
  );
}