import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass']
})
export class SearchComponent implements OnInit {
  options: FormGroup;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }
  searchForApartmants() {
    console.log(this.options);
  }
  ngOnInit() {
  }

}
