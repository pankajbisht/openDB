export default function ensureSupport(storage) {
  if (!storage) {
    throw new Error('Storage is not supported in this environment.');
  }
  return storage;
}
