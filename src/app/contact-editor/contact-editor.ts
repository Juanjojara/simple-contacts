import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactStore } from '../contact-store';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-contact-editor',
  imports: [JsonPipe],
  templateUrl: './contact-editor.html',
  styleUrl: './contact-editor.css',
})
export class ContactEditor {
  private activatedRoute = inject(ActivatedRoute);
  private store = inject(ContactStore);
  id = signal(0);

  person = computed(() => this.store.list[this.id()]);

  constructor(){
    this.activatedRoute.params.subscribe( params => { this.id.set(parseInt(params['id']))});
  }
}
