import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
    declarations: [AppComponent, ChildComponent, ParentComponent],
    imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes), FormsModule, RouterOutlet, RouterLink, RouterLinkActive],
    providers: [],
    exports: [],
    bootstrap: [AppComponent]
})

export class AppModule {
}