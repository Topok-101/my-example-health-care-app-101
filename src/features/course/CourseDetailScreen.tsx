import React from 'react'
import {FlatList, View} from 'react-native'
import FastImage from 'react-native-fast-image'

import {
  ButtonHealthCare,
  ClassicHeader,
  CourseCard,
  SVGComponent,
  TextHealthCare
} from 'components'
import {CollapseHealthCare} from 'components/according'
import BackLeft from 'components/header/items/HeaderBackLeft'

import {horizontalScale} from 'helper'

import Images from 'assets/image/icons'
import {svgs} from 'assets/svg'

import {Footer, PackageDetail, ServiceDetail, ServiceSteps} from './components'
import HelpCall from './components/HelpCall'
import PreparationDetail from './components/PreparationDetail'
import {styles} from './style/CourseDetailScreen.style'
import {diagnosisDetailStyle} from './style/DiagnosisDetail.style'

const dataDianosis = [
  {
    id: 1,
    text: '$diagnosis1',
    desc: '$subDiagnosis1',
    data: [
      {
        header: 'ความสมบูรณ์ของเลือด',
        detail: 'CBC (Complete Blood Count)'
      },
      {
        header: 'ความสมบูรณ์ของเลือด',
        detail: 'CBC (Complete Blood Count)'
      },
      {
        header: 'ความสมบูรณ์ของเลือด',
        detail: 'CBC (Complete Blood Count)'
      }
    ],
    icon: svgs.SVGWater,
    detail: true
  },
  {
    id: 2,
    data: [],
    text: '$diagnosis2',
    desc: '$subDiagnosis2',
    icon: svgs.SVGPsychiatrist,
    detail: false
  },
  {
    id: 3,
    data: [],
    text: '$diagnosis3',
    desc: '$subDiagnosis3',
    icon: svgs.SVGKidney,
    detail: false
  },
  {
    id: 4,
    data: [
      {
        header: 'ความสมบูรณ์ของเลือด',
        detail: 'CBC (Complete Blood Count)'
      },
      {
        header: 'ความสมบูรณ์ของเลือด',
        detail: 'CBC (Complete Blood Count)'
      },
      {
        header: 'ความสมบูรณ์ของเลือด',
        detail: 'CBC (Complete Blood Count)'
      }
    ],
    text: '$diagnosis4',
    desc: '$subDiagnosis4',
    icon: svgs.SVGLiver,
    detail: true
  },
  {
    id: 5,
    text: '$diagnosis5',
    desc: '$subDiagnosis5',
    icon: svgs.SVGCancer,
    data: [
      {
        header: 'ความสมบูรณ์ของเลือด',
        detail: 'CBC (Complete Blood Count)'
      },
      {
        header: 'ความสมบูรณ์ของเลือด',
        detail: 'CBC (Complete Blood Count)'
      },
      {
        header: 'ความสมบูรณ์ของเลือด',
        detail: 'CBC (Complete Blood Count)'
      }
    ],
    detail: true
  }
]
const CourseDetailScreen = () => {
  return (
    <View style={styles.container}>
      <ClassicHeader
        headerLeft={<BackLeft />}
        style={styles.bgwhite}
        title={'$detail'}
      />
      <FlatList
        ListHeaderComponent={
          <>
            <View style={[styles.bannerConatiner]}>
              <CourseCard packageType={'worker'} />
            </View>
            <View style={[styles.mainContainer]}>
              <PackageDetail />

              <HelpCall />

              <ServiceDetail />
            </View>
            <View>
              <View style={[diagnosisDetailStyle.mainConatiner]}>
                <TextHealthCare
                  style={diagnosisDetailStyle.text18Grey900}
                  textType="bold">
                  $diagnosisTitle
                </TextHealthCare>
              </View>
            </View>
          </>
        }
        data={dataDianosis}
        renderItem={item => {
          return (
            <CollapseHealthCare
              ContainerStyle={diagnosisDetailStyle.accordionContainer}
              renderTitleView={collapse => {
                return (
                  <View style={[diagnosisDetailStyle.listContainer]}>
                    <View style={diagnosisDetailStyle.rowCenter}>
                      <View style={diagnosisDetailStyle.mg16}>
                        <SVGComponent
                          key={'icon'}
                          source={item.item.icon}
                          width={24}
                          height={24}
                        />
                      </View>
                      <View>
                        <TextHealthCare
                          key={'textTitle'}
                          style={diagnosisDetailStyle.text16Black}
                          textType="bold">
                          {item.item.text}
                        </TextHealthCare>
                        <TextHealthCare
                          key={'textDesc'}
                          style={diagnosisDetailStyle.text12Black}
                          fontType="jm">
                          {item.item.desc}
                        </TextHealthCare>
                      </View>
                    </View>

                    {item.item.detail && (
                      <FastImage
                        key={'iconDown'}
                        source={
                          collapse ? Images.chevronUp : Images.chevronDown
                        }
                        style={diagnosisDetailStyle.icon}
                      />
                    )}
                  </View>
                )
              }}
              renderCollapseView={
                <>
                  {item.item.data.map((item, idx) => (
                    <View
                      style={[
                        diagnosisDetailStyle.accordionContentContainer,
                        {
                          width: horizontalScale(245),
                          marginLeft: horizontalScale(40)
                        }
                      ]}
                      key={idx}>
                      <TextHealthCare
                        style={diagnosisDetailStyle.textAccodionHeader}
                        fontType="ibm"
                        textType="bold">
                        {item.header}
                      </TextHealthCare>
                      <TextHealthCare
                        style={diagnosisDetailStyle.textAccodionDesc}
                        fontType="jm">
                        {item.detail}
                      </TextHealthCare>
                    </View>
                  ))}
                </>
              }
            />
          )
        }}
        ListFooterComponent={
          <View style={styles.mainContainer}>
            <PreparationDetail />

            <ServiceSteps />
            <View>
              <View style={styles.buttonContainer}>
                <View style={styles.mg12}>
                  <ButtonHealthCare
                    title={'$askChat'}
                    size="small"
                    type="outline"
                    width={117}
                  />
                </View>
                <View>
                  <ButtonHealthCare
                    title={'$shareToOther'}
                    size="small"
                    type="outline"
                    width={164}
                  />
                </View>
              </View>
              <ButtonHealthCare title={'$reserveService'} size="small" />
            </View>
            <Footer />
          </View>
        }
      />
    </View>
  )
}

export default CourseDetailScreen
