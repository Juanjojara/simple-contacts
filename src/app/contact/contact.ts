import { Component, computed, effect, inject, input, signal, WritableSignal } from '@angular/core';
import { ImageController } from '../image-controller/image-controller';
import { Notes } from '../notes/notes';
import { RouterLink } from '@angular/router';
import { ContactStore } from '../contact-store';
import { SimpleContact } from '../person';

@Component({
  selector: 'app-contact',
  imports: [ImageController, Notes, RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  //id: WritableSignal<number> = signal(1);
  id = input(1);
  /*firstName = input('John');
  lastName = input('Brown');
  phone = input('+39 334443223');
  //phone = signal(false);
  email = input('john.brown@mail.com');
  //email = input(null);*/
  emailLink = computed(() => ("emailto:" + this.email));
  phoneLink = computed(() => `tel:${this.phone}`);
  fullName = computed(() => `${this.firstName} ${this.lastName}`);
  picture = computed(() => `/images/${this.firstName.toLowerCase()}.svg`);

  //person = computed(() => this.store.list[this.id()]);

  person = signal(new SimpleContact(0));

  showDetails = signal(false);
  pictureSize = signal(64);

  store = inject(ContactStore);

  constructor(){
    //setInterval(() => (this.firstName += '#'), 1000);
    //setInterval(() => (this.firstName.update(val => val +'€')), 1000);
    //setInterval(() => (this.firstName.set('Mark' + Math.random())), 1000);

    //setInterval(() => (this.firstName.set('Mark' + Math.random()), this.lastName.set('White' + Math.random())), 3000);

    effect(() => {
      console.log(`Fullname has changed to ${this.fullName()}`);
      console.log(`ShowDetails has changed to ${this.showDetails()}`);
    });

    effect(() => {
      this.person.set(this.store.list[this.id()]);
    });

    
  }

  switchShowDetails() {
      this.showDetails.update((val) => !val)
  }

  /*updatePictureSize(newSize: number){
    this.pictureSize.set(newSize);
  }*/

  get firstName(){
    return this.person().firstName
  }

  get lastName(){
    return this.person().lastName
  }

  get phone(){
    return this.person().phone
  }

  get email(){
    return this.person().email
  }
  
}


