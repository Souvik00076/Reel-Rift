import React from 'react'
import styled from 'styled-components'
import MenuItems from './MenuItems'
import img2 from '../images/reelrift.png'

const Container=styled.div`
    flex:1;
    background-color:#181818;
    color:white;
    position:sticky;
    top:0;
`
const Wrapper=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    
`
const Menu = () => {
  return (
    <Container>
        <Wrapper>
        <MenuItems/>
        </Wrapper>
    </Container>
  )
}
export default Menu
