import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  students :any[] = [
    {
      name: "ali",
      age : 20,
      id : 3022
    }
    ,
    {
      name: "ahmed",
      age : 21,
      id : 3023
    }
    ,
    {
      name: "khaled",
      age : 22,
      id : 3024
    }
    ,
    {
      name: "mohamed",
      age : 23,
      id : 3025
    }
    ]

    // construcot special method for class first thing start for class 
    // if insturcor has aparametrs  must co injection

    constructor() {

    }
  }
