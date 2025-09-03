import React, { useState } from 'react'
import { UserButton, useUser } from '@clerk/clerk-react'
import { Upload, Video, Share2, Settings, BarChart3, Plus } from 'lucide-react'
import VideoUpload from './VideoUpload'
import ContentLibrary from './ContentLibrary'
import SocialDistribution from './SocialDistribution'
import Analytics from './Analytics'

export default function Dashboard() {
  const { user } = useUser()
  const [activeTab, setActiveTab] = useState('upload')

  const tabs = [
    { id: 'upload', name: 'Upload', icon: Upload },
    { id: 'library', name: 'Content Library', icon: Video },
    { id: 'distribute', name: 'Social Distribution', icon: Share2 },
    { id: 'analytics', name: 'Analytics', icon: BarChart3 },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">homehandshake</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Welcome back, {user?.firstName || 'User'}!</span>
              <UserButton afterSignOutUrl="/" />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  {tab.name}
                </button>
              )
            })}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="mt-8">
          {activeTab === 'upload' && <VideoUpload />}
          {activeTab === 'library' && <ContentLibrary />}
          {activeTab === 'distribute' && <SocialDistribution />}
          {activeTab === 'analytics' && <Analytics />}
        </div>
      </div>
    </div>
  )
}