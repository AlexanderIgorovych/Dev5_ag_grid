import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from '@pages/pages-routing.module';
import { SharedModule } from '@shared/shared.module';
import { GridPageComponent } from '@pages/grid-page/grid-page.component';
import { HeaderComponent } from '@pages/shared/components/header/header.component';
import { GridComponent } from '@pages/shared/components/grid/grid.component';

import { ToolbarComponent } from '@pages/shared/components/grid/toolbar/toolbar.component';
import { CheckboxComponent } from '@pages/shared/components/grid/checkbox/checkbox.component';
import { DescriptionComponent } from '@pages/shared/components/grid/description/description.component';
import { PublishedOnComponent } from '@pages/shared/components/grid/published-on/published-on.component';
import { ThumbnailComponent } from '@pages/shared/components/grid/thumbnail/thumbnail.component';
import { VideoTitleComponent } from '@pages/shared/components/grid/video-title/video-title.component';
import { GridService } from '@pages/shared/services/grid.service';
import { AgGridModule } from 'ag-grid-angular';
import { SelectHeaderComponent } from '@pages/shared/components/grid/select-header/select-header.component';

const MODULES = [
  SharedModule,
  CommonModule,
  PagesRoutingModule,
  AgGridModule.withComponents([
    VideoTitleComponent,
    ThumbnailComponent,
    DescriptionComponent,
    PublishedOnComponent,
    ToolbarComponent,
    CheckboxComponent,
    SelectHeaderComponent,
  ]),
];

const PAGES = [GridPageComponent];

const COMPONENTS = [HeaderComponent, GridComponent];

const GRID_CELL_COMPONENTS = [
  ToolbarComponent,
  CheckboxComponent,
  DescriptionComponent,
  PublishedOnComponent,
  ThumbnailComponent,
  VideoTitleComponent,
];

const PROVIDERS = [GridService];

@NgModule({
  imports: [...MODULES],
  declarations: [...PAGES, ...COMPONENTS, ...GRID_CELL_COMPONENTS],
  providers: [...PROVIDERS],
  exports: [...COMPONENTS],
})
export class PagesModule {}
