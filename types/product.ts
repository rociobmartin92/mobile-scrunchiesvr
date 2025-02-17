// types/product.ts

export interface Product {
  id: number;
  documentId: string;
  productName: string;
  description: string;
  active: boolean;
  price: number;
  isAvaliable: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  bestSeller: boolean;
  images: { id: number; url: string }[];
  category: {categoryName: string, slug: string  }
  color: string
  favorite?: boolean
}
