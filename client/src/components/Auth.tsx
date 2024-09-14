import { useForm, SubmitHandler } from "react-hook-form";
import "./css/Auth.css"; // Import the CSS file
import { Header, Navbar } from "./utility";

type Inputs = {
    Email: string;
    Password: string;
    Username?: string;
}

type ReuseProps = {
    register: any;
    errors: any;
};

export function Reuse({ register, errors }: ReuseProps) {
    return (
        <>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    type="email"
                    {...register("Email", { required: "Email is required" })}
                />
                {errors.Email && <span className="error">{errors.Email.message}</span>}
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                    id="password"
                    type="password"
                    {...register("Password", { required: "Password is required" })}
                />
                {errors.Password && <span className="error">{errors.Password.message}</span>}
            </div>
        </>
    );
}

export function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    return (
        <>
          <Header/>
          <Navbar/>
        
      
        <form onSubmit={handleSubmit(onSubmit)} className="form">
            <Reuse register={register} errors={errors} />
            <input type="submit" className="submit-button" />
        </form>
        </>
    );
}

export function SignUp() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    return (
        <>
        <Header/>
        <Navbar/>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
            <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input
                    id="username"
                    type="text"
                    {...register("Username", { required: "Username is required" })}
                />
                {errors.Username && <span className="error">{errors.Username.message}</span>}
            </div>
            <Reuse register={register} errors={errors} />
            <input type="submit" className="submit-button" />
        </form>
        </>
    );
}
