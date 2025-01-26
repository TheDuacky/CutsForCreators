export interface ContentType {
  id: string;
  name: string;
  description: string;
  icon: string;
  examples: Array<{
    thumbnail: string;
    title: string;
    views: string;
    creator: {
      name: string;
      image: string;
      subscribers: string;
    }
  }>;
}

export const CAROUSEL_TIMING = 3000; // 3 seconds

export const contentTypes: ContentType[] = [
  {
    id: "video-essays",
    name: "Video Essays",
    description: "In-depth analysis and storytelling",
    icon: "📚",
    examples: [
      {
        thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728",
        title: "The Art of Storytelling",
        views: "2.1M views",
        creator: {
          name: "Essay Masters",
          image: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
          subscribers: "1.2M+"
        }
      },
      {
        thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4",
        title: "Film Theory Explained",
        views: "1.8M views",
        creator: {
          name: "Cinema Theory",
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
          subscribers: "900K+"
        }
      }
    ]
  },
  {
    id: "short-films",
    name: "Short Films",
    description: "Cinematic storytelling in minutes",
    icon: "🎬",
    examples: [
      {
        thumbnail: "https://images.unsplash.com/photo-1500210557239-c0e284927505",
        title: "The Last Light",
        views: "3.4M views",
        creator: {
          name: "Film Collective",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
          subscribers: "2.1M+"
        }
      },
      {
        thumbnail: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9",
        title: "Urban Stories",
        views: "2.8M views",
        creator: {
          name: "City Films",
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
          subscribers: "1.8M+"
        }
      }
    ]
  },
  {
    id: "tutorials",
    name: "Tutorials",
    description: "Step-by-step learning content",
    icon: "📝",
    examples: [
      {
        thumbnail: "https://images.unsplash.com/photo-1587620962725-abab7fe55159",
        title: "Advanced Editing Techniques",
        views: "1.5M views",
        creator: {
          name: "Edit Pro",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
          subscribers: "750K+"
        }
      },
      {
        thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
        title: "Color Grading Masterclass",
        views: "980K views",
        creator: {
          name: "Color Masters",
          image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef",
          subscribers: "620K+"
        }
      }
    ]
  }
];