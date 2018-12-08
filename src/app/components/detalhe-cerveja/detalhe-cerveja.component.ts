import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CervejaService } from 'src/app/services/cerveja.service';
import { ICerveja } from 'src/app/models/cerveja';

@Component({
  selector: 'app-detalhe-cerveja',
  templateUrl: './detalhe-cerveja.component.html',
  styleUrls: ['./detalhe-cerveja.component.css']
})
export class DetalheCervejaComponent implements OnInit {
 
  idCerveja: number = 0

  cerveja: ICerveja = {
    id: null,
    nome: null,
    familia: null,
    litragem: null,
    preco: null,
    data: null,
    foto: null,
    ranking: null,
    unidade: null
  }
  constructor(
    private route: ActivatedRoute,
    private cervejaService: CervejaService,
    private router: Router
  ) { }

  ngOnInit() {
    this.idCerveja = parseInt(this.route.snapshot.paramMap.get('id'))
    this.cervejaService.getCerveja(this.idCerveja)
      .then(dado => {
        console.log(dado)
        this.cerveja = dado
      }).catch(err => { 
        console.log(err)
      })
      
  }

  onVoltar(){
    this.router.navigate(['/cervejas'])
  }

}
