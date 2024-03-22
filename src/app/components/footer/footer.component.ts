import { Component } from '@angular/core';
import { HighlightIteamDirective } from '../../directives/highlight-iteam.directive';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [HighlightIteamDirective],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
