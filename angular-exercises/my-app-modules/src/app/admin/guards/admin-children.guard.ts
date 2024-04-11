import { CanActivateFn } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { inject } from '@angular/core';

export const adminChildrenGuard: CanActivateFn = (route, state) => {
  console.log("Guardia Children");
  // Ricavare info di chi è loggato
  const authService: AuthService = inject(AuthService);

  if (!authService.userLogged$.value)
    return false
  
  console.log("Utente loggato", authService.userLogged$.value);
  
  // Effettuare controllo sul ruolo. Ruolo !== 'Reader'
  // const doActivate = authService.userLogged?.role == 'Editor' || authService.userLogged?.role == 'Admin';
  return !(authService.userLogged$.value?.role == 'Reader');
};
