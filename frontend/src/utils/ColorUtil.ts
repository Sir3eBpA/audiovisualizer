export function isHexColor (hex: string) : boolean {
  return typeof hex === 'string' && hex.length === 7;
}
