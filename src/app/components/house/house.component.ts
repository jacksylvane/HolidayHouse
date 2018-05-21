import { Router, ActivatedRoute, Params } from '@angular/router';
import { OnInit, Component } from '@angular/core';


@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.sass']
})
export class HouseComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      const house = params['id'];
      console.log(house);
    });
  }

}
