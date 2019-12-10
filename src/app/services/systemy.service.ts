import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
  map,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  debounce,
  shareReplay,
  tap,
  delay
} from "rxjs/operators";
import { Observable, BehaviorSubject, of, timer } from "rxjs";
import endpoints from "src/endpoints";
import { parse } from "sparkson";
import { Systemy } from "../models/Systemy";
import { SystemDetails } from "../models/SystemDetails";

@Injectable({
  providedIn: "root"
})
export class SystemyService {
  constructor(private http: HttpClient) {}

  getSystems(
    page: number = 1,
    searchTerm: { term: string; debounceArg: number }
  ): Observable<Systemy> {
    return this.http
      .get<Systemy>(endpoints.systemy(page, searchTerm.term))
      .pipe(map(json => parse(Systemy, json)));
  }

  getSystem(idSystemu: string): Observable<SystemDetails> {
    return this.http
      .get<SystemDetails>(endpoints.system(idSystemu))
      .pipe(map(json => parse(SystemDetails, json)));
  }

  searchSystems(
    term: BehaviorSubject<{ term: string; debounceArg: number }>,
    page: number = 1
  ): Observable<Systemy> | null {
    return term.pipe(
      debounce(res => timer(res.debounceArg)),
      distinctUntilChanged(),
      switchMap(searchTerm => this.getSystems(page, searchTerm))
    );
  }
}
