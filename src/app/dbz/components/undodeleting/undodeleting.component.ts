import { Character } from './../../interfaces/character.interface';
import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'dbz-undo',
  templateUrl: './undodeleting.component.html',
  styleUrls: ['./undodeleting.component.css']
})
export class UndodeletingComponent {

  @Output()
  public undoDeletedCharacter: EventEmitter<Character>= new EventEmitter();

  @Input()

public undoCharacter: Character[] = []


  undoDeleting(character:Character): void {
    this.undoCharacter.push(character)
    console.log(character)
  }
}
