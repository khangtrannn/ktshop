import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { CartListComponent } from './components/cart-list/cart-list.component';

@NgModule({
  declarations: [
    SearchComponent,
    CartListComponent
  ],
  imports: [CommonModule],
  exports: [SearchComponent, CartListComponent],
})
export class SharedModule {}
