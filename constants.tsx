
import React from 'react';
import { BibleBook } from './types';

export const BIBLE_BOOKS: BibleBook[] = [
  // Old Testament
  { name: 'Gênesis', chapters: 50, testament: 'OLD' },
  { name: 'Êxodo', chapters: 40, testament: 'OLD' },
  { name: 'Levítico', chapters: 27, testament: 'OLD' },
  { name: 'Números', chapters: 36, testament: 'OLD' },
  { name: 'Deuteronômio', chapters: 34, testament: 'OLD' },
  { name: 'Josué', chapters: 24, testament: 'OLD' },
  { name: 'Juízes', chapters: 21, testament: 'OLD' },
  { name: 'Rute', chapters: 4, testament: 'OLD' },
  { name: '1 Samuel', chapters: 31, testament: 'OLD' },
  { name: '2 Samuel', chapters: 24, testament: 'OLD' },
  { name: '1 Reis', chapters: 22, testament: 'OLD' },
  { name: '2 Reis', chapters: 25, testament: 'OLD' },
  { name: '1 Crônicas', chapters: 29, testament: 'OLD' },
  { name: '2 Crônicas', chapters: 36, testament: 'OLD' },
  { name: 'Esdras', chapters: 10, testament: 'OLD' },
  { name: 'Neemias', chapters: 13, testament: 'OLD' },
  { name: 'Ester', chapters: 10, testament: 'OLD' },
  { name: 'Jó', chapters: 42, testament: 'OLD' },
  { name: 'Salmos', chapters: 150, testament: 'OLD' },
  { name: 'Provérbios', chapters: 31, testament: 'OLD' },
  { name: 'Eclesiastes', chapters: 12, testament: 'OLD' },
  { name: 'Cânticos', chapters: 8, testament: 'OLD' },
  { name: 'Isaías', chapters: 66, testament: 'OLD' },
  { name: 'Jeremias', chapters: 52, testament: 'OLD' },
  { name: 'Lamentações', chapters: 5, testament: 'OLD' },
  { name: 'Ezequiel', chapters: 48, testament: 'OLD' },
  { name: 'Daniel', chapters: 12, testament: 'OLD' },
  { name: 'Oseias', chapters: 14, testament: 'OLD' },
  { name: 'Joel', chapters: 3, testament: 'OLD' },
  { name: 'Amós', chapters: 9, testament: 'OLD' },
  { name: 'Obadias', chapters: 1, testament: 'OLD' },
  { name: 'Jonas', chapters: 4, testament: 'OLD' },
  { name: 'Miqueias', chapters: 7, testament: 'OLD' },
  { name: 'Naum', chapters: 3, testament: 'OLD' },
  { name: 'Habacuque', chapters: 3, testament: 'OLD' },
  { name: 'Sofonias', chapters: 3, testament: 'OLD' },
  { name: 'Ageu', chapters: 2, testament: 'OLD' },
  { name: 'Zacarias', chapters: 14, testament: 'OLD' },
  { name: 'Malaquias', chapters: 4, testament: 'OLD' },
  // New Testament
  { name: 'Mateus', chapters: 28, testament: 'NEW' },
  { name: 'Marcos', chapters: 16, testament: 'NEW' },
  { name: 'Lucas', chapters: 24, testament: 'NEW' },
  { name: 'João', chapters: 21, testament: 'NEW' },
  { name: 'Atos', chapters: 28, testament: 'NEW' },
  { name: 'Romanos', chapters: 16, testament: 'NEW' },
  { name: '1 Coríntios', chapters: 16, testament: 'NEW' },
  { name: '2 Coríntios', chapters: 13, testament: 'NEW' },
  { name: 'Gálatas', chapters: 6, testament: 'NEW' },
  { name: 'Efésios', chapters: 6, testament: 'NEW' },
  { name: 'Filipenses', chapters: 4, testament: 'NEW' },
  { name: 'Colossenses', chapters: 4, testament: 'NEW' },
  { name: '1 Tessalonicenses', chapters: 5, testament: 'NEW' },
  { name: '2 Tessalonicenses', chapters: 3, testament: 'NEW' },
  { name: '1 Timóteo', chapters: 6, testament: 'NEW' },
  { name: '2 Timóteo', chapters: 4, testament: 'NEW' },
  { name: 'Tito', chapters: 3, testament: 'NEW' },
  { name: 'Filemom', chapters: 1, testament: 'NEW' },
  { name: 'Hebreus', chapters: 13, testament: 'NEW' },
  { name: 'Tiago', chapters: 5, testament: 'NEW' },
  { name: '1 Pedro', chapters: 5, testament: 'NEW' },
  { name: '2 Pedro', chapters: 3, testament: 'NEW' },
  { name: '1 João', chapters: 5, testament: 'NEW' },
  { name: '2 João', chapters: 1, testament: 'NEW' },
  { name: '3 João', chapters: 1, testament: 'NEW' },
  { name: 'Judas', chapters: 1, testament: 'NEW' },
  { name: 'Apocalipse', chapters: 22, testament: 'NEW' },
];

export const PIX_DATA = {
  phone: '(84) 9 9175-4122',
  holder: 'Soneide Paiva do Nascimento',
  price: 'R$ 29,90'
};

export const CHRISTIAN_EMOJIS = ['🙏', '🙌', '✝️', '🕊️', '📖', '❤️', '🔥', '🦁', '⛪', '✨', '🌅', '📜'];

export const LOGO_SVG = (
  <svg viewBox="0 0 400 300" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <path d="M50,220 Q200,280 350,220 L350,230 Q200,290 50,230 Z" fill="none" stroke="#000" strokeWidth="2" />
    <path d="M50,230 Q200,270 350,230" fill="none" stroke="#000" strokeWidth="2" />
    <path d="M200,230 L200,180" stroke="#000" strokeWidth="1" />
    <circle cx="180" cy="120" r="25" fill="#3b82f6" />
    <circle cx="210" cy="140" r="18" fill="#3b82f6" />
    <circle cx="230" cy="160" r="12" fill="#3b82f6" />
    <path d="M250,130 Q270,100 280,130 T300,100" fill="none" stroke="#f97316" strokeWidth="10" strokeLinecap="round" />
  </svg>
);
