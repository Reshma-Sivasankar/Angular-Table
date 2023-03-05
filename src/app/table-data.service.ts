import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError  } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TableDataService {

  public baseUrl: string = "/assets/lenders.json"; // Tamper with the path to test the page when the there is no data as per Test Scenario 3

  constructor(private httpClient: HttpClient) { }

  public getLenderDetails(): Observable<any> {
    return this.httpClient.get(this.baseUrl).pipe(
      catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message);
  }
}
