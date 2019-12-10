import { Component, OnInit, OnDestroy, HostBinding } from "@angular/core";
import { SystemyService } from "src/app/services/systemy.service";
import { Systemy } from "src/app/models/Systemy";
import { BehaviorSubject } from "rxjs";
import navigation from "src/navigation";
import { SubSink } from "subsink";

@Component({
  selector: "app-systemy",
  templateUrl: "./systemy.component.html",
  styleUrls: ["./systemy.component.scss"]
})
export class SystemyComponent implements OnInit, OnDestroy {
  constructor(private systemyService: SystemyService) {}

  @HostBinding("class") classes = "o-layout o-layout--page";

  private subs = new SubSink();

  searchStream = new BehaviorSubject<{ term: string; debounceArg: number }>({
    term: "",
    debounceArg: 0
  });
  PAGE_SIZE = 20;

  systemy: Systemy;
  navigation = navigation;
  term = "";
  currentPage: number;

  ngOnInit() {
    this.subs.add(
      this.systemyService
        .searchSystems(this.searchStream, this.currentPage)
        .subscribe(
          systemy => {
            this.systemy = systemy;
          },
          err => console.log(err)
        )
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
      this.systemyService
        .searchSystems(this.searchStream, this.currentPage)
        .subscribe(
          systemy => {
            this.systemy = systemy;
          },
          err => console.log(err)
        )
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
