import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { DtoHoras } from './models/dtoHoras';
import { ReportesService } from './services/reportes.service';

@Component({
  selector: 'app-consulta-reporte-semanal',
  templateUrl: './consulta-reporte-semanal.component.html'
})
export class ConsultaReporteSemanalComponent implements OnInit {

  idTecnico: String="";
  semana:String;
  sumaTotal:String;
  dtoHoras: DtoHoras=new DtoHoras();


  constructor(private reportesService: ReportesService) { }

  ngOnInit(): void {
  }

  consultarHorasSemanales(form: NgForm):void{
    console.log(this.idTecnico);
    console.log(this.semana);
     this.reportesService.getReporteSemanal(this.idTecnico,this.semana).subscribe(
       response=>{
         this.dtoHoras=response;
         this.sumar();
         this.convertir();
       }
     );
  }

   sumar():void{
    let minutes = Number(this.dtoHoras.hBasica)+ Number(this.dtoHoras.hBasicaExtra)+Number(this.dtoHoras.hNocturna)
    + Number(this.dtoHoras.hNocturnaExtra)+Number(this.dtoHoras.hDominical)+Number(this.dtoHoras.hDominicalExtra);
     this.sumaTotal= Math.floor(minutes/60) +"h "+(+this.dtoHoras.hBasica % 60) + "m";
   }

   convertir(): void{
    this.dtoHoras.hBasica=Math.floor(+this.dtoHoras.hBasica/60).toString()+"h "+ (+this.dtoHoras.hBasica % 60) + "m";
    this.dtoHoras.hBasicaExtra=Math.floor(+this.dtoHoras.hBasicaExtra/60).toString()+"h "+ (+this.dtoHoras.hBasicaExtra % 60) + "m";
    this.dtoHoras.hNocturna=Math.floor(+this.dtoHoras.hNocturna/60).toString()+"h "+ (+this.dtoHoras.hNocturna % 60) + "m";
    this.dtoHoras.hNocturnaExtra=Math.floor(+this.dtoHoras.hNocturnaExtra/60).toString()+"h "+ (+this.dtoHoras.hNocturnaExtra % 60) + "m";
    this.dtoHoras.hDominical=Math.floor(+this.dtoHoras.hDominical/60).toString()+"h "+ (+this.dtoHoras.hDominical % 60) + "m";
    this.dtoHoras.hDominicalExtra=Math.floor(+this.dtoHoras.hDominicalExtra/60).toString()+"h "+ (+this.dtoHoras.hDominicalExtra % 60) + "m";
   }

}
