'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { toast } from "@/hooks/use-toast"

export default function SignUpPage() {
    const handleSignUp = () => {
        toast({
            title: "Sorry, this feature is not available yet",
            description: "Please try again later",
            variant: "destructive",
        })
    }

    return (
        <div className="flex h-screen w-full items-center justify-center">
            <Card className="w-[400px]">
                <CardHeader>
                    <CardTitle>Sign Up</CardTitle>
                    <CardDescription>Enter your details to sign up to your account</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid w-full gap-4">
                        <div className="grid gap-2">
                            <Input
                                type="text"
                                placeholder="Full Name"
                                className="w-full"
                            />
                        </div>
                        <div className="grid gap-2">
                            <Input
                                type="email"
                                placeholder="Email"
                                className="w-full"
                            />
                        </div>
                        <div className="grid gap-2">
                            <Input
                                type="password"
                                placeholder="Password"
                                className="w-full"
                            />
                        </div>
                        <div className="grid gap-2">
                            <Input
                                type="password"
                                placeholder="Confirm Password"
                                className="w-full"
                            />
                        </div>
                        <Button className="w-full" onClick={handleSignUp}>
                            Sign up
                        </Button>
                    </div>
                </CardContent>
                <CardFooter>
                    <CardDescription>Already have an account? <Link href="/signin">Sign in</Link></CardDescription>
                </CardFooter>
            </Card>
        </div>
    )
}