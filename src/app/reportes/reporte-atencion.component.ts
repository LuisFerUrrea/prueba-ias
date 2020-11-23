import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { ReporteAtencion } from './models/reporteAtencion';
import { ReportesService } from './services/reportes.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-reporte-atencion',
  templateUrl: './reporte-atencion.component.html'
})
export class ReporteAtencionComponent implements OnInit {

  reporteAtencion: ReporteAtencion=new ReporteAtencion();

  constructor(private reportesService: ReportesService) { }

  ngOnInit(): void {
  }

  createReporteAtencion(form: NgForm):void{    
    /*console.log(this.reporteAtencion);*/
    this.reportesService.create(this.reporteAtencion).subscribe(
       response=>{
        swal.fire('Nuevo reporte de atención',`El reporte de la atención realizado por el técnico con id ${this.reporteAtencion.idTecnico}, ha sido creado con exito!`,'success');
        form.resetForm();
       },
       err=>{         
         let errores:string="";
         err.error.mensaje.forEach(element => {
           errores += element + "\r";
          });
         swal.fire('Error guardando el registro',errores,'error');
       }
    );
  }
}
