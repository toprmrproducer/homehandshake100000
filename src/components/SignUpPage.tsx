import React from 'react'
import { SignUp } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 py-4">
        <Link to="/" className="text-white text-2xl font-bold hover:text-blue-200 transition-colors">
          homehandshake
        </Link>
        <Link 
          to="/sign-in" 
          className="text-white hover:text-blue-200 transition-colors"
        >
          Already have an account? Sign in
        </Link>
      </nav>

      {/* Sign Up Form */}
      <div className="flex items-center justify-center min-h-[85vh] p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-3">Join homehandshake</h1>
            <p className="text-blue-100 text-lg">Create your account and start creating viral content</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <SignUp 
              routing="path"
              path="/sign-up"
              redirectUrl="/dashboard"
              signInUrl="/sign-in"
              appearance={{
                elements: {
                  rootBox: "w-full",
                  card: "shadow-none border-none rounded-none bg-transparent p-8",
                  headerTitle: "text-2xl font-bold text-gray-900",
                  headerSubtitle: "text-gray-600 mt-2",
                  socialButtonsBlockButton: "bg-gray-50 border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium py-3 px-4 rounded-lg transition-colors",
                  socialButtonsBlockButtonText: "font-medium",
                  dividerLine: "bg-gray-300",
                  dividerText: "text-gray-500 font-medium",
                  formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors w-full",
                  formFieldInput: "border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors",
                  formFieldLabel: "text-gray-700 font-medium mb-2 block",
                  identityPreviewText: "text-gray-600",
                  identityPreviewEditButton: "text-blue-600 hover:text-blue-700",
                  footerActionLink: "text-blue-600 hover:text-blue-700 font-medium"
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}