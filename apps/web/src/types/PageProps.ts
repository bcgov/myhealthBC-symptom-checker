import { Values } from './Values';
import { SyntheticEvent } from 'react';

export type PageProps = {
  values?: Partial<Values>;
  onChange: (e: SyntheticEvent | null, key?: string, value?: any) => void;
};
