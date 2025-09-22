import { Component } from '@angular/core';
import { ChatStateService } from '../../services/chat-state.service';
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: 'app-comandos',
  imports: [MatIconModule],
  templateUrl: './comandos.html',
  styleUrl: './comandos.css'
})
export class Comandos {
  answer: string | null;
  question: string | null;

  constructor(private state: ChatStateService) {
    this.answer = state.getAnswer();
    this.question = state.getQuestion();
  }
}
