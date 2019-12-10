import { Component, OnInit, HostBinding, OnDestroy } from "@angular/core";
import { ObiektyService } from "src/app/services/obiekty.service";
import { SubSink } from "SubSink";
import { BehaviorSubject } from "rxjs";
import { Obiekty } from "src/app/models/Obiekty";
import navigation from "src/navigation";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-obiekty",
  templateUrl: "./obiekty.component.html",
  styleUrls: ["./obiekty.component.scss"]
})
export class ObiektyComponent implements OnInit, OnDestroy {
  constructor(
    private obiektyService: ObiektyService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  @HostBinding("class") classes = "o-layout o-layout--page";

  private subs = new SubSink();

  searchStream = new BehaviorSubject<{ term: string; debounceArg: number }>({
    term: "",
    debounceArg: 0
  });
  PAGE_SIZE = 20;

  obiekty: Obiekty;
  navigation = navigation;
  term = "";
  currentPage: number;
  currentObiekt: number;

  ngOnInit() {
    this.subs.add(
      this.route.paramMap.subscribe(param => {
        this.term = typeof param.get("id") === "object" ? "" : param.get("id");

        this.searchStream.next({
          term: this.term,
          debounceArg: 0
        });
      })
    );

    this.obiektyService
      .searchObiekty(this.searchStream, this.currentPage)
      .subscribe(
        obiekty => (this.obiekty = obiekty),
        err => console.error(err)
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
      this.obiektyService
        .searchObiekty(this.searchStream, this.currentPage)
        .subscribe(
          obiekty => {
            this.obiekty = obiekty;
          },
          err => console.error(err)
        )
    );
  }

  onFocus() {
    this.subs.add(
      this.route.paramMap.subscribe(param => {
        if (param.get("id")) {
          this.router.navigate([this.navigation.obiekty, ""], {});
        }
      })
    );
  }

  onBlur() {
    this.subs.add(
      this.route.paramMap.subscribe(param => {
        if (param.get("id")) {
          this.router.navigate([this.navigation.obiekty, param.get("id")], {});
        }
      })
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
