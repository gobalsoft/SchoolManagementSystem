import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';

import { throwError, Observable, from } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SchoolAcademic, SchoolClass, SchoolSubject } from './student';
import { Religion, Nationality, Category } from './master';
@Injectable({
  providedIn: 'root',
})
export class SchoolService {
  url: string = 'https://localhost:5000/SchoolMS/';
  student: Array<SchoolAcademic> = [];
  SchoolClaees: Array<SchoolClass> = [];

  StudentReligion: Array<Religion> = [];
  StudentNationality: Array<Nationality> = [];
  StudentCategory: Array<Category> = [];

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
      .get<SchoolAcademic[]>(`${this.url}/api/Academic/${id}`)
      .pipe(catchError(this.errorHandler));
  }

  saveAcademic(datas: any): Observable<SchoolAcademic[]> {
    const body = JSON.stringify(datas);

    return this.httpClient
      .post<SchoolAcademic[]>(
        `${this.url}/api/Academic`,
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
        `${this.url}/api/GetAllClass/1`,

        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  SaveSchoolClass(datacls: any): Observable<SchoolClass[]> {
    const body = JSON.stringify(datacls);

    return this.httpClient
      .post<SchoolClass[]>(
        `${this.url}/api/SaveSchoolClass`,
        body,
        this.httpOptions
      )

      .pipe(catchError(this.errorHandler));
  }

  SaveSchoolSubject(DataSub: any): Observable<SchoolSubject[]> {
    const body = JSON.stringify(DataSub);
    return this.httpClient
      .post<SchoolSubject[]>(
        `${this.url}/api/SaveSchoolSubject`,
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
        `${this.url}/api/GetAllSubject/1`,

        this.httpOptions
      )

      .pipe(catchError(this.errorHandler));
  }

  GetSubCategory(): Observable<SchoolSubject[]> {
    debugger;

    return this.httpClient
      .get<SchoolSubject[]>(
        `${this.url}/api/GetSubjectCategory/1`,

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
  GetStudentReligion(): Observable<Religion[]> {
    debugger;
    // console.log('get' + this.SchoolClaees);
    return this.httpClient
      .get<Religion[]>(
        'https://localhost:5000/SchoolMS/api/GetReligion/1',
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }
  GetStudentNationality(): Observable<Nationality[]> {
    debugger;
    // console.log('get' + this.SchoolClaees);
    return this.httpClient
      .get<Nationality[]>(
        'https://localhost:5000/SchoolMS/api/GetNationality/1',
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }
  GetStudentCategory(): Observable<Category[]> {
    debugger;
    // console.log('get' + this.SchoolClaees);
    return this.httpClient
      .get<Category[]>(
        'https://localhost:5000/SchoolMS/api/GetCategory/1',
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
