import {StyleSheet} from 'react-native';

import { SCREEN_WIDTH } from '../../constants/screenUtils';

export default StyleSheet.create({
  shoeItemContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: SCREEN_WIDTH / 2,
    overflow: 'hidden'
  },
  productImage: {
    width: '100%', 
    height: 150
  },
  productInfoContainer: {
    flex: 1, 
    width: '100%', 
    alignItems: 'flex-start',
    marginBottom: 10,
    padding: 5
  },
  productName: {
    fontSize: 24,
    fontWeight: '500'
  },
  productInfo: {
    fontSize: 18
  }
});
