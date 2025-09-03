import React, { useState } from 'react'
import { Facebook, Instagram, Twitter, Linkedin, Youtube, Send, CheckCircle, AlertCircle } from 'lucide-react'

export default function SocialDistribution() {
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([])
  const [postText, setPostText] = useState('')
  const [scheduling, setScheduling] = useState(false)

  const platforms = [
    { id: 'facebook', name: 'Facebook', icon: Facebook, color: 'bg-blue-600', connected: true },
    { id: 'instagram', name: 'Instagram', icon: Instagram, color: 'bg-pink-600', connected: true },
    { id: 'twitter', name: 'Twitter', icon: Twitter, color: 'bg-blue-400', connected: false },
    { id: 'linkedin', name: 'LinkedIn', icon: Linkedin, color: 'bg-blue-800', connected: true },
    { id: 'youtube', name: 'YouTube', icon: Youtube, color: 'bg-red-600', connected: false },
  ]

  const togglePlatform = (platformId: string) => {
    setSelectedPlatforms(prev => 
      prev.includes(platformId) 
        ? prev.filter(id => id !== platformId)
        : [...prev, platformId]
    )
  }

  const handleSchedulePost = async () => {
    if (selectedPlatforms.length === 0 || !postText.trim()) return
    
    setScheduling(true)
    
    try {
      // Use Ayrshare API to distribute content
      const response = await fetch('https://app.ayrshare.com/api/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_AYRSHARE_API_KEY}`,
        },
        body: JSON.stringify({
          post: postText,
          platforms: selectedPlatforms,
        }),
      })
      
      if (!response.ok) {
        throw new Error('Failed to schedule post')
      }
      
      // Reset form
      setPostText('')
      setSelectedPlatforms([])
      
      // Show success message (you can implement a toast notification here)
      alert('Post scheduled successfully!')
      
    } catch (error) {
      console.error('Scheduling error:', error)
      alert('Failed to schedule post. Please try again.')
    } finally {
      setScheduling(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Social Distribution</h2>
          <p className="text-gray-600">Share your content across multiple social platforms</p>
        </div>

        {/* Platform Selection */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Platforms</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {platforms.map((platform) => {
              const Icon = platform.icon
              const isSelected = selectedPlatforms.includes(platform.id)
              const canSelect = platform.connected
              
              return (
                <button
                  key={platform.id}
                  onClick={() => canSelect && togglePlatform(platform.id)}
                  disabled={!canSelect}
                  className={`relative p-6 rounded-xl border-2 transition-all ${
                    canSelect
                      ? isSelected
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                      : 'border-gray-100 bg-gray-50 cursor-not-allowed opacity-60'
                  }`}
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 ${platform.color} text-white rounded-lg mb-3 mx-auto`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <p className="font-medium text-gray-900">{platform.name}</p>
                  
                  {canSelect ? (
                    <div className="absolute top-2 right-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                  ) : (
                    <div className="absolute top-2 right-2">
                      <AlertCircle className="w-5 h-5 text-yellow-500" />
                    </div>
                  )}
                  
                  {isSelected && (
                    <div className="absolute inset-0 bg-blue-500 bg-opacity-10 rounded-xl"></div>
                  )}
                </button>
              )
            })}
          </div>
          
          <p className="text-sm text-gray-500 mt-4">
            Connect your social accounts in settings to enable posting
          </p>
        </div>

        {/* Post Content */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Post Content</h3>
          <div className="border rounded-xl p-4">
            <textarea
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
              placeholder="Write your post content here..."
              className="w-full h-32 resize-none border-none outline-none text-gray-900 placeholder-gray-500"
            />
            <div className="flex justify-between items-center mt-4 pt-4 border-t">
              <div className="text-sm text-gray-500">
                {postText.length}/280 characters
              </div>
              <div className="flex items-center space-x-2">
                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                  📷 Add Media
                </button>
                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                  🕒 Schedule
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleSchedulePost}
            disabled={selectedPlatforms.length === 0 || !postText.trim() || scheduling}
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {scheduling ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Posting...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Post Now
              </>
            )}
          </button>
        </div>

        {/* Selected Platforms Summary */}
        {selectedPlatforms.length > 0 && (
          <div className="mt-8 p-4 bg-blue-50 rounded-xl">
            <h4 className="font-medium text-blue-900 mb-2">Posting to:</h4>
            <div className="flex flex-wrap gap-2">
              {selectedPlatforms.map(platformId => {
                const platform = platforms.find(p => p.id === platformId)
                return (
                  <span key={platformId} className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                    {platform?.name}
                  </span>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}