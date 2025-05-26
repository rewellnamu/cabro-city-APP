import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [ CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
 images: string[] = [
    '/cabroke/home5.jpg',
    '/cabroke/home2.jpg',
    '/cabroke/home3.jpg',
    '/cabroke/home9.jpg',
    '/cabroke/home14.jpg',
    '/cabroke/home13.jpg'
  ];
   selectedImage: string | null = null;

  openLightbox(imageUrl: string) {
    this.selectedImage = imageUrl;
  }

  closeLightbox() {
    this.selectedImage = null;
  }
}
