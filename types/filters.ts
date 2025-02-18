export interface ProductFilters {
  active?: boolean;
  bestSeller?: boolean;
  color?: string | {};
  category?: { slug: string | number};
}
