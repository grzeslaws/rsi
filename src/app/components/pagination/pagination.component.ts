import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.scss"]
})
export class PaginationComponent {
  @Input() count: number;
  @Output() public currentPageOutput = new EventEmitter<number>();

  constructor() {}

  PAGE_SIZE = 20;
  currentPage: number | "0" = 1;

  numberOfPages(count: number): number {
    return Math.floor(count / this.PAGE_SIZE) + 1;
  }

  currentPageMethod(event: Event) {
    event.preventDefault();

    const pageNumber: number | "0" = (event.target as any).value;

    if (pageNumber > this.numberOfPages(this.count)) {
      this.currentPage = this.numberOfPages(this.count);
    } else if (pageNumber === "0") {
      this.currentPage = 1;
    } else {
      this.currentPage = pageNumber;
    }

    this.currentPageOutput.next(this.currentPage);
  }

  navigationPage(flag: boolean) {
    if (flag && this.currentPage < this.numberOfPages(this.count)) {
      (this.currentPage as number)++;
      window.scrollTo(0, 0);
    } else if (!flag && (this.currentPage as number) > 1) {
      (this.currentPage as number)--;
      window.scrollTo(0, 0);
    } else {
      return;
    }
    this.currentPageOutput.next(this.currentPage as number);
  }
}
