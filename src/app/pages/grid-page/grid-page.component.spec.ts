import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { of } from 'rxjs';

import { GridPageComponent } from '@pages/grid-page/grid-page.component';
import { GridService } from '@pages/shared/services/grid.service';
import { AgGridModule } from 'ag-grid-angular';
import { VideoTitleComponent } from '@pages/shared/components/grid/video-title/video-title.component';
import { ThumbnailComponent } from '@pages/shared/components/grid/thumbnail/thumbnail.component';
import { DescriptionComponent } from '@pages/shared/components/grid/description/description.component';
import { PublishedOnComponent } from '@pages/shared/components/grid/published-on/published-on.component';
import { ToolbarComponent } from '@pages/shared/components/grid/toolbar/toolbar.component';
import { CheckboxComponent } from '@pages/shared/components/grid/checkbox/checkbox.component';
import { SelectHeaderComponent } from '@pages/shared/components/grid/select-header/select-header.component';

class GridServiceMock {
  getListOfVideos() {
    return of([]);
  }
}

describe('GridPageComponent', () => {
  let component: GridPageComponent;
  let fixture: ComponentFixture<GridPageComponent>;
  let gridService: GridService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GridPageComponent],
      providers: [{ provide: GridService, useClass: GridServiceMock }],
      imports: [
        AgGridModule.withComponents([
          VideoTitleComponent,
          ThumbnailComponent,
          DescriptionComponent,
          PublishedOnComponent,
          ToolbarComponent,
          CheckboxComponent,
          SelectHeaderComponent,
        ]),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridPageComponent);
    component = fixture.componentInstance;
    gridService = TestBed.inject(GridService);
    fixture.detectChanges();
  });

  it('should get data from service and set data to the listOfVideos', async () => {
    spyOn(gridService, 'getListOfVideos').and.callThrough();
    expect(component.listOfVideos).toBeFalsy();
    await component.ngOnInit();
    expect(gridService.getListOfVideos).toHaveBeenCalled();
    expect(component.listOfVideos).toEqual([]);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
