export function unique<T = number | string>(array: T[]) {
  return array.filter((item, index, arr) => arr.indexOf(item) === index);
}

export function arrayToBucket<T extends { id: number }>(array: T[]) {
  return array.reduce<Record<number, T>>((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {});
}
