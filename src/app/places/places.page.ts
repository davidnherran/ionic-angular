import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  private places = [
    {
      id: '1',
      title: 'Eiffel Tower',
      imageURL: 'https://megaconstrucciones.net/images/monumentos/foto/torre-eiffel.jpg',
      comments: ['Awesome place', 'Wonderful experience']
    },{
      id: '2',
      title: 'Statue of liberty',
      imageURL: 'https://www.turismonuevayork.com/wp-content/uploads/2009/07/6a-1024x762.jpg',
      comments: ['Awesome place', 'Wonderful experience']
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
