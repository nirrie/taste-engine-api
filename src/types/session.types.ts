export type TasteProfile = {
  soft: number;
  structured: number;
};

export type Session = {
  id: string;
  createdAt: string;
  profile: {
    soft: number;
    structured: number;
  };
};

export type ComparisonItem = {
  id: string;
  title: string;
  imageUrl: string;
  tags: Array<keyof TasteProfile>;
};
