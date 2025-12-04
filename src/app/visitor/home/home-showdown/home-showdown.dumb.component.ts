import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { HomeShowdownList } from './home-showdown.interface';

@Component({
  selector: 'app-home-showdown',
  imports: [],
  templateUrl: './home-showdown.dumb.component.html',
  styleUrl: './home-showdown.dumb.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeShowdownDumbComponent {
  readonly homeShowdownList = input.required<HomeShowdownList>();
}
