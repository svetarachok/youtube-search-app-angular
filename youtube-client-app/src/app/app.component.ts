import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'YouTube client app';

  @Input() searchDataFurther = '';

  @Output() passDataToList = new EventEmitter<string>();

  passDataFromApp(data: string) {
    this.searchDataFurther = data;
  }
}
