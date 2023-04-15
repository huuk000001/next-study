import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { useSession, signOut } from 'next-auth/react';
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
  const { data: session } = useSession();

  return (
    <Header>
      <Inner>
        <Link href="/">LOGO</Link>
        <nav>
          {session && session.user?.name}
          {session ? (
            <Button onClick={() => signOut()}>로그아웃</Button>
          ) : (
            <Link href="/login">로그인</Link>
          )}
        </nav>
      </Inner>
    </Header>
  );
}
