import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from "./experience/experience.component";
import { FooterComponent } from './footer/footer.component';
import { SearchHighlightDirective } from './search-highlight.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,
    IntroductionComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    FooterComponent, SearchHighlightDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'porfolio';
  searchText = '';

  handleSearch(searchText: string) {
    this.searchText = searchText;
  }
}
