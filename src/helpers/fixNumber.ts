import { BigNumber as BN } from 'bignumber.js'

interface IOptions {
  fixed?: number
  roundDown?: boolean
}

/**
 *
 * @param _number default is 4
 * @param options default is true
 * @returns
 */
const fixNumber = (_number: string | number, options?: IOptions) => {
  const fixed = options?.fixed ?? 4
  const roundDown = options?.roundDown ?? true
  return new BN(_number).toFixed(fixed, roundDown ? BN.ROUND_DOWN : BN.ROUND_UP)
}

export default fixNumber
