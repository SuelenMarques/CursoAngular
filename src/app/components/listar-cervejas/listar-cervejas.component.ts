import { Component, OnInit } from '@angular/core';
import { ICerveja } from 'src/app/models/cerveja';
import { CervejaService } from 'src/app/services/cerveja.service';


@Component({
  selector: 'app-listar-cervejas',
  templateUrl: './listar-cervejas.component.html',
  styleUrls: ['./listar-cervejas.component.css']
})
export class ListarCervejasComponent implements OnInit {

  titulo: string = "Lista de Cervejas"
  showImage: boolean = false
  totalCervejas: number = 0
  filtro: string = ''
  errors: any

  cervejas: ICerveja[] = []

  constructor(private cervejaService: CervejaService) { }

  ngOnInit() {
    this.cervejaService.getCervejas()
      .then(dados => {
        this.cervejas = dados
        this.totalCervejas = dados.length
      })
      .catch(erro => {
        console.log(erro);
      })

  }

  mostrarImagens(){
    this.showImage = !this.showImage
  }

}
