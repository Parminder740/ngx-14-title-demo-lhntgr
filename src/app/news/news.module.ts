import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NewsComponent } from './news.component';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CodemirrorModule,
    RouterModule.forChild([
      {
        path: '',
        component: NewsComponent
      }
    ])
  ],
  declarations: [NewsComponent]
})
export class NewsModule { }