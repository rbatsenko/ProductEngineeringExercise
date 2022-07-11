import { Board } from "@models/ui";

export type BoardType = "company" | "people";

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
