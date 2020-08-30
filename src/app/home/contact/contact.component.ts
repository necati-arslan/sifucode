import { Component, OnInit } from '@angular/core'; 
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { GeneralService } from 'src/app/services/general.service';
import {UiService} from '../../services/ui.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm:FormGroup;

  constructor(private _formBuilder: FormBuilder,
              private generalService:GeneralService,
              private uiService:UiService) { }

  ngOnInit(): void {

    
    this.contactForm = this._formBuilder.group({
      name: [''],
      email: ['', [Validators.required,Validators.email]],
      konu:[''],
      mesaj:['',Validators.required]
    });


  }

  sendMessage(ngcontactForm){
    console.log(this.contactForm.value.name);
    console.log(this.contactForm.valid)
    if(!this.contactForm.valid){
      this.uiService.showSnackbar('Fiil the form correctly','Unsuccess',3000)
      return;
    }

    console.log('email',this.contactForm.get('email').valid)
   let data={
      name:this.contactForm.value.name,
      email:this.contactForm.value.email,
      konu:this.contactForm.value.konu,
      mesaj:this.contactForm.value.mesaj,
   } 
   this.generalService.sendMessage(data);
   this.uiService.showSnackbar('Your message has been sent','Success',3000)
   ngcontactForm.resetForm();

 
   

  }

}
