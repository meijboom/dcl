import { Pipe, PipeTransform } from '@angular/core';
import { ComponentDataTS } from '../../../models/component.model';

@Pipe({
    name: 'categoryFilter'
})

export class CategoryFilterPipe implements PipeTransform {
    transform(components: ComponentDataTS[], searchTermCategory: string): ComponentDataTS[] {
        if (!components || !searchTermCategory) {
            return components;
        }

        return components.filter(component =>
            component.category.toLowerCase()
            .indexOf(searchTermCategory.toLowerCase()) !== -1 );
    }
}
