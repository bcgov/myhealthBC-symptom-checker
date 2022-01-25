import { Values } from './Values';

export type PageProps = {
  values?: Values;
  onChange: (values: Values) => void;
};
