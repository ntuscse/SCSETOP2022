import React from "react";
import Committee from "./Committee";

function Committee2() {
  return (
    <>
      <Committee
        name="OGLs"
        description="Meet your OGLs"
        col1Pics={[
          { path: "/CommitteePics/aguni1_nomask.jpg", text: "Aguni" },
          { path: "/CommitteePics/aguni2_nomask.jpg", text: "Aguni" },
          { path: "/CommitteePics/hatter2_nomask.jpg", text: "Hatter" },
          { path: "/CommitteePics/kunia2_nomask.jpg", text: "Kunia" },
          { path: "/CommitteePics/niragi2_nomask.jpg", text: "Niragi" },
        ]}
        col2Pics={[
          { path: "/CommitteePics/ann_mask.jpg", text: "Ann" },
          { path: "/CommitteePics/arisu1_nomask.jpg", text: "Arisu" },
          { path: "/CommitteePics/karube1_nomask.jpg", text: "Karube" },
          { path: "/CommitteePics/lastboss1_mask.jpg", text: "Last Boss" },
          { path: "/CommitteePics/usagi1_nomask.jpg", text: "Usagi" },
        ]}
        col3Pics={[
          { path: "/CommitteePics/arisu2_nomask.jpg", text: "Arisu" },
          { path: "/CommitteePics/chishiya1_nomask.jpg", text: "Chishiya" },
          { path: "/CommitteePics/karube2_nomask.jpg", text: "Karube" },
          { path: "/CommitteePics/lastboss2_nomask.jpg", text: "Last Boss" },
          { path: "/CommitteePics/usagi2_nomask.jpg", text: "Usagi" },
        ]}
        col4Pics={[
          { path: "/CommitteePics/chishiya2_nomask.jpg", text: "Chishiya" },
          { path: "/CommitteePics/hatter1_nomask.jpg", text: "Hatter" },
          { path: "/CommitteePics/kunia1_nomask.jpg", text: "Kunia" },
          { path: "/CommitteePics/niragi1_nomask.jpg", text: "Niragi" },
        ]}
      />
      <Committee
        name="Programmers"
        description="These guys run the games!"
        col1Pics={[
          { path: "/CommitteePics/proggiescp1_nomask.jpg", text: "Proggies" },
          { path: "/CommitteePics/proggiescp5_mask.jpg", text: "Proggies" },
        ]}
        col2Pics={[
          { path: "/CommitteePics/proggiescp2_mask.jpg", text: "Proggeis" },
          { path: "/CommitteePics/proggiescp6_nomask.jpg", text: "Proggeis" },
        ]}
        col3Pics={[
          { path: "/CommitteePics/proggiescp3_nomask.jpg", text: "Proggies" },
          { path: "/CommitteePics/proggiescp7_nomask.jpg", text: "Proggies" },
        ]}
        col4Pics={[
          { path: "/CommitteePics/proggiescp4_nomask.jpg", text: "Proggies" },
          { path: "/CommitteePics/proggiescp8_nomask.jpg", text: "Proggies" },
        ]}
      />
      <Committee
        name="Tech, Logistics and The Top 5"
        description="Providing you with round the clock backend support"
        col1Pics={[{ path: "/CommitteePics/tech_mask.jpg", text: "Tech" }]}
        col2Pics={[{ path: "/CommitteePics/logs1_nomask.jpg", text: "Logs" }]}
        col3Pics={[{ path: "/CommitteePics/logs2_nomask.jpg", text: "Logs" }]}
        col4Pics={[{ path: "/CommitteePics/TOP5.jpg", text: "Top 5" }]}
      />
    </>
  );
}

export default Committee2;
