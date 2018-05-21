import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-houses-list',
  templateUrl: './houses-list.component.html',
  styleUrls: ['./houses-list.component.sass']
})
export class HousesListComponent implements OnInit {
  houses = [
    {'id': 1, 'name': 'Lovely house', 'type': 'house',
     'family-friendly': true, 'pet-friendly' : false, 'max-person' : 5,
     'price': '100', 'address' : {'country': 'Spain', 'city': 'Palma'}
    },
    {'id': 2, 'name': 'Lovely house', 'type': 'house',
     'family-friendly': true, 'pet-friendly' : false, 'max-person' : 5,
     'price': '100', 'address' : {'country': 'Spain', 'city': 'Palma'}
    },
    {'id': 3, 'name': 'Lovely house', 'type': 'house',
     'family-friendly': true, 'pet-friendly' : false, 'max-person' : 5,
     'price': '100', 'address' : {'country': 'Spain', 'city': 'Palma'}
    },
    {'id': 4, 'name': 'Lovely house', 'type': 'house',
     'family-friendly': true, 'pet-friendly' : false, 'max-person' : 5,
     'price': '100', 'address' : {'country': 'Spain', 'city': 'Palma'}
    },
    {'id': 5, 'name': 'Lovely house', 'type': 'house',
     'family-friendly': true, 'pet-friendly' : false, 'max-person' : 5,
     'price': '100', 'address' : {'country': 'Spain', 'city': 'Palma'}
    },
    {'id': 6, 'name': 'Lovely house', 'type': 'house',
     'family-friendly': true, 'pet-friendly' : false, 'max-person' : 5,
     'price': '100', 'address' : {'country': 'Spain', 'city': 'Palma'}
    },
    {'id': 7, 'name': 'Lovely house', 'type': 'house',
     'family-friendly': true, 'pet-friendly' : false, 'max-person' : 5,
     'price': '100', 'address' : {'country': 'Spain', 'city': 'Palma'}
    },
    {'id': 8, 'name': 'Lovely house', 'type': 'house',
     'family-friendly': true, 'pet-friendly' : false, 'max-person' : 5,
     'price': '100', 'address' : {'country': 'Spain', 'city': 'Palma'}
    },
    {'id': 9, 'name': 'Lovely house', 'type': 'house',
     'family-friendly': true, 'pet-friendly' : false, 'max-person' : 5,
     'price': '100', 'address' : {'country': 'Spain', 'city': 'Palma'}
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
