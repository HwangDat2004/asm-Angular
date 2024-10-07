import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Category } from '../../types/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
 apiUrl = 'http://localhost:3000/categories'
 http = inject(HttpClient)

 constructor() {}

 getAllCategories() {
  return this.http.get<Category[]>(this.apiUrl);
 }
 deleteCategory(id: string) {
  return this.http.delete(`${this.apiUrl}/${id}`);
 }
 createCategory(data: Category) {
  return this.http.post(this.apiUrl, data);
 }
 editCategory(id: string, data: Category) {
  return this.http.put(`${this.apiUrl}/${id}`, data);
 }
}
