import { useRouter } from 'next/router';
import { useEffect, useReducer } from 'react';

export default function LoginButtonNaver() {
  const router = useRouter();

  const stateInit = {
    email: '',
  };

  const [state, dispatch] = useReducer(reducer, stateInit);
  function reducer(state: any, action: any) {
    switch (action.type) {
      case 'init':
        return stateInit;
      default:
        return {
          ...state,
          [action.name]: action.value,
        };
    }
  }
  let naverLogin: any;

  const login = () => {
    naverLogin = new window.naver.LoginWithNaverId({
      clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
      callbackUrl: 'http://localhost:3000',
      isPopup: false,
      loginButton: {
        color: 'green',
        type: 3,
        height: '60',
      },
    });

    naverLogin.init();
  };

  const getToken = () => {
    const hash = router.asPath.split('#')[1]; // 네이버 로그인을 통해 전달받은 hash 값
    console.log(hash);
    if (hash) {
      const token = hash.split('=')[1].split('&')[0]; // token값 확인
      naverLogin.getLoginStatus((status: any) => {
        if (status) {
          // 로그인 상태 값이 있을 경우
          console.log(naverLogin.user.email); // 사용자 정보 조회

          // if (!naverLogin.user.getAge()) { // 나이정보 제공을 동의하지 않았을 경우
          //     alert('나이 정보는 필수입니다.');
          //     naverLogin.reprompt(); // 정보제공창 다시 보여주기

          //     return;
          // }
          dispatch({ name: 'email', value: naverLogin.user.email });
          // /community 페이지로 token값과 함께 전달 (서비스할 땐 token 전달을 하지 않고 상태 관리를 사용하는 것이 바람직할 것으로 보임)
          router.push({
            pathname: '/community',
            query: {
              token: token,
            },
          });
        }
      });
    }
  };

  useEffect(() => {
    login();
    getToken();
  }, []);

  return <div id="naverIdLogin" />;
}
