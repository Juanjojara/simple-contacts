import { Component, output } from '@angular/core';
import { Person } from '../person';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-toolbar',
  imports: [ReactiveFormsModule],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.css',
})
export class Toolbar {
  createNewContact = output();
  searchContact = output<string>();

  searchForm = new FormGroup({
    searchText: new FormControl('')
  })

  /*newContact(event: any) {
    console.log(event);
  }*/
  newContact(event: any) {
    /*const id = Math.round(Math.random()*1000);
    const person: Person = {
      id: id,
      firstName: 'Harry',
      lastName: 'Potter',
      phone: '123456789',
      email: 'potter@mail.com'
    }*/
    //this.createNewContact.emit(person);
    console.log(event);
    this.createNewContact.emit();
  }

  onSubmit(){
    const formValues = this.searchForm.value;
    let searchText = '';
    if (formValues.searchText){
      searchText = formValues.searchText;
    }
    //string formValues.firstName as string;
    this.searchContact.emit(searchText);
  }
}
