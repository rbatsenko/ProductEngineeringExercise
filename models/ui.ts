import { BoardType } from "@lib/constants";
import { Company, Person } from "./data";

export type Board = {
  id: string;
  label: string;
};

export type CompanyItem = Company & {
  totalUsers: number;
  totalComments: number;
  type: BoardType;
};

export type PersonItem = Person & { type: BoardType };
