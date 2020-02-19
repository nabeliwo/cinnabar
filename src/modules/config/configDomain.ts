export type Beat = '8' | '16' | '32'
export const beatEnum = {
  8: '8',
  16: '16',
  32: '32',
} as const
export function assertIsBeat(value: any): asserts value is Beat {
  if (!Object.values(beatEnum).includes(value)) {
    throw new Error(`Expected 'value' to be beatEnum('8' or '16' or '32'), but received ${value}`)
  }
}
