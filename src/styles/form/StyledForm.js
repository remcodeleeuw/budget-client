import styled from 'styled-components'

export const StyledForm = styled.form`
    background: #fff;
    box-shadow: ${props => props.theme.bs};
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    height: fit-content;
    margin: auto;
    padding: 32px 64px;

    h1, a {
        color: ${props => props.theme.teal500};
        margin-top: 16px;
        font-size: 3.6rem;
        letter-spacing: 1px;
        text-align: center;
    }
    a {
        margin-bottom: 16px;
    }
    span {
        text-align: left;
        justify-self: left;
    }
    @media only screen and (min-width: 960px) {
        width: 40%;
    }
`
