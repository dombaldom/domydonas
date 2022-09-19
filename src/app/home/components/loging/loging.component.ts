import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonasService } from 'src/app/core';
import { Rol } from 'src/app/core/models/rol';
import { AppConfiguracionService } from 'src/app/core/services/app-configuracion.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { RolService } from 'src/app/core/services/rol.service';
import { StorageService } from 'src/app/core/services/storage.service';
import { TokenStorageService } from 'src/app/core/services/token-storage.service';



@Component({
  selector: 'app-loging',
  templateUrl: './loging.component.html',
  styleUrls: ['./loging.component.scss']
})
export class LogingComponent implements OnInit {
  
  loginForm = new FormGroup( 
  {
         username:  new FormControl('', Validators.required), 
         password:  new FormControl('', Validators.required)
  });

  roleList!: Array<Rol>;
  salida!: string;
  constructor(private personas: PersonasService, private conf: AppConfiguracionService, 
              private autenticacion: AuthService, private tokenStorage: TokenStorageService,
              private rolService: RolService, private storage: StorageService,
              private router: Router) { }



              
  ngOnInit(): void {

    if(this.storage.isLoggedIn()) {
      this.router.navigate(['home/menu']);
    }


  }

  

  public onSubmit(): void {
    this.autenticacion.login( this.loginForm.get('username')?.value!, this.loginForm.get('password')?.value! ).subscribe({
      next: (data) => {
        console.log('Datos')
        setTimeout(()=>{
          console.info('pasword sss');
        }, this.conf.getConfig().ESPERA);
        this.storage.guardaUsuario(this.loginForm.get('username')?.value);
        this.reloadPage();
      },
      //error: No se implementa, todos los errores se manejan en forma global: ErrorGlobalHandlerService
      complete:()  =>{          
        console.info('proceso terminado!');

    }  
    });     
    
    
  }

  reloadPage(): void {
    window.location.reload();
  }

  public onFocus()
: void {

}

  get username() {
    return this.loginForm.get('username');
  }

  

  get password() {
  return this.loginForm.get('autenticacion')?.get('password');
}


}
