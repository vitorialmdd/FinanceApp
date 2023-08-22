import styled from 'styled-components';

/*export const Container = styled.div`
background-color: ${props => props.theme.background};
max-width: 1120px;
display: flex;
margin: 0 auto;
justify-content: center;
`;

export const Menu = styled.div`
  display: flex;
`;

export const Separator = styled.div`
  margin-right: 20px;
  margin-left: 20px;
`;*/

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin top: 20px;

  div {
    background-color: ${props => props.theme.card};
    padding: 1.5rem 2rem;
    border-radius: 0.5rem;
    color: ${props => props.theme.grey};
    font-weight: bold;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

      strong {
        margin-top: 1rem;
        font-size: 1.5rem;
        color: ${props => props.theme.black};
        font-weight: 600;
        line-height: 3rem;
        font-family: 'Inter', sans-serif;
      }
    }
    button {
      background-color: ${props => props.theme.blue};
      border-radius: 0.5rem;
      color: ${props => props.theme.new};
      font-size: 1.5rem;
      font-family: 'Inter', sans-serif;
      font-weight: 700;
    }

`
export const Button = styled.button`
`;