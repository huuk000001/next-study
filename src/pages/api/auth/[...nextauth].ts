import NextAuth from 'next-auth';
import NaverProvider from 'next-auth/providers/naver';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import KakaoProvider from 'next-auth/providers/kakao';

const naverCustomProvider = NaverProvider({
  clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID!,
  clientSecret: process.env.NEXT_PUBLIC_NAVER_CLIENT_SECRET!,
});
const githubCustomProvider = GithubProvider({
  clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID!,
  clientSecret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET!,
});
const googleCustomProvider = GoogleProvider({
  clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
  clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET!,
});
const kakaoCustomProvider = KakaoProvider({
  clientId: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID!,
  clientSecret: process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET!,
});

export const authOptions = {
  providers: [
    naverCustomProvider,
    githubCustomProvider,
    googleCustomProvider,
    kakaoCustomProvider,
  ],
};

export default NextAuth(authOptions);
