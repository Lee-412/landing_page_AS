import { forwardRef, useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import "../styles/contactSection.css"

type FormDataType = {
    name: string;
    email: string;
    subject: string;
    message: string;
};
const ContactSection = forwardRef<HTMLElement>((_, ref) => {

    const [formData, setFormData] = useState<FormDataType>({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSendEmail = () => {
        console.log(formData);
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        })

    }
    return (
        <section ref={ref} id="contact" className="contact_container">
            <div className="contact_header">
                <h2 className="text-3xl font-bold">Contact Us</h2>
                <p className="text-gray-500 mt-2 max-w-lg mx-auto">
                    Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam nisi commodi consequatur.
                </p>
            </div>

            <div className="contact_grid">
                <div className="flex flex-col items-center text-center">
                    <img src="/public/contact_img.png" alt="Contact Illustration" className="max-w-xs md:max-w-sm" />

                    <h3 className="text-xl font-semibold mt-6">Are You Facing Any Problem..?</h3>
                    <p className="text-gray-500 mt-2">
                        It va esser tam simplic quam Occidental in fact it va esser Occidental angles quam un skeptic cambridge es.
                    </p>

                    <Button className="mt-4 bg-green-500 hover:bg-green-600">
                        💬 Start Live Chat
                    </Button>

                    <p className="text-gray-500 mt-4">Or you can contact at</p>

                    <div className="flex flex-col md:flex-row gap-4 mt-2">
                        <span className="bg-gray-200 px-4 py-2 rounded-full text-gray-600 text-sm">
                            📧 Email: <span className="text-gray-800">AuthStream@gmail.com</span>
                        </span>
                        <span className="bg-gray-200 px-4 py-2 rounded-full text-gray-600 text-sm">
                            📞 Phone: (001) 1234 567 890
                        </span>
                    </div>
                </div>

                <div className="bg-white  rounded-lg p-6 w-full" style={{

                }}>
                    <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div style={{
                            display: "flex",
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start'
                        }}>
                            <span>Name</span>
                            <Input
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name .."
                            />

                        </div>
                        <div style={{
                            display: "flex",
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',

                        }}>
                            <span>Email Address</span>
                            <Input
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email .."
                            />                        </div>
                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        marginTop: '3vh'

                    }}>
                        <span>Subject</span>
                        <Input
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Enter Subject .."
                        />                    </div>
                    <div style={{
                        display: "flex",
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        marginTop: '3vh'
                    }}>
                        <span>Message</span>
                        <Textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Enter your message .."
                        />                    </div>

                    <Button onClick={handleSendEmail} className="w-full mt-4 bg-blue-500 hover:bg-blue-600">Send Message</Button>
                </div>
            </div>
        </section>
    );
});

export default ContactSection;
