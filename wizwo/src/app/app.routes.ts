import { Route } from '@angular/router';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { NotebookComponent } from './components/notebook/notebook.component';
import { DictionaryComponent } from './components/dictionary/dictionary.component';
import { ExercisesComponent } from './components/exercises/exercises.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

export const appRoutes: Route[] = [
  { path: 'profile', component: ProfilePageComponent },
  { path: 'notebook', component: NotebookComponent },
  { path: 'dictionary', component: DictionaryComponent },
  { path: 'exercises', component: ExercisesComponent },
  { path: '', component: LandingPageComponent },
];
