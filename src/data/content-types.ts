export interface ContentType {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export const CAROUSEL_INTERVAL = 1500; // Changed from 3000 to 1500 milliseconds

export const contentTypes: ContentType[] = [
  {
    id: 'video-essays',
    title: 'Video Essays',
    description: 'In-depth analysis and storytelling',
    icon: '',
    color: 'purple-400'
  },
  {
    id: 'short-films',
    title: 'Short Films',
    description: 'Cinematic storytelling',
    icon: '',
    color: 'purple-400'
  },
  {
    id: 'tutorials',
    title: 'Tutorials',
    description: 'Educational content',
    icon: '',
    color: 'purple-400'
  },
  {
    id: 'documentaries',
    title: 'Documentaries',
    description: 'Real-world stories',
    icon: '',
    color: 'purple-400'
  }
];