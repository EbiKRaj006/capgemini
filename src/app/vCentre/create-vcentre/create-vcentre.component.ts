import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VcentreService } from 'src/app/Service/vcentre.service';

@Component({
  selector: 'app-create-vcentre',
  templateUrl: './create-vcentre.component.html',
  styleUrls: ['./create-vcentre.component.css']
})
export class CreateVcentreComponent implements OnInit {

  centreName: any;
  address: any;
  city: any;
  state: any;
  pincode: any;
  centreId: any;
  constructor(private vcentreService:VcentreService ,public router: Router) { }

  ngOnInit(): void {
  }
  createCentre():void {
    console.log('create centre update working');
    if(this.centreName && this.address && this.city && this.state && this.pincode){

    let centreDetails={
      centreName:this.centreName,
      address:this.address,
      city:this.city,
      state:this.state,
      pincode:this.pincode
    }
  //   this.vcentreService.createCentre(centreDetails).subscribe((data)=> {
  //     name: ['', Validators.required ]
  //  });
    this.vcentreService.createCentre(centreDetails).subscribe((data)=> {
      if(data.status==="'success'"){
        alert('Create successfully');
        this.router.navigate(['/list-vcentre']);
      }else{
        alert('Not Created');
      }
    });
  }else{
    alert('Please Fill all the feilds');
  }

  }

  backBtn(){
    this.router.navigate(['/list-vcentre']);

  }
}
