import { Component, OnInit } from '@angular/core';
import * as data from '../../../assets/data/videos.json';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  public videos: any = (data as any).default;
  constructor() { }

  ngOnInit() {
    console.log("hello");
    console.log(this.videos);
  }
}
