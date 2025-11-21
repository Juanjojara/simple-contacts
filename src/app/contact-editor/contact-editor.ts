import { Component, computed, effect, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactStore } from '../contact-store';
import { JsonPipe } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
  private fb = inject(FormBuilder);
  id = signal(0);

  /*contactForm = new FormGroup({
    id: new FormControl(0),
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl(''),
    phone: new FormControl('', phoneNumberValidator()),
    email: new FormControl('')
  })*/

  contactForm = this.fb.group({
    id: [0],
    firstname: ['', [Validators.required, Validators.minLength(3)]],
    lastname: [''],
    phone: ['', phoneNumberValidator()],
    email: ['']
  })

  //person = computed(() => this.store.list[this.id()]);
  /*person = computed(() => {
    const contact = this.store.findContact(this.id());
    if (contact) return contact;
    return new SimpleContact(this.id());
  });*/

  person = signal(new SimpleContact(0));

  constructor(){
    this.activatedRoute.params.subscribe( params => { 
      this.id.set(parseInt(params['id']));
      /*this.contactForm.setValue({
        firstName: this.person().firstName,
        lastName: this.person().lastName,
        phone: this.person().phone,
        email: this.person().email
      });*/
      //this.contactForm.setValue(this.person()); //si può utilizzare il metodo abbreviato perché c'è una corrispondenza esatta fra i nome degli attributi
      /*this.contactForm.patchValue({
        firstName: this.person().firstName
      });*/ //questo se si vogliono popolare campi parziali
    });

    effect(() => {
      this.store.findContact(this.id(), (contact) => {
        this.person.set(contact);
        this.contactForm.setValue(this.person());
      })
    });
  }

  get firstname(): FormControl{
    return this.contactForm.get("firstname") as FormControl;
  }

  get phone(): FormControl{
    return this.contactForm.get("phone") as FormControl;
  }

  onSubmit(){
    if (this.contactForm.invalid) return;
    const formValues = this.contactForm.value;
    this.person().firstname = formValues.firstname as string;
    this.person().lastname = formValues.lastname!;
    this.person().phone = formValues.phone as string;
    this.person().email = formValues.email as string;
    this.store.findContact(this.person().id, p => this.store.updateContact(this.person()), () => this.store.addContact(this.person()));
  }
}
