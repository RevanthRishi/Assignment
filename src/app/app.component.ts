import { Component,OnInit } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogConfig,
} from '@angular/material/dialog';
import { AddProductComponent } from './components/add-product/add-product.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(public dialog: MatDialog){}
  title = 'AngularTask';
  fromParent!:string | number;
  ngOnInit(): void {
    
  }
  applyFilter(event: Event) {
    this.fromParent = (event.target as HTMLInputElement).value;
  
  }
  addProduct(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    this.dialog.open(AddProductComponent, dialogConfig);
  }
}
