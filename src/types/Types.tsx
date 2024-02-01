export type ProjectType = {
  id: string;
  title: string;
  mainImage: string;
  virtualImages?: string[];
  tecnicImages?: string[];
  realImages?: string[];
  description: string;
  category: string;
  pdf: string;
  color: string;
  video?: string;
};
