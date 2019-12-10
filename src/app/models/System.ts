import { Field } from "sparkson";

export class System {
  constructor(
    @Field("id_systemu") public idSystemu: number,
    @Field("nazwa_systemu") public nazwaSystemu: string,
    @Field("nazwa_systemu_skr") public nazwaSystemuSkr: string,
    @Field("gestor") public gestor: string


  ) {}
}
