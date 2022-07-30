import styled from 'styled-components'

export const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Heading = styled.h1`
  color: #334155;
  font-family: 'Roboto';
`

export const SubHeading = styled.p`
  color: #475569;
  font-family: 'Roboto';
  margin-top: 5px;
`

export const RegisterButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  font-family: 'Roboto';
  font-size: 17px;
`

export const MeetupImage = styled.img`
  width: 40%;
  height: 40vh;
  margin-top: 25px;
`

export const RegisteredMessage = styled.h1`
  color: #2563eb;
  font-family: 'Roboto';
`

export const RegisteredText = styled.p`
  color: #334155;
  font-weight: bold;
  font-size: 22px;
  margin-top: 5px;
  font-family: 'Roboto';
`
