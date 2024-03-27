import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { OrderComponent } from './components/order/order.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { DetailsComponent } from './components/details/details.component';

HomeComponent
export const routes: Routes = [
    // whitout //
    {path: '' , redirectTo :'/Home' , pathMatch:'full'},
    {path: 'Hoproductsme' , component :HomeComponent},
    {path: 'products' , component :ProductsComponent},
    {path: 'order' , component :OrderComponent},
    {path: 'AboutUs' , component :AboutUsComponent},
    {path: 'ContactUs' , component :ContactUsComponent},
    {path: 'Details/:id' , component :DetailsComponent},
    {path: '**' , component :NotFoundComponent}
];
