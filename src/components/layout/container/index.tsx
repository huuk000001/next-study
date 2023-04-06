import styled from '@emotion/styled';
import React from 'react';

interface ILayoutprops {
  children: React.ReactNode;
}

const LayourContainer = styled.main`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
`;

export default function LayoutContainer({
  children,
}: ILayoutprops): JSX.Element {
  return <LayourContainer>{children}</LayourContainer>;
}
