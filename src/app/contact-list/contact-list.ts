import { Component } from '@angular/core';
import { Contact } from '../contact/contact';
import { Toolbar } from '../toolbar/toolbar';
import { ImageController } from '../image-controller/image-controller';

@Component({
  selector: 'app-contact-list',
  imports: [Contact, Toolbar, ImageController],
  templateUrl: './contact-list.html',
  styleUrl: './contact-list.css',
})
export class ContactList {

  list = [
    {id: 0, firstName: 'John', lastName: 'Brown', phone: '21321321', email: 'john@mail.com'},
    {id: 1, firstName: 'Lucy', lastName: 'Pink', phone: '4324324', email: ''},
    {id: 2, firstName: 'Emma', lastName: 'Green', phone: '', email: 'alice@mail.com'},
    {id: 3, firstName: 'Bob', lastName: 'White', phone: '', email: ''},
  ];

  newContactInList(contact: Person){
    this.list.push(contact);

  }
}
