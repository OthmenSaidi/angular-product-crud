import { EventDriverService } from './../../services/event.driver.service';
import { Component, OnInit } from '@angular/core';
import { ActionEvent } from 'src/app/state/product.state';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {
  counter: number = 0;

  constructor(private eventDriverService: EventDriverService) { }

  ngOnInit(): void {
    this.eventDriverService.sourceEventSubjectObservable.subscribe((actionEvent: ActionEvent) => {
      ++this.counter;

    });
  }

}
