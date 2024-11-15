'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { toast } from "@/hooks/use-toast"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function SignInPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const handleSignIn = () => {
        if (email === 'userdemoadmin@gmail.com' && password === 'userdemoadmin') {
            localStorage.setItem('isLoggedIn', 'true');
            router.push('/dashboard')
        } else {
            toast({
                title: "Invalid credentials",
                description: "Please check your email and password",
                variant: "destructive",
            });
        }
    }

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Sign in</CardTitle>
          <CardDescription>Enter your email below to sign in</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full gap-4">
            <div className="grid gap-2">
              <Input
                type="email"
                placeholder="Email"
                className="w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Input
                type="password" 
                placeholder="Password"
                className="w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button className="w-full" onClick={handleSignIn}>
              Sign in
            </Button>
          </div>
        </CardContent>
        <CardFooter>
            <CardDescription>Don't have an account? <Link href="/signup">Sign up</Link></CardDescription>
        </CardFooter>
      </Card>
    </div>
  )
}
