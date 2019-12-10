import { Field, ArrayField } from "sparkson";
import { CechyObiektuShort } from "./CechyObiektuShort";
import { System } from "./System";

export class ObiektShort {
  constructor(
    @Field("id_obiektu") public idObiektu: number,
    @Field("nazwa_obiektu", true) public nazwaObiektu?: string,
    @Field("typ_obiektu", true) public typObiektu?: string,
    @ArrayField("cechyobiektu", CechyObiektuShort, true)
    public cechyObiektu?: CechyObiektuShort[],
    @ArrayField("systemy", System, true) public systemy?: System[]
  ) {}
}
