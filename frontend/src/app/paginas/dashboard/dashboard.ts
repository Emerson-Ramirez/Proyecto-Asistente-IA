import { Component, inject } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { RouterOutlet } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { ChatService } from '../../services/chat-service';
import { ChatStateService } from '../../services/chat-state.service';

@Component({
  selector: 'app-dashboard',
  imports: [MatToolbar, MatIconModule, MatButtonToggleModule, MatButtonModule, RouterOutlet, FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  selected = '';
  router = inject(Router);
  chat = inject(ChatService);
  chatState = inject(ChatStateService)

  query = '';
  answer: string | null = null;
  question: string | null = null;

  ask() {
    if (!this.query.trim()) return;
    this.chat.ask(this.query).subscribe(res => {
      this.answer = res.answer || 'Sin respuesta';
      this.question = res.question || 'Sin respuesta';
      // guardamos en servicio
      this.chatState.setQuestion(res.question);
      this.chatState.setAnswer(res.answer);   
      if (res.component) {
        // Cambiamos el tab seleccionado
        this.selected = res.component.toLowerCase();
        // Redirige al componente detectado
        this.router.navigate(['dashboard', res.component.toLowerCase()]);
        this.query = '';
      }
    });
  }
  
  Logout(){
    this.router.navigateByUrl('/login');
  }
}
