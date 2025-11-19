import { Component, computed, effect, input, signal, WritableSignal } from '@angular/core';
import { ImageController } from '../image-controller/image-controller';
import { Notes } from '../notes/notes';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [ImageController, Notes, RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  //id: WritableSignal<number> = signal(1);
  id = input(1);
  firstName = input('John');
  lastName = input('Brown');
  phone = input('+39 334443223');
  //phone = signal(false);
  email = input('john.brown@mail.com');
  //email = input(null);
  emailLink = computed(() => ("emailto:" + this.email()));
  phoneLink = computed(() => `tel:${this.phone()}`);
  fullName = computed(() => `${this.firstName()} ${this.lastName()}`);
  picture = computed(() => `/images/${this.firstName().toLowerCase()}.svg`);

  showDetails = signal(false);
  pictureSize = signal(64);

  constructor(){
    //setInterval(() => (this.firstName += '#'), 1000);
    //setInterval(() => (this.firstName.update(val => val +'€')), 1000);
    //setInterval(() => (this.firstName.set('Mark' + Math.random())), 1000);

    //setInterval(() => (this.firstName.set('Mark' + Math.random()), this.lastName.set('White' + Math.random())), 3000);

    effect(() => {
      console.log(`Fullname has changed to ${this.fullName()}`);
      console.log(`ShowDetails has changed to ${this.showDetails()}`);
    });

    
  }

  switchShowDetails() {
      this.showDetails.update((val) => !val)
  }

  /*updatePictureSize(newSize: number){
    this.pictureSize.set(newSize);
  }*/

  
}


