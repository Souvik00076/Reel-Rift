import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
    width:10rem;
    height:8rem;
`
const Img=styled.div`
    width:100%;
    height:6rem;
    background:blue;
`
const Card = () => {
  return (
    <Container>
        <Img>
        </Img>
    </Container>
  )
}
export default Card
