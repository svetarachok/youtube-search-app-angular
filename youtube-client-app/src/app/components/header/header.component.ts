import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  public searchDataPassed!: string;

  @Input() isClosed = true;
  
  // toggleFilerBar(isClosed: Event) {
  //   console.log(isClosed);
  //   isClosed = !isClosed;
  // }
}
