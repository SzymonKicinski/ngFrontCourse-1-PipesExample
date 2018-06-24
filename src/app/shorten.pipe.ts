import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    // Imie pipe'a
    name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
    // transform(value: any, lista argumentow){
    transform(value: any, limit: number, anotherArg: number) {
        if (value.length > limit) {
            return value.substr(0, limit) + ' ...' + anotherArg;
            //  {{ server.name | shorten:5 }}
            //      --------------------:5 -parameter
        }
        return value;
    }
}
