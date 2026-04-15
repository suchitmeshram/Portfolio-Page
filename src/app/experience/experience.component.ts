import { Component } from '@angular/core';

@Component({
  selector: 'experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences = [
    {
      title: 'Drupal Developer – Management Foundation Application',
      duration: '1 year',
      tech: 'Drupal, PHP, Twig, HTML, CSS, Tailwind CSS',
      description: `Worked as a Drupal Developer on the Management Foundation application, contributing to 
                    website development and customization using Drupal CMS.`,
      responsibility: `<li>Developed and customized Drupal modules and themes.</li>
      <li>Implemented frontend UI using HTML, CSS, and Tailwind CSS.</li>
      <li>Worked with Twig templates and Drupal theming.</li>
      <li>Managed site configuration and content structure.</li>
      <li>Fixed bugs and implemented new functionality for the website.</li>`,
    },

    {
      title: 'Full Stack Developer – VOC Application',
      duration: '1 year',
      tech: 'Angular, SurveyJS, JavaScript, HTML, CSS',
      description: `Worked as a Full Stack Developer on the VOC (Voice of Customer) application built using Angular and SurveyJS. 
                    The application was designed to collect and analyze customer feedback through dynamic surveys.`,
      responsibility: `
      <li>Developed interactive UI components using Angular.</li>
      <li>Implemented dynamic survey forms using the SurveyJS library.</li>
      <li>Integrated frontend components with backend services.</li>
      <li>Worked on improving survey workflows and user experience.</li>
      <li>Participated in debugging, testing, and feature enhancements.</li>`,
    },

    {
      title: 'Full Stack Developer – VOP & PPP Applications',
      duration: '1 year',
      tech: 'Angular, .NET, SurveyJS, TypeScript, HTML, CSS',
      description: `Worked on enterprise applications including VOP and PPP using .NET and Angular. 
                    Contributed to both frontend and backend development while implementing survey functionality using the SurveyJS library.`,
      responsibility: `<li>Developed frontend features using Angular.</li>
      <li>Built backend APIs and business logic using .NET.</li>
      <li>Implemented survey functionalities using SurveyJS.</li>
      <li>Integrated APIs between frontend and backend systems.</li>
      <li>Collaborated with team members to deliver new features and bug fixes.</li>`,
    },
  ];
}
