import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ClarityModule } from "clarity-angular";
import { AppComponent } from "./app.component";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { AboutComponent } from './about/about.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AdminComponent } from './admin/admin.component';
import 'clarity-icons';
import { EditAlbumComponent } from './edit-album/edit-album.component';
export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
    imports: [
        BrowserModule,
        ClarityModule.forRoot(),
        FormsModule,
        HttpModule,
        routing, AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
     ],
     providers: [],
     declarations: [
       AppComponent,
       WelcomeComponent,
       AboutComponent,
       MarketplaceComponent,
       AlbumDetailComponent,
       AdminComponent,
       EditAlbumComponent
      ],
     bootstrap: [ AppComponent ]
})
export class AppModule {    }
