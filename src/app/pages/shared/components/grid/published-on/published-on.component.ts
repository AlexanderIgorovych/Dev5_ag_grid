import { ChangeDetectionStrategy, Component } from '@angular/core';

import * as moment from 'moment';

@Component({
  selector: 'tg-published-on',
  templateUrl: './published-on.component.html',
  styleUrls: ['./published-on.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublishedOnComponent {
  // todo: any

  params: any;

  agInit(params: any) {
    this.params = params;
  }

  get formattedDate(): string {
    return moment(this.params.value as string).format('DD-MMM-YYYY');
  }
}
