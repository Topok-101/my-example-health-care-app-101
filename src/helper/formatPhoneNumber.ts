const formatPhoneNumber = (
  phone: string
): {original: string; format: string} => {
  const original = phone.replace("+66","").replace(/[^\d]/g, '')
  const isZeroFirstChar = new RegExp('^0')
  // const original = raw.replace(/[^\d]/g, '')
  phone = original
  phone = isZeroFirstChar.test(phone) ? phone.slice(1) : phone
  const match = phone.match(/^(\d{0,2})(\d{0,3})(\d{0,4})$/)

  return match
    ? {
        original,
        format: `+66 ${match[1]}-${match[2]}${match[3]}`
      }
    : {
        original,
        format: original
      }
}

export {formatPhoneNumber}
