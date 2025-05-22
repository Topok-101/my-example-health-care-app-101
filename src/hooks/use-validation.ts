import {IValidNPN} from 'types/hooks'

export const validateEmail = (email: string) => {
  //Validates the email address
  const emailRegex = new RegExp(
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
  )
  if (email === '') {
    return {
      message: 'Please enter your email',
      status: {isError: true, isCorrect: false}
    }
  } else if (!emailRegex.test(email)) {
    return {
      message: 'Email is not valid. Please provide a valid email format',
      status: {isError: true, isCorrect: false}
    }
  } else {
    return {
      message: 'Success',
      status: {isError: false, isCorrect: true}
    }
  }
}

export const validatePhone = (phone: string) => {
  //Validates the phone number
  const phoneRegex = new RegExp(/^(\+91-|\+91|0)?\d{10}$/)
  if (phone === '') {
    return {
      message: 'Please enter your phone number',
      status: {isError: true, isCorrect: false}
    }
  } else if (!phoneRegex.test(phone)) {
    return {
      message: 'Phone number is not valid. Please provide a valid phone number',
      status: {isError: true, isCorrect: false}
    }
  } else {
    return {
      message: 'Success',
      status: {isError: false, isCorrect: true}
    }
  }
}

export const useEmailValidationAndPhoneNumber = (value: string): IValidNPN => {
  const mailFormat = new RegExp(
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|(^[0-9]{10})+$/
  )
  if (value === '') {
    return {
      message: 'Please enter your Email or Phone Number',
      status: {isError: true, isCorrect: false}
    }
  } else if (!mailFormat.test(value)) {
    return {
      message:
        'EmailAddress/PhoneNumber is not valid. Please provide a valid Email Address or phone number',
      status: {isError: true, isCorrect: false}
    }
  } else {
    return {
      message: 'Success',
      status: {isError: false, isCorrect: true}
    }
  }
}

export const usePasswordValidation = (value: string): IValidNPN => {
  const minLength = 8
  const maxLength = 50

  const min8AndAtleastOneLetterOrOneNumberAndOneSpecialChar = new RegExp(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,50}$/
  )

  if (value.length < minLength || value.length > maxLength) {
    return {
      message: 'minimum 8 and maximum 50 characters',
      status: {isError: true, isCorrect: false}
    }
  } else if (!min8AndAtleastOneLetterOrOneNumberAndOneSpecialChar.test(value)) {
    return {
      message:
        'Your password must be at least one uppercase letter and one lowercase letter.',
      status: {isError: true, isCorrect: false}
    }
  } else {
    return {
      message: 'Success',
      status: {isError: false, isCorrect: true}
    }
  }
}

export const usePasswordLengthValidation = (value: string): IValidNPN => {
  const minLength = 8
  const maxLength = 50

  if (value.length < minLength || value.length > maxLength) {
    return {
      message: 'minimum 8 and maximum 50 characters',
      status: {isError: true, isCorrect: false}
    }
  } else {
    return {
      message: 'Success',
      status: {isError: false, isCorrect: true}
    }
  }
}
export const usePasswordLetterValidation = (value: string): IValidNPN => {
  const atLeastOneUpperCaseOneLowerCaseAndOneNumber = new RegExp(
    /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*/
  )
  if (!atLeastOneUpperCaseOneLowerCaseAndOneNumber.test(value)) {
    return {
      message:
        'Your password must be at least one uppercase letter and one lowercase letter.',
      status: {isError: true, isCorrect: false}
    }
  } else {
    return {
      message: 'Success',
      status: {isError: false, isCorrect: true}
    }
  }
}

export const useValidateComparePassword = (
  password: string,
  confirmPassword: string
): IValidNPN => {
  if (password !== confirmPassword) {
    return {
      message: 'Confirm password fields value must be matched.',
      status: {isError: true, isCorrect: false}
    }
  } else {
    return {
      message: 'Success',
      status: {isError: false, isCorrect: true}
    }
  }
}

export const validateMinLength = (value: string, length: number) => {
  //Validates value length

  return value.length < length
    ? {
        message: `This field require minimum ${length} characters`,
        status: {isError: true, isCorrect: false}
      }
    : {
        message: 'Success',
        status: {isError: false, isCorrect: true}
      }
}

export const validateMaxLength = (value: string, length: number) => {
  //Validates value length

  return value.length > length
    ? {
        message: `This field require maximum ${length} characters`,
        status: {isError: true, isCorrect: false}
      }
    : {
        message: 'Success',
        status: {isError: false, isCorrect: true}
      }
}
