export class DtoHoras{    
    hBasica: string;
    hNocturna: string;
    hDominical: string;
    hBasicaExtra: string;
    hNocturnaExtra: string;
    hDominicalExtra: string;
    topeHoraSemanal: string;
    superoTopeHoras: boolean;

    public totalHoras():number{
      return Number(this.hBasica);
    }
     


}