import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() { 
    sessionStorage.setItem('token', '');
  }

  login() {
    this.http.post<Observable<boolean>>('/login', {
      userName: this.model.username,
      password: this.model.password
    }).subscribe(isValid => {
      if (isValid) {
        sessionStorage.setItem('token', 
        Buffer.from(this.model.username + ':' + this.model.password).toString('base64'));
        this.router.navigate(['']);
      } else {
        alert("Authentication failed.")
      }
    });
  }
}
