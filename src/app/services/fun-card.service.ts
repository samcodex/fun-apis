import { Injectable } from '@angular/core';
import { FunApi } from 'src/app/models/fun-apis';
import { BehaviorSubject, Observable, interval, never } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {switchMap, mergeMap} from 'rxjs/operators';

const tenSeconds = 10000;

@Injectable({
  providedIn: 'root'
})
export class FunCardService {
  private checkStream = new BehaviorSubject(false);
  private funApi: FunApi;

  constructor(
    private http: HttpClient
  ) {

  }

  assignConfig(config: FunApi) {
    this.funApi = config;
  }

  triggerApi() {
    this.checkStream.next(true);
  }

  getData() {
    const source = interval(tenSeconds);
    const httpSource = this.fetchData();
    const intervalSource = source.pipe(mergeMap(() => httpSource));

    return this.checkStream
      .pipe(
        switchMap(
          (flag) => {
            return flag ? intervalSource : never();
          }
        )
      );
  }

  fetchData() {
    return this.http.get(this.funApi.url, {responseType: 'text'});
  }
}
