import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { TopBarComponent } from './core/components/top-bar/top-bar.component';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  @ViewChild(TopBarComponent) topBarComponent!: TopBarComponent;
  @ViewChildren(TopBarComponent) topBarComponentChildrens!: QueryList<any>

  private _title!: string;

  constructor() {
    this._title = "Lorem ipsum";
    console.log("Ambiente di produzione", environment.production);
  }

  ngOnInit(): void {
  }
  
  get title(): string {
    return this._title;
  }

  set title(t: string) {
    this._title = t;
  }

  getTitle(): string {
    return this._title;
  }

  private doSomething(): void {

  }

  // CSS Cascading Style Sheets
}
