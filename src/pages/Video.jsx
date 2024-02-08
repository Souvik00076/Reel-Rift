import React from 'react'
import styled from 'styled-components'
import LeftPalleteVideo from '../components/LeftPalleteVideo'
import Recommendations from '../components/Recommendations'

const Container=styled.div`
 display:flex;
`

const Video = () => {
  return (
    <Container>
        <LeftPalleteVideo/>
        <Recommendations/>
    </Container>
  )
}

export default Video
