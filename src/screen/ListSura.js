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
  View,
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
          <View
            style={[styles.segment, styles.marginH16, styles.marginBottom24]}>
            <View style={[styles.segmentItem, styles.backgroundWhite]}>
              <Text style={styles.textAction}>Surat</Text>
            </View>
            <View style={styles.segmentItem}>
              <Text style={styles.textAction}>Halaman</Text>
            </View>
            <View style={styles.segmentItem}>
              <Text style={styles.textAction}>Juz</Text>
            </View>
          </View>
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
                <CheckBox checked={true} color={colors.tertiary} />
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
                <CheckBox checked={true} color={colors.tertiary} />
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
                <CheckBox checked={false} color={colors.tertiary} />
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
                <CheckBox checked={false} color={colors.tertiary} />
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
                <CheckBox checked={false} color={colors.tertiary} />
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
                <CheckBox checked={false} color={colors.tertiary} />
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
                <CheckBox checked={false} color={colors.tertiary} />
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
                <CheckBox checked={false} color={colors.tertiary} />
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
                <CheckBox checked={false} color={colors.tertiary} />
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
                <CheckBox checked={false} color={colors.tertiary} />
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
                <CheckBox checked={false} color={colors.tertiary} />
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
                <CheckBox checked={false} color={colors.tertiary} />
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
                <CheckBox checked={false} color={colors.tertiary} />
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
                <CheckBox checked={false} color={colors.tertiary} />
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
                <CheckBox checked={false} color={colors.tertiary} />
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
