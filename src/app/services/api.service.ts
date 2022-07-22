import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
//modelo del tour
import { TourListI } from '../models/TourList.Interface';
//modelo de la reservas
import { ReservasListI } from '../models/ReservasList.Interface';

import { TourOneI } from '../models/Tour.Interface';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  url: string = 'http://localhost:4000/';

  constructor(private http:HttpClient) { }

  getAllTours():Observable<TourListI[]>{
    let direction = this.url + "tours"; 
    return this.http.get<TourListI[]>(direction);
  }
  getsingleTour(id: String):Observable<TourListI>{
    let direction = this.url+'tours/'+id;
    return this.http.get<TourListI>(direction);
  }
  getAllReservBytour(idTour):Observable<ReservasListI[]>{
    let direction = this.url+"reservas/bytour/"+idTour;
    return this.http.get<ReservasListI[]>(direction);//lo que esta en <> es lo que devuelve la peticion
  }
 //curso angular
  posttour(form: any){
    let direction = this.url+"tours";
    return this.http.post(direction, form)
  }
  putTour(form:any, id:any){
    let direction=this.url+"tours/"+id;
    return this.http.put(direction, form);
  }
  deletTour(id:any){
    let direction=this.url+'tours/'+id;
    return this.http.delete(direction);
  }
  putTourOutimg(form:any, id:any){
    let direction=this.url+"tours/outimg/"+id;
    return this.http.put(direction, form);
  }
 //video de subir imd
  /*public post(url:string, body){
    return this.http.post(url,body);
  }*/
}
