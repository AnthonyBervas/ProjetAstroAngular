import { CanActivate } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {PositionService} from "../services/position.service";
import {Position} from "../model/position";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {

  positions: Position[][] = [];
  dataFormat: number[][][] = [];
  dataListX: number[] = [];
  dataListY: number[] = [];
  graph: any;

  constructor(private positionService: PositionService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.positionService.getPosition().subscribe((pos) =>{
    this.positions = pos;
    this.formatData(this.positions);
    this.plotData();
    });
  }

  formatData(positions: Position[][]){
    positions.forEach((element) =>{
      this.dataListX = [];
      this.dataListY = [];

      element.forEach((posi) =>{
        this.dataListX.push(posi.x);
        this.dataListY.push(posi.y);
      });
      this.dataFormat.push([this.dataListX,this.dataListY]);
    });
  }

  plotData(){
  this.graph = {
    data: [
      {x: 0, y: 0, type: 'scatter', mode: 'points', marker: {color: 'yellow'}}
    ],
    layout: {width: 1500, height: 1500, title: 'A Fancy Simulation'}
  };
  this.dataFormat.forEach((res) =>{
    this.graph.data.push({x: res[0], y: res[1], type: 'scatter', mode: 'points'});
  });
  console.log(this.graph);
  return this.graph;
  }
}
