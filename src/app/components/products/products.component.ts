import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ProductService } from 'src/app/services/product.service';
import { PeriodicElement } from 'src/productInterface';
import { ActivatedRoute, Router } from '@angular/router';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogConfig,
} from '@angular/material/dialog';
import { UpdateProductComponent } from '../update-product/update-product.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, AfterViewInit, OnChanges {
  constructor(
    private service: ProductService,
    private route: Router,
    public dialog: MatDialog
  ) {}
  ProductData: any = [];
  displayedColumns: string[] = [
    'Id',
    'Title',
    'Price',
    'Description',
    'Category',
    'Image',
    'Rating',
    'Options',
  ];
  dataSource = new MatTableDataSource<PeriodicElement>();
  @Input() toChild!: string | number;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  ngOnChanges(changes: SimpleChanges) {
    const val = changes['toChild'];
    this.dataSource.filter = (val.currentValue || '').trim().toLowerCase();
  }

  ngOnInit(): void {
    this.getDataFromService();
    this.getDataFromLocal();
  }
  getDataFromService() {
    this.service.getProducts().subscribe((res) => {
      let arr: any = [...res];
      localStorage.setItem('dataArray', JSON.stringify(arr));
    });
  }
  getDataFromLocal() {
    let fromStore: any = localStorage.getItem('dataArray');
    let storageArr = JSON.parse(fromStore);
    this.dataSource.data = storageArr;
  }
  deleteData(id: number) {
    let data: any = localStorage.getItem('dataArray');
    let parseData = JSON.parse(data);
    const index = parseData.findIndex((data: any) => data.id === id);
    if (index > -1) {
      parseData.splice(index, 1);
    }
    //getting new array
    localStorage.setItem('dataArray', JSON.stringify(parseData));
    let getnew: any = localStorage.getItem('dataArray');
    let getNewArray: any = JSON.parse(getnew);
    this.getDataFromLocal();

    // console.log(getNewArray);
  }
  updateProduct(id: number) {
    let data: any = localStorage.getItem('dataArray');
    let parseData = JSON.parse(data);
    const index = parseData.findIndex((data: any) => data.id === id);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = parseData[index];
    this.dialog.open(UpdateProductComponent, dialogConfig);

  }
  refresh(){
    this.getDataFromLocal()
  }
}
