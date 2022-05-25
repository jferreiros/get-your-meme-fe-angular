import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Meme } from 'src/models/meme';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() meme?: Meme;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  downloadMeme(urlImage: string): void{

    function downloadUrl(url: string, fileName: string) {
      const a: any = document.createElement('a');
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.style = 'display: none';
      a.click();
      a.remove();
    };

    this.http.get(urlImage, { responseType: 'blob' }).subscribe(val => {
      const url = URL.createObjectURL(val);
      downloadUrl(url, 'image.png');
      URL.revokeObjectURL(url);
    });
  }

  

  deleteMeme(meme: Meme): void{
    this.meme = undefined;
  }

}
