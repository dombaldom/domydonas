import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";


export function customValidators(): ValidatorFn {

return (control: AbstractControl): ValidationErrors | null => {
  
  
  

  

  const p1 = control.get('password');
  const p2 = control.get('confirmaPassword');

  const valid = p1 && p2 && p1.value === p2.value; 
  const reply =valid ? null : { nomatched: true };

  return reply;
}

};