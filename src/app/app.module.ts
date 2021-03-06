import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {HttpModule} from '@angular/http';
import {MoviesService} from './services/movies.service';
import {AppComponent} from './app.component';
import {TabsComponent} from './tabs/tabs.component';
import {HeaderComponent} from './header/header.component';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {routing} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
  ],
  providers: [
    MoviesService,
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
    },
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
