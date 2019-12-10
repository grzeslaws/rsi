import { Field, ArrayField } from "sparkson";
import { ObiektShort } from "./ObiektShort";

export class Obiekty {
  constructor(
    @ArrayField("results", ObiektShort) public results: ObiektShort[],
    @Field("count", true) public count?: number,
    @Field("next", true) public next?: string,
    @Field("previous", true) public previous?: string
  ) {}
}
