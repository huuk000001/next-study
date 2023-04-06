import styled from '@emotion/styled';
import React from 'react';

const Footer = styled.footer`
  border-top: 1px solid #000;
`;
const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  width: 100%;
  height: 60px;
  margin: 0 auto;
`;

export default function LayoutFooter() {
  return (
    <Footer>
      <Inner>LayoutFooter</Inner>
    </Footer>
  );
}
