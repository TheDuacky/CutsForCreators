export interface Video {
  thumbnail: string;
  title: string;
  views: string;
  videoUrl: string;  // New field for video link
  creator: {
    name: string;
    image: string;
    subscribers: string;
    profileUrl: string;  // New field for creator profile link
  };
}

export const creators = [
  {
    name: "Gaming Legends",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    subscribers: "2.5M+",
    profileUrl: "https://youtube.com/@gaminglegends",
    videos: [
      {
        thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e",
        title: "Epic Gaming Moments 2024",
        views: "1.2M views",
        videoUrl: "https://youtube.com/watch?v=gaming2024"
      },
      {
        thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420",
        title: "Gaming Setup Tour",
        views: "800K views",
        videoUrl: "https://youtube.com/watch?v=setup2024"
      },
      {
        thumbnail: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8",
        title: "Best Gaming Moments",
        views: "950K views",
        videoUrl: "https://youtube.com/watch?v=best2024"
      }
    ]
  },
  {
    name: "Tech Reviews Daily",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    subscribers: "1M+",
    profileUrl: "https://youtube.com/@techreviews",
    videos: [
      {
        thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
        title: "Latest Tech Review 2024",
        views: "500K views",
        videoUrl: "https://youtube.com/watch?v=tech2024"
      },
      {
        thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
        title: "Tech News Roundup",
        views: "300K views",
        videoUrl: "https://youtube.com/watch?v=news2024"
      },
      {
        thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
        title: "Gadget Comparison",
        views: "400K views",
        videoUrl: "https://youtube.com/watch?v=gadget2024"
      }
    ]
  },
  {
    name: "Creative Tutorials",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    subscribers: "800K+",
    profileUrl: "https://youtube.com/@creative",
    videos: [
      {
        thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279",
        title: "Creative Masterclass",
        views: "300K views",
        videoUrl: "https://youtube.com/watch?v=creative2024"
      },
      {
        thumbnail: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd",
        title: "Tutorial Series",
        views: "250K views",
        videoUrl: "https://youtube.com/watch?v=tutorial2024"
      },
      {
        thumbnail: "https://images.unsplash.com/photo-1505238680356-667803448bb6",
        title: "Behind the Scenes",
        views: "200K views",
        videoUrl: "https://youtube.com/watch?v=behind2024"
      }
    ]
  }
];

// Transform the data to create a flat array of videos with creator information
export const allVideos: Video[] = creators.flatMap(creator => 
  creator.videos.map(video => ({
    ...video,
    creator: {
      name: creator.name,
      image: creator.image,
      subscribers: creator.subscribers,
      profileUrl: creator.profileUrl
    }
  }))
);

export default creators;