import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Elmistico';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient():void{
    this.name = 'Itzel';
    this.gender = 'female';
  }

  //i18n Plural
  public clients: string[] = ['Elmis', 'Itzel', 'Erik', 'Valeria', 'Ezequiel'];
  public clientsMap = {
    '=0': 'No hay clientes esperando.',
    '=1': 'Tenemos 1 cliente esperando.',
    'other': 'Tenemos # clientes esperando'
  }

  deleteClient(): void{
    this.clients.shift();
  }

  //Key Value Pipe
  public person = {
    name: 'Elmis',
    age: 25,
    address: 'Av. Siempre viva 123'
  }

  /*Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log('Tap:', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.')
    }, 3500)
  });*/
}
