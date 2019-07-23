import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidator } from '../../validators/custom.validators';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public form: FormGroup;
  public busy = false;
  constructor(
    private service: DataService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      username: ['', Validators.compose([
        Validators.maxLength(14),
        Validators.minLength(14),
        Validators.required,
        CustomValidator.isCpf()
      ])],
      password: ['', Validators.compose([
        Validators.maxLength(20),
        Validators.minLength(6),
        Validators.required
      ])]
    });
  }

  ngOnInit() {
    const token = localStorage.getItem('petshop.token');
    if (token) {
      this.busy = true;
      this
<<<<<<< HEAD
        .service
        .refreshToken()
        .subscribe(
          (data: any) => {
            localStorage.setItem('petshop.token', data.token);
            this.busy = false;
          },
          (err) => {
            console.log(err);
            localStorage.clear();
            this.busy = false;
          }
        );
=======
      .service
      .refreshToken()
      .subscribe(
        (data: any) => {
          localStorage.setItem('petshop.token', data.token);
          this.busy = false;
        },
        (err) => {
          localStorage.clear();
          this.busy = false;
        }
      );
>>>>>>> 768fd2bdbbf7734e21725501b953b05b1eb0c8b9
    }
  }

  submit() {
    this.busy = true;
    this
      .service
      .authenticate(this.form.value)
      .subscribe(
        (data: any) => {
<<<<<<< HEAD
          console.log(data);
=======
>>>>>>> 768fd2bdbbf7734e21725501b953b05b1eb0c8b9
          localStorage.setItem('petshop.token', data.token);
          this.busy = false;
        },
        (err) => {
          console.log(err);
<<<<<<< HEAD
=======
          this.busy = false;
>>>>>>> 768fd2bdbbf7734e21725501b953b05b1eb0c8b9
        }
      );
  }
}
