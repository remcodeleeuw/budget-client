import styled from 'styled-components'

export const StyledForm = styled.form`
    /* background: ${props => props.theme.teal700}; */
    display: flex;
    flex-direction: column;
    height: fit-content;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 90%;

    h1, a {
        /* color: ${props => props.theme.primary} */
        color: ${props => props.theme.white};
        margin-top: 16px;
    }
    a {
        margin-bottom: 16px;
    }
    @media only screen and (min-width: 960px) {
        width: 40%;
    }
`
