import { Component } from '@angular/core';
import { ChatStateService } from '../../services/chat-state.service';
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: 'app-desafio',
  imports: [MatIconModule],
  templateUrl: './desafios.html',
  styleUrl: './desafio.css'
})
export class Desafio {
  answer: string | null;
  question: string | null;

  constructor(private state: ChatStateService) {
    this.answer = state.getAnswer();
    this.question = state.getQuestion();
  }
}
