import { Field, ArrayField } from "sparkson";
import { AktPrawny } from "./AktPrawny";
import { Obiekt } from "./Obiekt";

export class SystemDetails {
  constructor(
    @Field("id_systemu") public idSystemu: number,
    @Field("kod_rsi", true) public kodRsi?: string,
    @Field("nazwa_systemu", true) public nazwaSystemu?: string,
    @Field("nazwa_systemu_skr", true) public nazwaSystemuSkr?: string,
    @Field("sposob_prowadzenia_systemu", true)
    public sposobProwadzeniaSystemu?: string,
    @Field("czy_centralny", true) public czyCentralny?: boolean,
    @Field("czy_rozproszony", true) public czyRozproszony?: boolean,
    @Field("poziom_gromadzenia_danych", true)
    public poziomGromadzeniaDanych?: string,
    @Field("czy_wojewodztwo", true) public czyWojewodztwo?: boolean,
    @Field("czy_powiat", true) public czyPowiat?: boolean,
    @Field("czy_gmina", true) public czyGmina?: boolean,
    @Field("czy_inny", true) public czyInny?: boolean,
    @Field("zasieg_systemu", true) public zasiegSystemu?: string,
    @Field("czy_krajowy", true) public czyKrajowy?: boolean,
    @Field("czy_lokalny", true) public czyLokalny?: boolean,
    @Field("cel_systemu", true) public celSystemu?: string,
    @Field("forma_prowadzenia_systemu", true)
    public formaProwadzeniaSystemu?: string,
    @Field("stan_wdrozenia_systemu", true) public stanWdrozeniaSystemu?: string,
    @Field("planowany_termin_wdrozenia", true)
    public planowanyTerminWdrozenia?: string,
    @Field("zmiany_planowane", true) public zmianyPlanowane?: string,
    @Field("zrodla_danych_czestotliwosc_aktualizacji", true)
    public zrodlaDanychCzestotliwoscAktualizacji?: string,
    @Field("termin_formy_udostepniania_danych", true)
    public terminFormyUdostepnianiaDanych?: string,
    @Field("gestor", true) public gestor?: string,
    @Field("metadana_wersja", true) public metadanaWersja?: string,
    @Field("metadana_status", true) public metadanaStatus?: string,
    @Field("metadana_utworzony_data", true)
    public metadanaUtworzonyData?: string,
    @Field("metadana_modyfikowany_data", true)
    public metadanaModyfikowanyData?: string,
    @ArrayField("aktyprawne", AktPrawny)
    public aktyprawne?: AktPrawny[],
    @ArrayField("obiekty", Obiekt) public obiekty?: Obiekt[]
  ) {}
}
