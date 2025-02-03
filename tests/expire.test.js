import db from '../src/index.js';

describe('Expiration Handling', () => {
  beforeEach(() => {
    db.local.clear();
  });

  test('1. should return null if key has expired', async () => {
    db.local.set('expiringKey', 'value', { expire: 500 }); // Expires in 500ms
    await new Promise((resolve) => setTimeout(resolve, 600)); // Wait for 600ms
    const result = db.local.get('expiringKey');
    expect(result).toBeNull();
  });

  test('2. should return value if key has not expired', async () => {
    db.local.set('validKey', 'value', { expire: 1000 }); // Expires in 1s
    await new Promise((resolve) => setTimeout(resolve, 500)); // Wait 500ms (still valid)
    const result = db.local.get('validKey');
    expect(result).toBe('value');
  });

  test('3. should return false in has() if key has expired', async () => {
    db.local.set('expiredKey', 'value', { expire: 300 }); // Expires in 300ms
    await new Promise((resolve) => setTimeout(resolve, 400)); // Wait for 400ms
    const result = db.local.has('expiredKey');
    expect(result).toBeFalsy();
  });

  test('4. should return true in has() if key has not expired', async () => {
    db.local.set('activeKey', 'value', { expire: 1000 }); // Expires in 1s
    await new Promise((resolve) => setTimeout(resolve, 500)); // Wait 500ms (still valid)
    const result = db.local.has('activeKey');
    expect(result).toBeTruthy();
  });

  test('5. should refresh expiration time if key is updated before expiration', async () => {
    db.local.set('refreshKey', 'value', { expire: 1000 }); // Expires in 1s
    await new Promise((resolve) => setTimeout(resolve, 500)); // Wait 500ms
    db.local.set('refreshKey', 'newValue', { expire: 1000 }); // Reset expiry
    await new Promise((resolve) => setTimeout(resolve, 700)); // Total 1.2s from initial set
    const result = db.local.get('refreshKey');
    expect(result).toBe('newValue'); // Should still be available
  });
});
