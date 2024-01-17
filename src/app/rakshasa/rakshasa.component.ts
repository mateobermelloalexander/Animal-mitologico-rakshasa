import { Component } from '@angular/core';
import { CabezaComponent } from './cabeza/cabeza.component';
import { CraneoComponent } from './craneo/craneo.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { IntestinosComponent } from './intestinos/intestinos.component';
import { PatasComponent } from './patas/patas.component';
import { PiernasComponent } from './piernas/piernas.component';

@Component({
  selector: 'app-rakshasa',
  standalone: true,
  imports: [CabezaComponent, CraneoComponent, CuerpoComponent, IntestinosComponent, PatasComponent, PiernasComponent],
  templateUrl: './rakshasa.component.html',
  styleUrl: './rakshasa.component.css'
})
export class RakshasaComponent {

}
