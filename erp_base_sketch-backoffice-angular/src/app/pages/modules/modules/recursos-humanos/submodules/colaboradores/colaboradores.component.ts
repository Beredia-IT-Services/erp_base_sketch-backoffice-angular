import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import AddColaboradoresComponent from './components/add-colaborador/add-colaboradores.component';
import { MatDialog } from '@angular/material/dialog';

interface Employee {
  id: number;
  name: string;
  lastName: string;
  age: number;
  jobPosition: string;
  salary: number;
}

@Component({
  selector: 'colaboradores-component',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatTableModule,
    MatFormFieldModule,
  ],
  templateUrl: './colaboradores.component.html',
})
export default class ColaboradoresComponent {

  public static count: number = 3;
  private _displayedColumns: string[];
  public dataSource = new MatTableDataSource<any>();

  get displayedColumns() {
    return this._displayedColumns;
  }

  constructor(private _dialog: MatDialog) {
    this._displayedColumns = ['id', 'name', 'lastName', 'age', 'jobPosition', 'salary', 'actions'];
    this.dataSource.data = [
      {
        id: 1,
        name: 'Abraham',
        lastName: 'Berrelleza',
        age: 24,
        jobPosition: 'Software Engineer',
        salary: 50000
      },
      {
        id: 2,
        name: 'Jose Miguel',
        lastName: 'Heredia',
        age: 34,
        jobPosition: 'Scrum Master',
        salary: 50000
      },
      {
        id: 3,
        name: 'Adrian',
        lastName: 'Sanchez',
        age: 26,
        jobPosition: 'Software Engineer',
        salary: 50000
      }
    ];
  }

  openAddModal(editMode: boolean, employee: Employee | null) {
    const dialogRef = this._dialog.open(AddColaboradoresComponent, {
      disableClose: true,
      data: {
        editMode,
        employee
      }
    });
    dialogRef.afterClosed().subscribe((result: Employee) => {
      if (!editMode) {
        ColaboradoresComponent.count++;
        result.id = ColaboradoresComponent.count;
        this.dataSource.data = [...this.dataSource.data, result]
      }
      this.dataSource.data.forEach(e => {
        if (e.id === result.id) {
          e.name = result.name;
          e.lastName = result.lastName;
          e.age = result.age;
          e.jobPosition = result.jobPosition;
          e.salary = result.salary;
        }
      })
    });
  }

  delete(id: number) {
    this.dataSource.data = this.dataSource.data.filter(e => e.id != id);
  }
}
