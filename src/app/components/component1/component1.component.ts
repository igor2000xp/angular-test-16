import { Component } from '@angular/core';
// import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
// import { MatInputModule } from '@angular/material/input';
import { NgFor } from '@angular/common';
// import {MatSelectModule} from '@angular/material/select';
// import { MatFormFieldModule } from '@angular/material/form-field';

export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component {
  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

}
