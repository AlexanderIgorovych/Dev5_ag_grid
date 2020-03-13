import { Component } from '@angular/core';

@Component({
  selector: 'tg-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent {
  params: any;

  agInit(params: any) {
    this.params = params;
  }
}
