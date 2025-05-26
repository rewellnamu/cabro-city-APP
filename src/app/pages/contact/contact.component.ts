import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';



@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Submitted:', form.value);
      alert('Message sent successfully!');
      form.reset();
    }
  }
}
