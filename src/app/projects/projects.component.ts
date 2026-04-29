import { Component, ViewChild } from '@angular/core';
import { DetailsModalComponent } from './details-modal/details-modal.component';

@Component({
  selector: 'projects',
  standalone: true,
  imports: [DetailsModalComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'SolAR – Augmented Reality Educational Application',
      tech: 'Unity 3D, Augmented Reality (AR), C#, 3D Models & Animations',
      description: `SolAR is an augmented reality-based educational application developed using the Unity 3D engine. The primary goal of the application is to help young students understand the structure of the solar system through interactive visualization.
Using AR technology, the application displays 3D models of planets that students can explore in real-world space. Each planet includes informative details to help students learn about its characteristics, position, and role in the solar system. By combining education with immersive technology, the application makes learning about space more engaging, interactive, and easier to understand for school children.`,
    },
    {
      title: 'Vehicle Pollution Detection and Notification System',
      tech: 'Python, OpenCV, Machine Learning, Neural Networks, Image Processing, Twilio API',
      description: `The Vehicle Pollution Detection and Notification System is an AI-driven solution designed to monitor vehicle emissions using computer vision and machine learning techniques. The system was developed using Python and several machine learning and image processing libraries.
                    A neural network model was trained on thousands of vehicle emission images to detect excessive smoke produced by vehicles. The system captures vehicle images, processes them using image processing techniques, and identifies vehicles that exceed pollution thresholds.
                    After detecting a polluted vehicle, the system extracts the vehicle number plate and sends an automated SMS alert to the vehicle owner using Twilio. This system helps in early detection of high-emission vehicles and supports efforts to reduce air pollution.`,
    },
    {
      title: 'AI Chatbot with Retrieval-Augmented Generation (RAG)',
      tech: 'Python, LangChain, Ollama, Vector Databases, LLMs, Retrieval-Augmented Generation (RAG)',
      description: `This project involves the development of an intelligent chatbot using Ollama and the LangChain framework. The chatbot leverages large language models (LLMs) to understand user queries and provide meaningful responses.
The system implements Retrieval-Augmented Generation (RAG), where external data sources such as documents, PDFs, or text data are converted into embeddings and stored in a vector database. When a user asks a question, the chatbot retrieves the most relevant information and uses the LLM to generate accurate and context-aware answers.
This chatbot can be used for knowledge management, customer support, and automated assistance systems, making it useful for organizations that want to build AI-driven conversational interfaces.`,
    }
  ];

  showMoreStates: boolean[] = this.projects.map(() => false);

  @ViewChild('detailsModal') detailsModal!: DetailsModalComponent;

  toggleShowMore(index: number) {
    this.showMoreStates[index] = !this.showMoreStates[index];
  }

  openChildModal(modal: any, projectIndex: number) {
    modal.setProject(projectIndex);
    modal.openModal();
  }
}
