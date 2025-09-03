import React from 'react'
import { TrendingUp, Eye, Heart, Share, MessageCircle, BarChart3 } from 'lucide-react'

export default function Analytics() {
  // Mock data - replace with actual analytics from your API
  const metrics = [
    {
      label: 'Total Views',
      value: '125.3K',
      change: '+12.5%',
      icon: Eye,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      label: 'Engagement Rate',
      value: '8.4%',
      change: '+2.1%',
      icon: Heart,
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      label: 'Shares',
      value: '2.1K',
      change: '+18.3%',
      icon: Share,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      label: 'Comments',
      value: '847',
      change: '+5.7%',
      icon: MessageCircle,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ]

  const recentPosts = [
    {
      id: 1,
      title: "Amazing Product Demo",
      platform: "Instagram",
      views: "15.2K",
      engagement: "12.3%",
      posted: "2 hours ago"
    },
    {
      id: 2,
      title: "Tutorial Video",
      platform: "Facebook",
      views: "8.7K",
      engagement: "9.1%",
      posted: "1 day ago"
    },
    {
      id: 3,
      title: "Behind the Scenes",
      platform: "LinkedIn",
      views: "3.4K",
      engagement: "15.7%",
      posted: "2 days ago"
    }
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Analytics Dashboard</h2>
          <p className="text-gray-600">Track your content performance across all platforms</p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric) => {
            const Icon = metric.icon
            return (
              <div key={metric.label} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${metric.bgColor}`}>
                    <Icon className={`w-6 h-6 ${metric.color}`} />
                  </div>
                  <span className="text-green-600 text-sm font-medium flex items-center">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    {metric.change}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</h3>
                <p className="text-gray-600 text-sm">{metric.label}</p>
              </div>
            )
          })}
        </div>

        {/* Chart Placeholder */}
        <div className="bg-gray-50 rounded-xl p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Performance Over Time</h3>
            <div className="flex space-x-2">
              <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded-lg">7D</button>
              <button className="px-3 py-1 bg-gray-200 text-gray-600 text-sm rounded-lg">30D</button>
              <button className="px-3 py-1 bg-gray-200 text-gray-600 text-sm rounded-lg">90D</button>
            </div>
          </div>
          <div className="flex items-center justify-center h-64 bg-white rounded-lg border-2 border-dashed border-gray-300">
            <div className="text-center">
              <BarChart3 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">Chart visualization would go here</p>
              <p className="text-gray-400 text-sm">Integrate with your analytics provider</p>
            </div>
          </div>
        </div>

        {/* Recent Posts Table */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Posts Performance</h3>
          <div className="overflow-hidden border border-gray-200 rounded-xl">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Content
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Platform
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Views
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Engagement
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Posted
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentPosts.map((post) => (
                  <tr key={post.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{post.title}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                        {post.platform}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {post.views}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {post.engagement}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {post.posted}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}