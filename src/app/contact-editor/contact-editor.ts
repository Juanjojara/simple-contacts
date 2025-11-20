import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactStore } from '../contact-store';
import { JsonPipe } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SimpleContact } from '../person';
import { phoneNumberValidator, PhoneValidator } from '../phone-validator';

@Component({
  selector: 'app-contact-editor',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './contact-editor.html',
  styleUrl: './contact-editor.css',
})
export class ContactEditor {
  private activatedRoute = inject(ActivatedRoute);
  private store = inject(ContactStore);
  id = signal(0);

  contactForm = new FormGroup({
    id: new FormControl(0),
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl(''),
    phone: new FormControl('', phoneNumberValidator()),
    email: new FormControl('')
  })

  //person = computed(() => this.store.list[this.id()]);
  person = computed(() => {
    const contact = this.store.findContact(this.id());
    if (contact) return contact;
    return new SimpleContact(this.id());
  });

  constructor(){
    this.activatedRoute.params.subscribe( params => { 
      this.id.set(parseInt(params['id']));
      /*this.contactForm.setValue({
        firstName: this.person().firstName,
        lastName: this.person().lastName,
        phone: this.person().phone,
        email: this.person().email
      });*/
      this.contactForm.setValue(this.person()); //si può utilizzare il metodo abbreviato perché c'è una corrispondenza esatta fra i nome degli attributi
      /*this.contactForm.patchValue({
        firstName: this.person().firstName
      });*/ //questo se si vogliono popolare campi parziali
    });
  }

  get firstName(): FormControl{
    return this.contactForm.get("firstName") as FormControl;
  }

  get phone(): FormControl{
    return this.contactForm.get("phone") as FormControl;
  }

  onSubmit(){
    if (this.contactForm.invalid) return;
    const formValues = this.contactForm.value;
    this.person().firstName = formValues.firstName as string;
    this.person().lastName = formValues.lastName!;
    this.person().phone = formValues.phone as string;
    this.person().email = formValues.email as string;
    this.store.findContact(this.person().id, p => {}, () => this.store.addContact(this.person()));
  }
}
