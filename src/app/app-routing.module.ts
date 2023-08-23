import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';

import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailComponent } from './pages/products/product-detail/product-detail.component';

import { AccountComponent } from './pages/account/account.component';
import { CartComponent } from './pages/cart/cart.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'account', component: AccountComponent },
    { path: 'cart', component: CartComponent },
    {
        path: 'products',
        component: ProductsComponent,
        children: [{ path: ':id', component: ProductDetailComponent }],
    },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: '/not-found' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
