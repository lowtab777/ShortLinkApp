import { Component } from '@angular/core';
import { materialModules } from '../../../materials';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-url-dashboard',
  imports: [MatTableModule, CommonModule],
  templateUrl: './url-dashboard.component.html',
  styleUrl: './url-dashboard.component.scss',
})
export class UrlDashboardComponent {
  displayedColumns: string[] = ['shortUrl', 'longUrl'];

   urls = [
    { longUrl: 'https://example.com/very-long-url', shortUrl: 'abc123' },
    { longUrl: 'https://another-site.com/page', shortUrl: 'xyz789' },
  ];
}
