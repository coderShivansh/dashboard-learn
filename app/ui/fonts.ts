// app/fonts.ts (or any shared file where you define fonts)
import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // optional: define a CSS variable
});

export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'], // customize as needed
  variable: '--font-lusitana',
});
