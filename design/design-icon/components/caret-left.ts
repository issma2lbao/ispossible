"use client";

import { createWebIcon } from "./base";

createWebIcon(
  "is-caret-left",
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M672 192 288 511.936 672 832z"/></svg>`
);

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "is-caret-left": IsIcon;
    }
    interface IsIcon {}
  }
}