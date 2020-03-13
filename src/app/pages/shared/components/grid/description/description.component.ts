import { Component } from '@angular/core';

@Component({
  selector: 'tg-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
})
export class DescriptionComponent {
  // todo: any

  params: any;

  agInit(params: any) {
    this.params = params;
  }
}
