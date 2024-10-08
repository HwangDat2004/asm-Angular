import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { HomepageComponent } from './pages/homepage/homepage.component';;
import { LoginComponent } from './pages/login/login.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProductListComponent } from './pages/admin/products/list/list.component';
import { AddComponent } from './pages/admin/products/add/add.component';
import { ListCategoryComponent } from './pages/admin/category/list-category/list-category.component';
import { AddCategoryComponent } from './pages/admin/category/add-category/add-category.component';
import { EditComponent } from './pages/admin/products/edit/edit.component';

export const routes: Routes = [
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'products/list',
        component: ProductListComponent,
      },
      {
        path: 'products/add',
        component: AddComponent,
      },
      {
        path: 'products/edit/:id',
        component: EditComponent,
      },

      // category
      {
        path: 'category/list',
        component: ListCategoryComponent ,
      },
      {
        path: 'category/add',
        component: AddCategoryComponent,
      }
    ],
  },
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      {
        path: '',
        component: HomepageComponent,
      },
      {
        path: 'products/:id',
        component: ProductDetailComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
    ],
  },
];
