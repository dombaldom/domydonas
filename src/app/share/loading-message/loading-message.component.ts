import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Modal } from 'bootstrap';
import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
  selector: 'app-loading-message',
  templateUrl: './loading-message.component.html',
  styleUrls: ['./loading-message.component.scss']
})
export class LoadingMessageComponent implements OnInit, AfterViewInit {

  public errorMesage?: string;

  loadingModal: Modal | undefined;
  el_loadingModal: any;
  
  constructor(readonly loadingService: LoadingService) { }
  
  ngAfterViewInit(): void {
    this.el_loadingModal = document.getElementById('loadingModal');
    console.log('modal: '+ this.el_loadingModal);
    
    if (this.el_loadingModal) {
      console.log('si hay modal');
      
      this.loadingModal= new Modal(this.el_loadingModal , {
        keyboard: false,
        backdrop: false,
      });
    }


    this.loadingService.loading$().subscribe(load => 
      {

      if (load === 'open') {   
        console.log('debe mostrar'+ this.el_loadingModal);
        this.loadingModal?.show();
      }
      else if(load === 'close') {             
        setTimeout(() => {
          this.loadingModal?.hide();  
        }, 3000);
      } else {
        setTimeout(() => {
          this.loadingModal?.hide();  
        }, 2000);
      }
      
    });

    

  }

  ngOnInit(): void {

}

}
  
