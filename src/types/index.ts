import { ButtonHTMLAttributes, InputHTMLAttributes, MouseEventHandler, ReactNode } from "react"

export type LayoutProps = {
  children: ReactNode;
}

export type ColumnProps = {
  accessor: string;
  label: string;
}

export type RowProps = {
  body: string;
  id: number;
  title: string;

}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  label?: string;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: string;
  withIcon: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface Posts {
  body: string;
  id: number;
  title: string;
  userId: number;
  author: string;
  created_at: string;
}