const projects = [
  {
    id: 1,
    title: "Birla White Experts clubs",
    image: "birlawhite.png",
    url: "https://uatexpertsclub.birlawhite.com/",
    category: "Laravel",
    tags: ["Laravel", "iOS", "Android"],
    description:
      "Application for the users who joined the Birla white company get benifits and connect with Sales team create contact with others.",
  },
  {
    id: 2,
    title: "Marg Gold Loan",
    image: "marg.png",
    url: "https://margtechno.com/gold_loan/",
    category: "Codeigniter",
    tags: ["MySQL", "PHP", "HTML", "Codeigniter"],
    description:
      "People can take their loan on gold and stay with that company for a long time and fulfill their life needs.",
  },
  {
    id: 3,
    title: "CABINET MEDICAL AWA",
    image: "cma.png",
    url: "https://gdigadiga.com/health/site/login",
    category: "Codeigniter",
    tags: ["Codeigniter", "PHP", "MySQL"],
    description:
      "Maintain paitent and there doctor prescrition report and their tritment.",
  },
  {
    id: 4,
    title: "Apka MD",
    image: "apka.png",
    url: "https://apkamd.com/",
    category: "Laravel",
    tags: ["Laravel", "PHP", "MySQL"],
    description:
      "Connect doctor with their client and user or paitent take oppienment online to particualr doctor and also check the doctor avaliblity.",
  },
  {
    id: 5,
    title: "Contractor Formen",
    image: "foremen.png",
    url: "https://contractorforeman.com/",
    category: "Web Development",
    tags: ["Laravel", "iOS", "Android"],
    description:
      "Application for the users who joined the Birla white company get benifits and connect with Sales team create contact with others.",
  },
  {
    id: 6,
    title: "SmartShifts",
    image: "smartshits.png",
    url: "https://smartshifts.co.uk/",
    category: "Laravel",
    tags: ["Laravel", "PHP", "MySQL", "Livewire"],
    description:
      "Connecting Freelance Workers, Recruitment Agencies & Local Businesses Together.",
  },
  {
    id: 7,
    title: "SleepTimes",
    image: "sleeptime.png",
    url: "https://sleeptime.com.au/",
    category: "Codeigniter",
    tags: ["MySQL", "PHP", "Codeigniter", "Javascript"],
    description:
      "The Sleeptime adjustable bed base is great for people who need to sleep in an elevated position",
  },
  {
    id: 8,
    title: "Clinicaimprove",
    image: "clinicaimprove.png",
    url: "https://www.clinicaimprove.com/",
    category: "Laravel",
    tags: ["Laravel", "PHP", "MySQL", "Livewire"],
    description:
      "Connecting with people who has issues on their body & Local Businesses Together.",
  },
  {
    id: 9,
    title: "CAL CRM",
    image: "calcrm.png",
    url: "http://178.128.52.63/calcrm/login",
    category: "Laravel",
    tags: ["Laravel", "PHP", "MySQL", "Livewire"],
    description:
      "Connecting Agents, Investores  & Intermediary & Local Businesses Together.",
  },
  {
    id: 10,
    title: "Santa Shoe Box",
    image: "santa.png",
    url: "https://admin.santashoebox.org.za/staging/",
    category: "Codeigniter",
    tags: ["MySQL", "PHP", "HTML", "Codeigniter"],
    description:
      "Santa Shoebox Project collects and distributes personalised gifts of essential items and treats for underprivileged.",
  },
  {
    id: 11,
    title: "Touchpaysa",
    image: "touchpay.png",
    url: "http://shishkabsa.touchpaysa.com/dashboard",
    category: "Laravel",
    tags: ["Laravel", "PHP", "MySQL", "VueJs"],
    description:
      "Shish kebab or shish kebap is a popular meal of skewered and grilled cubes of meat.",
  },
  {
    id: 12,
    title: "ILH Quiz",
    image: "lih.png",
    url: "https://ilh.appgenixinfotech.com/login",
    category: "Laravel",
    tags: ["Laravel", "PHP", "MySQL"],
    description:
      "We are on a mission to redefine our education system by helping teachers, coaches, and experts create vibrant learning communities.",
  },
  {
    id: 13,
    title: "The Maintaince Team",
    image: "hallan.png",
    url: "https://bms.hallandrandall.com/loginform.php",
    category: "Web Development",
    tags: ["PHP", "MySQL"],
    description:
      "Hall and Randall Plumbers operate a highly successful plumbing and heating company, which has been established for over forty years.",
  },
  {
    id: 14,
    title: "Food Foundry",
    image: "food.png",
    url: "https://foodfoundry.co/",
    category: "Web Development",
    tags: ["VueJs"],
    description:
      "Food Foundry started out making mille crepes in 2007 and today, we continue our tradition of handmade mille crepes with flavours ranging from.",
  },
  {
    id: 15,
    title: "Zappads",
    image: "zap.png",
    url: "https://www.zappads.co.uk/",
    category: "Laravel",
    tags: ["Laravel", "PHP", "MySQL", "Livewire"],
    description:
      "ZappAds is one of the largest platforms in Romania, on which you can publish your ads online, for free. To sell quickly, promote your ad on ZappAds and place it in one of the following categories",
  },
  {
    id: 16,
    title: "Ding",
    image: "ding.png",
    url: "https://staging.dingnow.co.uk/",
    category: "Laravel",
    tags: ["Laravel", "PHP", "MySQL"],
    description:
      "Ding delivers Kosher food from 100s of restaurants throughout London.",
  },
  {
    id: 17,
    title: "Math Nuggets",
    image: "mathn.png",
    url: "https://mathnuggets.edulabs.sg/login",
    category: "Codeigniter",
    tags: ["Codeigniter", "PHP", "MySQL"],
    description:
      "Math Nuggets really helped by daughter regain confidence in Math again. She was close to failing in Primary 4 as she could not catch up in school.",
  },
  {
    id: 18,
    title: "Lettertoasorock",
    image: "letter.png",
    url: "https://lettertoasorock.com/",
    category: "Web Development",
    tags: ["Codeigniter", "PHP", "MySQL"],
    description:
      "We created Letter to AsoRock in response to the president's appeal for mindset change and patriotism during his campaign. He challenged us to ask what we can do for our country.",
  },
  {
    id: 19,
    title: "Tastyhasty",
    image: "tasty.png",
    url: "http://212.71.234.31/restaurant/login",
    category: "Laravel",
    tags: ["Laravel", "PHP", "MySQL"],
    description:
      "Become a delivery driver with TastyHasty, work around your lifestyle, earn competitive pay and get paid weekly. Driver's Signup. Easy Ordering.",
  },
];

export default projects;
