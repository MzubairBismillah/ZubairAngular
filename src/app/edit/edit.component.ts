import { Component, inject , OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormsModule  } from '@angular/forms';

@Component({
  selector: 'app-edit',
  imports: [FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {


  ObjDept: any = {
    "departmentId": 0,
    "departmentName": "",
    "departmentLogo": ""
  };

  deptList: any[] = []; 




  ngOnInit(): void {
    this.getDepartment();
  }

  http = inject(HttpClient);

  onEdit(item: any){  
    debugger;
    this.ObjDept = item;
  }
 


  onSave(){
    debugger;
    this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment", this.ObjDept).subscribe((res:any)=>{
      debugger;
      if(res.result){
        alert("Data Saved Successfully");
        this.getDepartment();
      }else{
        alert(res.message);
      }
    });
  }

  onUpdate(){
    debugger;
    this.http.post("https://projectapi.gerasim.in/api/Complaint/UpdateDepartment", this.ObjDept).subscribe((res:any)=>{
      debugger;
      if(res.result){
        alert("Data Updated Successfully");
        this.getDepartment();
      }else{
        alert(res.message);
      }
    });
  }
  onDelete(id: number){
    const isDelete = confirm("Do you want to delete this record?");
    if(isDelete){
    debugger;
    this.http.delete("https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId=" +id).subscribe((res:any)=>{
      debugger;
      if(res.result){
        alert("Data Deleted Successfully");
        this.getDepartment();
      }else{
        alert(res.message);
      }
    });
  }
}

  getDepartment(){
    debugger;
    this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment").subscribe((res:any)=>{
      debugger;
      this.deptList = res.data;
    })
  }
}
