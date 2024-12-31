import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./Layouts/navbar/navbar.component";
import { BannerComponent } from "./Components/banner/banner.component";
import { SliderComponent } from "./Components/slider/slider.component";
import { FooterComponent } from "./Layouts/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, BannerComponent, SliderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'carproject';
}
