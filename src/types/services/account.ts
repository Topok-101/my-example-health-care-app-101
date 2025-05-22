export interface IRequestCheckEmail {
  user_email: string
}

export interface IRequestRegisterUser {
  user_firstname: string
  user_surename: string
  user_email: string
  user_tel: string
}

export interface IRequestCreateUser {
  user_firstname: string
  user_surename: string
  user_email: string
  user_tel: string
  user_password: string
}

export interface IRequestCreateAccount {
  account_email: string
  account_password: string
}

export interface IRequestUpdateIdUserAccount {
  idaccountuser: string
  iduser: string
}
