// Write your code here
import {useState} from 'react'

import {
  Container,
  Heading,
  Para,
  Image,
  ButtonContainer,
  Button,
} from './styledComponents'

const imageUrl = 'https://assets.ccbp.in/frontend/hooks/react-hooks-img.png'
//  alt should be react hooks

const ReadMore = props => {
  const [showLess, setToggleText] = useState(true)
  const {reactHooksDescription} = props

  const onClickButton = () => {
    setToggleText(prevState => !prevState)
  }
  const text = showLess
    ? reactHooksDescription.slice(0, 170)
    : reactHooksDescription

  const buttonText = showLess ? 'Read More' : 'Read Less'
  return (
    <Container>
      <Heading>React Hooks</Heading>
      <Para>Hooks are a new addition to React</Para>
      <Image src={imageUrl} alt="react hooks" />
      <Para>{text}</Para>
      <ButtonContainer>
        <Button type="button" onClick={onClickButton}>
          {buttonText}
        </Button>
      </ButtonContainer>
    </Container>
  )
}

export default ReadMore
