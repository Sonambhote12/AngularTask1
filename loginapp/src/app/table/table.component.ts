import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Table } from '../table';
import { UserdataService } from '../userdata.service'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']

})
export class TableComponent implements OnInit{
  message = "You have successfully logged in";
  table:Table[]=[];
  userData:any=[];

  constructor(private userdata:UserdataService, private http:HttpClient) {
    // this.userdataService.getUserData().subscribe(data=>{
    //   // console.log(data);
    //   this.userData=data;
    // });
    
  }
  ngOnInit(): void {
    this.getAllTable();
  }
  getAllTable() {
    this.http.get(`http://3.108.105.101:8080/table`).subscribe(
      (result: any) => {
        console.log(result);
        this.table = result.message
      },
      (err: Error) => {
        alert(err.message);
      });
  }

  

}
