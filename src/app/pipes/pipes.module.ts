import { NgModule } from "@angular/core";
import { CustomDatePipe } from "./custom.datepipe";
import { MyFilterPipe } from "./filter-pipe.pipe";
@NgModule({
    declarations: [
        CustomDatePipe,
        MyFilterPipe
    ],
    exports: [
        CustomDatePipe,
        MyFilterPipe
    ],
})
export class PipesModule { }
