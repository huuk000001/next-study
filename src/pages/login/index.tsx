import LoginButton from '@/components/LoginButton';
import styled from '@emotion/styled';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  padding: 150px 0;
`;

export default function login() {
  const router = useRouter();
  const { data: session } = useSession();

  if (!session) {
    console.log('no login');
  } else if (session) {
    console.log('login');
    router.push('/');
  }

  return (
    <Wrapper>
      <LoginButton type="naver" />
      <LoginButton type="kakao" />
      {/* <LoginButton type="google" /> */}
      {/* <LoginButton type="github" /> */}
    </Wrapper>
  );
}
