import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { reducers, metaReducers } from './state/core.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environment';
import { EffectsModule } from '@ngrx/effects';
import { AuthorEffects } from './state/author';
import { AuthorService } from './services/author.service';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    EffectsModule.forRoot([AuthorEffects]),
  ],
  providers: [AuthorService],
})
export class CoreModule {}
