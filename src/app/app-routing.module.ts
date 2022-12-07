import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopCharactersComponent } from './top-characters/top-characters.component';
import { TopMediaComponent } from './top-media/top-media.component';

const routes: Routes = [
  {
    path: 'media',
    title: 'Media',
    component: TopMediaComponent
  },
  {
    path: 'characters',
    title: 'Characters',
    component: TopCharactersComponent
  },
  {
    path: '**',
    redirectTo: 'media'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
