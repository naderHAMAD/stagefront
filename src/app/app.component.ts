import { Component, HostListener, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnChanges,OnDestroy{
  constructor(private router:Router){
  
  }
  ngOnDestroy(): void {
    localStorage.clear();
    alert("destroyed");
    
  }
  ngOnChanges(changes: SimpleChanges): void {
      
  
    //localStorage.clear();
  }
  vb:boolean=false;
  
  ngOnInit(): void {
    
    if(localStorage.getItem("active")=="true")
    {
      this.vb=true;
      this.goToWorkflowList();
    }else{
      Swal.fire({
        title: "Bienvenue",
        html: " Veuillez s'authentifier <br>Xtensus",
        timer: 3500,
        timerProgressBar: true,
       
      },).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log('I was closed by the timer');
        }
      });
      this.goToLogin();
      this.vb=false;

    }
  }
  title = 'Gestion Workflow';
  goToWorkflowList(){
    this.router.navigate(['/processes']);
  }
  goToLogin(){
    this.router.navigate(['/login']);
  }
  logout(){
    
    localStorage.clear();
    
  }
  
}


