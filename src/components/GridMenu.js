import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from '../styles/styles';

const GridMenu = (props) => {
  return (
    <View style={styles.flexHalf}>
      <LinearGradient
        useAngle={true}
        angle={45}
        start={{x: 0.0, y: 1.0}}
        end={{x: 1.0, y: 1.0}}
        colors={['#17B582', '#00676D']}
        locations={[0, 1.0]}
        style={styles.card}>
        <TouchableOpacity>{props.children}</TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default GridMenu;
