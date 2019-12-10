import { Field } from "sparkson";

export class CechyObiektuShort {
  constructor(
    @Field("id_cechy") public idCechy: number,
    @Field("nazwa_cechy") public nazwaCechy: string
  ) {}
}
