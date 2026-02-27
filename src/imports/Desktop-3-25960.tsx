import svgPaths from "./svg-e1buucegjb";
import imgFlagOfSerbiaSvg1 from "figma:asset/30007d4ade85d9f1f0ad0a485b1a52bef5f53199.png";
import imgFlagOfSerbiaSvg2 from "figma:asset/15a463564a4775b0eba4e78dce638b151cd41d4b.png";
import { imgTabs, imgTabs1, imgTabs2, imgTabs3, imgMenu, imgMenu1 } from "./svg-zxc2g";
import imgChannelLogos16X9 from "figma:asset/b4fa4bed935a9ddfbd17e66283b27f1926df3986.png";
type OnAirAnimationProps = {
  className?: string;
  property1?: "1" | "2" | "3" | "4" | "5" | "6" | "Variant7";
};

function OnAirAnimation({ className, property1 = "1" }: OnAirAnimationProps) {
  const is2 = property1 === "2";
  const is3 = property1 === "3";
  const is4 = property1 === "4";
  const is5 = property1 === "5";
  const is6 = property1 === "6";
  const isVariant7 = property1 === "Variant7";
  return (
    <div className={className || "relative size-[14px]"}>
      <div className={`absolute flex items-center justify-center left-0 ${isVariant7 ? "h-[12px] top-[2px] w-[14px]" : is4 ? "h-[10px] top-[4px] w-[14px]" : "size-[14px] top-0"}`} style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className={`relative ${isVariant7 ? "h-[14px] w-[12px]" : is4 ? "h-[14px] w-[10px]" : "size-[14px]"}`} data-name="Union">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox={isVariant7 ? "0 0 12 14" : is4 ? "0 0 10 14" : "0 0 14 14"}>
              <path d={isVariant7 ? svgPaths.pd643870 : is6 ? svgPaths.p356b5400 : is5 ? svgPaths.p3dd29d80 : is4 ? svgPaths.p1b160800 : is3 ? svgPaths.pc707700 : is2 ? svgPaths.p1d313d00 : svgPaths.pb5e5c00} fill="var(--fill-0, #E5E9EC)" id="Union" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group({ className }: { className?: string }) {
  return (
    <div className={className || ""}>
      <div className="-translate-x-1/2 -translate-y-1/2 relative rounded-[4px] size-[24px]" data-name="Property 1=System Icons, Property 2=Notification New, Property 3=No">
        <div className="absolute inset-[8.33%_12.5%_8.33%_16.67%]">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 17 20.0001">
            <g id="Group 2168">
              <g id="ico_notification_available">
                <path d={svgPaths.p30e71080} fill="var(--fill-0, #E5E9EC)" />
                <path d={svgPaths.p21c79200} fill="var(--fill-0, #E5E9EC)" />
              </g>
              <circle cx="14" cy="3" fill="var(--fill-0, #B4FF00)" id="status" r="3" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
type SystemIconsProps = {
  className?: string;
  contained?: boolean;
  large?: "Yes" | "No" | "up" | "down" | "set reminder" | "date&time";
  name?: "18+" | "Action" | "Airplay" | "Alarm" | "Alarm Add" | "Apps" | "Arrow Down" | "Arrow Down Small" | "Arrow Left" | "Arrow Left Small" | "Arrow Right" | "Arrow Right Small" | "Arrow Up" | "Arrow Up Small" | "Audiobook" | "Home Back" | "Bookmark" | "Bookmark Filled" | "Bulb" | "Calendar" | "Camera" | "Camera Crossed" | "Cart" | "Cast" | "Cast Available" | "Cast Connected" | "Catchup" | "Catchup Crossed" | "Checkmark" | "Checkmark Circular" | "Checkmark Circular Filled" | "Clock" | "Code" | "Collapse" | "Comedy" | "Crime" | "Dislike" | "Dislike Filled" | "Documentary" | "Download" | "Drama" | "Enter" | "Exit" | "Expand" | "Eye" | "Eye Crossed" | "Family" | "Filter" | "Flag" | "Football" | "Forward" | "Games" | "Google Play" | "EPG" | "Heart" | "Heart Filled" | "Home" | "Image" | "Info" | "Info Filled" | "Kids" | "Like" | "Like Filled" | "Link" | "List" | "Live" | "Live 2" | "Locked" | "Manage" | "Mic" | "Mic Crossed" | "Minus" | "Minus Circular" | "Minus Circular Filled" | "More" | "More Media" | "Movies" | "Music Mic" | "Music Note" | "Next" | "Notification" | "Notification Crossed" | "Notification New" | "On Demand" | "Pause" | "Pause Circular" | "Pencil" | "Phone" | "PiP Btm L" | "Placeholder" | "Play" | "Play Circular" | "Plus" | "Plus Circular" | "Plus Circular Filled" | "Power" | "Radio" | "Radio Checked" | "Reorder" | "Rewind" | "Route" | "Route Dashed" | "Sci-Fi" | "Search" | "Series" | "Settings" | "Share" | "Skip Backward" | "Skip Forward" | "Smile" | "Sort" | "Sort Ascending" | "Sort Descending" | "Speach Bubble" | "Star" | "Star Filled" | "Start Over" | "Stats" | "TV Program" | "Tablet" | "Trash" | "Trophy" | "Unlocked" | "Update" | "User" | "User Group" | "Volume High" | "Volume Low" | "Volume Mute" | "Wifi No Signal" | "X" | "X Small" | "TV" | "No Video" | "Email" | "Globe" | "Antenna" | "Satellite" | "Cable TV" | "Question Filled" | "Question" | "Password" | "Credit Card" | "Dissatisfied" | "Ok With" | "Satisfied" | "Somewhat Dissatisfied" | "Somewhat Satisfied" | "Exclamation" | "Exclamation Border" | "EPG-Mini" | "Join Now" | "Dark Mode" | "Light Mode" | "Brightness" | "Download Progress" | "History" | "PiP Top R" | "PiP" | "PiP Top L" | "Present" | "Drag" | "Handle" | "Wifi Poor Signal" | "Devices" | "Subscription" | "Cookies Policy" | "network_wifi" | "desktop" | "settings_brightness" | "remote" | "tv" | "tv_remote" | "accounts" | "Connected_tv" | "restart" | "accessibility" | "Android Phone" | "Android TV" | "iPhone" | "Recording OnGoing" | "mic_default" | "mic_active" | "Remote_back" | "Remote_Play/Pause" | "Remote_Previous" | "Remote_REC" | "Remote_EPG" | "Remote_CH" | "Remote_123" | "Double Arrow Right Small" | "Double Arrow Left Small" | "Forward inactive" | "Back&Forward inactive" | "Drag_active" | "On air" | "Record" | "Recorded" | "Series_Record" | "Series_Recorded" | "Subscribe" | "Delete_Record" | "password" | "lock" | "STB" | "PIP Expand" | "Reorder_Channels" | "Chevron" | "All Episodes" | "Previous" | "entertainemnt" | "system icons" | "Scheduled Recordings" | "Cellular";
  outlined?: boolean;
};

function SystemIcons({ className, contained = true, large = "No", name = "Airplay", outlined = false }: SystemIconsProps) {
  if (name === "Apps" && large === "No") {
    return (
      <div className={className || "relative rounded-[4px] size-[24px]"} data-name="Name=Apps, Large=No">
        <div className="absolute inset-[12.5%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.p1c58900} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Audiobook" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Audiobook, Large=No">
        <div className="absolute inset-[8.33%_12.5%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 18 19.9999">
            <path d={svgPaths.p3fa0db00} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Calendar" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Calendar, Large=No">
        <div className="absolute inset-[8.33%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p1aec5a80} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Cart" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Cart, Large=No">
        <div className="absolute inset-[8.33%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path clipRule="evenodd" d={svgPaths.p16d32100} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Code" && large === "No") {
    return (
      <div className={className || "h-[24.001px] relative w-[24px]"} data-name="Name=Code, Large=No">
        <div className="absolute inset-[16.67%_8.33%]" data-name="Combined Shape">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9992 16.0002">
            <path d={svgPaths.pdd5600} fill="var(--fill-0, #E5E9EC)" id="Combined Shape" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Download" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Download, Large=No">
        <div className="absolute inset-[16.67%_20.83%_8.33%_20.83%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 14 18">
            <path d={svgPaths.p31ad9b00} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Pencil" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Pencil, Large=No">
        <div className="absolute inset-[16.67%]" data-name="edit">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <g id="edit">
              <path d={svgPaths.p2ffb1a00} fill="var(--fill-0, #E5E9EC)" />
              <path d={svgPaths.p9e1dac0} fill="var(--fill-0, #E5E9EC)" />
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Flag" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Flag, Large=No">
        <div className="absolute inset-[8.33%_16.67%]" data-name="Combined Shape">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
            <path d={svgPaths.p10546580} fill="var(--fill-0, #E5E9EC)" id="Combined Shape" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Filter" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Filter, Large=No">
        <div className="absolute bottom-[16.67%] left-[8.33%] right-[8.33%] top-1/4" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 14">
            <path d={svgPaths.p22fd6000} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[19.125px] left-[calc(50%+0.12px)] top-[calc(50%+0.56px)] w-[20.247px]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20.2467 19.125">
            <path d={svgPaths.p39e0680} fill="var(--fill-0, #EEEEEE)" id="Vector" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Google Play" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Google Play, Large=No">
        <div className="absolute inset-[8.33%_8.33%_8.33%_12.5%]" data-name="Group">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19.9998">
            <g id="Group">
              <path clipRule="evenodd" d={svgPaths.p772d400} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Vector" />
              <path clipRule="evenodd" d={svgPaths.p2aeac200} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Vector_2" />
              <path clipRule="evenodd" d={svgPaths.p15e68580} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Vector_3" />
              <path clipRule="evenodd" d={svgPaths.p357e8480} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Vector_4" />
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Handle" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Handle, Large=No">
        <div className="absolute inset-[8.33%]" data-name="ico epg slider">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p2f6cc700} fill="var(--fill-0, #E5E9EC)" id="ico epg slider" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "EPG" && large === "No") {
    return (
      <div className={className || "relative"} data-name="Name=EPG, Large=No">
        <div className="absolute h-[15px] left-[2px] top-[4.5px] w-[20px]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 15">
            <path d={svgPaths.p1106d800} fill="var(--fill-0, #EEEEEE)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Bulb" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Bulb, Large=No">
        <div className="absolute inset-[8.33%_20.83%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 14 20">
            <path d={svgPaths.p80e7fb0} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Home" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Home, Large=No">
        <div className="absolute inset-[8.33%]" data-name="ico_home">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9998 19.9999">
            <path d={svgPaths.p3ea09880} fill="var(--fill-0, #E5E9EC)" id="ico_home" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Home Back" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Home Back, Large=No">
        <div className="absolute inset-[8.33%]" data-name="Vector 95 (Stroke)">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path clipRule="evenodd" d={svgPaths.p1aa6a900} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Vector 95 (Stroke)" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Link" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Link, Large=No">
        <div className="absolute inset-[8.33%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p457da00} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Power" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Power, Large=No">
        <div className="absolute inset-[12.5%_8.33%_8.33%_8.33%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9999 19">
            <path d={svgPaths.p215d90b0} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "List" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=List, Large=No">
        <div className="absolute inset-[20.83%_8.33%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 14">
            <path d={svgPaths.p3411d880} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "More" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=More, Large=No">
        <div className="absolute inset-[16.67%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <g id="Union">
              <path d={svgPaths.p30ffdd00} fill="#E5E9EC" />
              <path d={svgPaths.p2c815580} fill="#E5E9EC" />
              <path d={svgPaths.p18cb4ef0} fill="#E5E9EC" />
              <path d={svgPaths.p1a36f100} fill="#E5E9EC" />
              <path d={svgPaths.pb8dac00} fill="#E5E9EC" />
              <path d={svgPaths.pe20f800} fill="#E5E9EC" />
              <path d={svgPaths.p9776800} fill="#E5E9EC" />
              <path d={svgPaths.p38b42700} fill="#E5E9EC" />
              <path d={svgPaths.p1b0a6380} fill="#E5E9EC" />
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (name === "More Media" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=More Media, Large=No">
        <div className="absolute inset-[12.5%_4.17%]" data-name="ico_more_media">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18">
            <path d={svgPaths.p363b9c70} fill="var(--fill-0, #E5E9EC)" id="ico_more_media" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Movies" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Movies, Large=No">
        <div className="absolute inset-[8.33%_12.5%]" data-name="Frame">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
            <g clipPath="url(#clip0_3_29923)" id="Frame">
              <path d={svgPaths.p342a7e00} fill="var(--fill-0, #E5E9EC)" id="Subtract" />
            </g>
            <defs>
              <clipPath id="clip0_3_29923">
                <rect fill="white" height="20" width="18" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    );
  }
  if (name === "On Demand" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=On Demand, Large=No">
        <div className="absolute inset-[12.5%_8.33%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
            <path d={svgPaths.p23bda000} fill="var(--fill-0, #E5E9EC)" id="Subtract" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Placeholder" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Placeholder, Large=No">
        <div className="absolute inset-[8.33%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Record" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Record, Large=No">
        <div className="absolute inset-[8.33%]" data-name="ico_record_border">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p9e59200} fill="var(--fill-0, #E5E9EC)" id="ico_record_border" />
          </svg>
        </div>
        <div className="absolute left-[7px] size-[10px] top-[7px]">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <g id="Group 2155">
              <circle cx="5" cy="5" fill="var(--fill-0, #E5E9EC)" id="Ellipse" r="5" />
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (name === "PIP Expand" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=PIP Expand, Large=No">
        <div className="absolute bg-[#eee] inset-[58.3%_4.17%_12.53%_54.17%] rounded-[1px]" />
        <div className="absolute inset-[16.67%_8.33%]">
          <div className="absolute inset-[-6.25%_-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18">
              <path d={svgPaths.p3bbb1fe0} id="Rectangle 49" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-1/4 right-[58.33%] top-[33.33%]">
          <div className="absolute inset-[-25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
              <path d="M1 1V5M1 1H5M1 1L5 5" id="Vector 200" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Subscription" && large === "Yes") {
    return (
      <div className={className || "relative size-[48px]"} data-name="Name=Subscription, Large=Yes">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[42.2px] left-[calc(50%-0.3px)] top-[calc(50%+0.1px)] w-[43.4px]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 43.4004 42.2002">
            <g id="Union">
              <path clipRule="evenodd" d={svgPaths.p2d6e3880} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" />
              <path d={svgPaths.p1eee9180} fill="var(--fill-0, #E5E9EC)" />
              <path d={svgPaths.p25cc3a00} fill="var(--fill-0, #E5E9EC)" />
              <path d="M32 7H2V5H32V7Z" fill="var(--fill-0, #E5E9EC)" />
              <path d="M26 2H8V0H26V2Z" fill="var(--fill-0, #E5E9EC)" />
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Reorder_Channels" && large === "No") {
    return (
      <div className={className || "-translate-y-1/2 h-[24px] relative"} data-name="Name=Reorder_Channels, Large=No">
        <div className="absolute flex inset-[8.33%_12.5%_8.29%_17.45%] items-center justify-center">
          <div className="flex-none h-[16.812px] rotate-90 w-[20.011px]">
            <div className="relative size-full" data-name="Vector">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0115 16.812">
                <path d={svgPaths.p155d0680} fill="var(--fill-0, white)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Delete_Record" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Delete_Record, Large=No">
        <div className="absolute inset-[8.33%]" data-name="ico_record_border">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p9e59200} fill="var(--fill-0, #E5E9EC)" id="ico_record_border" />
          </svg>
        </div>
        <div className="absolute left-[7px] size-[10px] top-[7px]">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <g id="Group 2155">
              <path d={svgPaths.p372bb300} fill="var(--fill-0, #E5E9EC)" id="Subtract" />
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Series_Record" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Series_Record, Large=No">
        <div className="absolute inset-[8.33%]" data-name="ico_record_border">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p9e59200} fill="var(--fill-0, #E5E9EC)" id="ico_record_border" />
          </svg>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[10px] top-1/2" data-name="Ellipse">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <circle cx="5" cy="5" fill="var(--fill-0, #E5E9EC)" id="Ellipse" r="5" />
          </svg>
        </div>
        <div className="absolute inset-[12.49%_-8.33%_12.62%_-8.33%]">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 27.9996 17.9736">
            <g id="Group 2171">
              <path d={svgPaths.p22952280} fill="var(--fill-0, #EEEEEE)" id="Subtract" />
              <path d={svgPaths.pd5f7f80} fill="var(--fill-0, #EEEEEE)" id="Subtract_2" />
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Recorded" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Recorded, Large=No">
        <div className="absolute left-[2px] size-[20px] top-[2px]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p8bfe380} fill="var(--fill-0, #E5E9EC)" id="Subtract" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Series_Recorded" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Series_Recorded, Large=No">
        <div className="absolute left-[2px] size-[20px] top-[2px]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p8bfe380} fill="var(--fill-0, #E5E9EC)" id="Subtract" />
          </svg>
        </div>
        <div className="absolute inset-[12.49%_-8.33%_12.62%_-8.33%]">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 27.9996 17.9736">
            <g id="Group 2171">
              <path d={svgPaths.p22952280} fill="var(--fill-0, #EEEEEE)" id="Subtract" />
              <path d={svgPaths.pd5f7f80} fill="var(--fill-0, #EEEEEE)" id="Subtract_2" />
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Reorder" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Reorder, Large=No">
        <div className="absolute inset-[8.33%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p1dd0a380} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Search" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Search, Large=No">
        <div className="absolute inset-[8.33%]" data-name="ico_search">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9999 19.9999">
            <path d={svgPaths.p112fb6f0} fill="var(--fill-0, #E5E9EC)" id="ico_search" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Stats" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Stats, Large=No">
        <div className="absolute inset-[8.33%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p3c602880} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Series" && large === "No") {
    return (
      <div className={className || "h-[24px] relative w-[23.999px]"} data-name="Name=Series, Large=No">
        <div className="absolute inset-[12.5%_16.67%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9996 18">
            <path d={svgPaths.p21361d00} fill="var(--fill-0, #E5E9EC)" id="Subtract" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Settings" && large === "No") {
    return (
      <div className={className || "relative rounded-[3px] size-[24px]"} data-name="Name=Settings, Large=No">
        <div className="absolute inset-[8.33%_8.12%_8.33%_8.13%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1 20">
            <path d={svgPaths.p23dbff00} fill="var(--fill-0, #F4F9FF)" id="Vector" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Share" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Share, Large=No">
        <div className="absolute inset-[8.33%_16.67%]" data-name="ico_share">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
            <path d={svgPaths.p375b6300} fill="var(--fill-0, #E5E9EC)" id="ico_share" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Speach Bubble" && large === "No") {
    return (
      <div className={className || "h-[24.002px] relative w-[24px]"} data-name="Name=Speach Bubble, Large=No">
        {contained && (
          <div className="absolute inset-[12.5%_4.17%]" data-name="Contained">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18.0022">
              <path d={svgPaths.p3202280} fill="var(--fill-0, #E5E9EC)" id="Contained" />
            </svg>
          </div>
        )}
        {outlined && (
          <div className="absolute h-[18.046px] left-px top-[3px] w-[22.001px]" data-name="Outlined">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 22.001 18.0464">
              <path d={svgPaths.p3bc293c0} fill="var(--fill-0, #EEEEEE)" id="Outlined" />
            </svg>
          </div>
        )}
      </div>
    );
  }
  if (name === "Trash" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Trash, Large=No">
        <div className="absolute inset-[8.33%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p22f21000} fill="var(--fill-0, #E5E9EC)" id="Subtract" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "TV Program" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=TV Program, Large=No">
        <div className="absolute inset-[12.5%_4.17%]">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18">
            <g id="Group 2152">
              <path d={svgPaths.p26994c00} fill="var(--fill-0, #E5E9EC)" id="ico_tv" />
              <path d={svgPaths.p2adc6e00} fill="var(--fill-0, #E5E9EC)" id="Union" />
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Update" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Update, Large=No">
        <div className="absolute inset-[8.33%_5.66%_8.33%_5.71%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 21.271 20">
            <path d={svgPaths.p1b863b00} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Games" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Games, Large=No">
        <div className="absolute inset-[20.83%_8.33%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 14">
            <path d={svgPaths.p302ad00} fill="var(--fill-0, #E5E9EC)" id="Subtract" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Smile" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Smile, Large=No">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p1013bf00} fill="var(--fill-0, #E5E9EC)" id="Vector" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Image" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Image, Large=No">
        <div className="absolute inset-[12.5%_4.17%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18">
            <path d={svgPaths.p3153dd80} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Arrow Left" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Arrow Left, Large=No">
        <div className="absolute inset-[20.83%_41.67%_20.83%_33.33%]">
          <div className="absolute inset-[-7.14%_-16.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00002 16">
              <path d="M7 1.00002L1 8.00002L7 15" id="Vector 89" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Arrow Right" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Arrow Right, Large=No">
        <div className="absolute inset-[20.83%_33.33%_20.83%_41.67%]">
          <div className="absolute inset-[-7.14%_-16.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00002 16">
              <path d={svgPaths.p8794a0} id="Vector 89" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Arrow Up" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Arrow Up, Large=No">
        <div className="absolute inset-[33.33%_20.83%_41.67%_20.83%]">
          <div className="absolute inset-[-16.67%_-7.14%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 8.00002">
              <path d="M1.00002 7L8.00002 1L15 7" id="Vector 89" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Arrow Down" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Arrow Down, Large=No">
        <div className="absolute inset-[41.67%_20.83%_33.33%_20.83%]">
          <div className="absolute inset-[-16.67%_-7.14%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 8.00002">
              <path d={svgPaths.p3fbf3c00} id="Vector 89" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Arrow Left Small" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Arrow Left Small, Large=No">
        <div className="absolute inset-[29.17%_45.83%_29.17%_37.5%]">
          <div className="absolute inset-[-10%_-25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.00004 12.0001">
              <path d="M5 1.00004L1 6.00004L5 11" id="Vector 89" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Arrow Right Small" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Arrow Right Small, Large=No">
        <div className="absolute inset-[29.17%_37.5%_29.17%_45.83%]">
          <div className="absolute inset-[-10%_-25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.00004 12.0001">
              <path d={svgPaths.p543e880} id="Vector 89" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Double Arrow Left Small" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Double Arrow Left Small, Large=No">
        <div className="absolute bottom-1/4 left-[20.83%] right-1/4 top-1/4" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0006 12.0005">
            <path d={svgPaths.p32d7f280} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Double Arrow Right Small" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Double Arrow Right Small, Large=No">
        <div className="absolute bottom-1/4 left-1/4 right-[20.83%] top-1/4" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0006 12.0006">
            <path d={svgPaths.pff30b80} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Arrow Up Small" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Arrow Up Small, Large=No">
        <div className="absolute inset-[37.5%_29.17%_45.83%_29.17%]">
          <div className="absolute inset-[-25%_-10%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0001 6.00004">
              <path d="M1.00004 5L6.00004 1L11 5" id="Vector 89" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Arrow Down Small" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Arrow Down Small, Large=No">
        <div className="absolute inset-[45.83%_29.17%_37.5%_29.17%]">
          <div className="absolute inset-[-25%_-10%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0001 6.00004">
              <path d={svgPaths.p15d5ef00} id="Vector 89" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Drama" && large === "No") {
    return (
      <div className={className || "h-[23.998px] relative w-[24px]"} data-name="Name=Drama, Large=No">
        <div className="absolute inset-[8.33%_0_7.42%_0]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24.0002 20.2179">
            <path d={svgPaths.p260a3880} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Crime" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Crime, Large=No">
        <div className="absolute inset-[20.83%_8.33%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 14">
            <path d={svgPaths.p2818f980} fill="var(--fill-0, #E5E9EC)" id="Subtract" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Documentary" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Documentary, Large=No">
        <div className="absolute flex inset-[12.5%_8.33%] items-center justify-center">
          <div className="-scale-y-100 flex-none h-[18px] rotate-180 w-[20px]">
            <div className="relative size-full" data-name="Union">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
                <path d={svgPaths.p27909170} fill="var(--fill-0, #E5E9EC)" id="Union" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Sci-Fi" && large === "No") {
    return (
      <div className={className || "h-[24.001px] relative w-[24px]"} data-name="Name=Sci-Fi, Large=No">
        <div className="absolute inset-[8.33%_8.33%_10.17%_8.33%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19.5606">
            <path d={svgPaths.p11a1ad00} fill="var(--fill-0, #E5E9EC)" id="Vector" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Action" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Action, Large=No">
        <div className="absolute inset-[29.17%_0_30.83%_0]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 9.60059">
            <path d={svgPaths.p1aa8ce20} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Comedy" && large === "No") {
    return (
      <div className={className || "h-[24px] relative w-[23.997px]"} data-name="Name=Comedy, Large=No">
        <div className="absolute inset-[8.33%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9967 20">
            <path d={svgPaths.p2f7df500} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Like Filled" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Like Filled, Large=No">
        <div className="absolute inset-[12.5%_8.33%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9999 18">
            <path d={svgPaths.p7813600} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Like" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Like, Large=No">
        <div className="absolute inset-[12.5%_8.33%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9999 18">
            <g id="Union">
              <mask fill="white" id="path-1-inside-1_3_30358">
                <path d={svgPaths.p7813600} />
              </mask>
              <path d={svgPaths.p2ec68f00} fill="var(--stroke-0, #E5E9EC)" mask="url(#path-1-inside-1_3_30358)" />
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Dislike Filled" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Dislike Filled, Large=No">
        <div className="absolute flex inset-[12.5%_8.33%] items-center justify-center">
          <div className="-scale-y-100 flex-none h-[18px] w-[20px]">
            <div className="relative size-full" data-name="Union">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9999 18">
                <path d={svgPaths.p7813600} fill="var(--fill-0, #E5E9EC)" id="Union" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Dislike" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Dislike, Large=No">
        <div className="absolute flex inset-[12.5%_8.33%] items-center justify-center">
          <div className="-scale-y-100 flex-none h-[18px] w-[20px]">
            <div className="relative size-full" data-name="Union">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9999 18">
                <g id="Union">
                  <mask fill="white" id="path-1-inside-1_3_30358">
                    <path d={svgPaths.p7813600} />
                  </mask>
                  <path d={svgPaths.p2ec68f00} fill="var(--stroke-0, #E5E9EC)" mask="url(#path-1-inside-1_3_30358)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Cast" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Cast, Large=No">
        <div className="absolute inset-[12.5%_4.17%]" data-name="ico_cast">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18">
            <path clipRule="evenodd" d={svgPaths.p17267680} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="ico_cast" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Cast Available" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Cast Available, Large=No">
        <div className="absolute inset-[12.5%_4.17%]">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18">
            <g id="Group 2146">
              <path d={svgPaths.p1f7d3000} fill="var(--fill-0, #E5E9EC)" id="Combined Shape" opacity="0.7" />
              <path clipRule="evenodd" d={svgPaths.p3b257040} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="ico_cast_available" />
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Cast Connected" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Cast Connected, Large=No">
        <div className="absolute inset-[12.5%_4.17%]" data-name="ico_cast_connected">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18">
            <path clipRule="evenodd" d={svgPaths.p32454e80} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="ico_cast_connected" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Clock" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Clock, Large=No">
        <div className="absolute inset-[8.33%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p3173300} fill="var(--fill-0, #E5E9EC)" id="Subtract" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Alarm" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Alarm, Large=No">
        <div className="absolute inset-[4.17%_0]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9998 21.9999">
            <path d={svgPaths.p3377bf80} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Alarm Add" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Alarm Add, Large=No">
        <div className="absolute inset-[4.17%_0]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9998 21.9999">
            <path d={svgPaths.p390daa00} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Phone" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Phone, Large=No">
        <div className="absolute bottom-[8.33%] left-1/4 right-1/4 top-[8.33%]" data-name="ico_phone">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 12 20">
            <path d={svgPaths.pe737600} fill="var(--fill-0, #E5E9EC)" id="ico_phone" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Tablet" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Tablet, Large=No">
        <div className="absolute inset-[16.67%_8.33%]" data-name="ico_tablet">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
            <path d={svgPaths.p3a2aff0} fill="var(--fill-0, #E5E9EC)" id="ico_tablet" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Minus Circular Filled" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Minus Circular Filled, Large=No">
        <div className="absolute inset-[8.33%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p165c8000} fill="var(--fill-0, #E5E9EC)" id="Subtract" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Minus Circular" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Minus Circular, Large=No">
        <div className="absolute inset-[8.33%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p304e56c0} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Minus" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Minus, Large=No">
        <div className="absolute inset-[45.83%_12.5%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 18 2">
            <path d={svgPaths.p22fa500} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Notification New" && large === "No") {
    return (
      <div className={className || "relative rounded-[4px]"} data-name="Name=Notification New, Large=No">
        <Group className="absolute left-0 rounded-[4px] size-[24px] top-0" />
      </div>
    );
  }
  if (name === "Notification" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Notification, Large=No">
        <div className="absolute inset-[8.33%_16.67%]" data-name="ico_notification_available">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20.001">
            <path d={svgPaths.p254b0c00} fill="var(--fill-0, #E5E9EC)" id="ico_notification_available" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Notification Crossed" && large === "No") {
    return (
      <div className={className || "h-[24px] relative w-[23.996px]"} data-name="Name=Notification Crossed, Large=No">
        <div className="absolute inset-[8.33%_10.79%_8.33%_14.21%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9956 20.001">
            <path d={svgPaths.p14dfc380} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Plus Circular Filled" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Plus Circular Filled, Large=No">
        <div className="absolute inset-[8.33%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p2d22f500} fill="var(--fill-0, #E5E9EC)" id="Subtract" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Plus Circular" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Plus Circular, Large=No">
        <div className="absolute inset-[8.33%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p25550300} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Plus" && large === "No") {
    return (
      <div className={className || "relative"} data-name="Name=Plus, Large=No">
        <div className="absolute inset-[12.5%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.p12d4a800} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Sort Ascending" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Sort Ascending, Large=No">
        <div className="absolute flex inset-[16.67%_24.97%] items-center justify-center">
          <div className="flex-none h-[16px] rotate-180 w-[12.017px]">
            <div className="relative size-full" data-name="Union">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0158 16.0001">
                <path d={svgPaths.paae9b00} fill="var(--fill-0, #E5E9EC)" id="Union" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Sort Descending" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Sort Descending, Large=No">
        <div className="absolute inset-[16.67%_24.97%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0158 16.0001">
            <path d={svgPaths.p3fb08930} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Sort" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Sort, Large=No">
        <div className="absolute inset-[8.33%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0001 20">
            <path d={svgPaths.pafa5000} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Volume High" && large === "No") {
    return (
      <div className={className || "h-[24.004px] relative w-[24px]"} data-name="Name=Volume High, Large=No">
        <div className="absolute inset-[12.5%_8.33%]" data-name="ico_audio">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18.0039">
            <path d={svgPaths.p3f6c1280} fill="var(--fill-0, #E5E9EC)" id="ico_audio" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Volume Mute" && large === "No") {
    return (
      <div className={className || "h-[24.004px] relative w-[24px]"} data-name="Name=Volume Mute, Large=No">
        <div className="absolute inset-[12.5%_12.5%_12.5%_8.33%]" data-name="ico_audio_muted">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 18.9999 18.0039">
            <path d={svgPaths.p345f9300} fill="var(--fill-0, #E5E9EC)" id="ico_audio_muted" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Volume Low" && large === "No") {
    return (
      <div className={className || "h-[24.004px] relative w-[24px]"} data-name="Name=Volume Low, Large=No">
        <div className="absolute inset-[12.5%_16.67%]" data-name="ico_audio">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18.0039">
            <path d={svgPaths.p23481d00} fill="var(--fill-0, #E5E9EC)" id="ico_audio" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Bookmark" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Bookmark, Large=No">
        <div className="absolute inset-[8.33%_20.83%]" data-name="Bookmark (Ourlined)">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 14 20">
            <path clipRule="evenodd" d={svgPaths.p1397b200} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Bookmark (Ourlined)" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Bookmark Filled" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Bookmark Filled, Large=No">
        <div className="absolute inset-[8.33%_20.83%]" data-name="Bookmark (Ourlined)">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 14 20">
            <path d={svgPaths.p3e8b1980} fill="var(--fill-0, #E5E9EC)" id="Bookmark (Ourlined)" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Catchup" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Catchup, Large=No">
        <div className="absolute inset-[8.34%_12.33%_8.33%_12.33%]" data-name="ico_catchup">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0803 19.999">
            <path d={svgPaths.p9e63580} fill="var(--fill-0, #E5E9EC)" id="ico_catchup" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Catchup Crossed" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Catchup Crossed, Large=No">
        <div className="absolute inset-[8.34%_8.35%_8.34%_8.34%]" data-name="ico_catchup_crossed">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9956 19.9963">
            <path d={svgPaths.p33ec5200} fill="var(--fill-0, #E5E9EC)" id="ico_catchup_crossed" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Checkmark Circular Filled" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Checkmark Circular Filled, Large=No">
        <div className="absolute inset-[8.33%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p12a6c00} fill="var(--fill-0, #E5E9EC)" id="Subtract" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Checkmark Circular" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Checkmark Circular, Large=No">
        <div className="absolute inset-[8.33%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p2f242d80} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Checkmark" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Checkmark, Large=No">
        <div className="absolute inset-[29.17%_20.83%]">
          <div className="absolute inset-[-10%_-7.14%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 12">
              <path d={svgPaths.p1d021880} id="Vector 88" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "X" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=X, Large=No">
        <div className="absolute inset-[16.67%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9998 15.9998">
            <path d={svgPaths.p2e8b200} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "X Small" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=X Small, Large=No">
        <div className="absolute inset-1/4" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9998 11.9998">
            <path d={svgPaths.p3583bb00} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Eye" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Eye, Large=No">
        <div className="absolute bottom-1/4 left-[8.33%] right-[8.33%] top-1/4" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 12">
            <path d={svgPaths.p1adece80} fill="var(--fill-0, #E5E9EC)" id="Subtract" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Eye Crossed" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Eye Crossed, Large=No">
        <div className="absolute inset-[16.67%_8.33%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 15.9991">
            <path d={svgPaths.p2783da80} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Family" && large === "No") {
    return (
      <div className={className || "h-[24px] relative w-[24.002px]"} data-name="Name=Family, Large=No">
        <div className="absolute inset-[8.33%_7%_8.33%_4.17%]" data-name="ico_kids">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 21.3222 20">
            <path d={svgPaths.p7c9e130} fill="var(--fill-0, #E5E9EC)" id="ico_kids" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Kids" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Kids, Large=No">
        <div className="absolute inset-[8.33%_4.17%_12.5%_4.17%]" data-name="ico_kids">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 21.9999 19">
            <path d={svgPaths.p5a62500} fill="var(--fill-0, #E5E9EC)" id="ico_kids" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Subscription" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Subscription, Large=No">
        <div className="absolute inset-[0_0.71%_0_0]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 23.8299 24">
            <g id="Union">
              <path d="M2 4H18V6H2V4Z" fill="var(--fill-0, #EEEEEE)" />
              <path d="M4 0H16V2H4V0Z" fill="var(--fill-0, #EEEEEE)" />
              <path d={svgPaths.p36ef6e80} fill="var(--fill-0, #EEEEEE)" />
              <path d={svgPaths.p34befc80} fill="var(--fill-0, #EEEEEE)" />
              <path clipRule="evenodd" d={svgPaths.p2b526df0} fill="var(--fill-0, #EEEEEE)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Connected_tv" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Connected_tv, Large=No">
        <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
            <path d={svgPaths.p2b03dd00} fill="var(--fill-0, #E5E9EC)" id="Vector" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Subscribe" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Subscribe, Large=No">
        <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
            <path d={svgPaths.p2d2d2b00} fill="var(--fill-0, #E5E9EC)" id="Vector" />
          </svg>
        </div>
        <div className="absolute flex inset-[27.08%_33.33%_35.64%_32.8%] items-center justify-center">
          <div className="-scale-y-100 flex-none h-[8.947px] rotate-180 w-[8.128px]">
            <div className="relative size-full" data-name="ico_catchup">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 8.12773 8.94711">
                <path d={svgPaths.p29782300} fill="var(--fill-0, #E5E9EC)" id="ico_catchup" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Cellular" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Cellular, Large=No">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g clipPath="url(#clip0_3_32650)" id="network_check_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24 1">
            <path d={svgPaths.p1a4c1200} fill="var(--fill-0, #E5E9EC)" id="Vector" />
          </g>
          <defs>
            <clipPath id="clip0_3_32650">
              <rect fill="white" height="24" width="24" />
            </clipPath>
          </defs>
        </svg>
      </div>
    );
  }
  if (name === "STB" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=STB, Large=No">
        <div className="absolute inset-[12.5%_8.33%_20.83%_8.33%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
            <path d={svgPaths.p228ce8f0} fill="var(--fill-0, #E5E9EC)" id="Subtract" />
          </svg>
        </div>
        <div className="absolute bg-[#e5e9ec] h-[2px] left-[5px] rounded-bl-[1px] rounded-br-[1px] rounded-tl-[1px] top-[20px] w-[4px]" />
        <div className="absolute h-[5px] left-[10px] top-[18px] w-[13px]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 13 5">
            <path d={svgPaths.p3d0d9c80} fill="var(--fill-0, #E5E9EC)" id="Subtract" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Remote_back" && large === "No") {
    return (
      <div className={className || "relative"} data-name="Name=Remote_back, Large=No">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
            <g id="Ellipse 100">
              <circle cx="14" cy="14" fill="var(--fill-0, #E5E9EC)" fillOpacity="0.1" r="12" />
              <circle cx="14" cy="14" r="13" stroke="var(--stroke-0, #E5E9EC)" strokeOpacity="0.1" strokeWidth="2" />
            </g>
          </svg>
        </div>
        <div className="absolute inset-[16.67%_16.67%_20.83%_16.67%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16 15">
            <path d={svgPaths.pb1db200} fill="var(--fill-0, #E5E9EC)" id="Vector" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Remote_Play/Pause" && large === "No") {
    return (
      <div className={className || "relative"} data-name="Name=Remote_Play/Pause, Large=No">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
            <g id="Ellipse 100">
              <circle cx="14" cy="14" fill="var(--fill-0, #E5E9EC)" fillOpacity="0.1" r="12" />
              <circle cx="14" cy="14" r="13" stroke="var(--stroke-0, #E5E9EC)" strokeOpacity="0.1" strokeWidth="2" />
            </g>
          </svg>
        </div>
        <div className="absolute inset-[32.5%_20.83%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 14 8.4">
            <path d={svgPaths.p312c5380} fill="var(--fill-0, #E5E9EC)" id="Vector" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Remote_Previous" && large === "No") {
    return (
      <div className={className || "relative"} data-name="Name=Remote_Previous, Large=No">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
            <g id="Ellipse 100">
              <circle cx="14" cy="14" fill="var(--fill-0, #E5E9EC)" fillOpacity="0.1" r="12" />
              <circle cx="14" cy="14" r="13" stroke="var(--stroke-0, #E5E9EC)" strokeOpacity="0.1" strokeWidth="2" />
            </g>
          </svg>
        </div>
        <div className="absolute inset-[38.75%_4.86%_40.42%_6.25%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 21.3333 5">
            <g id="Union">
              <path d="M0 2.5L4.16667 5V0L0 2.5Z" fill="var(--fill-0, #E5E9EC)" />
              <path d="M5 2.5L9.16667 5V0L5 2.5Z" fill="var(--fill-0, #E5E9EC)" />
              <path d={svgPaths.p352da180} fill="var(--fill-0, #E5E9EC)" />
              <path d={svgPaths.p2df0e400} fill="var(--fill-0, #E5E9EC)" />
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Remote_REC" && large === "No") {
    return (
      <div className={className || "relative"} data-name="Name=Remote_REC, Large=No">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
            <g id="Ellipse 100">
              <circle cx="14" cy="14" fill="var(--fill-0, #E5E9EC)" fillOpacity="0.1" r="12" />
              <circle cx="14" cy="14" r="13" stroke="var(--stroke-0, #E5E9EC)" strokeOpacity="0.1" strokeWidth="2" />
            </g>
          </svg>
        </div>
        <div className="absolute inset-[37.5%_2.98%_37.17%_4.17%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 22.2848 6.07955">
            <g id="Vector">
              <path d={svgPaths.p17b82700} fill="#F20D1D" />
              <path d={svgPaths.p19d2d280} fill="var(--fill-0, white)" />
              <path d={svgPaths.p838240} fill="var(--fill-0, white)" />
              <path d={svgPaths.p8705b40} fill="var(--fill-0, white)" />
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Remote_EPG" && large === "No") {
    return (
      <div className={className || "relative"} data-name="Name=Remote_EPG, Large=No">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
            <g id="Ellipse 100">
              <circle cx="14" cy="14" fill="var(--fill-0, #E5E9EC)" fillOpacity="0.1" r="12" />
              <circle cx="14" cy="14" r="13" stroke="var(--stroke-0, #E5E9EC)" strokeOpacity="0.1" strokeWidth="2" />
            </g>
          </svg>
        </div>
        <div className="absolute inset-[37.93%_18.94%_37.17%_19.33%]" data-name="EPG">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8153 5.97727">
            <g id="EPG">
              <path d={svgPaths.p21f29400} fill="var(--fill-0, white)" />
              <path d={svgPaths.p2a0e4600} fill="var(--fill-0, white)" />
              <path d={svgPaths.p1582d00} fill="var(--fill-0, white)" />
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Remote_CH" && large === "No") {
    return (
      <div className={className || "relative"} data-name="Name=Remote_CH, Large=No">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
            <g id="Ellipse 100">
              <circle cx="14" cy="14" fill="var(--fill-0, #E5E9EC)" fillOpacity="0.1" r="12" />
              <circle cx="14" cy="14" r="13" stroke="var(--stroke-0, #E5E9EC)" strokeOpacity="0.1" strokeWidth="2" />
            </g>
          </svg>
        </div>
        <div className="absolute inset-[37.12%_7.18%_33.85%_6.25%]" data-name="CH+/-">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20.7763 6.96591">
            <g id="CH+/-">
              <path d={svgPaths.pf42ca00} fill="var(--fill-0, white)" />
              <path d={svgPaths.p3c884e80} fill="var(--fill-0, white)" />
              <path d={svgPaths.p1b57ef80} fill="var(--fill-0, white)" />
              <path d={svgPaths.p3edfdb00} fill="var(--fill-0, white)" />
              <path d={svgPaths.p125e3b00} fill="var(--fill-0, white)" />
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Remote_123" && large === "No") {
    return (
      <div className={className || "relative"} data-name="Name=Remote_123, Large=No">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
            <g id="Ellipse 100">
              <circle cx="14" cy="14" fill="var(--fill-0, #E5E9EC)" fillOpacity="0.1" r="12" />
              <circle cx="14" cy="14" r="13" stroke="var(--stroke-0, #E5E9EC)" strokeOpacity="0.1" strokeWidth="2" />
            </g>
          </svg>
        </div>
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.2] left-[calc(50%-10px)] not-italic text-[8px] text-white top-[calc(50%-5px)]">123...</p>
      </div>
    );
  }
  if (name === "Devices" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Devices, Large=No">
        <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
            <path d={svgPaths.p2a5123f0} fill="var(--fill-0, #F4F9FF)" id="Vector" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Cookies Policy" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Cookies Policy, Large=No">
        <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
            <path d={svgPaths.p1d9ab00} fill="var(--fill-0, #F4F9FF)" id="Vector" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Expand" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Expand, Large=No">
        <div className="absolute left-[4px] size-[16px] top-[4px]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path d={svgPaths.p38616500} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Collapse" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Collapse, Large=No">
        <div className="absolute inset-[16.67%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path d={svgPaths.p15f83180} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Heart Filled" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Heart Filled, Large=No">
        <div className="absolute inset-[16.67%_12.5%]" data-name="Union">
          <div className="absolute inset-[-6.25%_-5.56%_-8.92%_-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18.4278">
              <path d={svgPaths.p1bcd7700} fill="var(--fill-0, #E5E9EC)" id="Union" stroke="var(--stroke-0, #E5E9EC)" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Heart" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Heart, Large=No">
        <div className="absolute inset-[16.67%_12.5%]" data-name="Union">
          <div className="absolute inset-[-6.25%_-5.56%_-8.92%_-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18.4278">
              <path d={svgPaths.p1bcd7700} id="Union" stroke="var(--stroke-0, #E5E9EC)" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Info" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Info, Large=No">
        <div className="absolute inset-[8.33%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p50c9680} fill="var(--fill-0, #E5E9EC)" id="Subtract" />
          </svg>
        </div>
        <div className="absolute inset-[29.17%_45.83%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 2 10">
            <path d={svgPaths.p20a71180} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Exclamation Border" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Exclamation Border, Large=No">
        <div className="absolute inset-[8.33%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p50c9680} fill="var(--fill-0, #E5E9EC)" id="Subtract" />
          </svg>
        </div>
        <div className="absolute flex inset-[29.17%_45.83%] items-center justify-center">
          <div className="flex-none h-[10px] rotate-180 w-[2px]">
            <div className="relative size-full" data-name="Union">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 2 10">
                <path d={svgPaths.p20a71180} fill="var(--fill-0, #E5E9EC)" id="Union" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Question" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Question, Large=No">
        <div className="absolute inset-[8.33%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p50c9680} fill="var(--fill-0, #E5E9EC)" id="Subtract" />
          </svg>
        </div>
        <div className="absolute h-[10px] left-[9px] top-[7px] w-[6.6px]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 6.59961 10">
            <path d={svgPaths.p1bc70b00} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Info Filled" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Info Filled, Large=No">
        <div className="absolute inset-[8.33%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p31b12f20} fill="var(--fill-0, #E5E9EC)" id="Subtract" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Question Filled" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Question Filled, Large=No">
        <div className="absolute left-[2px] size-[20px] top-[2px]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p29756300} fill="var(--fill-0, #E5E9EC)" id="Subtract" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Password" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Password, Large=No">
        <div className="absolute h-[12px] left-[3.5px] top-[6px] w-[17px]" data-name="Vector">
          <div className="absolute inset-[-8.33%_-5.88%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 14">
              <path d={svgPaths.p2f5bb080} id="Vector" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Credit Card" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Credit Card, Large=No">
        <div className="absolute inset-[20.83%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-7.14%_-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
              <path d={svgPaths.p3da2740} id="Vector" stroke="var(--stroke-0, #E5E9EC)" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Locked" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Locked, Large=No">
        <div className="absolute inset-[8.33%_16.67%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
            <path d={svgPaths.p18be2620} fill="var(--fill-0, #E5E9EC)" id="Subtract" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Unlocked" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Unlocked, Large=No">
        <div className="absolute inset-[8.33%_16.67%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
            <path d={svgPaths.p7108800} fill="var(--fill-0, #E5E9EC)" id="Subtract" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Skip Backward" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Skip Backward, Large=No">
        <div className="absolute h-[18.159px] left-[3px] top-[2px] w-[19px]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 18.9999 18.1591">
            <path d={svgPaths.p25540100} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Skip Forward" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Skip Forward, Large=No">
        <div className="absolute flex inset-[2px_3px_3.84px_2px] items-center justify-center">
          <div className="-scale-y-100 flex-none h-[18.159px] rotate-180 w-[19px]">
            <div className="relative size-full" data-name="Union">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 18.9999 18.1591">
                <path d={svgPaths.p1cee4e00} fill="var(--fill-0, #E5E9EC)" id="Union" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Live 2" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Live 2, Large=No">
        <div className="absolute inset-[8.33%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p5a86200} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Email" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Email, Large=No">
        <div className="absolute inset-[20.83%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-7.14%_-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
              <path d={svgPaths.p8bea200} id="Vector" stroke="var(--stroke-0, #E5E9EC)" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Live" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Live, Large=No">
        <div className="absolute inset-[23.75%_8.35%_23.74%_8.35%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9932 12.6029">
            <path d={svgPaths.pf27b730} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
        <div className="absolute inset-[41.67%]" data-name="Ellipse">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <circle cx="2" cy="2" fill="var(--fill-0, #E5E9EC)" id="Ellipse" r="2" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Exit" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Exit, Large=No">
        <div className="absolute inset-[8.33%]" data-name="Combined Shape">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9999 20">
            <path d={svgPaths.p29f5e600} fill="var(--fill-0, #E5E9EC)" id="Combined Shape" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Enter" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Enter, Large=No">
        <div className="absolute inset-[8.33%]" data-name="Combined Shape">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.pee23900} fill="var(--fill-0, #E5E9EC)" id="Combined Shape" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Music Note" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Music Note, Large=No">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0004 20">
            <path d={svgPaths.p8aca500} fill="var(--fill-0, #E5E9EC)" id="Vector" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Music Mic" && large === "No") {
    return (
      <div className={className || "h-[24px] relative w-[23.999px]"} data-name="Name=Music Mic, Large=No">
        <div className="absolute inset-[8.33%_16.67%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9988 19.9999">
            <path d={svgPaths.p332f2a00} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Start Over" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Start Over, Large=No">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[27.187px] items-center justify-center left-[calc(50%-0.96px)] top-[calc(50%-0.41px)] w-[26.088px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
          <div className="-rotate-30 flex-none">
            <div className="h-[21px] relative w-[18px]" data-name="Vector">
              <div className="absolute inset-[0_0_0_0.26%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9528 21">
                  <path d={svgPaths.p10d72a80} fill="var(--fill-0, #E5E9EC)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Next" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Next, Large=No">
        <div className="absolute flex inset-[20.83%_8.33%] items-center justify-center">
          <div className="-scale-y-100 flex-none h-[14px] rotate-180 w-[20px]">
            <div className="relative size-full" data-name="Union">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 14.0003">
                <path d={svgPaths.p254eca00} fill="var(--fill-0, #E5E9EC)" id="Union" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Previous" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Previous, Large=No">
        <div className="absolute inset-[20.83%_8.33%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 14.0003">
            <path d={svgPaths.p254eca00} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "entertainemnt" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=entertainemnt, Large=No">
        <div className="absolute inset-[12.5%_8.33%_12.26%_8.33%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9996 18.0573">
            <g id="Union">
              <path clipRule="evenodd" d={svgPaths.p88e9800} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p2f82c900} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" />
              <path d={svgPaths.p2acfb800} fill="var(--fill-0, #E5E9EC)" />
              <path d={svgPaths.p378c880} fill="var(--fill-0, #E5E9EC)" />
              <path d={svgPaths.p3f837900} fill="var(--fill-0, #E5E9EC)" />
              <path d={svgPaths.pd0cbb80} fill="var(--fill-0, #E5E9EC)" />
              <path clipRule="evenodd" d={svgPaths.p29be8500} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Pause" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Pause, Large=No">
        <div className="absolute inset-[16.67%]" data-name="Combined Shape">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path clipRule="evenodd" d={svgPaths.p1e3fd640} fill="var(--fill-0, #EEEEEE)" fillRule="evenodd" id="Combined Shape" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Pause Circular" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Pause Circular, Large=No">
        <div className="absolute inset-[8.33%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p41f9580} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Play" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Play, Large=No">
        <div className="absolute inset-[4.17%_0_4.17%_16.67%]">
          <div className="absolute inset-[5.98%_10.75%_6.57%_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.8493 19.24">
              <path d={svgPaths.p23bad180} fill="var(--fill-0, #E5E9EC)" id="Vector 98" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Play Circular" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Play Circular, Large=No">
        <div className="absolute inset-[8.33%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p3b8483f0} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Route" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Route, Large=No">
        <div className="absolute inset-[4.17%_8.33%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22">
            <path d={svgPaths.p1bde6140} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Route Dashed" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Route Dashed, Large=No">
        <div className="absolute inset-[4.17%_8.33%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22">
            <path d={svgPaths.peb98100} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Radio Checked" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Radio Checked, Large=No">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Union">
            <mask fill="white" id="path-1-inside-1_3_32469">
              <path d={svgPaths.p1251bb00} />
            </mask>
            <path d={svgPaths.p1251bb00} fill="var(--fill-0, #E5E9EC)" />
            <path d={svgPaths.p33f54000} fill="var(--stroke-0, #E5E9EC)" mask="url(#path-1-inside-1_3_32469)" />
          </g>
        </svg>
      </div>
    );
  }
  if (name === "Radio" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Radio, Large=No">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" id="Ellipse 8" r="11" stroke="var(--stroke-0, #E5E9EC)" strokeWidth="2" />
        </svg>
      </div>
    );
  }
  if (name === "Forward" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Forward, Large=No">
        <div className="absolute inset-[29.17%_14.58%_29.17%_20.83%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 10.0004">
            <path d={svgPaths.p58e55f0} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Rewind" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Rewind, Large=No">
        <div className="absolute flex inset-[29.17%_20.83%_29.17%_14.58%] items-center justify-center">
          <div className="-scale-y-100 flex-none h-[10px] rotate-180 w-[15.5px]">
            <div className="relative size-full" data-name="Union">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 10.0004">
                <path d={svgPaths.pbf1eb00} fill="var(--fill-0, #E5E9EC)" id="Union" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Football" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Football, Large=No">
        <div className="absolute inset-[8.33%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p1ab08f0} fill="var(--fill-0, #E5E9EC)" id="Subtract" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Trophy" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Trophy, Large=No">
        <div className="absolute inset-[8.33%_8.34%_8.33%_8.33%]" data-name="ico sports">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9995 20">
            <path d={svgPaths.p23e41ef0} fill="var(--fill-0, #E5E9EC)" id="ico sports" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Star Filled" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Star Filled, Large=No">
        <div className="absolute inset-[4.17%_0_-4.17%_0]">
          <div className="absolute inset-[6.68%_8.59%_14.15%_8.59%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.8752 19.0007">
              <path d={svgPaths.p3ffc3400} fill="var(--fill-0, #E5E9EC)" id="Star 1" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Star" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Star, Large=No">
        <div className="absolute inset-[4.17%_0_-4.17%_0]">
          <div className="absolute inset-[6.68%_8.59%_14.15%_8.59%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.8752 19.0007">
              <path d={svgPaths.p23efc40} id="Star 1" stroke="var(--stroke-0, #E5E9EC)" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "User Group" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=User Group, Large=No">
        <div className="absolute inset-[8.33%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p1a0c8c0} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "User" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=User, Large=No">
        <div className="absolute inset-[8.33%]">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g id="Group 2147">
              <circle cx="10" cy="10" id="Ellipse 4" r="9.5" stroke="var(--stroke-0, #E5E9EC)" />
              <path d={svgPaths.pc9daa80} fill="var(--fill-0, #E5E9EC)" id="ico_user" />
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Camera" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Camera, Large=No">
        <div className="absolute bottom-1/4 left-[8.33%] right-[8.33%] top-1/4" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 12">
            <path d={svgPaths.p82ea6f0} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Camera Crossed" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Camera Crossed, Large=No">
        <div className="absolute inset-[12.5%_8.33%_20.83%_8.33%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 15.9998">
            <path d={svgPaths.p5a05480} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Mic" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Mic, Large=No">
        <div className="absolute inset-[8.33%_20.83%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 14 20">
            <path d={svgPaths.p1bf36bc0} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Mic Crossed" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Mic Crossed, Large=No">
        <div className="absolute inset-[8.33%_16.67%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9998 20">
            <path d={svgPaths.p18f5db30} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "PiP" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=PiP, Large=No">
        <div className="absolute inset-[12.5%_4.17%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18">
            <path d={svgPaths.p3fbc6680} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "TV" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=TV, Large=No">
        <div className="absolute inset-[12.5%_4.17%]" data-name="ico_tv">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18">
            <path d={svgPaths.p26994c00} fill="var(--fill-0, #E5E9EC)" id="ico_tv" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "EPG-Mini" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=EPG-Mini, Large=No">
        <div className="absolute h-[18px] left-px top-[3px] w-[22px]" data-name="ico-epg_mini">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18">
            <g id="ico-epg_mini">
              <path d={svgPaths.pe26e800} fill="var(--fill-0, #E5E9EC)" />
              <path d={svgPaths.p3c844180} fill="var(--fill-0, #E5E9EC)" />
              <path d={svgPaths.p2c0e500} fill="var(--fill-0, #E5E9EC)" />
              <path clipRule="evenodd" d={svgPaths.p2ecc0e80} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" />
              <path d={svgPaths.pf9f4680} fill="var(--fill-0, #E5E9EC)" />
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Placeholder" && large === "Yes") {
    return (
      <div className={className || "relative size-[48px]"} data-name="Name=Placeholder, Large=Yes">
        <div className="absolute inset-[8.33%]" data-name="Oval">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
            <path d={svgPaths.p3c62b600} id="Oval" stroke="var(--stroke-0, #E5E9EC)" strokeWidth="2" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "18+" && large === "Yes") {
    return (
      <div className={className || "relative size-[48px]"} data-name="Name=18+, Large=Yes">
        <div className="absolute inset-[8.33%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
            <path d={svgPaths.p1579c900} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Checkmark Circular" && large === "Yes") {
    return (
      <div className={className || "relative size-[48px]"} data-name="Name=Checkmark Circular, Large=Yes">
        <div className="absolute inset-[8.33%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
            <path d={svgPaths.p281a1f80} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Wifi No Signal" && large === "Yes") {
    return (
      <div className={className || "relative size-[48px]"} data-name="Name=Wifi No Signal, Large=Yes">
        <div className="absolute inset-[6.25%_0]" data-name="Frame">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 48 42">
            <g id="Frame">
              <path d={svgPaths.p39b50080} fill="var(--fill-0, #E5E9EC)" id="Combined Shape" opacity="0.3" />
              <path d={svgPaths.p28f42500} fill="var(--fill-0, #E5E9EC)" id="Shape" />
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Manage" && large === "Yes") {
    return (
      <div className={className || "relative size-[48px]"} data-name="Name=Manage, Large=Yes">
        <div className="absolute bottom-[8.33%] left-[12.5%] right-[8.33%] top-1/4" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 38 32">
            <path clipRule="evenodd" d={svgPaths.p239ea080} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Wifi Poor Signal" && large === "Yes") {
    return (
      <div className={className || "relative size-[48px]"} data-name="Name=Wifi Poor Signal, Large=Yes">
        <div className="absolute inset-[6.25%_0]" data-name="Frame">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 48 42">
            <g id="Frame">
              <path d={svgPaths.p28bfa180} fill="var(--fill-0, #EEEEEE)" id="Combined Shape" opacity="0.3" />
              <g id="Shape" />
              <path d={svgPaths.p38d17700} fill="var(--fill-0, #D9D9D9)" id="Intersect" />
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Locked" && large === "Yes") {
    return (
      <div className={className || "relative size-[48px]"} data-name="Name=Locked, Large=Yes">
        <div className="absolute inset-[8.33%_16.67%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 40">
            <path d={svgPaths.p21641680} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Image" && large === "Yes") {
    return (
      <div className={className || "relative size-[48px]"} data-name="Name=Image, Large=Yes">
        <div className="absolute inset-[12.5%_4.17%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 44 36">
            <path d={svgPaths.p3d7d5280} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Pencil" && large === "Yes") {
    return (
      <div className={className || "relative size-[48px]"} data-name="Name=Pencil, Large=Yes">
        <div className="absolute inset-[16.67%]" data-name="edit">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <path d={svgPaths.p3d42be00} id="edit" stroke="var(--stroke-0, #E5E9EC)" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "No Video" && large === "Yes") {
    return (
      <div className={className || "relative size-[48px]"} data-name="Name=No Video, Large=Yes">
        <div className="absolute inset-[8.33%]" data-name="Icon">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 39.9998 39.9998">
            <path d={svgPaths.p1a059c00} fill="var(--fill-0, #E5E9EC)" id="Icon" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Info" && large === "Yes") {
    return (
      <div className={className || "relative size-[48px]"} data-name="Name=Info, Large=Yes">
        <div className="absolute inset-[8.33%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
            <path d={svgPaths.p249fcef2} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Info Filled" && large === "Yes") {
    return (
      <div className={className || "relative size-[48px]"} data-name="Name=Info Filled, Large=Yes">
        <div className="absolute inset-[8.33%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
            <path d={svgPaths.p3953ad00} fill="var(--fill-0, #E5E9EC)" id="Subtract" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Skip Forward" && large === "Yes") {
    return (
      <div className={className || "relative size-[48px]"} data-name="Name=Skip Forward, Large=Yes">
        <div className="absolute flex h-[37.24px] items-center justify-center left-[5px] top-[5px] w-[39px]">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="h-[37.24px] relative w-[39px]" data-name="Union">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 38.9997 37.2402">
                <path d={svgPaths.p2006ad00} fill="var(--fill-0, #E5E9EC)" id="Union" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Skip Backward" && large === "Yes") {
    return (
      <div className={className || "relative size-[48px]"} data-name="Name=Skip Backward, Large=Yes">
        <div className="absolute h-[37.24px] left-[4px] top-[5px] w-[39px]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 38.9997 37.2402">
            <path d={svgPaths.p111a4d70} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Live 2" && large === "Yes") {
    return (
      <div className={className || "relative size-[48px]"} data-name="Name=Live 2, Large=Yes">
        <div className="absolute inset-[8.33%_9.38%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 39 40.0002">
            <path d={svgPaths.pd2c500} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Pause Circular" && large === "Yes") {
    return (
      <div className={className || "relative size-[48px]"} data-name="Name=Pause Circular, Large=Yes">
        <div className="absolute inset-[8.33%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
            <path d={svgPaths.p34db2f80} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Pause" && large === "Yes") {
    return (
      <div className={className || "relative size-[48px]"} data-name="Name=Pause, Large=Yes">
        <div className="absolute inset-[8.33%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
            <path clipRule="evenodd" d={svgPaths.p693a700} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Play" && large === "Yes") {
    return (
      <div className={className || "relative size-[48px]"} data-name="Name=Play, Large=Yes">
        <div className="absolute inset-[4.17%_0_4.17%_16.67%]">
          <div className="absolute inset-[5.98%_10.75%_6.57%_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.6987 38.4799">
              <path d={svgPaths.p305c0500} fill="var(--fill-0, #E5E9EC)" id="Vector 98" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Play Circular" && large === "Yes") {
    return (
      <div className={className || "relative size-[48px]"} data-name="Name=Play Circular, Large=Yes">
        <div className="absolute inset-[8.33%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
            <path d={svgPaths.p296f3500} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Antenna" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Antenna, Large=No">
        <div className="absolute h-[18.299px] left-[2px] top-[2.7px] w-[19.993px]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9932 18.2992">
            <path d={svgPaths.p12112300} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Satellite" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Satellite, Large=No">
        <div className="absolute left-[5.35px] size-[16.653px] top-[5.35px]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6531 16.6531">
            <path d={svgPaths.p1ebbdc00} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
        <div className="absolute left-[3px] size-[17px] top-[3px]">
          <div className="absolute inset-[-5.88%_31.18%_31.18%_-5.88%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7002 12.7002">
              <path d={svgPaths.pe9dcf40} id="Ellipse 93" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute left-[7px] size-[9px] top-[7px]">
          <div className="absolute inset-[-11.11%_25.95%_25.95%_-11.11%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.66493 7.66493">
              <path d={svgPaths.p283df280} id="Ellipse 94" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Globe" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Globe, Large=No">
        <div className="absolute inset-[8.33%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p50c9680} fill="var(--fill-0, #E5E9EC)" id="Subtract" />
          </svg>
        </div>
        <div className="absolute h-0 left-[4px] top-[9px] w-[16px]">
          <div className="absolute inset-[-1px_-6.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 2">
              <path d="M1 1H17" id="Vector 138" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute flex h-[17px] items-center justify-center left-[14px] top-[3.5px] w-[2px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
          <div className="flex-none rotate-90">
            <div className="h-[2px] relative w-[17px]">
              <div className="absolute inset-[-50%_-5.88%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.0001 4.00004">
                  <path d={svgPaths.p1200ec80} id="Vector 140" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-[17px] items-center justify-center left-[8px] top-[3.5px] w-[2px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
          <div className="-scale-y-100 flex-none rotate-90">
            <div className="h-[2px] relative w-[17px]">
              <div className="absolute inset-[-50%_-5.88%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.0001 4.00004">
                  <path d={svgPaths.p1200ec80} id="Vector 141" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-0 left-[4px] top-[15px] w-[16px]">
          <div className="absolute inset-[-1px_-6.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 2">
              <path d="M1 1H17" id="Vector 138" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Cable TV" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Cable TV, Large=No">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.p1ce2d500} fill="var(--stroke-0, #E5E9EC)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Satisfied" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Satisfied, Large=No">
        <div className="absolute left-[7px] size-[10px] top-[7px]">
          <div className="absolute inset-[75.36%_4.64%_-10%_4.64%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.07107 3.46447">
              <path d={svgPaths.p35437580} id="Ellipse 95" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute h-0 left-[8.5px] top-[9.5px] w-[0.01px]">
          <div className="absolute inset-[-1.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.01 3">
              <path d="M1.5 1.5H1.51" id="Vector 143" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeWidth="3" />
            </svg>
          </div>
        </div>
        <div className="absolute h-0 left-[15.5px] top-[9.5px] w-[0.01px]">
          <div className="absolute inset-[-1.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.01 3">
              <path d="M1.5 1.5H1.51" id="Vector 143" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeWidth="3" />
            </svg>
          </div>
        </div>
        <div className="absolute left-[3px] size-[18px] top-[3px]">
          <div className="absolute inset-[-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <circle cx="10" cy="10" id="Ellipse 96" r="9" stroke="var(--stroke-0, #E5E9EC)" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Somewhat Satisfied" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Somewhat Satisfied, Large=No">
        <div className="absolute inset-[8.33%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p50c9680} fill="var(--fill-0, #E5E9EC)" id="Subtract" />
          </svg>
        </div>
        <div className="absolute inset-[33.33%_58.33%_54.17%_29.17%]" data-name="ico info">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p3a39ba00} fill="var(--fill-0, #E5E9EC)" id="ico info" />
          </svg>
        </div>
        <div className="absolute inset-[33.33%_29.17%_54.17%_58.33%]" data-name="ico info">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
            <path d={svgPaths.p3a39ba00} fill="var(--fill-0, #E5E9EC)" id="ico info" />
          </svg>
        </div>
        <div className="absolute left-[7px] size-[10px] top-[6px]">
          <div className="absolute inset-[83.3%_15%_-10%_15%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.00033 2.67004">
              <path d={svgPaths.p13851340} id="Ellipse 95" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute h-0 left-[8.5px] top-[9.5px] w-[0.01px]">
          <div className="absolute inset-[-1.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.01 3">
              <path d="M1.5 1.5H1.51" id="Vector 143" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeWidth="3" />
            </svg>
          </div>
        </div>
        <div className="absolute h-0 left-[15.5px] top-[9.5px] w-[0.01px]">
          <div className="absolute inset-[-1.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.01 3">
              <path d="M1.5 1.5H1.51" id="Vector 143" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeWidth="3" />
            </svg>
          </div>
        </div>
        <div className="absolute left-[3px] size-[18px] top-[3px]">
          <div className="absolute inset-[-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <circle cx="10" cy="10" id="Ellipse 96" r="9" stroke="var(--stroke-0, #E5E9EC)" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Dissatisfied" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Dissatisfied, Large=No">
        <div className="absolute h-0 left-[8.5px] top-[9.5px] w-[0.01px]">
          <div className="absolute inset-[-1.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.01 3">
              <path d="M1.5 1.5H1.51" id="Vector 143" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeWidth="3" />
            </svg>
          </div>
        </div>
        <div className="absolute h-0 left-[15.5px] top-[9.5px] w-[0.01px]">
          <div className="absolute inset-[-1.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.01 3">
              <path d="M1.5 1.5H1.51" id="Vector 143" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeWidth="3" />
            </svg>
          </div>
        </div>
        <div className="absolute left-[7px] size-[10px] top-[14px]">
          <div className="absolute inset-[-10%_4.64%_75.36%_4.64%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.07107 3.46447">
              <path d={svgPaths.p2e9f7ec0} id="Ellipse 95" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute left-[3px] size-[18px] top-[3px]">
          <div className="absolute inset-[-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <circle cx="10" cy="10" id="Ellipse 96" r="9" stroke="var(--stroke-0, #E5E9EC)" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Somewhat Dissatisfied" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Somewhat Dissatisfied, Large=No">
        <div className="absolute left-[7px] size-[10px] top-[15px]">
          <div className="absolute inset-[-10%_15%_83.3%_15%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.00033 2.67004">
              <path d={svgPaths.p17aaac00} id="Ellipse 95" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute h-0 left-[8.5px] top-[9.5px] w-[0.01px]">
          <div className="absolute inset-[-1.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.01 3">
              <path d="M1.5 1.5H1.51" id="Vector 143" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeWidth="3" />
            </svg>
          </div>
        </div>
        <div className="absolute h-0 left-[15.5px] top-[9.5px] w-[0.01px]">
          <div className="absolute inset-[-1.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.01 3">
              <path d="M1.5 1.5H1.51" id="Vector 143" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeWidth="3" />
            </svg>
          </div>
        </div>
        <div className="absolute left-[3px] size-[18px] top-[3px]">
          <div className="absolute inset-[-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <circle cx="10" cy="10" id="Ellipse 96" r="9" stroke="var(--stroke-0, #E5E9EC)" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Download Progress" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Download Progress, Large=No">
        <div className="absolute left-[3px] size-[18px] top-[3px]">
          <div className="absolute inset-[-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <circle cx="10" cy="10" id="Ellipse 96" r="9" stroke="var(--stroke-0, #E5E9EC)" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute left-[3px] size-[18px] top-[3px]">
          <div className="absolute bottom-[14.64%] left-1/2 right-0 top-0">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 15.364">
              <path d={svgPaths.p2200da80} fill="var(--fill-0, #E5E9EC)" id="Ellipse 98" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "History" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=History, Large=No">
        <div className="absolute inset-[8.33%_12.33%_8.33%_12.34%]" data-name="ico_catchup">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0796 20">
            <path clipRule="evenodd" d={svgPaths.p269a1700} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="ico_catchup" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Ok With" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Ok With, Large=No">
        <div className="absolute h-0 left-[9px] top-[15px] w-[6px]">
          <div className="absolute inset-[-1px_-16.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 2">
              <path d="M1 1H7" id="Vector 142" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute h-0 left-[8.5px] top-[9.5px] w-[0.01px]">
          <div className="absolute inset-[-1.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.01 3">
              <path d="M1.5 1.5H1.51" id="Vector 143" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeWidth="3" />
            </svg>
          </div>
        </div>
        <div className="absolute h-0 left-[15.5px] top-[9.5px] w-[0.01px]">
          <div className="absolute inset-[-1.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.01 3">
              <path d="M1.5 1.5H1.51" id="Vector 143" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeWidth="3" />
            </svg>
          </div>
        </div>
        <div className="absolute left-[3px] size-[18px] top-[3px]">
          <div className="absolute inset-[-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <circle cx="10" cy="10" id="Ellipse 96" r="9" stroke="var(--stroke-0, #E5E9EC)" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Exclamation" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Exclamation, Large=No">
        <div className="absolute flex inset-[16.67%_45.83%] items-center justify-center">
          <div className="flex-none h-[16px] rotate-180 w-[2px]">
            <div className="relative size-full" data-name="Union">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 2 16">
                <path d={svgPaths.p29052e00} fill="var(--fill-0, #E5E9EC)" id="Union" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Join Now" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Join Now, Large=No">
        <div className="absolute h-[18px] left-[4px] top-[3px] w-[17px]" data-name="ico-join_now">
          <div className="absolute inset-[-5.56%_-5.88%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 20">
              <path d={svgPaths.p3787e600} id="ico-join_now" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Light Mode" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Light Mode, Large=No">
        <div className="absolute inset-[12.5%]" data-name="ico-light_mode">
          <div className="absolute inset-[-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.p2f4bfe80} id="ico-light_mode" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Dark Mode" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Dark Mode, Large=No">
        <div className="absolute inset-[7.86%_7.86%_8.33%_8.33%]" data-name="ico-dark_mode">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1138 20.1138">
            <g id="ico-dark_mode">
              <path clipRule="evenodd" d={svgPaths.p17fb9500} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" />
              <path d={svgPaths.p1eaabd00} fill="var(--fill-0, #E5E9EC)" />
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Brightness" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Brightness, Large=No">
        <div className="absolute inset-[8.33%]" data-name="ico-brightness">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g id="ico-brightness">
              <path d={svgPaths.p30159680} fill="var(--fill-0, #E5E9EC)" />
              <path d={svgPaths.p2f321780} fill="var(--fill-0, #E5E9EC)" />
              <path d={svgPaths.p20614100} fill="var(--fill-0, #E5E9EC)" />
              <path d={svgPaths.p1fea1280} fill="var(--fill-0, #E5E9EC)" />
              <path d={svgPaths.p2ff8dc00} fill="var(--fill-0, #E5E9EC)" />
              <path d={svgPaths.p13d27a00} fill="var(--fill-0, #E5E9EC)" />
              <path d={svgPaths.p1bf37c00} fill="var(--fill-0, #E5E9EC)" />
              <path d={svgPaths.p2b007300} fill="var(--fill-0, #E5E9EC)" />
              <path clipRule="evenodd" d={svgPaths.p1549ad00} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (name === "PiP Top R" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=PiP Top R, Large=No">
        <div className="absolute inset-[12.5%_4.17%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18">
            <path d={svgPaths.p8f79700} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "PiP Btm L" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=PiP Btm L, Large=No">
        <div className="absolute inset-[12.5%_4.17%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18">
            <path d={svgPaths.p3c89c680} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "PiP Top L" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=PiP Top L, Large=No">
        <div className="absolute inset-[12.5%_4.17%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18">
            <path d={svgPaths.p7fe1a00} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Present" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Present, Large=No">
        <div className="absolute flex h-[14px] items-center justify-center left-[12px] top-[7px] w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.5" } as React.CSSProperties}>
          <div className="-rotate-90 flex-none">
            <div className="h-0 relative w-[14px]">
              <div className="absolute inset-[-1px_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 2">
                  <path d="M0 1L14 1" id="Line 2" stroke="var(--stroke-0, #E5E9EC)" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[19.983px] left-px top-[2.02px] w-[22px]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 22 19.9832">
            <path d={svgPaths.p2026df00} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Drag" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Drag, Large=No">
        <div className="absolute left-[5px] size-[14px] top-[5px]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p385f9700} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "On air" && large === "No") {
    return (
      <div className={className || "relative"} data-name="Name=On air, Large=No">
        <OnAirAnimation className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[14px] top-1/2" />
      </div>
    );
  }
  if (name === "Drag_active" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Drag_active, Large=No">
        <div className="absolute h-[20.236px] left-[5px] top-[1.88px] w-[14.001px]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0005 20.2363">
            <path d={svgPaths.p188bb1f0} fill="var(--fill-0, #E5E9EC)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "network_wifi" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=network_wifi, Large=No">
        <div className="absolute inset-[16.67%_0_12.5%_0]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 17">
            <path d={svgPaths.pd724280} fill="var(--fill-0, #E5E9EC)" id="Vector" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "desktop" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=desktop, Large=No">
        <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
            <path d={svgPaths.p9482600} fill="var(--fill-0, #E5E9EC)" id="Vector" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "settings_brightness" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=settings_brightness, Large=No">
        <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
            <path d={svgPaths.p3139d880} fill="var(--fill-0, #E5E9EC)" id="Vector" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "remote" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=remote, Large=No">
        <div className="absolute inset-[0_17.71%_4.17%_17.5%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 15.55 23">
            <path d={svgPaths.p2d91f580} fill="var(--fill-0, #E5E9EC)" id="Vector" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "tv" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=tv, Large=No">
        <div className="absolute inset-[12.5%_8.33%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
            <path d={svgPaths.p2d2d2b00} fill="var(--fill-0, #E5E9EC)" id="Vector" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "tv_remote" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=tv_remote, Large=No">
        <div className="absolute inset-[4.17%_29.17%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 10 22">
            <path d={svgPaths.p2592af00} fill="var(--fill-0, #E5E9EC)" id="Vector" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "accounts" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=accounts, Large=No">
        <div className="absolute inset-[16.67%_4.17%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 22 16">
            <path d={svgPaths.p132b1600} fill="var(--fill-0, #E5E9EC)" id="Vector" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "restart" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=restart, Large=No">
        <div className="absolute inset-[10.42%_16.67%_12.71%_16.67%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18.45">
            <path d={svgPaths.p3b96d00} fill="var(--fill-0, #E5E9EC)" id="Vector" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "accessibility" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=accessibility, Large=No">
        <div className="absolute inset-[0_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 18 24">
            <path d={svgPaths.p1a92ab00} fill="var(--fill-0, #E5E9EC)" id="Vector" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Android Phone" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Android Phone, Large=No">
        <div className="absolute inset-[4.17%_20.83%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 14 22">
            <path d={svgPaths.pf20bd00} fill="var(--fill-0, #EEEEEE)" id="Vector" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Android TV" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Android TV, Large=No">
        <div className="absolute inset-[8.33%_8.33%_12.12%_8.33%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19.0909">
            <path d={svgPaths.p19c1a780} fill="var(--fill-0, #EEEEEE)" id="Vector" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "iPhone" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=iPhone, Large=No">
        <div className="absolute bottom-[8.33%] left-1/4 right-1/4 top-[8.33%]" data-name="ico_phone">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 12 20">
            <path d={svgPaths.p384c7740} fill="var(--fill-0, #EEEEEE)" id="ico_phone" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Recording OnGoing" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Recording OnGoing, Large=No">
        <div className="absolute inset-[8.33%]" data-name="ico_record_border">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p8bfe380} fill="var(--fill-0, #EEEEEE)" id="ico_record_border" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "mic_default" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=mic_default, Large=No">
        <div className="absolute inset-[8.33%_20.83%_12.5%_20.83%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 14 19">
            <path d={svgPaths.p17652a80} fill="var(--fill-0, #E5E9EC)" id="Vector" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "mic_active" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=mic_active, Large=No">
        <div className="absolute inset-[8.33%_20.83%_12.5%_20.83%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 14 19">
            <path d={svgPaths.p10382e00} fill="var(--fill-0, #E5E9EC)" id="Vector" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Forward inactive" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Forward inactive, Large=No">
        <div className="absolute inset-[29.17%_14.58%_29.17%_20.83%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 10.0004">
            <path d={svgPaths.p2b5bfc00} fill="var(--fill-0, #E5E9EC)" id="Subtract" />
          </svg>
        </div>
        <div className="absolute bottom-[20.83%] flex items-center justify-center left-[16.67%] right-1/4 top-[20.83%]">
          <div className="flex-none rotate-90 size-[14px]">
            <div className="relative size-full">
              <div className="absolute inset-[-7.14%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <path d="M1 15L15 1" id="Vector 87" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Back&Forward inactive" && large === "Yes") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Back&Forward inactive, Large=Yes">
        <div className="absolute inset-[29.17%_-22.92%_29.17%_-25%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 35.5 10.0004">
            <path d={svgPaths.p12689870} fill="var(--fill-0, #E5E9EC)" id="Subtract" />
          </svg>
        </div>
        <div className="absolute bottom-[20.83%] flex items-center justify-center left-[16.67%] right-1/4 top-[20.83%]">
          <div className="flex-none rotate-90 size-[14px]">
            <div className="relative size-full">
              <div className="absolute inset-[-7.14%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <path d="M1 15L15 1" id="Vector 87" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Back&Forward inactive" && large === "No") {
    return (
      <div className={className || "relative"} data-name="Name=Back&Forward inactive, Large=No">
        <div className="absolute inset-[27.46%_0]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 10.8169">
            <g id="Vector">
              <path d={svgPaths.p3d8035f0} fill="var(--fill-0, #E5E9EC)" />
              <path d={svgPaths.p317db300} fill="var(--fill-0, #E5E9EC)" />
              <path clipRule="evenodd" d={svgPaths.p39317780} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (name === "password" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=password, Large=No">
        <div className="absolute inset-[29.17%_4.17%_20.83%_4.17%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 22 12">
            <path d={svgPaths.p30e58680} fill="var(--fill-0, #E5E9EC)" id="Vector" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "lock" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=lock, Large=No">
        <div className="absolute inset-[4.17%_16.67%_8.33%_16.67%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16 21">
            <path d={svgPaths.p117cb00} fill="var(--fill-0, #E5E9EC)" id="Vector" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Chevron" && large === "up") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Chevron, Large=up">
        <div className="absolute inset-[33.33%_20.82%_41.67%_20.85%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9993 6.00024">
            <path d={svgPaths.p1f3ba600} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Chevron" && large === "down") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Chevron, Large=down">
        <div className="absolute inset-[41.67%_20.81%_33.33%_20.85%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0003 5.99991">
            <path d={svgPaths.p3673f000} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "All Episodes" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=All Episodes, Large=No">
        <div className="absolute flex inset-[16.67%_8.33%] items-center justify-center">
          <div className="-scale-y-100 flex-none h-[16px] rotate-180 w-[20px]">
            {contained && (
              <div className="relative size-full" data-name="ico_more_media">
                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
                  <path d={svgPaths.pb437580} fill="var(--fill-0, #E5E9EC)" id="ico_more_media" />
                </svg>
              </div>
            )}
          </div>
        </div>
        {outlined && (
          <div className="absolute inset-[10.42%_0_10.41%_0]" data-name="Outlined">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 18.999">
              <path d={svgPaths.peb64400} fill="var(--fill-0, #E5E9EC)" id="Outlined" />
            </svg>
          </div>
        )}
      </div>
    );
  }
  if (name === "system icons" && large === "set reminder") {
    return (
      <div className={className || "relative"} data-name="Name=system icons, Large=set reminder">
        <div className="absolute inset-[0_-5.83%_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.3997 24.0004">
            <g id="system icons / date&time">
              <path d={svgPaths.p115af500} fill="var(--fill-0, #EEEEEE)" id="Subtract" opacity="0.5" />
              <path d={svgPaths.p27d39400} fill="var(--fill-0, #EEEEEE)" id="Union" />
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (name === "system icons" && large === "date&time") {
    return (
      <div className={className || "relative"} data-name="Name=system icons, Large=date&time">
        <div className="absolute inset-[8.33%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p3c38df00} fill="var(--fill-0, #EEEEEE)" id="Subtract" opacity="0.5" />
          </svg>
        </div>
        <div className="absolute inset-[41.67%_0_0_41.67%]" data-name="Subtract (Stroke)">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path clipRule="evenodd" d={svgPaths.p2dcc8200} fill="var(--fill-0, #EEEEEE)" fillRule="evenodd" id="Subtract (Stroke)" />
          </svg>
        </div>
        <div className="absolute inset-[57.5%_16.04%_16.04%_67.92%]" data-name="Vector (Stroke)">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 3.85 6.35">
            <path clipRule="evenodd" d={svgPaths.p33bf1400} fill="var(--fill-0, #F5F5F7)" fillRule="evenodd" id="Vector (Stroke)" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Scheduled Recordings" && large === "No") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Scheduled Recordings, Large=No">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.p1be51500} fill="var(--fill-0, #EEEEEE)" fillRule="evenodd" />
              <path d={svgPaths.p255130c0} fill="var(--fill-0, #EEEEEE)" />
            </g>
          </svg>
        </div>
      </div>
    );
  }
  return (
    <div className={className || "relative size-[24px]"} data-name="Name=Airplay, Large=No">
      <div className="absolute inset-[12.5%_4.17%]" data-name="ico_airplay">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18">
          <path d={svgPaths.p19921f80} fill="var(--fill-0, #E5E9EC)" id="ico_airplay" />
        </svg>
      </div>
    </div>
  );
}
type ButtonsProps = {
  className?: string;
  state?: "Default" | "Hover" | "Pressed" | "Selected" | "Disabled" | "Active";
  style?: "Icon" | "Label" | "Label + Icon" | "Label + Progress" | "Dropdown" | "Selector";
  type?: "Contained" | "Outlined" | "Ghost" | "Icon" | "Sidebar";
  width?: "Hug Content" | "Fixed";
};

function Buttons({ className, state = "Default", style = "Icon", type = "Contained", width = "Fixed" }: ButtonsProps) {
  if (type === "Outlined" && style === "Icon" && state === "Default" && width === "Fixed") {
    return (
      <div className={className || "content-stretch flex items-center justify-center p-[8px] relative rounded-[999999px]"} data-name="Type=Outlined, Style=Icon, State=Default, Width=Fixed">
        <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(229,233,236,0.5)] border-solid inset-0 pointer-events-none rounded-[999999px]" />
        <SystemIcons className="relative shrink-0 size-[24px]" name="Placeholder" />
      </div>
    );
  }
  if (type === "Outlined" && style === "Icon" && state === "Disabled" && width === "Fixed") {
    return (
      <div className={className || "bg-[rgba(229,233,236,0.2)] content-stretch flex items-center justify-center p-[8px] relative rounded-[999999px]"} data-name="Type=Outlined, Style=Icon, State=Disabled, Width=Fixed">
        <SystemIcons className="relative shrink-0 size-[24px]" name="Placeholder" />
      </div>
    );
  }
  if (type === "Outlined" && style === "Icon" && state === "Hover" && width === "Fixed") {
    return (
      <div className={className || "content-stretch flex items-start p-[8px] relative rounded-[999999px]"} data-name="Type=Outlined, Style=Icon, State=Hover, Width=Fixed">
        <div aria-hidden="true" className="absolute border-[#e5e9ec] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[999999px]" />
        <SystemIcons className="relative shrink-0 size-[24px]" name="Placeholder" />
      </div>
    );
  }
  if (type === "Outlined" && style === "Icon" && state === "Pressed" && width === "Fixed") {
    return (
      <div className={className || "bg-[rgba(229,233,236,0.1)] content-stretch flex items-start opacity-50 p-[8px] relative rounded-[999999px]"} data-name="Type=Outlined, Style=Icon, State=Pressed, Width=Fixed">
        <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(229,233,236,0.5)] border-solid inset-0 pointer-events-none rounded-[999999px]" />
        <SystemIcons className="relative shrink-0 size-[24px]" name="Placeholder" />
      </div>
    );
  }
  if (type === "Contained" && style === "Icon" && state === "Hover" && width === "Fixed") {
    return (
      <div className={className || "content-stretch flex items-start p-[8px] relative rounded-[999999px]"} data-name="Type=Contained, Style=Icon, State=Hover, Width=Fixed" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%), linear-gradient(90deg, rgb(180, 255, 0) 0%, rgb(180, 255, 0) 100%)" }}>
        <div className="relative shrink-0 size-[24px]" data-name="System Icons">
          <div className="absolute inset-[8.33%]" data-name="Subtract">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Contained" && style === "Icon" && state === "Pressed" && width === "Fixed") {
    return (
      <div className={className || "content-stretch flex items-start p-[8px] relative rounded-[999999px]"} data-name="Type=Contained, Style=Icon, State=Pressed, Width=Fixed" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgb(180, 255, 0) 0%, rgb(180, 255, 0) 100%)" }}>
        <div className="relative shrink-0 size-[24px]" data-name="System Icons">
          <div className="absolute inset-[8.33%]" data-name="Subtract">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Contained" && style === "Icon" && state === "Disabled" && width === "Fixed") {
    return (
      <div className={className || "bg-[rgba(229,233,236,0.2)] content-stretch flex items-start p-[8px] relative rounded-[999999px]"} data-name="Type=Contained, Style=Icon, State=Disabled, Width=Fixed">
        <SystemIcons className="relative shrink-0 size-[24px]" name="Placeholder" />
      </div>
    );
  }
  if (type === "Icon" && style === "Icon" && state === "Selected" && width === "Fixed") {
    return (
      <div className={className || "bg-[rgba(229,233,236,0.2)] content-stretch flex items-start p-[8px] relative rounded-[6px]"} data-name="Type=Icon, Style=Icon, State=Selected, Width=Fixed">
        <SystemIcons className="relative shrink-0 size-[24px]" name="Placeholder" />
      </div>
    );
  }
  if (type === "Icon" && style === "Icon" && state === "Pressed" && width === "Fixed") {
    return (
      <div className={className || "content-stretch flex items-start opacity-50 p-[8px] relative rounded-[6px]"} data-name="Type=Icon, Style=Icon, State=Pressed, Width=Fixed">
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Group">
          <SystemIcons className="col-1 ml-0 mt-0 relative row-1 size-[24px]" name="Placeholder" />
        </div>
      </div>
    );
  }
  if (type === "Icon" && style === "Icon" && state === "Disabled" && width === "Fixed") {
    return (
      <div className={className || "content-stretch flex items-start opacity-50 p-[8px] relative rounded-[999999px]"} data-name="Type=Icon, Style=Icon, State=Disabled, Width=Fixed">
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Group">
          <SystemIcons className="col-1 ml-0 mt-0 relative row-1 size-[24px]" name="Placeholder" />
        </div>
      </div>
    );
  }
  if (type === "Icon" && style === "Icon" && state === "Active" && width === "Fixed") {
    return (
      <div className={className || "bg-[#b4ff00] content-stretch flex items-start p-[8px] relative rounded-[999999px]"} data-name="Type=Icon, Style=Icon, State=Active, Width=Fixed">
        <SystemIcons className="relative shrink-0 size-[24px]" name="Placeholder" />
      </div>
    );
  }
  if (type === "Outlined" && style === "Label" && state === "Default" && width === "Hug Content") {
    return (
      <div className={className || "content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[999999px]"} data-name="Type=Outlined, Style=Label, State=Default, Width=Hug Content">
        <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(229,233,236,0.5)] border-solid inset-0 pointer-events-none rounded-[999999px]" />
        <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#e5e9ec] text-[16px] text-center">Label</p>
      </div>
    );
  }
  if (type === "Outlined" && style === "Label" && state === "Disabled" && width === "Hug Content") {
    return (
      <div className={className || "bg-[rgba(229,233,236,0.2)] content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[999999px]"} data-name="Type=Outlined, Style=Label, State=Disabled, Width=Hug Content">
        <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#e5e9ec] text-[16px] text-center">Label</p>
      </div>
    );
  }
  if (type === "Ghost" && style === "Label" && state === "Default" && width === "Hug Content") {
    return (
      <div className={className || "content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px]"} data-name="Type=Ghost, Style=Label, State=Default, Width=Hug Content">
        <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[rgba(229,233,236,0.7)] text-center">Label</p>
      </div>
    );
  }
  if (type === "Ghost" && style === "Label" && state === "Hover" && width === "Hug Content") {
    return (
      <div className={className || "content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px]"} data-name="Type=Ghost, Style=Label, State=Hover, Width=Hug Content">
        <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#e5e9ec] text-[16px] text-center">Label</p>
      </div>
    );
  }
  if (type === "Ghost" && style === "Label" && state === "Disabled" && width === "Hug Content") {
    return (
      <div className={className || "content-stretch flex items-center justify-center opacity-50 px-[18px] py-[8px] relative rounded-[999999px]"} data-name="Type=Ghost, Style=Label, State=Disabled, Width=Hug Content">
        <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#e5e9ec] text-[16px] text-center">Label</p>
      </div>
    );
  }
  if (type === "Outlined" && style === "Label" && state === "Hover" && width === "Hug Content") {
    return (
      <div className={className || "bg-[rgba(229,233,236,0.1)] content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[999999px]"} data-name="Type=Outlined, Style=Label, State=Hover, Width=Hug Content">
        <div aria-hidden="true" className="absolute border-[#e5e9ec] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[999999px]" />
        <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#e5e9ec] text-[16px] text-center">Label</p>
      </div>
    );
  }
  if (type === "Ghost" && style === "Label" && state === "Selected" && width === "Hug Content") {
    return (
      <div className={className || "bg-[rgba(229,233,236,0.2)] content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px]"} data-name="Type=Ghost, Style=Label, State=Selected, Width=Hug Content">
        <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#e5e9ec] text-[16px] text-center">Label</p>
      </div>
    );
  }
  if (type === "Ghost" && style === "Label" && state === "Active" && width === "Hug Content") {
    return (
      <div className={className || "bg-[#b4ff00] content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[999999px]"} data-name="Type=Ghost, Style=Label, State=Active, Width=Hug Content">
        <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#002340] text-[16px] text-center">Label</p>
      </div>
    );
  }
  if (type === "Outlined" && style === "Label" && state === "Pressed" && width === "Hug Content") {
    return (
      <div className={className || "bg-[rgba(229,233,236,0.1)] content-stretch flex items-center justify-center opacity-50 px-[18px] py-[8px] relative rounded-[999999px]"} data-name="Type=Outlined, Style=Label, State=Pressed, Width=Hug Content">
        <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(229,233,236,0.5)] border-solid inset-0 pointer-events-none rounded-[999999px]" />
        <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#e5e9ec] text-[16px] text-center">Label</p>
      </div>
    );
  }
  if (type === "Ghost" && style === "Label" && state === "Pressed" && width === "Hug Content") {
    return (
      <div className={className || "content-stretch flex items-center justify-center opacity-50 px-[18px] py-[8px] relative rounded-[6px]"} data-name="Type=Ghost, Style=Label, State=Pressed, Width=Hug Content">
        <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#e5e9ec] text-[16px] text-center">Label</p>
      </div>
    );
  }
  if (type === "Outlined" && style === "Label" && state === "Default" && width === "Fixed") {
    return (
      <div className={className || "content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[999999px] w-[120px]"} data-name="Type=Outlined, Style=Label, State=Default, Width=Fixed">
        <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(229,233,236,0.5)] border-solid inset-0 pointer-events-none rounded-[999999px]" />
        <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#e5e9ec] text-[16px] text-center">Label</p>
      </div>
    );
  }
  if (type === "Outlined" && style === "Label" && state === "Disabled" && width === "Fixed") {
    return (
      <div className={className || "bg-[rgba(229,233,236,0.2)] content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[999999px] w-[120px]"} data-name="Type=Outlined, Style=Label, State=Disabled, Width=Fixed">
        <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#e5e9ec] text-[16px] text-center">Label</p>
      </div>
    );
  }
  if (type === "Outlined" && style === "Label" && state === "Hover" && width === "Fixed") {
    return (
      <div className={className || "bg-[rgba(229,233,236,0.1)] content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[999999px] w-[120px]"} data-name="Type=Outlined, Style=Label, State=Hover, Width=Fixed">
        <div aria-hidden="true" className="absolute border-[#e5e9ec] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[999999px]" />
        <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#e5e9ec] text-[16px] text-center">Label</p>
      </div>
    );
  }
  if (type === "Outlined" && style === "Label" && state === "Pressed" && width === "Fixed") {
    return (
      <div className={className || "bg-[rgba(229,233,236,0.1)] content-stretch flex items-center justify-center opacity-50 px-[18px] py-[8px] relative rounded-[999999px] w-[120px]"} data-name="Type=Outlined, Style=Label, State=Pressed, Width=Fixed">
        <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(229,233,236,0.5)] border-solid inset-0 pointer-events-none rounded-[999999px]" />
        <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#e5e9ec] text-[16px] text-center">Label</p>
      </div>
    );
  }
  if (type === "Outlined" && style === "Label + Progress" && state === "Pressed" && width === "Hug Content") {
    return (
      <div className={className || "bg-[rgba(229,233,236,0.1)] opacity-50 relative rounded-[999999px]"} data-name="Type=Outlined, Style=Label + Progress, State=Pressed, Width=Hug Content">
        <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[18px] py-[8px] relative rounded-[inherit]">
          <div className="absolute bg-[rgba(229,233,236,0.2)] inset-[0_67.57%_0_0]" data-name="Progress" />
          <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#e5e9ec] text-[16px] text-center">Label</p>
        </div>
        <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(229,233,236,0.5)] border-solid inset-0 pointer-events-none rounded-[999999px]" />
      </div>
    );
  }
  if (type === "Outlined" && style === "Label + Progress" && state === "Default" && width === "Fixed") {
    return (
      <div className={className || "relative rounded-[999999px] w-[120px]"} data-name="Type=Outlined, Style=Label + Progress, State=Default, Width=Fixed">
        <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[18px] py-[8px] relative rounded-[inherit] w-full">
          <div className="absolute bg-[rgba(229,233,236,0.2)] inset-[0_73.33%_0_0]" data-name="Progress" />
          <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#e5e9ec] text-[16px] text-center">Label</p>
        </div>
        <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(229,233,236,0.5)] border-solid inset-0 pointer-events-none rounded-[999999px]" />
      </div>
    );
  }
  if (type === "Outlined" && style === "Label + Progress" && state === "Hover" && width === "Fixed") {
    return (
      <div className={className || "bg-[rgba(229,233,236,0.1)] relative rounded-[999999px] w-[120px]"} data-name="Type=Outlined, Style=Label + Progress, State=Hover, Width=Fixed">
        <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[18px] py-[8px] relative rounded-[inherit] w-full">
          <div className="absolute bg-[rgba(229,233,236,0.2)] inset-[0_73.33%_0_0]" data-name="Progress" />
          <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#e5e9ec] text-[16px] text-center">Label</p>
        </div>
        <div aria-hidden="true" className="absolute border-[#e5e9ec] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[999999px]" />
      </div>
    );
  }
  if (type === "Outlined" && style === "Label + Progress" && state === "Pressed" && width === "Fixed") {
    return (
      <div className={className || "bg-[rgba(229,233,236,0.1)] opacity-50 relative rounded-[999999px] w-[120px]"} data-name="Type=Outlined, Style=Label + Progress, State=Pressed, Width=Fixed">
        <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[18px] py-[8px] relative rounded-[inherit] w-full">
          <div className="absolute bg-[rgba(229,233,236,0.2)] inset-[0_73.33%_0_0]" data-name="Progress" />
          <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#e5e9ec] text-[16px] text-center">Label</p>
        </div>
        <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(229,233,236,0.5)] border-solid inset-0 pointer-events-none rounded-[999999px]" />
      </div>
    );
  }
  if (type === "Contained" && style === "Label" && state === "Default" && width === "Hug Content") {
    return (
      <div className={className || "bg-[#b4ff00] content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[999999px]"} data-name="Type=Contained, Style=Label, State=Default, Width=Hug Content">
        <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#002340] text-[16px] text-center">Label</p>
      </div>
    );
  }
  if (type === "Contained" && style === "Label" && state === "Hover" && width === "Hug Content") {
    return (
      <div className={className || "content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[999999px]"} data-name="Type=Contained, Style=Label, State=Hover, Width=Hug Content" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%), linear-gradient(90deg, rgb(180, 255, 0) 0%, rgb(180, 255, 0) 100%)" }}>
        <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#002340] text-[16px] text-center">Label</p>
      </div>
    );
  }
  if (type === "Contained" && style === "Label" && state === "Pressed" && width === "Hug Content") {
    return (
      <div className={className || "content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[999999px]"} data-name="Type=Contained, Style=Label, State=Pressed, Width=Hug Content" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgb(180, 255, 0) 0%, rgb(180, 255, 0) 100%)" }}>
        <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#002340] text-[16px] text-center">Label</p>
      </div>
    );
  }
  if (type === "Contained" && style === "Label" && state === "Default" && width === "Fixed") {
    return (
      <div className={className || "bg-[#b4ff00] content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[20px] w-[120px]"} data-name="Type=Contained, Style=Label, State=Default, Width=Fixed">
        <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#002340] text-[16px] text-center">Label</p>
      </div>
    );
  }
  if (type === "Contained" && style === "Label" && state === "Hover" && width === "Fixed") {
    return (
      <div className={className || "content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[999999px] w-[120px]"} data-name="Type=Contained, Style=Label, State=Hover, Width=Fixed" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%), linear-gradient(90deg, rgb(180, 255, 0) 0%, rgb(180, 255, 0) 100%)" }}>
        <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#002340] text-[16px] text-center">Label</p>
      </div>
    );
  }
  if (type === "Contained" && style === "Label" && state === "Pressed" && width === "Fixed") {
    return (
      <div className={className || "content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[999999px] w-[120px]"} data-name="Type=Contained, Style=Label, State=Pressed, Width=Fixed" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgb(180, 255, 0) 0%, rgb(180, 255, 0) 100%)" }}>
        <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#002340] text-[16px] text-center">Label</p>
      </div>
    );
  }
  if (type === "Contained" && style === "Label + Progress" && state === "Default" && width === "Hug Content") {
    return (
      <div className={className || "bg-[#b4ff00] content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[18px] py-[8px] relative rounded-[999999px]"} data-name="Type=Contained, Style=Label + Progress, State=Default, Width=Hug Content">
        <div className="absolute bg-[rgba(51,51,51,0.3)] inset-[0_67.57%_0_0]" data-name="Progress" />
        <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#002340] text-[16px] text-center">Label</p>
      </div>
    );
  }
  if (type === "Contained" && style === "Label + Progress" && state === "Hover" && width === "Hug Content") {
    return (
      <div className={className || "content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[18px] py-[8px] relative rounded-[999999px]"} data-name="Type=Contained, Style=Label + Progress, State=Hover, Width=Hug Content" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%), linear-gradient(90deg, rgb(180, 255, 0) 0%, rgb(180, 255, 0) 100%)" }}>
        <div className="absolute bg-[rgba(51,51,51,0.3)] inset-[0_67.57%_0_0]" data-name="Progress" />
        <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#002340] text-[16px] text-center">Label</p>
      </div>
    );
  }
  if (type === "Contained" && style === "Label + Progress" && state === "Pressed" && width === "Hug Content") {
    return (
      <div className={className || "content-stretch flex items-center justify-center overflow-clip px-[18px] py-[8px] relative rounded-[999999px]"} data-name="Type=Contained, Style=Label + Progress, State=Pressed, Width=Hug Content" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgb(180, 255, 0) 0%, rgb(180, 255, 0) 100%)" }}>
        <div className="absolute bg-[rgba(51,51,51,0.3)] inset-[0_67.57%_0_0]" data-name="Progress" />
        <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#002340] text-[16px] text-center">Label</p>
      </div>
    );
  }
  if (type === "Contained" && style === "Label + Progress" && state === "Default" && width === "Fixed") {
    return (
      <div className={className || "bg-[#b4ff00] content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[18px] py-[8px] relative rounded-[999999px] w-[120px]"} data-name="Type=Contained, Style=Label + Progress, State=Default, Width=Fixed">
        <div className="absolute bg-[rgba(51,51,51,0.3)] inset-[0_73.33%_0_0]" data-name="Progress" />
        <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#002340] text-[16px] text-center">Label</p>
      </div>
    );
  }
  if (type === "Contained" && style === "Label + Progress" && state === "Hover" && width === "Fixed") {
    return (
      <div className={className || "content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[18px] py-[8px] relative rounded-[999999px] w-[120px]"} data-name="Type=Contained, Style=Label + Progress, State=Hover, Width=Fixed" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%), linear-gradient(90deg, rgb(180, 255, 0) 0%, rgb(180, 255, 0) 100%)" }}>
        <div className="absolute bg-[rgba(51,51,51,0.3)] inset-[0_73.33%_0_0]" data-name="Progress" />
        <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#002340] text-[16px] text-center">Label</p>
      </div>
    );
  }
  if (type === "Contained" && style === "Label + Progress" && state === "Pressed" && width === "Fixed") {
    return (
      <div className={className || "content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[18px] py-[8px] relative rounded-[999999px] w-[120px]"} data-name="Type=Contained, Style=Label + Progress, State=Pressed, Width=Fixed" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgb(180, 255, 0) 0%, rgb(180, 255, 0) 100%)" }}>
        <div className="absolute bg-[rgba(51,51,51,0.3)] inset-[0_73.33%_0_0]" data-name="Progress" />
        <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#002340] text-[16px] text-center">Label</p>
      </div>
    );
  }
  if (type === "Contained" && style === "Label" && state === "Disabled" && width === "Hug Content") {
    return (
      <div className={className || "bg-[rgba(229,233,236,0.2)] content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[999999px]"} data-name="Type=Contained, Style=Label, State=Disabled, Width=Hug Content">
        <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#e5e9ec] text-[16px]">Label</p>
      </div>
    );
  }
  if (type === "Contained" && style === "Label" && state === "Disabled" && width === "Fixed") {
    return (
      <div className={className || "bg-[rgba(229,233,236,0.2)] content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[999999px] w-[120px]"} data-name="Type=Contained, Style=Label, State=Disabled, Width=Fixed">
        <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#e5e9ec] text-[16px]">Label</p>
      </div>
    );
  }
  if (type === "Outlined" && style === "Label + Icon" && state === "Default" && width === "Hug Content") {
    return (
      <div className={className || "content-stretch flex flex-col items-center justify-center pl-[8px] pr-[18px] py-[8px] relative rounded-[999999px]"} data-name="Type=Outlined, Style=Label + Icon, State=Default, Width=Hug Content">
        <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(229,233,236,0.5)] border-solid inset-0 pointer-events-none rounded-[999999px]" />
        <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Content">
          <SystemIcons className="relative shrink-0 size-[24px]" name="Placeholder" />
          <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#e5e9ec] text-[16px]">Label</p>
        </div>
      </div>
    );
  }
  if (type === "Outlined" && style === "Label + Icon" && state === "Disabled" && width === "Hug Content") {
    return (
      <div className={className || "bg-[rgba(229,233,236,0.2)] content-stretch flex flex-col items-center justify-center pl-[8px] pr-[18px] py-[8px] relative rounded-[999999px]"} data-name="Type=Outlined, Style=Label + Icon, State=Disabled, Width=Hug Content">
        <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Content">
          <SystemIcons className="relative shrink-0 size-[24px]" name="Placeholder" />
          <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#e5e9ec] text-[16px]">Label</p>
        </div>
      </div>
    );
  }
  if (type === "Outlined" && style === "Label + Icon" && state === "Default" && width === "Fixed") {
    return (
      <div className={className || "content-stretch flex flex-col items-center justify-center pl-[8px] pr-[18px] py-[8px] relative rounded-[999999px] w-[120px]"} data-name="Type=Outlined, Style=Label + Icon, State=Default, Width=Fixed">
        <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(229,233,236,0.5)] border-solid inset-0 pointer-events-none rounded-[999999px]" />
        <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Content">
          <SystemIcons className="relative shrink-0 size-[24px]" name="Placeholder" />
          <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#e5e9ec] text-[16px]">Label</p>
        </div>
      </div>
    );
  }
  if (type === "Outlined" && style === "Label + Icon" && state === "Disabled" && width === "Fixed") {
    return (
      <div className={className || "bg-[rgba(229,233,236,0.2)] content-stretch flex flex-col items-center justify-center pl-[8px] pr-[18px] py-[8px] relative rounded-[999999px] w-[120px]"} data-name="Type=Outlined, Style=Label + Icon, State=Disabled, Width=Fixed">
        <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Content">
          <SystemIcons className="relative shrink-0 size-[24px]" name="Placeholder" />
          <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#e5e9ec] text-[16px]">Label</p>
        </div>
      </div>
    );
  }
  if (type === "Outlined" && style === "Label + Icon" && state === "Hover" && width === "Hug Content") {
    return (
      <div className={className || "bg-[rgba(229,233,236,0.1)] content-stretch flex flex-col items-center justify-center pl-[8px] pr-[18px] py-[8px] relative rounded-[999999px]"} data-name="Type=Outlined, Style=Label + Icon, State=Hover, Width=Hug Content">
        <div aria-hidden="true" className="absolute border-[#e5e9ec] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[999999px]" />
        <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Content">
          <SystemIcons className="relative shrink-0 size-[24px]" name="Placeholder" />
          <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#e5e9ec] text-[16px]">Label</p>
        </div>
      </div>
    );
  }
  if (type === "Outlined" && style === "Label + Icon" && state === "Hover" && width === "Fixed") {
    return (
      <div className={className || "bg-[rgba(229,233,236,0.1)] content-stretch flex flex-col items-center justify-center pl-[8px] pr-[18px] py-[8px] relative rounded-[999999px] w-[120px]"} data-name="Type=Outlined, Style=Label + Icon, State=Hover, Width=Fixed">
        <div aria-hidden="true" className="absolute border-[#e5e9ec] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[999999px]" />
        <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Content">
          <SystemIcons className="relative shrink-0 size-[24px]" name="Placeholder" />
          <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#e5e9ec] text-[16px]">Label</p>
        </div>
      </div>
    );
  }
  if (type === "Outlined" && style === "Label + Icon" && state === "Pressed" && width === "Hug Content") {
    return (
      <div className={className || "bg-[rgba(229,233,236,0.1)] content-stretch flex flex-col items-center justify-center opacity-50 pl-[8px] pr-[18px] py-[8px] relative rounded-[999999px]"} data-name="Type=Outlined, Style=Label + Icon, State=Pressed, Width=Hug Content">
        <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(229,233,236,0.5)] border-solid inset-0 pointer-events-none rounded-[999999px]" />
        <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Content">
          <SystemIcons className="relative shrink-0 size-[24px]" name="Placeholder" />
          <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#e5e9ec] text-[16px]">Label</p>
        </div>
      </div>
    );
  }
  if (type === "Outlined" && style === "Label + Icon" && state === "Pressed" && width === "Fixed") {
    return (
      <div className={className || "bg-[rgba(229,233,236,0.1)] content-stretch flex flex-col items-center justify-center opacity-50 pl-[8px] pr-[18px] py-[8px] relative rounded-[999999px] w-[120px]"} data-name="Type=Outlined, Style=Label + Icon, State=Pressed, Width=Fixed">
        <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(229,233,236,0.5)] border-solid inset-0 pointer-events-none rounded-[999999px]" />
        <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Content">
          <SystemIcons className="relative shrink-0 size-[24px]" name="Placeholder" />
          <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#e5e9ec] text-[16px]">Label</p>
        </div>
      </div>
    );
  }
  if (type === "Contained" && style === "Label + Icon" && state === "Default" && width === "Hug Content") {
    return (
      <div className={className || "bg-[#b4ff00] content-stretch flex flex-col items-center justify-center pl-[8px] pr-[18px] py-[8px] relative rounded-[999999px]"} data-name="Type=Contained, Style=Label + Icon, State=Default, Width=Hug Content">
        <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Content">
          <div className="relative shrink-0 size-[24px]" data-name="System Icons">
            <div className="absolute inset-[8.33%]" data-name="Subtract">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
              </svg>
            </div>
          </div>
          <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#002340] text-[16px]">Label</p>
        </div>
      </div>
    );
  }
  if (type === "Contained" && style === "Label + Icon" && state === "Default" && width === "Fixed") {
    return (
      <div className={className || "bg-[#b4ff00] content-stretch flex flex-col items-center justify-center pl-[8px] pr-[18px] py-[8px] relative rounded-[999999px] w-[120px]"} data-name="Type=Contained, Style=Label + Icon, State=Default, Width=Fixed">
        <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Content">
          <div className="relative shrink-0 size-[24px]" data-name="System Icons">
            <div className="absolute inset-[8.33%]" data-name="Subtract">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
              </svg>
            </div>
          </div>
          <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#002340] text-[16px]">Label</p>
        </div>
      </div>
    );
  }
  if (type === "Contained" && style === "Label + Icon" && state === "Hover" && width === "Hug Content") {
    return (
      <div className={className || "content-stretch flex flex-col items-center justify-center pl-[8px] pr-[18px] py-[8px] relative rounded-[999999px]"} data-name="Type=Contained, Style=Label + Icon, State=Hover, Width=Hug Content" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%), linear-gradient(90deg, rgb(180, 255, 0) 0%, rgb(180, 255, 0) 100%)" }}>
        <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Content">
          <div className="relative shrink-0 size-[24px]" data-name="System Icons">
            <div className="absolute inset-[8.33%]" data-name="Subtract">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
              </svg>
            </div>
          </div>
          <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#002340] text-[16px]">Label</p>
        </div>
      </div>
    );
  }
  if (type === "Contained" && style === "Label + Icon" && state === "Hover" && width === "Fixed") {
    return (
      <div className={className || "content-stretch flex flex-col items-center justify-center pl-[8px] pr-[18px] py-[8px] relative rounded-[999999px] w-[120px]"} data-name="Type=Contained, Style=Label + Icon, State=Hover, Width=Fixed" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%), linear-gradient(90deg, rgb(180, 255, 0) 0%, rgb(180, 255, 0) 100%)" }}>
        <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Content">
          <div className="relative shrink-0 size-[24px]" data-name="System Icons">
            <div className="absolute inset-[8.33%]" data-name="Subtract">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
              </svg>
            </div>
          </div>
          <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#002340] text-[16px]">Label</p>
        </div>
      </div>
    );
  }
  if (type === "Contained" && style === "Label + Icon" && state === "Pressed" && width === "Hug Content") {
    return (
      <div className={className || "content-stretch flex flex-col items-center justify-center pl-[8px] pr-[18px] py-[8px] relative rounded-[999999px]"} data-name="Type=Contained, Style=Label + Icon, State=Pressed, Width=Hug Content" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgb(180, 255, 0) 0%, rgb(180, 255, 0) 100%)" }}>
        <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Content">
          <div className="relative shrink-0 size-[24px]" data-name="System Icons">
            <div className="absolute inset-[8.33%]" data-name="Subtract">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
              </svg>
            </div>
          </div>
          <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#002340] text-[16px]">Label</p>
        </div>
      </div>
    );
  }
  if (type === "Contained" && style === "Label + Icon" && state === "Pressed" && width === "Fixed") {
    return (
      <div className={className || "content-stretch flex flex-col items-center justify-center pl-[8px] pr-[18px] py-[8px] relative rounded-[999999px] w-[120px]"} data-name="Type=Contained, Style=Label + Icon, State=Pressed, Width=Fixed" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgb(180, 255, 0) 0%, rgb(180, 255, 0) 100%)" }}>
        <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Content">
          <div className="relative shrink-0 size-[24px]" data-name="System Icons">
            <div className="absolute inset-[8.33%]" data-name="Subtract">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
              </svg>
            </div>
          </div>
          <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#002340] text-[16px]">Label</p>
        </div>
      </div>
    );
  }
  if (type === "Contained" && style === "Label + Icon" && state === "Disabled" && width === "Hug Content") {
    return (
      <div className={className || "bg-[rgba(229,233,236,0.2)] content-stretch flex flex-col items-center justify-center pl-[8px] pr-[18px] py-[8px] relative rounded-[999999px]"} data-name="Type=Contained, Style=Label + Icon, State=Disabled, Width=Hug Content">
        <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Content">
          <SystemIcons className="relative shrink-0 size-[24px]" name="Placeholder" />
          <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#e5e9ec] text-[16px]">Label</p>
        </div>
      </div>
    );
  }
  if (type === "Contained" && style === "Label + Icon" && state === "Disabled" && width === "Fixed") {
    return (
      <div className={className || "bg-[rgba(229,233,236,0.2)] content-stretch flex flex-col items-center justify-center pl-[8px] pr-[18px] py-[8px] relative rounded-[999999px] w-[120px]"} data-name="Type=Contained, Style=Label + Icon, State=Disabled, Width=Fixed">
        <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Content">
          <SystemIcons className="relative shrink-0 size-[24px]" name="Placeholder" />
          <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#e5e9ec] text-[16px]">Label</p>
        </div>
      </div>
    );
  }
  if (type === "Outlined" && style === "Dropdown" && state === "Default" && width === "Hug Content") {
    return (
      <div className={className || "content-stretch flex flex-col items-center justify-center pl-[18px] pr-[8px] py-[8px] relative rounded-[999999px]"} data-name="Type=Outlined, Style=Dropdown, State=Default, Width=Hug Content">
        <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(229,233,236,0.5)] border-solid inset-0 pointer-events-none rounded-[999999px]" />
        <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Content">
          <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#e5e9ec] text-[16px]">Label</p>
          <SystemIcons className="relative shrink-0 size-[24px]" name="Arrow Down Small" />
        </div>
      </div>
    );
  }
  if (type === "Outlined" && style === "Dropdown" && state === "Disabled" && width === "Hug Content") {
    return (
      <div className={className || "bg-[rgba(229,233,236,0.2)] content-stretch flex flex-col items-center justify-center pl-[18px] pr-[8px] py-[8px] relative rounded-[999999px]"} data-name="Type=Outlined, Style=Dropdown, State=Disabled, Width=Hug Content">
        <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Content">
          <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#e5e9ec] text-[16px]">Label</p>
          <SystemIcons className="relative shrink-0 size-[24px]" name="Arrow Down Small" />
        </div>
      </div>
    );
  }
  if (type === "Outlined" && style === "Dropdown" && state === "Default" && width === "Fixed") {
    return (
      <div className={className || "content-stretch flex flex-col items-center justify-center pl-[18px] pr-[8px] py-[8px] relative rounded-[999999px] w-[120px]"} data-name="Type=Outlined, Style=Dropdown, State=Default, Width=Fixed">
        <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(229,233,236,0.5)] border-solid inset-0 pointer-events-none rounded-[999999px]" />
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Content">
          <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#e5e9ec] text-[16px]">Label</p>
          <SystemIcons className="relative shrink-0 size-[24px]" name="Arrow Down Small" />
        </div>
      </div>
    );
  }
  if (type === "Outlined" && style === "Dropdown" && state === "Disabled" && width === "Fixed") {
    return (
      <div className={className || "bg-[rgba(229,233,236,0.2)] content-stretch flex flex-col items-center justify-center pl-[18px] pr-[8px] py-[8px] relative rounded-[999999px] w-[120px]"} data-name="Type=Outlined, Style=Dropdown, State=Disabled, Width=Fixed">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Content">
          <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#e5e9ec] text-[16px]">Label</p>
          <SystemIcons className="relative shrink-0 size-[24px]" name="Arrow Down Small" />
        </div>
      </div>
    );
  }
  if (type === "Outlined" && style === "Dropdown" && state === "Hover" && width === "Hug Content") {
    return (
      <div className={className || "bg-[rgba(229,233,236,0.1)] content-stretch flex flex-col items-center justify-center pl-[18px] pr-[8px] py-[8px] relative rounded-[999999px]"} data-name="Type=Outlined, Style=Dropdown, State=Hover, Width=Hug Content">
        <div aria-hidden="true" className="absolute border-[#e5e9ec] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[999999px]" />
        <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Content">
          <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#e5e9ec] text-[16px]">Label</p>
          <SystemIcons className="relative shrink-0 size-[24px]" name="Arrow Down Small" />
        </div>
      </div>
    );
  }
  if (type === "Outlined" && style === "Dropdown" && state === "Hover" && width === "Fixed") {
    return (
      <div className={className || "bg-[rgba(229,233,236,0.1)] content-stretch flex flex-col items-center justify-center pl-[18px] pr-[8px] py-[8px] relative rounded-[999999px] w-[120px]"} data-name="Type=Outlined, Style=Dropdown, State=Hover, Width=Fixed">
        <div aria-hidden="true" className="absolute border-[#e5e9ec] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[999999px]" />
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Content">
          <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#e5e9ec] text-[16px]">Label</p>
          <SystemIcons className="relative shrink-0 size-[24px]" name="Arrow Down Small" />
        </div>
      </div>
    );
  }
  if (type === "Outlined" && style === "Dropdown" && state === "Pressed" && width === "Hug Content") {
    return (
      <div className={className || "bg-[rgba(229,233,236,0.1)] content-stretch flex flex-col items-center justify-center opacity-50 pl-[18px] pr-[8px] py-[8px] relative rounded-[999999px]"} data-name="Type=Outlined, Style=Dropdown, State=Pressed, Width=Hug Content">
        <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(229,233,236,0.5)] border-solid inset-0 pointer-events-none rounded-[999999px]" />
        <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Content">
          <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#e5e9ec] text-[16px]">Label</p>
          <div className="relative shrink-0 size-[24px]" data-name="System Icons">
            <div className="absolute inset-[45.83%_29.17%_37.5%_29.17%]">
              <div className="absolute inset-[-25%_-10%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0001 6.00004">
                  <path d={svgPaths.p15d5ef00} id="Vector 89" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Outlined" && style === "Dropdown" && state === "Pressed" && width === "Fixed") {
    return (
      <div className={className || "bg-[rgba(229,233,236,0.1)] content-stretch flex flex-col items-center justify-center opacity-50 pl-[18px] pr-[8px] py-[8px] relative rounded-[999999px] w-[120px]"} data-name="Type=Outlined, Style=Dropdown, State=Pressed, Width=Fixed">
        <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(229,233,236,0.5)] border-solid inset-0 pointer-events-none rounded-[999999px]" />
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Content">
          <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#e5e9ec] text-[16px]">Label</p>
          <div className="relative shrink-0 size-[24px]" data-name="System Icons">
            <div className="absolute inset-[45.83%_29.17%_37.5%_29.17%]">
              <div className="absolute inset-[-25%_-10%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0001 6.00004">
                  <path d={svgPaths.p15d5ef00} id="Vector 89" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Contained" && style === "Dropdown" && state === "Default" && width === "Hug Content") {
    return (
      <div className={className || "bg-[#b4ff00] content-stretch flex flex-col items-start justify-center pl-[18px] pr-[8px] py-[8px] relative rounded-[999999px]"} data-name="Type=Contained, Style=Dropdown, State=Default, Width=Hug Content">
        <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Content">
          <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#002340] text-[16px]">Label</p>
          <div className="relative shrink-0 size-[24px]" data-name="System Icons">
            <div className="absolute inset-[45.83%_29.17%_37.5%_29.17%]">
              <div className="absolute inset-[-25%_-10%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0001 6.00004">
                  <path d={svgPaths.p15d5ef00} id="Vector 89" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Contained" && style === "Dropdown" && state === "Default" && width === "Fixed") {
    return (
      <div className={className || "bg-[#b4ff00] content-stretch flex flex-col items-start justify-center pl-[18px] pr-[8px] py-[8px] relative rounded-[999999px] w-[120px]"} data-name="Type=Contained, Style=Dropdown, State=Default, Width=Fixed">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Content">
          <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#002340] text-[16px]">Label</p>
          <div className="relative shrink-0 size-[24px]" data-name="System Icons">
            <div className="absolute inset-[45.83%_29.17%_37.5%_29.17%]">
              <div className="absolute inset-[-25%_-10%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0001 6.00004">
                  <path d={svgPaths.p15d5ef00} id="Vector 89" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Contained" && style === "Dropdown" && state === "Hover" && width === "Hug Content") {
    return (
      <div className={className || "content-stretch flex flex-col items-start justify-center pl-[18px] pr-[8px] py-[8px] relative rounded-[999999px]"} data-name="Type=Contained, Style=Dropdown, State=Hover, Width=Hug Content" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%), linear-gradient(90deg, rgb(180, 255, 0) 0%, rgb(180, 255, 0) 100%)" }}>
        <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Content">
          <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#002340] text-[16px]">Label</p>
          <div className="relative shrink-0 size-[24px]" data-name="System Icons">
            <div className="absolute inset-[45.83%_29.17%_37.5%_29.17%]">
              <div className="absolute inset-[-25%_-10%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0001 6.00004">
                  <path d={svgPaths.p15d5ef00} id="Vector 89" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Contained" && style === "Dropdown" && state === "Hover" && width === "Fixed") {
    return (
      <div className={className || "content-stretch flex flex-col items-start justify-center pl-[18px] pr-[8px] py-[8px] relative rounded-[999999px] w-[120px]"} data-name="Type=Contained, Style=Dropdown, State=Hover, Width=Fixed" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%), linear-gradient(90deg, rgb(180, 255, 0) 0%, rgb(180, 255, 0) 100%)" }}>
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Content">
          <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#002340] text-[16px]">Label</p>
          <div className="relative shrink-0 size-[24px]" data-name="System Icons">
            <div className="absolute inset-[45.83%_29.17%_37.5%_29.17%]">
              <div className="absolute inset-[-25%_-10%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0001 6.00004">
                  <path d={svgPaths.p15d5ef00} id="Vector 89" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Contained" && style === "Dropdown" && state === "Pressed" && width === "Hug Content") {
    return (
      <div className={className || "content-stretch flex flex-col items-start justify-center pl-[18px] pr-[8px] py-[8px] relative rounded-[999999px]"} data-name="Type=Contained, Style=Dropdown, State=Pressed, Width=Hug Content" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgb(180, 255, 0) 0%, rgb(180, 255, 0) 100%)" }}>
        <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Content">
          <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#002340] text-[16px]">Label</p>
          <div className="relative shrink-0 size-[24px]" data-name="System Icons">
            <div className="absolute inset-[45.83%_29.17%_37.5%_29.17%]">
              <div className="absolute inset-[-25%_-10%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0001 6.00004">
                  <path d={svgPaths.p15d5ef00} id="Vector 89" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Contained" && style === "Dropdown" && state === "Pressed" && width === "Fixed") {
    return (
      <div className={className || "content-stretch flex flex-col items-start justify-center pl-[18px] pr-[8px] py-[8px] relative rounded-[999999px] w-[120px]"} data-name="Type=Contained, Style=Dropdown, State=Pressed, Width=Fixed" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgb(180, 255, 0) 0%, rgb(180, 255, 0) 100%)" }}>
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Content">
          <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#002340] text-[16px]">Label</p>
          <div className="relative shrink-0 size-[24px]" data-name="System Icons">
            <div className="absolute inset-[45.83%_29.17%_37.5%_29.17%]">
              <div className="absolute inset-[-25%_-10%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0001 6.00004">
                  <path d={svgPaths.p15d5ef00} id="Vector 89" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Contained" && style === "Dropdown" && state === "Disabled" && width === "Hug Content") {
    return (
      <div className={className || "bg-[rgba(229,233,236,0.2)] content-stretch flex flex-col items-start justify-center pl-[18px] pr-[8px] py-[8px] relative rounded-[999999px]"} data-name="Type=Contained, Style=Dropdown, State=Disabled, Width=Hug Content">
        <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Content">
          <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#e5e9ec] text-[16px]">Label</p>
          <SystemIcons className="relative shrink-0 size-[24px]" name="Arrow Down Small" />
        </div>
      </div>
    );
  }
  if (type === "Contained" && style === "Dropdown" && state === "Disabled" && width === "Fixed") {
    return (
      <div className={className || "bg-[rgba(229,233,236,0.2)] content-stretch flex flex-col items-start justify-center pl-[18px] pr-[8px] py-[8px] relative rounded-[999999px] w-[120px]"} data-name="Type=Contained, Style=Dropdown, State=Disabled, Width=Fixed">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Content">
          <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#e5e9ec] text-[16px]">Label</p>
          <SystemIcons className="relative shrink-0 size-[24px]" name="Arrow Down Small" />
        </div>
      </div>
    );
  }
  if (type === "Icon" && style === "Icon" && state === "Default" && width === "Fixed") {
    return (
      <div className={className || "content-stretch flex items-start overflow-clip p-[8px] relative rounded-[6px]"} data-name="Type=Icon, Style=Icon, State=Default, Width=Fixed">
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Group">
          <SystemIcons className="col-1 ml-0 mt-0 relative row-1 size-[24px]" name="Placeholder" />
        </div>
      </div>
    );
  }
  if (type === "Icon" && style === "Icon" && state === "Hover" && width === "Fixed") {
    return (
      <div className={className || "content-stretch flex items-start overflow-clip p-[8px] relative rounded-[6px]"} data-name="Type=Icon, Style=Icon, State=Hover, Width=Fixed">
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Group">
          <SystemIcons className="col-1 ml-0 mt-0 relative row-1 size-[24px]" name="Placeholder" />
        </div>
      </div>
    );
  }
  if (type === "Sidebar" && style === "Label + Icon" && state === "Hover" && width === "Fixed") {
    return (
      <div className={className || "bg-[#b4ff00] content-stretch flex flex-col items-start justify-center pl-[8px] pr-[18px] py-[8px] relative rounded-[6px] w-[145px]"} data-name="Type=Sidebar, Style=Label + Icon, State=Hover, Width=Fixed">
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Content">
          <div className="relative shrink-0 size-[24px]" data-name="System Icons">
            <div className="absolute inset-[8.33%]" data-name="Subtract">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col font-['Yettel_Sans_Beta:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#002340] text-[12px] whitespace-nowrap">
            <p className="leading-[1.3]">Label</p>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Sidebar" && style === "Label + Icon" && state === "Pressed" && width === "Fixed") {
    return (
      <div className={className || "content-stretch flex flex-col items-start justify-center pl-[8px] pr-[18px] py-[8px] relative rounded-[6px] w-[145px]"} data-name="Type=Sidebar, Style=Label + Icon, State=Pressed, Width=Fixed" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgb(180, 255, 0) 0%, rgb(180, 255, 0) 100%)" }}>
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Content">
          <div className="relative shrink-0 size-[24px]" data-name="System Icons">
            <div className="absolute inset-[8.33%]" data-name="Subtract">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col font-['Yettel_Sans_Beta:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#002340] text-[12px] whitespace-nowrap">
            <p className="leading-[1.3]">Label</p>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Sidebar" && style === "Label + Icon" && state === "Default" && width === "Fixed") {
    return (
      <div className={className || "content-stretch flex flex-col items-start justify-center pl-[8px] pr-[18px] py-[8px] relative rounded-[6px] w-[145px]"} data-name="Type=Sidebar, Style=Label + Icon, State=Default, Width=Fixed">
        <div className="content-stretch flex gap-[16px] items-center leading-[0] relative shrink-0" data-name="Content">
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Group">
            <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="System Icons">
              <div className="absolute inset-[8.33%]" data-name="Subtract">
                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-['Yettel_Sans_Beta:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[12px] text-[rgba(229,233,236,0.7)] tracking-[0.06px] whitespace-nowrap">
            <p className="leading-[1.3]">Label</p>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Sidebar" && style === "Label + Icon" && state === "Selected" && width === "Fixed") {
    return (
      <div className={className || "bg-[rgba(229,233,236,0.2)] content-stretch flex flex-col items-start justify-center pl-[8px] pr-[18px] py-[8px] relative rounded-[6px] w-[145px]"} data-name="Type=Sidebar, Style=Label + Icon, State=Selected, Width=Fixed">
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="info">
          <SystemIcons className="relative shrink-0 size-[24px]" name="Placeholder" />
          <div className="flex flex-col font-['Yettel_Sans_Beta:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e5e9ec] text-[12px] whitespace-nowrap">
            <p className="leading-[1.3]">Label</p>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Outlined" && style === "Selector" && state === "Default" && width === "Fixed") {
    return (
      <div className={className || "content-stretch flex gap-[12px] items-center pl-[22px] pr-[12px] py-[6px] relative rounded-[999999px] w-[144px]"} data-name="Type=Outlined, Style=Selector, State=Default, Width=Fixed">
        <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(229,233,236,0.5)] border-solid inset-0 pointer-events-none rounded-[999999px]" />
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px not-italic relative whitespace-pre-wrap" data-name="Labels">
          <p className="font-['Yettel_Sans_Beta:Regular',sans-serif] leading-[1.3] relative shrink-0 text-[12px] text-[rgba(229,233,236,0.5)] tracking-[0.06px] w-full">Select day</p>
          <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.4] relative shrink-0 text-[#e5e9ec] text-[14px] w-full">Today</p>
        </div>
        <SystemIcons className="relative shrink-0 size-[24px]" name="Arrow Down Small" />
      </div>
    );
  }
  if (type === "Contained" && style === "Selector" && state === "Default" && width === "Fixed") {
    return (
      <div className={className || "bg-[#b4ff00] content-stretch flex gap-[12px] items-center pl-[22px] pr-[12px] py-[6px] relative rounded-[999999px]"} data-name="Type=Contained, Style=Selector, State=Default, Width=Fixed">
        <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 whitespace-pre-wrap" data-name="Labels">
          <p className="font-['Yettel_Sans_Beta:Regular',sans-serif] leading-[1.3] relative shrink-0 text-[12px] text-[rgba(0,35,64,0.7)] tracking-[0.06px] w-full">Selected day</p>
          <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.4] relative shrink-0 text-[#002340] text-[14px] w-full">Today</p>
        </div>
        <div className="relative shrink-0 size-[24px]" data-name="System Icons">
          <div className="absolute inset-[45.83%_29.17%_37.5%_29.17%]">
            <div className="absolute inset-[-25%_-10%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0001 6.00004">
                <path d={svgPaths.p15d5ef00} id="Vector 89" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Outlined" && style === "Selector" && state === "Disabled" && width === "Fixed") {
    return (
      <div className={className || "bg-[rgba(229,233,236,0.2)] content-stretch flex gap-[12px] items-center pl-[22px] pr-[12px] py-[6px] relative rounded-[999999px] w-[144px]"} data-name="Type=Outlined, Style=Selector, State=Disabled, Width=Fixed">
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px not-italic relative whitespace-pre-wrap" data-name="Labels">
          <p className="font-['Yettel_Sans_Beta:Regular',sans-serif] leading-[1.3] relative shrink-0 text-[12px] text-[rgba(229,233,236,0.7)] tracking-[0.06px] w-full">Select day</p>
          <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.4] relative shrink-0 text-[#e5e9ec] text-[14px] w-full">Today</p>
        </div>
        <SystemIcons className="relative shrink-0 size-[24px]" name="Arrow Down Small" />
      </div>
    );
  }
  if (type === "Contained" && style === "Selector" && state === "Disabled" && width === "Fixed") {
    return (
      <div className={className || "bg-[rgba(229,233,236,0.2)] content-stretch flex gap-[12px] items-center pl-[22px] pr-[12px] py-[6px] relative rounded-[999999px]"} data-name="Type=Contained, Style=Selector, State=Disabled, Width=Fixed">
        <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 whitespace-pre-wrap" data-name="Labels">
          <p className="font-['Yettel_Sans_Beta:Regular',sans-serif] leading-[1.3] relative shrink-0 text-[12px] text-[rgba(229,233,236,0.7)] tracking-[0.06px] w-full">Selected day</p>
          <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.4] relative shrink-0 text-[#e5e9ec] text-[14px] w-full">Today</p>
        </div>
        <SystemIcons className="relative shrink-0 size-[24px]" name="Arrow Down Small" />
      </div>
    );
  }
  if (type === "Outlined" && style === "Selector" && state === "Hover" && width === "Fixed") {
    return (
      <div className={className || "bg-[rgba(229,233,236,0.1)] content-stretch flex gap-[12px] items-center pl-[22px] pr-[12px] py-[6px] relative rounded-[999999px] w-[144px]"} data-name="Type=Outlined, Style=Selector, State=Hover, Width=Fixed">
        <div aria-hidden="true" className="absolute border-[#e5e9ec] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[999999px]" />
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px not-italic relative whitespace-pre-wrap" data-name="Labels">
          <p className="font-['Yettel_Sans_Beta:Regular',sans-serif] leading-[1.3] relative shrink-0 text-[12px] text-[rgba(229,233,236,0.7)] tracking-[0.06px] w-full">Select day</p>
          <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.4] relative shrink-0 text-[#e5e9ec] text-[14px] w-full">Today</p>
        </div>
        <SystemIcons className="relative shrink-0 size-[24px]" name="Arrow Down Small" />
      </div>
    );
  }
  if (type === "Contained" && style === "Selector" && state === "Hover" && width === "Fixed") {
    return (
      <div className={className || "content-stretch flex gap-[12px] items-center pl-[22px] pr-[12px] py-[6px] relative rounded-[999999px]"} data-name="Type=Contained, Style=Selector, State=Hover, Width=Fixed" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%), linear-gradient(90deg, rgb(180, 255, 0) 0%, rgb(180, 255, 0) 100%)" }}>
        <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 whitespace-pre-wrap" data-name="Labels">
          <p className="font-['Yettel_Sans_Beta:Regular',sans-serif] leading-[1.3] relative shrink-0 text-[12px] text-[rgba(0,35,64,0.7)] tracking-[0.06px] w-full">Selected day</p>
          <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.4] relative shrink-0 text-[#002340] text-[14px] w-full">Today</p>
        </div>
        <div className="relative shrink-0 size-[24px]" data-name="System Icons">
          <div className="absolute inset-[45.83%_29.17%_37.5%_29.17%]">
            <div className="absolute inset-[-25%_-10%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0001 6.00004">
                <path d={svgPaths.p15d5ef00} id="Vector 89" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Outlined" && style === "Selector" && state === "Pressed" && width === "Fixed") {
    return (
      <div className={className || "bg-[rgba(229,233,236,0.1)] content-stretch flex gap-[12px] items-center opacity-50 pl-[22px] pr-[12px] py-[6px] relative rounded-[999999px] w-[144px]"} data-name="Type=Outlined, Style=Selector, State=Pressed, Width=Fixed">
        <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(229,233,236,0.5)] border-solid inset-0 pointer-events-none rounded-[999999px]" />
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px not-italic relative whitespace-pre-wrap" data-name="Labels">
          <p className="font-['Yettel_Sans_Beta:Regular',sans-serif] leading-[1.3] relative shrink-0 text-[12px] text-[rgba(229,233,236,0.7)] tracking-[0.06px] w-full">Select day</p>
          <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.4] relative shrink-0 text-[#e5e9ec] text-[14px] w-full">Today</p>
        </div>
        <SystemIcons className="relative shrink-0 size-[24px]" name="Arrow Down Small" />
      </div>
    );
  }
  if (type === "Contained" && style === "Selector" && state === "Pressed" && width === "Fixed") {
    return (
      <div className={className || "content-stretch flex gap-[12px] items-center pl-[22px] pr-[12px] py-[6px] relative rounded-[999999px]"} data-name="Type=Contained, Style=Selector, State=Pressed, Width=Fixed" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgb(180, 255, 0) 0%, rgb(180, 255, 0) 100%)" }}>
        <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 whitespace-pre-wrap" data-name="Labels">
          <p className="font-['Yettel_Sans_Beta:Regular',sans-serif] leading-[1.3] relative shrink-0 text-[12px] text-[rgba(0,35,64,0.7)] tracking-[0.06px] w-full">Selected day</p>
          <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.4] relative shrink-0 text-[#002340] text-[14px] w-full">Today</p>
        </div>
        <div className="relative shrink-0 size-[24px]" data-name="System Icons">
          <div className="absolute inset-[45.83%_29.17%_37.5%_29.17%]">
            <div className="absolute inset-[-25%_-10%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0001 6.00004">
                <path d={svgPaths.p15d5ef00} id="Vector 89" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Outlined" && style === "Label + Progress" && state === "Default" && width === "Hug Content") {
    return (
      <div className={className || "relative rounded-[999999px]"} data-name="Type=Outlined, Style=Label + Progress, State=Default, Width=Hug Content">
        <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[18px] py-[8px] relative rounded-[inherit]">
          <div className="absolute bg-[rgba(229,233,236,0.2)] inset-[0_67.57%_0_0]" data-name="Progress" />
          <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#e5e9ec] text-[16px] text-center">Label</p>
        </div>
        <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(229,233,236,0.5)] border-solid inset-0 pointer-events-none rounded-[999999px]" />
      </div>
    );
  }
  if (type === "Outlined" && style === "Label + Progress" && state === "Hover" && width === "Hug Content") {
    return (
      <div className={className || "bg-[rgba(229,233,236,0.1)] relative rounded-[999999px]"} data-name="Type=Outlined, Style=Label + Progress, State=Hover, Width=Hug Content">
        <div className="content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[18px] py-[8px] relative rounded-[inherit]">
          <div className="absolute bg-[rgba(229,233,236,0.2)] inset-[0_67.57%_0_0]" data-name="Progress" />
          <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#e5e9ec] text-[16px] text-center">Label</p>
        </div>
        <div aria-hidden="true" className="absolute border-[#e5e9ec] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[999999px]" />
      </div>
    );
  }
  return (
    <div className={className || "bg-[#b4ff00] content-stretch flex items-start p-[8px] relative rounded-[999999px]"} data-name="Type=Contained, Style=Icon, State=Default, Width=Fixed">
      <div className="relative shrink-0 size-[24px]" data-name="System Icons">
        <div className="absolute inset-[8.33%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
          </svg>
        </div>
      </div>
    </div>
  );
}
type BrandLogosProps = {
  className?: string;
  showNewLogo?: boolean;
  showOldLogo?: boolean;
  type?: "yettel Symbol" | "Yettel Logo" | "3Kids Logo" | "Play Symbol" | "TV_Circle" | "Small logo" | "Large Logo" | "App logo";
};

function BrandLogos({ className, showNewLogo = true, showOldLogo = false, type = "Yettel Logo" }: BrandLogosProps) {
  const is3KidsLogo = type === "3Kids Logo";
  const isAppLogo = type === "App logo";
  const isAppLogoOr3KidsLogo = ["App logo", "3Kids Logo"].includes(type);
  const isLargeLogo = type === "Large Logo";
  const isPlaySymbol = type === "Play Symbol";
  const isSmallLogo = type === "Small logo";
  const isTvCircle = type === "TV_Circle";
  const isYettelLogo = type === "Yettel Logo";
  const isYettelSymbol = type === "yettel Symbol";
  const isYettelSymbolOrPlaySymbol = ["yettel Symbol", "Play Symbol"].includes(type);
  return (
    <div className={className || `relative ${isTvCircle ? "size-[48px]" : isSmallLogo ? "content-stretch flex flex-col gap-[5.189px] items-center justify-center" : isPlaySymbol ? "size-[32px]" : is3KidsLogo ? "content-stretch flex flex-col items-start w-[78px]" : isYettelSymbol ? "content-stretch flex items-center justify-center size-[32px]" : isAppLogo ? "bg-[#001433] content-stretch flex items-center justify-center rounded-[3px] size-[180px]" : isLargeLogo ? "content-stretch flex flex-col items-center justify-center" : "content-stretch flex h-[32px] items-center justify-center w-[109px]"}`}>
      {isAppLogoOr3KidsLogo && (
        <div className={is3KidsLogo ? "-translate-x-1/2 absolute h-[18px] left-[calc(50%-2.28px)] top-[7px] w-[69.437px]" : "content-stretch flex flex-col gap-[12px] items-center justify-center relative shrink-0"}>
          {isAppLogo && showOldLogo && (
            <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0" data-name="Old logo">
              <div className="relative shrink-0 size-[80px]" data-name="Brand Logos">
                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
                  <path d={svgPaths.p2d87500} fill="var(--fill-0, #B4FF00)" id="Union" />
                </svg>
              </div>
              <div className="content-stretch flex h-[38.165px] items-center justify-center relative shrink-0 w-[130px]" data-name="Brand Logos">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Show new logo">
                  <div className="h-[38.165px] relative shrink-0 w-[100.844px]" data-name="New logo">
                    <div className="absolute inset-[29.31%_40.71%_27.77%_0]" data-name="Yettel_Wordmark_Blue">
                      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 545.34 149.41">
                        <g id="Yettel_Wordmark_Blue">
                          <path d={svgPaths.p18bc5e00} fill="var(--fill-0, #B4FF00)" id="Vector" />
                          <path d={svgPaths.p12f80700} fill="var(--fill-0, #B4FF00)" id="Vector_2" />
                          <path d={svgPaths.p3c8a7900} fill="var(--fill-0, #B4FF00)" id="Vector_3" />
                          <path d={svgPaths.p32947f00} fill="var(--fill-0, #B4FF00)" id="Vector_4" />
                          <path d={svgPaths.p7165f00} fill="var(--fill-0, #B4FF00)" id="Vector_5" />
                          <path d={svgPaths.p18fee300} fill="var(--fill-0, #B4FF00)" id="Vector_6" />
                          <path d={svgPaths.p45da400} fill="var(--fill-0, #B4FF00)" id="Vector_7" />
                        </g>
                      </svg>
                    </div>
                    <div className="absolute inset-[30.97%_6.3%_28.47%_68.59%]" data-name="Vector">
                      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 230.94 141.18">
                        <path d={svgPaths.p3fde6550} fill="var(--fill-0, #B4FF00)" id="Vector" />
                      </svg>
                    </div>
                    <div className="absolute inset-[0_0_0_62.15%]" data-name="Vector">
                      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 348.12 348.12">
                        <path d={svgPaths.p1d271f80} fill="var(--fill-0, #B4FF00)" id="Vector" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {isAppLogo && showNewLogo && (
            <div className="h-[49.199px] relative shrink-0 w-[130px]" data-name="New logo">
              <div className="absolute inset-[29.31%_40.71%_27.77%_0]" data-name="Yettel_Wordmark_Blue">
                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 545.34 149.41">
                  <g id="Yettel_Wordmark_Blue">
                    <path d={svgPaths.p18bc5e00} fill="var(--fill-0, #B4FF00)" id="Vector" />
                    <path d={svgPaths.p12f80700} fill="var(--fill-0, #B4FF00)" id="Vector_2" />
                    <path d={svgPaths.p3c8a7900} fill="var(--fill-0, #B4FF00)" id="Vector_3" />
                    <path d={svgPaths.p32947f00} fill="var(--fill-0, #B4FF00)" id="Vector_4" />
                    <path d={svgPaths.p7165f00} fill="var(--fill-0, #B4FF00)" id="Vector_5" />
                    <path d={svgPaths.p18fee300} fill="var(--fill-0, #B4FF00)" id="Vector_6" />
                    <path d={svgPaths.p45da400} fill="var(--fill-0, #B4FF00)" id="Vector_7" />
                  </g>
                </svg>
              </div>
              <div className="absolute inset-[30.97%_6.3%_28.47%_68.59%]" data-name="Vector">
                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 230.94 141.18">
                  <path d={svgPaths.p3fde6550} fill="var(--fill-0, #B4FF00)" id="Vector" />
                </svg>
              </div>
              <div className="absolute inset-[0_0_0_62.15%]" data-name="Vector">
                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 348.12 348.12">
                  <path d={svgPaths.p1d271f80} fill="var(--fill-0, #B4FF00)" id="Vector" />
                </svg>
              </div>
            </div>
          )}
          {is3KidsLogo && (
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 69.4367 18">
              <g id="Group 1">
                <path clipRule="evenodd" d={svgPaths.p3e125a80} fill="var(--fill-0, #B4FF00)" fillRule="evenodd" id="3Kids" />
                <g id="Vector">
                  <path d={svgPaths.p35742000} fill="var(--fill-0, #B4FF00)" />
                  <path d={svgPaths.p3aba700} fill="var(--fill-0, #B4FF00)" />
                </g>
              </g>
            </svg>
          )}
        </div>
      )}
      {isYettelSymbolOrPlaySymbol && (
        <div className={`absolute ${isPlaySymbol ? "bottom-1/2 left-0 right-0 top-0" : "h-[26.955px] left-[0.19px] top-[2.71px] w-[31.805px]"}`} data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox={isPlaySymbol ? "0 0 32 16" : "0 0 31.8051 26.9553"}>
            {isYettelSymbol && (
              <g id="Vector">
                <path d={svgPaths.p14c22c80} fill="var(--fill-0, #B4FF00)" />
                <path d={svgPaths.p33382310} fill="var(--fill-0, #B4FF00)" />
              </g>
            )}
            {isPlaySymbol && <path d={svgPaths.p13938d00} fill="var(--fill-0, #C4DFE9)" id="Vector" />}
          </svg>
        </div>
      )}
      {isYettelLogo && showOldLogo && (
        <div className="h-[48px] relative shrink-0 w-[162px]" data-name="Yettellimelogo 1">
          <div className="absolute inset-[23.49%_84.19%_21.15%_0]" data-name="Vector">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 25.6144 26.5727">
              <path d={svgPaths.p3677b7e0} fill="var(--fill-0, #B4FF00)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[38.35%_74.93%_20.21%_12.85%]" data-name="Vector">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.7864 19.891">
              <path d={svgPaths.p2b59580} fill="var(--fill-0, #B4FF00)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[29.18%_65.51%_20.21%_26.55%]" data-name="Vector">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 12.867 24.2945">
              <path d={svgPaths.p3cbcbc00} fill="var(--fill-0, #B4FF00)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[29.18%_56.88%_20.21%_35.17%]" data-name="Vector">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8673 24.2945">
              <path d={svgPaths.p346e2e00} fill="var(--fill-0, #B4FF00)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[38.35%_44.59%_20.21%_43.2%]" data-name="Vector">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.7863 19.891">
              <path d={svgPaths.pe8709f0} fill="var(--fill-0, #B4FF00)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[21.19%_39.47%_21.16%_56.89%]" data-name="Vector">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 5.89584 27.6723">
              <path d={svgPaths.p35f75580} fill="var(--fill-0, #B4FF00)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[65.32%_33.49%_20.21%_62.01%]" data-name="Vector">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 7.29033 6.94759">
              <path d={svgPaths.p144e8a80} fill="var(--fill-0, #B4FF00)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[0_0_0_70.37%]" data-name="Brand Logos">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
              <path d={svgPaths.p2d87500} fill="var(--fill-0, #B4FF00)" id="Union" />
            </svg>
          </div>
        </div>
      )}
      {isYettelLogo && showNewLogo && (
        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Show new logo">
          <div className="h-[32px] relative shrink-0 w-[84.554px]" data-name="New logo">
            <div className="absolute inset-[29.31%_40.71%_27.77%_0]" data-name="Yettel_Wordmark_Blue">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 50.1289 13.7341">
                <g id="Yettel_Wordmark_Blue">
                  <path d={svgPaths.p35d96e00} fill="var(--fill-0, #B4FF00)" id="Vector" />
                  <path d={svgPaths.pe394880} fill="var(--fill-0, #B4FF00)" id="Vector_2" />
                  <path d={svgPaths.p5793900} fill="var(--fill-0, #B4FF00)" id="Vector_3" />
                  <path d={svgPaths.p31554a00} fill="var(--fill-0, #B4FF00)" id="Vector_4" />
                  <path d={svgPaths.p80700} fill="var(--fill-0, #B4FF00)" id="Vector_5" />
                  <path d={svgPaths.p10186280} fill="var(--fill-0, #B4FF00)" id="Vector_6" />
                  <path d={svgPaths.p37e60100} fill="var(--fill-0, #B4FF00)" id="Vector_7" />
                </g>
              </svg>
            </div>
            <div className="absolute inset-[30.97%_6.3%_28.47%_68.59%]" data-name="Vector">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 21.2285 12.9776">
                <path d={svgPaths.p1f8d4200} fill="var(--fill-0, #B4FF00)" id="Vector" />
              </svg>
            </div>
            <div className="absolute inset-[0_0_0_62.15%]" data-name="Vector">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                <path d={svgPaths.p4bb5d00} fill="var(--fill-0, #B4FF00)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      )}
      {isLargeLogo && showNewLogo && (
        <div className="h-[236.914px] relative shrink-0 w-[626px]" data-name="New logo">
          <div className="absolute inset-[29.31%_40.71%_27.77%_0]" data-name="Yettel_Wordmark_Blue">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 545.34 149.41">
              <g id="Yettel_Wordmark_Blue">
                <path d={svgPaths.p18bc5e00} fill="var(--fill-0, #B4FF00)" id="Vector" />
                <path d={svgPaths.p12f80700} fill="var(--fill-0, #B4FF00)" id="Vector_2" />
                <path d={svgPaths.p3c8a7900} fill="var(--fill-0, #B4FF00)" id="Vector_3" />
                <path d={svgPaths.p32947f00} fill="var(--fill-0, #B4FF00)" id="Vector_4" />
                <path d={svgPaths.p7165f00} fill="var(--fill-0, #B4FF00)" id="Vector_5" />
                <path d={svgPaths.p18fee300} fill="var(--fill-0, #B4FF00)" id="Vector_6" />
                <path d={svgPaths.p45da400} fill="var(--fill-0, #B4FF00)" id="Vector_7" />
              </g>
            </svg>
          </div>
          <div className="absolute inset-[30.97%_6.3%_28.47%_68.59%]" data-name="Vector">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 230.94 141.18">
              <path d={svgPaths.p3fde6550} fill="var(--fill-0, #B4FF00)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[0_0_0_62.15%]" data-name="Vector">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 348.12 348.12">
              <path d={svgPaths.p1d271f80} fill="var(--fill-0, #B4FF00)" id="Vector" />
            </svg>
          </div>
        </div>
      )}
      {isPlaySymbol && (
        <div className="absolute bottom-0 left-0 right-0 top-1/2" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 16">
            <path d={svgPaths.p2d093000} fill="var(--fill-0, #B4FF00)" id="Vector" />
          </svg>
        </div>
      )}
      {isSmallLogo && showOldLogo && (
        <div className="content-stretch flex flex-col gap-[5px] items-center relative shrink-0" data-name="old logo">
          <div className="relative shrink-0 size-[22.522px]" data-name="Brand Logos">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
              <path d={svgPaths.p2d87500} fill="var(--fill-0, #B4FF00)" id="Union" />
            </svg>
          </div>
          <div className="content-stretch flex h-[20.289px] items-center justify-center relative shrink-0 w-[69.111px]" data-name="Brand Logos">
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Show new logo">
              <div className="h-[20.289px] relative shrink-0 w-[53.611px]" data-name="New logo">
                <div className="absolute inset-[29.31%_40.71%_27.77%_0]" data-name="Yettel_Wordmark_Blue">
                  <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 545.34 149.41">
                    <g id="Yettel_Wordmark_Blue">
                      <path d={svgPaths.p18bc5e00} fill="var(--fill-0, #B4FF00)" id="Vector" />
                      <path d={svgPaths.p12f80700} fill="var(--fill-0, #B4FF00)" id="Vector_2" />
                      <path d={svgPaths.p3c8a7900} fill="var(--fill-0, #B4FF00)" id="Vector_3" />
                      <path d={svgPaths.p32947f00} fill="var(--fill-0, #B4FF00)" id="Vector_4" />
                      <path d={svgPaths.p7165f00} fill="var(--fill-0, #B4FF00)" id="Vector_5" />
                      <path d={svgPaths.p18fee300} fill="var(--fill-0, #B4FF00)" id="Vector_6" />
                      <path d={svgPaths.p45da400} fill="var(--fill-0, #B4FF00)" id="Vector_7" />
                    </g>
                  </svg>
                </div>
                <div className="absolute inset-[30.97%_6.3%_28.47%_68.59%]" data-name="Vector">
                  <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 230.94 141.18">
                    <path d={svgPaths.p3fde6550} fill="var(--fill-0, #B4FF00)" id="Vector" />
                  </svg>
                </div>
                <div className="absolute inset-[0_0_0_62.15%]" data-name="Vector">
                  <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 348.12 348.12">
                    <path d={svgPaths.p1d271f80} fill="var(--fill-0, #B4FF00)" id="Vector" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isSmallLogo && showNewLogo && (
        <div className="h-[26.114px] relative shrink-0 w-[69px]" data-name="New logo">
          <div className="absolute inset-[29.31%_40.71%_27.77%_0]" data-name="Yettel_Wordmark_Blue">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 545.34 149.41">
              <g id="Yettel_Wordmark_Blue">
                <path d={svgPaths.p18bc5e00} fill="var(--fill-0, #B4FF00)" id="Vector" />
                <path d={svgPaths.p12f80700} fill="var(--fill-0, #B4FF00)" id="Vector_2" />
                <path d={svgPaths.p3c8a7900} fill="var(--fill-0, #B4FF00)" id="Vector_3" />
                <path d={svgPaths.p32947f00} fill="var(--fill-0, #B4FF00)" id="Vector_4" />
                <path d={svgPaths.p7165f00} fill="var(--fill-0, #B4FF00)" id="Vector_5" />
                <path d={svgPaths.p18fee300} fill="var(--fill-0, #B4FF00)" id="Vector_6" />
                <path d={svgPaths.p45da400} fill="var(--fill-0, #B4FF00)" id="Vector_7" />
              </g>
            </svg>
          </div>
          <div className="absolute inset-[30.97%_6.3%_28.47%_68.59%]" data-name="Vector">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 230.94 141.18">
              <path d={svgPaths.p3fde6550} fill="var(--fill-0, #B4FF00)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[0_0_0_62.15%]" data-name="Vector">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 348.12 348.12">
              <path d={svgPaths.p1d271f80} fill="var(--fill-0, #B4FF00)" id="Vector" />
            </svg>
          </div>
        </div>
      )}
      {isTvCircle && (
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
          <path d={svgPaths.p2d87500} fill="var(--fill-0, #B4FF00)" id="Union" />
        </svg>
      )}
    </div>
  );
}

function SideGradient({ className }: { className?: string }) {
  return <div className={className || "h-[540px] w-[720px]"} data-name="Side Gradient" style={{ backgroundImage: "linear-gradient(90deg, rgb(0, 35, 64) 0%, rgba(0, 35, 64, 0.992) 6.6667%, rgba(0, 35, 64, 0.965) 13.333%, rgba(0, 35, 64, 0.918) 20%, rgba(0, 35, 64, 0.855) 26.667%, rgba(0, 35, 64, 0.77) 33.333%, rgba(0, 35, 64, 0.667) 40%, rgba(0, 35, 64, 0.557) 46.667%, rgba(0, 35, 64, 0.443) 53.333%, rgba(0, 35, 64, 0.333) 60%, rgba(0, 35, 64, 0.23) 66.667%, rgba(0, 35, 64, 0.145) 73.333%, rgba(0, 35, 64, 0.082) 80%, rgba(0, 35, 64, 0.035) 86.667%, rgba(0, 35, 64, 0.008) 93.333%, rgba(0, 35, 64, 0) 100%)" }} />;
}
type BackProps = {
  className?: string;
  button?: "Default" | "Ghost" | "Breadcrump";
  state?: "Default" | "Pressed" | "Hover" | "Active" | "3" | "3+" | "2" | "1";
};

function Back({ className, button = "Ghost", state = "Default" }: BackProps) {
  const isBreadcrumpAnd1 = button === "Breadcrump" && state === "1";
  const isBreadcrumpAnd2 = button === "Breadcrump" && state === "2";
  const isBreadcrumpAnd3 = button === "Breadcrump" && state === "3+";
  const isBreadcrumpAnd31 = button === "Breadcrump" && state === "3";
  const isDefaultAndActive = button === "Default" && state === "Active";
  const isDefaultAndDefault = button === "Default" && state === "Default";
  const isDefaultAndPressed = button === "Default" && state === "Pressed";
  const isGhostAndDefault = button === "Ghost" && state === "Default";
  const isGhostAndHover = button === "Ghost" && state === "Hover";
  const isGhostAndPressed = button === "Ghost" && state === "Pressed";
  return (
    <div className={className || `content-stretch flex relative ${isDefaultAndActive ? "bg-[#b4ff00] items-center justify-center p-[8px] rounded-[999999px]" : isDefaultAndDefault || isDefaultAndPressed ? "items-center justify-center p-[8px] rounded-[999999px]" : isGhostAndPressed ? "gap-[8px] items-start opacity-50" : isGhostAndHover ? "cursor-pointer gap-[8px] items-start" : "gap-[8px] items-start"}`} style={isDefaultAndPressed ? { backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgb(180, 255, 0) 0%, rgb(180, 255, 0) 100%)" } : undefined}>
      {(isGhostAndDefault || isGhostAndHover || isGhostAndPressed || isBreadcrumpAnd3 || isBreadcrumpAnd31 || isBreadcrumpAnd2 || isBreadcrumpAnd1) && (
        <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="ico + title">
          {(isGhostAndDefault || isGhostAndHover || isGhostAndPressed || isBreadcrumpAnd1) && <SystemIcons className="relative shrink-0 size-[24px]" name="Arrow Left" />}
          <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#eee] text-[20px] tracking-[-0.3px]">{isBreadcrumpAnd3 || isBreadcrumpAnd31 || isBreadcrumpAnd2 || isBreadcrumpAnd1 ? "First Page" : isGhostAndHover || isGhostAndPressed ? "Back" : "Back"}</p>
          {(isBreadcrumpAnd3 || isBreadcrumpAnd31 || isBreadcrumpAnd2) && <SystemIcons className="relative shrink-0 size-[24px]" name="Arrow Right" />}
        </div>
      )}
      {(isBreadcrumpAnd3 || isBreadcrumpAnd31 || isBreadcrumpAnd2) && (
        <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="ico + title">
          <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#eee] text-[20px] tracking-[-0.3px]">{isBreadcrumpAnd2 ? "Settings" : isBreadcrumpAnd31 ? "Preceding Page" : isBreadcrumpAnd3 ? "..." : ""}</p>
          {(isBreadcrumpAnd3 || isBreadcrumpAnd31) && <SystemIcons className="relative shrink-0 size-[24px]" name="Arrow Right" />}
        </div>
      )}
      {(isBreadcrumpAnd3 || isBreadcrumpAnd31) && (
        <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="ico + title">
          <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#eee] text-[20px] tracking-[-0.3px]">{isBreadcrumpAnd31 ? "Settings" : isBreadcrumpAnd3 ? "Preceding Page" : ""}</p>
          {isBreadcrumpAnd3 && <SystemIcons className="relative shrink-0 size-[24px]" name="Arrow Right" />}
        </div>
      )}
      {isDefaultAndDefault && (
        <>
          <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(229,233,236,0.5)] border-solid inset-0 pointer-events-none rounded-[999999px]" />
          <SystemIcons className="relative shrink-0 size-[24px]" name="Arrow Left" />
        </>
      )}
      {isDefaultAndActive && (
        <div className="relative shrink-0 size-[24px]" data-name="System Icons">
          <div className="absolute inset-[20.83%_41.67%_20.83%_33.33%]">
            <div className="absolute inset-[-7.14%_-16.67%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00002 16">
                <path d="M7 1.00002L1 8.00002L7 15" id="Vector 89" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      )}
      {isDefaultAndPressed && (
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Group">
          <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="System Icons">
            <div className="absolute inset-[20.83%_41.67%_20.83%_33.33%]">
              <div className="absolute inset-[-7.14%_-16.67%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00002 16">
                  <path d="M7 1.00002L1 8.00002L7 15" id="Vector 89" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}
      {isBreadcrumpAnd3 && (
        <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="ico + title">
          <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#eee] text-[20px] tracking-[-0.3px]">Settings</p>
        </div>
      )}
    </div>
  );
}

function Corner({ className }: { className?: string }) {
  return (
    <div className={className || "h-[540px] relative w-[720px]"} data-name="Corner">
      <div className="absolute h-[360px] right-0 top-0 w-[640px]" data-name="Gradient" style={{ backgroundImage: "linear-gradient(201.026deg, rgba(0, 35, 64, 0.7) 0%, rgba(0, 35, 64, 0.694) 2.7805%, rgba(0, 35, 64, 0.675) 5.561%, rgba(0, 35, 64, 0.643) 8.3415%, rgba(0, 35, 64, 0.596) 11.122%, rgba(0, 35, 64, 0.537) 13.902%, rgba(0, 35, 64, 0.467) 16.683%, rgba(0, 35, 64, 0.39) 19.463%, rgba(0, 35, 64, 0.31) 22.244%, rgba(0, 35, 64, 0.23) 25.024%, rgba(0, 35, 64, 0.16) 27.805%, rgba(0, 35, 64, 0.1) 30.585%, rgba(0, 35, 64, 0.06) 33.366%, rgba(0, 35, 64, 0.024) 36.146%, rgba(0, 35, 64, 0.008) 38.927%, rgba(0, 35, 64, 0) 41.707%)" }} />
    </div>
  );
}
type FlagProps = {
  className?: string;
  property1?: "uk" | "srb";
};

function Flag({ className, property1 = "uk" }: FlagProps) {
  const isSrb = property1 === "srb";
  return (
    <div className={className || "relative size-[24px]"}>
      <div className="absolute aspect-[1280/854] left-0 right-0 rounded-[2px] top-[3.99px]" data-name="Flag_of_Serbia.svg 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[2px] size-full" src={isSrb ? imgFlagOfSerbiaSvg2 : imgFlagOfSerbiaSvg1} />
      </div>
    </div>
  );
}

function TopNavigation({ className }: { className?: string }) {
  return (
    <div className={className || "h-[114px] relative w-[960px]"} data-name="Top Navigation">
      <div className="absolute flex inset-0 items-center justify-center">
        <div className="-scale-y-100 flex-none h-[114px] w-[960px]">
          <div className="opacity-70 size-full" data-name="Gradient ↓" style={{ backgroundImage: "linear-gradient(4.26326e-14deg, rgb(0, 35, 64) 0%, rgba(0, 35, 64, 0.992) 6.6667%, rgba(0, 35, 64, 0.965) 13.333%, rgba(0, 35, 64, 0.918) 20%, rgba(0, 35, 64, 0.855) 26.667%, rgba(0, 35, 64, 0.77) 33.333%, rgba(0, 35, 64, 0.667) 40%, rgba(0, 35, 64, 0.557) 46.667%, rgba(0, 35, 64, 0.443) 53.333%, rgba(0, 35, 64, 0.333) 60%, rgba(0, 35, 64, 0.23) 66.667%, rgba(0, 35, 64, 0.145) 73.333%, rgba(0, 35, 64, 0.082) 80%, rgba(0, 35, 64, 0.035) 86.667%, rgba(0, 35, 64, 0.008) 93.333%, rgba(0, 35, 64, 0) 100%)" }} />
        </div>
      </div>
    </div>
  );
}
type PhoneSubPageTabsProps = {
  className?: string;
  state?: "Default" | "Active";
};

function PhoneSubPageTabs({ className, state = "Default" }: PhoneSubPageTabsProps) {
  const isActive = state === "Active";
  return (
    <div className={className || `h-[3px] relative ${isActive ? "bg-[#e5e9ec] rounded-[6px]" : ""}`}>
      <div className="flex flex-row items-end justify-center size-full">
        <div className="content-stretch flex h-full items-end justify-center px-[16px] py-[14px] relative">
          <p className={`font-["Yettel_Sans_Beta:Bold",sans-serif] leading-[1.4] not-italic relative shrink-0 text-[14px] text-center ${isActive ? "text-[#e5e9ec]" : "text-[rgba(229,233,236,0.7)]"}`}>Label</p>
        </div>
      </div>
    </div>
  );
}
type TabletMainPageTabsProps = {
  className?: string;
  state?: "Default" | "Active";
};

function TabletMainPageTabs({ className, state = "Active" }: TabletMainPageTabsProps) {
  const isActive = state === "Active";
  const isDefault = state === "Default";
  return (
    <div className={className || "-translate-x-1/2 content-stretch flex flex-col items-center justify-center py-[12px] relative w-[168px]"}>
      <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Tab">
        {isActive && (
          <>
            <SystemIcons className="relative shrink-0 size-[24px]" name="Placeholder" />
            <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[#e5e9ec] text-[12px]">Label</p>
          </>
        )}
        {isDefault && (
          <>
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] opacity-70 place-items-start relative shrink-0" data-name="Group">
              <SystemIcons className="col-1 ml-0 mt-0 relative row-1 size-[24px]" name="Placeholder" />
            </div>
            <p className="font-['Yettel_Sans_Beta:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[12px] text-[rgba(229,233,236,0.7)] tracking-[0.06px]">Label</p>
          </>
        )}
      </div>
    </div>
  );
}
type PhoneMainPageTabsProps = {
  className?: string;
  state?: "Default" | "Active";
};

function PhoneMainPageTabs({ className, state = "Active" }: PhoneMainPageTabsProps) {
  const isActive = state === "Active";
  const isDefault = state === "Default";
  return (
    <div className={className || "-translate-x-1/2 relative w-[72px]"}>
      <div className={`-translate-y-1/2 absolute flex flex-col justify-center leading-[0] left-[4px] not-italic right-[4px] text-[10px] text-center top-[calc(50%+12px)] ${isDefault ? "font-['Inter:Regular',sans-serif] font-normal text-[rgba(229,233,236,0.7)] tracking-[0.15px]" : "font-['Inter:Extra_Bold',sans-serif] font-extrabold text-[#e5e9ec]"}`}>
        <p className="leading-[1.6] whitespace-pre-wrap">Label</p>
      </div>
      {isActive && <SystemIcons className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-[calc(50%-8px)]" name="Placeholder" />}
      {isDefault && (
        <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-1/2 top-[calc(50%-8px)]" data-name="Group">
          <SystemIcons className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 opacity-70 size-[24px] top-[calc(50%-8px)]" name="Placeholder" />
        </div>
      )}
    </div>
  );
}
type SystemIconsImportedProps = {
  className?: string;
  filled?: boolean;
  large?: boolean;
  name?: "18+" | "Action" | "Airplay" | "Alarm" | "Alarm Add" | "Apps" | "Arrow Down" | "Arrow Down Small" | "Arrow Left" | "Arrow Left Small" | "Arrow Right" | "Arrow Right Small" | "Arrow Up" | "Arrow Up Small" | "Audiobook" | "Home Back" | "Bookmark" | "Bookmark Filled" | "Bulb" | "Calendar" | "Camera" | "Camera Crossed" | "Cart" | "Cast" | "Cast Available" | "Cast Connected" | "Catchup" | "Catchup Crossed" | "Checkmark" | "Checkmark Circular" | "Checkmark Circular Filled" | "Clock" | "Code" | "Collapse" | "Comedy" | "Crime" | "Dislike" | "Documentary" | "Download" | "Drama" | "Enter" | "Exit" | "Expand" | "Eye" | "Eye Crossed" | "Family" | "Filter" | "Flag" | "Football" | "Forward" | "Games" | "Google Play" | "Handle" | "Heart" | "Heart Filled" | "Home" | "Image" | "Info" | "Info Filled" | "Kids" | "Like" | "Link" | "List" | "Live" | "Live 2" | "Locked" | "Manage" | "Mic" | "Mic Crossed" | "Minus" | "Minus Circular" | "Minus Circular Filled" | "More" | "More Media" | "Movies" | "Music Mic" | "Music Note" | "Next" | "Notification" | "Notification Crossed" | "Notification New" | "On Demand" | "Pause" | "Pause Circular" | "Pencil" | "Phone" | "PiP Btm L" | "Placeholder" | "Play" | "Play Circular" | "Plus" | "Plus Circular" | "Plus Circular Filled" | "Power" | "Radio" | "Radio Checked" | "Record" | "Reorder" | "Rewind" | "Route" | "Route Dashed" | "Sci-Fi" | "Search" | "Series" | "Settings" | "Share" | "Skip Backward" | "Skip Forward" | "Smile" | "Sort" | "Sort Ascending" | "Sort Descending" | "Speach Bubble" | "Star" | "Star Filled" | "Start Over" | "Stats" | "TV Program" | "Tablet" | "Trash" | "Trophy" | "Unlocked" | "Update" | "User" | "User Group" | "Volume High" | "Volume Low" | "Volume Mute" | "Wifi No Signal" | "X" | "X Small" | "TV" | "No Video" | "Email" | "Globe" | "Antenna" | "Satellite" | "Cable TV" | "Question" | "Password" | "Credit Card" | "Dissatisfied" | "Ok With" | "Satisfied" | "Somewhat Dissatisfied" | "Somewhat Satisfied" | "Exclamation" | "Exclamation Border" | "EPG-Mini" | "Join Now" | "Dark Mode" | "Light Mode" | "Brightness" | "Download Progress" | "History" | "PiP Top R" | "PiP" | "PiP Top L" | "Present" | "Drag" | "AI" | "Keyboard" | "PiP Expand";
};

function SystemIconsImported({ className, filled = false, large = false, name = "Airplay" }: SystemIconsImportedProps) {
  if (name === "Apps" && !large && !filled) {
    return (
      <div className={className || "relative rounded-[4px] size-[24px]"} data-name="Name=Apps, Large=No, Filled=No">
        <div className="absolute inset-[12.5%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.p1c58900} fill="var(--fill-0, #EEEEEE)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Audiobook" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Audiobook, Large=No, Filled=No">
        <div className="absolute inset-[8.33%_12.5%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 18 19.9999">
            <path d={svgPaths.p3fa0db00} fill="var(--fill-0, #EEEEEE)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Calendar" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Calendar, Large=No, Filled=No">
        <div className="absolute inset-[8.33%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p1aec5a80} fill="var(--fill-0, #EEEEEE)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Cart" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Cart, Large=No, Filled=No">
        <div className="absolute inset-[8.33%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9998 20">
            <path d={svgPaths.p1e2fa000} fill="var(--fill-0, #EEEEEE)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Code" && !large && !filled) {
    return (
      <div className={className || "h-[24.001px] relative w-[24px]"} data-name="Name=Code, Large=No, Filled=No">
        <div className="absolute inset-[16.67%_8.33%]" data-name="Combined Shape">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9992 16.0002">
            <path d={svgPaths.pdd5600} fill="var(--fill-0, #EEEEEE)" id="Combined Shape" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Download" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Download, Large=No, Filled=No">
        <div className="absolute inset-[16.67%_20.83%_8.33%_20.83%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 14 18">
            <path d={svgPaths.p31ad9b00} fill="var(--fill-0, #EEEEEE)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Pencil" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Pencil, Large=No, Filled=No">
        <div className="absolute inset-[16.67%]" data-name="edit">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <g id="edit">
              <path d={svgPaths.p2ffb1a00} fill="var(--fill-0, #EEEEEE)" />
              <path d={svgPaths.p9e1dac0} fill="var(--fill-0, #EEEEEE)" />
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Flag" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Flag, Large=No, Filled=No">
        <div className="absolute inset-[8.33%_16.67%]" data-name="Combined Shape">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
            <path d={svgPaths.p10546580} fill="var(--fill-0, #EEEEEE)" id="Combined Shape" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Filter" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Filter, Large=No, Filled=No">
        <div className="absolute bottom-[16.67%] left-[8.33%] right-[8.33%] top-1/4" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 14">
            <path d={svgPaths.p22fd6000} fill="var(--fill-0, #EEEEEE)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Handle" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Handle, Large=No, Filled=No">
        <div className="absolute inset-[8.33%]" data-name="ico epg slider">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p2f6cc700} fill="var(--fill-0, #EEEEEE)" id="ico epg slider" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Bulb" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Bulb, Large=No, Filled=No">
        <div className="absolute inset-[8.33%_20.83%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 14 20">
            <path d={svgPaths.p80e7fb0} fill="var(--fill-0, #EEEEEE)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Home" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Home, Large=No, Filled=No">
        <div className="absolute inset-[8.33%]" data-name="ico_home">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9998 19.9999">
            <path d={svgPaths.p3ea09880} fill="var(--fill-0, #EEEEEE)" id="ico_home" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Home Back" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Home Back, Large=No, Filled=No">
        <div className="absolute inset-[8.33%]" data-name="Vector 95 (Stroke)">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path clipRule="evenodd" d={svgPaths.p1aa6a900} fill="var(--fill-0, #EEEEEE)" fillRule="evenodd" id="Vector 95 (Stroke)" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Update" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Update, Large=No, Filled=No">
        <div className="absolute inset-[8.33%_5.66%_8.33%_5.71%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 21.271 20">
            <path d={svgPaths.p1b863b00} fill="var(--fill-0, #EEEEEE)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Stats" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Stats, Large=No, Filled=No">
        <div className="absolute inset-[8.33%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p3c602880} fill="var(--fill-0, #EEEEEE)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "More" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=More, Large=No, Filled=No">
        <div className="absolute inset-[41.67%_16.67%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16 4">
            <path d={svgPaths.p1bde2100} fill="var(--fill-0, #EEEEEE)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "More Media" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=More Media, Large=No, Filled=No">
        <div className="absolute inset-[12.5%_4.17%]" data-name="ico_more_media">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18">
            <path d={svgPaths.p363b9c70} fill="var(--fill-0, #EEEEEE)" id="ico_more_media" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Movies" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Movies, Large=No, Filled=No">
        <div className="absolute inset-[8.33%_12.5%]" data-name="Frame">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
            <g clipPath="url(#clip0_3_31016)" id="Frame">
              <path d={svgPaths.p814a700} fill="var(--fill-0, #EEEEEE)" id="Subtract" />
            </g>
            <defs>
              <clipPath id="clip0_3_31016">
                <rect fill="white" height="20" width="18" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    );
  }
  if (name === "On Demand" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=On Demand, Large=No, Filled=No">
        <div className="absolute inset-[12.5%_8.33%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
            <path d={svgPaths.p23bda000} fill="var(--fill-0, #EEEEEE)" id="Subtract" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Record" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Record, Large=No, Filled=No">
        <div className="absolute inset-[8.33%]" data-name="ico_record_border">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p204c5900} fill="var(--fill-0, #EEEEEE)" id="ico_record_border" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Reorder" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Reorder, Large=No, Filled=No">
        <div className="absolute inset-[8.33%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p1dd0a380} fill="var(--fill-0, #EEEEEE)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Search" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Search, Large=No, Filled=No">
        <div className="absolute inset-[8.33%]" data-name="ico_search">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9999 19.9999">
            <path d={svgPaths.p112fb6f0} fill="var(--fill-0, #EEEEEE)" id="ico_search" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Image" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Image, Large=No, Filled=No">
        <div className="absolute inset-[12.5%_4.17%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18">
            <path d={svgPaths.p3153dd80} fill="var(--fill-0, #EEEEEE)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Series" && !large && !filled) {
    return (
      <div className={className || "h-[24px] relative w-[23.999px]"} data-name="Name=Series, Large=No, Filled=No">
        <div className="absolute inset-[12.5%_16.67%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9993 18">
            <path d={svgPaths.p15612500} fill="var(--fill-0, #EEEEEE)" id="Subtract" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Settings" && !large && !filled) {
    return (
      <div className={className || "relative rounded-[3px] size-[24px]"} data-name="Name=Settings, Large=No, Filled=No">
        <div className="absolute inset-[8.33%]" data-name="ico_settings">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path clipRule="evenodd" d={svgPaths.p34800900} fill="var(--fill-0, #EEEEEE)" fillRule="evenodd" id="ico_settings" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Share" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Share, Large=No, Filled=No">
        <div className="absolute inset-[8.33%_16.67%]" data-name="ico_share">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
            <path d={svgPaths.p375b6300} fill="var(--fill-0, #EEEEEE)" id="ico_share" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Speach Bubble" && !large && !filled) {
    return (
      <div className={className || "h-[24.002px] relative w-[24px]"} data-name="Name=Speach Bubble, Large=No, Filled=No">
        <div className="absolute inset-[12.5%_4.17%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18.0022">
            <path d={svgPaths.p3202280} fill="var(--fill-0, #EEEEEE)" id="Subtract" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Trash" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Trash, Large=No, Filled=No">
        <div className="absolute inset-[8.33%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p22f21000} fill="var(--fill-0, #EEEEEE)" id="Subtract" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "TV Program" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=TV Program, Large=No, Filled=No">
        <div className="absolute inset-[12.5%_4.17%]">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18">
            <g id="Group 2152">
              <path d={svgPaths.p26994c00} fill="var(--fill-0, #EEEEEE)" id="ico_tv" />
              <path d={svgPaths.p2adc6e00} fill="var(--fill-0, #EEEEEE)" id="Union" />
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Games" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Games, Large=No, Filled=No">
        <div className="absolute inset-[20.83%_8.33%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 14">
            <path d={svgPaths.p302ad00} fill="var(--fill-0, #EEEEEE)" id="Subtract" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Smile" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Smile, Large=No, Filled=No">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p1013bf00} fill="var(--fill-0, #EEEEEE)" id="Vector" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Google Play" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Google Play, Large=No, Filled=No">
        <div className="absolute inset-[8.33%_8.33%_8.33%_12.5%]" data-name="Group">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19.9998">
            <g id="Group">
              <path clipRule="evenodd" d={svgPaths.p772d400} fill="var(--fill-0, #EEEEEE)" fillRule="evenodd" id="Vector" />
              <path clipRule="evenodd" d={svgPaths.p2aeac200} fill="var(--fill-0, #EEEEEE)" fillRule="evenodd" id="Vector_2" />
              <path clipRule="evenodd" d={svgPaths.p15e68580} fill="var(--fill-0, #EEEEEE)" fillRule="evenodd" id="Vector_3" />
              <path clipRule="evenodd" d={svgPaths.p357e8480} fill="var(--fill-0, #EEEEEE)" fillRule="evenodd" id="Vector_4" />
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Placeholder" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Placeholder, Large=No, Filled=No">
        <div className="absolute inset-[8.33%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p50c9680} fill="var(--fill-0, #EEEEEE)" id="Subtract" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "List" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=List, Large=No, Filled=No">
        <div className="absolute inset-[20.83%_8.33%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 14">
            <path d={svgPaths.p3411d880} fill="var(--fill-0, #EEEEEE)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Link" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Link, Large=No, Filled=No">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <div className="absolute inset-[-4.17%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
              <path d={svgPaths.p23cdfb00} id="Vector" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Power" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Power, Large=No, Filled=No">
        <div className="absolute inset-[12.5%_8.33%_8.33%_8.33%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9999 19">
            <path d={svgPaths.p215d90b0} fill="var(--fill-0, #EEEEEE)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Bookmark" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Bookmark, Large=No, Filled=No">
        <div className="absolute inset-[8.33%_20.83%]" data-name="Bookmark (Ourlined)">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 14 20">
            <path clipRule="evenodd" d={svgPaths.p1397b200} fill="var(--fill-0, #EEEEEE)" fillRule="evenodd" id="Bookmark (Ourlined)" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Bookmark Filled" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Bookmark Filled, Large=No, Filled=No">
        <div className="absolute inset-[8.33%_20.83%]" data-name="Bookmark (Ourlined)">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 14 20">
            <path d={svgPaths.p3e8b1980} fill="var(--fill-0, #EEEEEE)" id="Bookmark (Ourlined)" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Catchup" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Catchup, Large=No, Filled=No">
        <div className="absolute inset-[8.34%_12.33%_8.33%_12.33%]" data-name="ico_catchup">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0803 19.999">
            <path d={svgPaths.p9e63580} fill="var(--fill-0, #EEEEEE)" id="ico_catchup" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Catchup Crossed" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Catchup Crossed, Large=No, Filled=No">
        <div className="absolute inset-[8.34%_8.35%_8.34%_8.34%]" data-name="ico_catchup_crossed">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9954 19.9962">
            <path d={svgPaths.pded1400} fill="var(--fill-0, #EEEEEE)" id="ico_catchup_crossed" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Checkmark" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Checkmark, Large=No, Filled=No">
        <div className="absolute inset-[29.17%_20.83%]">
          <div className="absolute inset-[-10%_-7.14%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 12">
              <path d={svgPaths.p1d021880} id="Vector 88" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Checkmark Circular" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Checkmark Circular, Large=No, Filled=No">
        <div className="absolute inset-[8.33%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p2f242d80} fill="var(--fill-0, #EEEEEE)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Checkmark Circular Filled" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Checkmark Circular Filled, Large=No, Filled=No">
        <div className="absolute inset-[8.33%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p12a6c00} fill="var(--fill-0, #EEEEEE)" id="Subtract" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "X" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=X, Large=No, Filled=No">
        <div className="absolute inset-[16.67%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9998 15.9998">
            <path d={svgPaths.p2e8b200} fill="var(--fill-0, #EEEEEE)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "X Small" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=X Small, Large=No, Filled=No">
        <div className="absolute bottom-[25.01%] left-1/4 right-1/4 top-[24.99%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9998 11.9998">
            <path d={svgPaths.p3583bb00} fill="var(--fill-0, #EEEEEE)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Eye" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Eye, Large=No, Filled=No">
        <div className="absolute bottom-1/4 left-[8.33%] right-[8.33%] top-1/4" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 12">
            <path d={svgPaths.p1adece80} fill="var(--fill-0, #EEEEEE)" id="Subtract" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Eye Crossed" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Eye Crossed, Large=No, Filled=No">
        <div className="absolute inset-[16.67%_8.33%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 15.9991">
            <path d={svgPaths.p2783da80} fill="var(--fill-0, #EEEEEE)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Family" && !large && !filled) {
    return (
      <div className={className || "h-[24px] relative w-[24.002px]"} data-name="Name=Family, Large=No, Filled=No">
        <div className="absolute inset-[8.33%_7%_8.33%_4.17%]" data-name="ico_kids">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 21.3222 20">
            <path d={svgPaths.p7c9e130} fill="var(--fill-0, #EEEEEE)" id="ico_kids" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Kids" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Kids, Large=No, Filled=No">
        <div className="absolute inset-[8.33%_4.17%_12.5%_4.17%]" data-name="ico_kids">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 21.9999 19">
            <path d={svgPaths.p5a62500} fill="var(--fill-0, #EEEEEE)" id="ico_kids" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Expand" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Expand, Large=No, Filled=No">
        <div className="absolute inset-[16.67%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path d={svgPaths.p38616500} fill="var(--fill-0, #EEEEEE)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Collapse" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Collapse, Large=No, Filled=No">
        <div className="absolute inset-[16.67%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path d={svgPaths.p15f83180} fill="var(--fill-0, #EEEEEE)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Heart" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Heart, Large=No, Filled=No">
        <div className="absolute inset-[16.67%_12.5%]" data-name="Union">
          <div className="absolute inset-[-6.25%_-5.56%_-8.92%_-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18.4278">
              <path d={svgPaths.p1bcd7700} id="Union" stroke="var(--stroke-0, #EEEEEE)" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Heart Filled" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Heart Filled, Large=No, Filled=No">
        <div className="absolute inset-[16.67%_12.5%]" data-name="Union">
          <div className="absolute inset-[-6.25%_-5.56%_-8.92%_-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18.4278">
              <path d={svgPaths.p1bcd7700} fill="var(--fill-0, #EEEEEE)" id="Union" stroke="var(--stroke-0, #EEEEEE)" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Locked" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Locked, Large=No, Filled=No">
        <div className="absolute inset-[8.33%_16.67%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
            <path d={svgPaths.p200694c0} fill="var(--fill-0, #EEEEEE)" id="Subtract" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Unlocked" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Unlocked, Large=No, Filled=No">
        <div className="absolute inset-[8.33%_16.67%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
            <path d={svgPaths.p3557a600} fill="var(--fill-0, #EEEEEE)" id="Subtract" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Enter" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Enter, Large=No, Filled=No">
        <div className="absolute inset-[8.33%]" data-name="Combined Shape">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.pee23900} fill="var(--fill-0, #EEEEEE)" id="Combined Shape" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Exit" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Exit, Large=No, Filled=No">
        <div className="absolute inset-[8.33%]" data-name="Combined Shape">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9999 20">
            <path d={svgPaths.p29f5e600} fill="var(--fill-0, #EEEEEE)" id="Combined Shape" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Music Note" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Music Note, Large=No, Filled=No">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0004 20">
            <path d={svgPaths.p8aca500} fill="var(--fill-0, #EEEEEE)" id="Vector" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Music Mic" && !large && !filled) {
    return (
      <div className={className || "h-[24px] relative w-[23.999px]"} data-name="Name=Music Mic, Large=No, Filled=No">
        <div className="absolute inset-[8.33%_16.67%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9988 19.9999">
            <path d={svgPaths.p332f2a00} fill="var(--fill-0, #EEEEEE)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Start Over" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Start Over, Large=No, Filled=No">
        <div className="absolute inset-[20.83%_8.33%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 14.0003">
            <path d={svgPaths.p254eca00} fill="var(--fill-0, #EEEEEE)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Next" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Next, Large=No, Filled=No">
        <div className="absolute flex inset-[20.83%_8.33%] items-center justify-center">
          <div className="-scale-y-100 flex-none h-[14px] rotate-180 w-[20px]">
            <div className="relative size-full" data-name="Union">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 14.0003">
                <path d={svgPaths.p254eca00} fill="var(--fill-0, #EEEEEE)" id="Union" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Route" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Route, Large=No, Filled=No">
        <div className="absolute inset-[4.17%_8.33%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22">
            <path d={svgPaths.p1bde6140} fill="var(--fill-0, #EEEEEE)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Route Dashed" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Route Dashed, Large=No, Filled=No">
        <div className="absolute inset-[4.17%_8.33%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22">
            <path d={svgPaths.peb98100} fill="var(--fill-0, #EEEEEE)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Radio" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Radio, Large=No, Filled=No">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" id="Ellipse 8" r="11" stroke="var(--stroke-0, #EEEEEE)" strokeWidth="2" />
        </svg>
      </div>
    );
  }
  if (name === "Radio Checked" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Radio Checked, Large=No, Filled=No">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <g id="Union">
            <mask fill="white" id="path-1-inside-1_3_30780">
              <path d={svgPaths.p1251bb00} />
            </mask>
            <path d={svgPaths.p1251bb00} fill="var(--fill-0, #EEEEEE)" />
            <path d={svgPaths.p33f54000} fill="var(--stroke-0, #EEEEEE)" mask="url(#path-1-inside-1_3_30780)" />
          </g>
        </svg>
      </div>
    );
  }
  if (name === "Rewind" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Rewind, Large=No, Filled=No">
        <div className="absolute flex inset-[29.17%_20.83%_29.17%_14.58%] items-center justify-center">
          <div className="-scale-y-100 flex-none h-[10px] rotate-180 w-[15.5px]">
            <div className="relative size-full" data-name="Union">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 10.0004">
                <path d={svgPaths.pbf1eb00} fill="var(--fill-0, #EEEEEE)" id="Union" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Forward" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Forward, Large=No, Filled=No">
        <div className="absolute inset-[29.17%_14.58%_29.17%_20.83%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 10.0004">
            <path d={svgPaths.p58e55f0} fill="var(--fill-0, #EEEEEE)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Football" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Football, Large=No, Filled=No">
        <div className="absolute inset-[8.33%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p1ab08f0} fill="var(--fill-0, #EEEEEE)" id="Subtract" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Trophy" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Trophy, Large=No, Filled=No">
        <div className="absolute inset-[8.33%_8.34%_8.33%_8.33%]" data-name="ico sports">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9995 20">
            <path d={svgPaths.p23e41ef0} fill="var(--fill-0, #EEEEEE)" id="ico sports" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Star" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Star, Large=No, Filled=No">
        <div className="absolute inset-[4.17%_0_-4.17%_0]">
          <div className="absolute inset-[6.68%_8.59%_14.15%_8.59%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.8752 19.0007">
              <path d={svgPaths.p23efc40} id="Star 1" stroke="var(--stroke-0, #EEEEEE)" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Star Filled" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Star Filled, Large=No, Filled=No">
        <div className="absolute inset-[4.17%_0_-4.17%_0]">
          <div className="absolute inset-[6.68%_8.59%_14.15%_8.59%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.8752 19.0007">
              <path d={svgPaths.p3ffc3400} fill="var(--fill-0, #EEEEEE)" id="Star 1" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "User" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=User, Large=No, Filled=No">
        <div className="absolute inset-[8.33%]">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g id="Group 2147">
              <circle cx="10" cy="10" id="Ellipse 4" r="9.5" stroke="var(--stroke-0, #EEEEEE)" />
              <path d={svgPaths.pc9daa80} fill="var(--fill-0, #EEEEEE)" id="ico_user" />
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (name === "User Group" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=User Group, Large=No, Filled=No">
        <div className="absolute inset-[8.33%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p1a0c8c0} fill="var(--fill-0, #EEEEEE)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "History" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=History, Large=No, Filled=No">
        <div className="absolute inset-[8.33%_12.33%_8.33%_12.34%]" data-name="ico_catchup">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0796 20">
            <path clipRule="evenodd" d={svgPaths.p269a1700} fill="var(--fill-0, #EEEEEE)" fillRule="evenodd" id="ico_catchup" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Download Progress" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Download Progress, Large=No, Filled=No">
        <div className="absolute inset-[12.5%]">
          <div className="absolute inset-[-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <circle cx="10" cy="10" id="Ellipse 96" r="9" stroke="var(--stroke-0, #EEEEEE)" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%]">
          <div className="absolute bottom-[14.64%] left-1/2 right-0 top-0">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 15.364">
              <path d={svgPaths.p2200da80} fill="var(--fill-0, #EEEEEE)" id="Ellipse 98" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Cast" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Cast, Large=No, Filled=No">
        <div className="absolute inset-[12.5%_4.17%]" data-name="ico_cast">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18">
            <path clipRule="evenodd" d={svgPaths.p17267680} fill="var(--fill-0, #EEEEEE)" fillRule="evenodd" id="ico_cast" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Cast Available" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Cast Available, Large=No, Filled=No">
        <div className="absolute inset-[12.5%_4.17%]">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18">
            <g id="Group 2146">
              <path d={svgPaths.p1f7d3000} fill="var(--fill-0, #EEEEEE)" id="Combined Shape" opacity="0.7" />
              <path clipRule="evenodd" d={svgPaths.p3b257040} fill="var(--fill-0, #EEEEEE)" fillRule="evenodd" id="ico_cast_available" />
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Cast Connected" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Cast Connected, Large=No, Filled=No">
        <div className="absolute inset-[12.5%_4.17%]" data-name="ico_cast_connected">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18">
            <path clipRule="evenodd" d={svgPaths.p32454e80} fill="var(--fill-0, #EEEEEE)" fillRule="evenodd" id="ico_cast_connected" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Clock" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Clock, Large=No, Filled=No">
        <div className="absolute inset-[8.33%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p3173300} fill="var(--fill-0, #EEEEEE)" id="Subtract" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Alarm" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Alarm, Large=No, Filled=No">
        <div className="absolute inset-[4.17%_0]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9998 21.9999">
            <path d={svgPaths.p3377bf80} fill="var(--fill-0, #EEEEEE)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Alarm Add" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Alarm Add, Large=No, Filled=No">
        <div className="absolute inset-[4.17%_0]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9998 21.9999">
            <path d={svgPaths.p390daa00} fill="var(--fill-0, #EEEEEE)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Phone" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Phone, Large=No, Filled=No">
        <div className="absolute bottom-[8.33%] left-1/4 right-1/4 top-[8.33%]" data-name="ico_phone">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 12 20">
            <path d={svgPaths.pe737600} fill="var(--fill-0, #EEEEEE)" id="ico_phone" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Tablet" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Tablet, Large=No, Filled=No">
        <div className="absolute inset-[16.67%_8.33%]" data-name="ico_tablet">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
            <path d={svgPaths.p3a2aff0} fill="var(--fill-0, #EEEEEE)" id="ico_tablet" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "TV" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=TV, Large=No, Filled=No">
        <div className="absolute inset-[12.5%_4.17%]" data-name="ico_tv">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18">
            <path d={svgPaths.p26994c00} fill="var(--fill-0, #EEEEEE)" id="ico_tv" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Minus" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Minus, Large=No, Filled=No">
        <div className="absolute inset-[45.83%_12.5%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 18 2">
            <path d={svgPaths.p22fa500} fill="var(--fill-0, #EEEEEE)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Minus Circular" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Minus Circular, Large=No, Filled=No">
        <div className="absolute inset-[8.33%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p304e56c0} fill="var(--fill-0, #EEEEEE)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Minus Circular Filled" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Minus Circular Filled, Large=No, Filled=No">
        <div className="absolute inset-[8.33%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p165c8000} fill="var(--fill-0, #EEEEEE)" id="Subtract" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Notification" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Notification, Large=No, Filled=No">
        <div className="absolute inset-[8.33%_16.67%]" data-name="ico_notification_available">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20.001">
            <path d={svgPaths.p254b0c00} fill="var(--fill-0, #EEEEEE)" id="ico_notification_available" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Notification New" && !large && !filled) {
    return (
      <div className={className || "relative rounded-[4px] size-[24px]"} data-name="Name=Notification New, Large=No, Filled=No">
        <div className="absolute inset-[8.33%_12.5%_8.33%_16.67%]">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 17 20.001">
            <g id="Group 2168">
              <path d={svgPaths.p1d08fc00} fill="var(--fill-0, #EEEEEE)" id="ico_notification_available" />
              <circle cx="14" cy="3" fill="var(--fill-0, #EEEEEE)" id="status" r="3" />
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Notification Crossed" && !large && !filled) {
    return (
      <div className={className || "h-[24px] relative w-[23.996px]"} data-name="Name=Notification Crossed, Large=No, Filled=No">
        <div className="absolute inset-[8.33%_10.79%_8.33%_14.21%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9956 20.001">
            <path d={svgPaths.p14dfc380} fill="var(--fill-0, #EEEEEE)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Plus" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Plus, Large=No, Filled=No">
        <div className="absolute inset-[12.5%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <path d={svgPaths.p12d4a800} fill="var(--fill-0, #EEEEEE)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Plus Circular" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Plus Circular, Large=No, Filled=No">
        <div className="absolute inset-[8.33%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p25550300} fill="var(--fill-0, #EEEEEE)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Plus Circular Filled" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Plus Circular Filled, Large=No, Filled=No">
        <div className="absolute inset-[8.33%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p2d22f500} fill="var(--fill-0, #EEEEEE)" id="Subtract" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Sort" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Sort, Large=No, Filled=No">
        <div className="absolute inset-[8.33%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0001 20">
            <path d={svgPaths.pafa5000} fill="var(--fill-0, #EEEEEE)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Sort Ascending" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Sort Ascending, Large=No, Filled=No">
        <div className="absolute flex inset-[16.67%_24.97%] items-center justify-center">
          <div className="flex-none h-[16px] rotate-180 w-[12.017px]">
            <div className="relative size-full" data-name="Union">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0158 16.0001">
                <path d={svgPaths.paae9b00} fill="var(--fill-0, #EEEEEE)" id="Union" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Sort Descending" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Sort Descending, Large=No, Filled=No">
        <div className="absolute inset-[16.67%_24.97%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0158 16.0001">
            <path d={svgPaths.p3fb08930} fill="var(--fill-0, #EEEEEE)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Volume High" && !large && !filled) {
    return (
      <div className={className || "h-[24.004px] relative w-[24px]"} data-name="Name=Volume High, Large=No, Filled=No">
        <div className="absolute inset-[12.5%_8.33%]" data-name="ico_audio">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18.0039">
            <path d={svgPaths.p3f6c1280} fill="var(--fill-0, #EEEEEE)" id="ico_audio" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Volume Low" && !large && !filled) {
    return (
      <div className={className || "h-[24.004px] relative w-[24px]"} data-name="Name=Volume Low, Large=No, Filled=No">
        <div className="absolute inset-[12.5%_16.67%]" data-name="ico_audio">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18.0039">
            <path d={svgPaths.p23481d00} fill="var(--fill-0, #EEEEEE)" id="ico_audio" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Volume Mute" && !large && !filled) {
    return (
      <div className={className || "h-[24.004px] relative w-[24px]"} data-name="Name=Volume Mute, Large=No, Filled=No">
        <div className="absolute inset-[12.5%_12.5%_12.5%_8.33%]" data-name="ico_audio_muted">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 18.9999 18.0039">
            <path d={svgPaths.p345f9300} fill="var(--fill-0, #EEEEEE)" id="ico_audio_muted" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Drama" && !large && !filled) {
    return (
      <div className={className || "h-[23.998px] relative w-[24px]"} data-name="Name=Drama, Large=No, Filled=No">
        <div className="absolute inset-[4.14%_4.17%_4.18%_4.17%]" data-name="Vector">
          <div className="absolute inset-[-3.41%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.5 23.5">
              <path d={svgPaths.p16604ac0} id="Vector" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Drama" && !large && filled) {
    return (
      <div className={className || "h-[23.998px] relative w-[24px]"} data-name="Name=Drama, Large=No, Filled=Yes">
        <div className="absolute inset-[-0.03%_0_0.02%_0]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <path d={svgPaths.p18e0e800} fill="var(--fill-0, #EEEEEE)" id="Subtract" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Crime" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Crime, Large=No, Filled=No">
        <div className="absolute bottom-1/4 left-[12.5%] right-[58.33%] top-[41.67%]">
          <div className="absolute inset-[-9.38%_-8.72%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.22046 9.5">
              <path d={svgPaths.p30f37f00} id="Rectangle 19" stroke="var(--stroke-0, #EEEEEE)" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[24.97%_16.67%_58.36%_12.5%] rounded-[0.5px]">
          <div aria-hidden="true" className="absolute border-[#eee] border-[1.5px] border-solid inset-[-0.75px] pointer-events-none rounded-[1.25px]" />
        </div>
        <div className="absolute inset-[29.14%_12.5%_62.53%_83.33%]">
          <div className="absolute inset-[-37.5%_-75%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.5 3.5">
              <path d={svgPaths.p1f723480} id="Vector 205" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[41.64%_37.5%_41.69%_37.5%]">
          <div className="absolute inset-[-18.75%_-12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.50018 5.50018">
              <path d={svgPaths.p5e52480} id="Vector 204" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Crime" && !large && filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Crime, Large=No, Filled=Yes">
        <div className="absolute inset-[20.81%_8.33%_20.83%_8.33%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 14.0068">
            <path d={svgPaths.pe061a00} fill="var(--fill-0, white)" id="Subtract" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Sci-Fi" && !large && !filled) {
    return (
      <div className={className || "h-[24.001px] relative w-[24px]"} data-name="Name=Sci-Fi, Large=No, Filled=No">
        <div className="absolute inset-[12.47%_12.5%_12.53%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-4.17%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
              <path d={svgPaths.p1a24e280} fill="var(--stroke-0, #EEEEEE)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Sci-Fi" && !large && filled) {
    return (
      <div className={className || "h-[24.001px] relative w-[24px]"} data-name="Name=Sci-Fi, Large=No, Filled=Yes">
        <div className="absolute inset-[8.31%_8.33%_8.36%_8.33%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20.0001">
            <path d={svgPaths.pa959e80} fill="var(--fill-0, #EEEEEE)" id="Subtract" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Action" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Action, Large=No, Filled=No">
        <div className="absolute inset-[33.33%_4.17%]" data-name="Vector">
          <div className="absolute inset-[-9.38%_-3.41%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.5 9.5">
              <path d={svgPaths.p94e9680} id="Vector" stroke="var(--stroke-0, #EEEEEE)" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Action" && !large && filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Action, Large=No, Filled=Yes">
        <div className="absolute inset-[29.17%_0]" data-name="Vector (Stroke)">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 10">
            <path clipRule="evenodd" d={svgPaths.p21634e80} fill="var(--fill-0, #EEEEEE)" fillRule="evenodd" id="Vector (Stroke)" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Comedy" && !large && !filled) {
    return (
      <div className={className || "h-[24px] relative w-[23.997px]"} data-name="Name=Comedy, Large=No, Filled=No">
        <div className="absolute inset-[12.47%_77.08%_66.69%_22.92%]" data-name="Vector">
          <div className="absolute inset-[-15%_-0.75px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 6.5">
              <path d="M0.75 0.75V5.75" id="Vector" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[22.89%_66.66%_77.11%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-0.75px_-15%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.5 1.5">
              <path d="M5.75 0.75H0.75" id="Vector" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[58.31%_12.48%_12.51%_12.49%]" data-name="Vector">
          <div className="absolute inset-[-10.71%_-4.17%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5041 8.50324">
              <path d={svgPaths.p39836c80} id="Vector" stroke="var(--stroke-0, #EEEEEE)" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[45.85%_49.95%_54.15%_50.01%]" data-name="Vector">
          <div className="absolute inset-[-3px_-29999.31%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.01 6">
              <path d="M3 3H3.01" id="Vector" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="6" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.47%_12.49%_66.69%_66.67%]">
          <div className="absolute inset-[-15%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.5 6.5">
              <circle cx="3.25" cy="3.25" id="Ellipse 111" r="2.5" stroke="var(--stroke-0, #EEEEEE)" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Comedy" && !large && filled) {
    return (
      <div className={className || "h-[24px] relative w-[23.997px]"} data-name="Name=Comedy, Large=No, Filled=Yes">
        <div className="absolute inset-[12.47%_77.08%_66.69%_22.92%]" data-name="Vector">
          <div className="absolute inset-[-20%_-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 7">
              <path d="M1 1V6" id="Vector" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[22.89%_66.66%_77.11%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-1px_-20%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 2">
              <path d="M6 1H1" id="Vector" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[58.31%_12.48%_12.51%_12.49%]" data-name="Vector">
          <div className="absolute inset-[-14.28%_-5.55%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0042 9.00326">
              <path d={svgPaths.p927a000} id="Vector" stroke="var(--stroke-0, #EEEEEE)" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[45.85%_49.95%_54.15%_50.01%]" data-name="Vector">
          <div className="absolute inset-[-3px_-29999.31%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.01 6">
              <path d="M3 3H3.01" id="Vector" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="6" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.47%_12.49%_66.69%_66.67%]">
          <div className="absolute inset-[-20%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
              <circle cx="3.5" cy="3.5" id="Ellipse 111" r="2.5" stroke="var(--stroke-0, #EEEEEE)" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Documentary" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Documentary, Large=No, Filled=No">
        <div className="absolute inset-[20.83%_70.83%_62.5%_12.5%]" data-name="Oval 10">
          <div className="absolute inset-[-18.75%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.5 5.5">
              <path d={svgPaths.p21940900} id="Oval 10" stroke="var(--stroke-0, #EEEEEE)" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[16.64%_37.5%_62.53%_41.67%]" data-name="Oval 11">
          <div className="absolute inset-[-15%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.5 6.5">
              <path d={svgPaths.p14954500} id="Oval 11" stroke="var(--stroke-0, #EEEEEE)" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[16.66%] left-[70.86%] right-[12.48%] top-1/2">
          <div className="absolute inset-[-9.38%_-18.75%_-9.37%_-18.75%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.5 9.5">
              <path d={svgPaths.p1dd32f00} id="Vector 85" stroke="var(--stroke-0, #EEEEEE)" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[16.66%] left-[12.52%] right-[41.64%] rounded-[1px] top-1/2">
          <div aria-hidden="true" className="absolute border-[#eee] border-[1.5px] border-solid inset-[-0.75px] pointer-events-none rounded-[1.75px]" />
        </div>
      </div>
    );
  }
  if (name === "Documentary" && !large && filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Documentary, Large=No, Filled=Yes">
        <div className="absolute inset-[20.83%_70.83%_62.5%_12.5%]" data-name="Oval 8">
          <div className="absolute inset-[-25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
              <path d={svgPaths.p35656280} fill="var(--fill-0, #EEEEEE)" id="Oval 8" stroke="var(--stroke-0, #EEEEEE)" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[16.64%_37.5%_62.53%_41.67%]" data-name="Oval 9">
          <div className="absolute inset-[-20%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
              <path d={svgPaths.p2cab3800} fill="var(--fill-0, #EEEEEE)" id="Oval 9" stroke="var(--stroke-0, #EEEEEE)" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[16.66%] left-[70.86%] right-[12.48%] top-1/2">
          <div className="absolute inset-[-12.5%_-25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 10">
              <path d={svgPaths.p1b586940} fill="var(--fill-0, #EEEEEE)" id="Vector 85" stroke="var(--stroke-0, #EEEEEE)" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute bg-[#eee] bottom-[16.66%] left-[12.52%] right-[41.64%] rounded-[1px] top-1/2">
          <div aria-hidden="true" className="absolute border-2 border-[#eee] border-solid inset-[-1px] pointer-events-none rounded-[2px]" />
        </div>
      </div>
    );
  }
  if (name === "Info" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Info, Large=No, Filled=No">
        <div className="absolute inset-[12.5%]" data-name="Oval 8">
          <div className="absolute inset-[-2.78%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
              <path d={svgPaths.p27198180} id="Oval 8" stroke="var(--stroke-0, #EEEEEE)" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[33.33%] left-1/2 right-1/2 top-1/2">
          <div className="absolute inset-[-18.75%_-0.75px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 5.5">
              <path d="M0.75 0.75V4.75" id="Vector 174" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[66.67%] left-1/2 right-[49.96%] top-[33.33%]">
          <div className="absolute inset-[-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.01 2">
              <path d="M1 1H1.01" id="Vector 143" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Info" && !large && filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Info, Large=No, Filled=Yes">
        <div className="absolute inset-[8.33%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p35d23800} fill="var(--fill-0, #EEEEEE)" id="Subtract" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Like" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Like, Large=No, Filled=No">
        <div className="absolute inset-[41.67%_87.5%_16.67%_12.5%]" data-name="Rectangle">
          <div className="absolute inset-[-7.5%_-0.75px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 11.5">
              <path d="M0.75 10.75V0.75" id="Rectangle" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_12.42%_12.5%_29.17%]" data-name="Vector">
          <div className="absolute inset-[-4.17%_-5.35%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.52 19.5">
              <path d={svgPaths.p21364200} id="Vector" stroke="var(--stroke-0, #EEEEEE)" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Like" && !large && filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Like, Large=No, Filled=Yes">
        <div className="absolute inset-[12.5%_8.33%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9999 18">
            <path d={svgPaths.p7813600} fill="var(--fill-0, #EEEEEE)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Dislike" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Dislike, Large=No, Filled=No">
        <div className="absolute flex inset-[16.67%_87.5%_41.67%_12.5%] items-center justify-center">
          <div className="-scale-y-100 flex-none h-[10px] w-px">
            <div className="relative size-full" data-name="Rectangle">
              <div className="absolute inset-[-7.5%_-0.75px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 11.5">
                  <path d="M0.75 10.75V0.75" id="Rectangle" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex inset-[12.5%_12.42%_12.5%_29.17%] items-center justify-center">
          <div className="-scale-y-100 flex-none h-[18px] w-[14.02px]">
            <div className="relative size-full" data-name="Vector">
              <div className="absolute inset-[-4.17%_-5.35%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.52 19.5">
                  <path d={svgPaths.p21364200} id="Vector" stroke="var(--stroke-0, #EEEEEE)" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Dislike" && !large && filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Dislike, Large=No, Filled=Yes">
        <div className="absolute flex inset-[12.5%_8.33%] items-center justify-center">
          <div className="-scale-y-100 flex-none h-[18px] w-[20px]">
            <div className="relative size-full" data-name="Union">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9999 18">
                <path d={svgPaths.p7813600} fill="var(--fill-0, #EEEEEE)" id="Union" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Arrow Left" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Arrow Left, Large=No, Filled=No">
        <div className="absolute inset-[20.83%_41.67%_20.83%_33.33%]">
          <div className="absolute inset-[-5.36%_-12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.50001 15.5">
              <path d={svgPaths.p21f5cf80} id="Vector 89" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Arrow Left" && !large && filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Arrow Left, Large=No, Filled=Yes">
        <div className="absolute inset-[20.83%_41.67%_20.83%_33.33%]">
          <div className="absolute inset-[-7.14%_-16.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00002 16">
              <path d="M7 1.00002L1 8.00002L7 15" id="Vector 89" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Arrow Left Small" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Arrow Left Small, Large=No, Filled=No">
        <div className="absolute inset-[29.17%_45.83%_29.17%_37.5%]">
          <div className="absolute inset-[-7.5%_-18.75%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.50003 11.5001">
              <path d={svgPaths.p3ad4cb00} id="Vector 89" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Arrow Left Small" && !large && filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Arrow Left Small, Large=No, Filled=Yes">
        <div className="absolute inset-[29.17%_45.83%_29.17%_37.5%]">
          <div className="absolute inset-[-10%_-25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.00004 12.0001">
              <path d="M5 1.00004L1 6.00004L5 11" id="Vector 89" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Arrow Right" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Arrow Right, Large=No, Filled=No">
        <div className="absolute inset-[20.83%_33.33%_20.83%_41.67%]">
          <div className="absolute inset-[-5.36%_-12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.50001 15.5">
              <path d={svgPaths.p3ce7280} id="Vector 89" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Arrow Right" && !large && filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Arrow Right, Large=No, Filled=Yes">
        <div className="absolute inset-[20.83%_33.33%_20.83%_41.67%]">
          <div className="absolute inset-[-7.14%_-16.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00002 16">
              <path d={svgPaths.p8794a0} id="Vector 89" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Arrow Right Small" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Arrow Right Small, Large=No, Filled=No">
        <div className="absolute inset-[29.17%_37.5%_29.17%_45.83%]">
          <div className="absolute inset-[-7.5%_-18.75%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.50003 11.5001">
              <path d={svgPaths.p1785900} id="Vector 89" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Arrow Right Small" && !large && filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Arrow Right Small, Large=No, Filled=Yes">
        <div className="absolute inset-[29.17%_37.5%_29.17%_45.83%]">
          <div className="absolute inset-[-10%_-25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.00004 12.0001">
              <path d={svgPaths.p543e880} id="Vector 89" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Arrow Up" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Arrow Up, Large=No, Filled=No">
        <div className="absolute inset-[33.33%_20.83%_41.67%_20.83%]">
          <div className="absolute inset-[-12.5%_-5.36%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 7.50001">
              <path d={svgPaths.p21deb780} id="Vector 89" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Arrow Up" && !large && filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Arrow Up, Large=No, Filled=Yes">
        <div className="absolute inset-[33.33%_20.83%_41.67%_20.83%]">
          <div className="absolute inset-[-16.67%_-7.14%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 8.00002">
              <path d="M1.00002 7L8.00002 1L15 7" id="Vector 89" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Arrow Up Small" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Arrow Up Small, Large=No, Filled=No">
        <div className="absolute inset-[37.5%_29.17%_45.83%_29.17%]">
          <div className="absolute inset-[-18.75%_-7.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5001 5.50003">
              <path d={svgPaths.pd0f68e0} id="Vector 89" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Arrow Up Small" && !large && filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Arrow Up Small, Large=No, Filled=Yes">
        <div className="absolute inset-[37.5%_29.17%_45.83%_29.17%]">
          <div className="absolute inset-[-25%_-10%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0001 6.00004">
              <path d="M1.00004 5L6.00004 1L11 5" id="Vector 89" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Arrow Down" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Arrow Down, Large=No, Filled=No">
        <div className="absolute inset-[41.67%_20.83%_33.33%_20.83%]">
          <div className="absolute inset-[-12.5%_-5.36%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 7.50001">
              <path d={svgPaths.p20360980} id="Vector 89" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Arrow Down" && !large && filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Arrow Down, Large=No, Filled=Yes">
        <div className="absolute inset-[41.67%_20.83%_33.33%_20.83%]">
          <div className="absolute inset-[-16.67%_-7.14%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 8.00002">
              <path d={svgPaths.p3fbf3c00} id="Vector 89" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Arrow Down Small" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Arrow Down Small, Large=No, Filled=No">
        <div className="absolute inset-[45.83%_29.17%_37.5%_29.17%]">
          <div className="absolute inset-[-18.75%_-7.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5001 5.50003">
              <path d={svgPaths.p3792b0c0} id="Vector 89" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Arrow Down Small" && !large && filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Arrow Down Small, Large=No, Filled=Yes">
        <div className="absolute inset-[45.83%_29.17%_37.5%_29.17%]">
          <div className="absolute inset-[-25%_-10%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0001 6.00004">
              <path d={svgPaths.p15d5ef00} id="Vector 89" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Skip Backward" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Skip Backward, Large=No, Filled=No">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold inset-[41.67%_33.33%_8.33%_16.67%] leading-[1.2] not-italic text-[#eee] text-[10px] text-right tracking-[-0.15px]">10</p>
        <div className="absolute inset-[12.5%_12.5%_31.25%_16.67%]">
          <div className="absolute inset-[-5.56%_-4.41%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.5 15.0001">
              <path d={svgPaths.p14e7100} id="Ellipse 97" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Skip Backward" && !large && filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Skip Backward, Large=No, Filled=Yes">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold inset-[41.67%_33.33%_8.33%_16.67%] leading-[1.2] not-italic text-[#eee] text-[10px] text-right tracking-[-0.15px]">10</p>
        <div className="absolute inset-[12.5%_12.5%_31.25%_16.67%]">
          <div className="absolute inset-[-7.41%_-5.88%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.0001 15.5002">
              <path d={svgPaths.p292d9180} id="Ellipse 97" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Skip Forward" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Skip Forward, Large=No, Filled=No">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold inset-[41.67%_16.67%_8.33%_33.33%] leading-[1.2] not-italic text-[#eee] text-[10px] tracking-[-0.15px]">10</p>
        <div className="absolute flex inset-[12.5%_16.67%_31.25%_12.5%] items-center justify-center">
          <div className="-scale-y-100 flex-none h-[13.5px] rotate-180 w-[17px]">
            <div className="relative size-full">
              <div className="absolute inset-[-5.56%_-4.41%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.5 15.0001">
                  <path d={svgPaths.pcb67100} id="Ellipse 97" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Skip Forward" && !large && filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Skip Forward, Large=No, Filled=Yes">
        <p className="absolute font-['Inter:Extra_Bold',sans-serif] font-extrabold inset-[41.67%_16.67%_8.33%_33.33%] leading-[1.2] not-italic text-[#eee] text-[10px] tracking-[-0.15px]">10</p>
        <div className="absolute flex inset-[12.5%_16.67%_31.25%_12.5%] items-center justify-center">
          <div className="-scale-y-100 flex-none h-[13.5px] rotate-180 w-[17px]">
            <div className="relative size-full">
              <div className="absolute inset-[-7.41%_-5.88%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.0001 15.5002">
                  <path d={svgPaths.p3f1ce000} id="Ellipse 97" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Live" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Live, Large=No, Filled=No">
        <div className="absolute bottom-1/2 left-1/2 right-[49.96%] top-1/2">
          <div className="absolute inset-[-1.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.01 3">
              <path d="M1.5 1.5H1.51" id="Vector 143" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="3" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%]">
          <div className="absolute inset-[10.48%_-4.17%_10.48%_81.19%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.13604 14.2279">
              <path d={svgPaths.p371c9c00} id="Ellipse 102" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%]">
          <div className="absolute inset-[10.48%_81.19%_10.48%_-4.17%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.13604 14.2279">
              <path d={svgPaths.p54d7900} id="Ellipse 105" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[29.17%]">
          <div className="absolute inset-[7.14%_77.86%_7.14%_-7.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.96447 8.57107">
              <path d={svgPaths.pcf87b00} id="Ellipse 103" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[29.17%]">
          <div className="absolute inset-[7.14%_-7.5%_7.14%_77.86%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.96447 8.57107">
              <path d={svgPaths.p2b7be100} id="Ellipse 104" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Live" && !large && filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Live, Large=No, Filled=Yes">
        <div className="absolute bottom-1/2 left-1/2 right-[49.96%] top-1/2">
          <div className="absolute inset-[-1.75px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.51 3.5">
              <path d="M1.75 1.75H1.76" id="Vector 143" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="3.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%]">
          <div className="absolute inset-[9.09%_-5.56%_9.09%_79.8%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.63604 14.7279">
              <path d={svgPaths.p3446de00} id="Ellipse 102" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%]">
          <div className="absolute inset-[9.09%_79.8%_9.09%_-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.63604 14.7279">
              <path d={svgPaths.p10677c80} id="Ellipse 105" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[29.17%]">
          <div className="absolute inset-[4.64%_75.36%_4.64%_-10%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.46447 9.07107">
              <path d={svgPaths.p26d8c500} id="Ellipse 103" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[29.17%]">
          <div className="absolute inset-[4.64%_-10%_4.64%_75.36%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.46447 9.07107">
              <path d={svgPaths.p8312540} id="Ellipse 104" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Live 2" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Live 2, Large=No, Filled=No">
        <div className="absolute inset-[62.5%_79.17%_16.67%_12.5%]">
          <div className="absolute inset-[-15%_-37.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.5 6.5">
              <path d="M0.75 0.75V5.75H2.75" id="Vector 118" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[62.5%_66.67%_16.67%_33.33%]">
          <div className="absolute inset-[-15%_-0.75px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 6.5">
              <path d="M0.75 0.75V5.75" id="Vector 119" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[62.5%_37.5%_16.67%_45.83%]">
          <div className="absolute inset-[-15%_-18.75%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.5004 6.5002">
              <path d={svgPaths.p1a8bc9c0} id="Vector 120" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[16.67%] left-3/4 right-[12.5%] top-[62.5%]">
          <div className="absolute inset-[-15%_-25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 6.5">
              <path d={svgPaths.p3a1d2210} id="Vector 121" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[45.83%_66.63%_54.17%_33.33%]">
          <div className="absolute inset-[-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.01 2">
              <path d="M1 1H1.01" id="Vector 143" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_29.17%_12.5%_-4.17%]">
          <div className="absolute inset-[-4.17%_20.83%_89.13%_20.83%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5002 2.7059">
              <path d={svgPaths.p1a86fbc0} id="Ellipse 102" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[29.17%_45.83%_29.17%_12.5%]">
          <div className="absolute inset-[-7.5%_17.5%_85.8%_17.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.50025 2.17">
              <path d={svgPaths.p3afb9d00} id="Ellipse 104" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Live 2" && !large && filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Live 2, Large=No, Filled=Yes">
        <div className="absolute inset-[62.5%_79.17%_16.67%_12.5%]">
          <div className="absolute inset-[-20%_-50%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 7">
              <path d="M1 1V6H3" id="Vector 118" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[62.5%_66.67%_16.67%_33.33%]">
          <div className="absolute inset-[-20%_-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 7">
              <path d="M1 1V6" id="Vector 119" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[62.5%_37.5%_16.67%_45.83%]">
          <div className="absolute inset-[-20.01%_-25.01%_-20%_-25.01%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.00053 7.00027">
              <path d={svgPaths.p3af67380} id="Vector 120" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[16.67%] left-3/4 right-[12.5%] top-[62.5%]">
          <div className="absolute inset-[-20%_-33.33%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 7">
              <path d="M4 6H1V3.5M4 1H1V3.5M1 3.5H3" id="Vector 121" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[45.83%_66.63%_54.17%_33.33%]">
          <div className="absolute inset-[-1.25px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.51 2.5">
              <path d="M1.25 1.25H1.26" id="Vector 143" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_29.17%_12.5%_-4.17%]">
          <div className="absolute inset-[-5.56%_19.44%_87.74%_19.44%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.0003 3.20594">
              <path d={svgPaths.p10ae9b80} id="Ellipse 102" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[29.17%_45.83%_29.17%_12.5%]">
          <div className="absolute inset-[-10%_15%_83.3%_15%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.00033 2.67004">
              <path d={svgPaths.p17aaac00} id="Ellipse 104" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Email" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Email, Large=No, Filled=No">
        <div className="absolute inset-[20.8%_12.5%_20.86%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-5.36%_-4.17%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 15.5">
              <path d={svgPaths.p36d9a500} id="Vector" stroke="var(--stroke-0, #EEEEEE)" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Email" && !large && filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Email, Large=No, Filled=Yes">
        <div className="absolute inset-[16.64%_8.33%_16.7%_8.33%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
            <path d={svgPaths.p37cd4b80} fill="var(--fill-0, #EEEEEE)" id="Subtract" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Antenna" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Antenna, Large=No, Filled=No">
        <div className="absolute inset-[41.67%_33.33%_16.67%_33.33%]">
          <div className="absolute inset-[-7.5%_-9.38%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5 11.5">
              <path d={svgPaths.p2daaac00} id="Vector 137" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[58.33%] left-1/2 right-[49.96%] top-[41.67%]">
          <div className="absolute inset-[-1.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.01 3">
              <path d="M1.5 1.5H1.51" id="Vector 143" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="3" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[4.17%_12.5%_20.83%_12.5%]">
          <div className="absolute inset-[10.48%_-4.17%_10.48%_81.19%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.13604 14.2279">
              <path d={svgPaths.p371c9c00} id="Ellipse 102" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[4.17%_12.5%_20.83%_12.5%]">
          <div className="absolute inset-[10.48%_81.19%_10.48%_-4.17%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.13604 14.2279">
              <path d={svgPaths.p54d7900} id="Ellipse 105" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[20.83%_29.17%_37.5%_29.17%]">
          <div className="absolute inset-[7.14%_77.86%_7.14%_-7.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.96447 8.57107">
              <path d={svgPaths.pcf87b00} id="Ellipse 103" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[20.83%_29.17%_37.5%_29.17%]">
          <div className="absolute inset-[7.14%_-7.5%_7.14%_77.86%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.96447 8.57107">
              <path d={svgPaths.p2b7be100} id="Ellipse 104" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Antenna" && !large && filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Antenna, Large=No, Filled=Yes">
        <div className="absolute inset-[41.67%_33.33%_16.67%_33.33%]">
          <div className="absolute inset-[-10%_-12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 12">
              <path d={svgPaths.pb763280} id="Vector 137" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[58.33%] left-1/2 right-[49.96%] top-[41.67%]">
          <div className="absolute inset-[-1.75px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.51 3.5">
              <path d="M1.75 1.75H1.76" id="Vector 143" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="3.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[4.17%_12.5%_20.83%_12.5%]">
          <div className="absolute inset-[9.09%_-5.56%_9.09%_79.8%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.63604 14.7279">
              <path d={svgPaths.p3446de00} id="Ellipse 102" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[4.17%_12.5%_20.83%_12.5%]">
          <div className="absolute inset-[9.09%_79.8%_9.09%_-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.63604 14.7279">
              <path d={svgPaths.p10677c80} id="Ellipse 105" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[20.83%_29.17%_37.5%_29.17%]">
          <div className="absolute inset-[4.64%_75.36%_4.64%_-10%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.46447 9.07107">
              <path d={svgPaths.p26d8c500} id="Ellipse 103" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[20.83%_29.17%_37.5%_29.17%]">
          <div className="absolute inset-[4.64%_-10%_4.64%_75.36%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.46447 9.07107">
              <path d={svgPaths.p8312540} id="Ellipse 104" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Satellite" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Satellite, Large=No, Filled=No">
        <div className="absolute inset-[16.67%_12.5%_12.5%_16.67%]">
          <div className="absolute inset-[12.44%_-4.41%_-4.41%_12.44%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.6346 15.6346">
              <path d={svgPaths.pf68c000} id="Ellipse 93" stroke="var(--stroke-0, #EEEEEE)" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_16.67%_16.67%_12.5%]">
          <div className="absolute inset-[-4.41%_32.65%_32.65%_-4.41%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.2001 12.2001">
              <path d={svgPaths.p24d8fb80} id="Ellipse 93" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[29.17%_33.33%_33.33%_29.17%]">
          <div className="absolute inset-[-8.33%_28.72%_28.72%_-8.33%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.16487 7.16487">
              <path d={svgPaths.p1c744180} id="Ellipse 94" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[52.08%_47.88%_47.92%_52.08%]">
          <div className="absolute inset-[-2px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.01 4">
              <path d="M2 2H2.01" id="Vector 143" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="4" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Satellite" && !large && filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Satellite, Large=No, Filled=Yes">
        <div className="absolute inset-[16.67%_12.5%_12.5%_16.67%]">
          <div className="absolute inset-[10.97%_-5.88%_-5.88%_10.97%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.1345 16.1345">
              <path d={svgPaths.pd140900} fill="var(--fill-0, #EEEEEE)" id="Ellipse 93" stroke="var(--stroke-0, #EEEEEE)" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_16.67%_16.67%_12.5%]">
          <div className="absolute inset-[-5.88%_31.18%_31.18%_-5.88%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7002 12.7002">
              <path d={svgPaths.pe9dcf40} id="Ellipse 93" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[29.17%_33.33%_33.33%_29.17%]">
          <div className="absolute inset-[-11.11%_25.95%_25.95%_-11.11%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.66493 7.66493">
              <path d={svgPaths.p283df280} id="Ellipse 94" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[52.08%_47.88%_47.92%_52.08%]">
          <div className="absolute inset-[-2.25px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.51 4.5">
              <path d="M2.25 2.25H2.26" id="Vector 143" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="4.5" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Globe" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Globe, Large=No, Filled=No">
        <div className="absolute inset-[12.5%]" data-name="Ellipse">
          <div className="absolute inset-[-4.17%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
              <circle cx="9.75" cy="9.75" id="Ellipse" r="9" stroke="var(--stroke-0, #EEEEEE)" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[37.5%_16.67%_62.5%_16.67%]">
          <div className="absolute inset-[-0.75px_-4.69%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 1.5">
              <path d="M0.75 0.75H16.75" id="Vector 142" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[62.5%_16.67%_37.5%_16.67%]">
          <div className="absolute inset-[-0.75px_-4.69%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 1.5">
              <path d="M0.75 0.75H16.75" id="Vector 142" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.47%_33.33%_12.53%_33.33%]">
          <div className="absolute inset-[-4.17%_-9.38%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5 19.5">
              <ellipse cx="4.75" cy="9.75" id="Ellipse 108" rx="4" ry="9" stroke="var(--stroke-0, #EEEEEE)" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Globe" && !large && filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Globe, Large=No, Filled=Yes">
        <div className="absolute inset-[8.33%_8.33%_8.36%_8.33%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19.9932">
            <path d={svgPaths.p2b2e9600} fill="var(--fill-0, #EEEEEE)" id="Subtract" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Cable TV" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Cable TV, Large=No, Filled=No">
        <div className="absolute inset-[12.5%_12.5%_12.5%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-4.17%_-4.41%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.5 19.5">
              <path d={svgPaths.p9e0f980} fill="var(--stroke-0, #EEEEEE)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Cable TV" && !large && filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Cable TV, Large=No, Filled=Yes">
        <div className="absolute inset-[12.5%_12.5%_12.5%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-5.56%_-5.88%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 20">
              <g id="Vector">
                <path d={svgPaths.p33c0b480} fill="var(--fill-0, #EEEEEE)" />
                <path d={svgPaths.p1a524720} fill="var(--fill-0, #EEEEEE)" />
                <path d={svgPaths.p2c264c00} fill="var(--stroke-0, #EEEEEE)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Question" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Question, Large=No, Filled=No">
        <div className="absolute inset-[12.5%]" data-name="Oval 8">
          <div className="absolute inset-[-2.78%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
              <path d={svgPaths.p27198180} id="Oval 8" stroke="var(--stroke-0, #EEEEEE)" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[33.33%_39.17%_45.83%_41.67%]" data-name="Vector">
          <div className="absolute inset-[-15%_-16.3%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.1 6.50016">
              <path d={svgPaths.p35f8e500} id="Vector" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[33.33%] left-1/2 right-[49.96%] top-[66.67%]">
          <div className="absolute inset-[-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.01 2">
              <path d="M1 1H1.01" id="Vector 143" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Question" && !large && filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Question, Large=No, Filled=Yes">
        <div className="absolute inset-[8.33%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p70be700} fill="var(--fill-0, #EEEEEE)" id="Subtract" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Password" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Password, Large=No, Filled=No">
        <div className="absolute bottom-[49.92%] left-1/4 right-1/4 top-[49.92%]" data-name="Vector">
          <div className="absolute inset-[-2499.94%_-8.33%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 2.04">
              <path d={svgPaths.p31e46800} id="Vector" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[14.58%] right-[14.58%] top-1/4" data-name="Vector">
          <div className="absolute inset-[-6.25%_-4.41%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.5 13.5">
              <path d={svgPaths.p2975ef00} id="Vector" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Password" && !large && filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Password, Large=No, Filled=Yes">
        <div className="absolute inset-[20.83%_10.42%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19 14">
            <path d={svgPaths.p10782800} fill="var(--fill-0, #EEEEEE)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Credit Card" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Credit Card, Large=No, Filled=No">
        <div className="absolute inset-[20.83%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-5.36%_-4.17%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 15.5">
              <path d={svgPaths.pb24ec00} id="Vector" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Credit Card" && !large && filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Credit Card, Large=No, Filled=Yes">
        <div className="absolute inset-[16.67%_8.33%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
            <path d={svgPaths.p3cf0a900} fill="var(--fill-0, #EEEEEE)" id="Subtract" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Dissatisfied" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Dissatisfied, Large=No, Filled=No">
        <div className="absolute inset-[39.58%_64.54%_60.42%_35.42%]">
          <div className="absolute inset-[-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.01 2">
              <path d="M1 1H1.01" id="Vector 143" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[39.58%_35.38%_60.42%_64.58%]">
          <div className="absolute inset-[-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.01 2">
              <path d="M1 1H1.01" id="Vector 143" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[58.33%_29.17%_0_29.17%]">
          <div className="absolute inset-[-7.5%_7.14%_77.86%_7.14%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.57107 2.96447">
              <path d={svgPaths.p2e15ebc0} id="Ellipse 95" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%]">
          <div className="absolute inset-[-2.78%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
              <circle cx="9.5" cy="9.5" id="Ellipse 96" r="9" stroke="var(--stroke-0, #EEEEEE)" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Dissatisfied" && !large && filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Dissatisfied, Large=No, Filled=Yes">
        <div className="absolute inset-[9.38%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
            <path d={svgPaths.p14219200} fill="var(--fill-0, #EEEEEE)" id="Subtract" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Somewhat Dissatisfied" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Somewhat Dissatisfied, Large=No, Filled=No">
        <div className="absolute inset-[62.5%_29.17%_-4.17%_29.17%]">
          <div className="absolute inset-[-7.5%_17.5%_85.8%_17.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.50025 2.17">
              <path d={svgPaths.p3afb9d00} id="Ellipse 104" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[39.58%_64.54%_60.42%_35.42%]">
          <div className="absolute inset-[-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.01 2">
              <path d="M1 1H1.01" id="Vector 143" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[39.58%_35.38%_60.42%_64.58%]">
          <div className="absolute inset-[-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.01 2">
              <path d="M1 1H1.01" id="Vector 143" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%]">
          <div className="absolute inset-[-2.78%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
              <circle cx="9.5" cy="9.5" id="Ellipse 96" r="9" stroke="var(--stroke-0, #EEEEEE)" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Somewhat Dissatisfied" && !large && filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Somewhat Dissatisfied, Large=No, Filled=Yes">
        <div className="absolute inset-[9.38%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
            <path d={svgPaths.p1cabe380} fill="var(--fill-0, #EEEEEE)" id="Subtract" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Ok With" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Ok With, Large=No, Filled=No">
        <div className="absolute inset-[62.5%_37.5%_37.5%_37.5%]">
          <div className="absolute inset-[-0.75px_-12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 1.5">
              <path d="M0.75 0.75H6.75" id="Vector 142" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[39.58%_64.54%_60.42%_35.42%]">
          <div className="absolute inset-[-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.01 2">
              <path d="M1 1H1.01" id="Vector 143" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[39.58%_35.38%_60.42%_64.58%]">
          <div className="absolute inset-[-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.01 2">
              <path d="M1 1H1.01" id="Vector 143" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%]">
          <div className="absolute inset-[-2.78%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
              <circle cx="9.5" cy="9.5" id="Ellipse 96" r="9" stroke="var(--stroke-0, #EEEEEE)" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Ok With" && !large && filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Ok With, Large=No, Filled=Yes">
        <div className="absolute inset-[9.38%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
            <path d={svgPaths.pd0c2200} fill="var(--fill-0, #EEEEEE)" id="Subtract" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Somewhat Satisfied" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Somewhat Satisfied, Large=No, Filled=No">
        <div className="absolute bottom-[33.33%] left-[29.17%] right-[29.17%] top-1/4">
          <div className="absolute inset-[85.8%_17.5%_-7.5%_17.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.50025 2.17">
              <path d={svgPaths.pd818f00} id="Ellipse 95" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[39.58%_64.54%_60.42%_35.42%]">
          <div className="absolute inset-[-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.01 2">
              <path d="M1 1H1.01" id="Vector 143" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[39.58%_35.38%_60.42%_64.58%]">
          <div className="absolute inset-[-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.01 2">
              <path d="M1 1H1.01" id="Vector 143" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%]">
          <div className="absolute inset-[-2.78%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
              <circle cx="9.5" cy="9.5" id="Ellipse 96" r="9" stroke="var(--stroke-0, #EEEEEE)" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Somewhat Satisfied" && !large && filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Somewhat Satisfied, Large=No, Filled=Yes">
        <div className="absolute inset-[9.38%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
            <path d={svgPaths.p4ab2680} fill="var(--fill-0, #EEEEEE)" id="Subtract" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Satisfied" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Satisfied, Large=No, Filled=No">
        <div className="absolute inset-[29.17%]">
          <div className="absolute inset-[77.86%_7.14%_-7.5%_7.14%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.57107 2.96447">
              <path d={svgPaths.p8f88c00} id="Ellipse 95" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[39.58%_64.54%_60.42%_35.42%]">
          <div className="absolute inset-[-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.01 2">
              <path d="M1 1H1.01" id="Vector 143" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[39.58%_35.38%_60.42%_64.58%]">
          <div className="absolute inset-[-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.01 2">
              <path d="M1 1H1.01" id="Vector 143" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%]">
          <div className="absolute inset-[-2.78%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
              <circle cx="9.5" cy="9.5" id="Ellipse 96" r="9" stroke="var(--stroke-0, #EEEEEE)" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Satisfied" && !large && filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Satisfied, Large=No, Filled=Yes">
        <div className="absolute inset-[9.38%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
            <path d={svgPaths.p2eac3500} fill="var(--fill-0, #EEEEEE)" id="Subtract" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Exclamation Border" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Exclamation Border, Large=No, Filled=No">
        <div className="absolute bottom-[33.33%] left-1/2 right-[49.96%] top-[66.67%]">
          <div className="absolute inset-[-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.01 2">
              <path d="M1 1H1.01" id="Vector 143" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%]">
          <div className="absolute inset-[-2.78%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
              <circle cx="9.5" cy="9.5" id="Ellipse 96" r="9" stroke="var(--stroke-0, #EEEEEE)" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-1/2 right-1/2 top-[33.33%]">
          <div className="absolute inset-[-18.75%_-0.75px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 5.5">
              <path d="M0.75 0.75V4.75" id="Vector 174" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Exclamation Border" && !large && filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Exclamation Border, Large=No, Filled=Yes">
        <div className="absolute inset-[8.33%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p1c5ee900} fill="var(--fill-0, #EEEEEE)" id="Subtract" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Exclamation" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Exclamation, Large=No, Filled=No">
        <div className="absolute bottom-[20.86%] left-1/2 right-[49.96%] top-[79.14%]">
          <div className="absolute inset-[-1.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.01 3">
              <path d="M1.5 1.5H1.51" id="Vector 143" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="3" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[16.61%_37.5%_37.56%_37.5%]">
          <div className="absolute inset-[-6.82%_-12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 12.5">
              <path d={svgPaths.p782a000} id="Ellipse 110" stroke="var(--stroke-0, #EEEEEE)" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Exclamation" && !large && filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Exclamation, Large=No, Filled=Yes">
        <div className="absolute bottom-[20.86%] left-1/2 right-[49.96%] top-[79.14%]">
          <div className="absolute inset-[-1.75px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.51 3.5">
              <path d="M1.75 1.75H1.76" id="Vector 143" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="3.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[16.61%_37.5%_37.56%_37.5%]">
          <div className="absolute inset-[-4.55%_-8.33%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 12">
              <path d={svgPaths.pe39a870} fill="var(--fill-0, #EEEEEE)" id="Ellipse 110" stroke="var(--stroke-0, #EEEEEE)" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "EPG-Mini" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=EPG-Mini, Large=No, Filled=No">
        <div className="absolute inset-[16.67%_8.33%_33.33%_8.33%] rounded-[1px]">
          <div aria-hidden="true" className="absolute border-[#eee] border-[1.5px] border-solid inset-[-0.75px] pointer-events-none rounded-[1.75px]" />
        </div>
        <div className="absolute inset-[83.33%_33.33%_16.67%_33.33%]">
          <div className="absolute inset-[-0.75px_-9.38%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5 1.5">
              <path d="M0.75 0.75H8.75" id="Vector 173" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-[37.5%] right-[37.5%] rounded-[0.1px] top-[33.33%]">
          <div aria-hidden="true" className="absolute border-[#eee] border-[1.5px] border-solid inset-[-0.75px] pointer-events-none rounded-[0.85px]" />
        </div>
        <div className="absolute bottom-1/2 left-[20.83%] right-[72.92%] top-[49.97%]">
          <div className="absolute inset-[-0.75px_-50%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1.50708">
              <path d="M0.75 0.75708L2.25 0.75" id="Vector 171" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-[72.92%] right-[20.83%] top-1/2">
          <div className="absolute inset-[-0.75px_-50%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1.5">
              <path d="M0.75 0.75H2.25" id="Vector 172" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "EPG-Mini" && !large && filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=EPG-Mini, Large=No, Filled=Yes">
        <div className="absolute inset-[83.33%_33.33%_16.67%_33.33%]">
          <div className="absolute inset-[-1px_-12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 2">
              <path d="M1 1H9" id="Vector 173" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_4.17%_29.17%_4.17%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 22 14">
            <path d={svgPaths.p27895580} fill="var(--fill-0, #EEEEEE)" id="Subtract" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Join Now" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Join Now, Large=No, Filled=No">
        <div className="absolute inset-[12.5%_12.5%_12.5%_16.67%]" data-name="ico-join_now">
          <div className="absolute inset-[-4.17%_-4.41%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.5 19.5">
              <path d={svgPaths.p3bc3f980} id="ico-join_now" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Join Now" && !large && filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Join Now, Large=No, Filled=Yes">
        <div className="absolute inset-[12.5%_12.5%_12.5%_16.67%]" data-name="ico-join_now">
          <div className="absolute inset-[-5.56%_-5.88%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 20">
              <path d={svgPaths.p3787e600} id="ico-join_now" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Light Mode" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Light Mode, Large=No, Filled=No">
        <div className="absolute bottom-1/2 left-[83.33%] right-[12.5%] top-1/2">
          <div className="absolute inset-[-0.75px_-75%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.5 1.5">
              <path d="M0.75 0.75H1.75" id="Vector 157" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute flex inset-[23.48%_73.57%_73.57%_23.48%] items-center justify-center">
          <div className="-rotate-135 flex-none size-px">
            <div className="relative size-full">
              <div className="absolute inset-[-0.75px_-75%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.5 1.5">
                  <path d="M0.75 0.75H1.75" id="Vector 163" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex inset-[23.48%_23.48%_73.57%_73.57%] items-center justify-center">
          <div className="-rotate-45 flex-none size-px">
            <div className="relative size-full">
              <div className="absolute inset-[-0.75px_-75%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.5 1.5">
                  <path d="M0.75 0.75H1.75" id="Vector 161" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[83.33%] flex items-center justify-center left-1/2 right-1/2 top-[12.5%]">
          <div className="-rotate-90 flex-none size-px">
            <div className="relative size-full">
              <div className="absolute inset-[-0.75px_-75%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.5 1.5">
                  <path d="M0.75 0.75H1.75" id="Vector 159" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-[12.5%] right-[83.33%] top-1/2">
          <div className="absolute inset-[-0.75px_-75%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.5 1.5">
              <path d="M0.75 0.75H1.75" id="Vector 157" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute flex inset-[73.57%_23.48%_23.48%_73.57%] items-center justify-center">
          <div className="-rotate-135 flex-none size-px">
            <div className="relative size-full">
              <div className="absolute inset-[-0.75px_-75%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.5 1.5">
                  <path d="M0.75 0.75H1.75" id="Vector 163" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex inset-[73.57%_73.57%_23.48%_23.48%] items-center justify-center">
          <div className="-rotate-45 flex-none size-px">
            <div className="relative size-full">
              <div className="absolute inset-[-0.75px_-75%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.5 1.5">
                  <path d="M0.75 0.75H1.75" id="Vector 161" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[12.5%] flex items-center justify-center left-1/2 right-1/2 top-[83.33%]">
          <div className="-rotate-90 flex-none size-px">
            <div className="relative size-full">
              <div className="absolute inset-[-0.75px_-75%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.5 1.5">
                  <path d="M0.75 0.75H1.75" id="Vector 159" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-[33.33%]">
          <div className="absolute inset-[-9.38%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5 9.5">
              <circle cx="4.75" cy="4.75" id="Ellipse 99" r="4" stroke="var(--stroke-0, #EEEEEE)" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Light Mode" && !large && filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Light Mode, Large=No, Filled=Yes">
        <div className="absolute bottom-1/2 left-[83.33%] right-[12.5%] top-1/2">
          <div className="absolute inset-[-1px_-100%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
              <path d="M1 1H2" id="Vector 157" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute flex inset-[23.48%_73.57%_73.57%_23.48%] items-center justify-center">
          <div className="-rotate-135 flex-none size-px">
            <div className="relative size-full">
              <div className="absolute inset-[-1px_-100%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
                  <path d="M1 1H2" id="Vector 163" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex inset-[23.48%_23.48%_73.57%_73.57%] items-center justify-center">
          <div className="-rotate-45 flex-none size-px">
            <div className="relative size-full">
              <div className="absolute inset-[-1px_-100%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
                  <path d="M1 1H2" id="Vector 161" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[83.33%] flex items-center justify-center left-1/2 right-1/2 top-[12.5%]">
          <div className="-rotate-90 flex-none size-px">
            <div className="relative size-full">
              <div className="absolute inset-[-1px_-100%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
                  <path d="M1 1H2" id="Vector 159" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-[12.5%] right-[83.33%] top-1/2">
          <div className="absolute inset-[-1px_-100%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
              <path d="M1 1H2" id="Vector 157" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute flex inset-[73.57%_23.48%_23.48%_73.57%] items-center justify-center">
          <div className="-rotate-135 flex-none size-px">
            <div className="relative size-full">
              <div className="absolute inset-[-1px_-100%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
                  <path d="M1 1H2" id="Vector 163" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex inset-[73.57%_73.57%_23.48%_23.48%] items-center justify-center">
          <div className="-rotate-45 flex-none size-px">
            <div className="relative size-full">
              <div className="absolute inset-[-1px_-100%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
                  <path d="M1 1H2" id="Vector 161" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[12.5%] flex items-center justify-center left-1/2 right-1/2 top-[83.33%]">
          <div className="-rotate-90 flex-none size-px">
            <div className="relative size-full">
              <div className="absolute inset-[-1px_-100%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
                  <path d="M1 1H2" id="Vector 159" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-[33.33%]">
          <div className="absolute inset-[-12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
              <circle cx="5" cy="5" id="Ellipse 99" r="4" stroke="var(--stroke-0, #EEEEEE)" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Dark Mode" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Dark Mode, Large=No, Filled=No">
        <div className="absolute inset-[14.11%_14.11%_12.5%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-4.26%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.1144 19.1144">
              <path d={svgPaths.pea66800} id="Vector" stroke="var(--stroke-0, #EEEEEE)" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[8.33%_8.33%_58.33%_58.33%]">
          <div className="absolute inset-[-1.54%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.24586 8.24586">
              <path d={svgPaths.p27f3af00} id="Star 3" stroke="var(--stroke-0, #EEEEEE)" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Dark Mode" && !large && filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Dark Mode, Large=No, Filled=Yes">
        <div className="absolute inset-[14.11%_14.11%_12.5%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-5.68%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.6144 19.6144">
              <path d={svgPaths.p31385232} fill="var(--fill-0, #EEEEEE)" id="Vector" stroke="var(--stroke-0, #EEEEEE)" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[8.33%_8.33%_58.33%_58.33%]">
          <div className="absolute inset-[-4.66%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.74586 8.74586">
              <path d={svgPaths.pe55700} fill="var(--fill-0, #EEEEEE)" id="Star 3" stroke="var(--stroke-0, #EEEEEE)" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Brightness" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Brightness, Large=No, Filled=No">
        <div className="absolute bottom-1/2 left-[83.33%] right-[12.5%] top-1/2">
          <div className="absolute inset-[-0.75px_-75%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.5 1.5">
              <path d="M0.75 0.75H1.75" id="Vector 157" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute flex inset-[23.48%_73.57%_73.57%_23.48%] items-center justify-center">
          <div className="-rotate-135 flex-none size-px">
            <div className="relative size-full">
              <div className="absolute inset-[-0.75px_-75%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.5 1.5">
                  <path d="M0.75 0.75H1.75" id="Vector 163" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex inset-[23.48%_23.48%_73.57%_73.57%] items-center justify-center">
          <div className="-rotate-45 flex-none size-px">
            <div className="relative size-full">
              <div className="absolute inset-[-0.75px_-75%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.5 1.5">
                  <path d="M0.75 0.75H1.75" id="Vector 161" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[83.33%] flex items-center justify-center left-1/2 right-1/2 top-[12.5%]">
          <div className="-rotate-90 flex-none size-px">
            <div className="relative size-full">
              <div className="absolute inset-[-0.75px_-75%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.5 1.5">
                  <path d="M0.75 0.75H1.75" id="Vector 159" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-[12.5%] right-[83.33%] top-1/2">
          <div className="absolute inset-[-0.75px_-75%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.5 1.5">
              <path d="M0.75 0.75H1.75" id="Vector 157" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute flex inset-[73.57%_23.48%_23.48%_73.57%] items-center justify-center">
          <div className="-rotate-135 flex-none size-px">
            <div className="relative size-full">
              <div className="absolute inset-[-0.75px_-75%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.5 1.5">
                  <path d="M0.75 0.75H1.75" id="Vector 163" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex inset-[73.57%_73.57%_23.48%_23.48%] items-center justify-center">
          <div className="-rotate-45 flex-none size-px">
            <div className="relative size-full">
              <div className="absolute inset-[-0.75px_-75%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.5 1.5">
                  <path d="M0.75 0.75H1.75" id="Vector 161" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[12.5%] flex items-center justify-center left-1/2 right-1/2 top-[83.33%]">
          <div className="-rotate-90 flex-none size-px">
            <div className="relative size-full">
              <div className="absolute inset-[-0.75px_-75%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.5 1.5">
                  <path d="M0.75 0.75H1.75" id="Vector 159" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-[33.33%]">
          <div className="absolute inset-[-9.38%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5 9.5">
              <circle cx="4.75" cy="4.75" id="Ellipse 99" r="4" stroke="var(--stroke-0, #EEEEEE)" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[35.42%_45.83%_35.17%_54.17%]">
          <div className="absolute inset-[-10.62%_-0.75px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 8.55933">
              <path d="M0.75 0.75V7.80933" id="Vector 168" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[37.5%_41.67%_37.5%_58.33%]">
          <div className="absolute inset-[-12.5%_-0.75px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 7.5">
              <path d="M0.75 0.75V6.75" id="Vector 169" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[41.67%_37.5%_41.67%_62.5%]">
          <div className="absolute inset-[-18.75%_-0.75px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 5.5">
              <path d="M0.75 0.75V4.75" id="Vector 170" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Brightness" && !large && filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Brightness, Large=No, Filled=Yes">
        <div className="absolute bottom-1/2 left-[83.33%] right-[12.5%] top-1/2">
          <div className="absolute inset-[-1px_-100%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
              <path d="M1 1H2" id="Vector 157" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute flex inset-[23.48%_73.57%_73.57%_23.48%] items-center justify-center">
          <div className="-rotate-135 flex-none size-px">
            <div className="relative size-full">
              <div className="absolute inset-[-1px_-100%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
                  <path d="M1 1H2" id="Vector 163" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex inset-[23.48%_23.48%_73.57%_73.57%] items-center justify-center">
          <div className="-rotate-45 flex-none size-px">
            <div className="relative size-full">
              <div className="absolute inset-[-1px_-100%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
                  <path d="M1 1H2" id="Vector 161" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[83.33%] flex items-center justify-center left-1/2 right-1/2 top-[12.5%]">
          <div className="-rotate-90 flex-none size-px">
            <div className="relative size-full">
              <div className="absolute inset-[-1px_-100%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
                  <path d="M1 1H2" id="Vector 159" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-[12.5%] right-[83.33%] top-1/2">
          <div className="absolute inset-[-1px_-100%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
              <path d="M1 1H2" id="Vector 157" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute flex inset-[73.57%_23.48%_23.48%_73.57%] items-center justify-center">
          <div className="-rotate-135 flex-none size-px">
            <div className="relative size-full">
              <div className="absolute inset-[-1px_-100%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
                  <path d="M1 1H2" id="Vector 163" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex inset-[73.57%_73.57%_23.48%_23.48%] items-center justify-center">
          <div className="-rotate-45 flex-none size-px">
            <div className="relative size-full">
              <div className="absolute inset-[-1px_-100%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
                  <path d="M1 1H2" id="Vector 161" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[12.5%] flex items-center justify-center left-1/2 right-1/2 top-[83.33%]">
          <div className="-rotate-90 flex-none size-px">
            <div className="relative size-full">
              <div className="absolute inset-[-1px_-100%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
                  <path d="M1 1H2" id="Vector 159" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-[33.33%]">
          <div className="absolute inset-[-12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
              <circle cx="5" cy="5" id="Ellipse 99" r="4" stroke="var(--stroke-0, #EEEEEE)" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[35.42%_45.83%_35.17%_54.17%]">
          <div className="absolute inset-[-14.17%_-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 9.05933">
              <path d="M1 1V8.05933" id="Vector 168" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[37.5%_41.67%_37.5%_58.33%]">
          <div className="absolute inset-[-16.67%_-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 8">
              <path d="M1 1V7" id="Vector 169" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[41.67%_37.5%_41.67%_62.5%]">
          <div className="absolute inset-[-25%_-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 6">
              <path d="M1 1V5" id="Vector 170" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Present" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Present, Large=No, Filled=No">
        <div className="absolute bottom-[12.53%] flex items-center justify-center left-1/2 right-1/2 top-[33.3%]">
          <div className="-rotate-90 flex-none h-px w-[13px]">
            <div className="relative size-full">
              <div className="absolute inset-[-0.75px_-5.77%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.5 1.5">
                  <path d="M0.75 0.75H13.75" id="Line 3" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-[33.3%_12.5%_45.86%_12.5%]">
          <div className="absolute inset-[-15%_-4.17%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 6.5">
              <path d={svgPaths.p4b2d400} id="Vector 179" stroke="var(--stroke-0, #EEEEEE)" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[54.14%_20.83%_12.53%_20.83%]">
          <div className="absolute inset-[-9.38%_-5.36%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 9.5">
              <path d={svgPaths.p38d9e400} id="Vector 180" stroke="var(--stroke-0, #EEEEEE)" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute flex inset-[13.26%_54.14%_66.7%_18.44%] items-center justify-center">
          <div className="-scale-y-100 flex-none h-[4.81px] rotate-180 w-[6.582px]">
            <div className="relative size-full">
              <div className="absolute inset-[-15.59%_-11.4%_-15.59%_-11.39%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.08249 6.3103">
                  <path d={svgPaths.p19e09800} id="Vector 181" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-[13.26%_18.41%_66.7%_54.17%]">
          <div className="absolute inset-[-15.59%_-11.4%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.08213 6.31042">
              <path d={svgPaths.p9204280} id="Vector 182" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Present" && !large && filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Present, Large=No, Filled=Yes">
        <div className="absolute inset-[9.06%_8.33%_8.39%_8.33%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19.8106">
            <path d={svgPaths.p9872000} fill="var(--fill-0, #EEEEEE)" id="Subtract" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Drag" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Drag, Large=No, Filled=No">
        <div className="absolute bottom-3/4 left-1/4 right-1/4 top-1/4">
          <div className="absolute inset-[-0.75px_-6.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 1.5">
              <path d="M0.75 0.75H12.75" id="Vector 152" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[58.33%] left-1/4 right-1/4 top-[41.67%]">
          <div className="absolute inset-[-0.75px_-6.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 1.5">
              <path d="M0.75 0.75H12.75" id="Vector 152" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[41.67%] left-1/4 right-1/4 top-[58.33%]">
          <div className="absolute inset-[-0.75px_-6.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 1.5">
              <path d="M0.75 0.75H12.75" id="Vector 152" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-1/4 right-1/4 top-3/4">
          <div className="absolute inset-[-0.75px_-6.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 1.5">
              <path d="M0.75 0.75H12.75" id="Vector 152" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Drag" && !large && filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Drag, Large=No, Filled=Yes">
        <div className="absolute bottom-3/4 left-1/4 right-1/4 top-1/4">
          <div className="absolute inset-[-1px_-8.33%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 2">
              <path d="M1 1H13" id="Vector 152" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[58.33%] left-1/4 right-1/4 top-[41.67%]">
          <div className="absolute inset-[-1px_-8.33%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 2">
              <path d="M1 1H13" id="Vector 152" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[41.67%] left-1/4 right-1/4 top-[58.33%]">
          <div className="absolute inset-[-1px_-8.33%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 2">
              <path d="M1 1H13" id="Vector 152" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-1/4 right-1/4 top-3/4">
          <div className="absolute inset-[-1px_-8.33%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 2">
              <path d="M1 1H13" id="Vector 152" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "AI" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=AI, Large=No, Filled=No">
        <div className="absolute bottom-[8.33%] left-1/4 right-[8.33%] top-1/4">
          <div className="absolute inset-[2.19%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.2992 15.2992">
              <path d={svgPaths.p16a57cc0} id="Star 2" stroke="var(--stroke-0, #EEEEEE)" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[8.33%_58.33%_58.33%_8.33%]">
          <div className="absolute inset-[-1.54%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.24586 8.24586">
              <path d={svgPaths.p27f3af00} id="Star 3" stroke="var(--stroke-0, #EEEEEE)" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "AI" && !large && filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=AI, Large=No, Filled=Yes">
        <div className="absolute bottom-[8.33%] left-1/4 right-[8.33%] top-1/4">
          <div className="absolute inset-[0.63%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.7992 15.7992">
              <path d={svgPaths.p2b410d00} fill="var(--fill-0, #EEEEEE)" id="Star 2" stroke="var(--stroke-0, #EEEEEE)" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[8.33%_58.33%_58.33%_8.33%]">
          <div className="absolute inset-[-4.66%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.74586 8.74586">
              <path d={svgPaths.pe55700} fill="var(--fill-0, #EEEEEE)" id="Star 3" stroke="var(--stroke-0, #EEEEEE)" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Camera" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Camera, Large=No, Filled=No">
        <div className="absolute inset-[33.33%_12.5%_33.33%_70.83%]">
          <div className="absolute inset-[-9.38%_-18.75%_-9.37%_-18.75%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.5 9.5">
              <path d={svgPaths.p1dd32f00} id="Vector 85" stroke="var(--stroke-0, #EEEEEE)" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[29.17%_41.67%_29.17%_12.5%] rounded-[1px]">
          <div aria-hidden="true" className="absolute border-[#eee] border-[1.5px] border-solid inset-[-0.75px] pointer-events-none rounded-[1.75px]" />
        </div>
      </div>
    );
  }
  if (name === "Camera" && !large && filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Camera, Large=No, Filled=Yes">
        <div className="absolute bg-[#eee] inset-[29.17%_41.67%_29.17%_12.5%] rounded-[1px]">
          <div aria-hidden="true" className="absolute border-2 border-[#eee] border-solid inset-[-1px] pointer-events-none rounded-[2px]" />
        </div>
        <div className="absolute inset-[33.33%_12.5%_33.33%_70.83%]">
          <div className="absolute inset-[-12.5%_-25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 10">
              <path d={svgPaths.p1b586940} fill="var(--fill-0, #EEEEEE)" id="Vector 85" stroke="var(--stroke-0, #EEEEEE)" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Camera Crossed" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Camera Crossed, Large=No, Filled=No">
        <div className="absolute inset-[33.33%_12.5%_33.33%_70.83%]">
          <div className="absolute inset-[-9.38%_-18.75%_-9.37%_-18.75%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.5 9.5">
              <path d={svgPaths.p1dd32f00} id="Vector 85" stroke="var(--stroke-0, #EEEEEE)" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[29.17%_41.67%_29.17%_12.5%]">
          <div className="absolute inset-[-7.5%_-6.82%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5 11.5">
              <path d={svgPaths.p7960680} id="Rectangle 38" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 flex items-center justify-center left-[12.5%] right-[29.17%] top-[16.67%]">
          <div className="flex-none rotate-90 size-[14px]">
            <div className="relative size-full">
              <div className="absolute inset-[-5.36%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 15.5">
                  <path d="M0.75 14.75L14.75 0.75" id="Vector 87" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Camera Crossed" && !large && filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Camera Crossed, Large=No, Filled=Yes">
        <div className="absolute bottom-1/4 left-[8.33%] right-[8.33%] top-1/4" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 12">
            <path d={svgPaths.p20486f00} fill="var(--fill-0, #EEEEEE)" id="Subtract" />
          </svg>
        </div>
        <div className="absolute bottom-1/4 flex items-center justify-center left-[12.5%] right-[29.17%] top-[16.67%]">
          <div className="flex-none rotate-90 size-[14px]">
            <div className="relative size-full">
              <div className="absolute inset-[-7.14%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <path d="M1 15L15 1" id="Vector 87" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Mic" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Mic, Large=No, Filled=No">
        <div className="absolute bottom-[29.17%] left-1/4 right-1/4 top-[45.83%]">
          <div className="absolute inset-[-12.5%_-6.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 7.5">
              <path d={svgPaths.p27299400} id="Ellipse 23" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[12.5%] left-1/2 right-1/2 top-[70.83%]">
          <div className="absolute inset-[0_-0.75px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 4">
              <path d="M0.75 0V4" id="Vector 84" stroke="var(--stroke-0, #EEEEEE)" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute flex inset-[87.5%_33.33%_12.5%_33.33%] items-center justify-center">
          <div className="flex-none h-[8px] rotate-90 w-px">
            <div className="relative size-full">
              <div className="absolute inset-[-9.38%_-0.75px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 9.5">
                  <path d="M0.75 0.75V8.75" id="Vector 85" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-[10.42%_39.58%_43.75%_39.58%] rounded-[4px]">
          <div aria-hidden="true" className="absolute border-[#eee] border-[1.5px] border-solid inset-[-0.75px] pointer-events-none rounded-[4.75px]" />
        </div>
      </div>
    );
  }
  if (name === "Mic" && !large && filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Mic, Large=No, Filled=Yes">
        <div className="absolute bg-[#eee] inset-[8.33%_37.5%_41.67%_37.5%] rounded-[4px]" />
        <div className="absolute bottom-[29.17%] left-1/4 right-1/4 top-[45.83%]">
          <div className="absolute inset-[-16.67%_-8.33%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 8">
              <path d={svgPaths.p3b248e00} id="Ellipse 23" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[12.53%] left-1/2 right-1/2 top-[70.8%]">
          <div className="absolute inset-[0_-1px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 4">
              <path d="M1 0V4" id="Vector 84" stroke="var(--stroke-0, #EEEEEE)" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute flex inset-[87.5%_33.33%_12.5%_33.33%] items-center justify-center">
          <div className="flex-none h-[8px] rotate-90 w-px">
            <div className="relative size-full">
              <div className="absolute inset-[-12.5%_-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 10">
                  <path d="M1 1V9" id="Vector 85" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Mic Crossed" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Mic Crossed, Large=No, Filled=No">
        <div className="absolute inset-[10.42%_39.58%_43.75%_39.58%]" data-name="Vector">
          <div className="absolute inset-[-6.82%_-15%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.5 12.5">
              <path d={svgPaths.p231b9080} id="Vector" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[29.17%] left-1/4 right-1/4 top-[45.83%]">
          <div className="absolute inset-[-12.5%_-6.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 7.5">
              <path d={svgPaths.p8b95820} id="Ellipse 23" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[12.5%] left-1/2 right-1/2 top-[70.83%]">
          <div className="absolute inset-[0_-0.75px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 4">
              <path d="M0.75 0V4" id="Vector 84" stroke="var(--stroke-0, #EEEEEE)" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute flex inset-[87.5%_33.33%_12.5%_33.33%] items-center justify-center">
          <div className="flex-none h-[8px] rotate-90 w-px">
            <div className="relative size-full">
              <div className="absolute inset-[-9.38%_-0.75px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.5 9.5">
                  <path d="M0.75 0.75V8.75" id="Vector 85" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-1/4 flex items-center justify-center left-[20.83%] right-[20.83%] top-[16.67%]">
          <div className="flex-none rotate-90 size-[14px]">
            <div className="relative size-full">
              <div className="absolute inset-[-5.36%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 15.5">
                  <path d="M0.75 14.75L14.75 0.75" id="Vector 87" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Mic Crossed" && !large && filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Mic Crossed, Large=No, Filled=Yes">
        <div className="absolute inset-[8.33%_16.67%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9998 20">
            <path d={svgPaths.p18f5db30} fill="var(--fill-0, #EEEEEE)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Pause" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Pause, Large=No, Filled=No">
        <div className="absolute inset-[16.67%_58.33%_16.67%_16.67%]" data-name="Path">
          <div className="absolute inset-[-4.69%_-12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 17.5">
              <path clipRule="evenodd" d={svgPaths.p2f561600} fillRule="evenodd" id="Path" stroke="var(--stroke-0, #EEEEEE)" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[16.67%_16.67%_16.67%_58.33%]" data-name="Path">
          <div className="absolute inset-[-4.69%_-12.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 17.5">
              <path clipRule="evenodd" d={svgPaths.p2f561600} fillRule="evenodd" id="Path" stroke="var(--stroke-0, #EEEEEE)" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Pause" && !large && filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Pause, Large=No, Filled=Yes">
        <div className="absolute inset-[16.67%_58.33%_16.67%_16.67%]" data-name="Path">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 6 16">
            <path clipRule="evenodd" d={svgPaths.p2274de80} fill="var(--fill-0, #EEEEEE)" fillRule="evenodd" id="Path" />
          </svg>
        </div>
        <div className="absolute inset-[16.67%_16.67%_16.67%_58.33%]" data-name="Path">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 6 16">
            <path clipRule="evenodd" d={svgPaths.p2274de80} fill="var(--fill-0, #EEEEEE)" fillRule="evenodd" id="Path" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Play" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Play, Large=No, Filled=No">
        <div className="absolute inset-[8.33%_0_8.33%_20.83%]">
          <div className="absolute inset-[5.61%_14.17%_6.53%_-3.95%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.0579 17.5711">
              <path d={svgPaths.p176cd700} id="Vector 99" stroke="var(--stroke-0, #EEEEEE)" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Play" && !large && filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Play, Large=No, Filled=Yes">
        <div className="absolute inset-[4.17%_0_4.17%_16.67%]">
          <div className="absolute inset-[8.97%_16.13%_9.85%_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.774 17.8599">
              <path d={svgPaths.p675700} fill="var(--fill-0, #EEEEEE)" id="Vector 98" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Pause Circular" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Pause Circular, Large=No, Filled=No">
        <div className="absolute inset-[12.5%]" data-name="Oval 8">
          <div className="absolute inset-[-2.78%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
              <path d={svgPaths.p27198180} id="Oval 8" stroke="var(--stroke-0, #EEEEEE)" />
            </svg>
          </div>
        </div>
        <div className="absolute bg-[#eee] inset-[37.47%_37.5%_37.53%_58.33%]">
          <div aria-hidden="true" className="absolute border-2 border-[#eee] border-solid inset-[-1px] pointer-events-none" />
        </div>
        <div className="absolute bg-[#eee] inset-[37.47%_58.33%_37.53%_37.5%]">
          <div aria-hidden="true" className="absolute border-2 border-[#eee] border-solid inset-[-1px] pointer-events-none" />
        </div>
      </div>
    );
  }
  if (name === "Pause Circular" && !large && filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Pause Circular, Large=No, Filled=Yes">
        <div className="absolute inset-[8.33%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p1264c800} fill="var(--fill-0, #EEEEEE)" id="Subtract" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Play Circular" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Play Circular, Large=No, Filled=No">
        <div className="absolute inset-[12.5%]" data-name="Oval 8">
          <div className="absolute inset-[-2.78%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
              <path d={svgPaths.p27198180} id="Oval 8" stroke="var(--stroke-0, #EEEEEE)" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[33.33%_31.25%_33.33%_39.58%]">
          <div className="absolute inset-[-5.09%_-3.46%_-4.66%_-10.71%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.99207 8.78034">
              <path d={svgPaths.p34cb6400} fill="var(--fill-0, #EEEEEE)" id="Vector 98" stroke="var(--stroke-0, #EEEEEE)" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Play Circular" && !large && filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Play Circular, Large=No, Filled=Yes">
        <div className="absolute inset-[8.33%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.pe5a7c80} fill="var(--fill-0, #EEEEEE)" id="Subtract" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "PiP" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=PiP, Large=No, Filled=No">
        <div className="absolute inset-[58.33%_8.33%_16.67%_54.17%] rounded-[0.1px]">
          <div aria-hidden="true" className="absolute border-[#eee] border-[1.5px] border-solid inset-[-0.75px] pointer-events-none rounded-[0.85px]" />
        </div>
        <div className="absolute inset-[16.67%_8.33%]">
          <div className="absolute inset-[-4.69%_-3.75%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 17.5">
              <path d={svgPaths.p23eaa390} id="Rectangle 48" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "PiP" && !large && filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=PiP, Large=No, Filled=Yes">
        <div className="absolute bg-[#eee] inset-[58.3%_4.17%_12.53%_54.17%] rounded-[1px]" />
        <div className="absolute inset-[16.67%_8.33%]">
          <div className="absolute inset-[-6.25%_-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18">
              <path d={svgPaths.p3bbb1fe0} id="Rectangle 49" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "PiP Top R" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=PiP Top R, Large=No, Filled=No">
        <div className="absolute inset-[16.67%_8.33%]">
          <div className="absolute inset-[-4.69%_-3.75%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 17.5">
              <path d={svgPaths.p15d29080} id="Rectangle 48" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[16.67%_8.33%_58.33%_54.17%] rounded-[0.1px]">
          <div aria-hidden="true" className="absolute border-[#eee] border-[1.5px] border-solid inset-[-0.75px] pointer-events-none rounded-[0.85px]" />
        </div>
      </div>
    );
  }
  if (name === "PiP Top R" && !large && filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=PiP Top R, Large=No, Filled=Yes">
        <div className="absolute inset-[16.64%_8.33%_16.7%_8.33%]">
          <div className="absolute inset-[-6.25%_-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18">
              <path d={svgPaths.p5120300} id="Rectangle 48" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute bg-[#eee] inset-[12.47%_4.17%_58.36%_54.17%] rounded-[1px]" />
      </div>
    );
  }
  if (name === "PiP Top L" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=PiP Top L, Large=No, Filled=No">
        <div className="absolute inset-[16.67%_8.33%]">
          <div className="absolute inset-[-4.69%_-3.75%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 17.5">
              <path d={svgPaths.p1de10600} id="Rectangle 48" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[16.67%_54.17%_58.33%_8.33%] rounded-[0.1px]">
          <div aria-hidden="true" className="absolute border-[#eee] border-[1.5px] border-solid inset-[-0.75px] pointer-events-none rounded-[0.85px]" />
        </div>
      </div>
    );
  }
  if (name === "PiP Top L" && !large && filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=PiP Top L, Large=No, Filled=Yes">
        <div className="absolute inset-[16.67%_8.33%]">
          <div className="absolute inset-[-6.25%_-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18">
              <path d={svgPaths.p24bda100} id="Rectangle 48" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute bg-[#eee] inset-[12.47%_54.17%_58.36%_4.17%] rounded-[1px]" />
      </div>
    );
  }
  if (name === "PiP Btm L" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=PiP Btm L, Large=No, Filled=No">
        <div className="absolute inset-[16.67%_8.33%]">
          <div className="absolute inset-[-4.69%_-3.75%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 17.5">
              <path d={svgPaths.p24bcb100} id="Rectangle 48" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[58.33%_54.17%_16.67%_8.33%] rounded-[0.1px]">
          <div aria-hidden="true" className="absolute border-[#eee] border-[1.5px] border-solid inset-[-0.75px] pointer-events-none rounded-[0.85px]" />
        </div>
      </div>
    );
  }
  if (name === "PiP Btm L" && !large && filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=PiP Btm L, Large=No, Filled=Yes">
        <div className="absolute inset-[16.64%_8.33%_16.7%_8.33%]">
          <div className="absolute inset-[-6.25%_-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18">
              <path d={svgPaths.p1e111300} id="Rectangle 48" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute bg-[#eee] inset-[58.3%_54.17%_12.53%_4.17%] rounded-[1px]" />
      </div>
    );
  }
  if (name === "Keyboard" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Keyboard, Large=No, Filled=No">
        <div className="absolute inset-[24.94%_12.5%_25.06%_12.5%] rounded-[1px]">
          <div aria-hidden="true" className="absolute border-[#eee] border-[1.5px] border-solid inset-[-0.75px] pointer-events-none rounded-[1.75px]" />
        </div>
        <div className="absolute inset-[62.44%_41.67%_37.56%_41.67%]">
          <div className="absolute inset-[-0.75px_-18.75%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.5 1.5">
              <path d="M4.75 0.75H0.75" id="Rectangle 54" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[37.56%] left-1/4 right-[70.83%] top-[62.44%]">
          <div className="absolute inset-[-0.75px_-75%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.5 1.5">
              <path d="M0.75 0.75H1.75" id="Vector 197" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[37.44%_62.42%_62.56%_37.54%]">
          <div className="absolute inset-[-0.75px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.51 1.5">
              <path d="M0.75 0.75H0.76" id="Vector 198" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[37.44%_74.92%_62.56%_25.04%]">
          <div className="absolute inset-[-0.75px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.51 1.5">
              <path d="M0.75 0.75H0.76" id="Vector 198" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[49.94%_68.71%_50.06%_31.25%]">
          <div className="absolute inset-[-0.75px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.51 1.5">
              <path d="M0.75 0.75H0.76" id="Vector 198" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[37.44%_49.87%_62.56%_50.08%]">
          <div className="absolute inset-[-0.75px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.51 1.5">
              <path d="M0.75 0.75H0.76" id="Vector 198" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[49.94%_56.21%_50.06%_43.75%]">
          <div className="absolute inset-[-0.75px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.51 1.5">
              <path d="M0.75 0.75H0.76" id="Vector 198" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[49.94%_43.71%_50.06%_56.25%]">
          <div className="absolute inset-[-0.75px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.51 1.5">
              <path d="M0.75 0.75H0.76" id="Vector 198" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[49.94%_31.21%_50.06%_68.75%]">
          <div className="absolute inset-[-0.75px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.51 1.5">
              <path d="M0.75 0.75H0.76" id="Vector 198" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[37.44%_37.33%_62.56%_62.63%]">
          <div className="absolute inset-[-0.75px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.51 1.5">
              <path d="M0.75 0.75H0.76" id="Vector 198" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[37.44%_24.83%_62.56%_75.13%]">
          <div className="absolute inset-[-0.75px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.51 1.5">
              <path d="M0.75 0.75H0.76" id="Vector 198" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[37.53%] left-[70.83%] right-1/4 top-[62.44%]">
          <div className="absolute inset-[-0.75px_-75%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.5 1.50708">
              <path d="M0.75 0.75708L1.75 0.75" id="Vector 203" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Keyboard" && !large && filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=Keyboard, Large=No, Filled=Yes">
        <div className="absolute inset-[24.94%_12.5%_25.06%_12.5%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
            <path d={svgPaths.p6671080} fill="var(--fill-0, #EEEEEE)" id="Subtract" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "PiP Expand" && !large && !filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=PiP Expand, Large=No, Filled=No">
        <div className="absolute inset-[58.33%_8.33%_16.67%_54.17%] rounded-[0.1px]">
          <div aria-hidden="true" className="absolute border-[#eee] border-[1.5px] border-solid inset-[-0.75px] pointer-events-none rounded-[0.85px]" />
        </div>
        <div className="absolute inset-[16.67%_8.33%]">
          <div className="absolute inset-[-4.69%_-3.75%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 17.5">
              <path d={svgPaths.p23eaa390} id="Rectangle 48" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-1/4 right-[58.33%] top-[33.33%]">
          <div className="absolute inset-[-18.75%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.5 5.5">
              <path d={svgPaths.p3127aa80} id="Vector 199" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "PiP Expand" && !large && filled) {
    return (
      <div className={className || "relative size-[24px]"} data-name="Name=PiP Expand, Large=No, Filled=Yes">
        <div className="absolute bg-[#eee] inset-[58.3%_4.17%_12.53%_54.17%] rounded-[1px]" />
        <div className="absolute inset-[16.67%_8.33%]">
          <div className="absolute inset-[-6.25%_-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18">
              <path d={svgPaths.p3bbb1fe0} id="Rectangle 49" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/2 left-1/4 right-[58.33%] top-[33.33%]">
          <div className="absolute inset-[-25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
              <path d="M1 1V5M1 1H5M1 1L5 5" id="Vector 200" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Info" && large && !filled) {
    return (
      <div className={className || "relative size-[48px]"} data-name="Name=Info, Large=Yes, Filled=No">
        <div className="absolute inset-[8.33%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
            <path d={svgPaths.p249fcef2} fill="var(--fill-0, #EEEEEE)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Info Filled" && large && !filled) {
    return (
      <div className={className || "relative size-[48px]"} data-name="Name=Info Filled, Large=Yes, Filled=No">
        <div className="absolute inset-[8.33%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
            <path d={svgPaths.p3953ad00} fill="var(--fill-0, #EEEEEE)" id="Subtract" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Pause" && large && !filled) {
    return (
      <div className={className || "relative size-[48px]"} data-name="Name=Pause, Large=Yes, Filled=No">
        <div className="absolute inset-[8.33%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
            <path clipRule="evenodd" d={svgPaths.p693a700} fill="var(--fill-0, #EEEEEE)" fillRule="evenodd" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Pause Circular" && large && !filled) {
    return (
      <div className={className || "relative size-[48px]"} data-name="Name=Pause Circular, Large=Yes, Filled=No">
        <div className="absolute inset-[8.33%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
            <path d={svgPaths.p34db2f80} fill="var(--fill-0, #EEEEEE)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Play" && large && !filled) {
    return (
      <div className={className || "relative size-[48px]"} data-name="Name=Play, Large=Yes, Filled=No">
        <div className="absolute inset-[4.17%_0_4.17%_16.67%]">
          <div className="absolute inset-[5.98%_10.75%_6.57%_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.6987 38.4799">
              <path d={svgPaths.p305c0500} fill="var(--fill-0, #EEEEEE)" id="Vector 98" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Play Circular" && large && !filled) {
    return (
      <div className={className || "relative size-[48px]"} data-name="Name=Play Circular, Large=Yes, Filled=No">
        <div className="absolute inset-[8.33%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
            <path d={svgPaths.p296f3500} fill="var(--fill-0, #EEEEEE)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Skip Backward" && large && !filled) {
    return (
      <div className={className || "relative size-[48px]"} data-name="Name=Skip Backward, Large=Yes, Filled=No">
        <div className="absolute inset-[10.42%_10.42%_14.17%_8.33%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 38.9997 36.1983">
            <path d={svgPaths.p15a4aa00} fill="var(--fill-0, #EEEEEE)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Skip Forward" && large && !filled) {
    return (
      <div className={className || "relative size-[48px]"} data-name="Name=Skip Forward, Large=Yes, Filled=No">
        <div className="absolute flex inset-[10.42%_8.33%_14.17%_10.42%] items-center justify-center">
          <div className="-scale-y-100 flex-none h-[36.199px] rotate-180 w-[39px]">
            <div className="relative size-full" data-name="Union">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 38.9997 36.1992">
                <path d={svgPaths.p1e2eaa00} fill="var(--fill-0, #EEEEEE)" id="Union" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (name === "Live 2" && large && !filled) {
    return (
      <div className={className || "relative size-[48px]"} data-name="Name=Live 2, Large=Yes, Filled=No">
        <div className="absolute inset-[8.33%_9.38%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 39 40.0002">
            <path d={svgPaths.pd2c500} fill="var(--fill-0, #EEEEEE)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Placeholder" && large && !filled) {
    return (
      <div className={className || "relative size-[48px]"} data-name="Name=Placeholder, Large=Yes, Filled=No">
        <div className="absolute inset-[8.33%]" data-name="Oval">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
            <path d={svgPaths.p3c62b600} id="Oval" stroke="var(--stroke-0, #EEEEEE)" strokeWidth="2" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "18+" && large && !filled) {
    return (
      <div className={className || "relative size-[48px]"} data-name="Name=18+, Large=Yes, Filled=No">
        <div className="absolute inset-[8.33%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
            <path d={svgPaths.p1579c900} fill="var(--fill-0, #EEEEEE)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Checkmark Circular" && large && !filled) {
    return (
      <div className={className || "relative size-[48px]"} data-name="Name=Checkmark Circular, Large=Yes, Filled=No">
        <div className="absolute inset-[8.33%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
            <path d={svgPaths.p281a1f80} fill="var(--fill-0, #EEEEEE)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Wifi No Signal" && large && !filled) {
    return (
      <div className={className || "relative size-[48px]"} data-name="Name=Wifi No Signal, Large=Yes, Filled=No">
        <div className="absolute inset-[6.25%_0]" data-name="Frame">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 48 42">
            <g id="Frame">
              <path d={svgPaths.p39b50080} fill="var(--fill-0, #EEEEEE)" id="Combined Shape" opacity="0.3" />
              <path d={svgPaths.p28f42500} fill="var(--fill-0, #EEEEEE)" id="Shape" />
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Manage" && large && !filled) {
    return (
      <div className={className || "relative size-[48px]"} data-name="Name=Manage, Large=Yes, Filled=No">
        <div className="absolute bottom-[8.33%] left-[12.5%] right-[8.33%] top-1/4" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 38 32">
            <path clipRule="evenodd" d={svgPaths.p239ea080} fill="var(--fill-0, #EEEEEE)" fillRule="evenodd" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Locked" && large && !filled) {
    return (
      <div className={className || "relative size-[48px]"} data-name="Name=Locked, Large=Yes, Filled=No">
        <div className="absolute inset-[8.33%_16.67%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 40">
            <path d={svgPaths.p21641680} fill="var(--fill-0, #EEEEEE)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Image" && large && !filled) {
    return (
      <div className={className || "relative size-[48px]"} data-name="Name=Image, Large=Yes, Filled=No">
        <div className="absolute inset-[12.5%_4.17%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 44 36">
            <path d={svgPaths.p3d7d5280} fill="var(--fill-0, #EEEEEE)" id="Union" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "Pencil" && large && !filled) {
    return (
      <div className={className || "relative size-[48px]"} data-name="Name=Pencil, Large=Yes, Filled=No">
        <div className="absolute inset-[16.67%]" data-name="edit">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <path d={svgPaths.p3d42be00} id="edit" stroke="var(--stroke-0, #EEEEEE)" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    );
  }
  if (name === "No Video" && large && !filled) {
    return (
      <div className={className || "relative size-[48px]"} data-name="Name=No Video, Large=Yes, Filled=No">
        <div className="absolute inset-[8.33%]" data-name="Icon">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 39.9998 39.9998">
            <path d={svgPaths.p1a059c00} fill="var(--fill-0, #EEEEEE)" id="Icon" />
          </svg>
        </div>
      </div>
    );
  }
  return (
    <div className={className || "relative size-[24px]"} data-name="Name=Airplay, Large=No, Filled=No">
      <div className="absolute inset-[12.5%_4.17%]" data-name="ico_airplay">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18">
          <path d={svgPaths.p19921f80} fill="var(--fill-0, #EEEEEE)" id="ico_airplay" />
        </svg>
      </div>
    </div>
  );
}
type NavigationProps = {
  className?: string;
  backButton?: boolean;
  background?: "Filled" | "Gradient" | "Transparent";
  bar?: "Top Nav" | "Side Nav" | "Tab" | "Search" | "Footer" | "Back" | "Side Nav_with profile";
  close?: boolean;
  close2?: boolean;
  currrentPage?: boolean;
  firstPage?: string;
  intermediaryPage?: string;
  platform?: "Phone" | "Tablet" | "Desktop" | "TV & Auto" | "Tablet_portrait";
  secondPage?: string;
  showArrow?: boolean;
  showClose?: boolean;
  showClose2?: boolean;
  showContent?: boolean;
  showDefaultIcons?: boolean;
  showNotification?: boolean;
  showWithBsckground?: boolean;
  type?: "1st Level" | "2nd Level" | "3rd Level - Few Tabs" | "3rd Level - Multi Tabs" | "3 in Row" | "4 in Row" | "5 in Row" | "Detail Page" | "Search" | "Footer" | "Collapsed" | "Expanded" | "Settings";
};

function Navigation({ className, backButton = true, background = "Gradient", bar = "Top Nav", close = true, close2 = false, currrentPage = true, firstPage = "First Page", intermediaryPage = "...", platform = "Phone", secondPage = "Preceding Page", showArrow = true, showClose = false, showClose2 = false, showContent = true, showDefaultIcons = true, showNotification = true, showWithBsckground = false, type = "1st Level" }: NavigationProps) {
  if (platform === "Phone" && bar === "Top Nav" && type === "1st Level" && background === "Filled") {
    return (
      <div className={className || "h-[88px] relative shadow-[0px_44px_12px_0px_rgba(0,0,0,0),0px_28px_11px_0px_rgba(0,0,0,0.01),0px_16px_10px_0px_rgba(0,0,0,0.04),0px_7px_7px_0px_rgba(0,0,0,0.06),0px_2px_4px_0px_rgba(0,0,0,0.07),0px_0px_0px_0px_rgba(0,0,0,0.07)]"} data-name="Platform=Phone, Bar=Top Nav, Type=1st Level, Background=Filled">
        <div className="absolute h-[48px] left-0 right-0 top-0" data-name="background">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 360 48">
            <path d="M0 0H360V48H0V0Z" fill="var(--fill-0, #002340)" id="background" />
          </svg>
        </div>
        <div className="absolute h-px left-0 right-0 top-[47px]" data-name="divider">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 360 1">
            <path d="M0 0H360V1H0V0Z" fill="var(--fill-0, #E5E9EC)" fillOpacity="0.1" id="divider" />
          </svg>
        </div>
        <div className="absolute content-stretch flex items-center justify-between left-0 px-[16px] py-[8px] top-0 w-[360px]">
          <BrandLogos className="content-stretch flex h-[32px] items-center justify-center relative shrink-0 w-[109px]" />
          <div className="content-stretch flex gap-[16px] h-[32px] items-center justify-end relative shrink-0" data-name="right side">
            <SystemIcons className="relative shrink-0 size-[24px]" name="Cast" />
            <div className="relative shrink-0 size-[24px]" data-name="System Icons">
              <div className="absolute inset-[8.33%]" data-name="ico_search">
                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9999 19.9999">
                  <path d={svgPaths.p112fb6f0} fill="var(--fill-0, #E5E9EC)" id="ico_search" />
                </svg>
              </div>
            </div>
            <div className="relative shrink-0 size-[32px]" data-name="Avatars">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 88 88">
                <path clipRule="evenodd" d={svgPaths.p1958a480} fill="var(--fill-0, #E5E9EC)" fillOpacity="0.2" fillRule="evenodd" id="shape" />
              </svg>
              <div className="absolute inset-[18.18%_14.86%_0_14.86%]" data-name="Union">
                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 61.8535 72">
                  <path d={svgPaths.p2dfe470} fill="var(--fill-0, #E5E9EC)" fillOpacity="0.2" id="Union" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (platform === "Phone" && bar === "Top Nav" && type === "2nd Level" && background === "Gradient") {
    return (
      <div className={className || "h-[88px] relative"} data-name="Platform=Phone, Bar=Top Nav, Type=2nd Level, Background=Gradient">
        <TopNavigation className="absolute h-[96px] left-0 right-0 top-0" />
        <div className="absolute content-stretch flex items-center justify-between left-0 px-[16px] py-[8px] right-0 top-0">
          <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Back">
            <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="ico + title">
              <div className="relative shrink-0 size-[24px]" data-name="System Icons">
                <div className="absolute inset-[20.83%_41.67%_20.83%_33.33%]">
                  <div className="absolute inset-[-7.14%_-16.67%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00002 16">
                      <path d="M7 1.00002L1 8.00002L7 15" id="Vector 89" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#eee] text-[20px] tracking-[-0.3px]">Back</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[16px] h-[32px] items-center justify-end relative shrink-0" data-name="right side">
            <SystemIcons className="relative shrink-0 size-[24px]" name="Cast" />
            <div className="relative shrink-0 size-[24px]" data-name="System Icons">
              <div className="absolute inset-[8.33%]" data-name="ico_search">
                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9999 19.9999">
                  <path d={svgPaths.p112fb6f0} fill="var(--fill-0, #E5E9EC)" id="ico_search" />
                </svg>
              </div>
            </div>
            <div className="relative shrink-0 size-[32px]" data-name="Avatars">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 88 88">
                <path clipRule="evenodd" d={svgPaths.p1958a480} fill="var(--fill-0, #E5E9EC)" fillOpacity="0.2" fillRule="evenodd" id="shape" />
              </svg>
              <div className="absolute inset-[18.18%_14.86%_0_14.86%]" data-name="Union">
                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 61.8535 72">
                  <path d={svgPaths.p2dfe470} fill="var(--fill-0, #E5E9EC)" fillOpacity="0.2" id="Union" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (platform === "Phone" && bar === "Top Nav" && type === "2nd Level" && background === "Filled") {
    return (
      <div className={className || "h-[88px] relative shadow-[0px_44px_12px_0px_rgba(0,0,0,0),0px_28px_11px_0px_rgba(0,0,0,0.01),0px_16px_10px_0px_rgba(0,0,0,0.04),0px_7px_7px_0px_rgba(0,0,0,0.06),0px_2px_4px_0px_rgba(0,0,0,0.07),0px_0px_0px_0px_rgba(0,0,0,0.07)]"} data-name="Platform=Phone, Bar=Top Nav, Type=2nd Level, Background=Filled">
        <div className="absolute h-[48px] left-0 right-0 top-0" data-name="background">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 360 48">
            <path d="M0 0H360V48H0V0Z" fill="var(--fill-0, #002340)" id="background" />
          </svg>
        </div>
        <div className="absolute h-px left-0 right-0 top-[47px]" data-name="divider">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 360 1">
            <path d="M0 0H360V1H0V0Z" fill="var(--fill-0, #E5E9EC)" fillOpacity="0.1" id="divider" />
          </svg>
        </div>
        <div className="absolute content-stretch flex h-[47px] items-center justify-between left-0 px-[16px] right-0 top-0">
          <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Back">
            <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="ico + title">
              <div className="relative shrink-0 size-[24px]" data-name="System Icons">
                <div className="absolute inset-[20.83%_41.67%_20.83%_33.33%]">
                  <div className="absolute inset-[-7.14%_-16.67%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00002 16">
                      <path d="M7 1.00002L1 8.00002L7 15" id="Vector 89" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#eee] text-[20px] tracking-[-0.3px]">Back</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[16px] h-[32px] items-center justify-end relative shrink-0" data-name="right side">
            <SystemIcons className="relative shrink-0 size-[24px]" name="Cast" />
            <div className="relative shrink-0 size-[24px]" data-name="System Icons">
              <div className="absolute inset-[8.33%]" data-name="ico_search">
                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9999 19.9999">
                  <path d={svgPaths.p112fb6f0} fill="var(--fill-0, #E5E9EC)" id="ico_search" />
                </svg>
              </div>
            </div>
            <div className="relative shrink-0 size-[32px]" data-name="Avatars">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 88 88">
                <path clipRule="evenodd" d={svgPaths.p1958a480} fill="var(--fill-0, #E5E9EC)" fillOpacity="0.2" fillRule="evenodd" id="shape" />
              </svg>
              <div className="absolute inset-[18.18%_14.86%_0_14.86%]" data-name="Union">
                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 61.8535 72">
                  <path d={svgPaths.p2dfe470} fill="var(--fill-0, #E5E9EC)" fillOpacity="0.2" id="Union" />
                </svg>
              </div>
            </div>
          </div>
          {close && <SystemIconsImported className="relative shrink-0 size-[24px]" name="X" />}
        </div>
      </div>
    );
  }
  if (platform === "Phone" && bar === "Top Nav" && type === "3rd Level - Few Tabs" && background === "Gradient") {
    return (
      <div className={className || "h-[136px] relative"} data-name="Platform=Phone, Bar=Top Nav, Type=3rd Level - Few Tabs, Background=Gradient">
        <TopNavigation className="absolute h-[144px] left-0 right-0 top-0" />
        <div className="absolute content-stretch flex flex-col h-[48px] items-center justify-end left-0 right-0 top-[48px]" data-name="tabs">
          <div className="relative shrink-0 w-full" data-name="tabs">
            <div className="flex flex-row items-end justify-center size-full">
              <div className="content-stretch flex items-end justify-center px-[16px] relative w-full">
                <PhoneSubPageTabs className="bg-[#e5e9ec] flex-[1_0_0] h-[3px] min-h-px min-w-px relative rounded-[6px]" state="Active" />
                <PhoneSubPageTabs className="flex-[1_0_0] h-[3px] min-h-px min-w-px relative" />
                <PhoneSubPageTabs className="flex-[1_0_0] h-[3px] min-h-px min-w-px relative" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex h-[47px] items-center justify-between left-0 px-[16px] right-0 top-0">
          <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Back">
            <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="ico + title">
              <div className="relative shrink-0 size-[24px]" data-name="System Icons">
                <div className="absolute inset-[20.83%_41.67%_20.83%_33.33%]">
                  <div className="absolute inset-[-7.14%_-16.67%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00002 16">
                      <path d="M7 1.00002L1 8.00002L7 15" id="Vector 89" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#eee] text-[20px] tracking-[-0.3px]">Back</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[16px] h-[32px] items-center justify-end relative shrink-0" data-name="right side">
            <SystemIcons className="relative shrink-0 size-[24px]" name="Cast" />
            <div className="relative shrink-0 size-[24px]" data-name="System Icons">
              <div className="absolute inset-[8.33%]" data-name="ico_search">
                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9999 19.9999">
                  <path d={svgPaths.p112fb6f0} fill="var(--fill-0, #E5E9EC)" id="ico_search" />
                </svg>
              </div>
            </div>
            <div className="relative shrink-0 size-[32px]" data-name="Avatars">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 88 88">
                <path clipRule="evenodd" d={svgPaths.p1958a480} fill="var(--fill-0, #E5E9EC)" fillOpacity="0.2" fillRule="evenodd" id="shape" />
              </svg>
              <div className="absolute inset-[18.18%_14.86%_0_14.86%]" data-name="Union">
                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 61.8535 72">
                  <path d={svgPaths.p2dfe470} fill="var(--fill-0, #E5E9EC)" fillOpacity="0.2" id="Union" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (platform === "Phone" && bar === "Top Nav" && type === "3rd Level - Multi Tabs" && background === "Gradient") {
    return (
      <div className={className || "h-[136px] relative"} data-name="Platform=Phone, Bar=Top Nav, Type=3rd Level - Multi Tabs, Background=Gradient">
        <TopNavigation className="absolute h-[144px] left-0 right-0 top-0" />
        <div className="absolute h-[48px] left-0 right-0 top-[48px]" data-name="phone / multi tabs">
          <div className="absolute bottom-0 content-stretch flex h-[48px] items-end left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[100%_48px] right-0" data-name="tabs" style={{ maskImage: `url('${imgTabs}')` }}>
            <PhoneSubPageTabs className="h-[3px] relative shrink-0" />
            <PhoneSubPageTabs className="bg-[#e5e9ec] h-[3px] relative rounded-[6px] shrink-0" state="Active" />
            <PhoneSubPageTabs className="h-[3px] relative shrink-0" />
            <PhoneSubPageTabs className="h-[3px] relative shrink-0" />
            <PhoneSubPageTabs className="h-[3px] relative shrink-0" />
            <PhoneSubPageTabs className="h-[3px] relative shrink-0" />
          </div>
        </div>
        <div className="absolute content-stretch flex h-[47px] items-center justify-between left-0 px-[16px] right-0 top-0">
          <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Back">
            <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="ico + title">
              <div className="relative shrink-0 size-[24px]" data-name="System Icons">
                <div className="absolute inset-[20.83%_41.67%_20.83%_33.33%]">
                  <div className="absolute inset-[-7.14%_-16.67%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00002 16">
                      <path d="M7 1.00002L1 8.00002L7 15" id="Vector 89" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#eee] text-[20px] tracking-[-0.3px]">Back</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[16px] h-[32px] items-center justify-end relative shrink-0" data-name="right side">
            <SystemIcons className="relative shrink-0 size-[24px]" name="Cast" />
            <div className="relative shrink-0 size-[24px]" data-name="System Icons">
              <div className="absolute inset-[8.33%]" data-name="ico_search">
                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9999 19.9999">
                  <path d={svgPaths.p112fb6f0} fill="var(--fill-0, #E5E9EC)" id="ico_search" />
                </svg>
              </div>
            </div>
            <div className="relative shrink-0 size-[32px]" data-name="Avatars">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 88 88">
                <path clipRule="evenodd" d={svgPaths.p1958a480} fill="var(--fill-0, #E5E9EC)" fillOpacity="0.2" fillRule="evenodd" id="shape" />
              </svg>
              <div className="absolute inset-[18.18%_14.86%_0_14.86%]" data-name="Union">
                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 61.8535 72">
                  <path d={svgPaths.p2dfe470} fill="var(--fill-0, #E5E9EC)" fillOpacity="0.2" id="Union" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (platform === "Phone" && bar === "Top Nav" && type === "Detail Page" && background === "Gradient") {
    return (
      <div className={className || "h-[88px] relative"} data-name="Platform=Phone, Bar=Top Nav, Type=Detail Page, Background=Gradient">
        <div className="absolute content-stretch flex items-center justify-between left-0 pt-[16px] px-[16px] right-0 top-0">
          <div className="bg-[rgba(0,0,0,0.7)] content-stretch flex items-center justify-center p-[8px] relative rounded-[40px] shrink-0" data-name="Circular">
            <div className="relative shrink-0 size-[24px]" data-name="System Icons">
              <div className="absolute inset-[8.33%]" data-name="Subtract">
                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
            <div className="bg-[rgba(0,0,0,0.7)] content-stretch flex items-center justify-center p-[8px] relative rounded-[40px] shrink-0" data-name="Circular">
              <div className="relative shrink-0 size-[24px]" data-name="System Icons">
                <div className="absolute inset-[8.33%]" data-name="Subtract">
                  <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-[rgba(0,0,0,0.7)] content-stretch flex items-center justify-center p-[8px] relative rounded-[40px] shrink-0" data-name="Circular">
              <div className="relative shrink-0 size-[24px]" data-name="System Icons">
                <div className="absolute inset-[8.33%]" data-name="Subtract">
                  <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (platform === "Phone" && bar === "Top Nav" && type === "Detail Page" && background === "Filled") {
    return (
      <div className={className || "h-[88px] relative shadow-[0px_44px_12px_0px_rgba(0,0,0,0),0px_28px_11px_0px_rgba(0,0,0,0.01),0px_16px_10px_0px_rgba(0,0,0,0.04),0px_7px_7px_0px_rgba(0,0,0,0.06),0px_2px_4px_0px_rgba(0,0,0,0.07),0px_0px_0px_0px_rgba(0,0,0,0.07)]"} data-name="Platform=Phone, Bar=Top Nav, Type=Detail Page, Background=Filled">
        <div className="absolute h-[48px] left-0 right-0 top-0" data-name="background">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 360 48">
            <path d="M0 0H360V48H0V0Z" fill="var(--fill-0, #002340)" id="background" />
          </svg>
        </div>
        <div className="absolute h-px left-0 right-0 top-[47px]" data-name="divider">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 360 1">
            <path d="M0 0H360V1H0V0Z" fill="var(--fill-0, #E5E9EC)" fillOpacity="0.1" id="divider" />
          </svg>
        </div>
        {showArrow && (
          <div className="absolute content-stretch flex items-center left-0 px-[16px] py-[12px] right-0 top-0" data-name="Arrow">
            <SystemIcons className="relative shrink-0 size-[24px]" name="Arrow Left" />
          </div>
        )}
        {showContent && (
          <div className="absolute content-stretch flex items-center justify-between left-0 px-[16px] py-[12px] right-0 top-0" data-name="content">
            <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Back">
              <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="ico + title">
                <div className="relative shrink-0 size-[24px]" data-name="System Icons">
                  <div className="absolute inset-[20.83%_41.67%_20.83%_33.33%]">
                    <div className="absolute inset-[-7.14%_-16.67%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00002 16">
                        <path d="M7 1.00002L1 8.00002L7 15" id="Vector 89" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#eee] text-[20px] tracking-[-0.3px]">Back</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
              <SystemIcons className="relative shrink-0 size-[24px]" name="Cast" />
              <div className="relative shrink-0 size-[24px]" data-name="System Icons">
                <div className="absolute inset-[16.67%]" data-name="Union">
                  <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9998 15.9998">
                    <path d={svgPaths.p2e8b200} fill="var(--fill-0, #E5E9EC)" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
  if (platform === "Phone" && bar === "Top Nav" && type === "Settings" && background === "Filled") {
    return (
      <div className={className || "h-[88px] relative shadow-[0px_44px_12px_0px_rgba(0,0,0,0),0px_28px_11px_0px_rgba(0,0,0,0.01),0px_16px_10px_0px_rgba(0,0,0,0.04),0px_7px_7px_0px_rgba(0,0,0,0.06),0px_2px_4px_0px_rgba(0,0,0,0.07),0px_0px_0px_0px_rgba(0,0,0,0.07)]"} data-name="Platform=Phone, Bar=Top Nav, Type=Settings, Background=Filled">
        <div className="absolute h-[88px] left-0 right-0 top-0" data-name="background">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 360 88">
            <path d="M0 0H360V88H0V0Z" fill="var(--fill-0, #002340)" id="background" />
          </svg>
        </div>
        <div className="absolute contents left-0 right-0 top-[40px]">
          <div className="absolute h-px left-0 right-0 top-[87px]" data-name="divider">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 360 1">
              <path d="M0 0H360V1H0V0Z" fill="var(--fill-0, #E5E9EC)" fillOpacity="0.1" id="divider" />
            </svg>
          </div>
          {showContent && (
            <div className="absolute content-stretch flex items-center justify-between left-0 px-[16px] py-[12px] right-0 top-[40px]" data-name="content">
              <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Back">
                <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="ico + title">
                  <div className="relative shrink-0 size-[24px]" data-name="System Icons">
                    <div className="absolute inset-[20.83%_41.67%_20.83%_33.33%]">
                      <div className="absolute inset-[-7.14%_-16.67%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00002 16">
                          <path d="M7 1.00002L1 8.00002L7 15" id="Vector 89" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#eee] text-[20px] tracking-[-0.3px]">Back</p>
                </div>
              </div>
              {close && (
                <div className="content-stretch flex items-center relative shrink-0">
                  <div className="relative shrink-0 size-[24px]" data-name="System Icons">
                    <div className="absolute inset-[16.67%]" data-name="Union">
                      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9998 15.9998">
                        <path d={svgPaths.p2e8b200} fill="var(--fill-0, #E5E9EC)" id="Union" />
                      </svg>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="absolute inset-[17.61%_9.8%_59.04%_14.34%]" data-name="ui-icons">
          <div className="-translate-x-1/2 absolute h-[12.142px] left-[calc(50%+101.34px)] top-[3.74px] w-[70.424px]" data-name="icons-right">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 75.4012 13">
              <g id="icons-right">
                <g id="battery">
                  <path d={svgPaths.p2bee1480} id="outline" opacity="0.35" stroke="var(--stroke-0, white)" strokeWidth="1.05509" />
                  <path d={svgPaths.p1eb759a0} fill="var(--fill-0, white)" id="end" opacity="0.4" />
                  <path d={svgPaths.p10b721e0} fill="var(--fill-0, white)" id="charged" />
                </g>
                <path d={svgPaths.p5482600} fill="var(--fill-0, white)" id="wi-fi" />
                <g id="signal">
                  <path d={svgPaths.p1ec31400} fill="var(--fill-0, white)" />
                  <path d={svgPaths.p19f8d480} fill="var(--fill-0, white)" />
                  <path d={svgPaths.p13f4aa00} fill="var(--fill-0, white)" />
                  <path d={svgPaths.p1bfb7500} fill="var(--fill-0, white)" />
                </g>
              </g>
            </svg>
          </div>
          <div className="absolute contents left-0 top-0" data-name="icons-left">
            <p className="-translate-x-1/2 absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[20.548px] left-[16.34px] not-italic text-[15.88px] text-center text-white top-0 tracking-[-0.8px]">9:41</p>
          </div>
        </div>
      </div>
    );
  }
  if (platform === "Tablet" && bar === "Top Nav" && type === "Detail Page" && background === "Filled") {
    return (
      <div className={className || "h-[88px] relative shadow-[0px_44px_12px_0px_rgba(0,0,0,0),0px_28px_11px_0px_rgba(0,0,0,0.01),0px_16px_10px_0px_rgba(0,0,0,0.04),0px_7px_7px_0px_rgba(0,0,0,0.06),0px_2px_4px_0px_rgba(0,0,0,0.07),0px_0px_0px_0px_rgba(0,0,0,0.07)]"} data-name="Platform=Tablet, Bar=Top Nav, Type=Detail Page, Background=Filled">
        <div className="absolute h-[48px] left-0 right-0 top-0" data-name="background">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 960 48">
            <path d="M0 0H960V48H0V0Z" fill="var(--fill-0, #002340)" id="background" />
          </svg>
        </div>
        <div className="absolute h-px left-0 right-0 top-[47px]" data-name="divider">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 960 1">
            <path d="M0 0H960V1H0V0Z" fill="var(--fill-0, #E5E9EC)" fillOpacity="0.1" id="divider" />
          </svg>
        </div>
        <div className="absolute content-stretch flex items-center justify-between left-0 px-[44px] py-[12px] right-0 top-0">
          <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Back">
            <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="ico + title">
              <div className="relative shrink-0 size-[24px]" data-name="System Icons">
                <div className="absolute inset-[20.83%_41.67%_20.83%_33.33%]">
                  <div className="absolute inset-[-7.14%_-16.67%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00002 16">
                      <path d="M7 1.00002L1 8.00002L7 15" id="Vector 89" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#eee] text-[20px] tracking-[-0.3px]">Back</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
            <SystemIcons className="relative shrink-0 size-[24px]" name="Cast" />
            <SystemIcons className="relative shrink-0 size-[24px]" name="X" />
          </div>
        </div>
      </div>
    );
  }
  if (platform === "Phone" && bar === "Search" && type === "Search" && background === "Filled") {
    return (
      <div className={className || "h-[88px] relative shadow-[0px_44px_12px_0px_rgba(0,0,0,0),0px_28px_11px_0px_rgba(0,0,0,0.01),0px_16px_10px_0px_rgba(0,0,0,0.04),0px_7px_7px_0px_rgba(0,0,0,0.06),0px_2px_4px_0px_rgba(0,0,0,0.07),0px_0px_0px_0px_rgba(0,0,0,0.07)]"} data-name="Platform=Phone, Bar=Search, Type=Search, Background=Filled">
        <div className="absolute h-[48px] left-0 right-0 top-0" data-name="background">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 360 48">
            <path d="M0 0H360V48H0V0Z" fill="var(--fill-0, #002340)" id="background" />
          </svg>
        </div>
        <div className="absolute bottom-[40px] h-px left-0 right-0" data-name="divider">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 360 1">
            <path d="M0 0H360V1H0V0Z" fill="var(--fill-0, #E5E9EC)" fillOpacity="0.1" id="divider" />
          </svg>
        </div>
        <div className="absolute content-stretch flex flex-col items-start left-0 px-[16px] py-[8px] right-0 top-0">
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
            <div className="flex-[1_0_0] h-[32px] min-h-px min-w-px overflow-clip relative" data-name="input">
              <div className="-translate-y-1/2 absolute bg-[rgba(229,233,236,0.1)] h-[32px] left-0 right-0 rounded-[4px] top-1/2" data-name="shape" />
              <p className="absolute font-['Yettel_Sans_Beta:Regular',sans-serif] leading-[1.5] left-[40px] not-italic right-[40px] text-[16px] text-[rgba(238,238,238,0.5)] top-[calc(50%-12px)] tracking-[0.08px] whitespace-pre-wrap">Search by title</p>
              <div className="-translate-y-1/2 absolute left-[8px] size-[24px] top-1/2" data-name="System Icons">
                <div className="absolute inset-[8.33%]" data-name="ico_search">
                  <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9999 19.9999">
                    <path d={svgPaths.p112fb6f0} fill="var(--fill-0, #E5E9EC)" id="ico_search" />
                  </svg>
                </div>
              </div>
              <div className="-translate-y-1/2 absolute right-[8px] size-[24px] top-1/2" data-name="System Icons">
                <div className="absolute inset-[16.67%]" data-name="Union">
                  <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9998 15.9998">
                    <path d={svgPaths.p2e8b200} fill="var(--fill-0, #E5E9EC)" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="font-['Yettel_Sans_Beta:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#eee] text-[16px] text-right tracking-[0.08px]">Cancel</p>
          </div>
        </div>
      </div>
    );
  }
  if (platform === "Phone" && bar === "Tab" && type === "3 in Row" && background === "Filled") {
    return (
      <div className={className || "bg-[#002340] h-[48px] relative shadow-[0px_44px_12px_0px_rgba(0,0,0,0),0px_28px_11px_0px_rgba(0,0,0,0.01),0px_16px_10px_0px_rgba(0,0,0,0.04),0px_7px_7px_0px_rgba(0,0,0,0.06),0px_2px_4px_0px_rgba(0,0,0,0.07),0px_0px_0px_0px_rgba(0,0,0,0.07)]"} data-name="Platform=Phone, Bar=Tab, Type=3 in Row, Background=Filled">
        <div className="absolute h-px left-0 right-0 top-0" data-name="divider">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 360 1">
            <path d="M0 0H360V1H0V0Z" fill="var(--fill-0, #E5E9EC)" fillOpacity="0.1" id="divider" />
          </svg>
        </div>
        <div className="-translate-y-1/2 absolute content-stretch flex items-center left-0 overflow-clip right-0 top-1/2" data-name="tabs">
          <PhoneMainPageTabs className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" />
          <PhoneMainPageTabs className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" state="Default" />
          <PhoneMainPageTabs className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" state="Default" />
        </div>
      </div>
    );
  }
  if (platform === "Phone" && bar === "Tab" && type === "4 in Row" && background === "Filled") {
    return (
      <div className={className || "bg-[#002340] h-[48px] relative shadow-[0px_44px_12px_0px_rgba(0,0,0,0),0px_28px_11px_0px_rgba(0,0,0,0.01),0px_16px_10px_0px_rgba(0,0,0,0.04),0px_7px_7px_0px_rgba(0,0,0,0.06),0px_2px_4px_0px_rgba(0,0,0,0.07),0px_0px_0px_0px_rgba(0,0,0,0.07)]"} data-name="Platform=Phone, Bar=Tab, Type=4 in Row, Background=Filled">
        <div className="absolute h-px left-0 right-0 top-0" data-name="divider">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 360 1">
            <path d="M0 0H360V1H0V0Z" fill="var(--fill-0, #E5E9EC)" fillOpacity="0.1" id="divider" />
          </svg>
        </div>
        <div className="-translate-y-1/2 absolute content-stretch flex items-center left-0 overflow-clip right-0 top-1/2" data-name="tabs">
          <PhoneMainPageTabs className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" />
          <PhoneMainPageTabs className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" state="Default" />
          <PhoneMainPageTabs className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" state="Default" />
          <PhoneMainPageTabs className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" state="Default" />
        </div>
      </div>
    );
  }
  if (platform === "Phone" && bar === "Tab" && type === "5 in Row" && background === "Filled") {
    return (
      <div className={className || "bg-[#002340] h-[48px] relative shadow-[0px_44px_12px_0px_rgba(0,0,0,0),0px_28px_11px_0px_rgba(0,0,0,0.01),0px_16px_10px_0px_rgba(0,0,0,0.04),0px_7px_7px_0px_rgba(0,0,0,0.06),0px_2px_4px_0px_rgba(0,0,0,0.07),0px_0px_0px_0px_rgba(0,0,0,0.07)]"} data-name="Platform=Phone, Bar=Tab, Type=5 in Row, Background=Filled">
        <div className="absolute h-px left-0 right-0 top-0" data-name="divider">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 360 1">
            <path d="M0 0H360V1H0V0Z" fill="var(--fill-0, #E5E9EC)" fillOpacity="0.1" id="divider" />
          </svg>
        </div>
        <div className="-translate-y-1/2 absolute content-stretch flex items-center left-0 overflow-clip right-0 top-1/2" data-name="tabs">
          <PhoneMainPageTabs className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" />
          <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Phone Main Page Tabs">
            <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[4px] not-italic right-[4px] text-[10px] text-[rgba(229,233,236,0.7)] text-center top-[calc(50%+12px)] tracking-[0.15px]">
              <p className="leading-[1.6] whitespace-pre-wrap">Label</p>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-1/2 top-[calc(50%-8px)]" data-name="Group">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 opacity-70 size-[24px] top-[calc(50%-8px)]" data-name="System Icons">
                <div className="absolute inset-[8.33%]" data-name="Subtract">
                  <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Phone Main Page Tabs">
            <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[4px] not-italic right-[4px] text-[10px] text-[rgba(229,233,236,0.7)] text-center top-[calc(50%+12px)] tracking-[0.15px]">
              <p className="leading-[1.6] whitespace-pre-wrap">Label</p>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-1/2 top-[calc(50%-8px)]" data-name="Group">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 opacity-70 size-[24px] top-[calc(50%-8px)]" data-name="System Icons">
                <div className="absolute inset-[8.33%]" data-name="Subtract">
                  <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Phone Main Page Tabs">
            <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[4px] not-italic right-[4px] text-[10px] text-[rgba(229,233,236,0.7)] text-center top-[calc(50%+12px)] tracking-[0.15px]">
              <p className="leading-[1.6] whitespace-pre-wrap">Label</p>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-1/2 top-[calc(50%-8px)]" data-name="Group">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 opacity-70 size-[24px] top-[calc(50%-8px)]" data-name="System Icons">
                <div className="absolute inset-[8.33%]" data-name="Subtract">
                  <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-[1_0_0] h-[48px] min-h-px min-w-px relative" data-name="Phone Main Page Tabs">
            <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[4px] not-italic right-[4px] text-[10px] text-[rgba(229,233,236,0.7)] text-center top-[calc(50%+12px)] tracking-[0.15px]">
              <p className="leading-[1.6] whitespace-pre-wrap">Label</p>
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-1/2 top-[calc(50%-8px)]" data-name="Group">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 opacity-70 size-[24px] top-[calc(50%-8px)]" data-name="System Icons">
                <div className="absolute inset-[8.33%]" data-name="Subtract">
                  <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (platform === "Tablet" && bar === "Top Nav" && type === "1st Level" && background === "Gradient") {
    return (
      <div className={className || "h-[88px] relative"} data-name="Platform=Tablet, Bar=Top Nav, Type=1st Level, Background=Gradient">
        <TopNavigation className="absolute h-[96px] left-0 right-0 top-0" />
        <div className="absolute content-stretch flex items-center justify-between left-0 px-[44px] py-[8px] right-0 top-0">
          <BrandLogos className="content-stretch flex h-[32px] items-center justify-center relative shrink-0 w-[109px]" />
          <div className="content-stretch flex gap-[16px] h-[32px] items-center justify-end relative shrink-0" data-name="right side">
            <SystemIcons className="relative shrink-0 size-[24px]" name="Cast" />
            <SystemIcons className="relative shrink-0 size-[24px]" name="Search" />
            <div className="relative rounded-[3px] shrink-0 size-[24px]" data-name="System Icons">
              <div className="absolute inset-[8.33%_8.12%_8.33%_8.13%]" data-name="Vector">
                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1 20">
                  <path d={svgPaths.p23dbff00} fill="var(--fill-0, #F4F9FF)" id="Vector" />
                </svg>
              </div>
            </div>
            <div className="relative shrink-0 size-[32px]" data-name="Avatars">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 88 88">
                <path clipRule="evenodd" d={svgPaths.p1958a480} fill="var(--fill-0, #E5E9EC)" fillOpacity="0.2" fillRule="evenodd" id="shape" />
              </svg>
              <div className="absolute inset-[18.18%_14.86%_0_14.86%]" data-name="Union">
                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 61.8535 72">
                  <path d={svgPaths.p2dfe470} fill="var(--fill-0, #E5E9EC)" fillOpacity="0.2" id="Union" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (platform === "Tablet" && bar === "Top Nav" && type === "1st Level" && background === "Filled") {
    return (
      <div className={className || "h-[88px] relative shadow-[0px_44px_12px_0px_rgba(0,0,0,0),0px_28px_11px_0px_rgba(0,0,0,0.01),0px_16px_10px_0px_rgba(0,0,0,0.04),0px_7px_7px_0px_rgba(0,0,0,0.06),0px_2px_4px_0px_rgba(0,0,0,0.07),0px_0px_0px_0px_rgba(0,0,0,0.07)]"} data-name="Platform=Tablet, Bar=Top Nav, Type=1st Level, Background=Filled">
        <div className="absolute h-[48px] left-0 right-0 top-0" data-name="background">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 960 48">
            <path d="M0 0H960V48H0V0Z" fill="var(--fill-0, #002340)" id="background" />
          </svg>
        </div>
        <div className="absolute h-px left-0 right-0 top-[47px]" data-name="divider">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 960 1">
            <path d="M0 0H960V1H0V0Z" fill="var(--fill-0, #E5E9EC)" fillOpacity="0.1" id="divider" />
          </svg>
        </div>
        <div className="absolute content-stretch flex items-center justify-between left-0 px-[44px] py-[8px] right-0 top-0">
          <BrandLogos className="content-stretch flex h-[32px] items-center justify-center relative shrink-0 w-[109px]" />
          <div className="content-stretch flex gap-[16px] h-[32px] items-center justify-end relative shrink-0" data-name="right side">
            <SystemIcons className="relative shrink-0 size-[24px]" name="Cast" />
            <SystemIcons className="relative shrink-0 size-[24px]" name="Search" />
            <div className="relative shrink-0 size-[32px]" data-name="Avatars">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 88 88">
                <path clipRule="evenodd" d={svgPaths.p1958a480} fill="var(--fill-0, #E5E9EC)" fillOpacity="0.2" fillRule="evenodd" id="shape" />
              </svg>
              <div className="absolute inset-[18.18%_14.86%_0_14.86%]" data-name="Union">
                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 61.8535 72">
                  <path d={svgPaths.p2dfe470} fill="var(--fill-0, #E5E9EC)" fillOpacity="0.2" id="Union" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (platform === "Tablet" && bar === "Top Nav" && type === "2nd Level" && background === "Gradient") {
    return (
      <div className={className || "h-[88px] relative"} data-name="Platform=Tablet, Bar=Top Nav, Type=2nd Level, Background=Gradient">
        <TopNavigation className="absolute h-[96px] left-0 right-0 top-0" />
        <div className="absolute content-stretch flex items-center justify-between left-0 px-[44px] py-[8px] right-0 top-0" data-name="content">
          <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Back">
            <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="ico + title">
              <div className="relative shrink-0 size-[24px]" data-name="System Icons">
                <div className="absolute inset-[20.83%_41.67%_20.83%_33.33%]">
                  <div className="absolute inset-[-7.14%_-16.67%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00002 16">
                      <path d="M7 1.00002L1 8.00002L7 15" id="Vector 89" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#eee] text-[20px] tracking-[-0.3px]">Back</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[16px] h-[32px] items-center justify-end relative shrink-0" data-name="right side">
            <SystemIcons className="relative shrink-0 size-[24px]" name="Cast" />
            <div className="relative shrink-0 size-[24px]" data-name="System Icons">
              <div className="absolute inset-[8.33%]" data-name="ico_search">
                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9999 19.9999">
                  <path d={svgPaths.p112fb6f0} fill="var(--fill-0, #E5E9EC)" id="ico_search" />
                </svg>
              </div>
            </div>
            <div className="relative shrink-0 size-[32px]" data-name="Avatars">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 88 88">
                <path clipRule="evenodd" d={svgPaths.p1958a480} fill="var(--fill-0, #E5E9EC)" fillOpacity="0.2" fillRule="evenodd" id="shape" />
              </svg>
              <div className="absolute inset-[18.18%_14.86%_0_14.86%]" data-name="Union">
                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 61.8535 72">
                  <path d={svgPaths.p2dfe470} fill="var(--fill-0, #E5E9EC)" fillOpacity="0.2" id="Union" />
                </svg>
              </div>
            </div>
          </div>
          {close2 && (
            <div className="relative shrink-0 size-[24px]" data-name="System Icons (imported)">
              <div className="absolute inset-[16.67%]" data-name="Union">
                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9998 15.9998">
                  <path d={svgPaths.p2e8b200} fill="var(--fill-0, #EEEEEE)" id="Union" />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
  if (platform === "Tablet" && bar === "Top Nav" && type === "2nd Level" && background === "Filled") {
    return (
      <div className={className || "h-[88px] relative shadow-[0px_44px_12px_0px_rgba(0,0,0,0),0px_28px_11px_0px_rgba(0,0,0,0.01),0px_16px_10px_0px_rgba(0,0,0,0.04),0px_7px_7px_0px_rgba(0,0,0,0.06),0px_2px_4px_0px_rgba(0,0,0,0.07),0px_0px_0px_0px_rgba(0,0,0,0.07)]"} data-name="Platform=Tablet, Bar=Top Nav, Type=2nd Level, Background=Filled">
        <div className="absolute bg-[#002340] content-stretch flex items-center justify-between left-0 px-[44px] py-[8px] right-0 top-0">
          <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Back">
            <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="ico + title">
              <div className="relative shrink-0 size-[24px]" data-name="System Icons">
                <div className="absolute inset-[20.83%_41.67%_20.83%_33.33%]">
                  <div className="absolute inset-[-7.14%_-16.67%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00002 16">
                      <path d="M7 1.00002L1 8.00002L7 15" id="Vector 89" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#eee] text-[20px] tracking-[-0.3px]">Back</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[16px] h-[32px] items-center justify-end relative shrink-0" data-name="right side">
            <SystemIcons className="relative shrink-0 size-[24px]" name="Cast" />
            <div className="relative shrink-0 size-[24px]" data-name="System Icons">
              <div className="absolute inset-[8.33%]" data-name="ico_search">
                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9999 19.9999">
                  <path d={svgPaths.p112fb6f0} fill="var(--fill-0, #E5E9EC)" id="ico_search" />
                </svg>
              </div>
            </div>
            <div className="relative shrink-0 size-[32px]" data-name="Avatars">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 88 88">
                <path clipRule="evenodd" d={svgPaths.p1958a480} fill="var(--fill-0, #E5E9EC)" fillOpacity="0.2" fillRule="evenodd" id="shape" />
              </svg>
              <div className="absolute inset-[18.18%_14.86%_0_14.86%]" data-name="Union">
                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 61.8535 72">
                  <path d={svgPaths.p2dfe470} fill="var(--fill-0, #E5E9EC)" fillOpacity="0.2" id="Union" />
                </svg>
              </div>
            </div>
            {showClose && (
              <div className="relative shrink-0 size-[24px]" data-name="System Icons">
                <div className="absolute inset-[16.67%]" data-name="Union">
                  <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9998 15.9998">
                    <path d={svgPaths.p2e8b200} fill="var(--fill-0, #E5E9EC)" id="Union" />
                  </svg>
                </div>
              </div>
            )}
          </div>
          <div className="absolute bg-[rgba(229,233,236,0.1)] bottom-0 h-px left-0 right-0" />
        </div>
      </div>
    );
  }
  if (platform === "Tablet" && bar === "Top Nav" && type === "3rd Level - Few Tabs" && background === "Gradient") {
    return (
      <div className={className || "h-[136px] relative"} data-name="Platform=Tablet, Bar=Top Nav, Type=3rd Level - Few Tabs, Background=Gradient">
        <TopNavigation className="absolute h-[144px] left-0 right-0 top-0" />
        <div className="absolute h-[48px] left-0 right-0 top-[48px]" data-name="tabs">
          <div className="-translate-x-1/2 absolute bottom-0 content-stretch flex gap-[32px] items-end justify-center left-1/2" data-name="tabs">
            <PhoneSubPageTabs className="bg-[#e5e9ec] h-[3px] relative rounded-[6px] shrink-0" state="Active" />
            <PhoneSubPageTabs className="h-[3px] relative shrink-0" />
            <PhoneSubPageTabs className="h-[3px] relative shrink-0" />
          </div>
        </div>
        <div className="absolute content-stretch flex items-center justify-between left-0 px-[44px] py-[8px] right-0 top-0" data-name="content">
          <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Back">
            <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="ico + title">
              <div className="relative shrink-0 size-[24px]" data-name="System Icons">
                <div className="absolute inset-[20.83%_41.67%_20.83%_33.33%]">
                  <div className="absolute inset-[-7.14%_-16.67%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00002 16">
                      <path d="M7 1.00002L1 8.00002L7 15" id="Vector 89" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#eee] text-[20px] tracking-[-0.3px]">Back</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[16px] h-[32px] items-center justify-end relative shrink-0" data-name="right side">
            <SystemIcons className="relative shrink-0 size-[24px]" name="Cast" />
            <div className="relative shrink-0 size-[24px]" data-name="System Icons">
              <div className="absolute inset-[8.33%]" data-name="ico_search">
                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9999 19.9999">
                  <path d={svgPaths.p112fb6f0} fill="var(--fill-0, #E5E9EC)" id="ico_search" />
                </svg>
              </div>
            </div>
            <div className="relative shrink-0 size-[32px]" data-name="Avatars">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 88 88">
                <path clipRule="evenodd" d={svgPaths.p1958a480} fill="var(--fill-0, #E5E9EC)" fillOpacity="0.2" fillRule="evenodd" id="shape" />
              </svg>
              <div className="absolute inset-[18.18%_14.86%_0_14.86%]" data-name="Union">
                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 61.8535 72">
                  <path d={svgPaths.p2dfe470} fill="var(--fill-0, #E5E9EC)" fillOpacity="0.2" id="Union" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (platform === "Tablet" && bar === "Top Nav" && type === "3rd Level - Multi Tabs" && background === "Gradient") {
    return (
      <div className={className || "h-[136px] relative"} data-name="Platform=Tablet, Bar=Top Nav, Type=3rd Level - Multi Tabs, Background=Gradient">
        <TopNavigation className="absolute h-[144px] left-0 right-0 top-0" />
        <div className="absolute h-[48px] left-0 right-0 top-[48px]" data-name="phone / multi tabs">
          <div className="absolute bottom-0 content-stretch flex h-[48px] items-end left-[28px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-3.1%_0px] mask-size-[106.19%_48px] right-[28px]" data-name="tabs" style={{ maskImage: `url('${imgTabs1}')` }}>
            <PhoneSubPageTabs className="h-[3px] relative shrink-0" />
            <PhoneSubPageTabs className="bg-[#e5e9ec] h-[3px] relative rounded-[6px] shrink-0" state="Active" />
            <PhoneSubPageTabs className="h-[3px] relative shrink-0" />
            <PhoneSubPageTabs className="h-[3px] relative shrink-0" />
            <PhoneSubPageTabs className="h-[3px] relative shrink-0" />
            <PhoneSubPageTabs className="h-[3px] relative shrink-0" />
            <PhoneSubPageTabs className="h-[3px] relative shrink-0" />
            <PhoneSubPageTabs className="h-[3px] relative shrink-0" />
            <PhoneSubPageTabs className="h-[3px] relative shrink-0" />
            <PhoneSubPageTabs className="h-[3px] relative shrink-0" />
            <PhoneSubPageTabs className="h-[3px] relative shrink-0" />
            <PhoneSubPageTabs className="h-[3px] relative shrink-0" />
            <PhoneSubPageTabs className="h-[3px] relative shrink-0" />
            <PhoneSubPageTabs className="h-[3px] relative shrink-0" />
          </div>
        </div>
        <div className="absolute content-stretch flex items-center justify-between left-0 px-[44px] py-[8px] right-0 top-0">
          <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Back">
            <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="ico + title">
              <div className="relative shrink-0 size-[24px]" data-name="System Icons">
                <div className="absolute inset-[20.83%_41.67%_20.83%_33.33%]">
                  <div className="absolute inset-[-7.14%_-16.67%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00002 16">
                      <path d="M7 1.00002L1 8.00002L7 15" id="Vector 89" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#eee] text-[20px] tracking-[-0.3px]">Back</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[16px] h-[32px] items-center justify-end relative shrink-0" data-name="right side">
            <SystemIcons className="relative shrink-0 size-[24px]" name="Cast" />
            <div className="relative shrink-0 size-[24px]" data-name="System Icons">
              <div className="absolute inset-[8.33%]" data-name="ico_search">
                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9999 19.9999">
                  <path d={svgPaths.p112fb6f0} fill="var(--fill-0, #E5E9EC)" id="ico_search" />
                </svg>
              </div>
            </div>
            <div className="relative shrink-0 size-[32px]" data-name="Avatars">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 88 88">
                <path clipRule="evenodd" d={svgPaths.p1958a480} fill="var(--fill-0, #E5E9EC)" fillOpacity="0.2" fillRule="evenodd" id="shape" />
              </svg>
              <div className="absolute inset-[18.18%_14.86%_0_14.86%]" data-name="Union">
                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 61.8535 72">
                  <path d={svgPaths.p2dfe470} fill="var(--fill-0, #E5E9EC)" fillOpacity="0.2" id="Union" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (platform === "Tablet" && bar === "Top Nav" && type === "Detail Page" && background === "Gradient") {
    return (
      <div className={className || "h-[88px] relative"} data-name="Platform=Tablet, Bar=Top Nav, Type=Detail Page, Background=Gradient">
        <div className="absolute content-stretch flex items-center justify-between left-0 px-[44px] py-[12px] right-0 top-0">
          <div className="bg-[rgba(0,0,0,0.7)] content-stretch flex items-center justify-center p-[8px] relative rounded-[40px] shrink-0" data-name="Circular">
            <div className="relative shrink-0 size-[24px]" data-name="System Icons">
              <div className="absolute inset-[8.33%]" data-name="Subtract">
                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
            <div className="bg-[rgba(0,0,0,0.7)] content-stretch flex items-center justify-center p-[8px] relative rounded-[40px] shrink-0" data-name="Circular">
              <div className="relative shrink-0 size-[24px]" data-name="System Icons">
                <div className="absolute inset-[8.33%]" data-name="Subtract">
                  <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-[rgba(0,0,0,0.7)] content-stretch flex items-center justify-center p-[8px] relative rounded-[40px] shrink-0" data-name="Circular">
              <div className="relative shrink-0 size-[24px]" data-name="System Icons">
                <div className="absolute inset-[8.33%]" data-name="Subtract">
                  <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (platform === "Tablet" && bar === "Search" && type === "Search" && background === "Filled") {
    return (
      <div className={className || "h-[88px] relative shadow-[0px_44px_12px_0px_rgba(0,0,0,0),0px_28px_11px_0px_rgba(0,0,0,0.01),0px_16px_10px_0px_rgba(0,0,0,0.04),0px_7px_7px_0px_rgba(0,0,0,0.06),0px_2px_4px_0px_rgba(0,0,0,0.07),0px_0px_0px_0px_rgba(0,0,0,0.07)]"} data-name="Platform=Tablet, Bar=Search, Type=Search, Background=Filled">
        <div className="absolute h-[48px] left-0 right-0 top-0" data-name="background">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 960 48">
            <path d="M0 0H960V48H0V0Z" fill="var(--fill-0, #002340)" id="background" />
          </svg>
        </div>
        <div className="absolute bottom-[40px] h-px left-0 right-0" data-name="divider">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 960 1">
            <path d="M0 0H960V1H0V0Z" fill="var(--fill-0, #E5E9EC)" fillOpacity="0.1" id="divider" />
          </svg>
        </div>
        <div className="absolute content-stretch flex gap-[16px] items-center left-0 px-[44px] py-[8px] right-0 top-0">
          <div className="bg-[rgba(229,233,236,0.1)] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative w-full">
                <div className="flex-[1_0_0] min-h-px min-w-px relative">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex gap-[8px] items-center px-[8px] relative w-full">
                      <div className="relative shrink-0 size-[24px]" data-name="System Icons">
                        <div className="absolute inset-[8.33%]" data-name="ico_search">
                          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9999 19.9999">
                            <path d={svgPaths.p112fb6f0} fill="var(--fill-0, #E5E9EC)" id="ico_search" />
                          </svg>
                        </div>
                      </div>
                      <p className="flex-[1_0_0] font-['Yettel_Sans_Beta:Regular',sans-serif] leading-[1.5] min-h-px min-w-px not-italic relative text-[16px] text-[rgba(238,238,238,0.5)] tracking-[0.08px] whitespace-pre-wrap">Search by title</p>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 size-[24px]" data-name="System Icons">
                  <div className="absolute inset-[16.67%]" data-name="Union">
                    <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9998 15.9998">
                      <path d={svgPaths.p2e8b200} fill="var(--fill-0, #E5E9EC)" id="Union" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="font-['Yettel_Sans_Beta:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#eee] text-[16px] text-right tracking-[0.08px]">Cancel</p>
        </div>
      </div>
    );
  }
  if (platform === "Tablet" && bar === "Tab" && type === "3 in Row" && background === "Filled") {
    return (
      <div className={className || "bg-[#002340] h-[48px] relative shadow-[0px_44px_12px_0px_rgba(0,0,0,0),0px_28px_11px_0px_rgba(0,0,0,0.01),0px_16px_10px_0px_rgba(0,0,0,0.04),0px_7px_7px_0px_rgba(0,0,0,0.06),0px_2px_4px_0px_rgba(0,0,0,0.07),0px_0px_0px_0px_rgba(0,0,0,0.07)]"} data-name="Platform=Tablet, Bar=Tab, Type=3 in Row, Background=Filled">
        <div className="absolute h-px left-0 right-0 top-0" data-name="divider">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 960 1">
            <path d="M0 0H960V1H0V0Z" fill="var(--fill-0, #E5E9EC)" fillOpacity="0.1" id="divider" />
          </svg>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-between left-1/2 px-[114px] top-1/2 w-[960px]" data-name="tab bar">
          <TabletMainPageTabs className="content-stretch flex flex-col items-center justify-center py-[12px] relative shrink-0 w-[168px]" />
          <TabletMainPageTabs className="content-stretch flex flex-col items-center justify-center py-[12px] relative shrink-0 w-[168px]" state="Default" />
          <TabletMainPageTabs className="content-stretch flex flex-col items-center justify-center py-[12px] relative shrink-0 w-[168px]" state="Default" />
        </div>
      </div>
    );
  }
  if (platform === "Tablet" && bar === "Tab" && type === "4 in Row" && background === "Filled") {
    return (
      <div className={className || "bg-[#002340] h-[48px] relative shadow-[0px_44px_12px_0px_rgba(0,0,0,0),0px_28px_11px_0px_rgba(0,0,0,0.01),0px_16px_10px_0px_rgba(0,0,0,0.04),0px_7px_7px_0px_rgba(0,0,0,0.06),0px_2px_4px_0px_rgba(0,0,0,0.07),0px_0px_0px_0px_rgba(0,0,0,0.07)]"} data-name="Platform=Tablet, Bar=Tab, Type=4 in Row, Background=Filled">
        <div className="absolute h-px left-0 right-0 top-0" data-name="divider">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 960 1">
            <path d="M0 0H960V1H0V0Z" fill="var(--fill-0, #E5E9EC)" fillOpacity="0.1" id="divider" />
          </svg>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-between left-1/2 px-[72px] top-1/2 w-[960px]" data-name="tab bar">
          <TabletMainPageTabs className="content-stretch flex flex-col items-center justify-center py-[12px] relative shrink-0 w-[168px]" />
          <TabletMainPageTabs className="content-stretch flex flex-col items-center justify-center py-[12px] relative shrink-0 w-[168px]" state="Default" />
          <TabletMainPageTabs className="content-stretch flex flex-col items-center justify-center py-[12px] relative shrink-0 w-[168px]" state="Default" />
          <TabletMainPageTabs className="content-stretch flex flex-col items-center justify-center py-[12px] relative shrink-0 w-[168px]" state="Default" />
        </div>
      </div>
    );
  }
  if (platform === "Tablet" && bar === "Tab" && type === "5 in Row" && background === "Filled") {
    return (
      <div className={className || "bg-[#002340] h-[48px] relative shadow-[0px_44px_12px_0px_rgba(0,0,0,0),0px_28px_11px_0px_rgba(0,0,0,0.01),0px_16px_10px_0px_rgba(0,0,0,0.04),0px_7px_7px_0px_rgba(0,0,0,0.06),0px_2px_4px_0px_rgba(0,0,0,0.07),0px_0px_0px_0px_rgba(0,0,0,0.07)]"} data-name="Platform=Tablet, Bar=Tab, Type=5 in Row, Background=Filled">
        <div className="absolute h-px left-0 right-0 top-0" data-name="divider">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 960 1">
            <path d="M0 0H960V1H0V0Z" fill="var(--fill-0, #E5E9EC)" fillOpacity="0.1" id="divider" />
          </svg>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-between left-1/2 px-[20px] top-1/2 w-[960px]" data-name="tab bar">
          <TabletMainPageTabs className="content-stretch flex flex-col items-center justify-center py-[12px] relative shrink-0 w-[168px]" />
          <div className="content-stretch flex flex-col items-center justify-center py-[12px] relative shrink-0 w-[168px]" data-name="Tablet Main Page Tabs">
            <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Tab">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] opacity-70 place-items-start relative shrink-0" data-name="Group">
                <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="System Icons">
                  <div className="absolute inset-[8.33%]" data-name="Subtract">
                    <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Yettel_Sans_Beta:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[12px] text-[rgba(229,233,236,0.7)] tracking-[0.06px]">Label</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-center justify-center py-[12px] relative shrink-0 w-[168px]" data-name="Tablet Main Page Tabs">
            <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Tab">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] opacity-70 place-items-start relative shrink-0" data-name="Group">
                <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="System Icons">
                  <div className="absolute inset-[8.33%]" data-name="Subtract">
                    <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Yettel_Sans_Beta:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[12px] text-[rgba(229,233,236,0.7)] tracking-[0.06px]">Label</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-center justify-center py-[12px] relative shrink-0 w-[168px]" data-name="Tablet Main Page Tabs">
            <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Tab">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] opacity-70 place-items-start relative shrink-0" data-name="Group">
                <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="System Icons">
                  <div className="absolute inset-[8.33%]" data-name="Subtract">
                    <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Yettel_Sans_Beta:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[12px] text-[rgba(229,233,236,0.7)] tracking-[0.06px]">Label</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-center justify-center py-[12px] relative shrink-0 w-[168px]" data-name="Tablet Main Page Tabs">
            <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Tab">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] opacity-70 place-items-start relative shrink-0" data-name="Group">
                <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="System Icons">
                  <div className="absolute inset-[8.33%]" data-name="Subtract">
                    <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Yettel_Sans_Beta:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[12px] text-[rgba(229,233,236,0.7)] tracking-[0.06px]">Label</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (platform === "Tablet_portrait" && bar === "Tab" && type === "5 in Row" && background === "Filled") {
    return (
      <div className={className || "bg-[#002340] h-[48px] relative shadow-[0px_44px_12px_0px_rgba(0,0,0,0),0px_28px_11px_0px_rgba(0,0,0,0.01),0px_16px_10px_0px_rgba(0,0,0,0.04),0px_7px_7px_0px_rgba(0,0,0,0.06),0px_2px_4px_0px_rgba(0,0,0,0.07),0px_0px_0px_0px_rgba(0,0,0,0.07)]"} data-name="Platform=Tablet_portrait, Bar=Tab, Type=5 in Row, Background=Filled">
        <div className="absolute h-px left-0 right-0 top-0" data-name="divider">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 640 1">
            <path d="M0 0H640V1H0V0Z" fill="var(--fill-0, #E5E9EC)" fillOpacity="0.1" id="divider" />
          </svg>
        </div>
        <div className="-translate-y-1/2 absolute content-stretch flex gap-[16px] items-center left-0 px-[32px] top-1/2 w-[640px]" data-name="tab bar">
          <TabletMainPageTabs className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px py-[12px] relative" />
          <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px py-[12px] relative" data-name="Tablet Main Page Tabs">
            <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Tab">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] opacity-70 place-items-start relative shrink-0" data-name="Group">
                <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="System Icons">
                  <div className="absolute inset-[8.33%]" data-name="Subtract">
                    <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Yettel_Sans_Beta:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[12px] text-[rgba(229,233,236,0.7)] tracking-[0.06px]">Label</p>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px py-[12px] relative" data-name="Tablet Main Page Tabs">
            <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Tab">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] opacity-70 place-items-start relative shrink-0" data-name="Group">
                <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="System Icons">
                  <div className="absolute inset-[8.33%]" data-name="Subtract">
                    <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Yettel_Sans_Beta:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[12px] text-[rgba(229,233,236,0.7)] tracking-[0.06px]">Label</p>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px py-[12px] relative" data-name="Tablet Main Page Tabs">
            <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Tab">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] opacity-70 place-items-start relative shrink-0" data-name="Group">
                <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="System Icons">
                  <div className="absolute inset-[8.33%]" data-name="Subtract">
                    <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Yettel_Sans_Beta:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[12px] text-[rgba(229,233,236,0.7)] tracking-[0.06px]">Label</p>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px py-[12px] relative" data-name="Tablet Main Page Tabs">
            <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Tab">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] opacity-70 place-items-start relative shrink-0" data-name="Group">
                <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="System Icons">
                  <div className="absolute inset-[8.33%]" data-name="Subtract">
                    <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Yettel_Sans_Beta:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[12px] text-[rgba(229,233,236,0.7)] tracking-[0.06px]">Label</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (platform === "Desktop" && bar === "Top Nav" && type === "1st Level" && background === "Gradient") {
    return (
      <div className={className || "h-[88px] relative"} data-name="Platform=Desktop, Bar=Top Nav, Type=1st Level, Background=Gradient">
        <TopNavigation className="absolute h-[144px] left-0 right-0 top-0" />
        <div className="absolute content-stretch flex gap-[16px] h-[32px] items-center justify-end right-[72px] top-[8px]" data-name="right side">
          <div className="relative shrink-0 size-[24px]" data-name="System Icons">
            <div className="absolute inset-[8.33%]" data-name="ico_search">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9999 19.9999">
                <path d={svgPaths.p112fb6f0} fill="var(--fill-0, #E5E9EC)" id="ico_search" />
              </svg>
            </div>
          </div>
          <SystemIcons className="relative rounded-[3px] shrink-0 size-[24px]" name="Settings" />
          <div className="relative shrink-0 size-[32px]" data-name="Avatars">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 88 88">
              <path clipRule="evenodd" d={svgPaths.p1958a480} fill="var(--fill-0, #E5E9EC)" fillOpacity="0.2" fillRule="evenodd" id="shape" />
            </svg>
            <div className="absolute inset-[18.18%_14.86%_0_14.86%]" data-name="Union">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 61.8535 72">
                <path d={svgPaths.p2dfe470} fill="var(--fill-0, #E5E9EC)" fillOpacity="0.2" id="Union" />
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex gap-[40px] items-center left-[72px] overflow-clip top-[4px]" data-name="left side">
          <BrandLogos className="content-stretch flex h-[32px] items-center justify-center relative shrink-0 w-[109px]" />
          <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="tabs">
            <div className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0" data-name="Buttons">
              <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[rgba(229,233,236,0.7)] text-center">Label</p>
            </div>
            <div className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0" data-name="Buttons">
              <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#e5e9ec] text-[16px] text-center">Label</p>
            </div>
            <div className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0" data-name="Buttons">
              <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[rgba(229,233,236,0.7)] text-center">Label</p>
            </div>
            <div className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0" data-name="Buttons">
              <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[rgba(229,233,236,0.7)] text-center">Label</p>
            </div>
            <div className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0" data-name="Buttons">
              <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[rgba(229,233,236,0.7)] text-center">Label</p>
            </div>
            <div className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0" data-name="Buttons">
              <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[rgba(229,233,236,0.7)] text-center">Label</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (platform === "Desktop" && bar === "Top Nav" && type === "1st Level" && background === "Filled") {
    return (
      <div className={className || "h-[88px] relative shadow-[0px_44px_12px_0px_rgba(0,0,0,0),0px_28px_11px_0px_rgba(0,0,0,0.01),0px_16px_10px_0px_rgba(0,0,0,0.04),0px_7px_7px_0px_rgba(0,0,0,0.06),0px_2px_4px_0px_rgba(0,0,0,0.07),0px_0px_0px_0px_rgba(0,0,0,0.07)]"} data-name="Platform=Desktop, Bar=Top Nav, Type=1st Level, Background=Filled">
        <div className="absolute h-[48px] left-0 right-0 top-0" data-name="background">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 1280 48">
            <path d="M0 0H1280V48H0V0Z" fill="var(--fill-0, #002340)" id="background" />
          </svg>
        </div>
        <div className="absolute h-px left-0 right-0 top-[47px]" data-name="divider">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 1280 1">
            <path d="M0 0H1280V1H0V0Z" fill="var(--fill-0, #E5E9EC)" fillOpacity="0.1" id="divider" />
          </svg>
        </div>
        <div className="absolute content-stretch flex gap-[16px] h-[32px] items-center justify-end right-[72px] top-[8px]" data-name="right side">
          <SystemIcons className="relative shrink-0 size-[24px]" name="Search" />
          <div className="relative shrink-0 size-[32px]" data-name="Avatars">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 88 88">
              <path clipRule="evenodd" d={svgPaths.p1958a480} fill="var(--fill-0, #E5E9EC)" fillOpacity="0.2" fillRule="evenodd" id="shape" />
            </svg>
            <div className="absolute inset-[18.18%_14.86%_0_14.86%]" data-name="Union">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 61.8535 72">
                <path d={svgPaths.p2dfe470} fill="var(--fill-0, #E5E9EC)" fillOpacity="0.2" id="Union" />
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex gap-[40px] items-center left-[72px] overflow-clip top-[4px]" data-name="left side">
          <BrandLogos className="content-stretch flex h-[32px] items-center justify-center relative shrink-0 w-[109px]" />
          <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="tabs">
            <Buttons className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0" style="Label" type="Ghost" width="Hug Content" />
            <Buttons className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0" state="Hover" style="Label" type="Ghost" width="Hug Content" />
            <Buttons className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0" style="Label" type="Ghost" width="Hug Content" />
            <Buttons className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0" style="Label" type="Ghost" width="Hug Content" />
            <Buttons className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0" style="Label" type="Ghost" width="Hug Content" />
            <Buttons className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0" style="Label" type="Ghost" width="Hug Content" />
          </div>
        </div>
      </div>
    );
  }
  if (platform === "Desktop" && bar === "Top Nav" && type === "2nd Level" && background === "Gradient") {
    return (
      <div className={className || "h-[136px] relative"} data-name="Platform=Desktop, Bar=Top Nav, Type=2nd Level, Background=Gradient">
        <TopNavigation className="absolute h-[192px] left-0 right-0 top-0" />
        <div className="absolute content-stretch flex gap-[16px] h-[32px] items-center justify-end right-[72px] top-[8px]" data-name="right side">
          <SystemIcons className="relative shrink-0 size-[24px]" name="Search" />
          <div className="relative shrink-0 size-[32px]" data-name="Avatars">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 88 88">
              <path clipRule="evenodd" d={svgPaths.p1958a480} fill="var(--fill-0, #E5E9EC)" fillOpacity="0.2" fillRule="evenodd" id="shape" />
            </svg>
            <div className="absolute inset-[18.18%_14.86%_0_14.86%]" data-name="Union">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 61.8535 72">
                <path d={svgPaths.p2dfe470} fill="var(--fill-0, #E5E9EC)" fillOpacity="0.2" id="Union" />
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex gap-[40px] items-center left-[72px] overflow-clip top-[4px]" data-name="left side">
          <BrandLogos className="content-stretch flex h-[32px] items-center justify-center relative shrink-0 w-[109px]" />
          <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="tabs">
            <Buttons className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0" style="Label" type="Ghost" width="Hug Content" />
            <Buttons className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0" state="Hover" style="Label" type="Ghost" width="Hug Content" />
            <Buttons className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0" style="Label" type="Ghost" width="Hug Content" />
            <Buttons className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0" style="Label" type="Ghost" width="Hug Content" />
            <Buttons className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0" style="Label" type="Ghost" width="Hug Content" />
          </div>
        </div>
        <div className="absolute content-stretch flex gap-[8px] items-start left-[72px] top-[68px]" data-name="Back">
          <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="ico + title">
            <div className="relative shrink-0 size-[24px]" data-name="System Icons">
              <div className="absolute inset-[20.83%_41.67%_20.83%_33.33%]">
                <div className="absolute inset-[-7.14%_-16.67%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00002 16">
                    <path d="M7 1.00002L1 8.00002L7 15" id="Vector 89" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#eee] text-[20px] tracking-[-0.3px]">Back</p>
          </div>
        </div>
        {showClose2 && (
          <div className="absolute bg-[rgba(0,0,0,0.7)] content-stretch flex items-center justify-center left-[1174px] p-[8px] rounded-[40px] top-[58px]" data-name="Circular">
            <div className="relative shrink-0 size-[24px]" data-name="System Icons">
              <div className="absolute inset-[8.33%]" data-name="Subtract">
                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                  <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
  if (platform === "Desktop" && bar === "Top Nav" && type === "Detail Page" && background === "Filled") {
    return (
      <div className={className || "h-[104px] relative"} data-name="Platform=Desktop, Bar=Top Nav, Type=Detail Page, Background=Filled">
        <div className="absolute h-[104px] left-0 right-0 top-0" data-name="background">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 1280 104">
            <path d="M0 0H1280V104H0V0Z" fill="var(--fill-0, #002340)" id="background" />
          </svg>
        </div>
        <div className="absolute h-px left-0 right-0 top-[103px]" data-name="divider">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 1280 1">
            <path d="M0 0H1280V1H0V0Z" fill="var(--fill-0, #E5E9EC)" fillOpacity="0.1" id="divider" />
          </svg>
        </div>
        <div className="absolute content-stretch flex gap-[16px] h-[32px] items-center justify-end right-[72px] top-[8px]" data-name="right side">
          <SystemIcons className="relative shrink-0 size-[24px]" name="Search" />
          <div className="relative shrink-0 size-[32px]" data-name="Avatars">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 88 88">
              <path clipRule="evenodd" d={svgPaths.p1958a480} fill="var(--fill-0, #E5E9EC)" fillOpacity="0.2" fillRule="evenodd" id="shape" />
            </svg>
            <div className="absolute inset-[18.18%_14.86%_0_14.86%]" data-name="Union">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 61.8535 72">
                <path d={svgPaths.p2dfe470} fill="var(--fill-0, #E5E9EC)" fillOpacity="0.2" id="Union" />
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex gap-[40px] items-center left-[72px] overflow-clip top-[4px]" data-name="left side">
          <BrandLogos className="content-stretch flex h-[32px] items-center justify-center relative shrink-0 w-[109px]" />
          <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="tabs">
            <Buttons className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0" style="Label" type="Ghost" width="Hug Content" />
            <Buttons className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0" state="Hover" style="Label" type="Ghost" width="Hug Content" />
            <Buttons className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0" style="Label" type="Ghost" width="Hug Content" />
            <Buttons className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0" style="Label" type="Ghost" width="Hug Content" />
            <Buttons className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0" style="Label" type="Ghost" width="Hug Content" />
          </div>
        </div>
        <div className="absolute content-stretch flex gap-[8px] items-start left-[72px] top-[68px]" data-name="Back">
          <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="ico + title">
            <div className="relative shrink-0 size-[24px]" data-name="System Icons">
              <div className="absolute inset-[20.83%_41.67%_20.83%_33.33%]">
                <div className="absolute inset-[-7.14%_-16.67%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00002 16">
                    <path d="M7 1.00002L1 8.00002L7 15" id="Vector 89" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#eee] text-[20px] tracking-[-0.3px]">Back</p>
          </div>
        </div>
      </div>
    );
  }
  if (platform === "Desktop" && bar === "Top Nav" && type === "3rd Level - Few Tabs" && background === "Gradient") {
    return (
      <div className={className || "h-[136px] relative"} data-name="Platform=Desktop, Bar=Top Nav, Type=3rd Level - Few Tabs, Background=Gradient">
        <TopNavigation className="absolute h-[192px] left-0 right-0 top-0" />
        <div className="absolute content-stretch flex gap-[16px] h-[32px] items-center justify-end right-[72px] top-[8px]" data-name="right side">
          <div className="relative shrink-0 size-[24px]" data-name="System Icons">
            <div className="absolute inset-[8.33%]" data-name="ico_search">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9999 19.9999">
                <path d={svgPaths.p112fb6f0} fill="var(--fill-0, #E5E9EC)" id="ico_search" />
              </svg>
            </div>
          </div>
          <div className="relative shrink-0 size-[32px]" data-name="Avatars">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 88 88">
              <path clipRule="evenodd" d={svgPaths.p1958a480} fill="var(--fill-0, #E5E9EC)" fillOpacity="0.2" fillRule="evenodd" id="shape" />
            </svg>
            <div className="absolute inset-[18.18%_14.86%_0_14.86%]" data-name="Union">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 61.8535 72">
                <path d={svgPaths.p2dfe470} fill="var(--fill-0, #E5E9EC)" fillOpacity="0.2" id="Union" />
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex gap-[40px] items-center left-[72px] overflow-clip top-[4px]" data-name="left side">
          <BrandLogos className="content-stretch flex h-[32px] items-center justify-center relative shrink-0 w-[109px]" />
          <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="tabs">
            <Buttons className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0" style="Label" type="Ghost" width="Hug Content" />
            <Buttons className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0" state="Hover" style="Label" type="Ghost" width="Hug Content" />
            <Buttons className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0" style="Label" type="Ghost" width="Hug Content" />
            <Buttons className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0" style="Label" type="Ghost" width="Hug Content" />
            <Buttons className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0" style="Label" type="Ghost" width="Hug Content" />
          </div>
        </div>
        <div className="absolute content-stretch flex gap-[40px] items-center left-[72px] top-[56px]" data-name="title + tabs">
          <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Back">
            <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="ico + title">
              <div className="relative shrink-0 size-[24px]" data-name="System Icons">
                <div className="absolute inset-[20.83%_41.67%_20.83%_33.33%]">
                  <div className="absolute inset-[-7.14%_-16.67%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00002 16">
                      <path d="M7 1.00002L1 8.00002L7 15" id="Vector 89" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#eee] text-[20px] tracking-[-0.3px]">Back</p>
            </div>
          </div>
          <div className="content-stretch flex h-[48px] items-end relative shrink-0" data-name="tabs">
            <PhoneSubPageTabs className="bg-[#e5e9ec] h-[3px] relative rounded-[6px] shrink-0" state="Active" />
            <PhoneSubPageTabs className="h-[3px] relative shrink-0" />
            <PhoneSubPageTabs className="h-[3px] relative shrink-0" />
          </div>
        </div>
      </div>
    );
  }
  if (platform === "Desktop" && bar === "Top Nav" && type === "3rd Level - Multi Tabs" && background === "Gradient") {
    return (
      <div className={className || "h-[136px] relative"} data-name="Platform=Desktop, Bar=Top Nav, Type=3rd Level - Multi Tabs, Background=Gradient">
        <TopNavigation className="absolute h-[192px] left-0 right-0 top-0" />
        <div className="absolute content-stretch flex gap-[16px] h-[32px] items-center justify-end right-[72px] top-[8px]" data-name="right side">
          <div className="relative shrink-0 size-[24px]" data-name="System Icons">
            <div className="absolute inset-[8.33%]" data-name="ico_search">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9999 19.9999">
                <path d={svgPaths.p112fb6f0} fill="var(--fill-0, #E5E9EC)" id="ico_search" />
              </svg>
            </div>
          </div>
          <div className="relative shrink-0 size-[32px]" data-name="Avatars">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 88 88">
              <path clipRule="evenodd" d={svgPaths.p1958a480} fill="var(--fill-0, #E5E9EC)" fillOpacity="0.2" fillRule="evenodd" id="shape" />
            </svg>
            <div className="absolute inset-[18.18%_14.86%_0_14.86%]" data-name="Union">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 61.8535 72">
                <path d={svgPaths.p2dfe470} fill="var(--fill-0, #E5E9EC)" fillOpacity="0.2" id="Union" />
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex gap-[40px] items-center left-[72px] overflow-clip top-[4px]" data-name="left side">
          <BrandLogos className="content-stretch flex h-[32px] items-center justify-center relative shrink-0 w-[109px]" />
          <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="tabs">
            <Buttons className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0" style="Label" type="Ghost" width="Hug Content" />
            <Buttons className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0" state="Hover" style="Label" type="Ghost" width="Hug Content" />
            <Buttons className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0" style="Label" type="Ghost" width="Hug Content" />
            <Buttons className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0" style="Label" type="Ghost" width="Hug Content" />
            <Buttons className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0" style="Label" type="Ghost" width="Hug Content" />
          </div>
        </div>
        <div className="absolute content-stretch flex gap-[40px] items-center left-[72px] right-0 top-[56px]" data-name="title + tabs">
          <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Back">
            <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="ico + title">
              <div className="relative shrink-0 size-[24px]" data-name="System Icons">
                <div className="absolute inset-[20.83%_41.67%_20.83%_33.33%]">
                  <div className="absolute inset-[-7.14%_-16.67%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00002 16">
                      <path d="M7 1.00002L1 8.00002L7 15" id="Vector 89" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#eee] text-[20px] tracking-[-0.3px]">Back</p>
            </div>
          </div>
          <div className="h-[48px] relative shrink-0 w-[1002px]" data-name="tabs">
            <div className="absolute bottom-0 content-stretch flex h-[48px] items-end left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0%_0px] mask-size-[81.86%_48px] right-[-222px]" data-name="tabs" style={{ maskImage: `url('${imgTabs2}')` }}>
              <PhoneSubPageTabs className="h-[3px] relative shrink-0" />
              <PhoneSubPageTabs className="bg-[#e5e9ec] h-[3px] relative rounded-[6px] shrink-0" state="Active" />
              <PhoneSubPageTabs className="h-[3px] relative shrink-0" />
              <PhoneSubPageTabs className="h-[3px] relative shrink-0" />
              <PhoneSubPageTabs className="h-[3px] relative shrink-0" />
              <PhoneSubPageTabs className="h-[3px] relative shrink-0" />
              <PhoneSubPageTabs className="h-[3px] relative shrink-0" />
              <PhoneSubPageTabs className="h-[3px] relative shrink-0" />
              <PhoneSubPageTabs className="h-[3px] relative shrink-0" />
              <PhoneSubPageTabs className="h-[3px] relative shrink-0" />
              <PhoneSubPageTabs className="h-[3px] relative shrink-0" />
              <PhoneSubPageTabs className="h-[3px] relative shrink-0" />
              <PhoneSubPageTabs className="h-[3px] relative shrink-0" />
              <PhoneSubPageTabs className="h-[3px] relative shrink-0" />
              <PhoneSubPageTabs className="h-[3px] relative shrink-0" />
              <PhoneSubPageTabs className="h-[3px] relative shrink-0" />
              <PhoneSubPageTabs className="h-[3px] relative shrink-0" />
              <PhoneSubPageTabs className="h-[3px] relative shrink-0" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (platform === "Desktop" && bar === "Top Nav" && type === "Detail Page" && background === "Gradient") {
    return (
      <div className={className || "h-[136px] relative"} data-name="Platform=Desktop, Bar=Top Nav, Type=Detail Page, Background=Gradient">
        <TopNavigation className="absolute h-[144px] left-0 right-0 top-0" />
        <div className="absolute content-stretch flex gap-[16px] h-[32px] items-center justify-end right-[72px] top-[8px]" data-name="right side">
          <div className="relative shrink-0 size-[24px]" data-name="System Icons">
            <div className="absolute inset-[8.33%]" data-name="ico_search">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9999 19.9999">
                <path d={svgPaths.p112fb6f0} fill="var(--fill-0, #E5E9EC)" id="ico_search" />
              </svg>
            </div>
          </div>
          <div className="relative shrink-0 size-[32px]" data-name="Avatars">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <path clipRule="evenodd" d={svgPaths.p1199c300} fill="var(--fill-0, #E5E9EC)" fillOpacity="0.2" fillRule="evenodd" id="shape" />
            </svg>
            <div className="absolute inset-[18.18%_14.86%_0_14.86%]" data-name="Union">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 22.4922 26.1816">
                <path d={svgPaths.p200c8780} fill="var(--fill-0, #E5E9EC)" fillOpacity="0.2" id="Union" />
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex gap-[40px] items-center left-[72px] overflow-clip top-[4px]" data-name="left side">
          <BrandLogos className="content-stretch flex h-[32px] items-center justify-center relative shrink-0 w-[109px]" />
          <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="tabs">
            <Buttons className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0" style="Label" type="Ghost" width="Hug Content" />
            <Buttons className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0" state="Hover" style="Label" type="Ghost" width="Hug Content" />
            <Buttons className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0" style="Label" type="Ghost" width="Hug Content" />
            <Buttons className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0" style="Label" type="Ghost" width="Hug Content" />
            <Buttons className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0" style="Label" type="Ghost" width="Hug Content" />
          </div>
        </div>
        <Back className="-translate-y-1/2 absolute content-stretch flex gap-[8px] items-start left-[72px] top-[calc(50%+12px)]" />
        <div className="absolute bg-[rgba(0,0,0,0.7)] content-stretch flex items-center justify-center left-[1174px] p-[8px] rounded-[40px] top-[58px]" data-name="Circular">
          <div className="relative shrink-0 size-[24px]" data-name="System Icons">
            <div className="absolute inset-[16.67%]" data-name="Union">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9998 15.9998">
                <path d={svgPaths.p2e8b200} fill="var(--fill-0, #E5E9EC)" id="Union" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (platform === "Desktop" && bar === "Search" && type === "Search" && background === "Gradient") {
    return (
      <div className={className || "h-[88px] relative"} data-name="Platform=Desktop, Bar=Search, Type=Search, Background=Gradient">
        <TopNavigation className="absolute h-[144px] left-0 right-0 top-0" />
        <div className="absolute content-stretch flex gap-[32px] items-start right-[72px] top-[8px]" data-name="right side">
          <div className="content-stretch flex gap-[8px] items-center overflow-clip p-[4px] relative shrink-0" data-name="search">
            <div className="relative shrink-0 size-[24px]" data-name="System Icons">
              <div className="absolute inset-[8.33%]" data-name="ico_search">
                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9999 19.9999">
                  <path d={svgPaths.p112fb6f0} fill="var(--fill-0, #E5E9EC)" id="ico_search" />
                </svg>
              </div>
            </div>
            <div className="content-stretch flex items-center relative shrink-0 w-[144px]" data-name="text">
              <p className="font-['Yettel_Sans_Beta:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[rgba(238,238,238,0.5)] tracking-[0.08px]">Search by title</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[16px] h-[32px] items-center justify-end relative shrink-0" data-name="icons">
            <div className="relative shrink-0 size-[24px]" data-name="System Icons">
              <div className="absolute inset-[16.67%]" data-name="Union">
                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9998 15.9998">
                  <path d={svgPaths.p2e8b200} fill="var(--fill-0, #E5E9EC)" id="Union" />
                </svg>
              </div>
            </div>
            <div className="relative shrink-0 size-[32px]" data-name="Avatars">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 88 88">
                <path d={svgPaths.p275acb80} fill="var(--fill-0, #E5E9EC)" fillOpacity="0.2" id="Subtract" />
              </svg>
              <div className="absolute inset-[18.18%_14.86%_0_14.86%]" data-name="Union">
                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 61.8535 72">
                  <path d={svgPaths.p2dfe470} fill="var(--fill-0, #E5E9EC)" fillOpacity="0.2" id="Union" />
                </svg>
              </div>
              <div className="absolute bottom-3/4 left-[82.81%] right-[-1.56%] top-[6.25%]" data-name="notification badge">
                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16.4999 16.4999">
                  <circle cx="8.24993" cy="8.24993" fill="var(--fill-0, #B4FF00)" id="notification badge" r="8.24993" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex gap-[40px] items-center left-[72px] overflow-clip top-[4px]" data-name="left side">
          <BrandLogos className="content-stretch flex h-[32px] items-center justify-center relative shrink-0 w-[109px]" />
          <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="tabs">
            <Buttons className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0" style="Label" type="Ghost" width="Hug Content" />
            <Buttons className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0" state="Hover" style="Label" type="Ghost" width="Hug Content" />
            <Buttons className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0" style="Label" type="Ghost" width="Hug Content" />
            <Buttons className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0" style="Label" type="Ghost" width="Hug Content" />
            <Buttons className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0" style="Label" type="Ghost" width="Hug Content" />
          </div>
        </div>
      </div>
    );
  }
  if (platform === "Desktop" && bar === "Footer" && type === "Footer" && background === "Filled") {
    return (
      <div className={className || "bg-[#002340] content-stretch flex items-start justify-between pb-[20px] pl-[56px] pr-[72px] relative"} data-name="Platform=Desktop, Bar=Footer, Type=Footer, Background=Filled">
        <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="tabs">
          <div className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0" data-name="Buttons">
            <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[16px] text-[rgba(229,233,236,0.7)] text-center">Privacy Policy</p>
          </div>
          <div className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0" data-name="Buttons">
            <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#e5e9ec] text-[16px] text-center">Cookie Settings</p>
          </div>
        </div>
        <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0" data-name="lang">
          <Flag className="relative shrink-0 size-[24px]" />
          <SystemIcons className="relative shrink-0 size-[24px]" name="Arrow Down Small" />
        </div>
      </div>
    );
  }
  if (platform === "TV & Auto" && bar === "Top Nav" && type === "1st Level" && background === "Gradient") {
    return (
      <div className={className || "h-[104px] relative"} data-name="Platform=TV & Auto, Bar=Top Nav, Type=1st Level, Background=Gradient">
        <div className="absolute h-[144px] left-0 right-0 top-0" data-name="Top Navigation">
          <div className="absolute flex inset-0 items-center justify-center">
            <div className="-scale-y-100 flex-none h-[114px] w-[960px]">
              <div className="opacity-70 size-full" data-name="Gradient ↓" style={{ backgroundImage: "linear-gradient(4.26326e-14deg, rgb(0, 35, 64) 0%, rgba(0, 35, 64, 0.992) 6.6667%, rgba(0, 35, 64, 0.965) 13.333%, rgba(0, 35, 64, 0.918) 20%, rgba(0, 35, 64, 0.855) 26.667%, rgba(0, 35, 64, 0.77) 33.333%, rgba(0, 35, 64, 0.667) 40%, rgba(0, 35, 64, 0.557) 46.667%, rgba(0, 35, 64, 0.443) 53.333%, rgba(0, 35, 64, 0.333) 60%, rgba(0, 35, 64, 0.23) 66.667%, rgba(0, 35, 64, 0.145) 73.333%, rgba(0, 35, 64, 0.082) 80%, rgba(0, 35, 64, 0.035) 86.667%, rgba(0, 35, 64, 0.008) 93.333%, rgba(0, 35, 64, 0) 100%)" }} />
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex gap-[24px] items-center left-[44px] top-[32px]" data-name="Left Side">
          <BrandLogos className="content-stretch flex h-[32px] items-center justify-center relative shrink-0 w-[109px]" />
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Tabs">
            <Buttons className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0" style="Label" type="Ghost" width="Hug Content" />
            <Buttons className="bg-[rgba(229,233,236,0.2)] content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0" state="Selected" style="Label" type="Ghost" width="Hug Content" />
            <Buttons className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0" style="Label" type="Ghost" width="Hug Content" />
            <Buttons className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0" style="Label" type="Ghost" width="Hug Content" />
            <Buttons className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0" style="Label" type="Ghost" width="Hug Content" />
          </div>
        </div>
        <div className="absolute content-stretch flex gap-[24px] h-[40px] items-center justify-end right-[44px] top-[32px]" data-name="Right Side">
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Icons">
            <div className="content-stretch flex items-start relative shrink-0" data-name="Group">
              <div className="content-stretch flex items-start overflow-clip p-[8px] relative rounded-[6px] shrink-0" data-name="Buttons">
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Group">
                  <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="System Icons">
                    <div className="absolute inset-[8.33%]" data-name="Subtract">
                      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex items-start overflow-clip p-[8px] relative rounded-[6px] shrink-0" data-name="Buttons">
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Group">
                  <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="System Icons">
                    <div className="absolute inset-[8.33%]" data-name="Subtract">
                      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 size-[32px]" data-name="Avatars">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 88 88">
                <path clipRule="evenodd" d={svgPaths.p1958a480} fill="var(--fill-0, #E5E9EC)" fillOpacity="0.2" fillRule="evenodd" id="shape" />
              </svg>
              <div className="absolute inset-[18.18%_14.86%_0_14.86%]" data-name="Union">
                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 61.8535 72">
                  <path d={svgPaths.p2dfe470} fill="var(--fill-0, #E5E9EC)" fillOpacity="0.2" id="Union" />
                </svg>
              </div>
            </div>
          </div>
          <p className="font-['Yettel_Sans_Beta:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#eee] text-[20px] text-right tracking-[0.03px]">23:56</p>
        </div>
      </div>
    );
  }
  if (platform === "TV & Auto" && bar === "Top Nav" && type === "2nd Level" && background === "Gradient") {
    return (
      <div className={className || "h-[104px] relative"} data-name="Platform=TV & Auto, Bar=Top Nav, Type=2nd Level, Background=Gradient">
        <div className="absolute h-[144px] left-0 right-0 top-0" data-name="Top Navigation">
          <div className="absolute flex inset-0 items-center justify-center">
            <div className="-scale-y-100 flex-none h-[114px] w-[960px]">
              <div className="opacity-70 size-full" data-name="Gradient ↓" style={{ backgroundImage: "linear-gradient(4.26326e-14deg, rgb(0, 35, 64) 0%, rgba(0, 35, 64, 0.992) 6.6667%, rgba(0, 35, 64, 0.965) 13.333%, rgba(0, 35, 64, 0.918) 20%, rgba(0, 35, 64, 0.855) 26.667%, rgba(0, 35, 64, 0.77) 33.333%, rgba(0, 35, 64, 0.667) 40%, rgba(0, 35, 64, 0.557) 46.667%, rgba(0, 35, 64, 0.443) 53.333%, rgba(0, 35, 64, 0.333) 60%, rgba(0, 35, 64, 0.23) 66.667%, rgba(0, 35, 64, 0.145) 73.333%, rgba(0, 35, 64, 0.082) 80%, rgba(0, 35, 64, 0.035) 86.667%, rgba(0, 35, 64, 0.008) 93.333%, rgba(0, 35, 64, 0) 100%)" }} />
            </div>
          </div>
        </div>
        <p className="absolute font-['Yettel_Sans_Beta:Regular',sans-serif] leading-[1.2] not-italic right-[44px] text-[#eee] text-[20px] text-right top-[40px] tracking-[0.03px]">23:56</p>
        <div className="-translate-y-1/2 absolute content-stretch flex gap-[16px] items-center left-[44px] top-1/2" data-name="Back">
          {backButton && <Back button="Default" className="content-stretch flex items-center justify-center p-[8px] relative rounded-[999999px] shrink-0" />}
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="title">
            <div className="flex flex-col font-['Yettel_Sans_Beta:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#eee] text-[20px] tracking-[-0.3px] whitespace-nowrap">
              <p className="leading-[1.2]">{firstPage}</p>
            </div>
            <SystemIcons className="relative shrink-0 size-[24px]" name="Arrow Right Small" />
            <div className="flex flex-col font-['Yettel_Sans_Beta:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#eee] text-[20px] tracking-[-0.3px] whitespace-nowrap">
              <p className="leading-[1.2]">{intermediaryPage}</p>
            </div>
            <SystemIcons className="relative shrink-0 size-[24px]" name="Arrow Right Small" />
            <div className="flex flex-col font-['Yettel_Sans_Beta:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#eee] text-[20px] tracking-[-0.3px] whitespace-nowrap">
              <p className="leading-[1.2]">{secondPage}</p>
            </div>
            <SystemIcons className="relative shrink-0 size-[24px]" name="Arrow Right Small" />
            {currrentPage && (
              <div className="content-stretch flex gap-[8px] items-center not-italic relative shrink-0 text-[20px]">
                <div className="flex flex-col font-['Yettel_Sans_Beta:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[#eee] tracking-[-0.3px] whitespace-nowrap">
                  <p className="leading-[1.2]">Current Title</p>
                </div>
                <p className="font-['Yettel_Sans_Beta:Regular',sans-serif] leading-[1.2] relative shrink-0 text-[rgba(238,238,238,0.7)] tracking-[0.03px]">000</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
  if (platform === "TV & Auto" && bar === "Back" && type === "Detail Page" && background === "Transparent") {
    return (
      <div className={className || "h-[104px] relative"} data-name="Platform=TV & Auto, Bar=Back, Type=Detail Page, Background=Transparent">
        <Corner className="absolute h-[540px] left-0 overflow-clip right-0 top-0" />
        {backButton && (
          <div className="absolute content-stretch flex gap-[16px] items-center left-[44px] top-[32px]" data-name="Back">
            <Back button="Default" className="content-stretch flex items-center justify-center p-[8px] relative rounded-[999999px] shrink-0" />
          </div>
        )}
        <Buttons className="absolute content-stretch flex items-center justify-center left-[876px] p-[8px] rounded-[999999px] top-[32px]" type="Outlined" />
      </div>
    );
  }
  if (platform === "TV & Auto" && bar === "Back" && type === "Detail Page" && background === "Gradient") {
    return (
      <div className={className || "h-[104px] relative"} data-name="Platform=TV & Auto, Bar=Back, Type=Detail Page, Background=Gradient">
        <div className="absolute h-[144px] left-0 right-0 top-0" data-name="Top Navigation">
          <div className="absolute flex inset-0 items-center justify-center">
            <div className="-scale-y-100 flex-none h-[114px] w-[960px]">
              <div className="opacity-70 size-full" data-name="Gradient ↓" style={{ backgroundImage: "linear-gradient(4.26326e-14deg, rgb(0, 35, 64) 0%, rgba(0, 35, 64, 0.992) 6.6667%, rgba(0, 35, 64, 0.965) 13.333%, rgba(0, 35, 64, 0.918) 20%, rgba(0, 35, 64, 0.855) 26.667%, rgba(0, 35, 64, 0.77) 33.333%, rgba(0, 35, 64, 0.667) 40%, rgba(0, 35, 64, 0.557) 46.667%, rgba(0, 35, 64, 0.443) 53.333%, rgba(0, 35, 64, 0.333) 60%, rgba(0, 35, 64, 0.23) 66.667%, rgba(0, 35, 64, 0.145) 73.333%, rgba(0, 35, 64, 0.082) 80%, rgba(0, 35, 64, 0.035) 86.667%, rgba(0, 35, 64, 0.008) 93.333%, rgba(0, 35, 64, 0) 100%)" }} />
            </div>
          </div>
        </div>
        {backButton && (
          <div className="absolute content-stretch flex gap-[16px] items-center left-[44px] top-[32px]" data-name="Back">
            <Back button="Default" className="content-stretch flex items-center justify-center p-[8px] relative rounded-[999999px] shrink-0" />
          </div>
        )}
        <Buttons className="absolute content-stretch flex items-center justify-center left-[876px] p-[8px] rounded-[999999px] top-[32px]" type="Outlined" />
      </div>
    );
  }
  if (platform === "TV & Auto" && bar === "Top Nav" && type === "3rd Level - Multi Tabs" && background === "Gradient") {
    return (
      <div className={className || "h-[172px] relative"} data-name="Platform=TV & Auto, Bar=Top Nav, Type=3rd Level - Multi Tabs, Background=Gradient">
        <div className="absolute h-[192px] left-0 right-0 top-0" data-name="Top Navigation">
          <div className="absolute flex inset-0 items-center justify-center">
            <div className="-scale-y-100 flex-none h-[114px] w-[960px]">
              <div className="opacity-70 size-full" data-name="Gradient ↓" style={{ backgroundImage: "linear-gradient(4.26326e-14deg, rgb(0, 35, 64) 0%, rgba(0, 35, 64, 0.992) 6.6667%, rgba(0, 35, 64, 0.965) 13.333%, rgba(0, 35, 64, 0.918) 20%, rgba(0, 35, 64, 0.855) 26.667%, rgba(0, 35, 64, 0.77) 33.333%, rgba(0, 35, 64, 0.667) 40%, rgba(0, 35, 64, 0.557) 46.667%, rgba(0, 35, 64, 0.443) 53.333%, rgba(0, 35, 64, 0.333) 60%, rgba(0, 35, 64, 0.23) 66.667%, rgba(0, 35, 64, 0.145) 73.333%, rgba(0, 35, 64, 0.082) 80%, rgba(0, 35, 64, 0.035) 86.667%, rgba(0, 35, 64, 0.008) 93.333%, rgba(0, 35, 64, 0) 100%)" }} />
            </div>
          </div>
        </div>
        <p className="absolute font-['Yettel_Sans_Beta:Regular',sans-serif] leading-[1.2] not-italic right-[44px] text-[#eee] text-[20px] text-right top-[40px] tracking-[0.03px]">23:56</p>
        <div className="-translate-y-1/2 absolute content-stretch flex gap-[16px] items-center left-[44px] top-[calc(50%-34px)]" data-name="Back">
          {backButton && <Back button="Default" className="content-stretch flex items-center justify-center p-[8px] relative rounded-[999999px] shrink-0" />}
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="title">
            <div className="flex flex-col font-['Yettel_Sans_Beta:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#eee] text-[20px] tracking-[-0.3px] whitespace-nowrap">
              <p className="leading-[1.2]">{firstPage}</p>
            </div>
            <SystemIcons className="relative shrink-0 size-[24px]" name="Arrow Right Small" />
            <div className="flex flex-col font-['Yettel_Sans_Beta:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#eee] text-[20px] tracking-[-0.3px] whitespace-nowrap">
              <p className="leading-[1.2]">{intermediaryPage}</p>
            </div>
            <SystemIcons className="relative shrink-0 size-[24px]" name="Arrow Right Small" />
            <div className="flex flex-col font-['Yettel_Sans_Beta:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#eee] text-[20px] tracking-[-0.3px] whitespace-nowrap">
              <p className="leading-[1.2]">{secondPage}</p>
            </div>
            <SystemIcons className="relative shrink-0 size-[24px]" name="Arrow Right Small" />
            {currrentPage && (
              <div className="content-stretch flex gap-[8px] items-center not-italic relative shrink-0 text-[20px]">
                <div className="flex flex-col font-['Yettel_Sans_Beta:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[#eee] tracking-[-0.3px] whitespace-nowrap">
                  <p className="leading-[1.2]">Current Title</p>
                </div>
                <p className="font-['Yettel_Sans_Beta:Regular',sans-serif] leading-[1.2] relative shrink-0 text-[rgba(238,238,238,0.7)] tracking-[0.03px]">000</p>
              </div>
            )}
          </div>
        </div>
        <div className="absolute h-[40px] left-0 overflow-clip right-0 top-[92px]" data-name="Tabs">
          <div className="absolute content-stretch flex gap-[4px] items-start left-[44px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-44px_-1px] mask-size-[916px_40px] top-px w-[872px]" data-name="tabs" style={{ maskImage: `url('${imgTabs3}')` }}>
            <Buttons className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0" style="Label" type="Ghost" width="Hug Content" />
            <Buttons className="bg-[rgba(229,233,236,0.2)] content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0" state="Selected" style="Label" type="Ghost" width="Hug Content" />
            <Buttons className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0" style="Label" type="Ghost" width="Hug Content" />
            <Buttons className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0" style="Label" type="Ghost" width="Hug Content" />
            <Buttons className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0" style="Label" type="Ghost" width="Hug Content" />
            <Buttons className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0" style="Label" type="Ghost" width="Hug Content" />
            <Buttons className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0" style="Label" type="Ghost" width="Hug Content" />
            <Buttons className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0" style="Label" type="Ghost" width="Hug Content" />
            <Buttons className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0" style="Label" type="Ghost" width="Hug Content" />
            <Buttons className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0" style="Label" type="Ghost" width="Hug Content" />
            <Buttons className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0" style="Label" type="Ghost" width="Hug Content" />
            <Buttons className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0" style="Label" type="Ghost" width="Hug Content" />
          </div>
        </div>
      </div>
    );
  }
  if (platform === "TV & Auto" && bar === "Top Nav" && type === "3rd Level - Few Tabs" && background === "Gradient") {
    return (
      <div className={className || "h-[172px] relative"} data-name="Platform=TV & Auto, Bar=Top Nav, Type=3rd Level - Few Tabs, Background=Gradient">
        <div className="absolute h-[192px] left-0 right-0 top-0" data-name="Top Navigation">
          <div className="absolute flex inset-0 items-center justify-center">
            <div className="-scale-y-100 flex-none h-[114px] w-[960px]">
              <div className="opacity-70 size-full" data-name="Gradient ↓" style={{ backgroundImage: "linear-gradient(4.26326e-14deg, rgb(0, 35, 64) 0%, rgba(0, 35, 64, 0.992) 6.6667%, rgba(0, 35, 64, 0.965) 13.333%, rgba(0, 35, 64, 0.918) 20%, rgba(0, 35, 64, 0.855) 26.667%, rgba(0, 35, 64, 0.77) 33.333%, rgba(0, 35, 64, 0.667) 40%, rgba(0, 35, 64, 0.557) 46.667%, rgba(0, 35, 64, 0.443) 53.333%, rgba(0, 35, 64, 0.333) 60%, rgba(0, 35, 64, 0.23) 66.667%, rgba(0, 35, 64, 0.145) 73.333%, rgba(0, 35, 64, 0.082) 80%, rgba(0, 35, 64, 0.035) 86.667%, rgba(0, 35, 64, 0.008) 93.333%, rgba(0, 35, 64, 0) 100%)" }} />
            </div>
          </div>
        </div>
        <p className="absolute font-['Yettel_Sans_Beta:Regular',sans-serif] leading-[1.2] not-italic right-[44px] text-[#eee] text-[20px] text-right top-[40px] tracking-[0.03px]">23:56</p>
        <div className="-translate-y-1/2 absolute content-stretch flex gap-[16px] items-center left-[44px] top-[calc(50%-34px)]" data-name="Back">
          {backButton && <Back button="Default" className="content-stretch flex items-center justify-center p-[8px] relative rounded-[999999px] shrink-0" />}
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="title">
            <div className="flex flex-col font-['Yettel_Sans_Beta:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#eee] text-[20px] tracking-[-0.3px] whitespace-nowrap">
              <p className="leading-[1.2]">{firstPage}</p>
            </div>
            <SystemIcons className="relative shrink-0 size-[24px]" name="Arrow Right Small" />
            <div className="flex flex-col font-['Yettel_Sans_Beta:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#eee] text-[20px] tracking-[-0.3px] whitespace-nowrap">
              <p className="leading-[1.2]">{intermediaryPage}</p>
            </div>
            <SystemIcons className="relative shrink-0 size-[24px]" name="Arrow Right Small" />
            <div className="flex flex-col font-['Yettel_Sans_Beta:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#eee] text-[20px] tracking-[-0.3px] whitespace-nowrap">
              <p className="leading-[1.2]">{secondPage}</p>
            </div>
            <SystemIcons className="relative shrink-0 size-[24px]" name="Arrow Right Small" />
            {currrentPage && (
              <div className="content-stretch flex gap-[8px] items-center not-italic relative shrink-0 text-[20px]">
                <div className="flex flex-col font-['Yettel_Sans_Beta:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[#eee] tracking-[-0.3px] whitespace-nowrap">
                  <p className="leading-[1.2]">Current Title</p>
                </div>
                <p className="font-['Yettel_Sans_Beta:Regular',sans-serif] leading-[1.2] relative shrink-0 text-[rgba(238,238,238,0.7)] tracking-[0.03px]">000</p>
              </div>
            )}
          </div>
        </div>
        <div className="-translate-x-1/2 absolute content-stretch flex gap-[8px] items-start left-1/2 top-[92px]" data-name="Tabs">
          <Buttons className="bg-[rgba(229,233,236,0.2)] content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0 w-[120px]" state="Selected" style="Label" type="Ghost" width="Hug Content" />
          <Buttons className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0 w-[120px]" style="Label" type="Ghost" width="Hug Content" />
          <Buttons className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[6px] shrink-0 w-[120px]" style="Label" type="Ghost" width="Hug Content" />
        </div>
      </div>
    );
  }
  if (platform === "TV & Auto" && bar === "Side Nav" && type === "Expanded" && background === "Transparent") {
    return (
      <div className={className || "h-[540px] relative w-[960px]"} data-name="Platform=TV & Auto, Bar=Side Nav, Type=Expanded, Background=Transparent">
        <SideGradient className="absolute h-[540px] left-0 top-0 w-[720px]" />
        <BrandLogos className="-translate-y-1/2 absolute content-stretch flex h-[32px] items-center justify-center left-[24px] top-[calc(50%+222px)] w-[109px]" />
        <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[20px] top-[calc(50%+14px)]" data-name="Menu">
          <div className="content-stretch flex flex-col items-start justify-center pl-[8px] pr-[18px] py-[8px] relative rounded-[6px] shrink-0 w-[145px]" data-name="Buttons">
            <div className="content-stretch flex gap-[16px] items-center leading-[0] relative shrink-0" data-name="Content">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Group">
                <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="System Icons">
                  <div className="absolute inset-[8.33%]" data-name="Subtract">
                    <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-['Yettel_Sans_Beta:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[12px] text-[rgba(229,233,236,0.7)] tracking-[0.06px] whitespace-nowrap">
                <p className="leading-[1.3]">Label</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start justify-center pl-[8px] pr-[18px] py-[8px] relative rounded-[6px] shrink-0 w-[145px]" data-name="Buttons" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgb(180, 255, 0) 0%, rgb(180, 255, 0) 100%)" }}>
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Content">
              <div className="relative shrink-0 size-[24px]" data-name="System Icons">
                <div className="absolute inset-[8.33%]" data-name="Subtract">
                  <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col font-['Yettel_Sans_Beta:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#002340] text-[12px] whitespace-nowrap">
                <p className="leading-[1.3]">Label</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start justify-center pl-[8px] pr-[18px] py-[8px] relative rounded-[6px] shrink-0 w-[145px]" data-name="Buttons">
            <div className="content-stretch flex gap-[16px] items-center leading-[0] relative shrink-0" data-name="Content">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Group">
                <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="System Icons">
                  <div className="absolute inset-[8.33%]" data-name="Subtract">
                    <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-['Yettel_Sans_Beta:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[12px] text-[rgba(229,233,236,0.7)] tracking-[0.06px] whitespace-nowrap">
                <p className="leading-[1.3]">Label</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start justify-center pl-[8px] pr-[18px] py-[8px] relative rounded-[6px] shrink-0 w-[145px]" data-name="Buttons">
            <div className="content-stretch flex gap-[16px] items-center leading-[0] relative shrink-0" data-name="Content">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Group">
                <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="System Icons">
                  <div className="absolute inset-[8.33%]" data-name="Subtract">
                    <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-['Yettel_Sans_Beta:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[12px] text-[rgba(229,233,236,0.7)] tracking-[0.06px] whitespace-nowrap">
                <p className="leading-[1.3]">Label</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start justify-center pl-[8px] pr-[18px] py-[8px] relative rounded-[6px] shrink-0 w-[145px]" data-name="Buttons">
            <div className="content-stretch flex gap-[16px] items-center leading-[0] relative shrink-0" data-name="Content">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Group">
                <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="System Icons">
                  <div className="absolute inset-[8.33%]" data-name="Subtract">
                    <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-['Yettel_Sans_Beta:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[12px] text-[rgba(229,233,236,0.7)] tracking-[0.06px] whitespace-nowrap">
                <p className="leading-[1.3]">Label</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start justify-center pl-[8px] pr-[18px] py-[8px] relative rounded-[6px] shrink-0 w-[145px]" data-name="Buttons">
            <div className="content-stretch flex gap-[16px] items-center leading-[0] relative shrink-0" data-name="Content">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Group">
                <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="System Icons">
                  <div className="absolute inset-[8.33%]" data-name="Subtract">
                    <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-['Yettel_Sans_Beta:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[12px] text-[rgba(229,233,236,0.7)] tracking-[0.06px] whitespace-nowrap">
                <p className="leading-[1.3]">Label</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start justify-center pl-[8px] pr-[18px] py-[8px] relative rounded-[6px] shrink-0 w-[145px]" data-name="Buttons">
            <div className="content-stretch flex gap-[16px] items-center leading-[0] relative shrink-0" data-name="Content">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Group">
                <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="System Icons">
                  <div className="absolute inset-[8.33%]" data-name="Subtract">
                    <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-['Yettel_Sans_Beta:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[12px] text-[rgba(229,233,236,0.7)] tracking-[0.06px] whitespace-nowrap">
                <p className="leading-[1.3]">Label</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start justify-center pl-[8px] pr-[18px] py-[8px] relative rounded-[6px] shrink-0 w-[145px]" data-name="Buttons">
            <div className="content-stretch flex gap-[16px] items-center leading-[0] relative shrink-0" data-name="Content">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Group">
                <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="System Icons">
                  <div className="absolute inset-[8.33%]" data-name="Subtract">
                    <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-['Yettel_Sans_Beta:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[12px] text-[rgba(229,233,236,0.7)] tracking-[0.06px] whitespace-nowrap">
                <p className="leading-[1.3]">Label</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col items-start justify-center left-[20px] pl-[8px] pr-[18px] py-[8px] rounded-[6px] top-[28px] w-[145px]" data-name="Buttons">
          <div className="content-stretch flex gap-[16px] items-center leading-[0] relative shrink-0" data-name="Content">
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Group">
              <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="System Icons">
                <div className="absolute inset-[8.33%]" data-name="Subtract">
                  <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-['Yettel_Sans_Beta:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[12px] text-[rgba(229,233,236,0.7)] tracking-[0.06px] whitespace-nowrap">
              <p className="leading-[1.3]">Label</p>
            </div>
          </div>
        </div>
        {showNotification && (
          <div className="absolute content-stretch flex flex-col items-start justify-center left-[20px] pl-[8px] pr-[18px] py-[8px] rounded-[6px] top-[68px] w-[145px]" data-name="Buttons">
            <div className="content-stretch flex gap-[16px] items-center leading-[0] relative shrink-0" data-name="Content">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Group">
                <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="System Icons">
                  <div className="absolute inset-[8.33%]" data-name="Subtract">
                    <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-['Yettel_Sans_Beta:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[12px] text-[rgba(229,233,236,0.7)] tracking-[0.06px] whitespace-nowrap">
                <p className="leading-[1.3]">Label</p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
  if (platform === "TV & Auto" && bar === "Side Nav_with profile" && type === "Expanded" && background === "Transparent") {
    return (
      <div className={className || "h-[540px] relative w-[960px]"} data-name="Platform=TV & Auto, Bar=Side Nav_with profile, Type=Expanded, Background=Transparent">
        <SideGradient className="absolute h-[540px] left-0 top-0 w-[720px]" />
        <BrandLogos className="-translate-y-1/2 absolute content-stretch flex h-[32px] items-center justify-center left-[24px] top-[calc(50%+222px)] w-[109px]" />
        <div className="absolute contents left-[20px] top-[164px]" data-name="Mask group">
          <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[20px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_12px] mask-size-[145px_299px] top-[calc(50%+54px)]" data-name="Menu" style={{ maskImage: `url('${imgMenu}')` }}>
            <div className="content-stretch flex flex-col items-start justify-center pl-[8px] pr-[18px] py-[8px] relative rounded-[6px] shrink-0 w-[145px]" data-name="Buttons">
              <div className="content-stretch flex gap-[16px] items-center leading-[0] relative shrink-0" data-name="Content">
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Group">
                  <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="System Icons">
                    <div className="absolute inset-[8.33%]" data-name="Subtract">
                      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col font-['Yettel_Sans_Beta:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[12px] text-[rgba(229,233,236,0.7)] tracking-[0.06px] whitespace-nowrap">
                  <p className="leading-[1.3]">Label</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start justify-center pl-[8px] pr-[18px] py-[8px] relative rounded-[6px] shrink-0 w-[145px]" data-name="Buttons" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgb(180, 255, 0) 0%, rgb(180, 255, 0) 100%)" }}>
              <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Content">
                <div className="relative shrink-0 size-[24px]" data-name="System Icons">
                  <div className="absolute inset-[8.33%]" data-name="Subtract">
                    <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-col font-['Yettel_Sans_Beta:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#002340] text-[12px] whitespace-nowrap">
                  <p className="leading-[1.3]">Label</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start justify-center pl-[8px] pr-[18px] py-[8px] relative rounded-[6px] shrink-0 w-[145px]" data-name="Buttons">
              <div className="content-stretch flex gap-[16px] items-center leading-[0] relative shrink-0" data-name="Content">
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Group">
                  <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="System Icons">
                    <div className="absolute inset-[8.33%]" data-name="Subtract">
                      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col font-['Yettel_Sans_Beta:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[12px] text-[rgba(229,233,236,0.7)] tracking-[0.06px] whitespace-nowrap">
                  <p className="leading-[1.3]">Label</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start justify-center pl-[8px] pr-[18px] py-[8px] relative rounded-[6px] shrink-0 w-[145px]" data-name="Buttons">
              <div className="content-stretch flex gap-[16px] items-center leading-[0] relative shrink-0" data-name="Content">
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Group">
                  <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="System Icons">
                    <div className="absolute inset-[8.33%]" data-name="Subtract">
                      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col font-['Yettel_Sans_Beta:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[12px] text-[rgba(229,233,236,0.7)] tracking-[0.06px] whitespace-nowrap">
                  <p className="leading-[1.3]">Label</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start justify-center pl-[8px] pr-[18px] py-[8px] relative rounded-[6px] shrink-0 w-[145px]" data-name="Buttons">
              <div className="content-stretch flex gap-[16px] items-center leading-[0] relative shrink-0" data-name="Content">
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Group">
                  <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="System Icons">
                    <div className="absolute inset-[8.33%]" data-name="Subtract">
                      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col font-['Yettel_Sans_Beta:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[12px] text-[rgba(229,233,236,0.7)] tracking-[0.06px] whitespace-nowrap">
                  <p className="leading-[1.3]">Label</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start justify-center pl-[8px] pr-[18px] py-[8px] relative rounded-[6px] shrink-0 w-[145px]" data-name="Buttons">
              <div className="content-stretch flex gap-[16px] items-center leading-[0] relative shrink-0" data-name="Content">
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Group">
                  <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="System Icons">
                    <div className="absolute inset-[8.33%]" data-name="Subtract">
                      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col font-['Yettel_Sans_Beta:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[12px] text-[rgba(229,233,236,0.7)] tracking-[0.06px] whitespace-nowrap">
                  <p className="leading-[1.3]">Label</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start justify-center pl-[8px] pr-[18px] py-[8px] relative rounded-[6px] shrink-0 w-[145px]" data-name="Buttons">
              <div className="content-stretch flex gap-[16px] items-center leading-[0] relative shrink-0" data-name="Content">
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Group">
                  <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="System Icons">
                    <div className="absolute inset-[8.33%]" data-name="Subtract">
                      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col font-['Yettel_Sans_Beta:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[12px] text-[rgba(229,233,236,0.7)] tracking-[0.06px] whitespace-nowrap">
                  <p className="leading-[1.3]">Label</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start justify-center pl-[8px] pr-[18px] py-[8px] relative rounded-[6px] shrink-0 w-[145px]" data-name="Buttons">
              <div className="content-stretch flex gap-[16px] items-center leading-[0] relative shrink-0" data-name="Content">
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Group">
                  <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="System Icons">
                    <div className="absolute inset-[8.33%]" data-name="Subtract">
                      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col font-['Yettel_Sans_Beta:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[12px] text-[rgba(229,233,236,0.7)] tracking-[0.06px] whitespace-nowrap">
                  <p className="leading-[1.3]">Label</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col items-start justify-center left-[20px] pl-[8px] pr-[18px] py-[8px] rounded-[6px] top-[68px] w-[145px]" data-name="Buttons">
          <div className="content-stretch flex gap-[16px] items-center leading-[0] relative shrink-0" data-name="Content">
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Group">
              <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="System Icons">
                <div className="absolute inset-[8.33%]" data-name="Subtract">
                  <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-['Yettel_Sans_Beta:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[12px] text-[rgba(229,233,236,0.7)] tracking-[0.06px] whitespace-nowrap">
              <p className="leading-[1.3]">Label</p>
            </div>
          </div>
        </div>
        {showNotification && (
          <div className="absolute content-stretch flex flex-col items-start justify-center left-[20px] pl-[8px] pr-[18px] py-[8px] rounded-[6px] top-[108px] w-[145px]" data-name="Buttons">
            <div className="content-stretch flex gap-[16px] items-center leading-[0] relative shrink-0" data-name="Content">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Group">
                <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="System Icons">
                  <div className="absolute inset-[8.33%]" data-name="Subtract">
                    <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-['Yettel_Sans_Beta:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[12px] text-[rgba(229,233,236,0.7)] tracking-[0.06px] whitespace-nowrap">
                <p className="leading-[1.3]">Label</p>
              </div>
            </div>
          </div>
        )}
        <div className="absolute h-[32px] left-[24px] top-[32px] w-[141px]" data-name="Avatar">
          <div className="absolute content-stretch flex gap-[12px] items-center left-0 top-0" data-name="Content">
            <div className="relative shrink-0 size-[32px]" data-name="Avatars">
              <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 88 88">
                <path clipRule="evenodd" d={svgPaths.p1958a480} fill="var(--fill-0, #E5E9EC)" fillOpacity="0.2" fillRule="evenodd" id="shape" />
              </svg>
              <div className="absolute inset-[18.18%_14.86%_0_14.86%]" data-name="Union">
                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 61.8535 72">
                  <path d={svgPaths.p2dfe470} fill="var(--fill-0, #E5E9EC)" fillOpacity="0.2" id="Union" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col font-['Yettel_Sans_Beta:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#eee] text-[14px] tracking-[0.035px] whitespace-nowrap">
              <p className="leading-[1.4]">Settings</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (platform === "TV & Auto" && bar === "Side Nav" && type === "Collapsed" && background === "Transparent") {
    return (
      <div className={className || "h-[540px] relative w-[80px]"} data-name="Platform=TV & Auto, Bar=Side Nav, Type=Collapsed, Background=Transparent">
        <div className="-translate-x-1/2 absolute bottom-[32px] left-1/2 size-[32px]" data-name="Brand Logos">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
            <path d={svgPaths.p2d87500} fill="var(--fill-0, #B4FF00)" id="Union" />
          </svg>
        </div>
        <div className="absolute content-stretch flex flex-col items-start left-[20px] top-[124px]" data-name="Menu">
          <div className="content-stretch flex items-start overflow-clip p-[8px] relative rounded-[6px] shrink-0" data-name="Buttons">
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Group">
              <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="System Icons">
                <div className="absolute inset-[8.33%]" data-name="Subtract">
                  <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <Buttons className="bg-[rgba(229,233,236,0.2)] content-stretch flex items-start p-[8px] relative rounded-[6px] shrink-0" state="Selected" type="Icon" />
          <div className="content-stretch flex items-start overflow-clip p-[8px] relative rounded-[6px] shrink-0" data-name="Buttons">
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Group">
              <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="System Icons">
                <div className="absolute inset-[8.33%]" data-name="Subtract">
                  <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-start overflow-clip p-[8px] relative rounded-[6px] shrink-0" data-name="Buttons">
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Group">
              <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="System Icons">
                <div className="absolute inset-[8.33%]" data-name="Subtract">
                  <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-start overflow-clip p-[8px] relative rounded-[6px] shrink-0" data-name="Buttons">
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Group">
              <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="System Icons">
                <div className="absolute inset-[8.33%]" data-name="Subtract">
                  <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-start overflow-clip p-[8px] relative rounded-[6px] shrink-0" data-name="Buttons">
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Group">
              <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="System Icons">
                <div className="absolute inset-[8.33%]" data-name="Subtract">
                  <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-start overflow-clip p-[8px] relative rounded-[6px] shrink-0" data-name="Buttons">
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Group">
              <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="System Icons">
                <div className="absolute inset-[8.33%]" data-name="Subtract">
                  <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-start overflow-clip p-[8px] relative rounded-[6px] shrink-0" data-name="Buttons">
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Group">
              <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="System Icons">
                <div className="absolute inset-[8.33%]" data-name="Subtract">
                  <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col items-start justify-center left-[20px] p-[8px] rounded-[6px] top-[28px]" data-name="Buttons">
          <div className="content-stretch flex gap-[16px] items-center leading-[0] relative shrink-0" data-name="Content">
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Group">
              <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="System Icons">
                <div className="absolute inset-[8.33%]" data-name="Subtract">
                  <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-['Yettel_Sans_Beta:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[12px] text-[rgba(229,233,236,0.7)] tracking-[0.06px] whitespace-nowrap">
              <p className="leading-[1.3]">Label</p>
            </div>
          </div>
        </div>
        {showNotification && (
          <div className="absolute content-stretch flex flex-col items-start justify-center left-[20px] pl-[8px] pr-[18px] py-[8px] rounded-[6px] top-[68px] w-[40px]" data-name="Buttons">
            <div className="content-stretch flex gap-[16px] items-center leading-[0] relative shrink-0" data-name="Content">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Group">
                <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="System Icons">
                  <div className="absolute inset-[8.33%]" data-name="Subtract">
                    <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-['Yettel_Sans_Beta:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[12px] text-[rgba(229,233,236,0.7)] tracking-[0.06px] whitespace-nowrap">
                <p className="leading-[1.3]">Label</p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
  if (platform === "TV & Auto" && bar === "Side Nav_with profile" && type === "Collapsed" && background === "Transparent") {
    return (
      <div className={className || "h-[540px] relative w-[80px]"} data-name="Platform=TV & Auto, Bar=Side Nav_with profile, Type=Collapsed, Background=Transparent">
        <div className="-translate-x-1/2 absolute bottom-[32px] left-1/2 size-[32px]" data-name="Brand Logos">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
            <path d={svgPaths.p2d87500} fill="var(--fill-0, #B4FF00)" id="Union" />
          </svg>
        </div>
        <div className="absolute contents left-[20px] top-[164px]" data-name="Mask group">
          <div className="absolute content-stretch flex flex-col items-start left-[20px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[40px_299px] top-[164px]" data-name="Menu" style={{ maskImage: `url('${imgMenu1}')` }}>
            <div className="content-stretch flex items-start overflow-clip p-[8px] relative rounded-[6px] shrink-0" data-name="Buttons">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Group">
                <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="System Icons">
                  <div className="absolute inset-[8.33%]" data-name="Subtract">
                    <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <Buttons className="bg-[rgba(229,233,236,0.2)] content-stretch flex items-start p-[8px] relative rounded-[6px] shrink-0" state="Selected" type="Icon" />
            <div className="content-stretch flex items-start overflow-clip p-[8px] relative rounded-[6px] shrink-0" data-name="Buttons">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Group">
                <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="System Icons">
                  <div className="absolute inset-[8.33%]" data-name="Subtract">
                    <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex items-start overflow-clip p-[8px] relative rounded-[6px] shrink-0" data-name="Buttons">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Group">
                <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="System Icons">
                  <div className="absolute inset-[8.33%]" data-name="Subtract">
                    <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex items-start overflow-clip p-[8px] relative rounded-[6px] shrink-0" data-name="Buttons">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Group">
                <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="System Icons">
                  <div className="absolute inset-[8.33%]" data-name="Subtract">
                    <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex items-start overflow-clip p-[8px] relative rounded-[6px] shrink-0" data-name="Buttons">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Group">
                <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="System Icons">
                  <div className="absolute inset-[8.33%]" data-name="Subtract">
                    <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex items-start overflow-clip p-[8px] relative rounded-[6px] shrink-0" data-name="Buttons">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Group">
                <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="System Icons">
                  <div className="absolute inset-[8.33%]" data-name="Subtract">
                    <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex items-start overflow-clip p-[8px] relative rounded-[6px] shrink-0" data-name="Buttons">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Group">
                <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="System Icons">
                  <div className="absolute inset-[8.33%]" data-name="Subtract">
                    <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-[24px] size-[32px] top-[32px]" data-name="Avatars">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 88 88">
            <path clipRule="evenodd" d={svgPaths.p1958a480} fill="var(--fill-0, #E5E9EC)" fillOpacity="0.2" fillRule="evenodd" id="shape" />
          </svg>
          <div className="absolute inset-[18.18%_14.86%_0_14.86%]" data-name="Union">
            <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 61.8535 72">
              <path d={svgPaths.p2dfe470} fill="var(--fill-0, #E5E9EC)" fillOpacity="0.2" id="Union" />
            </svg>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col items-start justify-center left-[20px] p-[8px] rounded-[6px] top-[68px]" data-name="Buttons">
          <div className="content-stretch flex gap-[16px] items-center leading-[0] relative shrink-0" data-name="Content">
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Group">
              <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="System Icons">
                <div className="absolute inset-[8.33%]" data-name="Subtract">
                  <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-['Yettel_Sans_Beta:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[12px] text-[rgba(229,233,236,0.7)] tracking-[0.06px] whitespace-nowrap">
              <p className="leading-[1.3]">Label</p>
            </div>
          </div>
        </div>
        {showNotification && (
          <div className="absolute content-stretch flex flex-col items-start justify-center left-[20px] pl-[8px] pr-[18px] py-[8px] rounded-[6px] top-[108px] w-[40px]" data-name="Buttons">
            <div className="content-stretch flex gap-[16px] items-center leading-[0] relative shrink-0" data-name="Content">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Group">
                <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="System Icons">
                  <div className="absolute inset-[8.33%]" data-name="Subtract">
                    <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-['Yettel_Sans_Beta:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[12px] text-[rgba(229,233,236,0.7)] tracking-[0.06px] whitespace-nowrap">
                <p className="leading-[1.3]">Label</p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
  return (
    <div className={className || "h-[88px] relative"} data-name="Platform=Phone, Bar=Top Nav, Type=1st Level, Background=Gradient">
      <TopNavigation className="absolute h-[96px] left-0 right-0 top-0" />
      <div className="absolute content-stretch flex items-center justify-between left-0 px-[16px] py-[8px] top-0 w-[360px]">
        <div className="content-stretch flex h-[32px] items-center justify-center relative shrink-0 w-[109px]" data-name="Brand Logos">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Show new logo">
            <div className="h-[32px] relative shrink-0 w-[84.554px]" data-name="New logo">
              <div className="absolute inset-[29.31%_40.71%_27.77%_0]" data-name="Yettel_Wordmark_Blue">
                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 545.34 149.41">
                  <g id="Yettel_Wordmark_Blue">
                    <path d={svgPaths.p18bc5e00} fill="var(--fill-0, #B4FF00)" id="Vector" />
                    <path d={svgPaths.p12f80700} fill="var(--fill-0, #B4FF00)" id="Vector_2" />
                    <path d={svgPaths.p3c8a7900} fill="var(--fill-0, #B4FF00)" id="Vector_3" />
                    <path d={svgPaths.p32947f00} fill="var(--fill-0, #B4FF00)" id="Vector_4" />
                    <path d={svgPaths.p7165f00} fill="var(--fill-0, #B4FF00)" id="Vector_5" />
                    <path d={svgPaths.p18fee300} fill="var(--fill-0, #B4FF00)" id="Vector_6" />
                    <path d={svgPaths.p45da400} fill="var(--fill-0, #B4FF00)" id="Vector_7" />
                  </g>
                </svg>
              </div>
              <div className="absolute inset-[30.97%_6.3%_28.47%_68.59%]" data-name="Vector">
                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 230.94 141.18">
                  <path d={svgPaths.p3fde6550} fill="var(--fill-0, #B4FF00)" id="Vector" />
                </svg>
              </div>
              <div className="absolute inset-[0_0_0_62.15%]" data-name="Vector">
                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 348.12 348.12">
                  <path d={svgPaths.p1d271f80} fill="var(--fill-0, #B4FF00)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[16px] h-[32px] items-center justify-end relative shrink-0" data-name="right side">
          {showDefaultIcons && (
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Default icons">
              <SystemIcons className="relative shrink-0 size-[24px]" name="Cast" />
              <div className="relative shrink-0 size-[24px]" data-name="System Icons">
                <div className="absolute inset-[8.33%]" data-name="ico_search">
                  <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9999 19.9999">
                    <path d={svgPaths.p112fb6f0} fill="var(--fill-0, #E5E9EC)" id="ico_search" />
                  </svg>
                </div>
              </div>
              <div className="relative shrink-0 size-[32px]" data-name="Avatars">
                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 88 88">
                  <path clipRule="evenodd" d={svgPaths.p1958a480} fill="var(--fill-0, #E5E9EC)" fillOpacity="0.2" fillRule="evenodd" id="shape" />
                </svg>
                <div className="absolute inset-[18.18%_14.86%_0_14.86%]" data-name="Union">
                  <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 61.8535 72">
                    <path d={svgPaths.p2dfe470} fill="var(--fill-0, #E5E9EC)" fillOpacity="0.2" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
          )}
          {showWithBsckground && (
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="with bsckground">
              <div className="content-stretch flex gap-[26px] items-center relative shrink-0">
                <div className="content-stretch flex gap-[10px] items-center relative rounded-[24px] shrink-0">
                  <div className="absolute bg-[rgba(0,0,0,0.7)] content-stretch flex items-center justify-center left-[-8px] p-[8px] rounded-[40px] top-[-8px]" data-name="Circular">
                    <div className="relative shrink-0 size-[24px]" data-name="System Icons">
                      <div className="absolute inset-[8.33%]" data-name="Subtract">
                        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 size-[24px]" data-name="System Icons">
                    <div className="absolute inset-[12.5%_4.17%]" data-name="ico_cast">
                      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 22 18">
                        <path clipRule="evenodd" d={svgPaths.p17267680} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="ico_cast" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex gap-[10px] items-center relative rounded-[24px] shrink-0 size-[24px]">
                  <div className="absolute bg-[rgba(0,0,0,0.7)] content-stretch flex items-center justify-center left-[-8px] p-[8px] rounded-[40px] top-[-8px]" data-name="Circular">
                    <div className="relative shrink-0 size-[24px]" data-name="System Icons">
                      <div className="absolute inset-[8.33%]" data-name="Subtract">
                        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                          <path clipRule="evenodd" d={svgPaths.pd9f5ac0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Subtract" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 size-[24px]" data-name="System Icons">
                    <div className="absolute inset-[8.33%]" data-name="ico_search">
                      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9999 19.9999">
                        <path d={svgPaths.p112fb6f0} fill="var(--fill-0, #E5E9EC)" id="ico_search" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 size-[32px]" data-name="Avatars">
                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 88 88">
                  <path clipRule="evenodd" d={svgPaths.p1958a480} fill="var(--fill-0, #E5E9EC)" fillOpacity="0.2" fillRule="evenodd" id="shape" />
                </svg>
                <div className="absolute inset-[18.18%_14.86%_0_14.86%]" data-name="Union">
                  <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 61.8535 72">
                    <path d={svgPaths.p2dfe470} fill="var(--fill-0, #E5E9EC)" fillOpacity="0.2" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
type SeasonsTabsProps = {
  className?: string;
  state?: "Default" | "Focused" | "Selected";
  type?: "Single" | "Scroll Left" | "Scroll Right";
};

function SeasonsTabs({ className, state = "Default", type = "Single" }: SeasonsTabsProps) {
  const isScrollLeftAndDefault = type === "Scroll Left" && state === "Default";
  const isScrollLeftAndFocused = type === "Scroll Left" && state === "Focused";
  const isScrollLeftAndSelected = type === "Scroll Left" && state === "Selected";
  const isScrollRightAndDefault = type === "Scroll Right" && state === "Default";
  const isScrollRightAndFocused = type === "Scroll Right" && state === "Focused";
  const isScrollRightAndSelected = type === "Scroll Right" && state === "Selected";
  const isSingleAndDefault = type === "Single" && state === "Default";
  const isSingleAndFocused = type === "Single" && state === "Focused";
  const isSingleAndSelected = type === "Single" && state === "Selected";
  return (
    <div className={className || `content-stretch flex items-center justify-center relative rounded-[6px] ${isScrollLeftAndSelected || isScrollRightAndSelected ? "bg-[rgba(229,233,236,0.2)] flex-col px-[12px] py-[8px]" : isScrollLeftAndFocused || isScrollRightAndFocused ? "bg-[#b4ff00] flex-col px-[12px] py-[8px]" : isScrollLeftAndDefault || isScrollRightAndDefault ? "flex-col px-[12px] py-[8px]" : isSingleAndSelected ? "bg-[rgba(229,233,236,0.2)] p-[8px] w-[40px]" : isSingleAndFocused ? "bg-[#b4ff00] p-[8px] w-[40px]" : "p-[8px] w-[40px]"}`}>
      {(isScrollLeftAndFocused || isScrollLeftAndSelected || isScrollRightAndFocused || isScrollRightAndSelected) && <SystemIcons className="relative shrink-0 size-[24px]" name={isScrollRightAndFocused || isScrollRightAndSelected ? "Arrow Right Small" : "Arrow Left Small"} />}
      {(isSingleAndDefault || isSingleAndFocused || isSingleAndSelected) && (
        <div className={`flex flex-col font-["Yettel_Sans_Beta:Bold",sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center whitespace-nowrap ${isSingleAndFocused || isSingleAndSelected ? "text-[#e5e9ec]" : "text-[rgba(229,233,236,0.7)]"}`}>
          <p className="leading-[1.5]">1</p>
        </div>
      )}
      {(isScrollLeftAndDefault || isScrollRightAndDefault) && (
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] opacity-70 place-items-start relative shrink-0" data-name="Group">
          <div className="col-1 ml-0 mt-0 relative row-1 size-[24px]" data-name="System Icons">
            <div className={`absolute ${isScrollRightAndDefault ? "inset-[29.17%_37.5%_29.17%_45.83%]" : "inset-[29.17%_45.83%_29.17%_37.5%]"}`}>
              <div className="absolute inset-[-10%_-25%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.00004 12.0001">
                  <path d={isScrollRightAndDefault ? svgPaths.p543e880 : "M5 1.00004L1 6.00004L5 11"} id="Vector 89" stroke="var(--stroke-0, #E5E9EC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
type QualifierTypeProps = {
  className?: string;
  feature?: "Player" | "Card";
  name?: "Qualifier" | "Dolby" | "IMDb" | "Recordings" | "Multiple Recordings";
  state?: "Ongoing" | "Recorded" | "Scheduled" | "None" | "Protected" | "Error" | "Ongoing_white";
  type?: "Label" | "Icon" | "Qualifier Type_X?";
};

function QualifierType({ className, feature = "Player", name = "Qualifier", state = "None", type = "Label" }: QualifierTypeProps) {
  if (type === "Icon" && name === "IMDb" && state === "None" && feature === "Player") {
    return (
      <div className={className || "h-[20px] relative w-[21px]"} data-name="Type=Icon, Name=IMDb, State=None, Feature=Player">
        <div className="absolute bottom-0 left-0 top-0 w-[21px]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 21 20">
            <path d={svgPaths.p17efc2b0} fill="var(--fill-0, #F6C700)" id="Vector" />
          </svg>
        </div>
      </div>
    );
  }
  if (type === "Icon" && name === "Recordings" && state === "Scheduled" && feature === "Player") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Type=Icon, Name=Recordings, State=Scheduled, Feature=Player">
        <div className="absolute inset-[8.33%]" data-name="Outlined">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p196c6080} fill="var(--fill-0, #E5E9EC)" id="Outlined" />
          </svg>
        </div>
      </div>
    );
  }
  if (type === "Icon" && name === "Recordings" && state === "Ongoing" && feature === "Player") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Type=Icon, Name=Recordings, State=Ongoing, Feature=Player">
        <div className="absolute inset-[8.33%]" data-name="Ellipse">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <circle cx="10" cy="10" fill="var(--fill-0, #EEEEEE)" id="Ellipse" r="10" />
          </svg>
        </div>
        <div className="absolute inset-[8.33%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p3fceaf00} fill="var(--fill-0, #EC001D)" id="Subtract" />
          </svg>
        </div>
      </div>
    );
  }
  if (type === "Icon" && name === "Recordings" && state === "Ongoing_white" && feature === "Player") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Type=Icon, Name=Recordings, State=Ongoing_white, Feature=Player">
        <div className="absolute inset-[8.33%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p3fceaf00} fill="var(--fill-0, #E5E9EC)" id="Subtract" />
          </svg>
        </div>
      </div>
    );
  }
  if (type === "Icon" && name === "Recordings" && state === "Recorded" && feature === "Player") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Type=Icon, Name=Recordings, State=Recorded, Feature=Player">
        <div className="absolute inset-[8.33%_0_0_8.33%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 21.9999 21.9999">
            <path d={svgPaths.p37b5fe80} fill="var(--fill-0, #E5E9EC)" id="Subtract" />
          </svg>
        </div>
      </div>
    );
  }
  if (type === "Icon" && name === "Multiple Recordings" && state === "Scheduled" && feature === "Player") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Type=Icon, Name=Multiple Recordings, State=Scheduled, Feature=Player">
        <div className="absolute inset-[8.33%_-8.33%]" data-name="Outlined">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28 20">
            <g id="Outlined">
              <path d={svgPaths.p557e700} fill="var(--fill-0, #E5E9EC)" id="Union" />
              <circle cx="14" cy="10" id="Ellipse" r="9.25" stroke="var(--stroke-0, #E5E9EC)" strokeWidth="1.5" />
              <path d={svgPaths.p35b63a00} fill="var(--fill-0, #E5E9EC)" id="R" />
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (type === "Icon" && name === "Multiple Recordings" && state === "Ongoing" && feature === "Player") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Type=Icon, Name=Multiple Recordings, State=Ongoing, Feature=Player">
        <div className="absolute inset-[8.33%]" data-name="Ellipse">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <circle cx="10" cy="10" fill="var(--fill-0, #EEEEEE)" id="Ellipse" r="10" />
          </svg>
        </div>
        <div className="absolute inset-[8.33%_-8.33%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28 20">
            <path d={svgPaths.p3d30fe80} fill="var(--fill-0, #EC001D)" id="Subtract" />
          </svg>
        </div>
      </div>
    );
  }
  if (type === "Icon" && name === "Multiple Recordings" && state === "Ongoing_white" && feature === "Player") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Type=Icon, Name=Multiple Recordings, State=Ongoing_white, Feature=Player">
        <div className="absolute inset-[8.33%_-8.33%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28 20">
            <path d={svgPaths.p3d30fe80} fill="var(--fill-0, #E5E9EC)" id="Subtract" />
          </svg>
        </div>
      </div>
    );
  }
  if (type === "Icon" && name === "Multiple Recordings" && state === "Recorded" && feature === "Player") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Type=Icon, Name=Multiple Recordings, State=Recorded, Feature=Player">
        <div className="absolute inset-[4.17%_-8.33%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28 21.9999">
            <path d={svgPaths.p37ac91f0} fill="var(--fill-0, #E5E9EC)" id="Subtract" />
          </svg>
        </div>
      </div>
    );
  }
  if (type === "Icon" && name === "Dolby" && state === "None" && feature === "Player") {
    return (
      <div className={className || "h-[20px] relative w-[30px]"} data-name="Type=Icon, Name=Dolby, State=None, Feature=Player">
        <div className="absolute inset-[0_2.94%]" data-name="ico_dolby">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 28.2353 20">
            <path clipRule="evenodd" d={svgPaths.p2ae66300} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="ico_dolby" />
          </svg>
        </div>
      </div>
    );
  }
  if (type === "Icon" && name === "Recordings" && state === "Protected" && feature === "Player") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Type=Icon, Name=Recordings, State=Protected, Feature=Player">
        <div className="absolute h-[22px] left-[2.73px] top-px w-[18.548px]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 18.5479 21.9998">
            <path d={svgPaths.p2cab7371} fill="var(--fill-0, #EEEEEE)" id="Subtract" />
          </svg>
        </div>
      </div>
    );
  }
  if (type === "Icon" && name === "Multiple Recordings" && state === "Scheduled" && feature === "Card") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Type=Icon, Name=Multiple Recordings, State=Scheduled, Feature=Card">
        <div className="absolute inset-[15.68%_4.17%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 22 16.4722">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.p21897200} fill="#E5E9EC" fillRule="evenodd" />
              <path d={svgPaths.p251d680} fill="#E5E9EC" />
              <path d={svgPaths.p253df580} fill="var(--fill-0, #E5E9EC)" />
              <path d={svgPaths.p2ff37600} fill="var(--fill-0, #E5E9EC)" />
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (type === "Icon" && name === "Multiple Recordings" && state === "Ongoing" && feature === "Card") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Type=Icon, Name=Multiple Recordings, State=Ongoing, Feature=Card">
        <div className="absolute inset-[15.67%_4.17%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 22 16.4766">
            <path d={svgPaths.p2e68e480} fill="var(--fill-0, #EC001D)" id="Subtract" />
          </svg>
        </div>
        <div className="absolute inset-[33.33%_35.76%_33.33%_37.5%]" data-name="R">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 6.41808 8">
            <path d={svgPaths.p2a945d80} fill="var(--fill-0, #E5E9EC)" id="R" />
          </svg>
        </div>
      </div>
    );
  }
  if (type === "Icon" && name === "Multiple Recordings" && state === "Ongoing_white" && feature === "Card") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Type=Icon, Name=Multiple Recordings, State=Ongoing_white, Feature=Card">
        <div className="absolute inset-[15.67%_4.17%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 22 16.4766">
            <path d={svgPaths.p324eb370} fill="var(--fill-0, #E5E9EC)" id="Subtract" />
          </svg>
        </div>
      </div>
    );
  }
  if (type === "Icon" && name === "Multiple Recordings" && state === "Recorded" && feature === "Card") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Type=Icon, Name=Multiple Recordings, State=Recorded, Feature=Card">
        <div className="absolute inset-[15.68%_0_0_4.17%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 23 20.2361">
            <g id="Union">
              <path d={svgPaths.p253df580} fill="var(--fill-0, #E5E9EC)" />
              <path d={svgPaths.p53eac70} fill="var(--fill-0, #E5E9EC)" />
              <path d={svgPaths.p270a4a00} fill="var(--fill-0, #E5E9EC)" />
              <path clipRule="evenodd" d={svgPaths.pafb6000} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" />
              <path d={svgPaths.p30ad4f00} fill="var(--fill-0, #E5E9EC)" />
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (type === "Icon" && name === "Multiple Recordings" && state === "Protected" && feature === "Card") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Type=Icon, Name=Multiple Recordings, State=Protected, Feature=Card">
        <div className="absolute inset-[10.46%_1.87%_8.33%_1.88%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 23.0995 19.4889">
            <g id="Union">
              <path d={svgPaths.p354d8400} fill="var(--fill-0, #E5E9EC)" />
              <path clipRule="evenodd" d={svgPaths.p1db60eb0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" />
              <path d={svgPaths.p17d1e500} fill="var(--fill-0, #E5E9EC)" />
              <path d={svgPaths.p1f5d2780} fill="var(--fill-0, #E5E9EC)" />
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (type === "Icon" && name === "Multiple Recordings" && state === "Error" && feature === "Card") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Type=Icon, Name=Multiple Recordings, State=Error, Feature=Card">
        <div className="absolute inset-[15.68%_0_4.17%_4.17%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 23 19.2361">
            <g id="Union">
              <path d={svgPaths.p253df580} fill="var(--fill-0, #E5E9EC)" />
              <path d={svgPaths.p16da4f00} fill="var(--fill-0, #E5E9EC)" />
              <path d={svgPaths.pb8a8340} fill="var(--fill-0, #E5E9EC)" />
              <path clipRule="evenodd" d={svgPaths.p3e279b80} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p2a844c00} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (type === "Qualifier Type_X?" && name === "Recordings" && state === "Scheduled" && feature === "Card") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Type=Qualifier Type_X?, Name=Recordings, State=Scheduled, Feature=Card">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.p1be51500} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" />
              <path d={svgPaths.p255130c0} fill="var(--fill-0, #E5E9EC)" />
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (type === "Qualifier Type_X?" && name === "Recordings" && state === "Ongoing" && feature === "Card") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Type=Qualifier Type_X?, Name=Recordings, State=Ongoing, Feature=Card">
        <div className="absolute inset-[16.67%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path d={svgPaths.p29518480} fill="var(--fill-0, #EC001D)" id="Subtract" />
          </svg>
        </div>
        <div className="absolute inset-[33.33%_35.76%_33.33%_37.5%]" data-name="R">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 6.41808 8">
            <path d={svgPaths.p2a945d80} fill="var(--fill-0, #E5E9EC)" id="R" />
          </svg>
        </div>
      </div>
    );
  }
  if (type === "Qualifier Type_X?" && name === "Recordings" && state === "Ongoing_white" && feature === "Card") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Type=Qualifier Type_X?, Name=Recordings, State=Ongoing_white, Feature=Card">
        <div className="absolute inset-[16.67%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <path d={svgPaths.p3d5ecb00} fill="var(--fill-0, #E5E9EC)" id="Subtract" />
          </svg>
        </div>
      </div>
    );
  }
  if (type === "Qualifier Type_X?" && name === "Recordings" && state === "Recorded" && feature === "Card") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Type=Qualifier Type_X?, Name=Recordings, State=Recorded, Feature=Card">
        <div className="absolute inset-[16.67%_8.33%_8.33%_16.67%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <g id="Subtract">
              <path d={svgPaths.pe528f80} fill="var(--fill-0, #E5E9EC)" />
              <path clipRule="evenodd" d={svgPaths.p10248f00} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" />
              <path d={svgPaths.p1737c570} fill="var(--fill-0, #E5E9EC)" />
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (type === "Qualifier Type_X?" && name === "Recordings" && state === "Protected" && feature === "Card") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Type=Qualifier Type_X?, Name=Recordings, State=Protected, Feature=Card">
        <div className="absolute inset-[12.5%_18.38%]" data-name="Subtract">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 15.1757 18">
            <g id="Subtract">
              <path d={svgPaths.p1ac9ec00} fill="var(--fill-0, #E5E9EC)" />
              <path clipRule="evenodd" d={svgPaths.p2c422680} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    );
  }
  if (type === "Qualifier Type_X?" && name === "Recordings" && state === "Error" && feature === "Card") {
    return (
      <div className={className || "relative size-[24px]"} data-name="Type=Qualifier Type_X?, Name=Recordings, State=Error, Feature=Card">
        <div className="absolute inset-[13.91%_10.78%_11.09%_13.94%]" data-name="Union">
          <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0671 18">
            <g id="Union">
              <path d={svgPaths.p222bc570} fill="var(--fill-0, #E5E9EC)" />
              <path clipRule="evenodd" d={svgPaths.p1c406800} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p5cd64d0} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    );
  }
  return (
    <div className={className || "content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[4px]"} data-name="Type=Label, Name=Qualifier, State=None, Feature=Player">
      <div className="absolute inset-0 opacity-50 rounded-[4px]" data-name="Background">
        <div aria-hidden="true" className="absolute border border-[#eee] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[#eee] text-[12px] text-center">QT</p>
    </div>
  );
}

function MainScreen({ className }: { className?: string }) {
  return (
    <div className={className || "relative"} data-name="Main screen">
      <div className="absolute inset-[33.33%_0_0_0]" data-name="Gradient ↑" style={{ backgroundImage: "linear-gradient(1.42109e-13deg, rgb(0, 35, 64) 0%, rgba(0, 35, 64, 0.992) 6.6667%, rgba(0, 35, 64, 0.965) 13.333%, rgba(0, 35, 64, 0.918) 20%, rgba(0, 35, 64, 0.855) 26.667%, rgba(0, 35, 64, 0.77) 33.333%, rgba(0, 35, 64, 0.667) 40%, rgba(0, 35, 64, 0.557) 46.667%, rgba(0, 35, 64, 0.443) 53.333%, rgba(0, 35, 64, 0.333) 60%, rgba(0, 35, 64, 0.23) 66.667%, rgba(0, 35, 64, 0.145) 73.333%, rgba(0, 35, 64, 0.082) 80%, rgba(0, 35, 64, 0.035) 86.667%, rgba(0, 35, 64, 0.008) 93.333%, rgba(0, 35, 64, 0) 100%)" }} />
      <div className="absolute bottom-0 left-0 right-1/4 top-0" data-name="Gradient →">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 720 540">
          <path d="M0 0H720V540H0V0Z" fill="url(#paint0_linear_2_123)" id="Gradient â" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2_123" x1="0" x2="720" y1="270" y2="270">
              <stop stopColor="#002340" />
              <stop offset="0.0666667" stopColor="#002340" stopOpacity="0.991353" />
              <stop offset="0.133333" stopColor="#002340" stopOpacity="0.96449" />
              <stop offset="0.2" stopColor="#002340" stopOpacity="0.91834" />
              <stop offset="0.266667" stopColor="#002340" stopOpacity="0.852589" />
              <stop offset="0.333333" stopColor="#002340" stopOpacity="0.768225" />
              <stop offset="0.4" stopColor="#002340" stopOpacity="0.668116" />
              <stop offset="0.466667" stopColor="#002340" stopOpacity="0.557309" />
              <stop offset="0.533333" stopColor="#002340" stopOpacity="0.442691" />
              <stop offset="0.6" stopColor="#002340" stopOpacity="0.331884" />
              <stop offset="0.666667" stopColor="#002340" stopOpacity="0.231775" />
              <stop offset="0.733333" stopColor="#002340" stopOpacity="0.147411" />
              <stop offset="0.8" stopColor="#002340" stopOpacity="0.0816599" />
              <stop offset="0.866667" stopColor="#002340" stopOpacity="0.03551" />
              <stop offset="0.933333" stopColor="#002340" stopOpacity="0.01" />
              <stop offset="1" stopColor="#002340" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default function Desktop({ className }: { className?: string }) {
  return (
    <div className={className || "bg-[#002340] content-stretch flex flex-col items-start relative"} data-name="Desktop">
      <div className="bg-[#002340] h-[468px] relative shrink-0 w-[1280px]" data-name="Cover">
        <div className="absolute contents inset-[0_0_-252px_0]" data-name="Background">
          <div className="absolute inset-[0_0_-252px_0]" data-name="Image">
            <div className="absolute contents left-[-48px] top-0">
              <div className="absolute inset-0" data-name="Background" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 35, 64, 0.7) 0%, rgba(0, 35, 64, 0.7) 100%), linear-gradient(90deg, rgb(196, 223, 234) 0%, rgb(196, 223, 234) 100%)" }} />
              <div className="absolute overflow-clip right-[264px] size-[144px] top-[192px]" data-name="Icon">
                <div className="absolute inset-[12.5%_4.17%]" data-name="Union">
                  <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 132 108">
                    <path d={svgPaths.p33e6b300} fill="var(--fill-0, #E5E9EC)" fillOpacity="0.2" id="Union" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <MainScreen className="absolute inset-[0_0_-252px_0]" />
        </div>
        <Navigation className="absolute h-[136px] left-0 right-0 top-0" platform="Desktop" type="Detail Page" />
        <div className="absolute bottom-[36px] content-stretch flex flex-col gap-[20px] items-start left-[72px] w-[520px]" data-name="Content Block">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Main info">
              <div className="content-stretch flex flex-col gap-[8.333px] h-[40px] items-start opacity-0 relative shrink-0" data-name="Provider_16;9">
                <div className="h-[40px] relative shrink-0 w-[71.111px]" data-name="Channel logos_16x9">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgChannelLogos16X9} />
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Info">
              <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.25] not-italic overflow-hidden relative shrink-0 text-[#e5e9ec] text-[32px] text-ellipsis tracking-[0.08px] w-full whitespace-pre-wrap">{`Very Long Content Title that Fits in Two Rows  `}</p>
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Metadata">
                <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 w-full" data-name="Marker + Qualifiers">
                  <div className="content-stretch flex gap-[10px] items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Marker">
                    <div className="absolute bg-[#c4dfea] inset-0 rounded-[4px]" data-name="Background" />
                    <div className="flex flex-col font-['Yettel_Sans_Beta:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#002340] text-[12px] whitespace-nowrap">
                      <p className="leading-[1.3]">Marker</p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0" data-name="Qualifiers">
                    <QualifierType className="content-stretch flex items-center justify-center px-[6px] py-[2px] relative rounded-[4px] shrink-0" />
                  </div>
                  <div className="content-stretch flex gap-[6px] items-start relative shrink-0" data-name="IMDb">
                    <QualifierType className="h-[20px] overflow-clip relative shrink-0 w-[21px]" name="IMDb" type="Icon" />
                    <div className="flex flex-col font-['Yettel_Sans_Beta:Regular',sans-serif] justify-center leading-[0] not-italic opacity-70 relative shrink-0 text-[#eee] text-[14px] tracking-[0.035px] whitespace-nowrap">
                      <p className="leading-[1.4]">0.0</p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex font-['Yettel_Sans_Beta:Regular',sans-serif] gap-[12px] items-center leading-[1.4] not-italic opacity-70 relative shrink-0 text-[#eee] text-[14px] tracking-[0.035px] w-full" data-name="Metadata">
                  <p className="relative shrink-0">Metadata</p>
                  <p className="relative shrink-0">Metadata</p>
                  <p className="relative shrink-0">Metadata</p>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Synopsis">
                <p className="font-['Yettel_Sans_Beta:Regular',sans-serif] h-[48px] leading-[1.5] not-italic overflow-hidden relative shrink-0 text-[#eee] text-[16px] text-ellipsis tracking-[0.08px] w-full whitespace-pre-wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Buttons">
            <div className="bg-[#b4ff00] content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[20px] shrink-0 w-[120px]" data-name="Buttons">
              <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#002340] text-[16px] text-center">Label</p>
            </div>
            <div className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[999999px] shrink-0 w-[120px]" data-name="Buttons">
              <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(229,233,236,0.5)] border-solid inset-0 pointer-events-none rounded-[999999px]" />
              <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#e5e9ec] text-[16px] text-center">Label</p>
            </div>
            <div className="content-stretch flex items-center justify-center px-[18px] py-[8px] relative rounded-[999999px] shrink-0 w-[120px]" data-name="Buttons">
              <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(229,233,236,0.5)] border-solid inset-0 pointer-events-none rounded-[999999px]" />
              <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#e5e9ec] text-[16px] text-center">Label</p>
            </div>
            <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[999999px] shrink-0" data-name="Buttons">
              <div aria-hidden="true" className="absolute border-[1.5px] border-[rgba(229,233,236,0.5)] border-solid inset-0 pointer-events-none rounded-[999999px]" />
              <SystemIcons className="relative shrink-0 size-[24px]" name="Placeholder" />
            </div>
            <Buttons className="content-stretch flex items-center justify-center p-[8px] relative rounded-[999999px] shrink-0" type="Outlined" />
            <Buttons className="content-stretch flex items-center justify-center p-[8px] relative rounded-[999999px] shrink-0" type="Outlined" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip pb-[40px] px-[72px] relative shrink-0" data-name="Stripe">
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Header">
          <div className="content-stretch flex items-center relative shrink-0" data-name="Header">
            <div className="flex flex-col font-['Yettel_Sans_Beta:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#eee] text-[20px] tracking-[-0.3px] whitespace-nowrap">
              <p className="leading-[1.2]">{`Cast & Crew`}</p>
            </div>
            <div className="content-stretch flex items-center relative shrink-0" data-name="Arrow">
              <div className="content-stretch flex items-center relative shrink-0" data-name="Group">
                <div className="relative shrink-0 size-[24px]" data-name="System Icons">
                  <div className="absolute inset-[29.17%_37.5%_29.17%_45.83%]">
                    <div className="absolute inset-[-10%_-25%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.00004 12.0001">
                        <path d={svgPaths.p543e880} id="Vector 89" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-[1136px]" data-name="Cards">
          <div className="content-stretch flex items-start pr-[16px] relative self-stretch shrink-0" data-name="Group">
            <div className="content-stretch flex flex-col gap-[4px] items-start mr-[-16px] relative shrink-0" data-name="Cards">
              <div className="relative rounded-[999999px] shadow-[0px_8px_2px_0px_rgba(0,0,0,0),0px_5px_2px_0px_rgba(0,0,0,0.01),0px_3px_2px_0px_rgba(0,0,0,0.04),0px_1px_1px_0px_rgba(0,0,0,0.06),0px_0px_1px_0px_rgba(0,0,0,0.07),0px_0px_0px_0px_rgba(0,0,0,0.07)] shrink-0 size-[149px]" data-name="Card Cover">
                <div className="absolute inset-0 overflow-clip rounded-[999999px]" data-name="Image">
                  <div className="absolute inset-0" data-name="initials">
                    <div className="absolute inset-0 rounded-[60px]" data-name="Background" style={{ backgroundImage: "linear-gradient(90deg, rgba(229, 233, 236, 0.1) 0%, rgba(229, 233, 236, 0.1) 100%), linear-gradient(90deg, rgb(0, 35, 64) 0%, rgb(0, 35, 64) 100%)" }} />
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 p-[10px] top-1/2">
                      <div className="flex flex-col font-['Yettel_Sans_Beta:Bold',sans-serif] justify-center leading-[0] not-italic opacity-50 relative shrink-0 text-[#e5e9ec] text-[36px] text-center tracking-[0.09px] whitespace-nowrap">
                        <p className="leading-[1.25]">AB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute content-stretch flex inset-0 items-start overflow-clip rounded-[999999px]" data-name="Overlay">
                  <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="shape">
                    <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 149 149">
                      <circle cx="74.5" cy="74.5" fill="var(--fill-0, #002340)" fillOpacity="0.1" id="shape" r="74.5" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col h-[16px] items-start relative shrink-0 w-full" data-name="Card Data Under">
                <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.3] not-italic overflow-hidden relative shrink-0 text-[#eee] text-[12px] text-center text-ellipsis w-full whitespace-nowrap">Abigail Brown</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-start pr-[16px] relative self-stretch shrink-0" data-name="Group">
            <div className="content-stretch flex flex-col gap-[4px] items-start mr-[-16px] relative shrink-0" data-name="Cards">
              <div className="relative rounded-[999999px] shadow-[0px_8px_2px_0px_rgba(0,0,0,0),0px_5px_2px_0px_rgba(0,0,0,0.01),0px_3px_2px_0px_rgba(0,0,0,0.04),0px_1px_1px_0px_rgba(0,0,0,0.06),0px_0px_1px_0px_rgba(0,0,0,0.07),0px_0px_0px_0px_rgba(0,0,0,0.07)] shrink-0 size-[149px]" data-name="Card Cover">
                <div className="absolute inset-0 overflow-clip rounded-[999999px]" data-name="Image">
                  <div className="absolute inset-0" data-name="initials">
                    <div className="absolute inset-0 rounded-[60px]" data-name="Background" style={{ backgroundImage: "linear-gradient(90deg, rgba(229, 233, 236, 0.1) 0%, rgba(229, 233, 236, 0.1) 100%), linear-gradient(90deg, rgb(0, 35, 64) 0%, rgb(0, 35, 64) 100%)" }} />
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 p-[10px] top-1/2">
                      <div className="flex flex-col font-['Yettel_Sans_Beta:Bold',sans-serif] justify-center leading-[0] not-italic opacity-50 relative shrink-0 text-[#e5e9ec] text-[36px] text-center tracking-[0.09px] whitespace-nowrap">
                        <p className="leading-[1.25]">RE</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute content-stretch flex inset-0 items-start overflow-clip rounded-[999999px]" data-name="Overlay">
                  <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="shape">
                    <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 149 149">
                      <circle cx="74.5" cy="74.5" fill="var(--fill-0, #002340)" fillOpacity="0.1" id="shape" r="74.5" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col h-[16px] items-start relative shrink-0 w-full" data-name="Card Data Under">
                <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.3] not-italic overflow-hidden relative shrink-0 text-[#eee] text-[12px] text-center text-ellipsis w-full whitespace-nowrap">Robert Evans</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-start pr-[16px] relative self-stretch shrink-0" data-name="Group">
            <div className="content-stretch flex flex-col gap-[4px] items-start mr-[-16px] relative shrink-0" data-name="Cards">
              <div className="relative rounded-[999999px] shadow-[0px_8px_2px_0px_rgba(0,0,0,0),0px_5px_2px_0px_rgba(0,0,0,0.01),0px_3px_2px_0px_rgba(0,0,0,0.04),0px_1px_1px_0px_rgba(0,0,0,0.06),0px_0px_1px_0px_rgba(0,0,0,0.07),0px_0px_0px_0px_rgba(0,0,0,0.07)] shrink-0 size-[149px]" data-name="Card Cover">
                <div className="absolute inset-0 overflow-clip rounded-[999999px]" data-name="Image">
                  <div className="absolute inset-0" data-name="initials">
                    <div className="absolute inset-0 rounded-[60px]" data-name="Background" style={{ backgroundImage: "linear-gradient(90deg, rgba(229, 233, 236, 0.1) 0%, rgba(229, 233, 236, 0.1) 100%), linear-gradient(90deg, rgb(0, 35, 64) 0%, rgb(0, 35, 64) 100%)" }} />
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 p-[10px] top-1/2">
                      <div className="flex flex-col font-['Yettel_Sans_Beta:Bold',sans-serif] justify-center leading-[0] not-italic opacity-50 relative shrink-0 text-[#e5e9ec] text-[36px] text-center tracking-[0.09px] whitespace-nowrap">
                        <p className="leading-[1.25]">TF</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute content-stretch flex inset-0 items-start overflow-clip rounded-[999999px]" data-name="Overlay">
                  <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="shape">
                    <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 149 149">
                      <circle cx="74.5" cy="74.5" fill="var(--fill-0, #002340)" fillOpacity="0.1" id="shape" r="74.5" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col h-[16px] items-start relative shrink-0 w-full" data-name="Card Data Under">
                <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.3] not-italic overflow-hidden relative shrink-0 text-[#eee] text-[12px] text-center text-ellipsis w-full whitespace-nowrap">Thomas Fisher</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-start pr-[16px] relative self-stretch shrink-0" data-name="Group">
            <div className="content-stretch flex flex-col gap-[4px] items-start mr-[-16px] relative shrink-0" data-name="Cards">
              <div className="relative rounded-[999999px] shadow-[0px_8px_2px_0px_rgba(0,0,0,0),0px_5px_2px_0px_rgba(0,0,0,0.01),0px_3px_2px_0px_rgba(0,0,0,0.04),0px_1px_1px_0px_rgba(0,0,0,0.06),0px_0px_1px_0px_rgba(0,0,0,0.07),0px_0px_0px_0px_rgba(0,0,0,0.07)] shrink-0 size-[149px]" data-name="Card Cover">
                <div className="absolute inset-0 overflow-clip rounded-[999999px]" data-name="Image">
                  <div className="absolute inset-0" data-name="initials">
                    <div className="absolute inset-0 rounded-[60px]" data-name="Background" style={{ backgroundImage: "linear-gradient(90deg, rgba(229, 233, 236, 0.1) 0%, rgba(229, 233, 236, 0.1) 100%), linear-gradient(90deg, rgb(0, 35, 64) 0%, rgb(0, 35, 64) 100%)" }} />
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 p-[10px] top-1/2">
                      <div className="flex flex-col font-['Yettel_Sans_Beta:Bold',sans-serif] justify-center leading-[0] not-italic opacity-50 relative shrink-0 text-[#e5e9ec] text-[36px] text-center tracking-[0.09px] whitespace-nowrap">
                        <p className="leading-[1.25]">HI</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute content-stretch flex inset-0 items-start overflow-clip rounded-[999999px]" data-name="Overlay">
                  <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="shape">
                    <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 149 149">
                      <circle cx="74.5" cy="74.5" fill="var(--fill-0, #002340)" fillOpacity="0.1" id="shape" r="74.5" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col h-[16px] items-start relative shrink-0 w-full" data-name="Card Data Under">
                <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.3] not-italic overflow-hidden relative shrink-0 text-[#eee] text-[12px] text-center text-ellipsis w-full whitespace-nowrap">Hannah Irwin</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-start pr-[16px] relative self-stretch shrink-0" data-name="Group">
            <div className="content-stretch flex flex-col gap-[4px] items-start mr-[-16px] relative shrink-0" data-name="Cards">
              <div className="relative rounded-[999999px] shadow-[0px_8px_2px_0px_rgba(0,0,0,0),0px_5px_2px_0px_rgba(0,0,0,0.01),0px_3px_2px_0px_rgba(0,0,0,0.04),0px_1px_1px_0px_rgba(0,0,0,0.06),0px_0px_1px_0px_rgba(0,0,0,0.07),0px_0px_0px_0px_rgba(0,0,0,0.07)] shrink-0 size-[149px]" data-name="Card Cover">
                <div className="absolute inset-0 overflow-clip rounded-[999999px]" data-name="Image">
                  <div className="absolute inset-0" data-name="initials">
                    <div className="absolute inset-0 rounded-[60px]" data-name="Background" style={{ backgroundImage: "linear-gradient(90deg, rgba(229, 233, 236, 0.1) 0%, rgba(229, 233, 236, 0.1) 100%), linear-gradient(90deg, rgb(0, 35, 64) 0%, rgb(0, 35, 64) 100%)" }} />
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 p-[10px] top-1/2">
                      <div className="flex flex-col font-['Yettel_Sans_Beta:Bold',sans-serif] justify-center leading-[0] not-italic opacity-50 relative shrink-0 text-[#e5e9ec] text-[36px] text-center tracking-[0.09px] whitespace-nowrap">
                        <p className="leading-[1.25]">TY</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute content-stretch flex inset-0 items-start overflow-clip rounded-[999999px]" data-name="Overlay">
                  <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="shape">
                    <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 149 149">
                      <circle cx="74.5" cy="74.5" fill="var(--fill-0, #002340)" fillOpacity="0.1" id="shape" r="74.5" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col h-[16px] items-start relative shrink-0 w-full" data-name="Card Data Under">
                <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.3] not-italic overflow-hidden relative shrink-0 text-[#eee] text-[12px] text-center text-ellipsis w-full whitespace-nowrap">Tyler Young</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-start pr-[16px] relative self-stretch shrink-0" data-name="Group">
            <div className="content-stretch flex flex-col gap-[4px] items-start mr-[-16px] relative shrink-0" data-name="Cards">
              <div className="relative rounded-[999999px] shadow-[0px_8px_2px_0px_rgba(0,0,0,0),0px_5px_2px_0px_rgba(0,0,0,0.01),0px_3px_2px_0px_rgba(0,0,0,0.04),0px_1px_1px_0px_rgba(0,0,0,0.06),0px_0px_1px_0px_rgba(0,0,0,0.07),0px_0px_0px_0px_rgba(0,0,0,0.07)] shrink-0 size-[149px]" data-name="Card Cover">
                <div className="absolute inset-0 overflow-clip rounded-[999999px]" data-name="Image">
                  <div className="absolute inset-0" data-name="initials">
                    <div className="absolute inset-0 rounded-[60px]" data-name="Background" style={{ backgroundImage: "linear-gradient(90deg, rgba(229, 233, 236, 0.1) 0%, rgba(229, 233, 236, 0.1) 100%), linear-gradient(90deg, rgb(0, 35, 64) 0%, rgb(0, 35, 64) 100%)" }} />
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 p-[10px] top-1/2">
                      <div className="flex flex-col font-['Yettel_Sans_Beta:Bold',sans-serif] justify-center leading-[0] not-italic opacity-50 relative shrink-0 text-[#e5e9ec] text-[36px] text-center tracking-[0.09px] whitespace-nowrap">
                        <p className="leading-[1.25]">CZ</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute content-stretch flex inset-0 items-start overflow-clip rounded-[999999px]" data-name="Overlay">
                  <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="shape">
                    <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 149 149">
                      <circle cx="74.5" cy="74.5" fill="var(--fill-0, #002340)" fillOpacity="0.1" id="shape" r="74.5" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col h-[16px] items-start relative shrink-0 w-full" data-name="Card Data Under">
                <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.3] not-italic overflow-hidden relative shrink-0 text-[#eee] text-[12px] text-center text-ellipsis w-full whitespace-nowrap">Cameron Zimmerman</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-start pr-[16px] relative self-stretch shrink-0" data-name="Group">
            <div className="content-stretch flex flex-col gap-[4px] items-start mr-[-16px] relative shrink-0" data-name="Cards">
              <div className="relative rounded-[999999px] shadow-[0px_8px_2px_0px_rgba(0,0,0,0),0px_5px_2px_0px_rgba(0,0,0,0.01),0px_3px_2px_0px_rgba(0,0,0,0.04),0px_1px_1px_0px_rgba(0,0,0,0.06),0px_0px_1px_0px_rgba(0,0,0,0.07),0px_0px_0px_0px_rgba(0,0,0,0.07)] shrink-0 size-[149px]" data-name="Card Cover">
                <div className="absolute inset-0 overflow-clip rounded-[999999px]" data-name="Image">
                  <div className="absolute inset-0" data-name="initials">
                    <div className="absolute inset-0 rounded-[60px]" data-name="Background" style={{ backgroundImage: "linear-gradient(90deg, rgba(229, 233, 236, 0.1) 0%, rgba(229, 233, 236, 0.1) 100%), linear-gradient(90deg, rgb(0, 35, 64) 0%, rgb(0, 35, 64) 100%)" }} />
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 p-[10px] top-1/2">
                      <div className="flex flex-col font-['Yettel_Sans_Beta:Bold',sans-serif] justify-center leading-[0] not-italic opacity-50 relative shrink-0 text-[#e5e9ec] text-[36px] text-center tracking-[0.09px] whitespace-nowrap">
                        <p className="leading-[1.25]">OB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute content-stretch flex inset-0 items-start overflow-clip rounded-[999999px]" data-name="Overlay">
                  <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="shape">
                    <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 149 149">
                      <circle cx="74.5" cy="74.5" fill="var(--fill-0, #002340)" fillOpacity="0.1" id="shape" r="74.5" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col h-[16px] items-start relative shrink-0 w-full" data-name="Card Data Under">
                <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.3] not-italic overflow-hidden relative shrink-0 text-[#eee] text-[12px] text-center text-ellipsis w-full whitespace-nowrap">Olivia Barnes</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-start pr-[16px] relative self-stretch shrink-0" data-name="Group">
            <div className="content-stretch flex flex-col gap-[4px] items-start mr-[-16px] relative shrink-0" data-name="Cards">
              <div className="relative rounded-[999999px] shadow-[0px_8px_2px_0px_rgba(0,0,0,0),0px_5px_2px_0px_rgba(0,0,0,0.01),0px_3px_2px_0px_rgba(0,0,0,0.04),0px_1px_1px_0px_rgba(0,0,0,0.06),0px_0px_1px_0px_rgba(0,0,0,0.07),0px_0px_0px_0px_rgba(0,0,0,0.07)] shrink-0 size-[149px]" data-name="Card Cover">
                <div className="absolute inset-0 overflow-clip rounded-[999999px]" data-name="Image">
                  <div className="absolute inset-0" data-name="initials">
                    <div className="absolute inset-0 rounded-[60px]" data-name="Background" style={{ backgroundImage: "linear-gradient(90deg, rgba(229, 233, 236, 0.1) 0%, rgba(229, 233, 236, 0.1) 100%), linear-gradient(90deg, rgb(0, 35, 64) 0%, rgb(0, 35, 64) 100%)" }} />
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-1/2 p-[10px] top-1/2">
                      <div className="flex flex-col font-['Yettel_Sans_Beta:Bold',sans-serif] justify-center leading-[0] not-italic opacity-50 relative shrink-0 text-[#e5e9ec] text-[36px] text-center tracking-[0.09px] whitespace-nowrap">
                        <p className="leading-[1.25]">FB</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute content-stretch flex inset-0 items-start overflow-clip rounded-[999999px]" data-name="Overlay">
                  <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="shape">
                    <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 149 149">
                      <circle cx="74.5" cy="74.5" fill="var(--fill-0, #002340)" fillOpacity="0.1" id="shape" r="74.5" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col h-[16px] items-start relative shrink-0 w-full" data-name="Card Data Under">
                <p className="font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.3] not-italic overflow-hidden relative shrink-0 text-[#eee] text-[12px] text-center text-ellipsis w-full whitespace-nowrap">Frederick Owens</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip pb-[40px] px-[72px] relative shrink-0" data-name="Stripe">
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Season Tabs">
          <div className="content-stretch flex items-center relative shrink-0" data-name="Stripe Title/Default/Off/Off/None">
            <div className="flex flex-col font-['Yettel_Sans_Beta:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#eee] text-[20px] tracking-[-0.3px] whitespace-nowrap">
              <p className="leading-[1.2]">Seasons</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-center overflow-clip relative shrink-0" data-name="Seasons">
            <SeasonsTabs className="bg-[rgba(229,233,236,0.2)] content-stretch flex items-center justify-center p-[8px] relative rounded-[6px] shrink-0 w-[40px]" state="Selected" />
            <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[6px] shrink-0 w-[40px]" data-name="Seasons Tabs">
              <div className="flex flex-col font-['Yettel_Sans_Beta:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(229,233,236,0.7)] text-center whitespace-nowrap">
                <p className="leading-[1.5]">2</p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[6px] shrink-0 w-[40px]" data-name="Seasons Tabs">
              <div className="flex flex-col font-['Yettel_Sans_Beta:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(229,233,236,0.7)] text-center whitespace-nowrap">
                <p className="leading-[1.5]">3</p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[6px] shrink-0 w-[40px]" data-name="Seasons Tabs">
              <div className="flex flex-col font-['Yettel_Sans_Beta:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(229,233,236,0.7)] text-center whitespace-nowrap">
                <p className="leading-[1.5]">4</p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[6px] shrink-0 w-[40px]" data-name="Seasons Tabs">
              <div className="flex flex-col font-['Yettel_Sans_Beta:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(229,233,236,0.7)] text-center whitespace-nowrap">
                <p className="leading-[1.5]">5</p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[6px] shrink-0 w-[40px]" data-name="Seasons Tabs">
              <div className="flex flex-col font-['Yettel_Sans_Beta:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(229,233,236,0.7)] text-center whitespace-nowrap">
                <p className="leading-[1.5]">6</p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[6px] shrink-0 w-[40px]" data-name="Seasons Tabs">
              <div className="flex flex-col font-['Yettel_Sans_Beta:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(229,233,236,0.7)] text-center whitespace-nowrap">
                <p className="leading-[1.5]">7</p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[6px] shrink-0 w-[40px]" data-name="Seasons Tabs">
              <div className="flex flex-col font-['Yettel_Sans_Beta:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(229,233,236,0.7)] text-center whitespace-nowrap">
                <p className="leading-[1.5]">8</p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[6px] shrink-0 w-[40px]" data-name="Seasons Tabs">
              <div className="flex flex-col font-['Yettel_Sans_Beta:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(229,233,236,0.7)] text-center whitespace-nowrap">
                <p className="leading-[1.5]">9</p>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[6px] shrink-0 w-[40px]" data-name="Seasons Tabs">
              <div className="flex flex-col font-['Yettel_Sans_Beta:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(229,233,236,0.7)] text-center whitespace-nowrap">
                <p className="leading-[1.5]">10</p>
              </div>
            </div>
            <SeasonsTabs className="content-stretch flex flex-col items-center justify-center px-[12px] py-[8px] relative rounded-[6px] shrink-0" type="Scroll Right" />
          </div>
        </div>
        <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-[1136px]" data-name="Cards">
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Cards">
            <div className="h-[153px] relative shadow-[0px_67px_19px_0px_rgba(0,0,0,0),0px_43px_17px_0px_rgba(0,0,0,0.01),0px_24px_14px_0px_rgba(0,0,0,0.04),0px_11px_11px_0px_rgba(0,0,0,0.06),0px_3px_6px_0px_rgba(0,0,0,0.07),0px_0px_0px_0px_rgba(0,0,0,0.07)] shrink-0 w-[272px]" data-name="Card Cover">
              <div className="absolute content-stretch flex inset-[-16px_-14.19px_0_-14.19px] items-center justify-center overflow-clip rounded-[9.208px]" data-name="Image">
                <div className="flex-[1_0_0] h-full min-h-px min-w-px" data-name="Background" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 35, 64, 0.7) 0%, rgba(0, 35, 64, 0.7) 100%), linear-gradient(90deg, rgb(196, 223, 234) 0%, rgb(196, 223, 234) 100%)" }} />
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[55.245px] top-1/2" data-name="Icon">
                  <div className="absolute inset-[12.5%_4.17%]" data-name="Union">
                    <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 50.6416 41.4336">
                      <path d={svgPaths.p2cb77700} fill="var(--fill-0, #E5E9EC)" fillOpacity="0.2" id="Union" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute inset-[-16px_-14.38px_0_-14px] overflow-clip rounded-[9.208px]" data-name="Card Data On">
                <div className="absolute bottom-0 h-[82.868px] left-0 opacity-50 right-0" data-name="gradient bottom" style={{ backgroundImage: "linear-gradient(2.27374e-13deg, rgb(0, 35, 64) 0%, rgba(0, 35, 64, 0.992) 6.6667%, rgba(0, 35, 64, 0.965) 13.333%, rgba(0, 35, 64, 0.918) 20%, rgba(0, 35, 64, 0.855) 26.667%, rgba(0, 35, 64, 0.77) 33.333%, rgba(0, 35, 64, 0.667) 40%, rgba(0, 35, 64, 0.557) 46.667%, rgba(0, 35, 64, 0.443) 53.333%, rgba(0, 35, 64, 0.333) 60%, rgba(0, 35, 64, 0.23) 66.667%, rgba(0, 35, 64, 0.145) 73.333%, rgba(0, 35, 64, 0.082) 80%, rgba(0, 35, 64, 0.035) 86.667%, rgba(0, 35, 64, 0.008) 93.333%, rgba(0, 35, 64, 0) 100%)" }} />
                <div className="absolute bottom-[9.21px] content-stretch flex flex-col gap-[6.906px] items-start justify-end left-[9.21px] right-[9.21px]" data-name="Marker + Progress">
                  <div className="content-stretch flex gap-[9.208px] items-end relative shrink-0" data-name="Marker + Ico">
                    <div className="content-stretch flex gap-[11.509px] items-start px-[6.906px] py-[2.302px] relative rounded-[4.604px] shrink-0" data-name="Marker">
                      <div className="absolute bg-[#c4dfea] inset-0 rounded-[4.604px]" data-name="Background" />
                      <div className="flex flex-col font-['Yettel_Sans_Beta:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#002340] text-[13.81px] whitespace-nowrap">
                        <p className="leading-[1.3]">Marker</p>
                      </div>
                    </div>
                  </div>
                  <div className="h-[4.604px] relative shrink-0 w-full" data-name="Liniar">
                    <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 281.585 4.60377">
                      <path clipRule="evenodd" d={svgPaths.pf2b2100} fill="var(--fill-0, #EEEEEE)" fillRule="evenodd" id="shape" opacity="0.3" />
                    </svg>
                    <div className="absolute bg-[#e5e9ec] bottom-0 left-0 right-3/4 rounded-[2px] top-0" data-name="indicator" />
                  </div>
                </div>
                <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center left-[18.42px] right-[18.42px] top-[calc(50%-2.3px)]" data-name="Text+icon" />
              </div>
              <div className="absolute content-stretch flex inset-[-16px_-14.19px_0_-14.19px] items-start overflow-clip rounded-[9.208px]" data-name="Overlay">
                <div className="bg-[rgba(0,35,64,0.1)] flex-[1_0_0] h-full min-h-px min-w-px" data-name="shape" />
              </div>
              <div className="absolute content-stretch flex inset-[-16px_-14.19px_0_-14.19px] items-start overflow-clip rounded-[9.208px]" data-name="Focus Border">
                <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[9.208px]" data-name="shape">
                  <div aria-hidden="true" className="absolute border-[#fafafa] border-[2.302px] border-solid inset-0 pointer-events-none rounded-[9.208px]" />
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Card Data Under">
              <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Content Titles">
                <p className="flex-[1_0_0] font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.3] min-h-px min-w-px not-italic overflow-hidden relative text-[#eee] text-[12px] text-ellipsis whitespace-nowrap">Content Title</p>
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="System Icons">
                  <div className="absolute inset-[8.33%]" data-name="Union">
                    <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
                      <path clipRule="evenodd" d={svgPaths.p1fbab640} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Union" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex font-['Yettel_Sans_Beta:Regular',sans-serif] gap-[8px] items-start leading-[1.3] not-italic opacity-70 relative shrink-0 text-[#eee] text-[12px] tracking-[0.06px] w-full" data-name="Metadata">
                <p className="relative shrink-0">Date, 00:00 - 00:00</p>
                <p className="relative shrink-0">0h 00m</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Cards">
            <div className="h-[153px] relative rounded-[8px] shadow-[0px_8px_2px_0px_rgba(0,0,0,0),0px_5px_2px_0px_rgba(0,0,0,0.01),0px_3px_2px_0px_rgba(0,0,0,0.04),0px_1px_1px_0px_rgba(0,0,0,0.06),0px_0px_1px_0px_rgba(0,0,0,0.07),0px_0px_0px_0px_rgba(0,0,0,0.07)] shrink-0 w-[272px]" data-name="Card Cover">
              <div className="absolute content-stretch flex inset-0 items-center justify-center overflow-clip rounded-[8px]" data-name="Image">
                <div className="flex-[1_0_0] h-full min-h-px min-w-px" data-name="Background" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 35, 64, 0.7) 0%, rgba(0, 35, 64, 0.7) 100%), linear-gradient(90deg, rgb(196, 223, 234) 0%, rgb(196, 223, 234) 100%)" }} />
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[48px] top-1/2" data-name="Icon">
                  <div className="absolute inset-[12.5%_4.17%]" data-name="Union">
                    <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 44 36">
                      <path d={svgPaths.p3d7d5280} fill="var(--fill-0, #E5E9EC)" fillOpacity="0.2" id="Union" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute content-stretch flex inset-0 items-start overflow-clip rounded-[8px]" data-name="Overlay">
                <div className="bg-[rgba(0,35,64,0.1)] flex-[1_0_0] h-full min-h-px min-w-px" data-name="shape" />
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Card Data Under">
              <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Content Titles">
                <p className="flex-[1_0_0] font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.3] min-h-px min-w-px not-italic overflow-hidden relative text-[#eee] text-[12px] text-ellipsis whitespace-nowrap">Content Title</p>
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="System Icons">
                  <div className="absolute inset-[8.33%]" data-name="Union">
                    <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
                      <path clipRule="evenodd" d={svgPaths.p1fbab640} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Union" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex font-['Yettel_Sans_Beta:Regular',sans-serif] gap-[8px] items-start leading-[1.3] not-italic opacity-70 relative shrink-0 text-[#eee] text-[12px] tracking-[0.06px] w-full" data-name="Metadata">
                <p className="relative shrink-0">Date, 00:00 - 00:00</p>
                <p className="relative shrink-0">0h 00m</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Cards">
            <div className="h-[153px] relative rounded-[8px] shadow-[0px_8px_2px_0px_rgba(0,0,0,0),0px_5px_2px_0px_rgba(0,0,0,0.01),0px_3px_2px_0px_rgba(0,0,0,0.04),0px_1px_1px_0px_rgba(0,0,0,0.06),0px_0px_1px_0px_rgba(0,0,0,0.07),0px_0px_0px_0px_rgba(0,0,0,0.07)] shrink-0 w-[272px]" data-name="Card Cover">
              <div className="absolute content-stretch flex inset-0 items-center justify-center overflow-clip rounded-[8px]" data-name="Image">
                <div className="flex-[1_0_0] h-full min-h-px min-w-px" data-name="Background" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 35, 64, 0.7) 0%, rgba(0, 35, 64, 0.7) 100%), linear-gradient(90deg, rgb(196, 223, 234) 0%, rgb(196, 223, 234) 100%)" }} />
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[48px] top-1/2" data-name="Icon">
                  <div className="absolute inset-[12.5%_4.17%]" data-name="Union">
                    <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 44 36">
                      <path d={svgPaths.p3d7d5280} fill="var(--fill-0, #E5E9EC)" fillOpacity="0.2" id="Union" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute content-stretch flex inset-0 items-start overflow-clip rounded-[8px]" data-name="Overlay">
                <div className="bg-[rgba(0,35,64,0.1)] flex-[1_0_0] h-full min-h-px min-w-px" data-name="shape" />
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Card Data Under">
              <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Content Titles">
                <p className="flex-[1_0_0] font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.3] min-h-px min-w-px not-italic overflow-hidden relative text-[#eee] text-[12px] text-ellipsis whitespace-nowrap">Content Title</p>
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="System Icons">
                  <div className="absolute inset-[8.33%]" data-name="Union">
                    <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
                      <path clipRule="evenodd" d={svgPaths.p1fbab640} fill="var(--fill-0, #E5E9EC)" fillRule="evenodd" id="Union" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex font-['Yettel_Sans_Beta:Regular',sans-serif] gap-[8px] items-start leading-[1.3] not-italic opacity-70 relative shrink-0 text-[#eee] text-[12px] tracking-[0.06px] w-full" data-name="Metadata">
                <p className="relative shrink-0">Date, 00:00 - 00:00</p>
                <p className="relative shrink-0">0h 00m</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Cards">
            <div className="h-[153px] relative rounded-[8px] shadow-[0px_8px_2px_0px_rgba(0,0,0,0),0px_5px_2px_0px_rgba(0,0,0,0.01),0px_3px_2px_0px_rgba(0,0,0,0.04),0px_1px_1px_0px_rgba(0,0,0,0.06),0px_0px_1px_0px_rgba(0,0,0,0.07),0px_0px_0px_0px_rgba(0,0,0,0.07)] shrink-0 w-[272px]" data-name="Card Cover">
              <div className="absolute content-stretch flex inset-0 items-center justify-center overflow-clip rounded-[8px]" data-name="Image">
                <div className="flex-[1_0_0] h-full min-h-px min-w-px" data-name="Background" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 35, 64, 0.7) 0%, rgba(0, 35, 64, 0.7) 100%), linear-gradient(90deg, rgb(196, 223, 234) 0%, rgb(196, 223, 234) 100%)" }} />
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[48px] top-1/2" data-name="Icon">
                  <div className="absolute inset-[12.5%_4.17%]" data-name="Union">
                    <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 44 36">
                      <path d={svgPaths.p3d7d5280} fill="var(--fill-0, #E5E9EC)" fillOpacity="0.2" id="Union" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute content-stretch flex inset-0 items-start overflow-clip rounded-[8px]" data-name="Overlay">
                <div className="bg-[rgba(0,35,64,0.1)] flex-[1_0_0] h-full min-h-px min-w-px" data-name="shape" />
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Card Data Under">
              <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Content Titles">
                <p className="flex-[1_0_0] font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.3] min-h-px min-w-px not-italic overflow-hidden relative text-[#eee] text-[12px] text-ellipsis whitespace-nowrap">Content Title</p>
              </div>
              <div className="content-stretch flex font-['Yettel_Sans_Beta:Regular',sans-serif] gap-[8px] items-start leading-[1.3] not-italic opacity-70 relative shrink-0 text-[#eee] text-[12px] tracking-[0.06px] w-full" data-name="Metadata">
                <p className="relative shrink-0">Date, 00:00 - 00:00</p>
                <p className="relative shrink-0">0h 00m</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Cards">
            <div className="h-[153px] relative rounded-[8px] shadow-[0px_8px_2px_0px_rgba(0,0,0,0),0px_5px_2px_0px_rgba(0,0,0,0.01),0px_3px_2px_0px_rgba(0,0,0,0.04),0px_1px_1px_0px_rgba(0,0,0,0.06),0px_0px_1px_0px_rgba(0,0,0,0.07),0px_0px_0px_0px_rgba(0,0,0,0.07)] shrink-0 w-[272px]" data-name="Card Cover">
              <div className="absolute content-stretch flex inset-0 items-center justify-center overflow-clip rounded-[8px]" data-name="Image">
                <div className="flex-[1_0_0] h-full min-h-px min-w-px" data-name="Background" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 35, 64, 0.7) 0%, rgba(0, 35, 64, 0.7) 100%), linear-gradient(90deg, rgb(196, 223, 234) 0%, rgb(196, 223, 234) 100%)" }} />
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[48px] top-1/2" data-name="Icon">
                  <div className="absolute inset-[12.5%_4.17%]" data-name="Union">
                    <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 44 36">
                      <path d={svgPaths.p3d7d5280} fill="var(--fill-0, #E5E9EC)" fillOpacity="0.2" id="Union" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute content-stretch flex inset-0 items-start overflow-clip rounded-[8px]" data-name="Overlay">
                <div className="bg-[rgba(0,35,64,0.1)] flex-[1_0_0] h-full min-h-px min-w-px" data-name="shape" />
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Card Data Under">
              <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Content Titles">
                <p className="flex-[1_0_0] font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.3] min-h-px min-w-px not-italic overflow-hidden relative text-[#eee] text-[12px] text-ellipsis whitespace-nowrap">Content Title</p>
              </div>
              <div className="content-stretch flex font-['Yettel_Sans_Beta:Regular',sans-serif] gap-[8px] items-start leading-[1.3] not-italic opacity-70 relative shrink-0 text-[#eee] text-[12px] tracking-[0.06px] w-full" data-name="Metadata">
                <p className="relative shrink-0">Date, 00:00 - 00:00</p>
                <p className="relative shrink-0">0h 00m</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Cards">
            <div className="h-[153px] relative rounded-[8px] shadow-[0px_8px_2px_0px_rgba(0,0,0,0),0px_5px_2px_0px_rgba(0,0,0,0.01),0px_3px_2px_0px_rgba(0,0,0,0.04),0px_1px_1px_0px_rgba(0,0,0,0.06),0px_0px_1px_0px_rgba(0,0,0,0.07),0px_0px_0px_0px_rgba(0,0,0,0.07)] shrink-0 w-[272px]" data-name="Card Cover">
              <div className="absolute content-stretch flex inset-0 items-center justify-center overflow-clip rounded-[8px]" data-name="Image">
                <div className="flex-[1_0_0] h-full min-h-px min-w-px" data-name="Background" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 35, 64, 0.7) 0%, rgba(0, 35, 64, 0.7) 100%), linear-gradient(90deg, rgb(196, 223, 234) 0%, rgb(196, 223, 234) 100%)" }} />
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[48px] top-1/2" data-name="Icon">
                  <div className="absolute inset-[12.5%_4.17%]" data-name="Union">
                    <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 44 36">
                      <path d={svgPaths.p3d7d5280} fill="var(--fill-0, #E5E9EC)" fillOpacity="0.2" id="Union" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute content-stretch flex inset-0 items-start overflow-clip rounded-[8px]" data-name="Overlay">
                <div className="bg-[rgba(0,35,64,0.1)] flex-[1_0_0] h-full min-h-px min-w-px" data-name="shape" />
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Card Data Under">
              <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Content Titles">
                <p className="flex-[1_0_0] font-['Yettel_Sans_Beta:Bold',sans-serif] leading-[1.3] min-h-px min-w-px not-italic overflow-hidden relative text-[#eee] text-[12px] text-ellipsis whitespace-nowrap">Content Title</p>
              </div>
              <div className="content-stretch flex font-['Yettel_Sans_Beta:Regular',sans-serif] gap-[8px] items-start leading-[1.3] not-italic opacity-70 relative shrink-0 text-[#eee] text-[12px] tracking-[0.06px] w-full" data-name="Metadata">
                <p className="relative shrink-0">Subtitle</p>
                <p className="relative shrink-0">Subtitle</p>
              </div>
            </div>
          </div>
          <div className="absolute h-[153px] left-0 right-0 top-0" data-name="Scroll Buttons">
            <div className="-translate-y-1/2 absolute bg-[rgba(0,0,0,0.7)] content-stretch flex items-center justify-center p-[8px] right-[16px] rounded-[40px] top-1/2" data-name="Circular">
              <div className="relative shrink-0 size-[24px]" data-name="System Icons">
                <div className="absolute inset-[20.83%_33.33%_20.83%_41.67%]">
                  <div className="absolute inset-[-7.14%_-16.67%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00002 16">
                      <path d={svgPaths.p8794a0} id="Vector 89" stroke="var(--stroke-0, #EEEEEE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navigation background="Filled" bar="Footer" className="bg-[#002340] content-stretch flex items-start justify-between pb-[20px] pl-[56px] pr-[72px] relative shrink-0 w-[1280px]" platform="Desktop" type="Footer" />
    </div>
  );
}