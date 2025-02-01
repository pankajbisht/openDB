export default function parse(value) {
  try {
    return JSON.parse(value);
  } catch (err) {
    return value;
  }
}
