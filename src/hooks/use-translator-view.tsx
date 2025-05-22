import {ReactNode, useState} from 'react'

import {IUseTranslatorReturn} from 'types/hooks/use-translator-type'

import i18n from 'configs/i18n'

import {mapRawText} from 'helper'

const useTranslator = (children: ReactNode[]): IUseTranslatorReturn => {
  const [text, setText] = useState<ReactNode[]>(mapRawText(children))
  i18n?.onChange(() => {
    const mapText = mapRawText(children)

    setText([...mapText])
  })
  const mapTranslate = (children: ReactNode[]) => {
    const mapText = mapRawText(children)

    setText([...mapText])
  }

  return [text, mapTranslate]
}

export default useTranslator
