
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Clock, Package, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Define service data with more detailed information
const serviceData = [
  {
    id: 'video-editing',
    icon: 'Video',
    title: 'Video Editing',
    description: 'Professional editing with smooth transitions, color grading, and sound design.',
    features: [
      'Professional editing and cutting',
      'Color correction and grading',
      'Sound mixing and enhancement',
      'Transition effects',
      'Background music selection'
    ],
    pricing: '$150-300 per video (based on length and complexity)',
    turnaround: '3-5 business days',
    deliverables: 'High-quality MP4 file, one round of revisions included',
    type: 'individual'
  },
  {
    id: 'youtube-optimization',
    icon: 'Youtube',
    title: 'YouTube Optimization',
    description: 'Thumbnail creation, title optimization, and content strategy.',
    features: [
      'Custom thumbnail design',
      'SEO-friendly title and description',
      'Tag optimization',
      'Playlist organization',
      'Channel analysis and recommendations'
    ],
    pricing: '$100-200 per video',
    turnaround: '2-3 business days',
    deliverables: 'Thumbnail files (PNG/JPG), optimized metadata document',
    type: 'individual'
  },
  {
    id: 'motion-graphics',
    icon: 'Film',
    title: 'Motion Graphics',
    description: 'Custom animations and visual effects to enhance your content.',
    features: [
      'Custom intro and outro animations',
      'Lower thirds and text animations',
      'Logo animations',
      'Infographic animations',
      'Visual effects and compositing'
    ],
    pricing: '$200-500 per project',
    turnaround: '5-7 business days',
    deliverables: 'Rendered animation files, project files available upon request',
    type: 'individual'
  },
  {
    id: 'content-planning',
    icon: 'Edit',
    title: 'Content Planning',
    description: 'Strategic planning and content calendar management.',
    features: [
      'Content strategy development',
      'Editorial calendar creation',
      'Topic research and trend analysis',
      'Audience growth strategies',
      'Competitive analysis'
    ],
    pricing: '$300-600 monthly retainer',
    turnaround: 'Initial plan within 7 business days, ongoing support',
    deliverables: 'Content calendar, strategy document, monthly analytics report',
    type: 'individual'
  },
  {
    id: 'special-effects',
    icon: 'Wand2',
    title: 'Special Effects',
    description: 'High-quality VFX and creative transitions for engaging content.',
    features: [
      'Green screen compositing',
      'Advanced visual effects',
      'Creative transitions',
      'Motion tracking',
      'Particle effects'
    ],
    pricing: '$250-700 per project',
    turnaround: '7-10 business days',
    deliverables: 'Rendered effect files, one round of revisions included',
    type: 'individual'
  },
  {
    id: 'analytics-review',
    icon: 'BarChart',
    title: 'Analytics Review',
    description: 'Data-driven insights to improve your channel\'s performance.',
    features: [
      'Comprehensive channel performance analysis',
      'Audience demographic insights',
      'Video performance metrics',
      'Growth trend analysis',
      'Actionable recommendations'
    ],
    pricing: '$200-400 per review',
    turnaround: '5 business days',
    deliverables: 'Detailed analytics report, strategy recommendations',
    type: 'individual'
  },
  {
    id: 'starter-bundle',
    icon: 'Package',
    title: 'Content Creator Starter Bundle',
    description: 'Everything you need to kickstart your YouTube channel: Video Editing, YouTube Optimization, and Content Planning.',
    features: [
      'Complete video editing and production',
      'YouTube SEO optimization',
      'Content strategy development',
      'Thumbnail creation',
      'Initial channel setup advice'
    ],
    pricing: '$450-700 per month (save 15% compared to individual services)',
    turnaround: '7-10 business days for complete package',
    deliverables: 'Edited videos, optimized metadata, content calendar',
    type: 'bundle',
    includedServices: ['video-editing', 'youtube-optimization', 'content-planning']
  },
  {
    id: 'growth-bundle',
    icon: 'Package',
    title: 'Professional Growth Bundle',
    description: 'Take your channel to the next level with Analytics Review, Motion Graphics, and Special Effects.',
    features: [
      'Monthly analytics review and recommendations',
      'Custom motion graphics package',
      'Advanced special effects',
      'Channel growth strategy',
      'Competitive positioning'
    ],
    pricing: '$650-1000 per month (save 20% compared to individual services)',
    turnaround: '10-14 business days for complete package',
    deliverables: 'Analytics report, custom graphics, special effects implementation',
    type: 'bundle',
    includedServices: ['analytics-review', 'motion-graphics', 'special-effects']
  },
  {
    id: 'ultimate-bundle',
    icon: 'Package',
    title: 'Ultimate Creator Bundle',
    description: 'All our services combined for a comprehensive content creation solution at a discounted rate.',
    features: [
      'Full-service video production and editing',
      'Complete YouTube channel optimization',
      'Custom motion graphics and special effects',
      'Strategic content planning',
      'Monthly analytics and growth consultation'
    ],
    pricing: '$1200-2000 per month (save 25% compared to individual services)',
    turnaround: '14-21 business days for the complete package',
    deliverables: 'All deliverables from individual services, premium support',
    type: 'bundle',
    includedServices: ['video-editing', 'youtube-optimization', 'motion-graphics', 'content-planning', 'special-effects', 'analytics-review']
  }
];

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const serviceInfo = serviceData.find(service => service.id === id);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  if (!serviceInfo) {
    return (
      <div className="min-h-screen bg-[#1A1F2C] pt-16 px-4 flex flex-col items-center justify-center">
        <h1 className="text-3xl text-white mb-4">Service not found</h1>
        <Button onClick={() => navigate('/services')} variant="outline" className="flex items-center gap-2">
          <ArrowLeft size={16} />
          Back to Services
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1A1F2C] pt-16 relative overflow-hidden">
      {/* Abstract Decorations */}
      <div 
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-purple-500/5 blur-3xl" 
      />
      <div 
        className="absolute top-40 right-20 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl" 
      />
      <div 
        className="absolute bottom-20 left-1/4 w-72 h-72 rounded-full bg-pink-500/5 blur-3xl" 
      />
      
      <div className="max-w-5xl mx-auto px-4 py-12 relative z-10">
        <Button 
          onClick={() => navigate('/services')} 
          variant="outline" 
          className="mb-8 flex items-center gap-2 bg-transparent border-purple-500/30 text-purple-200 hover:bg-purple-900/20"
        >
          <ArrowLeft size={16} />
          Back to Services
        </Button>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service Info Column */}
          <div className="md:col-span-2">
            <div className="mb-6 flex items-center gap-3">
              {serviceInfo.type === 'bundle' && (
                <Badge className="bg-purple-600 hover:bg-purple-700 px-3 py-1 text-xs font-semibold">
                  Bundle
                </Badge>
              )}
              <h1 className="text-3xl md:text-4xl font-bold text-white">{serviceInfo.title}</h1>
            </div>
            
            <p className="text-gray-300 text-lg mb-8">{serviceInfo.description}</p>
            
            <div className="bg-[#232836]/50 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">Key Features</h2>
              <ul className="space-y-3">
                {serviceInfo.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-purple-400 shrink-0 mt-1" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Included Services for Bundles */}
            {serviceInfo.type === 'bundle' && serviceInfo.includedServices && (
              <div className="bg-[#232836]/50 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 mb-8">
                <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Package size={20} className="text-purple-400" />
                  Included Services
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {serviceInfo.includedServices.map(serviceId => {
                    const includedService = serviceData.find(s => s.id === serviceId);
                    return includedService ? (
                      <Card key={serviceId} className="bg-[#1E2332] border-purple-500/20 hover:border-purple-500/40 cursor-pointer transition-all duration-300" onClick={() => navigate(`/services/${serviceId}`)}>
                        <CardContent className="p-4">
                          <h3 className="text-white font-medium">{includedService.title}</h3>
                          <p className="text-gray-400 text-sm mt-1">{includedService.description.substring(0, 60)}...</p>
                        </CardContent>
                      </Card>
                    ) : null;
                  })}
                </div>
              </div>
            )}
            
            <div className="bg-[#232836]/50 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-white mb-4">What to Expect</h2>
              <p className="text-gray-300 mb-6">Our process is designed to be collaborative and efficient, ensuring you get exactly what you need to elevate your content. Here's what happens after you contact us:</p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                    <span className="text-purple-300 font-medium">1</span>
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Initial Consultation</h3>
                    <p className="text-gray-400">We'll discuss your specific needs, timeline, and expectations.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                    <span className="text-purple-300 font-medium">2</span>
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Proposal & Agreement</h3>
                    <p className="text-gray-400">You'll receive a detailed proposal outlining deliverables, timeline, and pricing.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                    <span className="text-purple-300 font-medium">3</span>
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Production Phase</h3>
                    <p className="text-gray-400">Our team works on your project with regular updates and check-ins.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                    <span className="text-purple-300 font-medium">4</span>
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Review & Refinement</h3>
                    <p className="text-gray-400">You'll review the deliverables and we'll make any necessary adjustments.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                    <span className="text-purple-300 font-medium">5</span>
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Final Delivery</h3>
                    <p className="text-gray-400">You receive the completed project and follow-up support as needed.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Pricing & Details Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-[#232836]/50 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-white mb-4">Service Details</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-purple-300 text-sm mb-1">Pricing</h3>
                  <p className="text-white font-medium">{serviceInfo.pricing}</p>
                </div>
                
                <div>
                  <h3 className="text-purple-300 text-sm mb-1 flex items-center gap-2">
                    <Clock size={16} className="text-purple-300" />
                    Turnaround Time
                  </h3>
                  <p className="text-white font-medium">{serviceInfo.turnaround}</p>
                </div>
                
                <div>
                  <h3 className="text-purple-300 text-sm mb-1 flex items-center gap-2">
                    <Gift size={16} className="text-purple-300" />
                    Deliverables
                  </h3>
                  <p className="text-white font-medium">{serviceInfo.deliverables}</p>
                </div>
                
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Request This Service
                </Button>
                
                <p className="text-sm text-gray-400 text-center">
                  Custom quotes available for specific requirements
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
