import { Component, OnInit } from '@angular/core';
//obtener los datos del URL y del API
import { TourListI } from 'src/app/models/TourList.Interface';
import { Router, ActivatedRoute } from '@angular/router';
import { APIService } from 'src/app/services/api.service';
//Usar Formularios
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private api:APIService, private router:Router, private ActRouter: ActivatedRoute ) { }

  //se crea el formulario reactivo y la variable oara guardar el id que le pasan
  id: any;
  datos:TourListI;
  editForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    precio: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    imgURL: new FormControl('', Validators.required)
  });
  imagen:string='';//variable para mostrar la img
  hDel:boolean;//variable para habilitar el boton eliminar

  ngOnInit(): void {
    //funcion para que se muestren los datos a partir del ID
    this.id= this.ActRouter.snapshot.paramMap.get('idTour');
    this.api.getsingleTour(this.id).subscribe(data=>{
      this.datos=data;
      this.editForm.setValue({
        'nombre': this.datos.nombre,
        'precio': this.datos.precio,
        'descripcion': this.datos.descripcion,
        'imgURL': this.datos.imgURL
      });
      this.imagen= this.datos.imgURL; 
    })
    //habilidat el boton de eliminar
    this.api.getAllReservBytour(this.id).subscribe(data=>{
      if(data.length>0)this.hDel=true
    })
    console.log(this.hDel);
  }

  //revisa si se modifico la img y define la ruta para actualizar
  img: any=[];
  habilitar= false;
  captImg(event): any{
    this.img.push(event.target.files[0]);
    if(!this.habilitar){
      this.habilitar= !this.habilitar;
    }
  }
  PostForm(form:TourListI){
    if(this.habilitar){//actualizar con img
      const formModif = new FormData();
      formModif.append('nombre', form.nombre);
      formModif.append('precio', form.precio);
      formModif.append('descripcion', form.descripcion);
      this.img.forEach(img => {
        formModif.append('file', img)
      });
      this.api.putTour(formModif, this.id).subscribe(data =>{
        console.log(data);
      });
    }else{//actualizar sin imagen
      this.api.putTourOutimg(form, this.id).subscribe(data=>{
        console.log(data);
      })
    }
  };

  deleteOne(){
    this.api.deletTour(this.id).subscribe(data =>{
      console.log(data);
    })
  };
  salir(){
    this.router.navigate(['dashboard']);
  };
  recharge(){
    this.router.navigate(['edit', this.id]);
  };
}
