import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface Segment {
  title: string;
  description: string;
  icon: LucideIcon;
  id: string;
}

export interface Partner {
  name: string;
  role: string;
}

export interface Pillar {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Leader {
  name: string;
  title: string;
  bio: string;
}

export interface Insight {
  title: string;
  category: string;
  date: string;
  image: string;
}