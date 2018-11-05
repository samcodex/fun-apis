import { Injectable } from '@angular/core';
import { FunApi } from '../models/fun-apis';
import { Observable, of } from 'rxjs';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersistentService {

  constructor(
    protected localStorage: LocalStorage
  ) { }

  persist(funApis: FunApi[]) {
    this.localStorage.setItem('funApis', funApis).subscribe(() => {});
  }

  fetch(): Observable<FunApi[]> {
    return this.localStorage.getItem<FunApi[]>('funApis')
    .pipe(
      map(data => data as FunApi[])
    );
  }
}
