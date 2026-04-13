export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  bio?: string;
  followers: string;
  following: string;
  likes: string;
}

export interface Post {
  id: string;
  title: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  likes: string;
  category: string;
  aspectRatio: 'square' | 'portrait' | 'landscape' | 'tall';
  tags?: string[];
  date?: string;
  readTime?: string;
  content?: string;
}

export interface Comment {
  id: string;
  author: string;
  avatar: string;
  content: string;
  time: string;
  likes: number;
}
