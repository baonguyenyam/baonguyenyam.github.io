import { Component } from '@angular/core';
import { NzImageModule } from 'ng-zorro-antd/image';

@Component({
  selector: 'app-my',
  standalone: true,
  imports: [NzImageModule],
  templateUrl: './my.component.html',
  styleUrl: './my.component.css'
})
export class MyComponent {
  file = '/data/resume2024.pdf';
  chuky = "/images/chuky.svg";
  opengraph = "/images/nguyen.png";
  think = "/images/main.png";
  think1 = "/images/001.jpg";
  think2 = "/images/002.jpg";
  think3 = "/images/003.jpg";

  
}
