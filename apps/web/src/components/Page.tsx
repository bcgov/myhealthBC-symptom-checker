import React, { PropsWithChildren } from 'react';
import { PageProps } from '../types/PageProps';

export const Page = (props: PageProps) => {
  return props.children;
};
