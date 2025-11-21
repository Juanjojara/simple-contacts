import { Injectable } from '@angular/core';
import { Person, SimpleContact } from './person';

@Injectable({
  providedIn: 'root',
})
export class ContactStore {
  private list = [
    new SimpleContact(0, 'John', 'Brown', '21321321', 'john@mail.com'),
    new SimpleContact(1, 'Lucy', 'Pink', '4324324', ''),
    new SimpleContact(2, 'Emma', 'Green', '', 'alice@mail.com'),
    new SimpleContact(3, 'Bob', 'White', '', ''),

  ];

  /*findContact(id: number): Person | undefined{
    const result = this.list.find(contact => contact.id === id);
    return result;

  }*/

  findContact(id: number, fn: (p: Person) => void, onError?: () => void): undefined
  findContact(id: number): Person | undefined;
  findContact(id: number, fn?: (p: Person) => void, onError?: () => void): Person | undefined{
    const result = this.list.find(contact => contact.id === id);
    if (result && fn){
      fn(result);
      return;
    }
    if (result === undefined && onError){
      onError();
      return;
    }
    return result;
  }

  nextId(): number {
    return this.list.reduce((prev, curr)=>(prev.id>curr.id)?prev:curr).id +1;
  }

  createNewContact(): Person{
    const nextId= this.nextId();
    const newContact = new SimpleContact(nextId);
    this.list.push(newContact);
    return newContact;
  }
  
  addContact(p: Person){
    this.list.push(p);
  }

  fetchAllContacts(filterText?: string): Person[] {
    /*const clone = new Array<Person>();
    clone.push(...this.list);
    return clone;*/
    let predicate: PersonPredicate = (p: Person) => true;
    if (filterText){
      predicate = (p: Person) => p.firstName.includes(filterText) || p.lastName.includes(filterText);
    }
    return this.list.filter(predicate);
  }
}

type PersonPredicate = (p: Person) => boolean;
