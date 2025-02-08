"use client"
import { LoginForm } from "@/components/Login-form"
export default function LoginPage() {
    
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-10 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <LoginForm className="" />
      </div>
    </div>
  )
}
