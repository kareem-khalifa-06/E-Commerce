
import { Component } from '@angular/core';
import { UserNavComponent } from '../../Components/user-nav/user-nav.component';
import { ShopComponent } from '../../Components/shop/shop.component';
import { UserHomeComponent } from '../../Components/user-home/user-home.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-layout',
  standalone: true,
  imports: [UserNavComponent, RouterOutlet],
  templateUrl: './user-layout.component.html',
  styleUrl: './user-layout.component.css'
})
export class UserLayoutComponent {

}
