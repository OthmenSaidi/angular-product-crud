
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ActionEvent } from "../state/product.state";

@Injectable({ providedIn: "root" })
export class EventDriverService {
    //creer un subject permet du publier de evenement
    sourceEventSubject: Subject<ActionEvent> = new Subject<ActionEvent>();
    //pour separer lecture et ecriture(editer et select par exemple on créer un autre subject )
    sourceEventSubject2: Subject<ActionEvent> = new Subject<ActionEvent>();//au lieu de actionEvent on creer dans poduct.state deux types selection et ajout+delete+edit)

    sourceEventSubjectObservable = this.sourceEventSubject.asObservable();

    publishEvent(event: ActionEvent) {
        this.sourceEventSubject.next(event);

    }

}