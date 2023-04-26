import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup;

  constructor(private authService: AuthService, private formBuilder: FormBuilder) { 

    this.form= this.formBuilder.group({
      password:['',[Validators.required, Validators.minLength(8)]],
      email:['', [Validators.required, Validators.email]],

    })
  }
  get Password(){
    return this.form.get("password");
  }

  get Email(){
    return this.form.get("email");
  }

  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }

  get EmailValid() {
    return false
  }

  ngOnInit(): void {
  }
/*
  login(  form:NgForm ){
    const email = form.value.email
    const password = form.value.password
  }
*/
  Login(){
    this.authService.login(this.Email?.value, this.Password?.value)
    
  }

  enviarForm(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault;

    
    if (this.form.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      
      this.Login();
      alert("Todo salio bien ¡Enviar formuario!");
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched(); 
    }
  }
}
