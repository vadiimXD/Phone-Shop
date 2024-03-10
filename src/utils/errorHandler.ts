import { NgForm } from "@angular/forms";
import { Error } from "src/types/Error";

export function errorHandler(form: NgForm) {
    if (form.controls["name"].errors) {
        return <Error>{
            message: "Invalid name!",
            field: "name"
        }
    }

    if (form.controls["type"].errors) {
        return <Error>{
            message: "Type field is required!",
            field: "type"
        }
    }

    if (form.controls["production"].errors) {
        return <Error>{
            message: "Invalid year!",
            field: "production"
        }
    }

    if (form.controls["damages"].errors) {
        return <Error>{
            message: "Damages fields is required!",
            field: "damages"
        }
    }
    if (form.controls["image"].errors) {
        return <Error>{
            message: "Invalid image URL!",
            field: "image"
        }
    }
    if (form.controls["price"].errors) {
        return <Error>{
            message: "Invalid price!",
            field: "price"
        }
    }
    if (form.controls["description"].errors) {
        return <Error>{
            message: "Invalid description!",
            field: "description"
        }
    }

    return null
}