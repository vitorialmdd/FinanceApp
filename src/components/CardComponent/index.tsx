/*import {Container, Content, Image, Info, Item, Type, Value} from "./style";

interface CardData {
  type: string;
  value: string;
  image: string;
}

export function CardComponent (props: CardData) {
  return (
    <Content>
      <Container>
        <Item>
          <Info>
            <Type>{props.type}</Type>
            <Value>{props.value}</Value>
          </Info>
  
          <Image src={props.image} />
        </Item>
      </Container>
    </Content>
  )
}*/

import { MenuComponent } from "../Menu";
import { TransactionTable } from "../TransactionTable";
import { Container } from "./style";

export function CardComponent() {
  return (
  <Container>
    <MenuComponent/>
    <TransactionTable/>
  </Container>
  )
}