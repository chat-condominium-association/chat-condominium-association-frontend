import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import routeConfig from './routes';
import { provideStore } from '@ngrx/store';
import { uiReducer } from '@store/ui/ui.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { UserEffects } from '@store/entities/user/user.effects';
import { RommsByIDEffects } from '@store/entities/roomsByID/roomsByID.effects';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { entitiesReducer } from '@store/entities/entities.reducer';
import { HttpCredentialsInterceptor } from '@core/interceptors/http-credentials.interceptor';


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routeConfig),
    provideStore([uiReducer, entitiesReducer]),
    provideEffects([RommsByIDEffects, UserEffects]),
    provideStoreDevtools(),
    provideHttpClient(),
    { provide: HTTP_INTERCEPTORS, useClass: HttpCredentialsInterceptor, multi: true },
  ],
}).catch((err) => console.error(err));
