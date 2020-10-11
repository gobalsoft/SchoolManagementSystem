export interface SchoolAcademic {

    AcademicID: number;
    AcademicStartDate:Date;
    AcademicEndDate:Date;
    IsCurrentAcademic:Boolean;
    SchoolID:number;
}
export interface SchoolClass{
   // S.No:number;    
ClassName:string;
DisplayOrder:number;
}
export interface SchoolSubject{
    SubjectCode:string;
    SubjectNamee:string;
    Category_id:string;
}

