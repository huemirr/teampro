import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Community from '@/pages/community/index'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <h1><a href = '/'>logo</a></h1>
      <h1><a href = '/community'>community</a></h1>
    </>
  )
}
