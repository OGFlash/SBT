import { Component, OnInit } from '@angular/core';
import { Project } from '../utils/projects';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  
  public images: string[] = ['../assets/slide-image-5.jpg', '../assets/slide-image-4.jpg', '../assets/slide-image-3.jpg', '../assets/slide-image-2.jpg', '../assets/slide-image-1.jpg', '../assets/slide-image-5.jpg', '../assets/slide-image-5.jpg'];

  public projects: Project[] = [
    {
    img: '../assets/slide-image-1.jpg', 
    projectName: 'Project 1'
    },
    {
    img: '../assets/slide-image-2.jpg', 
    projectName: 'Project 2'
    },
    {
      img: '../assets/slide-image-3.jpg', 
      projectName: 'Project 3'
    },
    {
      img: '../assets/slide-image-4.jpg', 
      projectName: 'Project 4'
    },
    {
      img: '../assets/slide-image-5.jpg', 
      projectName: 'Project 5'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
