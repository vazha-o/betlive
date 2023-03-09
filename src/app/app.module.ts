import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BackgroundComponent } from './layout/background/background.component';
import { HeaderComponent } from './layout/header/header.component';
import { MainComponent } from './layout/main/main.component';
import { CashbackComponent } from './sections/cashback/cashback.component';
import { CarouselComponent } from './sections/carousel/carousel.component';
import { GuaranteeComponent } from './sections/guarantee/guarantee.component';
import { FaqComponent } from './sections/faq/faq.component';
import { ButtonComponent } from './shared/button/button.component';
import { StickyHeaderDirective } from './directives/sticky-header.directive';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    HeaderComponent,
    MainComponent,
    CashbackComponent,
    CarouselComponent,
    GuaranteeComponent,
    FaqComponent,
    ButtonComponent,
    StickyHeaderDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
