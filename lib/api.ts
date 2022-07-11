import axios from "axios";
import { Company, Person } from "@models/data";

export const API_URL = process.env.API_URL!;

export const fetchPersons = async (): Promise<Person[]> => {
  const {
    data: { data: persons },
  } = await axios.get<{ data: Person[] }>(API_URL, {
    params: {
      tabId: "person",
    },
  });

  return persons;
};

export const fetchCompanies = async (): Promise<Company[]> => {
  const {
    data: { data: companies },
  } = await axios.get<{ data: Company[] }>(API_URL, {
    params: {
      tabId: "company",
    },
  });

  return companies;
};
