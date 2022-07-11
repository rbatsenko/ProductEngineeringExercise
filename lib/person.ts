import { Person } from "@models/data";
import { PersonItem } from "@models/ui";

export const getPersonData = (persons: Person[]): PersonItem[] =>
  persons.map((person) => ({
    ...person,
    type: "people",
  }));

export const transformPersonDataResponse = (persons: Person[]): Person[] =>
  persons.map((person) => ({
    ...person,
    document_created: Number(person.document_created),
    collaborator_invited: Number(person.collaborator_invited),
    comment_created: Number(person.comment_created),
  }));
