export function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

export function makeId(length: number) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function toArray(val: string, separator: string) {
  if (!val) {
    return [];
  }

  return val.split(separator);
}
