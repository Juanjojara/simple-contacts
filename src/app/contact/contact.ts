import { Component, computed, effect, signal, WritableSignal } from '@angular/core';

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
  //phone = signal(false);
  //email = signal('john.brown@mail.com');
  email = signal(null);
  emailLink = computed(() => ("emailto:" + this.email()));
  phoneLink = computed(() => `tel:${this.phone()}`);
  fullName = computed(() => `${this.firstName()} ${this.lastName()}`);

  constructor(){
    //setInterval(() => (this.firstName += '#'), 1000);
    //setInterval(() => (this.firstName.update(val => val +'€')), 1000);
    //setInterval(() => (this.firstName.set('Mark' + Math.random())), 1000);

    setInterval(() => (this.firstName.set('Mark' + Math.random()), this.lastName.set('White' + Math.random())), 3000);

    effect(() => {
      console.log(`Fullname has changed to ${this.fullName()}`);
    });
  }
}


