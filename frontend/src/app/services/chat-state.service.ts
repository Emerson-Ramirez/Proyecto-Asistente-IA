import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ChatStateService {
  private _lastAnswer: string | null = null;
  private _lastQuestion: string | null = null;

  setAnswer(answer: string) {
    this._lastAnswer = answer;
  }

  getAnswer(): string | null {
    return this._lastAnswer;
  }

  setQuestion(question: string){
    this._lastQuestion = question;
  }

  getQuestion(){
    return this._lastQuestion;
  }
}
