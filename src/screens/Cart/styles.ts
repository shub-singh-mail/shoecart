import {StyleSheet} from 'react-native';

import {SCREEN_HEIGHT} from '../../constants/screenUtils';
import {colors} from '../../constants/theme';

export default StyleSheet.create({
  footerContainer: {
    width: '100%',
    height: 90,
    backgroundColor: 'white',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    shadowOffset: {height: 2, width: 0},
    elevation: 10,
  },
  checkoutButtonContainer: {
    width: '80%',
    height: 50,
    backgroundColor: colors.SECONDARY,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  listEmptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: SCREEN_HEIGHT / 2,
  },
  listEmptyLabel: {
    fontSize: 24,
    fontWeight: '500',
    color: colors.GRAY
  },
  totalPriceLabel: {
    fontSize: 22, 
    marginTop: 2
  },
  checkoutButtonLabel: {
    fontSize: 22, 
    fontWeight: '500'
  }
});
