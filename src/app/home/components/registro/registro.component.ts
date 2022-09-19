import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/core/models/persona';
import { Rol } from 'src/app/core/models/rol';
import { AppConfiguracionService } from 'src/app/core/services/app-configuracion.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { PersonasService } from 'src/app/core/services/personas.service';
import { RolService } from 'src/app/core/services/rol.service';
import { TokenStorageService } from 'src/app/core/services/token-storage.service';
import { customValidators } from 'src/app/share/clases/custom-validators';




@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  // Se utiliza un formulario reactivo, la atenticacion de los datos se hace en el cliente
  userForm = new FormGroup( 
    {
      id: new FormControl(), 
      nombre: new FormControl('', [Validators.required, Validators.minLength(3)]), 
      apPaterno: new FormControl('', [Validators.required, Validators.minLength(3)]), 
      apMaterno:  new FormControl('', [Validators.required, Validators.minLength(3)]), 
      email:  new FormControl('', [Validators.required, Validators.email]), 
      username:  new FormControl('', [Validators.required, Validators.minLength(5)]),
      autenticacion: new FormGroup(
        {    
           password:  new FormControl('', [Validators.required, Validators.minLength(6)] ), 
           confirmaPassword:  new FormControl('', [Validators.required, Validators.minLength(6), customValidators] ), 
        },
             {
          // Validador que compara los passwords, si son differentes regresa un error
          validators: customValidators()   }
    
       
      ), 
      imagen:  new FormControl(), 
      activo:  new FormControl(),       
      roles:  new FormControl('', [Validators.required])
    }
    );

    // Lista de roles del formulario,
    roleList!: Array<Rol>;

    // Selected select
    defaultValue = 'ELIJA UN ROL:';
    defaulselect = new Rol(0, this.defaultValue);
    


    // Muestra mensaje de exito en el registro.
    mensajeExito = '';
            
  constructor(private persona: PersonasService, private conf: AppConfiguracionService, 
    private autenticacion: AuthService, private tokenStorage: TokenStorageService,
    private rolService: RolService) {

       }

  // Guarda usuario nuevo:
  ngOnInit(): void {

    if (!this.tokenStorage.getToken()) {
      // Se obtienen los roles disponibles en el sistema
      this.rolService.getRoles().subscribe( {
        next: (data) => {this.roleList = data, console.log(this.roleList.length)},
        //error: No se implementa, todos los errores se manejan en forma global: ErrorGlobalHandlerService
        complete:()  =>{
          // Inserta los roles al final del arreglo
          this.roleList.unshift(this.defaulselect);
          this.userForm.get('roles')?.setValue('0');     
          console.info('proceso usuario nuevo finalizo');

      }  
      })      
    }

  }

  private cleanF(): void {    
    this.userForm.reset( {
      nombre:'',
      apPaterno:'',
      apMaterno:'',
      email:'',
      username:''      
    }      

      );

  }

  // Se envia formulario con los datos para guardar nuevo usuario, solo se libera el boton ![disable] cuando el formulario es valido
  public onSubmit(): void {

    let idRol: number = +this.userForm.get('roles')?.value!;
    let item = this.roleList.find(x => x.id === idRol);
    let roles= new Array<Rol>(); 
    roles.push(item!);
    

    let persona = new Persona(
      0, this.userForm.get('nombre')?.value!, this.userForm.get('apPaterno')?.value!, this.userForm.get('apMaterno')?.value!,
      this.userForm.get('username')?.value!,
      this.userForm.get('autenticacion')?.get('password')?.value!,'', true, this.userForm.get('email')?.value!,
      roles    
    )
    
      this.autenticacion.registrar(persona).subscribe({
        next: (data) => {
          console.log('Datos')
          setTimeout(()=>{
            this.mensajeExito = 'Retistro exitoso!';
            this.cleanF();  
          }, this.conf.getConfig().ESPERA);
    
        },
        //error: No se implementa, todos los errores se manejan en forma global: ErrorGlobalHandlerService
        complete:()  =>{          
          console.info('proceso terminado!');

      }  
      });     


    
  }

  // Elimina mensaje de exito de la anerior ejecucion del sistema
  onFocus(): void {
    this.mensajeExito = '';
}

  // Conjunto de funciones para facilitar el despliegue de mensajes de error en el formulario
  get nombre() {
    return this.userForm.get('nombre');    
  }

 get apPaterno(){
    return this.userForm.get('apPaterno');
  }
  
  get apMaterno(){
    return this.userForm.get('apMaterno');

  }

  get email( ) {
    return this.userForm.get('email');
  
  }

  get username() {
    return this.userForm.get('username');
  }

  

  get password() {
  return this.userForm.get('autenticacion')?.get('password');
}

get confirmaPassword() {
  return this.userForm.get('autenticacion')?.get('confirmaPassword');
}



}
