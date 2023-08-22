import styled from 'styled-components';

export const Header = styled.header`
  background: ${props => props.theme.blue};
`;

export const Container = styled.div`
max-width: 1120px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 10px 0px;
margin: 0 auto;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;  
  margin: 0;
  padding: 0;

  h4, p {
    margin: 0;
  }
`

export const InfoProfile = styled.div`
`;

export const Logo = styled.img`
`

export const ProfileName = styled.h4`
  color: ${props => props.theme.white};
`;

export const ProfileEmail = styled.p`
  color: ${props => props.theme.white};
`;



export const Avatar = styled.img`
  margin-left: 10px;
`;
