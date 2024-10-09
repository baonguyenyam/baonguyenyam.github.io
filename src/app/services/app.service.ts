import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AppService {

  private apiUrl = 'https://api.demo.com/v1';
  private httpClient = inject(HttpClient);
  constructor() { }


  fetchDemo(id: string) {
    return this.httpClient
      .get(
        `${this.apiUrl}/${id}`
      )
      .pipe(map((data) => data))
  }

}
