
import { FooterComponent } from './../Components/footer/footer.component';
import { Component } from '@angular/core';
import { UserLayoutComponent } from '../Layouts/user-layout/user-layout.component';
import { AdminLayoutComponent } from '../Layouts/admin-layout/admin-layout.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FooterComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','../styles.css']
})
export class AppComponent {
  title = 'E-Commerce';
}
