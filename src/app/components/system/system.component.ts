import { Component, OnInit, HostBinding } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { SystemyService } from "src/app/services/systemy.service";
import { SystemDetails } from "src/app/models/SystemDetails";
import { Observable } from "rxjs";
import { CechyObiektu } from "src/app/models/CechyObiektu";

@Component({
  selector: "app-system",
  templateUrl: "./system.component.html",
  styleUrls: ["./system.component.scss"]
})
export class SystemComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private systemyService: SystemyService
  ) {}

  currentDefinicjaCechy: string;

  @HostBinding("class") classes = "o-layout o-layout--page";
  system$: Observable<SystemDetails>;

  toggleDefinicjaCechy(cechyObiektu: CechyObiektu, idObiektu: number): void {
    if (cechyObiektu.definicjaCechy === "") {
      this.currentDefinicjaCechy = null;
      return;
    }
    this.currentDefinicjaCechy =
      cechyObiektu.idCechy.toString() + idObiektu.toString();
  }

  checkCurrentDefinicjaCechy(idCechy: number, idObiektu: number): boolean {
    return (
      this.currentDefinicjaCechy === idCechy.toString() + idObiektu.toString()
    );
  }

  removeLinkClass(definicjaCechy: string): boolean {
    return definicjaCechy === "";
  }

  ngOnInit() {
    this.system$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.systemyService.getSystem(params.get("id"))
      )
    );
  }
}
