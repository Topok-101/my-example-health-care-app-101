import React from 'react'
import {TouchableOpacity, View} from 'react-native'

import {TextHealthCare} from 'components'

import {svgs} from 'assets/svg'

import {diagnosisDetailStyle} from '../style/DiagnosisDetail.style'

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

const DiagnosisDetail = () => {
  return (
    <View>
      <View style={diagnosisDetailStyle.mainConatiner}>
        <TextHealthCare style={diagnosisDetailStyle.text18Grey900} textType="bold">
          $diagnosisTitle
        </TextHealthCare>
      </View>
      <View style={diagnosisDetailStyle.width}>
        {dataDianosis.map((i, k) => {
          return <TouchableOpacity key={k}></TouchableOpacity>
        })}
      </View>
      <View style={{flex: 1}}>
        {/* <FlatList
          data={dataDianosis}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <CollapseHealthCare
              renderTitleView={() => {
                return <TextHealthCare>{item.text}</TextHealthCare>
              }}
              renderCollapseView={<TextHealthCare>{item.desc}</TextHealthCare>}
              // ContainerStyle={styles.subContainer}
              // TitleViewStyle={styles.btnStyle}
            />
          )}
        /> */}
      </View>
    </View>
  )
}

export default DiagnosisDetail
