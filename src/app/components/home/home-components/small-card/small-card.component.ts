import { Component, Input, input } from '@angular/core';
import { DescriptionPipe } from '../../../../pipes/description.pipe';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [DescriptionPipe],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.scss'
})
export class SmallCardComponent {
  @Input() category: string = '';
  @Input() price: number = 0;
  @Input() count: number = 0;
  @Input() description: string = '';
  @Input() backgroundColor: string = '#FF8B64';
}
