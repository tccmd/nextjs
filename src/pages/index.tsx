import Head from 'next/head'
import Layout from '@/components/templates/Layout'
import Flex from '@/components/layout/Flex'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>AllRounder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex justifyContent="center">
        <h1>홈 모델링 이미지</h1>
      </Flex>
    </Layout>
  )
}
