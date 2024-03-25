import { FormGroup, NgForm } from "@angular/forms";
import { Error } from "src/types/Error";

export function errorHandler(form: NgForm | FormGroup) {

    if (form.controls["name"] && form.controls["name"].errors) {
        return <Error>{
            message: "Invalid name!",
            field: "name"
        }
    }
    if (form.controls["type"] && form.controls["type"].errors) {
        return <Error>{
            message: "Type field is required!",
            field: "type"
        }
    }
    if (form.controls["year"] && form.controls["year"].errors) {
        return <Error>{
            message: "Invalid year!",
            field: "production"
        }
    }
    if (form.controls["damages"] && form.controls["damages"].errors) {
        return <Error>{
            message: "Damages fields is required!",
            field: "damages"
        }
    }
    if (form.controls["image"] && form.controls["image"].errors) {
        return <Error>{
            message: "Invalid image URL!",
            field: "image"
        }
    }
    if (form.controls["price"] && form.controls["price"].errors) {
        return <Error>{
            message: "Invalid price!",
            field: "price"
        }
    }
    if (form.controls["description"] && form.controls["description"].errors) {
        return <Error>{
            message: "Invalid description!",
            field: "description"
        }
    }
    if (form.controls["profileImg"] && form.controls['profileImg'].errors) {

        if (form.controls["profileImg"].errors["required"]) {
            return <Error>{
                message: "Image url is required",
                field: "img"
            }
        }

        if (form.controls['profileImg'].errors["Error"]) {
            return <Error>{
                message: form.controls['profileImg'].errors["Error"],
                field: "img"
            }
        }


    }
    return null
}