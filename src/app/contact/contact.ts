import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  id: WritableSignal<number> = signal(1);
  firstName = signal('John');
  lastName = signal('Brown');
  phone = signal('+39 334443223');
  email = signal('john.brown@mail.com');

  constructor(){
    //setInterval(() => (this.firstName += '#'), 1000);
    //setInterval(() => (this.firstName.update(val => val +'€')), 1000);
    setInterval(() => (this.firstName.set('Mark' + Math.random())), 1000);
  }
}


