import { Component } from '@angular/core';
import { ChatStateService } from '../../services/chat-state.service';
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: 'app-teoria',
  imports: [MatIconModule],
  templateUrl: './teoria.html',
  styleUrl: './teoria.css'
})
export class Teoria {
  answer: string | null;
  question: string | null;

  constructor(private state: ChatStateService) {
    this.question = state.getQuestion();
    this.answer = state.getAnswer();
  }
}
