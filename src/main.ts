// 导入 Component 写法
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/home/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


/**
 * 导入 Module 写法
 */
/*
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';  
import { AppModule } from './app/app.module';
  
platformBrowserDynamic().bootstrapModule(AppModule)  
  .catch(err => console.error(err));
*/
