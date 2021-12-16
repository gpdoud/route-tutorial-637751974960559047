import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  objs: any[] = [
    { id: 1, title: "ABC", count: 8 },
    { id: 3, title: "XYZ", count: 2 },
    { id: 9, title: "pqr", count: 11 },
    { id: -5, title: "def", count: 6 },
    { id: 6, title: "QRS", count: 5 },
    { id: 2, title: "", count: 12 },
    { id: 4, title: "CCC", count: 1 }
  ];
  searchText: string = "";

  aBool: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
