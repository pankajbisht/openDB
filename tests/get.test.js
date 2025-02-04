import db from '../dist/opendb-esm.js';

describe('get Method', () => {
  beforeEach(() => {
    db.local.clear();
  });

  test('should return null if key does not exist in localStorage', () => {
    const result = db.local.get();
    expect(result).toBeNull();
  });

  test('should return null if key does not exist in localStorage', () => {
    const result = db.local.get('nonexistentKey');
    expect(result).toBeNull();
  });

  test('should return null if key is undefined', () => {
    const result = db.local.get(undefined);
    expect(result).toBeNull();
  });

  test('should return null if key is null', () => {
    const result = db.local.get(null);
    expect(result).toBeNull();
  });

  test('should return null if key is empty string', () => {
    const result = db.local.get('');
    expect(result).toBeNull();
  });

  test('should return the stored value if key exists', () => {
    db.local.set('testKey', 'testValue');
    const result = db.local.get('testKey');
    expect(result).toBe('testValue');
  });

  test('should return a number if stored value is a number', () => {
    db.local.set('numberKey', 42);
    const result = db.local.get('numberKey');
    expect(result).toBe(42);
  });

  test('should return an object if stored value is an object', () => {
    const obj = { a: 1, b: 2 };
    db.local.set('objectKey', obj);
    const result = db.local.get('objectKey');
    expect(result).toEqual(obj);
  });

  test('should return an array if stored value is an array', () => {
    const arr = [1, 2, 3];
    db.local.set('arrayKey', arr);
    const result = db.local.get('arrayKey');
    expect(result).toEqual(arr);
  });
});
