import { Component, OnInit } from '@angular/core';
import { PersonasService } from 'src/app/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private personaService: PersonasService) { }
  userList: any; 
  title = 'Menú Principal';

  ngOnInit(): void {

    

    this.personaService.getAllUsers().subscribe( {
      next: (data) => {this.userList = data},
      //error: No se implementa, todos los errores se manegan en forma global: ErrorGlobalHandlerService
      complete:()  => console.info('proceso terminado!') 
    })      

  }

}
