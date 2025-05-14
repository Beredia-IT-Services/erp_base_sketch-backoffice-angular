import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

interface Product {
  id: number;
  name: string;
  description: string;
  stock: number;
}

@Component({
  selector: 'mercancia-component',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatTableModule
  ],
  templateUrl: './mercancia.component.html',
})
export default class MercanciaComponent {

  private _displayedColumns: string[];
  private _dataSource: Product[];

  get displayedColumns() {
    return this._displayedColumns;
  }

  get dataSource() {
    return this._dataSource;
  }

  constructor() {
    this._displayedColumns = ['id', 'name', 'description', 'stock', 'actions'];
    this._dataSource = [
      {
        id: 1,
        name: 'Servidor Intel Xeon',
        description: 'Ejemplo',
        stock: 7
      },
      {
        id: 2,
        name: 'Conectores RJ45',
        description: 'Ejemplo',
        stock: 55
      },
      {
        id: 3,
        name: 'Latop ThinkPad L',
        description: 'Ejemplo',
        stock: 3
      }
    ];
  }
}
