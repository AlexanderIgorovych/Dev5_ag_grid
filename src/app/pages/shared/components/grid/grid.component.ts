import { AfterViewInit, Component, Input } from '@angular/core';

import { AllModules } from '@ag-grid-enterprise/all-modules';

import { GridOptions } from 'ag-grid-community';
import { ThumbnailComponent } from '@pages/shared/components/grid/thumbnail/thumbnail.component';
import { ToolbarComponent } from '@pages/shared/components/grid/toolbar/toolbar.component';
import { DescriptionComponent } from '@pages/shared/components/grid/description/description.component';
import { PublishedOnComponent } from '@pages/shared/components/grid/published-on/published-on.component';
import { VideoTitleComponent } from '@pages/shared/components/grid/video-title/video-title.component';
import { SelectHeaderComponent } from '@pages/shared/components/grid/select-header/select-header.component';

@Component({
  selector: 'tg-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements AfterViewInit {
  @Input() gridItems: any;

  columnDefs = [
    {
      headerName: 'Thumbnail',
      field: 'thumbnailUrl',
      cellRendererFramework: ThumbnailComponent,
      autoHeight: true,
    },
    {
      headerName: 'Video Title',
      field: 'title',
      cellRendererFramework: VideoTitleComponent,
    },
    {
      headerName: 'Published on',
      field: 'publishedAt',
      cellRendererFramework: PublishedOnComponent,
    },
    {
      headerName: 'Description',
      field: 'description',
      cellRendererFramework: DescriptionComponent,
      autoHeight: true,
    },
  ];

  gridOptions: GridOptions = {
    columnDefs: this.columnDefs,
    rowSelection: 'multiple',
    rowMultiSelectWithClick: true,
    angularCompileHeaders: true,
  };

  frameworkComponents = {
    toolbar: ToolbarComponent,
    selectHeaderComponent: SelectHeaderComponent,
  };

  sideBar = {
    toolPanels: [
      {
        id: 'selectionMode',
        labelDefault: 'Toolbar',
        labelKey: 'selectionMode',
        toolPanel: 'toolbar',
      },
    ],
  };
  modules = AllModules;

  ngAfterViewInit() {
    if (this.gridOptions.api) {
      this.gridOptions.api.setRowData(this.gridItems);
      this.gridOptions.api.sizeColumnsToFit();
    }
  }

  getContextMenuForTitle(params: any): any {
    if (params.column.colDef.field !== 'title') {
      return;
    }
    return [
      {
        name: `Watch this video on YouTube`,
        action: () => {
          window.open(
            `https://www.youtube.com/watch?v=${params.value.videoId}`,
            '_blank'
          );
        },
      },
    ];
  }
}
