import { Routes } from '@angular/router';
import { Grid1Component } from './screens/grid1/grid1.component';
import { Grid2Component } from './screens/grid2/grid2.component';
import { Grid3Component } from './screens/grid3/grid3.component';
import { Grid4Component } from './screens/grid4/grid4.component';
import { Part2AComponent } from './screens/part2-a/part2-a.component';
import { Part2BComponent } from './screens/part2-b/part2-b.component';
import { Part2CComponent } from './screens/part2-c/part2-c.component';

export const routes: Routes = [
    {
        path: '',
        component: Grid1Component
    },
    {
        path: 'grid-1',
        component: Grid1Component
      },
      {
        path: 'grid-2',
        component: Grid2Component
      },
      {
        path: 'grid-3',
        component: Grid3Component
      },
      {
        path: 'grid-4',
        component: Grid4Component
      },
      {
        path: 'part2-a',
        component: Part2AComponent
      },
      {
        path: 'part2-b',
        component: Part2BComponent
      },
      {
        path: 'part2-c',
        component: Part2CComponent
      }
];
