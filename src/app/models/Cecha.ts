import { Field, ArrayField } from "sparkson";
import { AktPrawny } from "./AktPrawny";
import { Obiekt } from "./Obiekt";

export class Cecha {
  constructor(
    @Field("id_cechy") public idCechy: number,
    @Field("nazwa_cechy") public nazwaCechy: string,
    @Field("definicja_cechy") public definicjaCechy: string,
    @ArrayField("obiekty", Obiekt, true) public obiekty?: Obiekt[],
    @ArrayField("aktyprawne", Number, true) public aktyprawne?: number[],
  ) {}
}
