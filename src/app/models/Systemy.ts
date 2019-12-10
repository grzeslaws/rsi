import { Field, ArrayField } from "sparkson";
import { System } from "./System";

export class Systemy {
  constructor(
    @ArrayField("results", System) public results: System[],
    @Field("count", true) public count?: number,
    @Field("next", true) public next?: string,
    @Field("previous", true) public previous?: string
  ) {}
}
