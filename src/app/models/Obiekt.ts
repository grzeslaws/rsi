import { Field, ArrayField } from "sparkson";
import { CechyObiektu } from "./CechyObiektu";
import { System } from "./System";

export class Obiekt {
  constructor(
    @Field("id_obiektu") public idObiektu: number,
    @ArrayField("cechyobiektu", CechyObiektu, true) public cechyObiektu?: CechyObiektu[],
    @ArrayField("systemy", System, true) public systemy?: System[],
    @Field("nazwa_obiektu", true) public nazwaObiektu?: string,
    @Field("opis_obiektu", true) public opisObiektu?: string,
    @Field("typ_obiektu", true) public typObiektu?: string
  ) {}
}
