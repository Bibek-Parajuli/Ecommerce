import { useForm, SubmitHandler } from "react-hook-form";
import "./css/contact.css"; // Import the CSS file
import { Header, Navbar } from "./utility";

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

export function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
        // Handle form submission, e.g., send data to an API
    };

    return (
        <>
        <Header/>
        <Navbar/>
        <div className="contact-container">
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        id="name"
                        type="text"
                        {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && <span className="error">{errors.name.message}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        type="email"
                        {...register("email", { required: "Email is required" })}
                    />
                    {errors.email && <span className="error">{errors.email.message}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="subject">Subject:</label>
                    <input
                        id="subject"
                        type="text"
                        {...register("subject", { required: "Subject is required" })}
                    />
                    {errors.subject && <span className="error">{errors.subject.message}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        rows={4}
                        {...register("message", { required: "Message is required" })}
                    ></textarea>
                    {errors.message && <span className="error">{errors.message.message}</span>}
                </div>

                <button type="submit" className="submit-button">Send Message</button>
            </form>
        </div>
        </>
    );
}
