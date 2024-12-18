export const isHexadecimal = (hexadecimal = '') =>
  /^#[0-9a-f]{3}(?:[0-9a-f]{3})?$/i.test(hexadecimal);
