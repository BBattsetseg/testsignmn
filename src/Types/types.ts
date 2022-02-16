import { FunctionComponent, ReactChild, ReactNode } from 'react';

export type AnchorArray = {
  ids: string[];
};
export type Anchor = {
  id?: string;
};

export type Multiply = {
  multiply: number;
};

export type Offset = {
  offsetY: number;
};

export type Children = {
  children: ReactChild | ReactNode | FunctionComponent;
};
export type Function = {};
