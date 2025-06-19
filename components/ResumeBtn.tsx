import { FiDownloadCloud } from "react-icons/fi";
import { Button } from "./ui/button";

interface Props {
  containerStyles: string;
  iconStyles: string;
}

const ResumeBtn = ({ containerStyles, iconStyles }: Props) => {
  return (
    <Button variant="outline" className={containerStyles}>
      <span>Download CV</span>
      <FiDownloadCloud className={iconStyles} />
    </Button>
  );
};

export default ResumeBtn;
