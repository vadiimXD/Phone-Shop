import { FormGroup, NgForm } from "@angular/forms";
import { Error } from "src/types/Error";

export function errorHandler(form: NgForm | FormGroup) {

    if (form.controls["name"] && form.controls["name"].errors) {

        if (form.controls["name"].errors["minlength"]) {
            return <Error>{
                message: "Name must be 2 symbols at least!",
                field: "name"
            }
        }

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

        if (form.controls["damages"].errors["minlength"]) {
            return <Error>{
                message: "Damages must be 2 symbols at least!",
                field: "damages"
            }
        }

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

        if (form.controls["description"].errors["minlength"]) {
            return <Error>{
                message: "Description must be 7 symbols at least!",
                field: "description"
            }
        }

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
    if (form.controls["email"] && form.controls["email"].errors) {
        if (form.controls["email"].errors["required"]) {
            return <Error>{
                message: "Email is required",
                field: "email"
            }
        }
        if (form.controls["email"].errors["minlength"]) {
            return <Error>{
                message: "The email must be 5 symbols at least!",
                field: "email"
            }
        }
        if (form.controls["email"].errors["Error"]) {
            return <Error>{
                message: "Invalid email!",
                field: "email"
            }
        }
    }
    if (form.controls["password"] && form.controls["password"].errors) {
        if (form.controls["password"].errors["required"]) {
            return <Error>{
                message: "Password is required",
                field: "password"
            }
        }

        if (form.controls["password"].errors["minlength"]) {
            return <Error>{
                message: "The password must be 3 symbols at least!",
                field: "password"
            }
        }
    }
    if (form.controls["repassword"] && form.controls["repassword"].errors) {
        if (form.controls["repassword"].errors["required"]) {
            return <Error>{
                message: "Repassword is required",
                field: "repassword"
            }
        }

        if (form.controls["repassword"].errors["minlength"]) {
            return <Error>{
                message: "Reppasword must be 3 symbols at least!",
                field: "repassword"
            }
        }

        if (form.controls["repassword"].errors["Error"]) {
            return <Error>{
                message: "Passwords dont matches!",
                field: "repassword"
            }
        }
    }
    if (form.controls["username"] && form.controls["username"].errors) {
        if (form.controls["username"].errors["required"]) {
            return <Error>{
                message: "Username is required",
                field: "username"
            }
        }

        if (form.controls["username"].errors["minlength"]) {
            return <Error>{
                message: "Username must be 2 symbols at least!",
                field: "username"
            }
        }
    }
    return null
}