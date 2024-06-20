import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addnum',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addnum.component.html',
  styleUrl: './addnum.component.css'
})

export class AddnumComponent implements OnInit {

  num1:string = '';
  num2:string = '';
  result:number=0;


  Total()
  {
    this.result = parseInt(this.num1) + parseInt(this.num2);
  }

    constructor() { }

    ngOnInit(): void {
    }

    storeResultInLocalStorage() {
      const results = JSON.parse(localStorage.getItem('results') || '[]');
      results.push({ num1: this.num1, num2: this.num2, result: this.result});
      localStorage.setItem('results', JSON.stringify(results));
    }

  }
