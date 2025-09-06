import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface IconProps {
  icon: IconDefinition;
  className?: string;
}

export default function Icon(props: IconProps) {
  const { icon, className } = props;
  return <FontAwesomeIcon icon={icon} className={className} />;
}
