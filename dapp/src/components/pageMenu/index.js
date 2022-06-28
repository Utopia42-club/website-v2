import React from "react";
import Link from 'next/link'
import { Container, Wrapper, Div } from './Container'
import { Flex } from 'rebass'
import { Box } from './Container'

const PageMenu = () => {
    return(

        <Container>
            <Wrapper maxWidth="100%" width="100%">
                <Flex flexDirection="column" justifyContent="center" alignItems="center" width="100%">
                {/* <GradientTitle margin="0 0 10px">Register NFT</GradientTitle> */}
                <Box background="linear-gradient(0deg, #D3DBE3 0%, rgba(231, 235, 243, 0) 126.95%)">
                <Flex>
                <Link href="/">
                <Div>
                    <a>Home</a>
                </Div>
                </Link>
                <Link href="/Mint">
                <Div>
                    <a>Mint citizenNFT</a>
                </Div>
                </Link>
                <Link href="/NFTs">
                <Div>
                    <a>Register NFTs</a>
                </Div>
                </Link>
                </Flex>
                </Box>
                </Flex>
            </Wrapper>
        </Container>
    )
}

export default PageMenu
