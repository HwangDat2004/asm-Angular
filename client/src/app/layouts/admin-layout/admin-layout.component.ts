import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SlideAminComponent } from '../../components/slide-amin/slide-amin.component';


@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [RouterOutlet, SlideAminComponent],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export class AdminLayoutComponent {

}