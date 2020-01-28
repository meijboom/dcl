import { Component, OnInit, Input } from '@angular/core';
import { ComponentData } from '../../../../assets/shared components/componentData';

@Component({
  selector: 'app-videocompo',
  templateUrl: './videocompo.component.html',
  styleUrls: ['./videocompo.component.scss']
})
export class VideocompoComponent implements OnInit {

  constructor() { }

  @Input() videoCompo: ComponentData;

  ngOnInit() {
  }

  toggleRoute() {
    console.log(this.videoCompo.title + this.videoCompo.id);
  }
}
