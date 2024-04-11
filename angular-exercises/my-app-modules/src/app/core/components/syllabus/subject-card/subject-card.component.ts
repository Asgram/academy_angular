import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-subject-card',
  template: `
    <mat-card class="bg-dark text-white">
      <mat-card-header>
        <mat-card-title>{{ index }} | {{ title }}</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <ul>
          @for (s of content; track $index) {
            <li>{{ s }}</li>
          }
        </ul>
      </mat-card-content>
    </mat-card>  
  `
})
export class SubjectCardComponent {
  @Input() title!: string;
  @Input() content!: Array<string>;
  @Input() index!: number;
}
