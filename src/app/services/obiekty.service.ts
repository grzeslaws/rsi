import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, debounce, distinctUntilChanged, switchMap, delay } from "rxjs/operators";
import { parse } from "sparkson";
import { Observable, BehaviorSubject, timer } from "rxjs";
import endpoints from "src/endpoints";
import { Obiekty } from "../models/Obiekty";

@Injectable({
  providedIn: "root"
})
export class ObiektyService {
  constructor(private http: HttpClient) {}

  getObiekty(
    page: number = 1,
    searchTerm: { term: string; debounceArg: number }
  ): Observable<Obiekty> {
    return this.http
      .get<Obiekty>(endpoints.obiekty(page, searchTerm.term))
      .pipe(map(json => parse(Obiekty, json)));
  }

  searchObiekty(
    term: BehaviorSubject<{ term: string; debounceArg: number }>,
    page: number = 1
  ): Observable<Obiekty> | null {
    return term.pipe(
      debounce(res => timer(res.debounceArg)),
      distinctUntilChanged(),
      switchMap(searchTerm => this.getObiekty(page, searchTerm))
    );
  }
}
