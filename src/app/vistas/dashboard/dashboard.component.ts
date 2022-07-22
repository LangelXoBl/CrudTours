import { Component, OnInit } from '@angular/core';
//importar el servicio
import { APIService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
//importar modelo de la lista de tours
import { TourListI } from 'src/app/models/TourList.Interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  constructor(private api:APIService, private router:Router) { }
  tours: TourListI[];

  ngOnInit(): void {
    this.api.getAllTours().subscribe(data=>{
      this.tours= data;
    })
  }

  ediTour(idTour){
    this.router.navigate(['edit', idTour])
  }

  create(){
    this.router.navigate(['create'])
  }
  verReservations(idTour){
    this.router.navigate(['reservations/bytour', idTour])
  }
}
