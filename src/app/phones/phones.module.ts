import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [CatalogComponent, CreateComponent, DetailsComponent, EditComponent, SearchComponent],
  imports: [
    CommonModule
  ],
  exports: [CatalogComponent, CreateComponent, DetailsComponent, EditComponent, SearchComponent]
})
export class PhonesModule { }
