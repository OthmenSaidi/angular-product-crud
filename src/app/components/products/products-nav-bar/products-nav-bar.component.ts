import { EventDriverService } from './../../../services/event.driver.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActionEvent, ProductActionTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {
  //en utlisant subject observable (le service on plus besoin de precier les input output)
  //@Output() productEventEmitter: EventEmitter<ActionEvent> = new EventEmitter();// le composant products-navabar a une sortie

  constructor(private eventDriverService: EventDriverService) { }

  ngOnInit(): void {
  }

  onGetAllProducts() {
    //this.productEventEmitter.emit({ type: ProductActionTypes.GET_ALL_PRODUCTS });
    this.eventDriverService.publishEvent({ type: ProductActionTypes.GET_ALL_PRODUCTS });

  }
  onGetSelectedProducts() {
    //this.productEventEmitter.emit({ type: ProductActionTypes.GET_SELECTED_PRODUCTS });
    this.eventDriverService.publishEvent({ type: ProductActionTypes.GET_SELECTED_PRODUCTS });



  }
  onGetAvailableProducts() {
    //this.productEventEmitter.emit({ type: ProductActionTypes.GET_AVAILABLE_PRODUCTS });
    this.eventDriverService.publishEvent({ type: ProductActionTypes.GET_AVAILABLE_PRODUCTS });



  }
  onNewProduct() {
    //this.productEventEmitter.emit({ type: ProductActionTypes.NEW_PRODUCT });
    this.eventDriverService.publishEvent({ type: ProductActionTypes.NEW_PRODUCT });



  }
  onSearch(dataForm: any) {
    //this.productEventEmitter.emit({ type: ProductActionTypes.SEARCH_PRODUCTS, payload: dataForm });
    this.eventDriverService.publishEvent({ type: ProductActionTypes.SEARCH_PRODUCTS, payload: dataForm });




  }
}
