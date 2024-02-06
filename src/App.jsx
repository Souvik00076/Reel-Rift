import React from 'react'
import styled from 'styled-components'
import Menu from './components/Menu'
import Main from './components/Main'
import Nav from './components/Nav'
const Container=styled.div`
    margin:0;
`
const Wrapper=styled.div`
    display:flex;
`
const App = () => {
  return (
    <Container>
        <Nav />
        <Wrapper>
        <Menu />
        <Main />
        </Wrapper>
        
    </Container>
  )
}

export default App
