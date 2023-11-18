import { CanActivateFn } from '@angular/router';

export const autorizationGuard: CanActivateFn = (route, state) => {
  return false;
};
