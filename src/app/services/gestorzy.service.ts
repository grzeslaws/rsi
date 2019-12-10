import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, debounce, distinctUntilChanged, switchMap } from "rxjs/operators";
import { parse } from "sparkson";
import { Observable, BehaviorSubject, timer } from "rxjs";
import { Gestorzy } from "../models/Gestorzy";
import endpoints from "src/endpoints";

@Injectable({
  providedIn: "root"
})
export class GestorzyService {
  constructor(private http: HttpClient) {}

  getSystems(
    page: number = 1,
    searchTerm: { term: string; debounceArg: number }
  ): Observable<Gestorzy> {
    return this.http
      .get<Gestorzy>(endpoints.gestorzy(page, searchTerm.term))
      .pipe(map(json => parse(Gestorzy, json)));
  }

  searchGestorzy(
    term: BehaviorSubject<{ term: string; debounceArg: number }>,
    page: number = 1
  ): Observable<Gestorzy> | null {
    return term.pipe(
      debounce(res => timer(res.debounceArg)),
      distinctUntilChanged(),
      switchMap(searchTerm => this.getSystems(page, searchTerm))
    );
  }
}
