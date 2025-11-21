import { Component, inject } from '@angular/core';
import { Contact } from '../contact/contact';
import { Toolbar } from '../toolbar/toolbar';
import { ImageController } from '../image-controller/image-controller';
import { ContactStore } from '../contact-store';
import { Person, SimpleContact } from '../person';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  imports: [Contact, Toolbar],
  templateUrl: './contact-list.html',
  styleUrl: './contact-list.css',
})
export class ContactList {
  router = inject(Router);
  store = inject(ContactStore);
  list = this.store.fetchAllContacts();


  /*newContactInList(contact: Person){
    this.list.push(contact);
  }*/
  newContactInList(){
    //const newContact = this.store.createNewContact();
    //this.router.navigate(['/contact', 'edit', newContact.id])
    this.router.navigate(['/contact', 'edit', this.store.nextId()])
  }

  searchContactInList(searchText: string){
    this.list = this.store.fetchAllContacts(searchText);    
  }
  
  /*get list(){
    return this.store.fetchAllContacts();
  }*/
}
