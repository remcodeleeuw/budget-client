import styled from 'styled-components';

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

export const StyledHeroAccount = styled(StyledHero)`
	width: 65%;
	border-radius: 32px 0 0 32px;
	/* background: linear-gradient(to right, #1DE9B6, #00BFA5); */
	background: url('https://images.pexels.com/photos/2662086/pexels-photo-2662086.jpeg?cs=srgb&dl=alberta-avontuur-banff-banff-national-park-2662086.jpg&fm=jpg');
	position: absolute;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	right: 0;
	top: 0;
	z-index: -1;
`

export const StyledHeroHomepage = styled(StyledHero)`
	background: url('https://images.pexels.com/photos/4171211/pexels-photo-4171211.jpeg?cs=srgb&dl=dageraad-landschap-bergen-mode-4171211.jpg&fm=jpg');
	width: 100%;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	border-radius: 0px 0 32px 32px;
	position: absolute;
	height: 65vh;
`

