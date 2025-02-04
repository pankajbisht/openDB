import db from '../dist/opendb-esm.js';

describe('Remove Method', () => {
  beforeEach(() => {
    db.local.clear();
  });

  test('should remove an existing key', () => {
    db.local.set('testKey', 'testValue');
    db.local.remove('testKey');
    const result = db.local.get('testKey');
    expect(result).toBeNull();
  });

  test('should not throw error if removing non-existent key', () => {
    expect(() => db.local.remove('nonExistentKey')).not.toThrow();
  });

  test('should return false in has() after removing a key', () => {
    db.local.set('removableKey', 'value');
    db.local.remove('removableKey');
    expect(db.local.has('removableKey')).toBeFalsy();
  });

  test('should remove a key before expiration', async () => {
    db.local.set('shortLivedKey', 'value', { expires: 2000 }); // Expires in 2s
    db.local.remove('shortLivedKey'); // Remove it immediately
    const result = db.local.get('shortLivedKey');
    expect(result).toBeNull();
  });

  test('should remove an expired key', async () => {
    db.local.set('expiredKey', 'value', { expires: 500 }); // Expires in 500ms
    await new Promise((resolve) => setTimeout(resolve, 600)); // Wait 600ms (ensuring expiration)
    db.local.remove('expiredKey');
    expect(db.local.has('expiredKey')).toBeFalsy();
  });
});
