import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';



const materialModules:any=[MatTableModule,MatButtonModule,MatDialogModule,MatCardModule,MatPaginatorModule,MatFormFieldModule,MatInputModule]


@NgModule({
  
  imports: [materialModules],
  exports:[materialModules]
})
export class MaterialModule { }
