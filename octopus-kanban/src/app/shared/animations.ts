
import { animate, style, transition, trigger, keyframes } from '@angular/animations';

export const routeSlideStateTrigger = trigger('routeSlideState', [
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate(300)
  ]),
  transition(':leave', animate(300, style({
    transform: 'translateY(100%)',
    opacity: 0
  })))
]);


export const fadeStateTrigger = trigger('fadeState', [
  transition(':leave', [
    animate('700ms ease-in', keyframes([
      style({
        opacity: 1,
      }),
      style({
        opacity: 0,
      })
    ]))
  ]),
  transition(':enter', [
    animate('700ms ease-in', keyframes([
      style({
        opacity: 0,
      }),
      style({
        opacity: 1,
      })
    ]))
  ])
]);
