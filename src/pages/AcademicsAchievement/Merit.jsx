// import Image from 'next/image';
import Img36 from "public/images/akriti01.jpg";
import Img33 from "public/images/anjali01.jpg";
import Img40 from "public/images/anjali01.jpg";
import Img45 from "public/images/anjali01.jpg";
import Img32 from "public/images/as4.jpg";
import Img8 from "public/images/cs1.jpg";
import Img11 from "public/images/cs2.jpg";
import Img12 from "public/images/cs4.jpg";
import Img10 from "public/images/cs7.jpg";
import Img22 from "public/images/cse1.jpg";
import Img24 from "public/images/cse2.jpg";
import Img25 from "public/images/cse3.jpg";
import Img26 from "public/images/cse4.jpg";
import Img27 from "public/images/cse5.jpg";
import Img28 from "public/images/cse6.jpg";
import Img29 from "public/images/cse7.jpg";
import Img30 from "public/images/cse8.jpg";
import Img13 from "public/images/cv1.jpg";
import Img15 from "public/images/cv1.jpg";
import Img17 from "public/images/cv2.jpg";
import Img21 from "public/images/cv3.jpg";
import Img18 from "public/images/cv4.jpg";
import Img14 from "public/images/cv5.jpg";
import Img16 from "public/images/cv5.jpg";
import Img19 from "public/images/cv6.jpg";
import Img20 from "public/images/cv7.jpg";
import Img35 from "public/images/harwinder01.jpg";
import Img37 from "public/images/khushpreet01.jpg";
import Img42 from "public/images/khushpreet01.jpg";
import Img39 from "public/images/lavankshi01.jpg";
import Img44 from "public/images/lavankshi01.jpg";
import Img5 from "public/images/lovishcse.jpg";
import Img3 from "public/images/mohitkumarce.jpg";
import Img1 from "public/images/nidhikumarice.jpg";
import Img2 from "public/images/Pawan-kumar-mishra.png";
import Img6 from "public/images/priyaece.jpg";
import Img31 from "public/images/priyaece.jpg";
import Img23 from "public/images/rosy1.jpg";
import Img4 from "public/images/rosycse.jpg";
import Img9 from "public/images/Shivam-Sharma.png";
import Img38 from "public/images/simran01.jpg";
import Img43 from "public/images/simran01.jpg";
import Img7 from "public/images/sunidhi01.jpg";
import Img34 from "public/images/sunidhi01.jpg";
import Img41 from "public/images/sunidhi01.jpg";
import Img46 from "public/images/sunidhi01.jpg";
import React from "react";
const Merit = () => {
  const holders = {
    CE2019: {
      title: "IKGPTU Merit Positions (CE)-November 2019 Examination",
      people: [{ Image: Img1 }, { Image: Img2 }, { Image: Img3 }],
    },
    CSE2019: {
      title: "IKGPTU Merit Positions (CSE)-November 2019 Examination",
      people: [{ Image: Img4 }, { Image: Img5 }],
    },
    ECE2019: {
      title: "IKGPTU Merit Positions (ECE)-November 2019 Examination",
      people: [{ Image: Img6 }, { Image: Img7 }],
    },
    Cse2019: {
      title:
        "Top merit position holders of Cse department in the IKGPTU Exams(July-NOV 2019)",
      people: [
        { Image: Img8 },
        { Image: Img9 },
        { Image: Img10 },
        { Image: Img11 },
        { Image: Img12 },
        { Image: Img13 },
        { Image: Img14 },
      ],
    },
    Civil2019: {
      title:
        " Top merit position holders of Civil department in the IKGPTU Exams(July-NOV 2019)",
      people: [
        { Image: Img15 },
        { Image: Img16 },
        { Image: Img17 },
        { Image: Img18 },
        { Image: Img19 },
        { Image: Img20 },
        { Image: Img21 },
      ],
    },
    CSe2019: {
      title:
        "Top merit position holders of CSE department in the IKGPTU Exams(Apr 2019)",
      people: [
        { Image: Img22 },
        { Image: Img23 },
        { Image: Img24 },
        { Image: Img25 },
        { Image: Img26 },
        { Image: Img27 },
        { Image: Img28 },
        { Image: Img29 },
        { Image: Img30 },
      ],
    },
    APPLIED2019: {
      title:
        "Top merit position holders of applied science department in the IKGPTU Exams(Apr 2019)",
      people: [{ Image: Img31 }, { Image: Img32 }],
    },
    Ece2019: {
      title:
        "Top merit position holders of ECE department in the IKGPTU Exams(Apr 2019)",
      people: [
        { Image: Img33 },
        { Image: Img34 },
        { Image: Img35 },
        { Image: Img36 },
      ],
    },
    ECe2018: {
      title:
        "Top merit position holders of ECE department in the IKGPTU Exams(Nov. 2018)",
      people: [
        { Image: Img37 },
        { Image: Img38 },
        { Image: Img39 },
        { Image: Img40 },
        { Image: Img41 },
      ],
    },
    ME: {
      title: "Top merit position holders of ME department in the IKGPTU Exams",
      people: [
        { Image: Img42 },
        { Image: Img43 },
        { Image: Img44 },
        { Image: Img45 },
        { Image: Img46 },
      ],
    },
  };
  return (
    <div>
      <div>
        {Object.keys(holders)?.map((item) => (
          <div key={item}>
            <h1 className="px-2 pt-2 text-center text-xl font-bold text-[#081C3A]">
              {holders[item]?.title}
            </h1>
            {holders[item]?.people?.map((data) => (
              <div className=" my-8 border bg-white shadow-lg" key={data}>
                <div className="container flex justify-center ">
                  <div className="  h-36 w-36  overflow-hidden rounded-full ">
                    <img src={data?.Image} alt="" className=" " />
                  </div>
                  <div className="overlay">
                    <div className="text">Hello World</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Merit;
