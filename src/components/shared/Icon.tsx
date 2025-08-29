import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface IconProps {
  icon: IconDefinition;
}

export default function Icon(props: IconProps) {
  const { icon } = props;
  return <FontAwesomeIcon icon={icon} />;
}
