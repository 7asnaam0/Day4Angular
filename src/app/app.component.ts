import { Component } from '@angular/core';
import { RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './components/products/products.component';
import { FooterComponent } from './components/footer/footer.component';
import { OrderComponent } from './components/order/order.component';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent , ProductsComponent, 
    FooterComponent,OrderComponent,RouterOutlet
    ,RouterLinkActive, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ecommerce';
}
