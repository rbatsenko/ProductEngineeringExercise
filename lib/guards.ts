import { CompanyItem, PersonItem } from "@models/ui";

export const isCompaniesData = (
  data: (CompanyItem | PersonItem)[]
): data is CompanyItem[] => data?.[0]?.type === "company";

export const isPersonsData = (
  data: (CompanyItem | PersonItem)[]
): data is PersonItem[] => data?.[0]?.type === "people";
