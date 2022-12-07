import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardContainerComponent } from './card-container/card-container.component';
import { TopMediaComponent } from './top-media/top-media.component';
import { TopCharactersComponent } from './top-characters/top-characters.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardContainerComponent,
    TopMediaComponent,
    TopCharactersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
