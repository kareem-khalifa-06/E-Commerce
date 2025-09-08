import { Routes } from '@angular/router';
import { UserLayoutComponent } from '../Layouts/user-layout/user-layout.component';
import { AdminLayoutComponent } from '../Layouts/admin-layout/admin-layout.component';
import { NotFoundComponent } from '../Components/not-found/not-found.component';
import { UserHomeComponent } from '../Components/user-home/user-home.component';
import { UserCartComponent } from '../Components/user-cart/user-cart.component';
import { AdminHomeComponent } from '../Components/admin-home/admin-home.component';
import { AuthLayoutComponent } from '../Layouts/auth-layout/auth-layout.component';
import { LoginComponent } from '../Components/login/login.component';
import { RegisterComponent } from '../Components/register/register.component';
import { ShopComponent } from '../Components/shop/shop.component';
import { BlogComponent } from '../Components/blog/blog.component';

export const routes: Routes = [
    {
      path: 'auth',
      component: AuthLayoutComponent,
      children: [
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent }
      ]
    },
    {
      path: 'user',
      component: UserLayoutComponent,
      children: [
        { path: '', redirectTo: 'user-home', pathMatch: 'full' },
        { path: 'user-home', component: UserHomeComponent },
        { path: 'cart', component: UserCartComponent },
        { path: 'shop', component: ShopComponent },
        { path: 'blog', component: BlogComponent }
      ]
    },
    {
      path: 'admin',
      component: AdminLayoutComponent,
      children: [
        { path: '', redirectTo: 'admin-home', pathMatch: 'full' },
        { path: 'admin-home', component: AdminHomeComponent }
      ]
    },
    { path: '', redirectTo: 'user', pathMatch: 'full' }
    ,
    { path: '**',
       component: NotFoundComponent }
  ];
  