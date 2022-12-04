import {StyleSheet} from 'react-native';

import { colors } from '../../constants/theme';

export default StyleSheet.create({
  cartItemContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  productImage: {
    flex: 0.5,
    height: 100,
  },
  productInfoContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'flex-start',
    marginBottom: 10,
    padding: 5,
  },
  productName: {
    fontSize: 22,
    fontWeight: '500',
  },
  productInfo: {
    fontSize: 18,
  },
  deleteButtonContainer: {
    height: 30,
    width: 30,
    borderRadius: 15,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: colors.SECONDARY,
    position: 'absolute',
    top: 10,
    right: 10
  },
});
