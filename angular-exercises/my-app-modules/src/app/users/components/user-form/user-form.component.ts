import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { LanguageExpertise, LanguageLevel, Student } from '../../models/student';
import { take } from 'rxjs';
import { noAllowedCountriesValidator, noWhiteSpaceValidator } from '../../../core/functions/validators';
import { ActivatedRoute, Router } from '@angular/router';
import { LanguageLevels } from '../../constants/levels';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnInit, OnDestroy {
  showForm: boolean = true;
  langLevels!: Array<LanguageLevel>;
  forbiddenCountries!: Array<string>;

  studentId!: string | null;
  student!: Student;

  userForm!: FormGroup;
  name!: FormControl;
  surname!: FormControl;
  location!: FormGroup;
  city!: FormControl;
  country!: FormControl;
  age!: FormControl;
  hobbies!: FormArray;
  languages!: FormArray;

  constructor(
    private fb:FormBuilder,
    private usersService: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.forbiddenCountries = ['russia', 'cina', 'francia'];

    this.route.data.pipe(take(1)).subscribe((data) => {
      const student: Student = data['editStudent']; // Chiave usata nel ResolveData in users-routing.module.ts
      if (student)
        this.student = student;
    });

    // Ricavare dati da passaggio di rotta (vedi user-list.component.ts)
    // this.student = new Student(history.state.data);

    // Spostata nel resolve user-detail-resolver
    // this.studentId = localStorage.getItem('studentId');
    // if (this.studentId) {
      // this.usersService.getStudentById(this.studentId).pipe(take(1))
      //   .subscribe((student) => {
      //     this.student = new Student(student);
      //     this.buildForm();
      //     this.showForm = true;
      //   })
    // } else {
      this.buildForm();
      // this.showForm = true;
    // }

    this.langLevels = LanguageLevels;
  }

  buildForm(): void {
    this.name = new FormControl(null, [Validators.required, noWhiteSpaceValidator]);
    this.surname = new FormControl(null, [Validators.required, noWhiteSpaceValidator]);
    this.age = new FormControl(null, [Validators.required, Validators.min(13)]);

    this.city = new FormControl(null, [noWhiteSpaceValidator]);
    this.country = new FormControl(null, [Validators.required, noAllowedCountriesValidator(this.forbiddenCountries), noWhiteSpaceValidator]);

    this.hobbies = new FormArray([new FormControl(null, [noWhiteSpaceValidator])]);

    this.languages = new FormArray([this.createLanguagesFormGroup()]);

    this.location = this.fb.group({
      city: this.city,
      country: this.country
    });

    this.userForm = this.fb.group({
      name: this.name,
      surname: this.surname,
      age: this.age,
      location: this.location,
      hobbies: this.hobbies,
      languages: this.languages
    });

    if (this.student) {
      this.patchFormValues();
    }
  }

  addHobby(hobby?: string): void {
    this.hobbies.push(this.fb.control(hobby ? hobby : null, [noWhiteSpaceValidator]));
  }

  deleteHobby(i: number): void {
    this.hobbies.controls.splice(i, 1);
  }

  createLanguagesFormGroup(lang?: LanguageExpertise): FormGroup {
    return this.fb.group({
      language: this.fb.control(lang?.language ? lang.language : null, [noWhiteSpaceValidator]),
      level: this.fb.control(lang?.level ? lang.level : null, [noWhiteSpaceValidator])
    });
  }

  addLanguage(lang?: LanguageExpertise): void {
    this.languages.push(this.createLanguagesFormGroup(lang));
  }

  deleteLanguage(i: number): void {
    this.languages.controls.splice(i, 1);
  }

  patchFormValues(): void {
    this.userForm.patchValue({
      name: this.student.name,
      surname: this.student.surname,
      age: this.student.age,
      location: {
        city: this.student.location?.city,
        country: this.student.location?.country
      }
    });

    if (this.student.hobbies.length > 0)
      this.patchHobbiesValues(this.student.hobbies);
    if (this.student.languages.length > 0)
      this.patchLanguagesValues(this.student.languages);
  }

  patchHobbiesValues(hobbies: Array<string>): void {
    for (let i = 0; i < hobbies.length; i++) {
      if (i === 0) {
        this.hobbies.controls.at(0)?.setValue(hobbies[i])
      } else {
        this.addHobby(hobbies[i]);
      }
    }
  }

  patchLanguagesValues(languages: Array<LanguageExpertise>): void {
    for (let i = 0; i < languages.length; i++) {
      if (i === 0) {

        this.languages.controls.at(0)?.setValue(languages[i]);
        
        // this.languages.controls.at(0)?.setValue({
        //   language: languages[i].language,
        //   level: languages[i].level
        // });

        // this.languages.controls.at(0)?.get('language')?.setValue(languages[i].language);
        // this.languages.controls.at(0)?.get('level')?.setValue(languages[i].level);

      } else {
        this.addLanguage(languages[i]);
      }
    }
  }

  resetFormArrays(key: string): void {
    const FormArrayInst = this.userForm.get(key) as FormArray;
    const LengthFormArray = FormArrayInst.controls.length;

    let str = key as keyof typeof this.student;
    const LengthValuesArray = (<Array<string | LanguageExpertise>>(this.student[str])).length;

    if (LengthFormArray > LengthValuesArray) {
      FormArrayInst.controls.splice(LengthValuesArray, LengthFormArray - LengthValuesArray);
    } else if (LengthFormArray < LengthValuesArray) {
      for (let i = 0; i < LengthValuesArray - LengthFormArray; i++) {
        switch (key) {
          case 'hobbies':
            this.addHobby();
            break;
          case 'languages':
            this.addLanguage();
            break;
          default:
        }
      }
    }

    // if (this.hobbies.controls.length > this.student.hobbies.length) {
    //   // for (let i = this.student.hobbies.length; i < this.hobbies.controls.length; i++) {
    //   //   this.deleteHobby(i);
    //   // }
    //   this.hobbies.controls.splice(this.student.hobbies.length, this.hobbies.controls.length - this.student.hobbies.length);
    // } else if (this.hobbies.controls.length < this.student.hobbies.length) {
    //   for (let i = 0; i < this.student.hobbies.length - this.hobbies.controls.length; i++) {
    //     this.addHobby();
    //   }
    // }
  }

  resetForm() {
    // Settare il numero dei campi (FormArray) uguale all'oggetto Studente salvato
    if (this.student) {
      const KeysFormArray = ['hobbies', 'languages'];
      KeysFormArray.forEach(key => {
        this.resetFormArrays(key);        
      });
    }
      // this.resetFormArrays('hobbies');
      // this.resetFormArrays('languages');

    this.userForm.reset(this.student);
  }

  onSubmit(): void {
    let newStudent = new Student(this.userForm.value);

    if (this.student) {
      this.usersService.updateStudent(this.student.id, newStudent).pipe(take(1)).subscribe(res => console.log("Studente aggiornato", res));
    } else {
      this.usersService.addStudent(newStudent).pipe(take(1)).subscribe(res => console.log("Studente aggiunto", res));
    }
  }

  checkFormStatus(): void {
    console.log(this.userForm);
  }

  ngOnDestroy(): void {
    localStorage.removeItem('studentId');
  }

}
