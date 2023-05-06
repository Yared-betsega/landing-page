import React from "react";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Chip,
  Typography,
} from "@material-tailwind/react";
import { StarIcon, CheckBadgeIcon } from "@heroicons/react/24/solid";

export default function FeatureCardWithTooltip({ child, tooltip }) {
  const [openPopover, setOpenPopover] = React.useState(false);
  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false),
  };

  return (
    <Popover
      placement="center"
      open={openPopover}
      handler={setOpenPopover}
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0, y: 25 },
      }}
    >
      <PopoverHandler {...triggers} className="bg-transparent text-black">
        <Button>{child}</Button>
      </PopoverHandler>
      <PopoverContent {...triggers} className="max-w-[26rem]">
        <p className="text-base">{tooltip}</p>
      </PopoverContent>
    </Popover>
  );
}
