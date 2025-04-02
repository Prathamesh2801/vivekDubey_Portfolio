const CLOUDINARY_URL = "https://res.cloudinary.com/dkbom0joi/image/upload";
const CLOUDINARY_VIDEO_URL = "https://res.cloudinary.com/dkbom0joi/video/upload";

const getCloudinaryUrl = (imageName) => `${CLOUDINARY_URL}/f_auto,q_auto/${imageName}`;
const getCloudinaryVideoUrl = (videoName) => `${CLOUDINARY_VIDEO_URL}/f_auto,q_auto/${videoName}`;

// Commercial Images
const Ad1 = getCloudinaryUrl("adImg1_iasbyj");
const Ad2 = getCloudinaryUrl("ad2_sso6ds");
const Ad3 = getCloudinaryUrl("ad3_pls5bz");
const Ad4 = getCloudinaryUrl("adImg4_ytvopw");
const Ad5 = getCloudinaryUrl("adImg5_gd6cwb");
const Ad6 = getCloudinaryUrl("ad7_nuk1y2");
const Ad7 = getCloudinaryUrl("adImg7_idkfki");
const Ad8 = getCloudinaryUrl("adImg8_spjeqp");
const Ad9 = getCloudinaryUrl("adImg9_hn2oqo");
const Ad10 = getCloudinaryUrl("adImg10_k8rlif");
const Ad11 = getCloudinaryUrl("adImg11_f7olvn");
const Ad12 = getCloudinaryUrl("adImg12_dend3i");

// Commercial Videos
const AdV1 = getCloudinaryVideoUrl("adVid1_giys9z");
const AdV2 = getCloudinaryVideoUrl("adVid2_ijyfuh");
const AdV3 = getCloudinaryVideoUrl("adVid3_qzif8q");
const AdV4 = getCloudinaryVideoUrl("adVid4_ucjyw2");
const AdV5 = getCloudinaryVideoUrl("adVid5_oxtt50");
const AdV6 = getCloudinaryVideoUrl("adVid6_iyiryy");
const AdV7 = getCloudinaryVideoUrl("adVid7_b2lafp");
const AdV8 = getCloudinaryVideoUrl("adVid8_jwpzd9");
const AdV9 = getCloudinaryVideoUrl("adVid9_aa9bhb");
const AdV10 = getCloudinaryVideoUrl("adVid10_uqmdvo");
const AdV11 = getCloudinaryVideoUrl("adVid11_boon4h");
const AdV12 = getCloudinaryVideoUrl("adVid12_grjyix");

// Music Images
const Music1 = getCloudinaryUrl("musicImg1_uugngz");
const Music2 = getCloudinaryUrl("musicImg2_jfypax");
const Music3 = getCloudinaryUrl("music3_mkdwl7");
const Music4 = getCloudinaryUrl("music4_ik4zt5");

// Music Videos
const MV_1 = getCloudinaryVideoUrl("musicVid1_bxcmrm");
const MV_2 = getCloudinaryVideoUrl("musicVid2_cykyti");
const MV_3 = getCloudinaryVideoUrl("musicVid3_iq2dta");
const MV_4 = getCloudinaryVideoUrl("musicVid4_szz6nm");

// Short Films Images
const sfImg1 = getCloudinaryUrl("sfImg1_zyglrz");
const sfImg2 = getCloudinaryUrl("sfImg2_ls2lwi");
const sfImg3 = getCloudinaryUrl("sfImg3_mdabnt");

// Short Films Videos
const sfVid1 = getCloudinaryVideoUrl("sfVid1_yxwa2l");
const sfVid2 = getCloudinaryVideoUrl("sfVid2_qp7tiu");
const sfVid3 = getCloudinaryVideoUrl("sfVid3_xijqeh");

// Feature Films Images
const ffImg1 = getCloudinaryUrl("ffImg1_tgsnhl");
const ffImg2 = getCloudinaryUrl("ffImg2_qigo3e");

// Feature Films Videos
const ffVid1 = getCloudinaryVideoUrl("ffVid1_ctcf0y");
const ffVid2 = getCloudinaryVideoUrl("ffVid2_qf6seq");

// Web Series Images
const wsImg1 = getCloudinaryUrl("wsImg1_zxg8yq");
const wsImg2 = getCloudinaryUrl("wsImg2_gvxw9z");
const wsImg3 = getCloudinaryUrl("wsImg3_rmlwh4");

// Web Series Videos
const wsVid1 = getCloudinaryVideoUrl("wsVid1_imivw7");
const wsVid2 = getCloudinaryVideoUrl("wsVid2_otf4pi");
const wsVid3 = getCloudinaryVideoUrl("wsVid3_iyv7e2");

export const DATA = [
  {
    id: 1,
    Img: Ad1,
    Vid: AdV1,
    title: "Rani Rampal",
    desc: "Behold the QUEEN for she is ready to strike GOLD. देश को रानी पे #GarvHai. We're honoured to present #GarvHai, an initiative to facilitate India's most talented and deserving athletes discover glory. For more details, visit https://adanisportsline.com/Garv-Hai",

    cinematographer: "Vivek Dubey",
  },
  {
    id: 2,
    Img: Ad2,
    Vid: AdV2,
    title: "Lodha Crown ",
    desc: "  When anyone thinks of Lodha Crown, here are the things that comes to your mind. Fulfilled the dream of 3000 Mumbaikars owning their dream home. The open green landspaces, amenities and quality of construction is what Lodha Crown has to offer to their future residents. These amenities and facilities offered by Lodha Group at an affordable price helped the customers seal the deal. Lodha Crown is located at the prime location in Thane offering excellent connectivity to its residents leading to a healthy and happy lifestyle within their decided budget. Lodha Crown has become one of the preferred choices for everyone staying in Thane. ",
    cinematographer: "Vivek Dubey",
  },
  {
    id: 3,
    Img: Ad3,
    Vid: AdV3,
    title: "Lodha Codename",
    desc: "As part of a social experiment, we reached out to school kids to understand what does a Dream Home look like?What we found out was that the image of our dream home hasn’t changed over the years.So why settle for something else now? Lodha Group presents Codename One & Only – for the first time ever in Mumbai region, land and villas in a luxury gated estate. As a child, we all had an idea of a happy home with a backyard garden, a stream running nearby, with open skies and green fields to play on.",
    cinematographer: "Vivek Dubey",
  },
  {
    id: 4,
    Img: Ad4,
    Vid: AdV4,
    title: "VoltasBeko  #KahanGayaMummyKaSunday",
    desc: "Sundays are our most awaited holidays, but what about moms? Their relentless routine revolves around making our Sunday perfect. With #VoltasBeko, let’s make Sunday an off for everybody. #KahanGayaMummyKaSunday",
    cinematographer: "Vivek Dubey",
  },
  {
    id: 5,
    Img: Ad5,
    Vid: AdV5,
    title: "Luxuria",

    cinematographer: "Vivek Dubey",
  },

  {
    id: 6,
    Img: Ad6,
    Vid: AdV6,
    title: "Features of Xenon and Venice Chairs",
    cinematographer: "Vivek Dubey",
  },
  {
    id: 7,
    Img: Ad7,
    Vid: AdV7,
    title: "Valentine's Day",
    desc: "Hey guy this how I am celebrating my Valentine’s Day with the special Cadbury Dairy Milk Silk",
    cinematographer: "Vivek Dubey",
  },
  {
    id: 8,
    Img: Ad8,
    Vid: AdV8,
    title: "Lodha Crown: The Patil family ",
    desc: "Shares how their dream of owning their home in Thane is fulfilled by Lodha Crown. They share their experience of searching out for various homes in Thane but connectivity was a major issue as they were very far from the main road and how Lodha Crown successfully solved this issue as it is located in the prime location of Thane. They say buying a home at Lodha Crown was the best decision in their life and couldnt believe they got their dream home within the budget and is centrally located as well with solving the travelling issue once Kapurbawdi Metro Station will be up. This metro station will also help the property to be appreciated by everyone. ",
    cinematographer: "Vivek Dubey",
  },
  {
    id: 9,
    Img: Ad9,
    Vid: AdV9,
    title: "Lodha Crown: The Yadav family",
    desc: "It's Crown's first anniversary and we bring to you the Yadav family in the second episode of the Mere Sapno Ka Ghar series. Watch them express their glee of a long-awaited dream that has been fulfilled at Crown. #JiyoTohAise #JeenaIssiKoKehteHain #CrownTaloja",
    cinematographer: "Vivek Dubey",
  },
  {
    id: 10,
    Img: Ad10,
    Vid: AdV10,
    title: "PROMO Reel Misurra",

    cinematographer: "Vivek Dubey",
  },
  {
    id: 11,
    Img: Ad11,
    Vid: AdV11,
    title: "Luxuria",
    cinematographer: "Vivek Dubey",
  },
  {
    id: 12,
    Img: Ad12,
    Vid: AdV12,
    title: "Luxuria",
    cinematographer: "Vivek Dubey",
  },
  {
    id: 13,
    Img: Music1,
    Vid: MV_1,
    title: "Kalank Cover By Heeral Chhatralia",
    desc: "Female version of the Kalank title track ❤ I hope you enjoy it as much as we enjoyed creating it :)",

    production: " SHRI RAM ENTERTAINMENT WORLD ",
    director: " SHEKHAR WALIA",
    cinematographer: "Vivek Dubey",
  },
  {
    id: 14,
    Img: Music2,
    Vid: MV_2,
    title: "Payroll",
    desc: "Payroll is a Reggae inspired Pop song by RIKA and Kranium. It has all the summer vibes you need, and will definitely make you feel empowered!",

    production:
      "Saneemawala Productions  produced by Rahul Gupta, Pankaj Jaiswal",
    director: "Rahul Gupta",
    cinematographer: "Vivek Dubey",
  },
  {
    id: 15,
    Img: Music3,
    Vid: MV_3,
    title: "Rabb Di Saun",
    desc: "Rabb Di Saun... | Official Video Song | Romantic Hindi Love Song 2019 | Latest Punjabi Songs 2019",

    production: "Dheeraj Kumar & Manoj Kumar",
    director: "A U Kayal ",
    cinematographer: "Vivek Dubey",
  },
  {
    id: 16,
    Img: Music4,
    Vid: MV_4,
    title: "Tere Mere by Heeral Chhatralia",
    desc: "Here's a song I recorded in the UK with the wonderfully talented and supportive Beanz Rudden and finally got to shoot for release when I moved to Bombay! ",

    production: "Shri Ram Entertainment World",
    director: "Shekhar Walia",
    cinematographer: "Vivek Dubey",
  },
  {
    id: 17,
    Img: sfImg1,
    Vid: sfVid1,
    title: "Jansankhya",
    desc: "#JANSANKHYA  #Princepandey #J2bproductions My Film “JANSANKHYA” is streaming on Disney+ Hotstar & Filmeraa.https://www.hotstar.com/in/movies/jansankhya/1826047559",

    cinematographer: "Vivek Dubey",
  },
  {
    id: 18,
    Img: sfImg2,
    Vid: sfVid2,
    title: "Mutton Paya",
    desc: '"Mutton Paya" unveils the poignant tale of Manorama Bansal, a resilient 60-year-old woman residing in the warm embrace of Bansal Villa with her children. Mutton Paya, a dish she prepares with meticulous care, is not just a meal for her family—it is an embodiment of emotion. Despite the familial bonds, an air of impending change hangs over their lives. As the family sits down to share this symbolic meal, the table becomes a metaphorical battlefield of emotions, highlighting the unspoken struggles of a mother watching her family embark on a journey, both literal and metaphorical. In the midst of the culinary chaos, the story of Mutton Paya unfolds as a poignant narrative of love, loss, and the indomitable spirit of a mother facing the complexities of life head-on Brace yourself for a unique short film experience.',

    cinematographer: "Vivek Dubey",
  },
  {
    id: 19,
    Img: sfImg3,
    Vid: sfVid3,
    title: "The Ugly Truth",
    desc: "Nikhil starts dating Nikunj and they get into a live in relationship. But one day she complains of severe pain & is admitted to a hospital. And Nikhil finds out her big secret.. This Hindi short movie on love outside marriage features Sagar Singh, Hema Banerika and is directed by Roshan Teckchandani. Watch Full Short Film on https://youtu.be/ylI7AduO7g4?si=eIqD32n_4Y-L6Ml2",

    cinematographer: "Vivek Dubey",
  },
  {
    id: 20,
    Img: ffImg1,
    Vid: ffVid1,
    title: "EAGLE",
    desc: "#Sahadev Latest Telugu movie Starring Ravi Teja, Kavya Thapar, Anupama Parameswaran, Navdeep, Srinivas Avasarala, Madhubala, & others. Written, Directed & Edited By Karthik Gattamneni. Music by Davzand. Screenplay by Karthik Gattamneni & Manibabu Karanam. Dialogues by Manibabu Karanam. Produced by TG Vishwa Prasad & Co-Produced by Vivek Kuchibhotla, Sunil Shah, Raja Subramanian.",

    production: " T.G Vishwa Prasad ",
    director: " Karthik Gattamneni ",
    cinematographer: "Vivek Dubey",
  },
  {
    id: 21,
    Img: ffImg2,
    Vid: ffVid2,
    title: "Zolzaal",
    desc: "एक हवेली, चार शिकारी, कोण खिलाडी आणि कोण होईल भिकारी? ",
    production: " Anil Pawar & Dayanand Dongre ",
    director: "ManasKumarDas",
    cinematographer: "Vivek Dubey",
  },
  {
    id: 22,
    Img: wsImg1,
    Vid: wsVid1,
    title: "The Gone Game 2",
    desc: "The Gone Game is an Indian psychological thriller web series Stars Sanjay Kapoor, Arjun Mathur ,Shweta Tripathi Storyline Season 2 continues the chase for Sahil Gujral with a big opening twist - Sahil's wife, Suhani Gujral - the one he framed for his murder is shot dead. Suhani was out to seek revenge on Sahil and the Gujral clan but due to her murder, the scrutiny on the Gujrals heightens and Sahil's escape with the scam money gets tougher. The games get more twisted as a CBI investigator is brought in to investigate Suhani's murder and its linkage to Sahil's financial scam. Will the secrets buried in Season 1 be exposed or will Sahil get away with the gone game one more time?",
    production: " Nikhil Bhat ",
    director: "Radhika Anand & Nikhil nagesh Bhat",
    cinematographer: "Vivek Dubey",
  },
  {
    id: 23,
    Img: wsImg2,
    Vid: wsVid2,
    title: "Pin Drop Silence",
    desc: "When Vidhi flees her wedding to reunite with her true love, she crosses paths with Armaan, a simple guy caught in an unexpected adventure. As they race against time, their journey unravels chaos, secrets, and an eerie Pin Drop Silence—streaming now for free on VDOJar OTT! 🚖🔥 ",
    production:
      " Manjeet Bohat & Co-produce by : Naveen Pal, Niraj Rathod, iFilms Productions ",
    director: "Shamun Ayesha Khan",
    cinematographer: "Vivek Dubey",
  },
  {
    id: 24,
    Img: wsImg3,
    Vid: wsVid3,
    title: "Naked",
    desc: "Seductive killer or innocent victim? A murder mystery like no other. Naked - now streaming for free. Watch here: https://bit.ly/Naked_Episode1_YT . Hotelier Rishabh Mehta is found murdered. An honest cop, Suraj Kadam, begins investigating the case and meets Natasha Kamra, the prime suspect, who is also a porn star by profession. Will Suraj be able to find the real killer? Is Natasha really guilty or is she just an easy target? Sometimes, the truth is nothing but just a naked illusion. ",
    production: " Vikram Bhatt ",
    director: "Anupam Santosh Saroj",
    cinematographer: "Vivek Dubey",
  },
];
