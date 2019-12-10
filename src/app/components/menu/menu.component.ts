import { Component, OnInit } from "@angular/core";
import navigation, { subNavigationGestorzy, subNavigationTypyObiektow } from "src/navigation";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent implements OnInit {
  constructor() {}

  navigation = navigation;
  subNavigationGestorzy = subNavigationGestorzy;
  subNavigationTypyObiektow = subNavigationTypyObiektow;
  objectKeys = Object.keys;

  clearInput() {
    setTimeout(() => {
      const input: HTMLInputElement = document.querySelector(
        ".o-form__input--big"
      );
      if (input) {
        input.value = "";
      }
    });
  }

  toggleMenu() {
    const trigger = document.querySelector("[data-trigger-menu]");
    const body = document.querySelector("body");
    const wrapperMenu = trigger.parentElement;
    trigger.addEventListener("click", () => {
      wrapperMenu.classList.toggle("mobile-menu");
      body.classList.toggle("u-overflow--hidden");
    });

    Array.from(document.querySelectorAll(".c-menu__link")).map(a => {
      (a as any).addEventListener("click", () => {
        wrapperMenu.classList.remove("mobile-menu");
        body.classList.remove("u-overflow--hidden");
      });
    });
  }

  ngOnInit() {
    setTimeout(() => {
      this.toggleMenu();
    });
  }
}
