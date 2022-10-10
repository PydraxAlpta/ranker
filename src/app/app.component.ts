import { Component, OnInit, OnDestroy } from '@angular/core';
import { CardsService } from './cards-service.service';
import { CardData } from './cards.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  cards: Array<CardData> = [];
  constructor(private cardsService: CardsService) { }

  ngOnInit(): void {
    this.cardsService.cards$.subscribe(newCards => {
      this.cards = newCards.sort((a, b) =>
        a.rank && b.rank
          ? a.rank - b.rank
          : -(a.rank ?? -(b.rank ?? 0))
      );
    })
  }

  ngOnDestroy(): void {
    this.cardsService.cards$.unsubscribe();
  }
}
