import { Pipe, PipeTransform } from '@angular/core';
import { ComponentDataTS } from '../../../models/component.model';

@Pipe({
    name: 'companyFilter'
})

export class CompanyFilterPipe implements PipeTransform {
    transform(components: ComponentDataTS[], searchTermCompany: string): ComponentDataTS[] {
        if (!components || !searchTermCompany) {
            return components;
        }

        return components.filter(component =>
            component.company.toLowerCase()
            .indexOf(searchTermCompany.toLowerCase()) !== -1 );
    }
}
