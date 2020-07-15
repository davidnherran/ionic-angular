import { Injectable } from '@angular/core';
import {Place} from './place.model'

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places: Place[] = [
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

  getPlaces() {
    return [...this.places]
  }

  getPlace(placeId: string) {
    return {
      ...this.places.find(place => {
        return place.id === placeId
      })
    }
  }

  addPlace(title: string, imageURL: string) {
    this.places.push({
      title, 
      imageURL,
      comments: [],
      id: this.places.length + 1 + ""
    });
  }

  deletePlace(placeId: string) {
    this.places = this.places.filter(place => {
      return place.id !== placeId
    })
  }

}
