import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { materialModules } from '../../../materials';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { UrlTableComponent } from "../url-table/url-table.component";
import { MatButtonModule } from '@angular/material/button';
import { UrlRecord } from '../../models/short-url.model';
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

   urls: UrlRecord[] = [
    { longUrl: 'https://example.com/very-long-url', shortUrl: 'abc123' },
    { longUrl: 'https://another-site.com/page', shortUrl: 'xyz789' },
    { longUrl: 'https://example.com/very-long-url', shortUrl: 'abc123' },
    { longUrl: 'https://another-site.com/page', shortUrl: 'xyz789' },
    { longUrl: 'https://example.com/very-long-url', shortUrl: 'abc123' },
    { longUrl: 'https://another-site.com/page', shortUrl: 'xyz789' },
    { longUrl: 'https://example.com/very-long-url', shortUrl: 'abc123' },
    { longUrl: 'https://another-site.com/page', shortUrl: 'xyz789' },
    { longUrl: 'https://example.com/very-long-url', shortUrl: 'abc123' },
    { longUrl: 'https://another-site.com/page', shortUrl: 'xyz789' },
    { longUrl: 'https://example.com/very-long-url', shortUrl: 'abc123' },
    { longUrl: 'https://another-site.com/page', shortUrl: 'xyz789' },
    { longUrl: 'https://example.com/very-long-url', shortUrl: 'abc123' },
    { longUrl: 'https://another-site.com/page', shortUrl: 'xyz789' },
    { longUrl: 'https://example.com/very-long-url', shortUrl: 'abc123' },
    { longUrl: 'https://another-site.com/page', shortUrl: 'xyz789' },
  ];
}
