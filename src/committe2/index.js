import React from "react";
import Committee from "./Committee";

function Committee2() {
  return (
    <>
      <Committee
        name="OGLs"
        description="Meet your OGLs"
        col1Pics={[
          "/CommitteePics/aguni1_nomask.jpg",
          "/CommitteePics/aguni2_nomask.jpg",
          "/CommitteePics/hatter2_nomask.jpg",
          "/CommitteePics/kunia2_nomask.jpg",
          "/CommitteePics/niragi2_nomask.jpg",
        ]}
        col2Pics={[
          "/CommitteePics/ann_mask.jpg",
          "/CommitteePics/arisu1_nomask.jpg",
          "/CommitteePics/karube1_nomask.jpg",
          "/CommitteePics/lastboss1_mask.jpg",
          "/CommitteePics/usagi1_nomask.jpg",
        ]}
        col3Pics={[
          "/CommitteePics/arisu2_nomask.jpg",
          "/CommitteePics/chishiya1_nomask.jpg",
          "/CommitteePics/karube2_nomask.jpg",
          "/CommitteePics/lastboss2_nomask.jpg",
          "/CommitteePics/usagi2_nomask.jpg",
        ]}
        col4Pics={[
          "/CommitteePics/chishiya2_nomask.jpg",
          "/CommitteePics/hatter1_nomask.jpg",
          "/CommitteePics/kunia1_nomask.jpg",
          "/CommitteePics/niragi1_nomask.jpg",
        ]}
      />
      <Committee
        name="Programmers"
        description="These guys run the games!"
        col1Pics={[
          "/CommitteePics/proggiescp1_nomask.jpg",
          "/CommitteePics/proggiescp5_mask.jpg",
        ]}
        col2Pics={[
          "/CommitteePics/proggiescp2_mask.jpg",
          "/CommitteePics/proggiescp6_nomask.jpg",
        ]}
        col3Pics={[
          "/CommitteePics/proggiescp3_nomask.jpg",
          "/CommitteePics/proggiescp7_nomask.jpg",
        ]}
        col4Pics={[
          "/CommitteePics/proggiescp4_nomask.jpg",
          "/CommitteePics/proggiescp8_nomask.jpg",
        ]}
      />
      <Committee
        name="Tech, Logistics and The Top 5"
        description="Providing you with round the clock backend support"
        col1Pics={["/CommitteePics/tech_mask.jpg"]}
        col2Pics={["/CommitteePics/logs1_nomask.jpg"]}
        col3Pics={["/CommitteePics/logs2_nomask.jpg"]}
        col4Pics={["/CommitteePics/TOP5.jpg"]}
      />
    </>
  );
}

export default Committee2;
