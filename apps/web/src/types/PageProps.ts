import { Values } from './Values';
import { SyntheticEvent } from 'react';

export type PageProps = {
  values?: Values;
  onChange: (e: SyntheticEvent | null, key?: string, value?: any) => void;
};
