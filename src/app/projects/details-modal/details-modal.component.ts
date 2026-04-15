import { Component } from '@angular/core';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-details-modal',
  standalone: true,
  imports: [],
  templateUrl: './details-modal.component.html',
  styleUrl: './details-modal.component.scss'
})
export class DetailsModalComponent {
  isModalOpen = false;
  currentProjectIndex = 0;
  displayCharacters: any[] = [];

  // const { createApp } = Vue;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  setProject(index: number) {
    this.currentProjectIndex = index;
    this.updateDisplayCharacters();
  }

  updateDisplayCharacters() {
    if (this.currentProjectIndex === 0) {
      this.displayCharacters = this.characters.slice(0, 6);
    } else if (this.currentProjectIndex === 1) {
      this.displayCharacters = this.characters.slice(6, 11);
    } else if (this.currentProjectIndex === 2) {
      this.displayCharacters = this.characters.slice(11);
    }
    this.selectedCharacter = this.displayCharacters[0] || null;
  }

  characters = [
    {
      name: `Interactive Augmented Reality (AR) 
      application using Unity that visualizes the solar 
      system in a real-world environment.`,
      pic: 'images/project_pics/Solar_pic1.jpg'
    },
    {
      name: `The project includes detailed 3D representations 
      of planets with accurate scaling and positioning`,
      pic: 'images/project_pics/Solar_pic2.jpg'
    },
    {
      name: `Using AR technology, the application displays 3D 
      models of planets that students can explore in real-world space`,
      pic: 'images/project_pics/Solar_pic3.jpg'
    },
    {
      name: `Users can explore each planet and access informative 
      content, making the experience both immersive and educational`,
      pic: 'images/project_pics/Solar_pic4.jpg'
    },
    {
      name: `Informational content for each planet includes details 
      about its size, composition, and unique features`,
      pic: 'images/project_pics/Solar_pic5.jpg'
    },
    {
      name: `Plane detection and object placement were implemented 
      to ensure a seamless interaction between the virtual models and 
      the real world.`,
      pic: 'images/project_pics/Solar_pic6.jpg'
    },
    {
      name: `The project focused on developing a system for the detection
       of polluting vehicles based on exhaust images and PUC (Pollution 
       Under Control) data.`,
      pic: 'images/project_pics/pred_pic1.png'
    },
    {
      name: `The project utilized a dataset consisting of exhaust 
      images collected from various sources, including PUC centers, 
      and incorporated PUC data that provided ground truth labels for pollution levels.`,
      pic: 'images/project_pics/pred_pic2.png'
    },
    {
      name: `By leveraging neural network models, such as VGG19, ResNet50, 
      and YOLOv7, along with image processing techniques, the system aimed 
      to accurately classify vehicles as polluted or non-polluted.`,
      pic: 'images/project_pics/pred_pic3.png'
    },
    {
      name: `This dataset enabled the training and evaluation of the deep 
      learning models, allowing them to learn rich feature representations 
      and patterns associated with polluting vehicles.`,
      pic: 'images/project_pics/pred_pic4.png'
    },
    {
      name: `The proposed system employed pre-trained deep learning models 
      to extract relevant visual features from exhaust images, integrating 
      them with the numerical PUC data.`,
      pic: 'images/project_pics/pred_pic5.png'
    },
    {
      name: `This project is a web-based AI-powered chatbot application 
      designed to interact with users using multiple input formats such 
      as links, PDFs, text, DOCX, and TXT files.`,
      pic: 'images/project_pics/Chat_pic4.png'
    },
    {
      name: `The system is designed to simulate real-time conversation, 
      making it intuitive and user-friendly.`,
      pic: 'images/project_pics/Chat_pic1.jpeg'
    },
    {
      name: `The interface includes a dynamic input type selector, 
      chat-style interaction panel, and structured response display, 
      ensuring a smooth user experience.`,
      pic: 'images/project_pics/Chat_pic2.jpeg'
    },
    {
      name: `The application provides a seamless interface where users 
      can select the type of input and ask questions based on the
       provided content.`,
      pic: 'images/project_pics/Chat_pic3.jpeg'
    }
  ];
  selectedCharacter: any;

  ngOnInit() {
    this.updateDisplayCharacters();
  }

  selectCharacter(chr: any) {
    this.selectedCharacter = chr;
  }
}
