import { Component } from '@angular/core';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-contact-list',
  imports: [Contact],
  templateUrl: './contact-list.html',
  styleUrl: './contact-list.css',
})
export class ContactList {

}
