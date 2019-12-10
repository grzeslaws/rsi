import { environment } from "./environments/environment";

const endpoints = {
  systemy: (page: number, term: string) =>
    `${environment.baseUrl}rsisystemy?page=${page}&search=${term}`,
  gestorzy: (page: number, term: string) =>
    `${environment.baseUrl}rsigestorzy?page=${page}&search=${term}`,
  obiekty: (page: number, term: string) =>
    `${environment.baseUrl}rsiobiekty?page=${page}&search=${term}`,
  cechy: (page: number, term: string) =>
    `${environment.baseUrl}rsicechy?page=${page}&search=${term}`,
  system: (id: string) => `${environment.baseUrl}rsisystemy/${id}`
};

export default endpoints;
