import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [ CommonModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
images = [
    {
      url: '/cabroke/home5.jpg',
      title: 'Home Exterior Paving'
    },
    {
      url: '/cabroke/home2.jpg',
      title: 'Outdoor Living Spaces'
    },
    {
      url: '/cabroke/home1.jpg',
      title: 'Garden relaxation area'
    },
    {
      url: '/cabroke/home4.jpg',
      title: 'Pathways & Driveways'
    },
    {
      url: '/cabroke/home9.jpg',
      title: 'Design & Installation'
    },
    {
      url: '/cabroke/home10.jpg',
      title: 'industrial paving'
    }
  ];

  selectedImage: { url: string; title: string } | null = null;

  openLightbox(image: { url: string; title: string }) {
    this.selectedImage = image;
  }

  closeLightbox() {
    this.selectedImage = null;
  }
}
