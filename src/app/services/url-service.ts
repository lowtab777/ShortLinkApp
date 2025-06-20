import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ShortUrlRecord } from '../models/short-url.model';

@Injectable({ providedIn: 'root' })
export class ShortUrlService {
  private api = 'https://localhost:7251/api/urls';

  constructor(private http: HttpClient) {}

  getAll(): Observable<ShortUrlRecord[]> {
    return this.http.get<ShortUrlRecord[]>(`${this.api}`, {
      withCredentials: true,
    });
  }

  getById(id: number): Observable<ShortUrlRecord> {
    return this.http.get<ShortUrlRecord>(`${this.api}/${id}`, {
      withCredentials: true,
    });
  }

  create(longUrl: string): Observable<ShortUrlRecord> {
    return this.http.post<ShortUrlRecord>(
      `${this.api}`,
      { longUrl },
      { withCredentials: true }
    );
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`, {
      withCredentials: true,
    });
  }

}
