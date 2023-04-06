import styled from '@emotion/styled';
import React from 'react';
import LayoutContainer from './container';
import LayoutFooter from './footer';
import LayoutHeader from './header';

interface ILayoutprops {
  children: React.ReactNode;
}

const Wrapper = styled.div``;

export default function Layout({ children }: ILayoutprops): JSX.Element {
  return (
    <Wrapper>
      <LayoutHeader />
      <LayoutContainer>{children}</LayoutContainer>
      <LayoutFooter />
    </Wrapper>
  );
}
