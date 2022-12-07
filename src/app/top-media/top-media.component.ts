import { Component, OnInit } from '@angular/core';
import { CardsService } from '../cards-service.service';
import { CardData } from '../cards.model';

@Component({
  selector: 'app-top-media',
  templateUrl: './top-media.component.html',
  styleUrls: ['./top-media.component.scss']
})
export class TopMediaComponent implements OnInit {

  cards: Array<CardData> = [];
  constructor(private cardsService: CardsService) { }

  ngOnInit(): void {
    this.cardsService.mediaCards$.subscribe(newCards => {
      this.cards = newCards.sort((a, b) =>
        a.rank && b.rank
          ? a.rank - b.rank
          : -(a.rank ?? -(b.rank ?? 0))
      );
    })
  }
}
