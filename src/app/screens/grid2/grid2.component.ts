import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { DefaultSortingStrategy, IgxButtonGroupModule, IgxButtonModule, IgxCardModule, IgxGridComponent, IgxGridModule, IgxIconModule, IgxInputGroupModule, IgxPaginatorComponent, IgxPaginatorModule, IgxRippleModule, IgxSelectModule, IgxSimpleComboModule, ISortingOptions, SortingDirection } from 'igniteui-angular';
import {FormsModule} from '@angular/forms';
import { DATA } from '../../data/sortingData';
import { CommonModule } from '@angular/common';
import { IgxPreventDocumentScrollDirective } from '../../directives/preventScrollDirective';




@Component({
  selector: 'app-grid2',
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
  templateUrl: './grid2.component.html',
  styleUrl: './grid2.component.scss'
})
export class Grid2Component implements OnInit, AfterViewInit {
  @ViewChild('grid1', { read: IgxGridComponent, static: true })
  public grid1!: IgxGridComponent;
  public data!: any[];
  public sortingTypes: ISortingOptions[] = [
      {
          mode: 'single'
      }, {
          mode: 'multiple'
      }
  ];
  public sortingOptions: ISortingOptions = this.sortingTypes[1];

  constructor() { }

  public ngOnInit(): void {
      this.data = DATA;
  }
  
  public ngAfterViewInit(): void {
      this.grid1.sortingExpressions = [
          {
              dir: SortingDirection.Asc, fieldName: 'CategoryName',
              ignoreCase: true, strategy: DefaultSortingStrategy.instance()
          }
      ];
  }

  public formatDate(val: Date) {
      return new Intl.DateTimeFormat('en-US').format(val);
  }

  handleSearchResults(event: KeyboardEvent) {
      event.preventDefault();
  }
}
