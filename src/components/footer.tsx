import { FaFacebook, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import { TbBrandOauth } from "react-icons/tb";

const FooterApp = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h2 className="text-white text-2xl font-bold flex items-center gap-2">
                            <span className="bg-gray-800 p-2 rounded-full text-blue-600">🔗</span> AuthStream
                        </h2>
                        <p className="mt-3 text-sm">
                            Cras ultricies mi eu turpis sit hendrerit fringilla vestibulum ante ipsum primis in faucibus ultrices posuere cubilia.
                        </p>
                        <a href="#" className="mt-4 inline-flex items-center gap-2 text-gray-400 hover:text-white">
                            <TbBrandOauth size={18} /> Join Us In Authstream
                        </a>
                    </div>



                    <div>
                        <h3 className="text-white text-lg font-semibold mb-3">Product</h3>
                        <ul className="space-y-2">
                            <li><a href="#trending" className=" inline-flex items-center gap-2 text-gray-400 hover:text-white">Trending</a></li>
                            <li><a href="#popular" className=" inline-flex items-center gap-2 text-gray-400 hover:text-white">Popular</a></li>
                            <li><a href="#customers" className=" inline-flex items-center gap-2 text-gray-400 hover:text-white">Customers</a></li>
                            <li><a href="#features" className=" inline-flex items-center gap-2 text-gray-400 hover:text-white">Features</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white text-lg font-semibold mb-3">Learn More</h3>
                        <ul className="space-y-2">
                            <li><a href="#about" className=" inline-flex items-center gap-2 text-gray-400 hover:text-white">About</a></li>
                            <li><a href="#services" className=" inline-flex items-center gap-2 text-gray-400 hover:text-white">Services</a></li>
                            <li><a href="#home" className=" inline-flex items-center gap-2 text-gray-400 hover:text-white">Home</a></li>
                            <li><a href="#contact" className=" inline-flex items-center gap-2 text-gray-400 hover:text-white">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white text-lg font-semibold mb-3">Contact</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className=" inline-flex items-center gap-2 text-gray-400 hover:text-white">
                                    <FaInstagram size={18} />    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="#" className=" inline-flex items-center gap-2 text-gray-400 hover:text-white">
                                    <FaYoutube size={18} /> Youtube
                                </a>
                            </li>
                            <li>
                                <a href="#" className=" inline-flex items-center gap-2 text-gray-400 hover:text-white">
                                    <FaGithub size={18} />  Github
                                </a>
                            </li>
                            <li>
                                <a href="#" className=" inline-flex items-center gap-2 text-gray-400 hover:text-white">
                                    <FaFacebook size={18} />  Facebook
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>

                <div className="mt-8 text-center text-gray-500 text-sm">
                    2025 © AuthStream. Developed by AuthStreamMember
                </div>
            </div>
        </footer>
    );
};

export default FooterApp;
