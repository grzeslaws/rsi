import { Field, ArrayField } from "sparkson";
import { System } from "./System";

export class Gestor {
  constructor(
    @Field("id_gestor") public idGestor: number,
    @Field("nazwa") public nazwa: string,
    @ArrayField("systemy", System) public systemy: System[]
  ) {}
}
