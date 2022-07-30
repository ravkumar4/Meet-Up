import {useState} from 'react'
import {withRouter} from 'react-router-dom'
import Header from '../Header'
import RegisterContext from '../../context/RegisterContext'
import {
  RegisterContainer,
  LeftContainer,
  RegisterImage,
  RegisterForm,
  RegisterHeading,
  NameLabel,
  NameInput,
  TopicLabel,
  SelectTopic,
  Option,
  RegisterNowButton,
  ErrorMessage,
} from './styledComponents'

const Register = props => {
  const {topicsList, history} = props
  const [name, setName] = useState('')
  const [topic, setTopic] = useState(topicsList[0].id)
  const [showErrMsg, setShowErrMsg] = useState(false)

  return (
    <RegisterContext.Consumer>
      {value => {
        const {
          updatedRegisteredUser,
          updatedRegisteredTopic,
          registeredMessage,
        } = value

        const onChangeName = event => {
          setName(event.target.value)
          updatedRegisteredUser(event.target.value)
        }

        const onChangeTopic = event => {
          setTopic(event.target.value)
          updatedRegisteredTopic(event.target.value)
        }

        const submitRegistrationForm = event => {
          event.preventDefault()
          if (name === '') {
            setShowErrMsg(true)
          } else {
            registeredMessage(true)
            history.replace('/')
          }
        }

        return (
          <>
            <Header />
            <RegisterContainer>
              <LeftContainer>
                <RegisterImage
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                  alt="website register"
                />
              </LeftContainer>
              <RegisterForm onSubmit={submitRegistrationForm}>
                <RegisterHeading>Let Us Join</RegisterHeading>
                <NameLabel htmlFor="name">NAME</NameLabel>
                <NameInput
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  value={name}
                  onChange={onChangeName}
                />
                <TopicLabel id="topic" value={topic}>
                  TOPICS
                </TopicLabel>
                <SelectTopic id="topic" value={topic} onChange={onChangeTopic}>
                  {topicsList.map(eachTopic => (
                    <Option key={eachTopic.id} value={eachTopic.displayText}>
                      {eachTopic.displayText}
                    </Option>
                  ))}
                </SelectTopic>
                <RegisterNowButton type="submit">
                  Register Now
                </RegisterNowButton>
                {showErrMsg && (
                  <ErrorMessage>Please enter your name</ErrorMessage>
                )}
              </RegisterForm>
            </RegisterContainer>
          </>
        )
      }}
    </RegisterContext.Consumer>
  )
}
export default withRouter(Register)
