import { v4 as uuid } from 'uuid';
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
    id: uuid(),
    name: 'Trunks',
    power: 10
  }]


  @Output()
  public onDelete: EventEmitter<string>= new EventEmitter();
    //Another syntax for declaring the event above is:
    // public onDelete: new EventEmitter<number></number>

    onDeleteCharacter(id?: string): void {

        if (!id) return;
          this.onDelete.emit(id);

          console.log({id})
      this.onDelete.emit(id)

    };


  }
