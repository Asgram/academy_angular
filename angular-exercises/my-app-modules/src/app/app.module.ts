import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { MaterialModule } from './core/material/material.module';

import { HighlightDirective } from './core/directives/highlight.directive';

import { AppComponent } from './app.component';
import { TopBarComponent } from './core/components/top-bar/top-bar.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { HomepageComponent } from './core/components/homepage/homepage.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SelectDirective } from './core/directives/select.directive';
import { TestPipe } from './core/pipes/test.pipe';
import { SyllabusComponent } from './core/components/syllabus/syllabus.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    PageNotFoundComponent,
    HomepageComponent,
    HighlightDirective,
    SelectDirective,
    TestPipe,
    SyllabusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ],
  exports: [],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }