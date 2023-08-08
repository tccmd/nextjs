import Link from 'next/link'
import Flex from '@/components/layout/Flex'
import AppLogo from '@/components/atoms/AppLogo'
import Btn_menu from "public/Icons/btn_menu.svg";

const Header = () => {
  return (
    <Flex justifyContent="space-around" height="160px">
      <Link href="/" passHref>
        <AppLogo />
      </Link>
      <Link href="/menu" passHref>
        <Btn_menu />
      </Link>
    </Flex>
  )
}

export default Header