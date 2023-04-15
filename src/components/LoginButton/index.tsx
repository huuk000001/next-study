import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { useSession, signIn, signOut } from 'next-auth/react';

type Props = {
  type: string;
};

const ButtonCustom = styled(Button)`
  height: 50px;
  background-repeat: no-repeat;
  background-position: left 20px center;
  background-size: 30px;
  &.naver {
    color: #000;
    border: 2px solid #03c75a;
    background-image: url(/assets/icon/social/naver.svg);
  }

  &.kakao {
    color: #000;
    border: 2px solid #fee500;
    background-image: url(/assets/icon/social/kakao.svg);
  }
`;

export default function LoginButton(props: Props) {
  const { data: session } = useSession();
  return (
    <ButtonCustom
      fullWidth
      className={props.type}
      onClick={() => {
        session && session ? signOut() : signIn(props.type);
      }}
    >
      {props.type} LOGIN
    </ButtonCustom>
  );
}
