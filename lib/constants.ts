import { Board } from "@models/ui";

export enum BoardType {
  Company = "company",
  People = "people",
}

export const boards: Record<BoardType, Board> = {
  company: {
    id: "company",
    label: "Company",
  },
  people: {
    id: "people",
    label: "People",
  },
};
