import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [ RouterModule, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
 teamMembers = [
    {
      name: 'KEN WAKAGOTO',
      role: 'CEO & Founder',
      photo: '/cabroke/ken.jpg',
      bio: 'KEN has over 15 years of experience in infrastructure development and urban planning.'
    },
    {
      name: 'MARKETING TEAM',
      role: ' ',
      photo: '/assets/team/susan.jpg',
      bio: ' mission is to create awareness, generate leads, drive sales, and build strong customer relationships.'
    },
    {
      name: 'lOGISTICS TEAM',
      role: '',
      photo: '/assets/team/david.jpg',
      bio: 'Is responsible for managing the logistics and supply chain operations of our projects.'
    }
  ];
}
