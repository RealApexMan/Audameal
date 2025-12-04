import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { HomeBannerDumbComponent } from './home-banner/home-banner.dumb.component';
import { HomeShowdownDumbComponent } from './home-showdown/home-showdown.dumb.component';
import { HomeShowdownList } from './home-showdown/home-showdown.interface';
import { HomepageFeatureCardListDumbComponent } from './homepage-feature-card-list/homepage-feature-card-list.dumb.component';
import { FeatureCardList } from './homepage-feature-card-list/homepage-feature-card-list.interface';

@Component({
  selector: 'app-home',
  imports: [
    HomeBannerDumbComponent,
    HomepageFeatureCardListDumbComponent,
    HomeShowdownDumbComponent,
  ],
  templateUrl: './home.page.component.html',
  styleUrl: './home.page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  featureCardList = signal<FeatureCardList>([
    {
      name: 'Des recettes alignées avec tes objectifs',
      icon: 'calculator',
      description:
        'Sèche, maintien ou prise de masse : Audameal t’aide à choisir des recettes qui collent à tes besoins grâce à des macros claires et des portions bien définies.',
    },
    {
      name: 'Meal prep malin sur 4/5 jours',
      icon: 'clock-history',
      description:
        'Planifie tes repas sur plusieurs jours avec des recettes pensées pour bien se conserver, se réchauffer facilement et rester intéressantes à manger.',
    },
    {
      name: 'Plaisirs maîtrisés & recettes validées',
      icon: 'patch-check-fill',
      description:
        'Desserts, snacks et cheat meals intelligents : fais-toi plaisir tout en gardant un œil sur tes macros. Chaque recette est validée manuellement pour rester cohérente avec l’esprit Audameal.',
    },
  ]);
  homeShowdownList = signal<HomeShowdownList>([
    {
      id: 'honey-soy-salmon',
      title: 'Saumon parfait',
      imageUrl: '/images/perfect-salmon.jpg',
      protein: 42,
      carbs: 64,
      fats: 29,
      calories: 700,
    },
    {
      id: 'chicken-burger',
      title: 'Burger au poulet',
      imageUrl: '/images/chicken-burger.jfif',
      protein: 51,
      carbs: 46,
      fats: 14,
      calories: 510,
    },
    {
      id: 'protein-pancakes',
      title: 'Pancakes protéinés banane',
      imageUrl: '/images/banana-pancake.jfif',
      protein: 56,
      carbs: 68,
      fats: 18,
      calories: 630,
    },
    {
      id: 'brownie',
      title: 'Brownie',
      imageUrl: '/images/brownie.jfif',
      protein: 6,
      carbs: 25,
      fats: 18,
      calories: 231,
    },
  ]);

  onBannerClicked() {
    console.log('Banner clicked');
  }
}
