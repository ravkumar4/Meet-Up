import styled from 'styled-components'

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
  padding: 10%;
`

export const LeftContainer = styled.div`
  width: 35%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const RegisterImage = styled.img`
  height: 50vh;
  width: 90%;
`

export const RegisterForm = styled.form`
  height: 70vh;
  width: 40%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

export const RegisterHeading = styled.h1`
  color: #64748b;
  font-family: 'Roboto';
`

export const NameLabel = styled.label`
  color: #7b8794;
  font-family: 'Roboto';
`
export const NameInput = styled.input`
  font-family: 'Roboto';
  color: #7b8894;
  background-color: transparent;
  padding: 10px;
  border: 1px solid #7b8894;
  border-radius: 4px;
  width: 70%;
  outline: none;
`

export const TopicLabel = styled(NameLabel)`
  margin-top: 20px;
`

export const SelectTopic = styled.select`
  font-family: 'Roboto';
  color: #7b8894;
  background-color: transparent;
  padding: 10px;
  border: 1px solid #7b8894;
  border-radius: 4px;
  width: 70%;
  outline: none;
`

export const Option = styled.option`
  font-family: 'Roboto';
`
export const RegisterNowButton = styled.button`
  background-color: #2563eb;
  font-family: 'Roboto';
  color: #cbd5e1;
  padding: 7px 24px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;
`

export const ErrorMessage = styled.p`
  color: #ff0b37;
  font-family: 'Roboto';
`
