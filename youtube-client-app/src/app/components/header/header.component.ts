import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  // @Input() searchDataPassed!: string;

  @Input() isClosed = true;

  @Output() passToApp = new EventEmitter();
  
  passSearchDataFromHeader(searchDataPassed: string) {
    this.passToApp.emit(searchDataPassed);
  }
}
