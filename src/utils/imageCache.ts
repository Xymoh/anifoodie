import { ImageSourcePropType } from 'react-native';

// Simple in-memory cache for image sources
class ImageCache {
  private cache = new Map<string, ImageSourcePropType>();
  private maxSize = 100; // Maximum number of cached images

  get(key: string): ImageSourcePropType | null {
    return this.cache.get(key) || null;
  }

  set(key: string, source: ImageSourcePropType): void {
    // If cache is full, remove oldest entry
    if (this.cache.size >= this.maxSize) {
      const firstKey = this.cache.keys().next().value;
      if (firstKey) {
        this.cache.delete(firstKey);
      }
    }
    this.cache.set(key, source);
  }

  has(key: string): boolean {
    return this.cache.has(key);
  }

  clear(): void {
    this.cache.clear();
  }
}

export const imageCache = new ImageCache();
