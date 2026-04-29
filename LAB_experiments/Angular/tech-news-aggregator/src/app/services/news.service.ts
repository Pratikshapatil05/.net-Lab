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
  { id: 1, title: 'The Rise of Agentic AI', description: 'Exploring autonomous agents in modern multi-agent workflows.', url: '#', isBookmarked: false },
  { id: 2, title: 'Angular 18 Features', description: 'Zoneless change detection and improved hydration are here.', url: '#', isBookmarked: false },
  { id: 3, title: 'Sustainable Tech Trends', description: 'Carbon credit estimation and green energy management optimization.', url: '#', isBookmarked: false },
  { id: 4, title: 'Swarm Intelligence in 2026', description: 'How collective behavior in decentralized systems is evolving.', url: '#', isBookmarked: false },
  { id: 5, title: 'Privacy-Preserving RAG', description: 'Local Retrieval-Augmented Generation for secure document processing.', url: '#', isBookmarked: false }
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