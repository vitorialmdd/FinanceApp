import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing:0;
    background-color: ${props => props.theme.card};
    border-radius: 1.5rem;
    height: 100%;
    

    th {
      color: ${props => props.theme.grey};
      
      font-weight: bold;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      color: ${props => props.theme.text};
      font-weight: 500;

      &.deposit {
        color: ${props => props.theme.green};
        font-weight: bold;
      }
  
      &.withdraw {
        color: ${props => props.theme.red};
        font-weight: bold;
      }

    }
  }
`
