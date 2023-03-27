import React from 'react'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client';


const BoardsPage = () => {
  const router = useRouter();

  const handleMove1=()=>{
    router.push('/boards/1')
  }
  const handleMove2=()=>{
    router.push('/boards/2')
  }
  const handleMove3=()=>{
    router.push('/boards/3')
  }

  return (
    <div>
      <button onClick={handleMove1}>1번 게시글로 이동</button>
      <button onClick={handleMove2}>2번 게시글로 이동</button>
      <button onClick={handleMove3}>3번 게시글로 이동</button>
    </div>
  )
}

export default BoardsPage