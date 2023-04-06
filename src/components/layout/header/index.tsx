import styled from '@emotion/styled';
import Link from 'next/link';
import React from 'react';

const Header = styled.header`
  border-bottom: 1px solid #000;
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
export default function LayoutHeader() {
  return (
    <Header>
      <Inner>
        <Link href={'/'}>LOGO</Link>
        <nav>
          <Link href={'/login'}>로그인</Link>
        </nav>
      </Inner>
    </Header>
  );
}
