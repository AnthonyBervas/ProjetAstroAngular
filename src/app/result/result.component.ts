import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
  @ViewChild('canvas', { static: true })
  private canvas: ElementRef<HTMLCanvasElement>;
  public w = window.innerWidth * 0.9;
  public h = window.innerHeight * 0.9;
  public positions: number[][] = [
    [0, 0],
    [0, 1],
    [1, 1],
    [1, 0],
  ];

  private ctx: CanvasRenderingContext2D;

  constructor() {}

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(0, 0, 10, 10);
  }
}
