export interface IDeteil {
  id: string;
  name: string;
  summary: string;
  genres: string[];
  language: string;
  premiered: string;
  rating: {
    average: number;
  };
  network: {
    name: string;
    country: {
      name: string;
    };
  };
  image: {
    medium: string;
  };

}
