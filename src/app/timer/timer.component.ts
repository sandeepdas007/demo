import { Timer } from './../timer';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit{
public timer!: Timer;

ngOnInit(): void{
  this.timer = new Timer();
}


  tougglePause(): void {
    this.timer.isPaused = !this.timer.isPaused;
    this.timer.buttonLabel = this.timer.isPaused ? 'Resume' : 'Pause';
  }
}
