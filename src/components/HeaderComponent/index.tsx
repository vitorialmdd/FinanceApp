import { Header, Logo, ProfileName, ProfileEmail, Avatar, InfoProfile, Container, Profile } from "./style";
import logoImg from '../../assets/logo.svg';
import avatarImg from '../../assets/profile.svg';

export function HeaderComponent() {

  return (
    <Header>
      <Container>
        <Logo src={logoImg} alt="rarofinances" />
        <Profile>
          <InfoProfile>
          <ProfileName>Vitoria Almeida</ProfileName>
          <ProfileEmail>vitoria.almeida@example.com</ProfileEmail>
          </InfoProfile>
          <Avatar src={avatarImg} />
        </Profile>
      </Container>
    </Header>
  )
}