import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { IgxButtonGroupModule, IgxButtonModule, IgxCardModule, IgxGridModule, IgxIconModule, IgxInputGroupModule, IgxPaginatorComponent, IgxPaginatorModule, IgxRippleModule, IgxSelectModule, IgxSimpleComboModule } from 'igniteui-angular';
import {FormsModule} from '@angular/forms';
import { DATA } from '../../data/pagingData';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-grid1',
  standalone: true,
  templateUrl: './grid1.component.html',
  styleUrl: './grid1.component.scss',
  imports: [
    IgxPaginatorModule,
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
  ],
  
})
export class Grid1Component implements AfterViewInit {


  @ViewChild('paginator', { static: true }) public paginator!: IgxPaginatorComponent;
    public productData = DATA;
    public itemsPerPage = [3, 4, 5];

    constructor(public cdr: ChangeDetectorRef) { }

    public ngAfterViewInit() {
        this.cdr.detectChanges();
    }

    public get data() {
        let products = this.productData;
        products = this.paginator ?
        this.productData.slice(this.paginator.page * this.paginator.perPage,
            ((this.paginator.page * this.paginator.perPage) + this.paginator.perPage)) : products;
        return products;
    }

    public navigateToFirstPage() {
        this.paginator.page = 0;
    }

}
