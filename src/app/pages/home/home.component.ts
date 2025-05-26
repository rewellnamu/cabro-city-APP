import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [ CommonModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
 images: string[] = [
    '/cabroke/home5.jpg',
    '/cabroke/home2.jpg',
    '/cabroke/home3.jpg',
    '/cabroke/home9.jpg',
    '/cabroke/home5.jpg',
    '/cabroke/home10.jpg'
  ];
   selectedImage: string | null = null;

  openLightbox(imageUrl: string) {
    this.selectedImage = imageUrl;
  }

  closeLightbox() {
    this.selectedImage = null;
  }
}
