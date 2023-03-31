/* eslint-disable no-useless-escape */
export const isStringFloatNumber = (str: string) => {
  const regex: RegExp = /^(\d*(?:\.\d+)?)[\.\d]*$/
  return regex.test(str)
}
