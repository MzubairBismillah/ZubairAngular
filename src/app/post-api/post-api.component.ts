import { Component, inject ,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-api',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent implements OnInit {

  deptList: any[] = []; 

  ObjDept: any = {
    "departmentId": 0,
    "departmentName": "",
    "departmentLogo": ""
  };

  ngOnInit(): void {
    this.getDepartment();
  }

  http = inject(HttpClient);


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

  getDepartment(){
    debugger;
    this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment").subscribe((res:any)=>{
      debugger;
      this.deptList = res.data;
    })
  }
}
