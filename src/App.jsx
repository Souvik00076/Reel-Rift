import React from 'react'
import styled from 'styled-components'
import Nav from './components/Nav'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
const Container=styled.div`
    margin:0;
`
const Wrapper=styled.div`
    display:flex;
`
const App = () => {
  return (
    <Container>
      <BrowserRouter>
        <Nav />
              <Routes>
                <Route path='/' element={<Home/>}/>
              </Routes>
        </BrowserRouter>
    </Container>
  )
}
export default App
