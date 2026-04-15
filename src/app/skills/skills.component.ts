import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  ViewChild
} from '@angular/core';

interface SkillBubble {
  name: string;
  image: string;
  size: number;
  phi: number;
  theta: number;
  x: number;
  y: number;
  z: number;
  scale: number;
  opacity: number;
  zIndex: number;
}

@Component({
  selector: 'skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements AfterViewInit, OnDestroy {
  @ViewChild('cloudStage') private cloudStage?: ElementRef<HTMLDivElement>;

  showAll: boolean = false;

  private readonly baseSpinX = 0.0012;
  private readonly baseSpinY = 0.0026;

  private frameId: number | null = null;
  private stageWidth: number = 0;
  private stageHeight: number = 0;
  private centerX: number = 0;
  private centerY: number = 0;
  private sphereRadius: number = 0;
  private rotationX: number = -0.24;
  private rotationY: number = 0.65;
  private velocityX: number = 0;
  private velocityY: number = 0;
  private targetVelocityX: number = 0;
  private targetVelocityY: number = 0;

  private readonly baseSkills = [
    { name: 'ASP .Net', image: 'images/Skills/ASP Net.png' },
    { name: 'Angular', image: 'images/Skills/Angular.png' },
    { name: 'React', image: 'images/Skills/react.png' },
    { name: 'HTML', image: 'images/Skills/HTML.png' },
    { name: 'CSS', image: 'images/Skills/CSS.png' },
    { name: 'Java', image: 'images/Skills/java.png' },
    { name: 'C++', image: 'images/Skills/cplus.png' },
    { name: 'SurveyJS', image: 'images/Skills/surveyJS.png' },
    { name: 'MSSQL', image: 'images/Skills/mssql.png' },
    { name: 'MongoDB', image: 'images/Skills/Mongodb.png' },
    { name: 'JavaScript', image: 'images/Skills/JS.png' },
    { name: 'NODEJS', image: 'images/Skills/nodejs.png' },
    { name: 'PHP', image: 'images/Skills/PHP.png' },
    { name: 'Git', image: 'images/Skills/git.png' },
    { name: 'AI/ML', image: 'images/Skills/AI-ML.png' },
    { name: 'Docker', image: 'images/Skills/docker.png' },
    { name: 'Springboot', image: 'images/Skills/springboot.png' },
    { name: 'TypeScript', image: 'images/Skills/typescript.png' },
    { name: 'C#', image: 'images/Skills/CSharpp.png' },
    { name: 'MySQL', image: 'images/Skills/mySQL.png' },
    { name: 'Tailwind CSS', image: 'images/Skills/tailwind CSS.png' },
    { name: 'Data Science', image: 'images/Skills/datascience.png' },
    { name: 'Python', image: 'images/Skills/python.png' },
    { name: 'Linux', image: 'images/Skills/linux.png' },
    { name: 'Drupal', image: 'images/Skills/Drupal.png' },
    { name: 'Kubernetes', image: 'images/Skills/kubernetes.png' },
    { name: 'Django', image: 'images/Skills/django.png' },
    { name: 'Bootstrap', image: 'images/Skills/bootstrap.png' }
  ];

  skills: SkillBubble[] = this.baseSkills.map((skill, index) => {
    const point = index + 0.5;
    const total = this.baseSkills.length;
    const sizes = [110, 124, 118, 132, 114, 128, 120, 136];

    return {
      ...skill,
      size: sizes[index % sizes.length],
      phi: Math.acos(1 - (2 * point) / total),
      theta: Math.PI * (3 - Math.sqrt(5)) * index + (index % 4) * 0.18,
      x: 0,
      y: 0,
      z: 0,
      scale: 1,
      opacity: 1,
      zIndex: 1
    };
  });

  get displayedSkills() {
    const visibleSkills = this.showAll
      ? this.skills
      : this.skills.slice(0, 16);

    return [...visibleSkills].sort((left, right) => left.z - right.z);
  }

  ngAfterViewInit() {
    this.measureStage();
    this.projectSkills();
    this.animateCloud();
  }

  ngOnDestroy() {
    if (this.frameId !== null) {
      cancelAnimationFrame(this.frameId);
    }
  }

  toggleShowAll() {
    this.showAll = !this.showAll;
    queueMicrotask(() => {
      this.measureStage();
      this.projectSkills();
    });
  }

  onMouseMove(event: MouseEvent) {
    const stage = this.cloudStage?.nativeElement;

    if (!stage) {
      return;
    }

    const bounds = stage.getBoundingClientRect();
    const relativeX = (event.clientX - bounds.left) / bounds.width - 0.5;
    const relativeY = (event.clientY - bounds.top) / bounds.height - 0.5;

    this.targetVelocityY = relativeX * 0.05;
    this.targetVelocityX = -relativeY * 0.03;
  }

  resetMouseInfluence() {
    this.targetVelocityX = 0;
    this.targetVelocityY = 0;
  }

  @HostListener('window:resize')
  onResize() {
    this.measureStage();
    this.projectSkills();
  }

  private animateCloud() {
    this.velocityX += (this.targetVelocityX - this.velocityX) * 0.08;
    this.velocityY += (this.targetVelocityY - this.velocityY) * 0.08;
    this.rotationX += this.baseSpinX + this.velocityX;
    this.rotationY += this.baseSpinY + this.velocityY;
    this.projectSkills();
    this.frameId = requestAnimationFrame(() => this.animateCloud());
  }

  private measureStage() {
    const stage = this.cloudStage?.nativeElement;

    if (!stage) {
      return;
    }

    this.stageWidth = stage.clientWidth;
    this.stageHeight = stage.clientHeight;
    this.centerX = this.stageWidth / 2;
    this.centerY = this.stageHeight / 2;
    this.sphereRadius = Math.min(this.stageWidth, this.stageHeight) * 0.28;
  }

  private projectSkills() {
    if (!this.sphereRadius) {
      return;
    }

    const sinX = Math.sin(this.rotationX);
    const cosX = Math.cos(this.rotationX);
    const sinY = Math.sin(this.rotationY);
    const cosY = Math.cos(this.rotationY);

    for (const skill of this.skills) {
      const baseX = this.sphereRadius * Math.sin(skill.phi) * Math.cos(skill.theta);
      const baseY = this.sphereRadius * Math.cos(skill.phi);
      const baseZ = this.sphereRadius * Math.sin(skill.phi) * Math.sin(skill.theta);

      const rotatedX = baseX * cosY - baseZ * sinY;
      const rotatedZ = baseX * sinY + baseZ * cosY;
      const rotatedY = baseY * cosX - rotatedZ * sinX;
      const depth = baseY * sinX + rotatedZ * cosX;
      const normalizedDepth = (depth + this.sphereRadius) / (this.sphereRadius * 2);
      const perspective = 0.52 + normalizedDepth * 0.9;

      skill.x = this.centerX + rotatedX * perspective;
      skill.y = this.centerY + rotatedY * perspective * 0.84;
      skill.z = depth;
      skill.scale = perspective;
      skill.opacity = 0.36 + normalizedDepth * 0.72;
      skill.zIndex = Math.round(normalizedDepth * 100);
    }
  }
}
