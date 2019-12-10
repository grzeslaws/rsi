import { Component, OnInit, HostBinding, OnDestroy } from "@angular/core";
import { GestorzyService } from "src/app/services/gestorzy.service";
import { BehaviorSubject } from "rxjs";
import { Gestorzy } from "src/app/models/Gestorzy";
import navigation from "src/navigation";
import { SubSink } from "SubSink";
import { ParamMap, ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-gestorzy",
  templateUrl: "./gestorzy.component.html",
  styleUrls: ["./gestorzy.component.scss"]
})
export class GestorzyComponent implements OnInit, OnDestroy {
  constructor(
    private gestorzyService: GestorzyService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  @HostBinding("class") classes = "o-layout o-layout--page";

  private subs = new SubSink();

  gestorzy: Gestorzy;
  PAGE_SIZE = 20;
  currentPage: number | "0" = 1;

  navigation = navigation;
  term = "";
  currentGestor: number;

  searchStream = new BehaviorSubject<{ term: string; debounceArg: number }>({
    term: "",
    debounceArg: 0
  });

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

    this.subs.add(
      this.gestorzyService
        .searchGestorzy(this.searchStream, this.currentPage as number)
        .subscribe(
          gestorzy => (this.gestorzy = gestorzy),
          err => console.log(err)
        )
    );
  }

  onFocus() {
    this.subs.add(
      this.route.paramMap.subscribe(param => {
        if (param.get("id")) {
          this.router.navigate([this.navigation.gestorzy, ""], {});
        }
      })
    );
  }

  onBlur() {
    this.subs.add(
      this.route.paramMap.subscribe(param => {
        if (param.get("id")) {
          this.router.navigate([this.navigation.gestorzy, param.get("id")], {});
        }
      })
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
      this.gestorzyService
        .searchGestorzy(this.searchStream, this.currentPage)
        .subscribe(
          systemy => {
            this.gestorzy = systemy;
          },
          err => console.log(err)
        )
    );
  }

  public ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
