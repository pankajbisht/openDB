export default function hasExpired(expiryTimestamp) {
  return expiryTimestamp ? Date.now() > expiryTimestamp : false;
}
