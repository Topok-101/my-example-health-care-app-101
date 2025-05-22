import {ReactNode} from 'react'
type IReactNode =  ReactNode[]

export type IUseTranslatorReturn = [
  ReactNode[],
  (_children: IReactNode) => void
]
