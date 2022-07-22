import { Component, OnInit } from '@angular/core';

import { APIService } from 'src/app/services/api.service';
import { Router, ActivatedRoute } from '@angular/router';
//modelo de la lista de reservas del tour
import { ReservasListI } from 'src/app/models/ReservasList.Interface';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  constructor(private api:APIService, private router: Router, private ActRouter: ActivatedRoute) { }
  
  reservas: ReservasListI[];

  ngOnInit(): void {
    let id= this.ActRouter.snapshot.paramMap.get('idTour')
    this.api.getAllReservBytour(id).subscribe(data=>{
      this.reservas =data;
    })
  }

  salir(){
    this.router.navigate(['dashboard']);
  }

}
