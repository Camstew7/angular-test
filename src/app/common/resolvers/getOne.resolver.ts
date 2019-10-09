import {Injectable} from '@angular/core'
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router'
import {Observable} from 'rxjs'
import {DataService} from '../services/data.service'
import {Resolve} from './resolver'

@Injectable()

export class GetOneResolver implements Resolve <any> {
  constructor (
    private dataService: DataService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any>| any {
    return this.dataService.getOneData(route.params.id)
  }
}