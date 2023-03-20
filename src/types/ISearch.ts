export interface ISearch {
show:{
    id: string;
    name: string;
    summary: string;
    genres: string[];
    runtime: string;
    language: string;
    premiered: string ;
    rating: {
      average: number;
    };
    network: {
      name: string;
      country: {
        name: string;
        code: string;
      };
    } | null;
    image: {
      medium: string;
    };
  };
}

