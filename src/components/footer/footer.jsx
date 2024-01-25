import { BsFillPinMapFill } from "react-icons/bs";
import { MdPhoneForwarded } from "react-icons/md";
export default function Footer() {
  return (
    <div className="bg-primary text-white py-14">
      <div className="layout space-y-12">
        <div className="flex flex-row justify-between items-center">
          <img src="/logo.png" className="w-28 h-auto" alt="" />
          <div className="flex flex-row gap-5">
            <BsFillPinMapFill size={38} />
            <div>
              <p className="text-sm">Address</p>
              <span className="text-text-color-secondary">
                NewRoad, Pokhara
              </span>
            </div>
          </div>
          <div className="flex flex-row gap-5">
            <MdPhoneForwarded size={38} />
            <div>
              <p className="text-sm">Phone</p>
              <span className="text-text-color-secondary">
                (+977) 980 0000 000
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="w-72 space-y-4">
            <p className="text-lg font-semibold">About Hommies</p>
            <span className="text-text-color-secondary line-clamp-6">
              A tech firm in Nepal is dedicated to assisting millions of
              individuals in effectively managing and enhancing their
              households. Daily, residents across every district rely on this
              company to address minor repairs, perform regular u
            </span>
          </div>
          <div className="w-72 space-y-4">
            <p className="text-lg font-semibold">Quick Links</p>
            <span className="text-text-color-secondary line-clamp-6">
              <ul className="list-none">
                <li className="hover:text-white cursor-pointer">Home</li>
                <li className="hover:text-white cursor-pointer">About</li>
                <li className="hover:text-white cursor-pointer">Services</li>
                <li className="hover:text-white cursor-pointer">
                  Testomonials
                </li>
                <li className="hover:text-white cursor-pointer">Contact</li>
              </ul>
            </span>
          </div>
          <div className="w-72 space-y-4 relative">
            <p className="text-lg font-semibold">Newsletter</p>
            <span className="text-text-color-secondary line-clamp-6">
              Sign up for the newsletter and discover the latest listings and
              promotions
            </span>

            <input
              type="text"
              className="w-full bg-white text-primary text-sm px-4 py-3 placeholder:text-primary rounded-md"
              placeholder="you@domain.com |"
            />
            <span className="uppercase text-sm text-primary cursor-pointer absolute  bottom-12 right-6">
              Subscribe
            </span>
          </div>
        </div>
        <div>
          <p className="text-center text-text-color-secondary">
            © 2021 Hommies. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
