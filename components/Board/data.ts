import { CompanyItem, PersonItem } from "@models/ui";

export const companyColumns = [
  {
    title: "Signed Up",
    predicate: (company: CompanyItem) =>
      !!company.signed_up &&
      company.totalUsers < 2 &&
      company.totalComments < 3,
  },
  {
    title: "At Least 2 Users",
    predicate: (company: CompanyItem) =>
      company.totalUsers >= 2 && company.totalComments < 3,
  },
  {
    title: "At Least 3 Comments",
    predicate: (company: CompanyItem) => company.totalComments >= 3,
  },
];

export const peopleColumns = [
  {
    title: "Signed Up",
    predicate: (person: PersonItem) =>
      !!person.signed_up &&
      person.document_created === 0 &&
      person.collaborator_invited === 0 &&
      person.comment_created === 0,
  },
  {
    title: "Created a Document",
    predicate: (person: PersonItem) =>
      person.document_created > 0 &&
      person.collaborator_invited === 0 &&
      person.comment_created === 0,
  },
  {
    title: "Invited a Collaborator",
    predicate: (person: PersonItem) =>
      person.document_created > 0 &&
      person.collaborator_invited > 0 &&
      person.comment_created === 0,
  },
  {
    title: "Commented on a document",
    predicate: (person: PersonItem) => person.comment_created > 0,
  },
];
