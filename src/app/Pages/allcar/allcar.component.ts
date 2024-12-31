import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-allcar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './allcar.component.html',
  styleUrl: './allcar.component.scss'
})
export class AllcarComponent {
  carType =[1,2,3,4,5,6,7,8]

}
