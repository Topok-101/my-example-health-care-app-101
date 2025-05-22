import {ReactNode} from 'react'

export type ICheckBoxHealthCareProps = {
  label?: string
  customLabel?: ReactNode
  value: boolean
  isActive?: boolean
  colorTextActive?: string
  checkable?: boolean
  onValueChange?:
    | (((value: boolean) => void) &
        ((value: boolean) => void) &
        ((value: boolean) => void))
    | undefined
}

export type ICheckBoxGroupValue = {id: number; value: string}

export type ICheckBoxGroupHealthCareProps = {
  data: ICheckBoxGroupValue[]
  value: ICheckBoxGroupValue[]
  onValueChange?:
    | (((value: ICheckBoxGroupValue[]) => void) &
        ((value: ICheckBoxGroupValue[]) => void) &
        ((value: ICheckBoxGroupValue[]) => void))
    | undefined
}

export type IRadioBoxGroupHealthCareProps = {
  data: ICheckBoxGroupValue[]
  value?: ICheckBoxGroupValue
  onValueChange?:
    | (((value: ICheckBoxGroupValue) => void) &
        ((value: ICheckBoxGroupValue) => void) &
        ((value: ICheckBoxGroupValue) => void))
    | undefined
}
