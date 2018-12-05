import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent {
  title = 'holland-app';
  @Input() trip: any;
}
