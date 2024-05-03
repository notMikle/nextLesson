import {NextPage} from 'next';
import {PropsWithChildren, ReactElement} from 'react';
import {Header} from '../Header/Header';
import styled from 'styled-components';

export const Layout:NextPage<PropsWithChildren> = (props) => {
    const {children} = props

    return <Container>
        <Header/>
        <Main>
            {children}
        </Main>
    </Container>
}

export const getLayout = (page:ReactElement)=>{
    return <Layout>{page}</Layout>
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`
const Main = styled.div`
  width: 100%;
  overflow: hidden;
  padding-bottom: 10px;
`