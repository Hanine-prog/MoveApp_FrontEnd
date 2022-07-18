import {
  AfterViewInit,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { View } from "ol";
import Tile from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import Map from "ol/Map";
@Component({
  selector: "app-map",
  templateUrl: "map.component.html",
})
export class MapComponent implements OnInit {
  map;

  constructor() {}
  ngOnInit() {
    this.initilizeMap();
  }
  initilizeMap() {
    this.map = new Map({
      target: "map",
      layers: [
        new Tile({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [37.41, 8.82],
        zoom: 4,
      }),
    });
  }
}
