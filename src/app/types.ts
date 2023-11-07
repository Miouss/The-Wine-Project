import { PropsWithChildren } from "react";

export interface PropsWithClassName {
  className?: string;
}

export interface PropsWithChildrenAndClassName
  extends PropsWithChildren,
    PropsWithClassName {}
