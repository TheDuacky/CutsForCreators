import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Mail, Twitter, Linkedin, Globe, Play, Users, Eye } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import ActivityBoard from "@/components/ActivityBoard";

// Replace this with your actual YouTube API key
const YOUTUBE_API_KEY = 'YOUR_API_KEY';

// Replace these with your actual video IDs
const VIDEO_IDS = ['dQw4w9WgXcQ',
// Example video ID
'jNQXAC9IVRw' // Example video ID
];
interface VideoStats {
  viewCount: number;
  channelSubscribers: number;
  videoCount: number;
}
const fetchVideoStats = async (): Promise<VideoStats> => {
  const stats = {
    viewCount: 0,
    channelSubscribers: 0,
    videoCount: 0
  };
  const uniqueChannels = new Set<string>();
  for (const videoId of VIDEO_IDS) {
    const videoResponse = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics,snippet&id=${videoId}&key=${YOUTUBE_API_KEY}`);
    const videoData = await videoResponse.json();
    if (videoData.items && videoData.items[0]) {
      const video = videoData.items[0];
      stats.viewCount += parseInt(video.statistics.viewCount, 10);
      const channelId = video.snippet.channelId;
      if (!uniqueChannels.has(channelId)) {
        uniqueChannels.add(channelId);
        const channelResponse = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${YOUTUBE_API_KEY}`);
        const channelData = await channelResponse.json();
        if (channelData.items && channelData.items[0]) {
          stats.channelSubscribers += parseInt(channelData.items[0].statistics.subscriberCount, 10);
          stats.videoCount += parseInt(channelData.items[0].statistics.videoCount, 10);
        }
      }
    }
  }
  return stats;
};
const Bio = () => {
  const {
    data: stats,
    isLoading
  } = useQuery({
    queryKey: ['youtubeStats'],
    queryFn: fetchVideoStats
  });
  return <div className="min-h-screen bg-[#1A1F2C] pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Avatar className="w-32 h-32 mx-auto mb-6">
            <AvatarImage src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" alt="Profile" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <h1 className="text-4xl font-bold text-white mb-4">Duacky</h1>
          <p className="text-xl text-gray-300 mb-6">Video Editor & Content Creator</p>
          <div className="flex justify-center space-x-4">
            <a href="mailto:jane@example.com" className="text-gray-300 hover:text-purple-400">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://twitter.com/jane" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/jane" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://jane.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400">
              <Globe className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* YouTube Stats Section */}
        <Card className="bg-[#232836] border-purple-500/20 mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold text-white mb-6">Impact & Reach</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center p-4 bg-[#1A1F2C] rounded-lg">
                <Eye className="w-8 h-8 text-purple-400 mb-2" />
                <p className="text-2xl font-bold text-white">
                  {isLoading ? "..." : new Intl.NumberFormat().format(stats?.viewCount || 0)}
                </p>
                <p className="text-gray-300">Total Views</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-[#1A1F2C] rounded-lg">
                <Users className="w-8 h-8 text-purple-400 mb-2" />
                <p className="text-2xl font-bold text-white">
                  {isLoading ? "..." : new Intl.NumberFormat().format(stats?.channelSubscribers || 0)}
                </p>
                <p className="text-gray-300">Channel Subscribers</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-[#1A1F2C] rounded-lg">
                <Play className="w-8 h-8 text-purple-400 mb-2" />
                <p className="text-2xl font-bold text-white">
                  {isLoading ? "..." : new Intl.NumberFormat().format(stats?.videoCount || 0)}
                </p>
                <p className="text-gray-300">Videos</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Activity Board */}
        <ActivityBoard />

        <div className="grid gap-8">
          <Card className="bg-[#232836] border-purple-500/20">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold text-white mb-4">About Me</h2>
              <p className="text-gray-300 leading-relaxed">
                With over 8 years of experience in video editing and content creation, I specialize in crafting compelling visual stories that captivate audiences. My work spans across various genres, from dynamic gaming content to professional corporate videos and engaging social media shorts.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#232836] border-purple-500/20">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold text-white mb-4">Skills & Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">Software</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>Adobe Premiere Pro</li>
                    <li>After Effects</li>
                    <li>Minecraft Graphics and Cinematic Shots</li>
                    <li>Final Cut Pro</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-400 mb-2">Specialties</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>Video Essays</li>
                    <li>Minecraft</li>
                    <li>Stylized Films</li>
                    <li>Visual Effects</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#232836] border-purple-500/20">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold text-white mb-4">Work Experience</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-purple-400">Senior Video Editor</h3>
                  <p className="text-gray-300">Content Studio • 2020 - Present</p>
                  <p className="text-gray-300 mt-2">Lead editor for major client projects, specializing in corporate videos and social media content.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-400">Freelance Editor</h3>
                  <p className="text-gray-300">Self-Employed • 2018 - 2020</p>
                  <p className="text-gray-300 mt-2">Collaborated with various content creators and brands to produce high-quality video content.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>;
};
export default Bio;