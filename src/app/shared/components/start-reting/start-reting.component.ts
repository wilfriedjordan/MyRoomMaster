import { Component,OnInit,Input ,OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-start-reting',
  standalone: true,
  imports: [],
  templateUrl: './start-reting.component.html',
  styleUrl: './start-reting.component.scss'
})
export class StartRetingComponent implements  OnChanges, OnInit  {
  //Nombres d'etoile de chaques hotels
  @Input()
  start:number = 5
  @Output() change = new EventEmitter<string>
  // largeur de chaque etoiles
  startWidth!:number
  ngOnChanges(): void {
    this.startWidth = this.start*25/5
  }
  ngOnInit(): void {

  }
  message():void {
    this.change.emit(`le nombres d'etoile est de ${this.start}`)
  }
}
