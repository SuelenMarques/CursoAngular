import { Component, OnInit } from '@angular/core';

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

  //cervejas: any = []
  cervejas: any = [
    {
      "id": 1,
      "nome": "Indica Colorado",
      "familia": "IPA",
      "litragem": 600,
      "preco": 15.90,
      "foto": "https://emporiodacerveja.vteximg.com.br/arquivos/ids/169389-1000-1000/ColoradoIndica1000x1000.jpg?v=636542262631100000",
      "data": "2010-12-23",
      "ranking": 4.9,
      "unidade": 'L'
    },
    {
      "id": 2,
      "nome": "Cauim Colorado",
      "familia": "ALE",
      "litragem": 300,
      "preco": 6.90,
      "foto": "https://emporiodacerveja.vteximg.com.br/arquivos/ids/171330-1000-1000/Cauim.gif?v=636643219616730000",
      "data": "2010-11-15",
      "ranking": 3.8,
      "unidade": 'L'
    },
    {
      "id": 3,
      "nome": "Appia Colorado",
      "familia": "ALE",
      "litragem": 600,
      "preco": 11.90,
      "foto": "https://emporiodacerveja.vteximg.com.br/arquivos/ids/169375-1000-1000/ColoradoAppia1000x1000.jpg?v=636538020330630000",
      "data": "2010-10-09",
      "ranking": 2,
      "unidade": 'M'
    },
    {
      "id": 4,
      "nome": "Gabiru Colorado",
      "familia": "IPA",
      "litragem": 600,
      "preco": 17.90,
      "foto": "https://emporiodacerveja.vteximg.com.br/arquivos/ids/172094-1000-1000/01.jpg?v=636704778305900000",
      "data": "2010-08-03",
      "ranking": 1,
      "unidade": 'M'
    }
  ];
  
  constructor() { }

  ngOnInit() {
    console.log(this.cervejas)
    this.totalCervejas = this.cervejas.length
  }

  mostrarImagens(){
    this.showImage = !this.showImage
    console.log(this.showImage)
  }

}
