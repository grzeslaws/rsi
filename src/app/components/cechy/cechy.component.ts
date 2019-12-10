import { Component, OnInit, HostBinding, OnDestroy } from "@angular/core";
import { Cechy } from "src/app/models/Cechy";
import { CechyService } from "src/app/services/cechy.service";
import navigation from "src/navigation";
import { SubSink } from "SubSink";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: "app-cechy",
  templateUrl: "./cechy.component.html",
  styleUrls: ["./cechy.component.scss"]
})
export class CechyComponent implements OnInit, OnDestroy {
  constructor(private cechyService: CechyService) {}

  @HostBinding("class") classes = "o-layout o-layout--page";

  private subs = new SubSink();

  searchStream = new BehaviorSubject<{ term: string; debounceArg: number }>({
    term: "",
    debounceArg: 0
  });
  PAGE_SIZE = 20;

  cechy: Cechy;
  navigation = navigation;
  term = "";
  currentPage: number;
  currentCecha: number;

  ngOnInit() {
    this.subs.add(
      this.cechyService
        .searchCechy(this.searchStream, this.currentPage)
        .subscribe(cechy => this.cechy = cechy, err => console.error(err))
    );
  }

  search(term: Event) {
    this.term = (term.target as any).value;
    this.searchStream.next({
      term: (term.target as any).value,
      debounceArg: 400
    });
  }

  currentPageMethod(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.searchStream.next({
      term: this.term,
      debounceArg: 0
    });

    this.subs.add(
      this.cechyService
        .searchCechy(this.searchStream, this.currentPage)
        .subscribe(cechy => (this.cechy = cechy), err => console.error(err))
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
