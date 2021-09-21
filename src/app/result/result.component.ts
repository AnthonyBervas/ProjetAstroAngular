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
  data: number[][][] = [];
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
    console.log(this.positions);
    this.formatData(this.positions);
    this.plotData();
    });
    console.log("1");
  }

  formatData(positions: Position[][]){
    console.log("2");
    positions.forEach((element) =>{
      console.log("3");
      this.dataListX = [];
      this.dataListY = [];
      console.log(element);

      element.forEach((posi) =>{
        console.log(posi);
        this.dataListX.push(posi.x);
        this.dataListY.push(posi.y);
      });
      this.data.push([this.dataListX,this.dataListY]);
    });
    console.log("4");
    console.log(this.data);
  }

  plotData(){
  this.graph = {
    data: [
      {x: this.data[0][0], y: this.data[0][1], type: 'scatter', mode: 'points', marker: {color: 'red'}},
      {x: this.data[1][0], y: this.data[1][1], type: 'scatter', mode: 'points', marker: {color: 'blue'}}
    ],
    layout: {width: 1500, height: 1500, title: 'A Fancy Simulation'}
  };
  return this.graph;
  }
}
