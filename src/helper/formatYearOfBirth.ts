const formatToBC = (age: number): number => {
  return new Date().getFullYear() - age
}

export {formatToBC}
