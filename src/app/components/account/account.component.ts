import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddPropertyComponent } from '../add-property/add-property.component';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.sass']
})
export class AccountComponent {

  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  houses = [
    {
      'id': 1, 'name': 'Lovely house', 'type': 'house',
      'family-friendly': true, 'pet-friendly': false, 'max-person': 5,
      'price': '100', 'address': { 'country': 'Spain', 'city': 'Palma' }
    },
    {
      'id': 2, 'name': 'Lovely house', 'type': 'house',
      'family-friendly': true, 'pet-friendly': false, 'max-person': 5,
      'price': '100', 'address': { 'country': 'Spain', 'city': 'Palma' }
    },
    {
      'id': 3, 'name': 'Lovely house', 'type': 'house',
      'family-friendly': true, 'pet-friendly': false, 'max-person': 5,
      'price': '100', 'address': { 'country': 'Spain', 'city': 'Palma' }
    },
    {
      'id': 4, 'name': 'Lovely house', 'type': 'house',
      'family-friendly': true, 'pet-friendly': false, 'max-person': 5,
      'price': '100', 'address': { 'country': 'Spain', 'city': 'Palma' }
    },
    {
      'id': 5, 'name': 'Lovely house', 'type': 'house',
      'family-friendly': true, 'pet-friendly': false, 'max-person': 5,
      'price': '100', 'address': { 'country': 'Spain', 'city': 'Palma' }
    },
    {
      'id': 6, 'name': 'Lovely house', 'type': 'house',
      'family-friendly': true, 'pet-friendly': false, 'max-person': 5,
      'price': '100', 'address': { 'country': 'Spain', 'city': 'Palma' }
    },
    {
      'id': 7, 'name': 'Lovely house', 'type': 'house',
      'family-friendly': true, 'pet-friendly': false, 'max-person': 5,
      'price': '100', 'address': { 'country': 'Spain', 'city': 'Palma' }
    },
    {
      'id': 8, 'name': 'Lovely house', 'type': 'house',
      'family-friendly': true, 'pet-friendly': false, 'max-person': 5,
      'price': '100', 'address': { 'country': 'Spain', 'city': 'Palma' }
    },
    {
      'id': 9, 'name': 'Lovely house', 'type': 'house',
      'family-friendly': true, 'pet-friendly': false, 'max-person': 5,
      'price': '100', 'address': { 'country': 'Spain', 'city': 'Palma' }
    }
  ];
  constructor(public dialog: MatDialog) {
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddPropertyComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

}

export interface PeriodicElement {
  name: any;
  position: any;
  weight: any;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: '17.03 - 20.03', name: '350€', weight: 'Jackie Chan + 2', symbol: 'Paid' },
  { position: '12.03 - 30.03', name: '100€', weight: 'Bruce Willis + 1', symbol: 'Not Paid' }
];
