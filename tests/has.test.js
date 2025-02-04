import db from '../dist/opendb-esm.js';

describe('has Method', () => {
  beforeEach(() => {
    db.local.clear();
  });

  test('1. should return false if key does not exist in localStorage', () => {
    const result = db.local.has();
    expect(result).toBeFalsy();
  });

  test('2. should return false if key does not exist in localStorage', () => {
    const result = db.local.has('nonexistentKey');
    expect(result).toBeFalsy();
  });

  test('3. should return false if key is undefined', () => {
    const result = db.local.has(undefined);
    expect(result).toBeFalsy();
  });

  test('4. should return false if key is null', () => {
    const result = db.local.has(null);
    expect(result).toBeFalsy();
  });

  test('5. should return false if key is empty string', () => {
    const result = db.local.has('');
    expect(result).toBeFalsy();
  });

  test('6. should return true if key is present', () => {
    db.local.set('testkey', 'testvalue');
    const result = db.local.has('testkey');
    expect(result).toBe(true);
  });

  test('7. should return true if number key is present', () => {
    db.local.set(123, 'testvalue');
    const result = db.local.has(123);
    expect(result).toBe(true);
  });

  test('8. should return true if key exists but has an empty string as value', () => {
    db.local.set('emptyStringKey', '');
    const result = db.local.has('emptyStringKey');
    expect(result).toBe(false);
  });

  test('9. should return true if key exists but value is null', () => {
    db.local.set('nullKey', null);
    const result = db.local.has('nullKey');
    expect(result).toBe(false);
  });

  test('10. should return true if key exists but value is undefined', () => {
    db.local.set('undefinedKey', undefined);
    const result = db.local.has('undefinedKey');
    expect(result).toBe(false);
  });
});
