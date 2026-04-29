import { Injectable } from '@angular/core';

export interface Article {
  id: number;
  title: string;
  description: string;
  url: string;
  isBookmarked: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private articles: Article[] = [
    { id: 1, title: 'The Rise of Agentic AI', description: 'Exploring autonomous agents in modern workflows.', url: '#', isBookmarked: false },
    { id: 2, title: 'Angular 18 Features', description: 'What is new in the latest version of Angular.', url: '#', isBookmarked: false },
    { id: 3, title: 'Sustainable Tech Trends', description: 'How green computing is changing the industry.', url: '#', isBookmarked: false }
  ];

  private bookmarks: Article[] = [];

  getArticles() { return this.articles; }

  getBookmarks() { return this.bookmarks; }

  toggleBookmark(article: Article) {
    article.isBookmarked = !article.isBookmarked;
    if (article.isBookmarked) {
      this.bookmarks.push(article);
    } else {
      this.bookmarks = this.bookmarks.filter(b => b.id !== article.id);
    }
  }
}