import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface Props {
  containerStyles: string;
  iconStyles: string;
}

const socials = [
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/harvey-dansou/" },
  // { icon: <FaGithub />, path: "https://github.com/HarveyDansou" },
  // { icon: <FaYoutube />, path: "https://www.youtube.com/@harveydansou" },
  // { icon: <FaTwitter />, path: "https://x.com/HairveyDansou" },
];

const Social = ({ containerStyles, iconStyles }: Props) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
