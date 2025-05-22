import React, {ReactNode} from 'react'
import {Text} from 'react-native'

import i18n from 'configs/i18n'

const mapRawText = (children: ReactNode[]) => {
  return children.map((child, idx) => {
    if (typeof child === 'string') {
      const rawText = child
        .toString()
        .split(/(\s+)/)
        .map(_rawText =>
          _rawText.includes('$') ? i18n.t(_rawText.replace('$', '')) : _rawText
        )
        .join('')

      return <Text key={idx}>{rawText}</Text>
    } else {
      return child
    }
  })
}

export {mapRawText}
