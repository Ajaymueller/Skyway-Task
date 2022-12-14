import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Injectable()
@Pipe({
    name: 'customDate'
})
export class CustomDatePipe extends
    DatePipe implements PipeTransform {
    transform(value: any, args?: any): any {
        return super.transform(value, "EEEE d MMMM y");
    }
}