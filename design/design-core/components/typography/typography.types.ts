import React from "react";

export interface TypographyProps {
  children?: React.ReactNode;
  tagName?: React.ElementType;
  type?: "primary" | "secondary" | "success" | "warning" | "danger";
}