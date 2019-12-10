import { Field, ArrayField } from "sparkson";
import { AktPrawny } from "./AktPrawny";

export class CechyObiektu {
  constructor(
    @Field("id_cechy") public idCechy: number,
    @Field("nazwa_cechy", true) public nazwaCechy?: string,
    @Field("definicja_cechy", true) public definicjaCechy?: string,
    @Field("metadana_wersja", true) public metadanaWersja?: string,
    @Field("metadana_status", true) public metadanaStatus?: string,
    @Field("metadana_utworzony_data", true)
    public metadanaUtworzonyData?: string,
    @Field("metadana_modyfikowany_data", true)
    public metadanaModyfikowanyData?: string,
    @ArrayField("aktyprawne", AktPrawny, true) public aktyprawne?: AktPrawny[]
  ) {}
}
