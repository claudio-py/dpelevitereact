// src/components/Gallery.ts
import { Image } from "react-grid-gallery";

if (typeof (window as any).global === 'undefined') {
  (window as any).global = window;
}


export interface CustomImage extends Image {
  original: string;
}

export const images: CustomImage[] = [
  {
    src: "./galeria/img1.jpg",
    original: "./galeria/img1.jpg",
    width: 162.5,
    height: 108.3
  },
  {
    src: "./galeria/img2.jpg",
    original: "./galeria/img2.jpg",
    width: 162.5,
    height: 108.3
  },
  {
    src: "./galeria/img3.jpg",
    original: "./galeria/img3.jpg",
    width: 162.5,
    height: 108.3
  },
  {
    src: "./galeria/img5.jpg",
    original: "./galeria/img5.jpg",
    width: 162.5,
    height: 108.3
  },
  {
    src: "./galeria/img6.jpg",
    original: "./galeria/img6.jpg",
    width: 162.5,
    height: 108.3
  },
  {
    src: "./galeria/img8.jpg",
    original: "./galeria/img8.jpg",
    width: 162.5,
    height: 108.3
  }
];