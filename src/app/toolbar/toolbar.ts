import { Component, output } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-toolbar',
  imports: [],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.css',
})
export class Toolbar {
  createNewContact = output();

  /*newContact(event: any) {
    console.log(event);
  }*/
  newContact(event: any) {
    /*const id = Math.round(Math.random()*1000);
    const person: Person = {
      id: id,
      firstName: 'Harry',
      lastName: 'Potter',
      phone: '123456789',
      email: 'potter@mail.com'
    }*/
    //this.createNewContact.emit(person);
    console.log(event);
    this.createNewContact.emit();
  }
}
