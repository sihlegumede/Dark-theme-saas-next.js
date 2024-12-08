import InstaIcon from "../assets/icons/insta.svg";
import XSocialIcon from "../assets/icons/x-social.svg";
import TiktokIcon from "../assets/icons/tiktok.svg";
import YouTube from "../assets/icons/youtube.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-white/60 py-5 border-t border-white/20">
      <div className="container">
        <div className="flex flex-col gap-4 ">
          <ul className="flex justify-center gap-2.5">
            <li>
              <XSocialIcon />
            </li>
            <li>
              <InstaIcon />
            </li>
            <li>
              <TiktokIcon />
            </li>
            <li>
              <YouTube />
            </li>
          </ul>
          <div className="text-center">2024 All rights reserved</div>
        </div>
      </div>
    </footer>
  );
};
