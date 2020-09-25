export interface SchoolAcademic {

    AcademicID: number;
    AcademicStartDate:Date;
    AcademicEndDate:Date;
    IsCurrentAcademic:Boolean;
    SchoolID:number;
}
export interface SchoolClass{
   // S.No:number;    
SchoolClassName:string;
DisplayOrder:number;
}
export interface SchoolSubject{
    SubjectCode:string;
    SubjectNmae:string;
    Category:string;
}

