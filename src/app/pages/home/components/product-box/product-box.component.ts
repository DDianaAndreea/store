import { Component, OnInit,Input ,Output,EventEmitter} from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: `./product-box.component.html`,

})
export class ProductBoxComponent implements OnInit {
  @Input() fullWidthMode=false;
  product:Product |undefined={
    id:1,
    title:'Shoes',
    price:150,
    category: 'shoes',
    desciption:'decription',
    image:'https://fakeimg.pl/500x500'
  };

  @Output() addToCart = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onAddToCart():void{
    this.addToCart.emit(this.product);
  }

}
