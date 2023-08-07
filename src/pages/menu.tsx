import Flex from "@/components/layout/Flex"
import Link from "next/link"

const MenuPage = () => {
    return (
            <Flex alignItems="center" flexDirection="column" justifyContent="center" height="100vh">
                <Link href="/about" passHref>
                    <h1>회사 소개</h1>
                </Link>
                <Link href="/portfolio" passHref>
                    <h1>포트폴리오</h1>
                </Link>
                <Link href="/threeD" passHref>
                    <h1>3D 공간 촬영</h1>
                </Link>
                <Link href="/drone" passHref>
                    <h1>드론 항공 촬영</h1>
                </Link>
                <Link href="/interview" passHref>
                    <h1>홍보 영상 촬영</h1>
                </Link>
                <Link href="/contact_agree" passHref>
                    <h1>촬영 문의</h1>
                </Link>
            </Flex>
    )
}

export default MenuPage