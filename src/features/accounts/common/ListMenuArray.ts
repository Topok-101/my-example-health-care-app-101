import {IListItems} from 'types/components'

import {colors} from 'configs/theme'

import Images from 'assets/image/icons'

export const itemMenu: IListItems[] = [
  {
    title: '$detailUser',
    img: Images.userOutline,
    color: colors.blue600
    //   onPress: () => console.log('kuys')
  },
  {
    title: '$memberHealthCare',
    img: Images.HealthCare
    //   onPress: () => console.log('kuys')
  },
  {
    title: '$setting',
    img: Images.settingOutline,
    color: colors.blue600
    //   onPress: () => console.log('kuys')
  },
  {
    title: '$shareOpininon',
    img: Images.email,
    color: colors.blue600
    //   onPress: () => console.log('kuys')
  }
]
