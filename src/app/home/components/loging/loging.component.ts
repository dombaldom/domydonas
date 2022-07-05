import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PersonasService } from 'src/app/core';
import { Rol } from 'src/app/core/models/rol';
import { AppConfiguracionService } from 'src/app/core/services/app-configuracion.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { RolService } from 'src/app/core/services/rol.service';
import { TokenStorageService } from 'src/app/core/services/token-storage.service';
import { Modal } from 'bootstrap';
import { of, timer, concatMap, throwError } from 'rxjs';
//import * as bootstrap from 'bootstrap';


@Component({
  selector: 'app-loging',
  templateUrl: './loging.component.html',
  styleUrls: ['./loging.component.scss']
})
export class LogingComponent implements OnInit {
  
  userForm = new FormGroup( 
  {
    id: new FormControl(), 
    nombre: new FormControl(), 
    apPaterno: new FormControl(), 
    apMaterno:  new FormControl(), 
    autenticacion: new FormGroup(
      {  username:  new FormControl(), 
         password:  new FormControl()
      }
    ), 
    imagen:  new FormControl(), 
    activo:  new FormControl(), 
    email:  new FormControl(), 
    roles:  new FormControl()
  });

  roleList!: Array<Rol>;


  borra!: string;
  salida!: string;
  constructor(private personas: PersonasService, private conf: AppConfiguracionService, 
              private autenticacion: AuthService, private tokenStorage: TokenStorageService,
              private rolService: RolService) { }



              
  ngOnInit(): void {

    if (!this.tokenStorage.getToken()) {
      this.rolService.getRoles().subscribe( {
        next: (data) => {this.roleList = data, console.log(this.roleList.length)},
        //error: No se implementa, todos los errores se manegan en forma global: ErrorGlobalHandlerService
        complete:()  => console.info('proceso terminado!') 
      })      
    }
  }

  getBorra(){
    this.personas.getData();
  }

  getSaludo(){
    alert(this.conf.getConfig().appHelloWorld);
    this.salida = this.conf.getConfig().appHelloWorld;
  }

  public onSubmit(): void {

  }



}
