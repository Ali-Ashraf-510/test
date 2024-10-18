import { Routes } from '@angular/router';
import { HomeComponent  } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import{NotfoundComponent} from './notfound/notfound.component'
import { NavbarComponent } from './navbar/navbar.component';
export const routes: Routes = [
    {path:'', redirectTo: 'home', pathMatch:'full'},
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'contact', component: ContactComponent },
    {path:'**', component:NotfoundComponent}
  ];
  