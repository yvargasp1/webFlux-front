import { Products } from "./products.dto";

export interface ProductState {
 loading:boolean,
 products: ReadonlyArray<Products>
}