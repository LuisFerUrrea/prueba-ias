import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable,throwError} from 'rxjs';
import {ReporteAtencion} from '../models/reporteAtencion';
import { DtoHoras} from '../models/dtoHoras';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  private urlEndPoint: string='http://localhost:8080/api/reportes';

  constructor(private http: HttpClient) { }

  getReporteSemanal(idTecnico: String, numSemana: String):Observable<DtoHoras>{
    return this.http.get<any>(`${this.urlEndPoint}/${idTecnico}/${numSemana}`).pipe(
      map((response:any) => response.reporteSemanal as DtoHoras),
      catchError(e =>{
        if(e.status==400){
          return throwError(e);
        }
   return throwError(e);
    })
    );
 }

  create(reporteAtencion: ReporteAtencion): Observable<ReporteAtencion>{
    return this.http.post<ReporteAtencion>(`${this.urlEndPoint}`, reporteAtencion);
 }
}
