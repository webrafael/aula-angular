import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { DataService } from 'src/app/Services/data.service';
import { ToastrService } from 'ngx-toastr';
import { CustomValidator } from '../../validators/custom.validators';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html'
})
export class ProfilePageComponent implements OnInit {

  public form: FormGroup;
  public busy = false;

  constructor(
    private router: Router,
    private service: DataService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.form = this.fb.group({
      name: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(80),
        Validators.required,
      ])],
      document: [{ value: '', disabled: true }],
      email: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(120),
        Validators.required,
        CustomValidator.EmailValidator
      ])]
    });
  }

  ngOnInit() {
    this.busy = true;
    this
      .service
      .getProfile()
      .subscribe(
        (data: any) => {
          this.busy = false;
          this.form.setValue({
            name: data.name,
            document: data.document,
            email: data.email
          });
        },
        (err) => {
          this.busy = false;
          console.log(err);
        }
      );
  }

  submit() {
    this.busy = true;
    this
      .service
      .updateProfile(this.form.value)
      .subscribe(
        (data: any) => {
          this.busy = false;
          this.toastr.success(data.message, 'Atualização completa!');
        },
        (err) => {
          console.log(err);
          this.busy = false;
        }
      );
  }

}
