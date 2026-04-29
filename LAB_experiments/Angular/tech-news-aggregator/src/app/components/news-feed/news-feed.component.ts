import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsService, Article } from '../../services/news.service';
import { ArticleCardComponent } from '../article-card/article-card.component';

@Component({
  selector: 'app-news-feed',
  standalone: true,
  imports: [CommonModule, ArticleCardComponent],
  template: `
    <h2>Latest Tech News</h2>
    <div *ngFor="let item of articles">
      <app-article-card 
        [article]="item" 
        (bookmarkToggle)="toggle(item)">
      </app-article-card>
    </div>
  `
})
export class NewsFeedComponent {
  articles: Article[];

  constructor(private newsService: NewsService) {
    this.articles = this.newsService.getArticles();
  }

  toggle(article: Article) {
    this.newsService.toggleBookmark(article);
  }
}