import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent  {


  fruitName: string;
  fruits: any[] = [
    {
      id: 1,
      name: "Apple",
      searchText: "apple"
    },
    {
      id: 2,
      name: "Orange",
      searchText: "orange"
    },
    {
      id: 3,
      name: "Banana",
      searchText: "banana"
    }
  ];

  selectedFruit: any = this.fruits[0];

  public fruitSelected(fruit: any) {
    this.fruitName = fruit ? fruit.name : 'none';
  }


  private logo: String;
  private name: String;
  private description: String;
  constructor(){
    this.logo = "../app/assets/Images/Logo/Logo_Clear_478x141.png";
    this.name = "Clear Review";
    this.description = "We provide a platform to help students make sure they make the correct decisions when registering" +
      " their courses. Students will be able to review and lookup the ratings of courses and professors."
  }

}
