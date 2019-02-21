import {Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class LoaderController {
    isLoading = false;

    public presetLoader() {
        this.isLoading = true;
    }

    public hideLoader() {
        this.isLoading = false
    }
}