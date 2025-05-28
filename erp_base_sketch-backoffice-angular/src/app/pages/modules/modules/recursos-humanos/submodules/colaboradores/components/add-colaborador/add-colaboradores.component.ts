import { Component, EventEmitter, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';


interface Employee {
  id: number;
  name: string;
  lastName: string;
  age: number;
  jobPosition: string;
  salary: number;
}

@Component({
  selector: 'add-colaboradores-component',
  standalone: true,
  imports: [
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    FormsModule
  ],
  templateUrl: './add-colaboradores.component.html',
  styles: '*{overflow:auto;text-align:center;padding:0.5rem;}.form-container{display:flex;flex-direction:column;align-items:center;justify-content:center;}'
})
export default class AddColaboradoresComponent {

  public employee: Employee | null;
  public id: number | any;
  public name: string | any;
  public lastName: string | any;
  public age: number | any;
  public jobPosition: string | any;
  public salary: number | any;

  constructor(private _dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.employee = this.data?.employee || null;
    if (this.data?.employee) {
      this.id = this.data?.employee?.id;
      this.name = this.data?.employee?.name;
      this.lastName = this.data?.employee?.lastName;
      this.age = this.data?.employee?.age;
      this.jobPosition = this.data?.employee?.jobPosition;
      this.salary = this.data?.employee?.salary;
    }
  }

  close() {
    this._dialogRef.close();
  }

  save() {
    this.employee = {
      id: this.id,
      name: this.name,
      lastName: this.lastName,
      age: this.age,
      jobPosition: this.jobPosition,
      salary: +this.salary
    }
    this._dialogRef.close(this.employee);
  }
}
