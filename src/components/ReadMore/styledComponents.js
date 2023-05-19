// Style your elements here
import styled, {createGlobalStyle} from 'styled-components'

//   Container,
//   Heading,
//   Para,
//   Image,
//   ButtonContainer,
//   Button,

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    /* Add more global styles here */
  }

  /* Add more global styles as needed */
`

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
`

export const Para = styled.p``

export const Image = styled.img`
  width: 400px;
`

export const ButtonContainer = styled.div``

export const Button = styled.button``
