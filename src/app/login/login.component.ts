import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { empty, timer } from 'rxjs';
import Swal from 'sweetalert2';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:String;
  password:String;
  timerInterval:number;
  user:User=new User();
  constructor( private router:Router,private userService:UserService ) { }

  ngOnInit(): void {
    localStorage.clear();
  }
  onSubmit(username:String,password:String){
    console.log("FORM USERNAME : "+username+" PASSWORD : "+password);
    this.username=username;
    this.password=password;
    this.userService.getUserByUsername(username).subscribe(data=>{
      this.user=data;
      console.log("FETCHED USERNAME :"+this.user.username+" PASSWORD : "+this.user.password);
    if (this.user.username==username && this.user.password==password){
      Swal.fire({
        title: "Vous étes un "+this.user.role,
        html: "Xtensus",
        timer: 5000,
        timerProgressBar: true,
       
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log('I was closed by the timer');
        }localStorage.setItem("active","true");
        localStorage.setItem("role",this.user.role.toString());
      location.reload();
      });
      
    }else{
      this.user.email='';
      this.user.username='';
      this.user.id=0;
      this.user.password='';
      this.user.role='';
      Swal.fire("Erreur","Données d'authentification incorrectes",'error');
      console.log("FETCHED USERNAME :"+this.user.username+" PASSWORD : "+this.user.password);
    }
    },error=>{console.log(error);Swal.fire("Erreur","Données d'authentification incorrectes",'error');});
    
    
    
    
  }
  goHome(){
    this.router.navigate(['/']);
  }
  goToWorkflowList(){
    this.router.navigate(['/processes']);
  }
}
