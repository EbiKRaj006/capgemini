import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VcentreService } from 'src/app/Service/vcentre.service';

@Component({
  selector: 'app-list-vcentre',
  templateUrl: './list-vcentre.component.html',
  styleUrls: ['./list-vcentre.component.css']
})
export class ListVcentreComponent implements OnInit {

  centreList: any;


  constructor(private vcentreService:VcentreService , public router: Router) {}

  ngOnInit(): void {
    console.log('working home');
    this.vcentreService.getAllCentres().subscribe((data)=> {
      console.log('allcentre' , data);
      this.centreList=data;
    });
  }
  
  deleteItem(id:any){
    console.log('id' , id);
    this.vcentreService.deleteCentreById(id).subscribe((data)=> {
      console.log('data>>>',data);
      if(data.status==="'success'"){
       alert('Delete successfully');
      this.vcentreService.getAllCentres().subscribe((data)=> {
        console.log('allcentre' , data);
        this.centreList=[];
        if(data){
          this.centreList=data;
        }
      });
      }else{
       alert('Not Deleted');
      }

    });
  }
 
  edit(id:number){
    console.log('id' , id);
    this.router.navigate(['/update-vcentre'], {
      queryParams: {
        Id: id,
      },
    });
    
  }

  create(){
    this.router.navigate(['/create-vcentre']);

  }
}
