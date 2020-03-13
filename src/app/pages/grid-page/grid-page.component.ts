import { Component, OnInit } from '@angular/core';

import { GridService } from '@pages/shared/services/grid.service';

@Component({
  selector: 'tg-grid-page',
  templateUrl: './grid-page.component.html',
  styleUrls: ['./grid-page.component.scss'],
})
export class GridPageComponent implements OnInit {
  listOfVideos: any;

  constructor(public gridService: GridService) {}

  async ngOnInit() {
    this.listOfVideos = await this.gridService.getListOfVideos().toPromise();
  }
}
