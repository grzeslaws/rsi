import { Field } from "sparkson";

export class AktPrawny {
  constructor(
    @Field("id_akt", true) public idAkt?: number,
    @Field("nazwa", true) public nazwa?: string,
    @Field("miejsce_publikacji", true) public miejscePublikacji?: string,
    @Field("typ", true) public typ?: string,
    @Field("rodzaj", true) public rodzaj?: string
  ) {}
}
