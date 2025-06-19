import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ShortUrlRecord } from '../../models/short-url.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-url-table',
  imports: [MatTableModule, CommonModule, MatIconModule, MatPaginatorModule, RouterModule],
  templateUrl: './url-table.component.html',
  styleUrl: './url-table.component.scss',
})
export class UrlTableComponent implements AfterViewInit, OnChanges {
  @Input() data: ShortUrlRecord[] = [];
  @Input() displayedColumns: string[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource = new MatTableDataSource<ShortUrlRecord>();

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.dataSource.data = this.data;
    }
  }

  onEdit(data: any): void {
    // navigate to edit tab
  }
}
