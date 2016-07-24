import {Component} from 'angular2/core';
import {ProductListComponent} from './product-list/product-list.component';

@Component({
	selector: 'pm-app',
	directives: [ProductListComponent],
	//behind the scence, js assigns html element innerText property, <h1 innerText={{pageTitle}}></h1>
	template: `
		<div>
			<h1>{{pageTitle}}</h1>
			<pm-product-list></pm-product-list>
		</div>
	`
})
export class AppComponent {
	pageTitle: string = "Product Management";
}