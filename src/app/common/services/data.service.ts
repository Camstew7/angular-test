import {map} from 'rxjs/operators'
import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs/Rx'
import {Data} from '../models/data.model'

// make sure to install rxjs-compat to be able to use Observable.of correctly
@Injectable()

export class DataService {

  DATA_API: string

  constructor(
    private http: HttpClient
  ) {}

  getAllData() {
    return this.http.get(`${this.DATA_API}/data`)
      .pipe(map(data => new Data(data)))
      .catch((err: any) => {
        return Observable.of(null)
      })
  }

  getOneData(dataID) {
    return this.http.get(`${this.DATA_API}/data/?id=${dataID}`)
      .pipe(map(data => new Data(data)))
      .catch((err: any) => {
        return Observable.of(null)
      })
  }

  addData(data) {
    return this.http.post(`${this.DATA_API}/data`, {
      headers: {
        'Content-Type': 'application/json'
      },
      body:data
    })
      .catch((err) => {
        console.error(err)
        return Observable.of(null)
      })
  }

  editData(dataID, newData) {
    return this.http.put(`${this.DATA_API}/data/?id=${dataID}`, newData)
      .catch((err) => {
        console.error(err)
        return Observable.of(null)
      })
  }

  deleteData(dataID) {
    return this.http.delete(`${this.DATA_API}/data/?id=${dataID}`)
      .catch((err) => {
        console.error(err)
        return Observable.of(null)
      })
  }
}