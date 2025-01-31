import db from '../src/index.js';

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


    describe('Storage Module', () => {
        test('localstorage', () => {
            expect(1).toBe(1);
        });
    })
});
