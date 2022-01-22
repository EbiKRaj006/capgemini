import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VcentreService } from 'src/app/Service/vcentre.service';

@Component({
  selector: 'app-update-vcentre',
  templateUrl: './update-vcentre.component.html',
  styleUrls: ['./update-vcentre.component.css']
})
export class UpdateVcentreComponent implements OnInit {

  centreName: any;
  address: any;
  city: any;
  state: any;
  pincode: any;
  centreId: any;

  constructor(private route: ActivatedRoute,private vcentreService:VcentreService ,public router: Router) { }

  ngOnInit(): void {
    this.centreId = this.route.snapshot.queryParamMap.get("Id");
    console.log('centreId...',this.centreId);
    if(this.centreId){
      this.vcentreService.getCentreById(this.centreId).subscribe((data)=> {
        console.log('centre>>>>>' , data);
        this.centreName=data.centreName;
        this.address=data.address;
        this.city=data.city;
        this.state=data.state;
        this.pincode=data.pincode;
      });
    }    
  }
  // export function forbiddenNameValidator(control: AbstractControl): {[key:String]: any} | null
  // const forbidden = /admin/.test(control.value);
  // return forbidden ? { 'forbiddenName' :{value: Control.value}} : null;

  updateCentre():void {
    console.log('centre update working');
    if(this.centreName && this.address && this.city && this.state && this.pincode){

    let updateDetails={
      centreName:this.centreName,
      address:this.address,
      city:this.city,
      state:this.state,
      pincode:this.pincode,
      centreId:this.centreId 
    }
    this.vcentreService.updateCentre(this.centreId,updateDetails).subscribe((data)=> {
      if(data.status==="failed"){
        alert('Not Updated');
      }else{
        alert('Update successfully');
        this.router.navigate(['/list-vcentre']);
      }
    });
  }else{
    alert('Please Fill all the feilds');
  }
  }

  backBtn(){
    this.router.navigate(['/list-vcentre'])  
  }
  checkPincode(event:any){
  const length =event.target.length;
  // if(length !== 6){
  //  alert("Pincode must be 6")
  // }
  // if(length > 6){
  //   alert("Pincode must be 6")
  //  }
}
}
