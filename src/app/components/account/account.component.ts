import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddPropertyComponent } from '../add-property/add-property.component';
import { HousesService } from '../../services/houses.service';
import { log } from 'util';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.sass']
})
export class AccountComponent {
  showConfirmDelete = false;
  logToDeleteIndex: number;
  logToDeleteId: number;
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  houses: any;
  result: any;
  // =  [
  //   {
  //     'id': 1, 'name': 'Lovely house', 'type': 'house',
  //     'family-friendly': true, 'pet-friendly': false, 'max-person': 5,
  //     'price': '100', 'address': { 'country': 'Spain', 'city': 'Palma' }
  //   },
  //   {
  //     'id': 2, 'name': 'Lovely house', 'type': 'house',
  //     'family-friendly': true, 'pet-friendly': false, 'max-person': 5,
  //     'price': '100', 'address': { 'country': 'Spain', 'city': 'Palma' }
  //   },
  //   {
  //     'id': 3, 'name': 'Lovely house', 'type': 'house',
  //     'family-friendly': true, 'pet-friendly': false, 'max-person': 5,
  //     'price': '100', 'address': { 'country': 'Spain', 'city': 'Palma' }
  //   },
  //   {
  //     'id': 4, 'name': 'Lovely house', 'type': 'house',
  //     'family-friendly': true, 'pet-friendly': false, 'max-person': 5,
  //     'price': '100', 'address': { 'country': 'Spain', 'city': 'Palma' }
  //   },
  //   {
  //     'id': 5, 'name': 'Lovely house', 'type': 'house',
  //     'family-friendly': true, 'pet-friendly': false, 'max-person': 5,
  //     'price': '100', 'address': { 'country': 'Spain', 'city': 'Palma' }
  //   },
  //   {
  //     'id': 6, 'name': 'Lovely house', 'type': 'house',
  //     'family-friendly': true, 'pet-friendly': false, 'max-person': 5,
  //     'price': '100', 'address': { 'country': 'Spain', 'city': 'Palma' }
  //   },
  //   {
  //     'id': 7, 'name': 'Lovely house', 'type': 'house',
  //     'family-friendly': true, 'pet-friendly': false, 'max-person': 5,
  //     'price': '100', 'address': { 'country': 'Spain', 'city': 'Palma' }
  //   },
  //   {
  //     'id': 8, 'name': 'Lovely house', 'type': 'house',
  //     'family-friendly': true, 'pet-friendly': false, 'max-person': 5,
  //     'price': '100', 'address': { 'country': 'Spain', 'city': 'Palma' }
  //   },
  //   {
  //     'id': 9, 'name': 'Lovely house', 'type': 'house',
  //     'family-friendly': true, 'pet-friendly': false, 'max-person': 5,
  //     'price': '100', 'address': { 'country': 'Spain', 'city': 'Palma' }
  //   }
  // ];
  constructor(public dialog: MatDialog, private _housesService: HousesService, public snackBar: MatSnackBar) {
    this.getAllHouses();
  }
  getAllHouses() {
    this._housesService.getAllHouses()
      .subscribe((res) => {
        console.log(res);
        this.houses = res;
      });
    }
  initDelete(i, id) {
    this.showConfirmDelete = true;
    this.logToDeleteIndex = i;
    this.logToDeleteId = id;
  }
  deleteLog(i, id) {
    this.showConfirmDelete = false;
    console.log(this.logToDeleteId);
    this._housesService.deleteProperty(this.logToDeleteId)
    .then((res: any) => {
      if (res.status === 200) {
        this.snackBar.open('Property has been succesfully deleted.');
        setTimeout(() => {
          this.snackBar.dismiss();
        }, 3000);
      }
    });
    // this.logs.splice(this.logToDeleteIndex, 1);
    // this._notificationService.showNotification('Log has been deleted! 💣🗑️');
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
  getPaymentClass(status) {
    if (status.symbol === 'Paid') {
      return 'paid';
    } else {
      return 'notPaid';
    }
  }
}

export interface PeriodicElement {
  name: any;
  position: any;
  weight: any;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: '20.05 - 08.06', name: '350€', weight: 'Lady Gaga + 4', symbol: 'Paid' },
  { position: '12.05 - 18.05', name: '900€', weight: 'Apple', symbol: 'Not Paid' },
  { position: '06.05 - 11.05', name: '750€', weight: 'Matt Damon + 1', symbol: 'Paid' },
  { position: '29.04 - 05.05', name: '3600€', weight: 'Brad Pitt + 5', symbol: 'Paid' },
  { position: '26.04 - 27.04', name: '200€', weight: 'Donald Trump + 2', symbol: 'Not Paid' },
  { position: '26.04 - 10.05', name: '2400€', weight: 'Aaron Rodgers + 3', symbol: 'Paid' },
  { position: '20.04 - 25.04', name: '750€', weight: 'Bill Clinton + 1', symbol: 'Paid' },
  { position: '01.04 - 17.04', name: '2400€', weight: 'DHL', symbol: 'Paid' },
  { position: '23.03 - 30.03', name: '1050€', weight: 'Elon Musk + 1', symbol: 'Paid' },
  { position: '16.03 - 20.03', name: '700€', weight: 'Kevin Hart + 5', symbol: 'Paid' },
  { position: '13.03 - 14.03', name: '150€', weight: 'Jackie Chan + 2', symbol: 'Paid' },
  { position: '30.03 - 12.03', name: '1875€', weight: 'Bruce Willis + 1', symbol: 'Not Paid' }
];
