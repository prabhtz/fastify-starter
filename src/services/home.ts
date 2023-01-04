import * as pkg from '../../package.json';

import { AppInfoInterface } from '../schemas/home';

/**
 * Get application informatin.
 *
 * @returns {Promise<AppInfoInterface>}
 */
export async function getAppInfo(): Promise<AppInfoInterface> {
  return {
    name: pkg.name,
    version: pkg.version,
    description: pkg.description
  }
}
