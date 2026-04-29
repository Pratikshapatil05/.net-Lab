import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../../services/news.service';

@Component({
  selector: 'app-article-card',
  standalone: true,
  template: `
    <div class="article-card">
      <div class="content">
        <h3>{{ article.title }}</h3>
        <p>{{ article.description }}</p>
      </div>
      <button [class.bookmarked]="article.isBookmarked" (click)="bookmarkToggle.emit()">
        {{ article.isBookmarked ? '✓ Saved' : 'Bookmark' }}
      </button>
    </div>
  `,
  styles: [`
    .article-card {
      background: white;
      border-radius: 8px;
      padding: 20px;
      margin-bottom: 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 1px solid #e0e0e0;
      transition: transform 0.2s;
    }
    .article-card:hover { transform: translateY(-2px); box-shadow: 0 4px 8px rgba(0,0,0,0.05); }
    h3 { margin: 0 0 10px 0; color: #2c3e50; }
    p { margin: 0; color: #7f8c8d; font-size: 0.95rem; }
    button {
      padding: 8px 16px;
      border-radius: 5px;
      border: 1px solid #3498db;
      background: white;
      color: #3498db;
      cursor: pointer;
      font-weight: 600;
    }
    button.bookmarked {
      background: #3498db;
      color: white;
    }
  `]
})
export class ArticleCardComponent {
  @Input() article!: Article;
  @Output() bookmarkToggle = new EventEmitter<void>();
}