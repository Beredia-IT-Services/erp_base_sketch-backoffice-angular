import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';

interface Supplier {
  id: number;
  name: string;
}

@Component({
  selector: 'proveedores-component',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatTableModule,
  ],
  templateUrl: './proveedores.component.html'
})
export default class ProveedoresComponent {

  private _displayedColumns: string[];
  private _dataSource: Supplier[];

  get displayedColumns() {
    return this._displayedColumns;
  }

  get dataSource() {
    return this._dataSource;
  }

  constructor() {
    this._displayedColumns = ['id', 'name', 'actions'];
    this._dataSource = [
      {
        id: 1,
        name: 'Beredia'
      },
      {
        id: 2,
        name: 'Google'
      },
      {
        id: 3,
        name: 'Apple'
      }
    ];
  }
}
