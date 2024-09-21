import React from "react";
import "./Amenities.css";
import { RiParkingBoxLine } from "react-icons/ri";
import { GiCctvCamera } from "react-icons/gi";
import { MdSecurity } from "react-icons/md";
import { LiaBitbucket } from "react-icons/lia";
import { IoWaterOutline } from "react-icons/io5";
import { TbWashMachine } from "react-icons/tb";
import { GiWifiRouter } from "react-icons/gi";
import { LuBedSingle } from "react-icons/lu";
import { PiBathtub } from "react-icons/pi";
import { GiPillow } from "react-icons/gi";
import { CgToolbarBottom } from "react-icons/cg";

const Amenities = () => {
  return (
    <>
      <h2 className="mt-0">
        First Class <span className="color">Amenities</span>{" "}
      </h2>
      <div className="box_amenities d-flex ">
        <div className="col">
          <h6>
            <RiParkingBoxLine className="icon" />
            Parking
          </h6>
          <h6>
            <GiCctvCamera className="icon" />
            CCTV
          </h6>
          <h6>
            <MdSecurity className="icon" />
            Security
          </h6>
          <h6>
            <LiaBitbucket className="icon" />
            House Keeping
          </h6>
        </div>
        <div className="col">
          <h6>
            <GiWifiRouter className="icon" /> Wifi
          </h6>
          <h6>
            <IoWaterOutline className="icon" />
            Drinking Water
          </h6>
          <h6>
            <TbWashMachine className="icon" /> Wash
          </h6>
          <h6>
            <PiBathtub className="icon" /> Bathroom
          </h6>
        </div>
        <div className="col">
          <h6>
            <CgToolbarBottom className="icon" /> Ac/Non-Ac
          </h6>
          <h6>
            <LuBedSingle className="icon" /> BedSheet
          </h6>
          <h6>
            <GiPillow className="icon" /> Pillow
          </h6>
        </div>
      </div>
    </>
  );
};

export default Amenities;
