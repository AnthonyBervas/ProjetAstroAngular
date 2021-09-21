import { CanActivate } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
  @ViewChild('canvas', { static: true })
  private canvas: ElementRef<HTMLCanvasElement>;

  public w = 1600;
  public h = 800;

  public positions: number[][] = [
    [0, 0],
    [0, 1],
    [1, 1],
    [1, 0],
  ];

  private ctx: CanvasRenderingContext2D;

  constructor() {}

  ngOnInit(): void {}

  affichage() {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.ctx.strokeStyle = 'black';
    this.ctx.lineWidth = 1;
    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(0, 0, 10, 10);
    this.ctx.beginPath();
    this.ctx.moveTo(0, 0);
    this.ctx.lineTo(this.w / 4, this.h / 4);
    this.ctx.moveTo(this.w / 4, this.h / 4);
    this.ctx.lineTo(this.w / 2, this.h / 4);

    this.ctx.stroke();
    this.ctx.closePath();
  }
}
