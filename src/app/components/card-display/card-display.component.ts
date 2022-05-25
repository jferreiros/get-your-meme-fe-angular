import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Meme } from 'src/models/meme';
import { MemeService } from 'src/services/meme.service';

@Component({
  selector: 'app-card-display',
  templateUrl: './card-display.component.html',
  styleUrls: ['./card-display.component.scss']
})
export class CardDisplayComponent implements OnInit {

  memes: Meme[] = [];

  constructor(private memeService: MemeService) { }

  ngOnInit(): void {
    this.getMemes();
  }


  getMemes(): void {
    this.memeService.getMemes().subscribe(
      x => this.memes = x.data.memes
    );
  }
  
}
