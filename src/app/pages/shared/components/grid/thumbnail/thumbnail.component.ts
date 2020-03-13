import { Component } from '@angular/core';

@Component({
  selector: 'tg-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss'],
})
export class ThumbnailComponent {
  // todo: any
  params: any;

  agInit(params: any) {
    this.params = params;
  }
}
