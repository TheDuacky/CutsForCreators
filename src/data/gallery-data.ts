
import { GalleryItem } from '@/components/services/ServiceGallery';

// Sample gallery items for each service
export const galleryData: Record<string, GalleryItem[]> = {
  'video-editing': [
    {
      id: 've-1',
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      title: 'Professional Tech Review Edit',
      description: 'A complete video edit for a tech review channel, including color grading, transitions, and lower thirds.',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 've-2',
      type: 'image',
      thumbnail: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
      title: 'Before/After Color Grading',
      description: 'Example of our professional color grading services that enhance visual appeal and establish mood.',
      url: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d'
    },
    {
      id: 've-3',
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
      title: 'Seamless Transition Effects',
      description: 'A showcase of our smooth transition effects that keep viewers engaged.',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 've-4',
      type: 'image',
      thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
      title: 'Custom Lower Thirds',
      description: 'Examples of custom lower thirds designed to match your brand identity.',
      url: 'https://images.unsplash.com/photo-1518770660439-4636190af475'
    }
  ],
  'youtube-optimization': [
    {
      id: 'yo-1',
      type: 'image',
      thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
      title: 'Custom Thumbnail Design',
      description: 'High-impact thumbnail design that increases click-through rates.',
      url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158'
    },
    {
      id: 'yo-2',
      type: 'image',
      thumbnail: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
      title: 'SEO Optimization Results',
      description: 'Analytics showing the impact of our SEO optimization services.',
      url: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7'
    },
    {
      id: 'yo-3',
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
      title: 'Channel Growth Case Study',
      description: 'Before and after results of our YouTube optimization strategy.',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    }
  ],
  'motion-graphics': [
    {
      id: 'mg-1',
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
      title: 'Custom Intro Animation',
      description: 'Professional intro animation designed for a gaming channel.',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 'mg-2',
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      title: 'Animated Infographics',
      description: 'Data visualization through animated infographics that simplify complex information.',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 'mg-3',
      type: 'image',
      thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
      title: 'Logo Animation Concepts',
      description: 'Various animation concepts for brand logos.',
      url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6'
    }
  ],
  'content-planning': [
    {
      id: 'cp-1',
      type: 'image',
      thumbnail: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
      title: 'Content Calendar Example',
      description: 'A sample content calendar we created for a lifestyle channel.',
      url: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d'
    },
    {
      id: 'cp-2',
      type: 'image',
      thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
      title: 'Audience Growth Strategy',
      description: 'Visualization of an audience growth strategy implemented for a client.',
      url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158'
    }
  ],
  'special-effects': [
    {
      id: 'se-1',
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
      title: 'Green Screen Compositing',
      description: 'Example of our professional green screen compositing work.',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 'se-2',
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      title: 'Particle Effects Demo',
      description: 'Showcase of custom particle effects for dynamic video content.',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 'se-3',
      type: 'image',
      thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
      title: 'Before/After VFX Example',
      description: 'Comparison showing the impact of our visual effects.',
      url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6'
    }
  ],
  'analytics-review': [
    {
      id: 'ar-1',
      type: 'image',
      thumbnail: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
      title: 'Analytics Dashboard',
      description: 'Sample analytics dashboard showing key metrics we track.',
      url: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d'
    },
    {
      id: 'ar-2',
      type: 'image',
      thumbnail: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
      title: 'Growth Trend Analysis',
      description: 'Visualization of subscriber and engagement growth over time.',
      url: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7'
    }
  ],
  // Bundle gallery items show examples from included services
  'starter-bundle': [
    {
      id: 'sb-1',
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      title: 'Complete Channel Setup',
      description: 'Before and after transformation of a new YouTube channel with our starter bundle.',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 'sb-2',
      type: 'image',
      thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
      title: 'Thumbnail Design Collection',
      description: 'A set of custom thumbnails created as part of our starter bundle.',
      url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158'
    },
    {
      id: 'sb-3',
      type: 'image',
      thumbnail: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
      title: 'Content Strategy Document',
      description: 'Example of our comprehensive content strategy documentation.',
      url: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d'
    }
  ],
  'growth-bundle': [
    {
      id: 'gb-1',
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
      title: 'Custom Motion Graphics Package',
      description: 'Complete branded motion graphics package created for a client.',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 'gb-2',
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      title: 'Special Effects Integration',
      description: 'Showcase of special effects created as part of the growth bundle.',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 'gb-3',
      type: 'image',
      thumbnail: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
      title: 'Analytics Growth Report',
      description: 'Example of an analytics report showing channel growth after implementing our strategies.',
      url: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7'
    }
  ],
  'ultimate-bundle': [
    {
      id: 'ub-1',
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      title: 'Full Channel Transformation',
      description: 'Case study of a channel completely transformed with our ultimate bundle.',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 'ub-2',
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
      title: 'Custom Animation Showcase',
      description: 'Collection of custom animations developed for a client.',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      id: 'ub-3',
      type: 'image',
      thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
      title: 'Before/After Channel Branding',
      description: 'Visual comparison of channel branding before and after our services.',
      url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6'
    },
    {
      id: 'ub-4',
      type: 'image',
      thumbnail: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
      title: 'Complete Growth Analytics',
      description: 'Comprehensive analytics dashboard showing the impact of our ultimate bundle.',
      url: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7'
    }
  ]
};
