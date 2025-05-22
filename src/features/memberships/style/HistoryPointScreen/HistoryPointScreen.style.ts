import {StyleSheet} from 'react-native'

import {colors} from 'configs/theme'

export const HistoryPointScreenStyle = StyleSheet.create({
  header: {backgroundColor: colors.white},
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 13,
    paddingTop: 32 - 12
  },
  titleContainer: {paddingTop: 12, paddingBottom: 27}
})
