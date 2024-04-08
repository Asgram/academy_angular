import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../../models/student';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent implements OnInit {

  student!: Student;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.data
      .subscribe(data => {
        const student: Student = data['student'];
        this.student = student;
      });
  }
}
