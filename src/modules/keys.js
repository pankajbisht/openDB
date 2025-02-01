export default function keys() {
  const keys = [];

  for (let index = 0; index < this.storage.length; index++) {
    keys.push(this.storage.key(index));
  }

  return keys;
}
