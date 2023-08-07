import Link from 'next/link'
import Flex from '@/components/layout/Flex'

const Header = () => {
  return (
    <Flex justifyContent="space-around" height="160px">
      <Link href="/" passHref>
        <h1>logo</h1>
      </Link>
      <Link href="/menu" passHref>
        <h1>메뉴 아이콘</h1>
      </Link>
    </Flex>
  )
}

export default Header