import { Imagen } from "./imagen.model";

export class Album {
    id?: any;
    title?: string;
    description?: string;
    published?: boolean;
    link?: string;
    images?: Imagen[];
    account_id? : any;
    account_url? : any;
}
