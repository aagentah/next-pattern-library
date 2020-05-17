import React from "react";

import ArrowRight from "./arrow-right";
import Mail from "./mail";

import Facebook from "./facebook";
import Twitter from "./twitter";
import Instagram from "./instagram";
import SoundCloud from "./soundcloud";
import Discord from "./discord";
import Youtube from "./youtube";

export default function Icon(props) {
  const { icon } = props;

  switch (icon) {
    case "arrow-right":
      return <ArrowRight {...props} />;
      break;
    case "mail":
      return <Mail {...props} />;
      break;
    case "facebook":
      return <Facebook {...props} />;
      break;
    case "twitter":
      return <Twitter {...props} />;
      break;
    case "instagram":
      return <Instagram {...props} />;
      break;
    case "soundcloud":
      return <SoundCloud {...props} />;
      break;
    case "discord":
      return <Discord {...props} />;
      break;
    case "youtube":
      return <Youtube {...props} />;
      break;
    default:
      return false;
  }
}
