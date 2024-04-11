import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { MaterialModule } from './core/material/material.module';

import { HighlightDirective } from './core/directives/highlight.directive';
import { SelectDirective } from './core/directives/select.directive';
import { TestPipe } from './core/pipes/test.pipe';

import { AppComponent } from './app.component';
import { TopBarComponent } from './core/components/top-bar/top-bar.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { HomepageComponent } from './core/components/homepage/homepage.component';
import { SyllabusComponent } from './core/components/syllabus/syllabus.component';
import { SubjectCardComponent } from './core/components/syllabus/subject-card/subject-card.component';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    PageNotFoundComponent,
    HomepageComponent,
    SyllabusComponent,
    SubjectCardComponent,
    HighlightDirective,
    SelectDirective,
    TestPipe,
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