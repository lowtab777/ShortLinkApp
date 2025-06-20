import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ShortUrlRecord } from '../models/short-url.model';
import { ShortUrlInfo } from '../models/short-url-info.model';

@Injectable({ providedIn: 'root' })
export class UrlService {
  private api = 'https://localhost:7251/api/urls';

  constructor(private http: HttpClient) {}

  getAll(): Observable<ShortUrlRecord[]> {
    return this.http.get<ShortUrlRecord[]>(`${this.api}`, {
      withCredentials: true,
    });
  }

//   updateLink(id: number, updatedValue: ShortUrlInfo): Observable<ShortUrlInfo> {
//     // return this.http.put<ShortUrlInfo>(`${this.api}/${id}`, updatedValue.updatedValue, {
//     //   withCredentials: true,
//     // });
//   }

  getById(id: number): Observable<ShortUrlInfo> {
    return this.http.get<ShortUrlInfo>(`${this.api}/${id}`, {
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
