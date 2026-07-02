import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import loginSchema from "../schema/zod.schema.js";

function Login(){
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginSchema)
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)} className="loginForm">
            <input {...register("email")} className="loginInput" placeholder="Enter your email" />
            <span className="loginError">{errors.email?.message}</span>

            <input type="password" {...register("password")} className="loginInput" placeholder="Enter your password" />
            <span className="loginError">{errors.password?.message}</span>

            <button className="loginBtn">Login</button>
        </form>
    )
}

export default Login



// import { z } from "zod";

// const loginSchema = z.object({
//     email: z.email("Please enter a valid email address."),
//     password: z.string().min(6, "Minimum 6 characters are required.").max(20, "Password can be of maximum 20 characters.")
// })


// export default loginSchema



// .loginForm{
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     flex-direction: column;
//     margin: 50px;
// }

// .loginInput{
//     margin-top: 10px;
//     padding: 5px 10px;
//     width: 30%;
//     color: white;
//     background-color: black;
//     text-align: center;
// }

// .loginBtn{
//     margin-top: 10px;
//     padding: 5px 20px;
//     background-color: rgb(199, 163, 242);
//     font-weight: 600;
//     border-radius: 9%;
// }

// .loginError{
//     color: red;
// }