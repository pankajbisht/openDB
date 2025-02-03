import db from '../src/index.js';
import errorFunctions from '../src/errors/index.js';

jest.mock('../src/errors/index.js', () => ({
  isInvalidArg: jest.fn().mockReturnValue(undefined),
}));

describe('OpenDB Unit Test Case', () => {
  describe('Config Module', () => {
    test('getCurrentNamespace should return the default namespace', () => {
      expect(db.config.getCurrentNamespace()).toBe('app');
      db.config.createNamespace('todo');
      expect(db.config.getCurrentNamespace()).toBe('todo');
    });

    test('createNamespace create new namespace and should return the current namespace', () => {
      db.config.createNamespace('todo');
      expect(db.config.getCurrentNamespace()).toBe('todo');
    });

    test('switchNamespace switch namespace and should return the current namespace', () => {
      db.config.createNamespace('app');
      expect(db.config.getCurrentNamespace()).toBe('app');
    });

    test('getSeparator get default separator(.)', () => {
      expect(db.config.getSeparator()).toBe('.');
    });

    test('setSeparator set default new separator', () => {
      db.config.setSeparator('-');
      expect(db.config.getSeparator()).toBe('-');
    });
  });

  describe('Error Module', () => {
    test('isInvalidArg should return undefined if key is undefined', () => {
      const result = errorFunctions.isInvalidArg();
      expect(result).toBeUndefined();
    });
  });

  describe('Storage Module', () => {
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
    });

    describe('has Method', () => {
      beforeEach(() => {
        db.local.clear();
      });

      test('should return false if key does not exist in localStorage', () => {
        const result = db.local.has();
        expect(result).toBeFalsy();
      });

      test('should return false if key does not exist in localStorage', () => {
        const result = db.local.has('nonexistentKey');
        expect(result).toBeFalsy();
      });

      test('should return false if key is undefined', () => {
        const result = db.local.has(undefined);
        expect(result).toBeFalsy();
      });

      test('should return false if key is null', () => {
        const result = db.local.has(null);
        expect(result).toBeFalsy();
      });

      test('should return false if key is empty string', () => {
        const result = db.local.has('');
        expect(result).toBeFalsy();
      });

      test('should return true if key is present', () => {
        db.local.set('testkey', 'testvalue');
        const result = db.local.has('testkey');
        expect(result).toBe(true);
      });

      test('should return true if number key is present', () => {
        db.local.set(123, 'testvalue');
        const result = db.local.has(123);
        expect(result).toBe(true);
      });
    });
  });
});
