import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {


  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]


  @Output()
  public onDelete: EventEmitter<number>= new EventEmitter();
    //Another syntax for declaring the event above is:
    // public onDelete: new EventEmitter<number></number>

    onDeleteCharacter(index: number): void {
      //TODO: Emit the character ID
      this.onDelete.emit(index);


    };


  }
