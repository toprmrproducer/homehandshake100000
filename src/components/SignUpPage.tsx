import React from 'react'
import { SignUp } from '@clerk/clerk-react'

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Join homehandshake</h1>
          <p className="text-blue-100">Create your account and start creating viral content</p>
        </div>
        <div className="bg-white rounded-2xl p-1">
          <SignUp 
            routing="path"
            path="/sign-up"
            redirectUrl="/dashboard"
            appearance={{
              elements: {
                rootBox: "mx-auto",
                card: "shadow-none border-none",
              }
            }}
          />
        </div>
      </div>
    </div>
  )
}