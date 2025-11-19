import { Component, output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  imports: [],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.css',
})
export class Toolbar {
  createNewContact = output<Person>();

  /*newContact(event: any) {
    console.log(event);
  }*/
  newContact() {
    const id = Math.round(Math.random()*1000);
    const person: Person = {
      id: id,
      firstName: 'Harry',
      lastName: 'Potter',
      phone: '123456789',
      email: 'potter@mail.com'
    }
    this.createNewContact.emit(person);
  }
}
