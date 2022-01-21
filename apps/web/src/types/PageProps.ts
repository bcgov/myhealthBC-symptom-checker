import { Values } from './Values';
import { PropsWithChildren, ReactNode } from 'react';

export type PageProps = {
  values: Values;
  validate?(values: Values): any;
  handleChange?: (values: Values) => void;
} & PropsWithChildren<ReactNode>;
