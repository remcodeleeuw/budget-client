import styled from 'styled-components'

const StyledHero = styled.div`
	height: 100vh;
`

export const StyledDefaultHero = styled(StyledHero)`
  height: 50vh;
  width: 100%;
  background: linear-gradient(to right, 
    ${props => props.theme.teal400}, 
    ${props => props.theme.teal600}
  );
  box-shadow: ${props => props.theme.bs};
  bottom: 0;
  background: config("colors.blue");
  position: absolute;
  left: 0;
  z-index: -1;
`

export const StyledHeroHomepage = styled(StyledHero)`
	width: 100%;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	border-radius: 0px 0 32px 32px;
	position: absolute;
	height: 65vh;
`