import { Component } from '@angular/core';

@Component({
  selector: 'projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Content Workflow System',
      description: 'Built a Drupal-based content moderation and approval workflow.',
      tech: 'Drupal 10, Tailwind CSS'
    },
    {
      title: 'SurveyJS Custom Components',
      description: 'Developed custom composite questions and role-based visibility.',
      tech: 'Angular, SurveyJS'
    },
    {
      title: 'AI Chatbot (RAG)',
      description: 'Created a RAG-based chatbot that answers from documents.',
      tech: 'Python, LangChain, Ollama'
    }
  ];
}
