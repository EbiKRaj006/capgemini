import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VcentreService {

  constructor(private http: HttpClient){}

  getAllCentres():Observable<any>{
   return this.http.get<any>('http://localhost:6061/vaccinationcentre/view');
}
getCentreById(id:any):Observable<any>{
   return this.http.get<any>('http://localhost:6061/vaccinationcentre/view/' +id);
}
createCentre(centreDetails:any):Observable<any>{
   return this.http.post<any>('http://localhost:6061/vaccinationcentre/addnew' , centreDetails);
}
updateCentre(id:any,centreDetails:any):Observable<any>{
   return this.http.put<any>('http://localhost:6061/vaccinationcentre/update/'  +id , centreDetails);
}
deleteCentreById(id:any):Observable<any>{
   return this.http.delete<any>('http://localhost:6061/vaccinationcentre/delete/' +id);
}
}
