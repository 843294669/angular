import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { routes } from './app.routes';
import { AppService } from './app.service';

@NgModule({
    declarations: [AppComponent, ChildComponent, ParentComponent],
    imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes), FormsModule, RouterOutlet, RouterLink, RouterLinkActive],
    providers: [AppService],
    exports: [],
    bootstrap: [AppComponent]
})

export class AppModule {
}