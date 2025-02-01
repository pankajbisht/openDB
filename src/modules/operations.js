import storageMethods from './index.js';

export function storageoperations(storage) {
  return {
    storage,
    get count() {
      return storage.length;
    },
    ...storageMethods,
  };
}
