import { Component } from '@angular/core';
import { IHeaderAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'tg-select-header',
  templateUrl: './select-header.component.html',
  styleUrls: ['./select-header.component.scss'],
})
export class SelectHeaderComponent implements IHeaderAngularComp {
  params: any;
  isChecked: boolean;

  agInit(params: any) {
    this.params = params;
    const selectedRows = this.params.api.getSelectedRows().length;
    const allRows = this.params.api.getDisplayedRowCount();
    if (selectedRows && allRows) {
      this.isChecked = selectedRows === allRows;
    }
    this.params.api.addEventListener('rowSelected', this.update.bind(this));
  }

  toggleSelect() {
    if (!this.isChecked) {
      this.params.api.selectAll();
    } else {
      this.params.api.deselectAll();
    }
  }

  update() {
    const selectedRows = this.params.api.getSelectedRows().length;
    const allColumns = this.params.api.getDisplayedRowCount();

    if (!this.isChecked && allColumns === selectedRows) {
      this.isChecked = true;
    } else if (this.isChecked && allColumns !== selectedRows) {
      this.isChecked = false;
    }
  }
}
