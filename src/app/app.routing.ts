import { Routes, RouterModule } from '@angular/router';
import {CourseGridComponent} from './course-grid/course-grid.component';
import {ModuleListComponent} from './module-list/module-list.component';
import {LessonTabsComponent} from './lesson-tabs/lesson-tabs.component';
import {TopicPillsComponent} from './topic-pills/topic-pills.component';
import {WidgetListComponent} from './widget-list/widget-list.component';
const appRoutes: Routes = [
  {path: '', redirectTo: 'course', pathMatch: 'full'},
  {path: 'course', component: CourseGridComponent},
  {path: 'course/:cid/module', component: CourseGridComponent},
  {path: 'course/:cid/module/:mid/lesson', component: CourseGridComponent},
  {path: 'course/:cid/module/:mid/lesson/:lid/topic', component: CourseGridComponent},
  {path: 'course/:cid/module/:mid/lesson/:lid/topic/:tid/widget', component: CourseGridComponent},
  {path: '**', component: CourseGridComponent}
];
export const routing = RouterModule.forRoot(appRoutes);
