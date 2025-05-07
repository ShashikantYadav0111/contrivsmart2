import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-services',
  imports: [CommonModule,FooterComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services = [
    {
      title: "Custom Website Development",
      description: "We build responsive, fast, and SEO-friendly websites tailored to your brand and business goals."
    },
    {
      title: "UI/UX Design",
      description: "Craft beautiful, user-focused interfaces that deliver a seamless experience on every device."
    },
    {
      title: "Mobile-First & Responsive Design",
      description: "Ensure your site looks and works perfectly on all screen sizes, from smartphones to desktops."
    },
    {
      title: "E-commerce Development",
      description: "Launch high-performance online stores with features like carts, payment integration, and order tracking."
    },
    {
      title: "Security & Performance Optimization",
      description: "We follow best practices to secure your site and optimize load times for maximum engagement."
    },
    {
      title: "Domain, Hosting & Deployment",
      description: "From purchasing domains to cloud deployment (Netlify, Vercel, AWS, etc.), we handle it all."
    },
    {
      title: "SEO & Analytics Setup",
      description: "Boost visibility with basic SEO setup and Google Analytics integration."
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing updates, bug fixes, and technical support to keep your website running smoothly."
    }
  ];
}
