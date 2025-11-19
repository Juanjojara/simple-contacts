import { Injectable } from '@angular/core';
import { SimpleContact } from './person';

@Injectable({
  providedIn: 'root',
})
export class ContactStore {
  list = [
    new SimpleContact(0, 'John', 'Brown', '21321321', 'john@mail.com'),
    new SimpleContact(1, 'Lucy', 'Pink', '4324324', ''),
    new SimpleContact(2, 'Emma', 'Green', '', 'alice@mail.com'),
    new SimpleContact(3, 'Bob', 'White', '', ''),

  ];

}
