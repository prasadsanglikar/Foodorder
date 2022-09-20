import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getFoodById(id:number):Foods{
    return this.getAll().find(food => food.id == id)!;
  }




  getAllFoodByTag(tag: string): Foods[] {
    return tag == "All" ?
      this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAllTag(): Tag[] {
    return [
      { name: 'All', count: 10 },
      { name: 'FastFood', count: 6 },
      { name: 'Pizza', count: 1 },
      { name: 'Lunch', count: 2 },
      { name: 'SlowFood', count: 4 },
      { name: 'Hamburger', count: 1 },
      { name: 'Fry', count: 1 },
      { name: 'Soup', count: 1 },
    ];
  }

  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'Pizza Pepperoni',
        price: 199,
        cookTime: '10-20',
        favorite: false,
        origins: ['Indian'],
        star: 4.2,
        imageUrl: '/assets/pizza.jpg',
        tags: ['FastFood', 'Pizza'],
      },
      {
        id: 2,
        name: 'Burgers',
        price: 99,
        cookTime: '20-30',
        favorite: true,
        origins: ['Indian'],
        star: 3.1,
        imageUrl: '/assets/burgers.jpg',
        tags: ['FastFood', 'Burgers','Hamburger'],
      },
      {
        id: 3,
        name: 'Modak Rice',
        price: 25,
        cookTime: '40-30',
        favorite: false,
        origins: ['Indian'],
        star: 5.5,
        imageUrl: '/assets/Modak_(Rice).jpg',
        tags: ['SlowFood'],
      },
      {
        id: 4,
        name: 'French Fries',
        price: 35,
        cookTime: '30-50',
        favorite: true,
        origins: ['Indian'],
        star: 2.5,
        imageUrl: '/assets/French Fries1.jpg',
        tags: ['FastFood', 'Fry'],
      },

      {
        id: 5,
        name: 'Chinese Soup',
        price: 20,
        cookTime: '50-50',
        favorite: false,
        origins: ['Indian'],
        star: 3.5,
        imageUrl: '/assets/chinese soup.jpg',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id: 6,
        name: 'Spring rolls',
        price: 70,
        cookTime: '50-60',
        favorite: false,
        origins: ['Indian'],
        star: 1.5,
        imageUrl: '/assets/eranjan-9_cxzFyR-SU-unsplash.jpg',
        tags: ['FastFood', 'Spring roll'],
      },
      {
        id: 7,
        name: 'Masala Dosa',
        price: 25,
        cookTime: '10-50',
        favorite: false,
        origins: ['Indian'],
        star: 2.2,
        imageUrl: '/assets/thumb__700_0_0_0_auto.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 8,
        name: 'Samosa',
        price: 15,
        cookTime: '10-15',
        favorite: false,
        origins: ['Indian'],
        star: 5.1,
        imageUrl: '/assets/Samosa.jpg',
        tags: ['FastFood', 'Samosa'],
      },
      {
        id: 9,
        name: 'Panner',
        price: 89,
        cookTime: '10-15',
        favorite: false,
        origins: ['Indian'],
        star: 1.4,
        imageUrl: '/assets/panner.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 10,
        name: 'Vada Pav',
        price: 15,
        cookTime: '10-15',
        favorite: true,
        origins: ['Indian'],
        star: 3.5,
        imageUrl: '/assets/20220428-0522-recipes-10093 2.jpg',
        tags: ['FastFood', 'Vada Pav'],
      },
    ]
  }
}
