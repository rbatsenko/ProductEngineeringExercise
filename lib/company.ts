import { Company, Person } from "@models/data";
import { CompanyItem } from "@models/ui";
import { BoardType } from "./constants";

export const getCompanyData = (
  companies: Company[],
  persons: Person[]
): CompanyItem[] =>
  companies.map((company) => {
    const users = persons.filter((person) => person.company_id === company.id);
    const totalComments = users.reduce(
      (sum, user) => sum + Number(user.comment_created),
      0
    );

    return {
      ...company,
      totalComments,
      totalUsers: users.length,
      type: BoardType.Company,
    };
  });
