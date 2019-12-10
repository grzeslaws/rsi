import { Component, OnInit } from "@angular/core";
import cssVars from "css-vars-ponyfill";

@Component({
  selector: "app-top-bar",
  templateUrl: "./top-bar.component.html",
  styleUrls: ["./top-bar.component.scss"]
})
export class TopBarComponent implements OnInit {
  constructor() {}

  head = document.querySelector("head");
  link = this.head.querySelector("link");
  fontSizeStyle = document.createElement("style");
  colorsStyle = document.createElement("style");

  primaryColor = "#009aa6";
  blackColor = "#333";
  grayColor = "#ededed";

  changeFontSize(fontSize: number) {
    this.fontSizeStyle.innerHTML = `
      :root {
        --font-size-base: ${fontSize}px;
      }
    `;

    this.head.insertBefore(this.fontSizeStyle, this.link);
    cssVars();
  }

  initialColors() {
    this.colorsStyle.innerHTML = `
      :root {
        --color-white: #fff;
        --color-black: ${this.blackColor};
        --color-primary: ${this.primaryColor};
        --color-gray: ${this.grayColor};
        --color-gray-menu: ${this.grayColor};
      }
    `;

    this.head.insertBefore(this.colorsStyle, this.link);
    this.initilColorLogo();
    cssVars();
  }

  reversColors() {
    this.colorsStyle.innerHTML = `
      :root {
        --color-white: ${this.blackColor};
        --color-black: #fff;
        --color-primary: #fff;
        --color-gray: #fff;
        --color-gray-menu: #464646;
      }
    `;

    this.head.insertBefore(this.colorsStyle, this.link);
    this.monohromaticLogo();
    cssVars();
  }

  monohromaticLogo() {
    Array.from(document.querySelectorAll("[data-logo-gus] svg")).map(c => {
      const paths = c.querySelectorAll("path");
      paths[0].style.fill = this.blackColor;
      paths[0].style.stroke = "#fff";
      paths[1].style.fill = "#fff";
      paths[2].style.fill = "#fff";
      paths[3].style.fill = "#fff";
    });
  }

  initilColorLogo() {
    Array.from(document.querySelectorAll("[data-logo-gus] svg")).map(c => {
      const paths = c.querySelectorAll("path");
      Array.from(paths).map(p => p.removeAttribute("style"));
    });
  }

  ngOnInit() {
    this.changeFontSize(14);
    this.initialColors();
  }
}
