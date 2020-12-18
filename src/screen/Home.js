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
  View,
} from 'native-base';
import {TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from '../styles/styles';
import LogoKarim from '../assets/icon/svg/logokarim.svg';
import OpenQuran from '../assets/icon/svg/openbook.svg';
import Bookmark from '../assets/icon/svg/bookmark.svg';
import Memorized from '../assets/icon/svg/book.svg';
import Prayer from '../assets/icon/svg/prayer.svg';
import GridMenu from '../components/GridMenu';

class Home extends Component {
  render() {
    return (
      <Container>
        <Header transparent>
          <Left style={styles.flex0}>
            <Button transparent>
              <Icon name="bars" type="FontAwesome5" style={styles.icon} />
            </Button>
          </Left>
          <Body style={styles.marginH16}>
            <Title style={styles.textBlack}>Assalamualaikum</Title>
          </Body>
        </Header>
        <Content padder>
          <LinearGradient
            useAngle={true}
            angle={45}
            start={{x: 0.0, y: 1.0}}
            end={{x: 1.0, y: 1.0}}
            colors={['#17B582', '#00676D']}
            locations={[0, 1.0]}
            style={styles.card}>
            <TouchableOpacity>
              <View style={styles.row}>
                <View style={styles.flex1}>
                  <Text style={styles.textWhite}>Terakhir dibaca</Text>
                  <Title style={styles.marginTop24}>Al-Fatihah</Title>
                </View>
                <LogoKarim width={70} height={70} />
              </View>
            </TouchableOpacity>
          </LinearGradient>
          <View style={styles.gridContainer}>
            <GridMenu>
              <View style={styles.itemEnd}>
                <OpenQuran width={70} height={70} />
              </View>
              <Title style={styles.marginTop24}>Al-Qur'an</Title>
            </GridMenu>
            <GridMenu>
              <View style={styles.itemEnd}>
                <Memorized width={70} height={70} />
              </View>
              <Title style={styles.marginTop24}>Hafalan</Title>
            </GridMenu>
            <GridMenu>
              <View style={styles.itemEnd}>
                <Prayer width={70} height={70} />
              </View>
              <Title style={styles.marginTop24}>Do'a & Dzikir</Title>
            </GridMenu>
            <GridMenu>
              <View style={styles.itemEnd}>
                <Bookmark width={70} height={70} />
              </View>
              <Title style={styles.marginTop24}>Bookmark</Title>
            </GridMenu>
          </View>
        </Content>
      </Container>
    );
  }
}

export default Home;
