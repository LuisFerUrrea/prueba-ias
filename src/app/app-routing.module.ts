import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReporteAtencionComponent } from './reportes/reporte-atencion.component';
import { ConsultaReporteSemanalComponent } from './reportes/consulta-reporte-semanal.component';

const routes: Routes = [
    { path: 'reporteAtencion', component: ReporteAtencionComponent },
    { path: 'reporteSemanal', component: ConsultaReporteSemanalComponent },
    { path: '',redirectTo:'/reporteAtencion',pathMatch:'full' },
    { path: '**', redirectTo: 'reporteAtencion' }
  ];
  
  @NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  
  export class AppRoutingModule { }