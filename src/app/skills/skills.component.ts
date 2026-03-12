import { Component } from '@angular/core';

@Component({
  selector: 'skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = [
    { name: 'Angular', image: 'images/Skills/Angular.png' },
    { name: 'Drupal 8/9/10', image: 'images/Skills/Drupal.png' },
    { name: 'PHP', image: 'images/Skills/PHP.png' },
    { name: 'JavaScript', image: 'images/Skills/JS.png' },
    { name: 'HTML', image: 'images/Skills/HTML.png' },
    { name: 'CSS / Tailwind', image: 'images/Skills/tailwind CSS.png' },
    { name: 'MySQL', image: 'images/Skills/mySQL.png' },
    { name: 'Git', image: 'images/Skills/git.png' },
    { name: 'ASP .Net', image: 'images/Skills/ASP Net.png' },
    { name: 'Python', image: 'images/Skills/python.png' },

  ];
}
