import { Component, computed, input } from '@angular/core';
import { CommonModule } from '@angular/common';

type Product = {
  id: number;
  name: string;
  price: number;
}


@Component({
  selector: 'lib-shared-ui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shared-ui.component.html',
  styleUrl: './shared-ui.component.css',
})
export class SharedUiComponent {
  product = input.required<Product>();

  pricePlusVat = computed(() => {
    return this.product().price * 1.2;
  })
}
