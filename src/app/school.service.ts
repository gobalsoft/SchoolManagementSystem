import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';

import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SchoolAcademic, SchoolClass, SchoolSubject } from './student';
@Injectable({
  providedIn: 'root',
})
export class SchoolService {
  uri: string = 'https://localhost:5000/SchoolMS/';
  student: Array<SchoolAcademic> = [];
  SchoolClaees: Array<SchoolClass> = [];
  schoolId = 1;
  constructor(private httpClient: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  get(): Observable<SchoolAcademic[]> {
    console.log('get' + this.student);
    //return of(this.student);

    return this.httpClient
      .get<SchoolAcademic[]>(
        'https://localhost:5000/SchoolMS/api/SchoolAcademic/1',
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  editAcademic(id): Observable<SchoolAcademic[]> {
    debugger;
    return this.httpClient
      .get<SchoolAcademic[]>(`${this.uri}/api/Academic/${id}`)
      .pipe(catchError(this.errorHandler));
  }

  saveAcademic(datas: any): Observable<SchoolAcademic[]> {
    const body = JSON.stringify(datas);

    return this.httpClient
      .post<SchoolAcademic[]>(
        'https://localhost:5000/SchoolMS/api/Academic',
        body,
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  Getschoolcls(): Observable<SchoolClass[]> {
    debugger;
    console.log('get' + this.SchoolClaees);
    return this.httpClient
      .get<SchoolClass[]>(
        'https://localhost:5000/SchoolMS/api/GetAllClass/1',
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  SaveSchoolClass(datacls: any): Observable<SchoolClass[]> {
    const body = JSON.stringify(datacls);

    return this.httpClient
      .post<SchoolClass[]>(
        'https://localhost:5000/SchoolMS/api/SaveSchoolClass',
        body,
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  SaveSchoolSubject(DataSub: any): Observable<SchoolSubject[]> {
    const body = JSON.stringify(DataSub);
    return this.httpClient
      .post<SchoolSubject[]>(
        'https://localhost:5000/SchoolMS/api/SaveSchoolSubject',
        body,
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  GetSchoolSub(): Observable<SchoolSubject[]> {
    debugger;
    console.log('get' + this.SchoolClaees);
    return this.httpClient
      .get<SchoolSubject[]>(
        'https://localhost:5000/SchoolMS/api/GetAllSubject/1',
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  GetSubCategory(): Observable<SchoolSubject[]> {
    debugger;

    return this.httpClient
      .get<SchoolSubject[]>(
        'https://localhost:5000/SchoolMS/api/GetSubjectCategory/1',
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }
  GetClassSubject(classId): Observable<SchoolClass[]> {
    return this.httpClient
      .get<SchoolClass[]>(
        'https://localhost:5000/SchoolMS/api/GetClassSubject/' +
          this.schoolId +
          '/' +
          classId +
          '',
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error) {
    debugger;
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
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
