import { Component, inject } from '@angular/core';
import { Contact } from '../contact/contact';
import { Toolbar } from '../toolbar/toolbar';
import { ImageController } from '../image-controller/image-controller';
import { ContactStore } from '../contact-store';
import { Person } from '../person';

@Component({
  selector: 'app-contact-list',
  imports: [Contact, Toolbar],
  templateUrl: './contact-list.html',
  styleUrl: './contact-list.css',
})
export class ContactList {

  store = inject(ContactStore);


  newContactInList(contact: Person){
    this.store.list.push(contact);
  }

  getList(){
    return this.store.list;
  }
}
