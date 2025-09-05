import { Component } from '@angular/core';
import { AdminHomeComponent } from '../../Components/admin-home/admin-home.component';
import { AdminNavComponent } from '../../Components/admin-nav/admin-nav.component';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [AdminHomeComponent,AdminNavComponent],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export class AdminLayoutComponent {

}
