import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup,FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss'],
})
export class UpdateProductComponent implements OnInit {
  constructor(private route: Router,private fb:FormBuilder, public dialogRef: MatDialogRef<UpdateProductComponent>,@Inject(MAT_DIALOG_DATA)  data:any) {
    this.localdata = data;
    
  }
  
  myForm!:FormGroup
  localdata:any;
  ngOnInit(): void {
    this.myForm = this.fb.group({
title:this.localdata.title,
price:this.localdata.price,
description:this.localdata.description,
category:this.localdata.category,
image:this.localdata.image,

rating:new FormGroup({
  rate:new FormControl(this.localdata.rating.rate),
  count:new FormControl(this.localdata.rating.count)
})
    })
  
  }
  submitForm(){
    let dataFromLocal:any=localStorage.getItem('dataArray')
    let parseData:any =JSON.parse(dataFromLocal)
    const index = parseData.findIndex((data: any) => data.id === this.localdata.id);
     if (index > -1) {
      parseData.splice(index, 1,this.myForm.value);
    }
    localStorage.setItem('dataArray', JSON.stringify(parseData));
   
    this.dialogRef.close(this.myForm.value);
    console.log(this.myForm.value)
  }
  cancelUpdate() {
    this.dialogRef.close();
    // this.route.navigate(['/products'])
  }
}
