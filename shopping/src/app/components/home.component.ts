import { Component } from '@angular/core';

@Component({
    selector:'app-home',
    template:`<h2>{{title}}</h2>
    <p>Welcome to Qnline Shopping Store.</p>`,
    styles:['h2{color:red;text-align:center}','p{color:blue}']
})
export class HomeComponent
{
    title='Shopping Home';
}