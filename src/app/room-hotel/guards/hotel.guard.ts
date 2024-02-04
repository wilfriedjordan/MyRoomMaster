import { inject } from '@angular/core';
import { CanActivateFn,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
export const hotelGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean => {
  const router = inject(Router)
  const id =+ route.url[1].path
  if(isNaN(id)||id<= 0){
    alert('Hotel Not Fund')
    router.navigateByUrl('')
    return false
  }
  return true;
};
