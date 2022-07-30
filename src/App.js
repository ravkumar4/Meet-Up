import {Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'
import './App.css'
import RegisterContext from './context/RegisterContext'
import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'

// These are the lists used in the application. You can move them to any component needed.
const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

// Replace your code here
class App extends Component {
  state = {
    showRegisteredMessage: false,
    registeredUser: '',
    registeredTopic: '',
  }

  registeredMessage = message => this.setState({showRegisteredMessage: message})

  updatedRegisteredUser = user => this.setState({registeredUser: user})

  updatedRegisteredTopic = topic => this.setState({registeredTopic: topic})

  render() {
    const {showRegisteredMessage, registeredUser, registeredTopic} = this.state
    return (
      <RegisterContext.Provider
        value={{
          showRegisteredMessage,
          registeredUser,
          registeredTopic,
          registeredMessage: this.registeredMessage,
          updatedRegisteredUser: this.updatedRegisteredUser,
          updatedRegisteredTopic: this.updatedRegisteredTopic,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register">
            <Register topicsList={topicsList} />
          </Route>
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}
export default App
