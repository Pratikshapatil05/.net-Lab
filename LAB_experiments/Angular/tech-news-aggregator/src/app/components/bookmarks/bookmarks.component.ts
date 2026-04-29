import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsService, Article } from '../../services/news.service';
import { ArticleCardComponent } from '../article-card/article-card.component';

@Component({
  selector: 'app-bookmarks',
  standalone: true,
  imports: [CommonModule, ArticleCardComponent],
  template: `
    <div style="padding: 20px;">
      <h2>Your Bookmarks</h2>
      <p *ngIf="savedArticles.length === 0">You haven't saved any articles yet.</p>
      
      <div *ngFor="let item of savedArticles">
        <app-article-card 
          [article]="item" 
          (bookmarkToggle)="remove(item)">
        </app-article-card>
      </div>
    </div>
  `
})
export class BookmarksComponent {
  savedArticles: Article[];

  constructor(private newsService: NewsService) {
    this.savedArticles = this.newsService.getBookmarks();
  }

  remove(article: Article) {
    this.newsService.toggleBookmark(article);
    this.savedArticles = this.newsService.getBookmarks(); // Refresh list
  }
}