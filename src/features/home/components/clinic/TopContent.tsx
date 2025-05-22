import dayjs from 'dayjs'
import React, {useState} from 'react'
import {View} from 'react-native'

import {ITopClinic} from 'types/features/home-type'

import {BadgeStatus, TextHealthCare} from 'components'

import {stylesTopContents} from 'features/home/style/clinic'

import {colors} from 'configs/theme'

import {
  concatTimeToNumber,
  getDays,
  horizontalScale,
  verticalScale
} from 'helper'

const TopContent: React.FC<ITopClinic> = (props): JSX.Element => {
  const {address, description, distance, status, time} = props

  const timer = time[getDays() as keyof typeof time][0]

  const [isClose, setClose] = useState<boolean>(false)
  const [isOpen, setOpen] = useState<boolean>(false)
  // console.log(concatTimeToNumber(now) > concatTimeToNumber(timer.close))

  React.useEffect(() => {
    setInterval(() => {
      const now = dayjs().format('HH:mm')
      if (
        concatTimeToNumber(now) >= concatTimeToNumber(timer.open) &&
        concatTimeToNumber(now) < concatTimeToNumber(timer.close)
      ) {
        setOpen(status && true)
        setClose(false)
      } else {
        setOpen(false)
        setClose(true)
      }
    }, 1000)
  }, [])

  return (
    <View>
      <View style={stylesTopContents.container}>
        <View>
          <TextHealthCare
            textType="bold"
            style={stylesTopContents.title}
            numberOfLines={1}>
            {description}
          </TextHealthCare>
        </View>

        <View style={stylesTopContents.containerStatus}>
          {isOpen && <BadgeStatus TextType="bold" title="$open" height={36} />}
          {isClose && (
            <BadgeStatus
              TextType="bold"
              title="$close"
              bgColor={colors.red}
              fontColor={colors.white}
              height={36}
            />
          )}
        </View>
      </View>
      <View
        style={[stylesTopContents.container, {paddingTop: verticalScale(8)}]}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end'
          }}>
          <TextHealthCare style={stylesTopContents.txtDescription}>
            {address}
          </TextHealthCare>
          <TextHealthCare
            style={[
              stylesTopContents.txtDescription,
              {paddingHorizontal: horizontalScale(8)}
            ]}>
            $dot
          </TextHealthCare>
          <TextHealthCare style={stylesTopContents.txtDescription}>
            {distance}
          </TextHealthCare>
        </View>
        <TextHealthCare style={{color: colors.greyColorsGrey400}}>
          {timer.open} - {timer.close}
        </TextHealthCare>
      </View>
    </View>
  )
}

export default TopContent
