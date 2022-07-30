import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundText,
} from './styledComponents'

const NotFound = () => (
  <NotFoundContainer>
    <NotFoundImage
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <NotFoundHeading>Page Not Found</NotFoundHeading>
    <NotFoundText>
      We are sorry, the page you requested could not be found
    </NotFoundText>
  </NotFoundContainer>
)
export default NotFound
