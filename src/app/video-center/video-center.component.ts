import { Component, OnInit } from '@angular/core';
import { Video } from './../video';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent implements OnInit {

  videos: Array<Video>;

  selectedVideo: Video;

  private _hideNewVideo: boolean = true;

  constructor(private _videoService: VideoService) { }

  ngOnInit() {
    this._videoService.getVideos()
        .subscribe(
          resVideoData => this.videos = resVideoData
        );
  }

  onSelectVideo(video: any) {
    this.selectedVideo = video;
    this._hideNewVideo = true;
    console.log(video);
  }

  onSubmitAddVideo(video: Video) {
    this._videoService.addVideo(video)
        .subscribe(
          resNewVideo => {
            this.videos.push(resNewVideo);
            this.selectedVideo = resNewVideo;
            this._hideNewVideo = true;
          }
        );
  }

  onUpdateVideoEvent(video: any) {
    this._videoService.updateVideo(video)
        .subscribe(resUpdatedVideo => video = resUpdatedVideo);
        this.selectedVideo = null;
  }

  toggleNewVideoForm() {
    this._hideNewVideo = false;
  }

}
