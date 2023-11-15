// user.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userState = new BehaviorSubject<{ isLoggedIn: boolean; firstName: any }>(this.getUserStateFromStorage());

  constructor(private cookieService: CookieService) {
    this.initialize();
  }

  private initialize() {
    const token = this.cookieService.get('token');
    const isLoggedIn = !!token;

    // Exemple: Récupération du prénom depuis le token (adapter selon votre logique)
    const firstName = this.getFirstNameFromToken();

    this.userState.next({ isLoggedIn, firstName });
    this.saveUserStateToStorage();
  }

  setUserState(isLoggedIn: boolean, firstName: string): void {
    this.userState.next({ isLoggedIn, firstName });
    this.saveUserStateToStorage();
  }

  getUserState(): Observable<{ isLoggedIn: boolean; firstName: string }> {
    return this.userState.asObservable();
  }

  private saveUserStateToStorage(): void {
    localStorage.setItem('userState', JSON.stringify(this.userState.value));
  }

  private getUserStateFromStorage(): { isLoggedIn: boolean; firstName: string } {
    const storedUserState = localStorage.getItem('userState');
    return storedUserState ? JSON.parse(storedUserState) : { isLoggedIn: false, firstName: '' };
  }

  private getFirstNameFromToken() {
    const token = this.cookieService.get('token');
    if (token) {
      const decoded: any = jwtDecode(token);
      const firstName = decoded && decoded.firstname ? decoded.firstname : '';
      return firstName;
    }
    return '';
  }

  logout(): void {
    this.setUserState(false, '');
    localStorage.removeItem('token');
    localStorage.removeItem('userState'); // Ajout de la suppression de l'état utilisateur lors de la déconnexion
  }
}