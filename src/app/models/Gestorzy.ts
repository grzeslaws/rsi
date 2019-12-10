import { Field, ArrayField } from "sparkson";
import { Gestor } from "./Gestor";
import { System } from "./System";

export class Gestorzy {
  constructor(
    @ArrayField("results", Gestor) public results: Gestor[],
    @Field("count", true) public count?: number,
    @Field("next", true) public next?: string,
    @Field("previous", true) public previous?: string
  ) {}
}
