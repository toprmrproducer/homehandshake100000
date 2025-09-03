import React from 'react'
import { Link } from 'react-router-dom'
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
import { Video, Share, Zap, ArrowRight } from 'lucide-react'

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 py-4">
        <div className="text-white text-2xl font-bold">
          homehandshake
        </div>
        <div className="flex items-center space-x-4">
          <SignedOut>
            <Link 
              to="/sign-in" 
              className="text-white hover:text-blue-200 transition-colors"
            >
              Sign In
            </Link>
            <Link 
              to="/sign-up" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Sign Up
            </Link>
          </SignedOut>
          <SignedIn>
            <Link 
              to="/dashboard" 
              className="text-white hover:text-blue-200 transition-colors mr-4"
            >
              Dashboard
            </Link>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex items-center justify-center min-h-[80vh] px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Create & Share
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              {' '}Viral Content
            </span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Transform your ideas into engaging videos and distribute them across all social media platforms with AI-powered tools.
          </p>
          
          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white">
              <Video className="w-12 h-12 text-blue-400 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">AI Video Clipping</h3>
              <p className="text-blue-100 text-sm">Extract the best moments from your content automatically</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white">
              <Share className="w-12 h-12 text-purple-400 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Multi-Platform Sharing</h3>
              <p className="text-blue-100 text-sm">Distribute to all major social media platforms at once</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white">
              <Zap className="w-12 h-12 text-yellow-400 mb-4 mx-auto" />
              <h3 className="text-lg font-semibold mb-2">Viral Optimization</h3>
              <p className="text-blue-100 text-sm">AI-powered insights to maximize engagement</p>
            </div>
          </div>

          <SignedOut>
            <Link 
              to="/sign-up" 
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </SignedOut>
          <SignedIn>
            <Link 
              to="/dashboard" 
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Go to Dashboard
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </SignedIn>
        </div>
      </div>
    </div>
  )
}