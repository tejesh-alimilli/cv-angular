import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'skills-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.scss']
})
export class SkillsSectionComponent {
  skills = [
    {
      name: 'Platform',
      list: ['iOS', 'Web'],
    },
    {
      name: 'Languages',
      list: ['Objective C', 'Swift', 'Java', 'Javascript', 'Typescript', 'PHP'],
    },
    {
      name: 'Databases',
      list: ['Oracle', 'MySQL'],
    },
    {
      name: 'Version Control',
      list: ['svn', 'git'],
    },
    {
      name: 'Tools',
      list: ['IntelliJ', 'VS Code', 'Xcode', 'Instruments', 'Eclipse'],
    },
    {
      name: 'Frameworks',
      list: ['Angular', 'Bootsrap'],
    },
  ]
}
