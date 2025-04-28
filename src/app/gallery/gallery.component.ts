import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  public images: string[] = ['../assets/slide-image-5.jpg', '../assets/slide-image-4.jpg', '../assets/slide-image-3.jpg', '../assets/slide-image-2.jpg', '../assets/slide-image-1.jpg', '../assets/slide-image-5.jpg', '../assets/slide-image-5.jpg'];

  constructor() { }

  ngOnInit(): void {
  }

}
