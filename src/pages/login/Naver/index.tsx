import { useEffect } from 'react';

export default function LoginNaver() {
  const loginFormWithNaver = () => {
    const naverLogin = new window.naver.LoginWithNaverId({
      clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
      callbackUrl: 'http://localhost:3000',
      isPopup: false,
      loginButton: { color: 'green', type: 2, height: '70' },
    });
    naverLogin.init();
  };

  useEffect(() => {
    loginFormWithNaver();
  }, []);

  return <div id="naverIdLogin" />;
}
