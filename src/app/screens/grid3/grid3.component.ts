import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { DefaultSortingStrategy, IgxButtonGroupModule, IgxButtonModule, IgxCardModule, IgxGridComponent, IgxGridModule, IgxIconModule, IgxInputGroupModule, IgxPaginatorComponent, IgxPaginatorModule, IgxRippleModule, IgxSelectModule, IgxSimpleComboModule, ISortingOptions, SortingDirection } from 'igniteui-angular';
import {FormsModule} from '@angular/forms';
import { DATA } from '../../data/filteringData';
import { CommonModule } from '@angular/common';
import { IgxPreventDocumentScrollDirective } from '../../directives/preventScrollDirective';




@Component({
  selector: 'app-grid3',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule, 
    IgxRippleModule,
    IgxButtonGroupModule,
    IgxButtonModule,
    IgxIconModule,
    IgxCardModule,
    IgxGridModule,
    IgxInputGroupModule,
    IgxSelectModule,
    IgxSimpleComboModule,
    IgxButtonModule,
    IgxPreventDocumentScrollDirective
  ],
  templateUrl: './grid3.component.html',
  styleUrl: './grid3.component.scss'
})
export class Grid3Component {

  public data: any;

  constructor() {
      this.data = DATA;
  }

}
