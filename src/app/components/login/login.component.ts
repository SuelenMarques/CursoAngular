import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CervejaService } from 'src/app/services/cerveja.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthGuardService } from 'src/app/guards/auth-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;

  dados: any = {
    email: '',
    password: ''
  }

  constructor(
    private formBuilder: FormBuilder,
    private cervejaService: CervejaService,    
    private toastrService: ToastrService,
    private router: Router,
    private authGuardService: AuthGuardService
  ) { }

  ngOnInit() {

    this.formulario = this.formBuilder.group({
      email: [null, Validators.compose([
        Validators.email,
        Validators.required
      ]) ],
      password: [null, Validators.compose([
        Validators.minLength(4),
        Validators.maxLength(8),
        Validators.required
      ]) ]
    });
  }

  onSubmit(){
    console.log(this.formulario)
 
  if(this.formulario.valid){  //verificar se o form esta valido
    this.dados.email = this.formulario.value.email //atribuindo os dados
    this.dados.password = this.formulario.value.password
    //chamando minha service e chamando o metodo login passando os dados
    this.cervejaService.login(this.dados)
      .then(res => {
        console.log(res) //imprimindo o resultado no console
        //coloando meu token de retorn da api no localstorage
        localStorage.setItem('token', JSON.stringify(res))
        //chando meu toastr pra mostrar uma mensagem
        this.authGuardService.login();
        this.toastrService.success('Login feito com sucesso!')
        //jogando o user pra pagina de welcome
        this.router.navigate(['/welcome'])
      })
      .catch(err => {
        //mostro que algo deu errado para o user
        this.toastrService.error('falha ao logar')
      })
  }else{

  }

  //fazer post pra api e ver se esta correto email e senha

  //pegar retorno da api e salvar no localStorage
    
    // this.dados.email = this.formulario.value.email
    // this.dados.password = this.formulario.value.password

  }

}
