import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import LoginNaver from './Naver';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  padding: 150px 0;
`;

export default function login() {
  const router = useRouter();

  useEffect(() => {
    if (window.location.href.includes('access_token')) {
      window.localStorage.setItem(
        'token',
        window.location.href.split('=')[1].split('&')[0] ?? 'none'
      );
      router.push('/');
    }
  }, []);

  return (
    <Wrapper>
      <LoginNaver />
    </Wrapper>
  );
}
