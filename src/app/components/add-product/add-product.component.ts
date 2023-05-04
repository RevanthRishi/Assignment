import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  constructor(private route: Router,private fb:FormBuilder, public dialogRef: MatDialogRef<AddProductComponent>) {}
  myForm!:FormGroup
 
  ngOnInit(): void {
    this.myForm = this.fb.group({
title:'',
price:'',
description:'',
category:'',
image:'',
rating:new FormGroup({
  rate:new FormControl(''),
  count:new FormControl('')
}),
    })
  }

  cancel(){
    this.dialogRef.close();
  }
  submitForm(){
    let data: any = localStorage.getItem('dataArray');
    let parseData = JSON.parse(data);
    parseData.unshift(this.myForm.value)


    localStorage.setItem('dataArray', JSON.stringify(parseData));
    console.log(parseData)
    // let getnew: any = localStorage.getItem('dataArray');
    // let getNewArray: any = JSON.parse(getnew);
    this.dialogRef.close();
    
  }
}
