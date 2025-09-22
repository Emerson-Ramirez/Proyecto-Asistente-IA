import { Component } from '@angular/core';
import { ChatStateService } from '../../services/chat-state.service';
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: 'app-errores',
  imports: [MatIconModule],
  templateUrl: './errores.html',
  styleUrl: './errores.css'
})
export class Errores {
  answer: string | null;
  question: string | null;

  constructor(private state: ChatStateService) {
    this.answer = state.getAnswer();
    this.question = state.getQuestion();
  }
}
