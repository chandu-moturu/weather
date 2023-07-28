import { PolyList } from "./polylist";
export interface Poly{
    id?:number;
    polygon:PolyList[];
    name:string;
    created:string;
    area:number;
}