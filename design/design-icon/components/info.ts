"use client";

import { createWebIcon } from "./base";

createWebIcon(
  "is-info",
  `<?xml version="1.0" standalone="no"?>
<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 1024 1024">
  <path d="M448 224a64 64 0 1 0 128 0 64 64 0 1 0-128 0zm96 168h-64c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V400c0-4.4-3.6-8-8-8z"/>
</svg>
`
);

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "is-info": IsIcon;
    }
    interface IsIcon {}
  }
}