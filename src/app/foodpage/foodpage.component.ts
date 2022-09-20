import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit {
food!:Foods
  constructor(private ActivateRoute:ActivatedRoute,private foodServices:FoodService) { 
    ActivateRoute.params.subscribe((params)=>{
      if(params['id'])
      this.food = foodServices.getFoodById(params['id'])
    })
  }
  
  ngOnInit(): void {
  }

}
