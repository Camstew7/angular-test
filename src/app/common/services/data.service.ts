import {map, catchError} from 'rxjs/operators'
import {Injectable} from '@angular/core'
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs/Rx'
import {DataFormat} from '../models/data.model'


import{environment} from '../../../environments/environment.prod'
// make sure to install rxjs-compat to be able to use Observable.of correctly
@Injectable()

export class DataService {

  DATA_API_URL: string = environment.DATA_API_URL

  constructor(
    private http: HttpClient
  ) {}

  getAllData() {
    return this.http.get(`${this.DATA_API_URL}/data`)
      .pipe(map((data) => {
        let arr = []
        for(let key in data) {
          arr.push(new DataFormat(data[key]))
        }

        return arr
      }))
      .catch((err: any) => {
        console.error(err)
        return Observable.of(null)
      })
  }

  getOneData(dataID) {
    return this.http.get(`${this.DATA_API_URL}/data/?id=${dataID}`)
      .pipe(map(data => new DataFormat(data)))
      .catch((err: any) => {
        console.error(err)
        return Observable.of(null)
      })
  }

  addData(data) {
    console.log(data)
    return this.http.post(`${this.DATA_API_URL}/data`, data)
      .subscribe({
        next() {console.log('data posted succesfully')},
        error(err) {console.error(err)}
      })
      // .catch((err) => {cd .
      //   console.error(err)
      //   return Observable.of(null)
      // })
  }

  editData(dataID, newData) {
    return this.http.put(`${this.DATA_API_URL}/data/?id=${dataID}`, newData)
      .catch((err) => {
        console.error(err)
        return Observable.of(null)
      })
  }

  deleteData(dataID) {
    return this.http.delete(`${this.DATA_API_URL}/data/?id=${dataID}`)
      .catch((err) => {
        console.error(err)
        return Observable.of(null)
      })
  }
}