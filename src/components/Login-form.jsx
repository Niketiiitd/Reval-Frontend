"use client"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import {  useState ,useContext, useEffect } from "react"
import { useToast } from "@/hooks/use-toast"
import { ToastAction } from "@radix-ui/react-toast"
// import { useRouter } from "next/router"
import Link from "next/link";
import { useRouter } from "next/navigation"

export function LoginForm({
  className,
  ...props
}) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const { toast } = useToast()
  // const [isClient, setIsClient] = useState(false)
  // const router = isClient ? useRouter() : null
  const router = useRouter()

  const submitForm = async (event) => {
    event.preventDefault()
    if (!username || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
      return
    }

    try {
      const response = await axios.post("/login", { email:username, password })
      if (!response.data.success) {
        toast({
          title: "Error",
          description: response.data.message,
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        })
      } else {
        setEmail(response.data.email)
        setFirstname(response.data.firstname)
        setLastname(response.data.lastname)
        router.push("/dashboard")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
    }
    console.log("handle submit function called");
    
  }

  return (
    <Card className={cn("w-full max-w-md mx-auto", className)} {...props}>
      <CardContent>
        <form onSubmit={submitForm}>
          <div className="mb-4">
            <Label htmlFor="username">Email</Label>
            <Input
              id="username"
              type="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit">Login</Button>
        </form>
        <div className="mt-4">
          <Link href="/forgot-password">Forgot Password?</Link>
        </div>
        <div className="mt-4">
          <Link href="/signup">Don't have an account? Sign up</Link>
        </div>
      </CardContent>
    </Card>
  )
}