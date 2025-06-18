import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { materialModules } from '../../../materials';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { UrlTableComponent } from "../url-table/url-table.component";
import { MatButtonModule } from '@angular/material/button';
import { ShortUrlRecord } from '../../models/short-url.model';
import { MatPaginator } from '@angular/material/paginator';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-url-dashboard',
  imports: [MatTableModule, CommonModule, UrlTableComponent, MatButtonModule, RouterModule],
  templateUrl: './url-dashboard.component.html',
  styleUrl: './url-dashboard.component.scss',
})
export class UrlDashboardComponent implements OnInit  {
  displayedColumns: string[] = ['shortUrl', 'longUrl', 'action'];
  
  ngOnInit(): void {
  }

   urls: ShortUrlRecord[] = [
    { id: 1, longUrl: 'https://example.com/very-long-url', shortUrl: 'abc123' },
    { id: 2, longUrl: 'https://another-site.com/page', shortUrl: 'xyz789' },
    { id: 3, longUrl: 'https://example.com/very-long-url', shortUrl: 'abc123' },
    { id: 4, longUrl: 'https://another-site.com/page', shortUrl: 'xyz789' },
    { id: 5, longUrl: 'https://example.com/very-long-url', shortUrl: 'abc123' },
    { id: 6, longUrl: 'https://another-site.com/page', shortUrl: 'xyz789' },
    { id: 7, longUrl: 'https://example.com/very-long-url', shortUrl: 'abc123' },
    { id: 8, longUrl: 'https://another-site.com/page', shortUrl: 'xyz789' },
    { id: 9, longUrl: 'https://example.com/very-long-url', shortUrl: 'abc123' },
    { id: 10, longUrl: 'https://another-site.com/page', shortUrl: 'xyz789' },
    { id: 11, longUrl: 'https://example.com/very-long-url', shortUrl: 'abc123' },
    { id: 12, longUrl: 'https://another-site.com/page', shortUrl: 'xyz789' },
    { id: 13, longUrl: 'https://example.com/very-long-url', shortUrl: 'abc123' },
    { id: 14, longUrl: 'https://another-site.com/page', shortUrl: 'xyz789' },
    { id: 15, longUrl: 'https://example.com/very-long-url', shortUrl: 'abc123' },
    { id: 16, longUrl: 'https://another-site.com/page', shortUrl: 'xyz789' },
  ];
}
