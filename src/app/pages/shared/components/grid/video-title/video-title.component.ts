import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'tg-video-title',
  templateUrl: './video-title.component.html',
  styleUrls: ['./video-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoTitleComponent {
  // todo: any
  params: any;

  agInit(params: any) {
    this.params = params;
  }
}
