import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-editor',
  imports: [],
  templateUrl: './contact-editor.html',
  styleUrl: './contact-editor.css',
})
export class ContactEditor {
  private activatedRoute = inject(ActivatedRoute);
  id = '';

  constructor(){
    this.activatedRoute.params.subscribe( params => { this.id = params['id']});
  }
}
