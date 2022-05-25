import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Meme } from 'src/models/meme';
import { ApiResponse } from 'src/models/apiResponse';

@Injectable({
  providedIn: 'root'
})
export class MemeService {

  private memeUrl = 'https://api.imgflip.com/get_memes';

  constructor(private http: HttpClient) { }

  getMemes(): Observable<ApiResponse> {
    const memes = this.http.get<ApiResponse>(this.memeUrl);
    return memes;
  }
}
