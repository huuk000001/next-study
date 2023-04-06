import LoginButtonNaver from '@/components/LoginButton/Naver';
import styled from '@emotion/styled';

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
  return (
    <Wrapper>
      <LoginButtonNaver />
    </Wrapper>
  );
}
