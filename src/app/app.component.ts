import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '../../employees-client/src/services/auth.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatButtonModule],
  template: `
          @if(auth.isLoggedIn()){
          <nav align="end">
            <button mat-button (click)="auth.logout()">Logout</button>
          </nav>}
          <router-outlet></router-outlet>`
})
export class AppComponent {
  constructor(public auth: AuthService) {}
}
