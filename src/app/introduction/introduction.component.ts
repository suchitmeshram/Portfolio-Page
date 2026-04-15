import { Component } from '@angular/core';

@Component({
  selector: 'introduction',
  standalone: true,
  imports: [],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss'
})
export class IntroductionComponent {
  contactInfo() {
    // WhatsApp API link with pre-filled message
    const phoneNumber = '919730140358'; // +91 9730140358
    const message = `Hi Suchit, I'm from your portfolio.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }
}
