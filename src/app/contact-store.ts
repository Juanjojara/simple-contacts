import { inject, Injectable } from '@angular/core';
import { Person, SimpleContact } from './person';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContactStore {

  httpClient = inject(HttpClient);
  list = [
    new SimpleContact(0, 'John', 'Brown', '21321321', 'john@mail.com'),
    new SimpleContact(1, 'Lucy', 'Pink', '4324324', ''),
    new SimpleContact(2, 'Emma', 'Green', '', 'alice@mail.com'),
    new SimpleContact(3, 'Bob', 'White', '', ''),

  ];

  /*findContact(id: number): Person | undefined{
    const result = this.list.find(contact => contact.id === id);
    return result;

  }*/

  //findContact(id: number, fn: (p: Person) => void, onError?: () => void): undefined
  //findContact(id: number): Person | undefined;
  findContact(id: number, fn: (p: Person) => void, onError?: () => void) {
    this.httpClient.get<Person>(`http://localhost:3000/store/${id}`).subscribe( res => {
      console.log(res);
      //fn(res);
      if (res){
        fn(res);
        return;
      }
      if (res === undefined && onError){
        onError();
        return;
      }
    });

  }

  nextId(fn: (id: number) => void) {
    //return this.list.reduce((prev, curr)=>(prev.id>curr.id)?prev:curr).id +1;
    this.httpClient.get<WithId>('http://localhost:3000/nextid').subscribe( res => {
      console.log(res);
      fn(res.id);
    });
    //return this.list.reduce((prev, curr)=>(prev.id>curr.id)?prev:curr).id +1;
  }

  /*createNewContact(): Person{
    const nextId= this.nextId( () => {
      const newContact = new SimpleContact(nextId);
    });
    
    this.list.push(newContact);
    return newContact;
  }*/
  
  addContact(p: Person){
    //this.list.push(p);
    this.httpClient.post(`http://localhost:3000/store/`, p, { responseType: 'text'})
    .subscribe( res => {
      console.log(res);
    });
  }

  updateContact(p: Person){
    this.httpClient.put(`http://localhost:3000/store/${p.id}`, p, { responseType: 'text'})
    .subscribe( res => {
      console.log(res);
    });
  }

  deleteContact(p: Person){
    this.httpClient.delete(`http://localhost:3000/store/${p.id}`, { responseType: 'text'})
    .subscribe( res => {
      console.log(res);
    });
  }

  /*fetchAllContacts(filterText?: string): Person[] {
    //const clone = new Array<Person>();
    //clone.push(...this.list);
    //return clone;

    let predicate: PersonPredicate = (p: Person) => true;
    if (filterText){
      predicate = (p: Person) => p.firstname.toLowerCase().includes(filterText.toLowerCase()) || p.lastname.toLowerCase().includes(filterText.toLowerCase());
    }
    return this.list.filter(predicate);
  }*/
  fetchAllContacts(filterText: string, fn: (p: Person[]) => void) {
    /*const clone = new Array<Person>();
    clone.push(...this.list);
    return clone;*/

    this.httpClient.get<string[]>('http://localhost:3000/store', { params: { query: filterText }}).subscribe( (res) => {
      console.log(res);
      const result: Person[] = res.map((person) => JSON.parse(person));
      fn(result);
    });

    /*let predicate: PersonPredicate = (p: Person) => true;
    if (filterText){
      predicate = (p: Person) => p.firstname.toLowerCase().includes(filterText.toLowerCase()) || p.lastname.toLowerCase().includes(filterText.toLowerCase());
    }
    return this.list.filter(predicate);*/
  }
}

type PersonPredicate = (p: Person) => boolean;
type WithId = {id: number};
