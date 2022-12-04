import {StyleSheet} from 'react-native';

import { SCREEN_WIDTH } from '../../constants/screenUtils';
import {colors} from '../../constants/theme';

export default StyleSheet.create({
  listHeaderLabel: {
    fontSize: 20,
    marginHorizontal: 10,
    marginVertical: 15,
    fontWeight: '500',
    color: colors.GRAY,
  },
  listItem: {
    width: SCREEN_WIDTH / 2 - 15,
    paddingBottom: 10,
    marginHorizontal: 10,
  },
  listColumnWrapper: {
    justifyContent: 'space-between'
  }
});
