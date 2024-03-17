import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';

import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { CreateComponent } from './create/create.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon'



@NgModule({
  declarations: [CatalogComponent, CreateComponent, DetailsComponent, EditComponent, SearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatIconModule
  ],
  exports: [CatalogComponent, CreateComponent, DetailsComponent, EditComponent, SearchComponent]
})
export class PhonesModule { }
