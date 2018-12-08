import { Component, OnInit } from '@angular/core';
import { ICerveja } from 'src/app/models/cerveja';
import { CervejaService } from 'src/app/services/cerveja.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-incluir-cerveja',
  templateUrl: './incluir-cerveja.component.html',
  styleUrls: ['./incluir-cerveja.component.css']
})
export class IncluirCervejaComponent implements OnInit {
  tipos: string[] = ['IPA', 'ALE', 'PILSEN', 'BOCK']

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
    private cervejaSevice: CervejaService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(form){
    console.log(form.value)
    if(form.valid){
      this.cervejaSevice.postCerveja(this.cerveja)
        .then(dados => {
          this.toastrService.success("Cerveja Cadastrada com Sucesso");
          this.router.navigate(['/cervejas'])
        })
        .catch(err => {
          this.toastrService.error("Erro ao cadastrar");
          this.router.navigate(['/cervejas'])
        })
    }
    
  }

}
