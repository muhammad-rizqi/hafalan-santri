import React, {Component} from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Body,
  Icon,
  Text,
  List,
  ListItem,
  Right,
  CheckBox,
} from 'native-base';
import {colors, styles} from '../styles/styles';

export default class ListSura extends Component {
  render() {
    return (
      <Container>
        <Header transparent>
          <Left style={styles.flex0}>
            <Button transparent>
              <Icon name="arrow-back" style={styles.icon} />
            </Button>
          </Left>
          <Body style={styles.marginH16}>
            <Title style={styles.textBlack}>Al-Qur'an</Title>
          </Body>
          <Right style={styles.flex0}>
            <Button transparent>
              <Icon name="search" style={styles.icon} />
            </Button>
          </Right>
        </Header>
        <Content padder>
          <List>
            <ListItem avatar>
              <Left>
                <Text>1</Text>
              </Left>
              <Body>
                <Text>Al-Fatihah</Text>
                <Text note>Pembukaan</Text>
              </Body>
              <Right>
                <CheckBox checked={false} color={colors.primary} />
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Text>1</Text>
              </Left>
              <Body>
                <Text>Al-Fatihah</Text>
                <Text note>Pembukaan</Text>
              </Body>
              <Right>
                <CheckBox checked={false} color={colors.primary} />
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Text>1</Text>
              </Left>
              <Body>
                <Text>Al-Fatihah</Text>
                <Text note>Pembukaan</Text>
              </Body>
              <Right>
                <CheckBox checked={false} color={colors.primary} />
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Text>1</Text>
              </Left>
              <Body>
                <Text>Al-Fatihah</Text>
                <Text note>Pembukaan</Text>
              </Body>
              <Right>
                <CheckBox checked={false} color={colors.primary} />
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Text>1</Text>
              </Left>
              <Body>
                <Text>Al-Fatihah</Text>
                <Text note>Pembukaan</Text>
              </Body>
              <Right>
                <CheckBox checked={false} color={colors.primary} />
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Text>1</Text>
              </Left>
              <Body>
                <Text>Al-Fatihah</Text>
                <Text note>Pembukaan</Text>
              </Body>
              <Right>
                <CheckBox checked={false} color={colors.primary} />
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Text>1</Text>
              </Left>
              <Body>
                <Text>Al-Fatihah</Text>
                <Text note>Pembukaan</Text>
              </Body>
              <Right>
                <CheckBox checked={false} color={colors.primary} />
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Text>1</Text>
              </Left>
              <Body>
                <Text>Al-Fatihah</Text>
                <Text note>Pembukaan</Text>
              </Body>
              <Right>
                <CheckBox checked={false} color={colors.primary} />
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Text>1</Text>
              </Left>
              <Body>
                <Text>Al-Fatihah</Text>
                <Text note>Pembukaan</Text>
              </Body>
              <Right>
                <CheckBox checked={false} color={colors.primary} />
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Text>1</Text>
              </Left>
              <Body>
                <Text>Al-Fatihah</Text>
                <Text note>Pembukaan</Text>
              </Body>
              <Right>
                <CheckBox checked={false} color={colors.primary} />
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Text>1</Text>
              </Left>
              <Body>
                <Text>Al-Fatihah</Text>
                <Text note>Pembukaan</Text>
              </Body>
              <Right>
                <CheckBox checked={false} color={colors.primary} />
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Text>1</Text>
              </Left>
              <Body>
                <Text>Al-Fatihah</Text>
                <Text note>Pembukaan</Text>
              </Body>
              <Right>
                <CheckBox checked={false} color={colors.primary} />
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Text>1</Text>
              </Left>
              <Body>
                <Text>Al-Fatihah</Text>
                <Text note>Pembukaan</Text>
              </Body>
              <Right>
                <CheckBox checked={false} color={colors.primary} />
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Text>1</Text>
              </Left>
              <Body>
                <Text>Al-Fatihah</Text>
                <Text note>Pembukaan</Text>
              </Body>
              <Right>
                <CheckBox checked={false} color={colors.primary} />
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Text>1</Text>
              </Left>
              <Body>
                <Text>Al-Fatihah</Text>
                <Text note>Pembukaan</Text>
              </Body>
              <Right>
                <CheckBox checked={false} color={colors.primary} />
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
