import {Item} from "../../models/commons/Item";

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

export function getId(items: Item[]) {

  if (!items?.length) {
    return;
  }

  return items[0]?.id;
}

export function getIds(items: Item[]) {

  if (!items?.length) {
    return;
  }

  return items.map(i => i.id);
}
