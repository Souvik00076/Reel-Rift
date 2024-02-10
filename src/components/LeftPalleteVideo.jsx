import React from 'react'
import styled from 'styled-components'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import SaveAltOutlinedIcon from '@mui/icons-material/SaveAltOutlined';
const Container=styled.div`    
    flex:8;
`
const Iframe=styled.iframe`
    width:100%;
    height:400px;
    border-radius:12px;
`
const TitleHeader=styled.h2`
    margin:12px 0 0 0;
    color:white;
`
const Wrapper=styled.div`
  display:flex;
  flex-direction:column;
  margin:auto;
  align-items:center;
  justify-content:center;
`
const Hr=styled.hr`
  width:100%;
  border-radius:50%;
  margin: 2rem 0 1rem 0;
  background:#181818;
`
const InnerWrapper1=styled.div`
display:flex;
width:100%;
align-items:center;
justify-content:space-between;
`
const H3=styled.h3`
    color:#cccccc;
`
const IconWrapper=styled.div`
  color:white;
  display:flex;
  justify-content:space-between;
  width:40%;
`
const IconItem=styled.div`
  display:flex;
  align-items:center;
`
const InnerWrapper2=styled.div`

  width:100%;
  display:flex;
  align-items:top;
  flex-direction:row;
  justify-content:space-between;
`
const InnerWrapper3=styled.div`
  display:flex;
  align-items:top;
`
const Logo=styled.img`
  width:30px;
  height:30px;
  border-radius:50%;
  background-color:#b8b894;
`
const H4=styled.h4`
  color:white;
  margin:0;
`
const H5=styled.h5`
  color:white;
  font-weight:bold;
  margin:12px 0 0 0;
`
const H6=styled.h6`
  color:#cccccc;
  margin:0;
`
const Texts=styled.div`
  margin-left:10px;
`
const SubButton=styled.button`
  color:white;
  background:red;
  width:7rem;
  height:2rem;
  border:none;
  outline:none;
`
const LeftPalleteVideo = () => {
  return (
    <Container>
      <Wrapper>
        <Iframe>
        </Iframe>      
        <TitleHeader>React Node.js Video Sharing App Full Tutorial (Redux, JWT, Cookies) | MERN Stack Youtube Clone</TitleHeader>
        <InnerWrapper1>
            <H3>790 views * 1 Hour Ago</H3>
            <IconWrapper>
              <IconItem>
                <ThumbUpOutlinedIcon/>
                  0
              </IconItem>
              <IconItem>
                <ThumbDownOffAltOutlinedIcon/>
                  Dislike
              </IconItem>
              <IconItem>
                <ReplyOutlinedIcon/>
                  Share
              </IconItem>
              <IconItem>
                <SaveAltOutlinedIcon/>
                  Save
              </IconItem>
            </IconWrapper>
        </InnerWrapper1>
        <Hr/>
        <InnerWrapper2>
          <InnerWrapper3>
              <Logo/>
              <Texts>
                <H4>Souvik Bhattacharjee</H4>
                <H6>983 Subscribers</H6>
                <H5>Desription</H5>
              </Texts>
          </InnerWrapper3>
          <SubButton>Subscribe</SubButton>
      </InnerWrapper2>
      <Hr/>
      </Wrapper>
    </Container>
  )
}
export default LeftPalleteVideo
