
export enum AppView {
  HOME = 'HOME',
  BIBLE = 'BIBLE',
  MEDIA = 'MEDIA',
  JOURNAL = 'JOURNAL',
  LIVE = 'LIVE',
  ADMIN = 'ADMIN',
  SUBSCRIPTION = 'SUBSCRIPTION',
  PROFILE = 'PROFILE'
}

export interface User {
  id: string;
  name: string;
  email: string;
  photo: string;
  birthDate?: string;
  role: 'ADMIN' | 'MEMBER';
}

export interface JournalEntry {
  id: string;
  date: string;
  content: string;
  type: 'TEXT' | 'AUDIO';
  audioUrl?: string;
}

export interface BibleBook {
  name: string;
  chapters: number;
  testament: 'OLD' | 'NEW';
}

export interface MediaItem {
  id: string;
  title: string;
  type: 'VIDEO' | 'AUDIO' | 'IMAGE' | 'PDF';
  url: string;
  category: string;
}
