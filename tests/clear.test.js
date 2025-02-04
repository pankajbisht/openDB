import db from '../dist/opendb-esm.js';

describe('Clear Method', () => {
  beforeEach(() => {
    db.local.clear(); // Ensure storage is empty before each test
  });

  test('should clear all keys from storage', () => {
    db.local.set('key1', 'value1');
    db.local.set('key2', 'value2');
    db.local.clear();

    expect(db.local.get('key1')).toBeNull();
    expect(db.local.get('key2')).toBeNull();
  });

  test('should return false in has() for all keys after clear', () => {
    db.local.set('key1', 'value1');
    db.local.set('key2', 'value2');
    db.local.clear();

    expect(db.local.has('key1')).toBeFalsy();
    expect(db.local.has('key2')).toBeFalsy();
  });

  test('should work correctly when storage is already empty', () => {
    db.local.clear(); // Clearing an already empty storage should not throw an error
    expect(() => db.local.clear()).not.toThrow();
  });

  test('should remove expired and non-expired keys alike', async () => {
    db.local.set('key1', 'value1', { expires: 500 }); // Expires in 500ms
    db.local.set('key2', 'value2'); // No expiration
    await new Promise((resolve) => setTimeout(resolve, 600)); // Wait for key1 to expire
    db.local.clear();

    expect(db.local.has('key1')).toBeFalsy();
    expect(db.local.has('key2')).toBeFalsy();
  });
});
