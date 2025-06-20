import { UrlService } from './../../services/url-service';
import { Component, Input, OnInit } from '@angular/core';
import { ShortUrlInfo } from '../../models/short-url-info.model';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-url-info',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  templateUrl: './url-info.component.html',
  styleUrl: './url-info.component.scss',
})
export class UrlInfoComponent implements OnInit {
  @Input() shortUrlInfo!: ShortUrlInfo;
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private urlService: UrlService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = this.buildForm();
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('onInit', id)

    if (!isNaN(id)) {
      this.urlService.getById(id).subscribe((v) => {
        this.form.setValue({
          longUrl: v.longUrl,
          shortUrl: v.shortUrl,
          createdBy: v.createdBy,
          createdDate: v.createdDate
        })
      });
    }
  }

  buildForm(): FormGroup {
    return this.fb.group({
      longUrl: ['', [Validators.required, Validators.minLength(10)]],
      shortUrl: ['', Validators.required],
      createdBy: ['', Validators.required],
      createdDate: ['', Validators.required],
    });
  }
  onSaveClick(): void {
    this.urlService.updateLink(id,);
  }
}
