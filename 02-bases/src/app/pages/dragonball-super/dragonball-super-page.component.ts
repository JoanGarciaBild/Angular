import { Component, signal} from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import { CharacterAddComponent } from "../dragonball/character-add/character-add.component";

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: './dragonball-super-page.component.html',
  selector: 'dragonball-super',
  imports: [CharacterListComponent, CharacterAddComponent],
})

export class DragonballSuperPageComponent {

  characters = signal<Character[]>([
    {id:1, name: 'Goky', power: 9001},
    {id:2, name: 'Vegeta', power: 8000},
  ]);

  addCharacter(character: Character) {
    this.characters.update(
    (list) => [...list, character]
    )
  }

}
