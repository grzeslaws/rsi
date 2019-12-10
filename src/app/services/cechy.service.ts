import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Cechy } from "../models/Cechy";
import { Observable, BehaviorSubject, timer } from "rxjs";
import endpoints from "src/endpoints";
import {
  map,
  debounce,
  distinctUntilChanged,
  switchMap,
  tap,
  delay
} from "rxjs/operators";
import { parse } from "sparkson";

@Injectable({
  providedIn: "root"
})
export class CechyService {
  constructor(private http: HttpClient) {}

  getCechy(
    page: number = 1,
    searchTerm: { term: string; debounceArg: number }
  ): Observable<Cechy> {
    return this.http
      .get<Cechy>(endpoints.cechy(page, searchTerm.term))
      .pipe(map(json => parse(Cechy, json)));
  }

  searchCechy(
    term: BehaviorSubject<{ term: string; debounceArg: number }>,
    page: number = 1
  ): Observable<Cechy> | null {
    return term.pipe(
      debounce(res => timer(res.debounceArg)),
      distinctUntilChanged(),
      switchMap(searchTerm => this.getCechy(page, searchTerm))
    );
  }
}
