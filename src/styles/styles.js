import {StyleSheet} from 'react-native';

export const colors = {
  primary: '#00676D',
};

export const styles = StyleSheet.create({
  flex0: {flex: 0},
  flex1: {flex: 1},
  flexHalf: {flexBasis: '50%'},
  row: {flexDirection: 'row'},
  icon: {fontSize: 20, color: 'black'},
  itemEnd: {alignItems: 'flex-end'},
  marginH16: {marginHorizontal: 16},
  textBlack: {color: 'black'},
  textWhite: {color: 'white'},
  card: {
    flex: 1,
    shadowOpacity: 1.0,
    shadowColor: '#000',
    elevation: 5,
    borderRadius: 16,
    padding: 16,
    margin: 8,
  },
  marginTop24: {marginTop: 24},
  gridContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
});
