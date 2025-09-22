import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface ChatResponse {
  query: string;
  question: string;
  answer: string;
  component: string;
}

@Injectable({ providedIn: 'root' })
export class ChatService {
  private api = 'http://localhost:4000/api/ask';

  http = inject(HttpClient);

  ask(query: string): Observable<ChatResponse> {
    return this.http.post<ChatResponse>(this.api, { query });
  }
}