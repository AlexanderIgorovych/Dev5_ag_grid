import { Component } from '@angular/core';

import { IToolPanelParams } from '@ag-grid-enterprise/all-modules';
import { CheckboxComponent } from '@pages/shared/components/grid/checkbox/checkbox.component';
import { ThumbnailComponent } from '@pages/shared/components/grid/thumbnail/thumbnail.component';
import { DescriptionComponent } from '@pages/shared/components/grid/description/description.component';
import { PublishedOnComponent } from '@pages/shared/components/grid/published-on/published-on.component';
import { VideoTitleComponent } from '@pages/shared/components/grid/video-title/video-title.component';

@Component({
  selector: 'tg-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  selectedRecordsCount: number;
  totalCountOfRecords: number;
  params: IToolPanelParams;

  selectionModeEnabled = false;

  private readonly basicComponents = [
    {
      headerName: 'Thumbnail',
      field: 'thumbnailUrl',
      cellRendererFramework: ThumbnailComponent,
    },
    {
      headerName: 'Published on',
      field: 'publishedAt',
      cellRendererFramework: PublishedOnComponent,
    },
    {
      headerName: 'Video Title',
      field: 'title',
      cellRendererFramework: VideoTitleComponent,
    },
    {
      headerName: 'Description',
      field: 'description',
      cellRendererFramework: DescriptionComponent,
    },
  ];

  agInit(params: IToolPanelParams) {
    this.params = params;
    this.params.api.addEventListener(
      'modelUpdated',
      this.updateTotals.bind(this)
    );
    this.params.api.addEventListener(
      'rowSelected',
      this.updateTotals.bind(this)
    );
  }

  updateTotals() {
    this.selectedRecordsCount = 0;
    this.totalCountOfRecords = 0;
    this.params.api.forEachNode(row => {
      if (row.isSelected()) {
        this.selectedRecordsCount++;
      }
      this.totalCountOfRecords++;
    });
  }

  toggleSelectionMode() {
    this.selectionModeEnabled = !this.selectionModeEnabled;
    if (this.selectionModeEnabled) {
      this.params.api.setColumnDefs([
        {
          headerName: 'Select',
          field: 'checkbox',
          cellRendererFramework: CheckboxComponent,
          headerComponent: 'selectHeaderComponent',
        },
        ...this.basicComponents,
      ]);
    } else {
      this.params.api.setColumnDefs([
        {
          headerName: 'Thumbnail',
          field: 'thumbnailUrl',
          cellRendererFramework: ThumbnailComponent,
        },
        {
          headerName: 'Published on',
          field: 'publishedAt',
          cellRendererFramework: PublishedOnComponent,
        },
        {
          headerName: 'Video Title',
          field: 'title',
          cellRendererFramework: VideoTitleComponent,
        },
        {
          headerName: 'Description',
          field: 'description',
          cellRendererFramework: DescriptionComponent,
        },
      ]);
    }
  }
}
