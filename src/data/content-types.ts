export interface ContentType {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export const CAROUSEL_INTERVAL = 3000; // Reset to 3000ms for smooth transitions

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