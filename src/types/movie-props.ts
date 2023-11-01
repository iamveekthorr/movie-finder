export type MovieProps = {
  id: string;
  name: string;
  image: Record<string, string>;
  summary: string;
  url: string;
  languages: string;
  country: Record<string, string>;
  rating: Record<string, string>;
  type: string;
  genres: string[];
};
