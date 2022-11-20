import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit {
  
  @Input()
  string!: String;

  @Output()
  stringChange = new EventEmitter<String>();
  constructor() { }

  ngOnInit(): void {
  }

  changeString(event:Event){
    event.preventDefault();
    this.stringChange.emit(this.string);
  }


}
