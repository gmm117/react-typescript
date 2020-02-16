import React, { SFC } from 'react';

export interface HelloProps {
  name: string;
}

export const Hello: SFC<HelloProps> = ({ name }) => (
  <h1 style={{height: `30px`, margin : '10px'}}>{ name }</h1>
);