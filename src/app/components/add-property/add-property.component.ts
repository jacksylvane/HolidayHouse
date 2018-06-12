import { Component, OnInit, ElementRef } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HousesService } from '../../services/houses.service';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import { log } from 'util';

const URL = 'http://localhost:3000/api/upload';
@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.sass']
})
export class AddPropertyComponent implements OnInit {
  myForm: FormGroup;
  constructor(private fb: FormBuilder, private _housesService: HousesService,
    public snackBar: MatSnackBar,
    private el: ElementRef,
    private http: HttpClient
  ) {
    console.log(this.uuidv4());
  }
 uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    // tslint:disable-next-line:no-bitwise
    const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
  openFileWindow() {
    document.getElementById('myFile').click();
  }
  onSubmit(myForm) {
    console.log(myForm);
    const newHouse = {
      id: this.uuidv4(),
      name: myForm.value.name,
      typeOfProperty: myForm.value.typeOfProperty,
      address: {
        country: myForm.value.country,
        city: myForm.value.city,
        street: myForm.value.street
      },
      // picture: '',
      phone: myForm.value.phone,
      price: myForm.value.price,
      maxPeople: myForm.value.maxPeople,
      familFriendly: myForm.value.familyFriendly,
      petFriendly: myForm.value.petFriendly,
      description: myForm.value.description
    };
    this._housesService.insertProperty(newHouse)
      .then((res: any) => {
        console.log(res);
        if (res.message = 'Log has been succesfully added.') {
          this.snackBar.open('Property has been succesfully added.');
         setTimeout(() => {
           this.snackBar.dismiss();
         }, 3000);
        } else {
          console.log('error');
          // this._notificationService.showNotification('There was a problem trying to save log.⚠️⚠️ ');
        }
      });
  }

  upload() {
    // locate the file element meant for the file upload.
    const inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#myFile');
    // get the total amount of files attached to the file input.
    const fileCount: number = inputEl.files.length;
    // create a new fromdata instance
    const formData = new FormData();
    // check if the filecount is greater than zero, to be sure a file was selected.
    if (fileCount > 0) { // a file was selected
      // append the key name 'photo' with the first file in the element
      formData.append('photo', inputEl.files.item(0));
    console.log(formData);
      // call the angular http method
      this.http
        // tslint:disable-next-line:max-line-length
        // post the form data to the url defined above and map the response. Then subscribe //to initiate the post. if you don't subscribe, angular wont post.
        .post(URL, formData).map((res: Response) => res.json()).subscribe(
          // map the success function and alert the response
          (success) => {
            alert(success);
          },
          (error) => alert(error));
    }
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: '',
      typeOfProperty: '',
      country: '',
      city: '',
      street: '',
      // picture: '',
      phone: '',
      price: '',
      maxPeople: '',
      familyFriendly: '',
      petFriendly: '',
      description: ''
      // name: ['', Validators.required],
      // typeOfProperty: ['', Validators.required],
      // country: ['', Validators.required],
      // city: ['', Validators.required],
      // street: ['', Validators.required],
      // picture: '',
      // phone: ['', Validators.required],
      // price: ['', Validators.required],
      // maxPeople: ['', Validators.required],
      // familyFriendly: '',
      // petFriendly: '',
      // description: ['', Validators.required]
    });
  }

}
