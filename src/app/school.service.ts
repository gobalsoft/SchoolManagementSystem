import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";

import {  throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import{SchoolAcademic, SchoolClass} from './student'
@Injectable({
  providedIn: 'root'
})
export class SchoolService {
    uri:string="https://localhost:5000/SchoolMS/";
  student:Array<SchoolAcademic>=[];
  SchoolClaees:Array<SchoolClass>=[];
 constructor(private httpClient: HttpClient) {
   }
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


   get(): Observable<SchoolAcademic[]>{
    console.log("get"+this.student);
    //return of(this.student);

    return this.httpClient.get <SchoolAcademic[]>("https://localhost:5000/SchoolMS/api/SchoolAcademic/1",this.httpOptions)
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

    saveAcademic(datas:any):Observable<SchoolAcademic[]>{

      
      const body=JSON.stringify(datas);

      return this.httpClient.post<SchoolAcademic[]>("https://localhost:5000/SchoolMS/api/Academic"
             ,body,this.httpOptions)
             .pipe(
              catchError(this.errorHandler)
            )
            
        
   
    }
    
     
    Getschoolcls():Observable<SchoolClass[]>{
      debugger;
      console.log("get"+this.SchoolClaees);
      return this.httpClient.get<SchoolClass[]>("https://localhost:5000/SchoolMS/api/GetAllClass/1",this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
    }

  errorHandler(error) {
    debugger;
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
