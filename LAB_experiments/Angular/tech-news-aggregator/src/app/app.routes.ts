import { Routes } from '@angular/router';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';

export const routes: Routes = [
  { path: '', component: NewsFeedComponent },
  { path: 'bookmarks', component: BookmarksComponent },
  { path: '**', redirectTo: '' }
];