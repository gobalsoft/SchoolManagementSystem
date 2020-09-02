import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";

import {  throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import{SchoolAcademic} from './student'
@Injectable({
  providedIn: 'root'
})
export class SchoolService {
    uri:string="https://localhost:5000/SchoolMS/";
  student:Array<SchoolAcademic>=[];
 constructor(private httpClient: HttpClient) {
   }
   get(): Observable<SchoolAcademic[]>{
    console.log("get"+this.student);
    //return of(this.student);

    return this.httpClient.get <SchoolAcademic[]>("https://localhost:5000/SchoolMS/api/SchoolAcademic/1")
    .pipe(
      catchError(this.errorHandler)
    )

  }

  editAcademic(id):Observable<SchoolAcademic[]> {
    debugger;
    return this.httpClient
            .get<SchoolAcademic[]>(`${this.uri}/api/Academic/${id}`)
            .pipe(
              catchError(this.errorHandler)
            )
           
    }

  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }
  
}
