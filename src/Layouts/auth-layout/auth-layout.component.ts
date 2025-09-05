import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserNavComponent } from '../../Components/user-nav/user-nav.component';
@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [RouterOutlet,UserNavComponent],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.css'
})
export class AuthLayoutComponent {

}
