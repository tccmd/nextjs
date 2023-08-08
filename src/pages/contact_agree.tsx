import Grid from "@/components/layout/Grid"
import Flex from "@/components/layout/Flex"
import Box from "@/components/layout/Box"
import Layout from "@/components/templates/Layout"
import term from "./term"

const contactAgreeDPage = () => {
    return (
        <Layout>
            <Flex justifyContent="center">
                <Box width="80%" height="800px" border="solid 1px black">
                    <Grid gridTemplateColumns="1fr 1fr" height="100%">
                        <Flex border="solid 1px black" backgroundColor="#eee" flexDirection="column">
                            <h1>비즈니스 제휴 문의</h1>
                            <h2>회사 정보</h2>
                            <Box height="50%" border="1px solid #000">
                            </Box>
                        </Flex>
                        <Flex border="solid 1px black" backgroundColor="#eee" flexDirection="column">
                            <h1>촬영 문의</h1>
                            <h2>개인정보 수집 및 이용에 관한 동의</h2>
                            <textarea name="term" id="term" cols={15} rows={10} placeholder={term} readOnly style={{fontSize: '24px'}}></textarea>
                            <button>Agree</button>
                        </Flex>
                    </Grid>
                </Box>
            </Flex>
        </Layout >
    )
}

export default contactAgreeDPage