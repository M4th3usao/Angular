import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EventosComponent } from "./components/eventos/eventos.component";
import { FirstComponentComponent } from "./components/first-component/first-component.component";
import { IfRenderComponent } from "./components/if-render/if-render.component";
import { ListRenderComponent } from "./components/list-render/list-render.component";
import { TwoWayBindingComponent } from "./components/two-way-binding/two-way-binding.component";

const routes: Routes = [
    {path: '', component: FirstComponentComponent},
    {path: 'list', component: ListRenderComponent},
    {path: 'if', component: IfRenderComponent},
    {path: 'twb', component: TwoWayBindingComponent},
    {path: 'eventos', component: EventosComponent}
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}