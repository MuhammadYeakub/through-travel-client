import {
  BsFacebook,
  BsFillPinMapFill,
  BsInstagram,
  BsLinkedin,
  BsYoutube,
} from "react-icons/bs";
import Container from "../Container";
const Footer = () => {
  return (
    <div className="bg-[#57baea] text-white">
      <Container>
        <div className="flex justify-between py-20">
          <div className="flex">
            <BsFillPinMapFill className="w-6 h-6 mr-2" />
            <p>
              #000 (0th Floor), Road #00,
              <br /> Niketon, Gulshan, Dhaka, Bangladesh
            </p>
          </div>
          <div className="flex flex-col">
            <span class=" text-lg md:mb-3 font-semibold">Company</span>
            <a class="link link-hover">About</a>
            <a class="link link-hover">Projects</a>
            <a class="link link-hover">Our Tems</a>
            <a class="link link-hover">Terms condition</a>
            <a class="link link-hover">Submit listing</a>
          </div>
          <div className="flex flex-col">
            <span class=" text-lg md:mb-3 font-semibold">Quick Links</span>
            <a class="link link-hover">Floor</a>
            <a class="link link-hover">Rentals</a>
            <a class="link link-hover">Salse</a>
            <a class="link link-hover">Contact</a>
            <a class="link link-hover">Our Blogs</a>
          </div>
          <div className="flex flex-col">
            <span class=" text-lg md:mb-3 font-semibold">About Us</span>
            <p className="w-full lg:w-80">
              Through travel we connect people and places, and through our
              travel blog we connect with you. We hope you enjoy our travel blog
              and find some inspiration through our travel stories.
            </p>
            <div className="flex gap-6 mt-2 ">
              <BsInstagram className="w-6 h-6" />
              <BsLinkedin className="w-6 h-6" />
              <BsYoutube className="w-6 h-6" />
              <BsFacebook className="w-6 h-6" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
