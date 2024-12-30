import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    RouterModule,
    FormsModule,   
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    
  ]
})
export class AppComponent {
  title = 'PrimeTechV1';
}
