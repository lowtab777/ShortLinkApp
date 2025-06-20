import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable, tap } from 'rxjs';
import { LoginResponse } from '../models/login-response.model';
import { JwtPayload } from '../models/jwt-payload.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private tokenKey = 'token';
  private link = "https://localhost:7251";
  constructor(private http: HttpClient, private router: Router) {}

  login(name: string, password: string): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(`${this.link}/api/auth/login`, { name, password })
      .pipe(
        tap((r) => {
          localStorage.setItem(this.tokenKey, r.token);
        })
      );
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    return !!this.getToken() && !this.isTokenExpired();
  }

  getUserRole(): string | null {
    const payload = this.decodeToken();
    return payload?.role || null;
  }

  isAdmin(): boolean {
    const payload = this.decodeToken();
    
    console.log('payload', payload);
    return payload?.role === 'Admin';
  }
  isUser(): boolean {
    const payload = this.decodeToken();
    return payload?.role === 'Admin' || payload?.role === 'User';
  }

  getUserId(): number | null {
    const payload = this.decodeToken();
    return payload ? +payload.nameid : null;
  }

  private decodeToken(): JwtPayload | null {
    const token = this.getToken();
    if (!token) 
        return null;
    try {
      return jwtDecode<JwtPayload>(token);
    } catch (e) {
      return null;
    }
  }

  private isTokenExpired(): boolean {
    const payload = this.decodeToken();
    if(!payload)
        return true;
    return payload.exp < (Date.now() / 1000);
  }
}
