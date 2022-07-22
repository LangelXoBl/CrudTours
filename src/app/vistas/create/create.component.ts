import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';

import { TourOneI } from 'src/app/models/Tour.Interface';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private api:APIService, private router:Router) { }


  ngOnInit(): void {
  }

  //capturar el archivo y guardarlo en una variable(1 o varios-dependiendo del servidor)
  public archivo: any=[];
  capturarFile(event): any{
   this.archivo.push(event.target.files[0]);
   //funcion para que se active e boton de subir tour.
   this.newForm.controls['imgURL'].setValue('lleno');
   console.log(this.newForm);
  }

  //con esto se puede tomar los datos tipo string del formulario
  newForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    precio: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    imgURL: new FormControl('', Validators.required)
  });
 //curse de angular(solo sirve oara mandar datos de tipo string)
  PostForm(form:TourOneI){
    const Formulario = new FormData();
    Formulario.append('nombre', form.nombre)
    Formulario.append('precio', form.precio)
    Formulario.append('descripcion', form.descripcion)
    this.archivo.forEach(img => {
      Formulario.append('file', img)
    });
    this.api.posttour(Formulario).subscribe(data=>{
      console.log(data)
    })
  }
 //video de subir img(es para mandar todo tipo de archivos, use lo aprendido en los 2 videos)
  /*subirArchivo(form:TourOneI): any{
    const Formulario = new FormData();
    Formulario.append('nombre', form.nombre)
    Formulario.append('precio', form.precio)
    Formulario.append('descripcion', form.descripcion)
    this.archivo.forEach(element => {
      Formulario.append('file', element)
    });
    this.api.post(this.api.url+'tours', Formulario).subscribe(res =>{
      console.log(res);
    })
  };*/

  salir(){
    this.router.navigate(['dashboard']);
  }
}
