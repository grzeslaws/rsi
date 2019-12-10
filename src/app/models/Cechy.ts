import { Field, ArrayField } from "sparkson";
import { Cecha } from "./Cecha";

export class Cechy {
  constructor(
    @ArrayField("results", Cecha) public results: Cecha[],
    @Field("count", true) public count?: number,
    @Field("next", true) public next?: string,
    @Field("previous", true) public previous?: string
  ) {}
}
