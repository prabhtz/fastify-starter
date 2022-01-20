import * as homeService from '../services/home';

/**
 * Get application information.
 */
export async function getAppInfo() {
  const data = await homeService.getAppInfo();

  return data;
}
