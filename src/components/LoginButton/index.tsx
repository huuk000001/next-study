import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { useSession, signIn, signOut } from 'next-auth/react';

type Props = {
  type: string;
};

const ButtonCustom = styled(Button)`
  background: #000;
  &.naver {
    background-color: #19ce60;
    color: #fff;
    border: 1px solid #19ce60;
  }
  &.kakao {
    background-color: #ffe600;
    color: #000;
    border: 1px solid #ffe600;
  }
  &.google {
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
  }
  &.github {
    background-color: #30363d;
    color: #fff;
    border: 1px solid #30363d;
  }
`;

export default function LoginButton(props: Props) {
  const { data: session } = useSession();

  return (
    <>
      <ButtonCustom
        fullWidth
        className={props.type}
        onClick={() => {
          session && session ? signOut() : signIn(props.type);
        }}
      >
        {session && session ? '로그아웃' : props.type + ' LOGIN'}
      </ButtonCustom>
    </>
  );
}
