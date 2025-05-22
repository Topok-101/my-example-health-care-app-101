import React from 'react'

import {IValidNPN} from 'types/hooks'

interface Iinput {
  password: string
  emailNumberPhone: string
  StatusEmail: IValidNPN | undefined
  StatusPassword: IValidNPN | undefined
}

class EmailUserAuth {
  /**
   * onSubmit
   */
  public onSubmit(
    setStatusUsername: React.Dispatch<
      React.SetStateAction<IValidNPN | undefined>
    >,
    SetStatusPassword: React.Dispatch<
      React.SetStateAction<IValidNPN | undefined>
    >,
    input: Iinput
  ): boolean {
    input.emailNumberPhone === '' &&
      setStatusUsername({status: {isError: true, isCorrect: false}})
    input.password === '' &&
      SetStatusPassword({status: {isError: true, isCorrect: false}})
    if (
      input.StatusEmail?.status.isCorrect &&
      input.StatusPassword?.status.isCorrect
    ) {
      return true
    } else {
      return false
    }
  }

  /**
   * onResetStatusEmail
   */
  public onResetStatusEmail(
    setStatusUsername: React.Dispatch<
      React.SetStateAction<IValidNPN | undefined>
    >
  ) {
    setStatusUsername({status: {isCorrect: false, isError: false}})
  }

  /**
   * onResetStatusPassword
   */
  public onResetStatusPassword(
    SetStatusPassword: React.Dispatch<
      React.SetStateAction<IValidNPN | undefined>
    >
  ) {
    SetStatusPassword({status: {isCorrect: false, isError: false}})
  }
}

export const emailUserAuth = new EmailUserAuth()
