import { Routes } from '@angular/router';
import { ContactList } from './contact-list/contact-list';
import { Home } from './home/home';
import { ContactEditor } from './contact-editor/contact-editor';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'list', component: ContactList},
    {path: 'contact/edit/:id', component: ContactEditor},
    {path: '**', component: NotFound},
];
