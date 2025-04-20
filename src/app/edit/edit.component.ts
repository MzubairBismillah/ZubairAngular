import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


declare function alert(message: string): void;
declare function confirm(message: string): boolean;


@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'] // ✅ Fixed here
})
export class EditComponent implements OnInit {

  ObjDept: any = {
    departmentId: 0,
    departmentName: '',
    departmentLogo: ''
  };

  deptList: any[] = [];

  http = inject(HttpClient);

  ngOnInit(): void {
    this.getDepartment();
  }

  onEdit(item: any) {
    this.ObjDept = { ...item };
  }

  onSave() {
    this.http.post('https://projectapi.gerasim.in/api/Complaint/AddNewDepartment', this.ObjDept).subscribe((res: any) => {
      if (res.result) {
        alert('Data Saved Successfully');
        this.getDepartment();
      } else {
        alert(res.message);
      }
    });
  }

  onUpdate() {
    this.http.post('https://projectapi.gerasim.in/api/Complaint/UpdateDepartment', this.ObjDept).subscribe((res: any) => {
      if (res.result) {
        alert('Data Updated Successfully');
        this.getDepartment();
      } else {
        alert(res.message);
      }
    });
  }

  onDelete(id: number) {
    const isDelete = confirm('Do you want to delete this record?');
    if (isDelete) {
      this.http.delete('https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId=' + id).subscribe((res: any) => {
        if (res.result) {
          alert('Data Deleted Successfully');
          this.getDepartment();
        } else {
          alert(res.message);
        }
      });
    }
  }

  getDepartment() {
    this.http.get('https://projectapi.gerasim.in/api/Complaint/GetParentDepartment').subscribe((res: any) => {
      this.deptList = res.data;
    });
  }
}
