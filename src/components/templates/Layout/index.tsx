import Header from '@/components/organisms/Header'

interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    )
}

export default Layout