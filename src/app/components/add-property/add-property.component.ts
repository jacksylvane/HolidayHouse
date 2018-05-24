import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.sass']
})
export class AddPropertyComponent implements OnInit {

  constructor() { }

  openFileWindow() {
    document.getElementById('myFile').click();
  }
  ngOnInit() {
  }

}
