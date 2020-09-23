import styled from 'styled-components';

export const StyledCard = styled.div`
  background: ${props => props.theme.white};
  border-radius: 16px;
  box-shadow: ${props => props.theme.bs};
  width: fit-content;

  h2 {
    color: ${props => props.theme.white};
    text-align: center;
    margin: auto;
  }


  .card__header {
    border-radius: 16px 16px 0 0;
    background: ${props => props.theme.teal500};
    padding: 0 32px;
  }

  .card__inner {
    padding: 32px;
    div {
      display: flex;
    justify-content: space-between;
    }
  }
`