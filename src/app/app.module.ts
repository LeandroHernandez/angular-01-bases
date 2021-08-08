import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadoresModule } from './Components/Contadores/Contadores.Module';

import { HeroesModule } from './Components/Heroes/Heroes.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HeroesModule, ContadoresModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
