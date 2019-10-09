import {Observable} from 'rxjs'
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router'

export interface Resolve<T> {
  resolve(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): Observable<T> | Promise<T>| T
}