import { Pipe, PipeTransform } from '@angular/core';
import { ComponentDataTS } from '../../../models/component.model';

@Pipe({
    name: 'categoryFilter'
})

export class CategoryFilterPipe implements PipeTransform {
    transform(components: ComponentDataTS[], searchTermCategory: string, searchTermCompany: string): ComponentDataTS[] {
        if ((!components || !searchTermCompany) && (!components || !searchTermCategory)) {
            return components;
        }

        if (searchTermCategory){
            return components.filter(component =>
                component.category.toLowerCase()
                    .indexOf(searchTermCategory.toLowerCase()) !== -1);
        }

        if (searchTermCompany) {
            return components.filter(component =>
                component.company.toLowerCase()
                    .indexOf(searchTermCompany.toLowerCase()) !== -1);
        }
    }
}
