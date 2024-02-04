import React from "react";
import Videocard from "./Videocard";
import Audiolist from "./Audiolist";
import "./Videolist.css";

const Videolist = (props) => {
  const videos = [
    {
      day: 1,
      video: {
        id: 449,
        name: "Class 71 Back and Abs",
        description:
          "Today's class focuses on muscle endurance where we will hold postures a little longer than we already do. We use Sampattasana and Naukasana along with variations to achieve the same. We also focus on a range of backward bends which elongate the spine, improve posture and lung capacity. \r\n\r\nIn the breathing section, we practice the bandhas or neuromuscular locks followed by deep breathing in shavasana. Both these techniques help in boosting good hormones and induce a state of relaxation",
        url: "https://www.youtube.com/watch?v=5Tj1LAXI1qM",
        isActive: true,
        createdDate: 1619848934000,
        imageUrl:
          "https://artisticyoga.com/uploads/images/1619856510860-Mobile-AS_CLS_167_HAB_14FEB2021.png",
        intensity: "Medium",
        subject: "Back and Abs",
        minCalories: 300,
        maxCalories: 400,

        trainer: {
          id: 5,
          name: "Ashrei Mitra",
          email: "ashreimitra@hotmail.com",
          mobile: "00916397491138",
        },

        categories: [
          {
            id: 6,
            name: "Abs and Back",
            logo: "https://artisticyoga.com/uploads/images/1610355156502-Mobile-cat_abs_back.png",
            isScheduleRequired: true,
            isActive: true,
          },
        ],

        highlight: "Endurance,Spinal health,Lung Capacity",
        benefit: "Increased strength and endurance,Improved Spinal health",
        technique:
          "Sampattasana,Naukasana,Bhujangasana,Salabhasana,Pawanmuktasana,Bandhas",
        availableOn: "01/05/2021",
        dailyVideoId: 360,
        videoId: 449,
        duration: 3600,
        deleteFlag: false,
      },
    },

    {
      day: 2,
      video: {
        id: 353,
        name: "Class 47 Upper Body and Sides",
        description:
          "Today's upper body class entails postures for the upper body as well as the spine and entire back. We use the classic postures such as Ardha Purvottanasana, Santolanasana, Sarpasana along with variations to open up and strengthen the shoulders, arms and back. \r\n\r\nWe also practice the Yoga Nidra which involves a rotation of your awareness through the vital points in the body. This technique causes the muscles and joints to relax completely by allowing the brain to switch to the parasympathetic or the rest and digest mode while you remain aware.\r\n\r\n",
        url: "https://www.youtube.com/watch?v=5Tj1LAXI1qM",
        isActive: true,
        createdDate: 1605451372000,
        imageUrl:
          "https://artisticyoga.com/uploads/images/1605447770596-As_Cls_086_Hub_08Nov20.png",
        intensity: "Medium",
        subject: "Upper Body and Sides",
        minCalories: 300,
        maxCalories: 400,
        trainer: {
          id: 5,
          name: "Ashrei Mitra",
          email: "ashreimitra@hotmail.com",
          mobile: "00916397491138",
        },
        categories: [
          {
            id: 7,
            name: "Upper Body and Sides",
            logo: "https://artisticyoga.com/uploads/images/1610344534760-Mobile-cat_upperbody_sides.png",
            isScheduleRequired: true,
            isActive: true,
          },
        ],
        highlight: "Toned Arms,Strong Back,Relaxation",
        benefit: "Strengthen and tone the upper body,Relax and connect within",
        technique:
          "Suryanamaskar,Santolanasana,Ardha Purvottanasana,Sarpasana,Yog Nidra",
        availableOn: "02/05/2021",
        dailyVideoId: 361,
        videoId: 353,
        duration: 3600,
        deleteFlag: false,
      },
    },
  ];

  console.log(videos);
  return (
    <div className="videolist">
      <div className="videolist__one">
        <h2>Video List</h2>
        <div className="map">
        {Object.values(videos).map((video) => {
          return (
            <>
              <Videocard vid={video} onVideoSelect={props.onVideoSelect} />
            </>
          );
        })}
        </div>
      </div>

      <div className="videolist__two">
        <h2>Audio list</h2>
        <Audiolist />
      </div>
    </div>
  );
};

export default Videolist;
