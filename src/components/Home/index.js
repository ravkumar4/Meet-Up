import {Link} from 'react-router-dom'
import Header from '../Header'
import RegisterContext from '../../context/RegisterContext'
import {
  AppContainer,
  Heading,
  SubHeading,
  RegisterButton,
  MeetupImage,
  RegisteredMessage,
  RegisteredText,
} from './styledComponents'

const Home = () => (
  <RegisterContext.Consumer>
    {value => {
      const {showRegisteredMessage, registeredUser, registeredTopic} = value

      return (
        <>
          <Header />
          <AppContainer>
            {showRegisteredMessage ? (
              <>
                <RegisteredMessage>Hello {registeredUser}</RegisteredMessage>
                <RegisteredText>Welcome to {registeredTopic}</RegisteredText>
              </>
            ) : (
              <>
                <Heading>Welcome to Meetup</Heading>
                <SubHeading>Please register for the topic</SubHeading>
                <Link to="/register" style={{textDecoration: 'none'}}>
                  <RegisterButton type="button">Register</RegisterButton>
                </Link>
              </>
            )}
            <MeetupImage
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              alt="meetup"
            />
          </AppContainer>
        </>
      )
    }}
  </RegisterContext.Consumer>
)
export default Home
