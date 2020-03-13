import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarComponent } from './toolbar.component';
import { AgGridModule } from 'ag-grid-angular';
import { VideoTitleComponent } from '@pages/shared/components/grid/video-title/video-title.component';
import { ThumbnailComponent } from '@pages/shared/components/grid/thumbnail/thumbnail.component';
import { DescriptionComponent } from '@pages/shared/components/grid/description/description.component';
import { PublishedOnComponent } from '@pages/shared/components/grid/published-on/published-on.component';
import { CheckboxComponent } from '@pages/shared/components/grid/checkbox/checkbox.component';
import { SelectHeaderComponent } from '@pages/shared/components/grid/select-header/select-header.component';
import { By } from '@angular/platform-browser';
import {GridComponent} from '@pages/shared/components/grid/grid.component';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let debugElement: any;
  let parentfixture: any;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToolbarComponent, GridComponent],
      imports: [
        AgGridModule.withComponents([
          VideoTitleComponent,
          ThumbnailComponent,
          DescriptionComponent,
          PublishedOnComponent,
          ToolbarComponent,
          CheckboxComponent,
          SelectHeaderComponent,
          GridComponent
        ]),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent);
    parentfixture = TestBed.createComponent(GridComponent);

    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
    parentfixture.detectChanges();
  });

  it('should call method from component when toggle button clicked', () => {
    expect(component.selectionModeEnabled).toBeFalsy();
    const toggleButton = debugElement.query(
      By.css('button[data-qa=toggle-select-button]')
    );
    toggleButton.triggerEventHandler('click', null);
    expect(component.selectionModeEnabled).toBeTrue();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
