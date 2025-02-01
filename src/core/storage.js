import config from '../config/index.js';
import { storageoperations } from '../modules/operations.js';
import ensureSupport from './support.js';

const db = {
  config,
  local: storageoperations(ensureSupport(window.localStorage)),
  session: storageoperations(ensureSupport(window.sessionStorage)),
};

export default db;
