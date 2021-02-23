import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  password: string = "";
  realCode = "1234"

  constructor(private router: Router, private authService: AuthServiceService) { }

  ngOnInit(): void {
  }

  validar(){
    console.log(this.password)
    var result = this.authService.login(this.password);
    if(result){
      this.router.navigateByUrl('/ages');
    }else{
      alert("Codigo Incorrecto");
    }
  }

}
