import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Modal } from 'bootstrap';
import { MessageErrorService } from 'src/app/core/services/message-error.service';

@Component({
  selector: 'app-message-error',
  templateUrl: './message-error.component.html',
  styleUrls: ['./message-error.component.scss']
})
export class MessageErrorComponent implements OnInit, AfterViewInit {

  errorModal: Modal | undefined;
  el_errorgModal: any;

  message: string | undefined;

  constructor(private messageErrorService: MessageErrorService) { }


  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

    this.el_errorgModal = document.getElementById('errorModal');
    console.log('modal: ' + this.el_errorgModal);

    if (this.el_errorgModal) {

      this.errorModal = new Modal(this.el_errorgModal, {
        keyboard: false,
        backdrop: false,
      });

      this.messageErrorService.mensajes$().subscribe(val => {
        this.message = val.text;
        
        
        setTimeout(() => {
          this.errorModal?.show();
        }, 2000);
        
      });


    }
  }

  
}