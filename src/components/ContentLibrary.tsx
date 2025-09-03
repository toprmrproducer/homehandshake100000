import React from 'react'
import { Play, Edit, Share, Download, Clock } from 'lucide-react'

export default function ContentLibrary() {
  // Mock data - replace with actual data from your API
  const mockVideos = [
    {
      id: 1,
      title: "Amazing Product Demo",
      thumbnail: "https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      duration: "2:34",
      createdAt: "2024-01-15",
      status: "processed"
    },
    {
      id: 2,
      title: "Tutorial Video",
      thumbnail: "https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      duration: "5:12",
      createdAt: "2024-01-14",
      status: "processing"
    },
    {
      id: 3,
      title: "Behind the Scenes",
      thumbnail: "https://images.pexels.com/photos/3184632/pexels-photo-3184632.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      duration: "3:45",
      createdAt: "2024-01-13",
      status: "processed"
    }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Content Library</h2>
            <p className="text-gray-600">Manage your uploaded videos and generated clips</p>
          </div>
          <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Play className="w-4 h-4 mr-2" />
            Create New Clip
          </button>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockVideos.map((video) => (
            <div key={video.id} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-opacity flex items-center justify-center">
                  <button className="opacity-0 hover:opacity-100 bg-white rounded-full p-3 transition-opacity">
                    <Play className="w-6 h-6 text-gray-900" />
                  </button>
                </div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-sm px-2 py-1 rounded">
                  {video.duration}
                </div>
                <div className={`absolute top-2 left-2 px-2 py-1 rounded text-xs font-medium ${
                  video.status === 'processed' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {video.status === 'processed' ? 'Ready' : 'Processing'}
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{video.title}</h3>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Clock className="w-4 h-4 mr-1" />
                  {video.createdAt}
                </div>
                
                <div className="flex space-x-2">
                  <button className="flex-1 inline-flex items-center justify-center px-3 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <Edit className="w-4 h-4 mr-1" />
                    Edit
                  </button>
                  <button className="flex-1 inline-flex items-center justify-center px-3 py-2 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                    <Share className="w-4 h-4 mr-1" />
                    Share
                  </button>
                  <button className="px-3 py-2 text-sm bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {mockVideos.length === 0 && (
          <div className="text-center py-12">
            <Play className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-500 mb-2">No videos yet</h3>
            <p className="text-gray-400 mb-4">Upload your first video to get started</p>
            <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Upload Video
            </button>
          </div>
        )}
      </div>
    </div>
  )
}