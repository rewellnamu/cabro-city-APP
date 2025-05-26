import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [ CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
 services = [
    {
      title: 'Cabro Paving',
      image: '/assets/services/cabro.jpg',
      description: 'Durable and decorative cabro block paving solutions for homes, businesses, and roads.'
    },
    {
      title: 'Road Construction',
      image: '/assets/services/road.jpg',
      description: 'From design to completion, we build high-quality roads using tarmac, gravel, and concrete.'
    },
    {
      title: 'Drainage Systems',
      image: '/assets/services/drainage.jpg',
      description: 'We construct efficient drainage systems that help prevent flooding and erosion.'
    },
    {
      title: 'Landscaping',
      image: '/assets/services/landscaping.jpg',
      description: 'Transforming outdoor spaces with expert landscaping tailored to your vision.'
    },
    {
      title: 'Kerbing & Edging',
      image: '/assets/services/kerbing.jpg',
      description: 'Clean, strong kerbing and edging for roads, driveways, and garden paths.'
    },
    {
      title: 'Maintenance Services',
      image: '/assets/services/maintenance.jpg',
      description: 'Regular inspections and repairs to keep your infrastructure in excellent condition.'
    }
  ];
}
