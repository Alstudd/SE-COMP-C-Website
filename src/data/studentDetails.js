const studentDetails = [
    {
        rollNo: 1,
        image: 'https://i.imgur.com/GBsblBj.png',
        name: 'Arnav Singh',
        designation: 'SE COMPS Student',
        description: "As a highly motivated professional, I possess a strong work ethic and a goal-oriented mindset. I consider myself a proactive learner, responsible and result-oriented professional.",
        instagram: 'https://www.instagram.com/arnav_singh030/',
        linkedin: 'https://www.linkedin.com/in/arnav-singh-75b846271/',
        github: 'https://github.com/annoy004',
        sAchievements: [
            "Clubs: RC TCET",
            "One of the team member to secure regional selection in GFG Solving For India Hackathon.",
            "F.E. Pointers: 8.74, 8.69"
        ]
    },
    {
        rollNo: 2,
        image: 'https://i.imgur.com/SfaXQN6.png',
        name: 'Aryan Singh',
        designation: 'SE COMPS Student',
        description: "Cool, calm, can handle pressure",
        linkedin: 'https://www.linkedin.com/in/aryan-singh-019853284',
        github: 'https://github.com/Aryanzs',
        sAchievements: [
            "Clubs: TCET Open Source (Backend Developer)",
            "Played Judo and Football in DSO in school",
            "F.E. Pointers: 7.2, 9.04"
        ]
    },
    {
        rollNo: 3,
        image: 'https://i.imgur.com/apaxQ62.png',
        name: 'Dipti Singh',
        designation: 'SE COMPS Student',
        description: "I am a passionate and aspiring individual with a good background in Java and web development. I have passion for creating innovative and user-friendly digital experiences.",
        linkedin: 'https://www.linkedin.com/in/dipti-singh-3a7561263',
        github: 'https://github.com/Diptigit11',
        sAchievements: [
            "F.E. Pointers: 9.61, 9.85"
        ]
    },
    {
        rollNo: 4,
        image: 'https://i.imgur.com/uCnDdtK.png',
        name: 'Kashish Singh',
        designation: 'SE COMPS Student',
        description: "I am an introvert by nature. I love painting and reading non fiction books in my leisure time.",
        linkedin: 'https://www.linkedin.com/in/kashish-singh-28a2a825a',
        github: 'https://github.com/kashish-51',
        sAchievements: [
            "Clubs: RC TCET (shiksha)",
            "F.E. Pointers: 9.87, 9.62"
        ]
    },
    {
        rollNo: 6,
        image: 'https://i.imgur.com/3vrifH4.png',
        name: 'Raj Singh',
        designation: 'Data Analyst',
        description: "I am a helpful nature person who helps people in need. I am a python learner and have a 4 ⭐ on HackerRank in python. I want to become a data analyst as python is my favourite.",
        instagram: 'https://instagram.com/rajsingh00_?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D',
        linkedin: 'https://www.linkedin.com/in/raj-singh-251314256',
        github: 'https://github.com/rajsingh162120',
        sAchievements: [
            "Clubs: RC TCET",
            "Won First price in python workshop during Multicon 2023",
            "Got 90% score in Python online test by Spoken Tutorial Project by IIT Bombay",
            "4 ⭐ on HackerRank in Python",
            "F.E. Pointers: 9.1, 8.84"
        ]
    },
    {
        rollNo: 7,
        image: 'https://i.imgur.com/5DvoSOo.png',
        name: 'Rudrapratap Singh',
        designation: 'SE COMPS Student',
        description: "As a result of my passion for cricket and my ability to manage my academics, I was a part of my school's cricket team and got the opportunity to play for the TCET Cricket team. With the aid of Canva, I am also into graphic design.",
        // I also recently launched my YouTube channel, which has gym and exercise-related videos.
        instagram: 'https://instagram.com/_iamrpsingh?igshid=OGQ5ZDc2ODk2ZA==',
        linkedin: 'https://www.linkedin.com/in/rudrapratap-singh-493379254',
        sAchievements: [
            "Clubs: RC TCET",
            "Winner of Enertia 2023 (TCET Cricket)",
            "Winner of Conquerer 2023 (TCET Cricket)",
            "Runner Up in HR Super League 2023 (TCET Cricket)",
            "F.E. Pointers: 9.3, 8.73"
        ]
    },
    {
        rollNo: 9,
        image: 'https://i.imgur.com/FaNir1t.png',
        name: 'Shashank Singh',
        designation: 'Aspiring Entrepreneur',
        description: "I am always up for the challenge and keen for gaining knowledge. My core strengths are management, teamwork and creatives. I am responsible for negotiating marketing deals and sponsorship for TCET-ISTE events. I have participated in various MUNs to enhance my personality.",
        instagram: 'https://www.instagram.com/__singhshashank/',
        linkedin: 'https://www.linkedin.com/in/shashank-singh-230911249',
        github: 'https://github.com/ShashankSingh614',
        sAchievements: [
            "Clubs: ISTE Working Committee",
            "1st in MULTICON 2023 Python",
            "Rajhans Vidayala All-Rounder",        
            "Special Mention in BCG MUN-17",
            "Certification of Excellence from RIO+22 UN & Dr.S.Radhakrishna International School", 
            // "Secure 2nd position in 4×100m Relay U14 Boys Athlein", 
            "Inter-BCG Event - Best Player",
            "F.E. Pointers: 10, 9.88"
        ]
    },
    {
        rollNo: 11,
        image: 'https://i.imgur.com/RxAMVjc.png',
        name: 'Utsavanand Singh',
        designation: 'SE COMPS Student',
        description: "Java developer ................",
        instagram: 'https://instagram.com/utsav_singh4261?igshid=MzNlNGNkZWQ4Mg==',
        sAchievements: [
            "Clubs: NSS",
            "Triple jump national participation and state medalist",
            "Certified Java developer",
            "F.E. Pointers: 7.82, 8.4"
        ]
    },
    {
        rollNo: 12,
        image: 'https://i.imgur.com/qVd5stC.png',
        name: 'Rahul Singh',
        designation: 'SE COMPS Student',
        description: "I'm A Tech nerd🧑‍💻,  i usually talk in methaphors and javascript, im really optimistic and overconfident (ya i use that as a strength idk) , I'm Nocturnal🦉 , i'm bit delusional and sometimes I'm a Social Animal And a developer ",
        instagram: 'https://www.instagram.com/rrahulol/',
        linkedin: 'https://www.linkedin.com/in/rahulsinghhh2312/',
        github: 'https://github.com/rahulsingh2312',
        sAchievements: [
            "Clubs: TCET Open Source (Backend Developer), TEDxTCET",
            "I got in an engineering college",
            "F.E. Pointers: 7.83, 8.56"
        ],
        imgCover: true
    },
    {
        rollNo: 13,
        image: 'https://i.imgur.com/dDSwmdW.png',
        name: 'Vikrant Singh',
        designation: 'SE COMPS Student',
        description: "Self paced learner",
        instagram: 'https://instagram.com/__its_vikrant__?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D',
        linkedin: 'https://www.linkedin.com/in/vikrant-singh-196301210',
        github: 'https://github.com/Vikrantsingh22',
        sAchievements: [
            "Clubs: TCET Open Source (Backend Developer), GDSC",
            "One of the team member to secure first prize in Multicon-W.",
            "One of the team member to secure regional selection in GFG solving for India hackathon."
        ]
    },
    {
        rollNo: 14,
        image: 'https://i.imgur.com/l9uOUNZ.png',
        name: 'Vishal Singh',
        designation: 'Aspiring Software Engineer',
        description: "Aspiring Computer Engineering student with a passion for technology and innovation. Seeking an opportunity to apply theoretical knowledge and hands-on skills in a dynamic learning environment to become a skilled computer engineer.",
        sAchievements: [
            "Completed Java course from spoken tutorial held by IIT Bombay",
            "Technical Skills: C and Java",
            "F.E. Pointers: 10, 10"
        ]
    },
    {
        rollNo: 15,
        image: '/Alston3.png',
        name: 'Alston Soares',
        designation: 'Web Developer',
        description: "I am a Growing Programmer and a Coding Enthusiast. I am an enthusiastic and quick learner and can also work well with a team. I am currently learning Astro JS and Typescript.",
        instagram: 'https://www.instagram.com/alstonsoares17?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D',
        linkedin: 'https://www.linkedin.com/in/alston-soares-724a641b9/',
        github: 'https://www.github.com/Alstudd',
        sAchievements: [
            "Clubs: TCET Open Source (Frontend Developer), TCET Shastra Coding Club (Web Dev Lead), GDSC",
            "Participated in 4 national level hackathons",
            "One of the team member to secure regional selection in GFG Solving For India hackathon.",
            "F.E. Pointers: 9.91, 9.62"
        ]
    },
    {
        rollNo: 16,
        image: 'https://i.imgur.com/sTlH6KY.png',
        name: 'Devang Sonawane',
        designation: 'SE COMPS Student',
        description: "Hey Devang Here, A hardcore Spiritualist and the guy you would like to hang around if are interested in the same.",
        instagram: 'https://instagram.com/devangsonawane_?igshid=MjEwN2IyYWYwYw==',
        sAchievements: [
            "F.E. Pointers: 7.91, 8.8"
        ]
    },
    {
        rollNo: 17,
        image: 'https://i.imgur.com/LBQfQ1C.png',
        name: 'Swathi Harish',
        designation: 'S.E. Computer Engineering Student',
        description: `In my journey as a computer engineer;
        Each line of code sparks my cheer.
        I explore the digital realm, where possibilities appear.
        World of innovation is my passion's atmosphere.
        On the badminton court, I leap and cheer;
        I'm a fun-loving spirit, conquering my career!!!`,
        linkedin: 'https://www.linkedin.com/in/swathi-harish',
        github: 'https://github.com/swathiharish-gh',
        sAchievements: [
            "Clubs: TCET Open Source (Backend Developer),",
        ]
    },
    {
        rollNo: 18,
        image: 'https://i.imgur.com/juhvYsH.png',
        name: 'Mithilesh Tandon',
        designation: 'SE COMPS Student',
        description: "As I'm pursuing computer engineering which emphasizes my love towards technology and it's applications. I like to face challenges and I am dedicated towards learning the future trends in the fascinating world of computer science.",
        instagram: 'https://instagram.com/mithilesh__tandon?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D',
        sAchievements: [
            "Clubs: TCET Ehsaas Drama Team",
            "F.E. Pointers: 9.13, 9.23"
        ]
    },
    {
        rollNo: 19,
        image: 'https://i.imgur.com/Q4vXW2S.png',
        name: 'Tanmoy Barua',
        designation: 'SE COMPS Student',
        description: "I am a pretty average kid who has a decent scope in studies. I really don't take too much mental stress on all these things. I like spending time watching anime, web series and just relaxing in general. I have just a single hobby- gym.",
        instagram: 'https://instagram.com/tanmoyywho?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D',
        sAchievements: [
            "F.E. Pointers: 9.65, 9.31"
        ]
    },
    {
        rollNo: 20,
        image: 'https://i.imgur.com/u3AWKja.png',
        name: 'Khushi Thakkar',
        designation: 'Aspiring Full Stack Developer',
        description: "I am a computer engineering student at TCET. I am capable of handling multiple tasks at a time. I am eager to learn new skills and wanna welcome every opportunity and experiences that comes my way",
        instagram: 'https://instagram.com/kpt_22_?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D',
        linkedin: 'https://www.linkedin.com/in/khushi-thakkar-602482283',
        sAchievements: [
            "Clubs: SORT",
            "F.E. Pointers: 9.39, 9.69"
        ]
    },
    {
        rollNo: 21,
        image: 'https://i.imgur.com/YbyKFZf.jpg',
        name: 'Suraj Thakur',
        designation: 'SE COMPS Student',
        description: "I am an emerging Computer Engineer.",
        instagram: 'https://instagram.com/_suraj_thakur_21_?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D',
        linkedin: 'https://www.linkedin.com/in/suraj-thakur-087b19282',
        github: 'https://github.com/Surajvthakur',
        sAchievements: [
            "Clubs: ISTE",
            "F.E. Pointers: 9.61, 9.54"
        ],
        imgCover: true
    },
    {
        rollNo: 22,
        image: 'https://i.imgur.com/ihN35AM.png',
        name: 'Hiral Tibrewal',
        designation: 'SE COMPS Student',
        description: "I am a computer engineering aspirant who likes to learn new stuff.",
        instagram: 'https://instagram.com/htbl.04?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D',
        linkedin: 'https://www.linkedin.com/in/hiral-tibrewal-6379a4217',
        github: 'https://github.com/hrltbl',
        sAchievements: [
            "Clubs: ISTE, RC-TCET, SORT, NSS"
        ]
    },
    {
        rollNo: 23,
        image: 'https://i.imgur.com/rBNFsu0.png',
        name: 'Purva Tijare',
        designation: 'SE COMPS Student',
        description: "I am a computer engineering aspirant who likes to learn new stuff.",
        instagram: 'https://instagram.com/_purva.tijare_?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D',
        linkedin: 'https://www.linkedin.com/in/purva-tijare-3a811b278',
        github: 'https://github.com/purvatijare05',
        sAchievements: [
            "Clubs: Vyom Voyage, RC-TCET Shiksha",
            "Participated in Antenna building workshop at Vyom Voyage",
            "F.E. Pointers: 9.87, 9.85"
        ]
    },
    {
        rollNo: 24,
        image: 'https://i.imgur.com/F9jGvAY.jpg',
        name: 'Aditya Tiwari',
        designation: 'Cricketer',
        description: "I know pretty decent coding skills and I love to play cricket",
        instagram: 'https://instagram.com/_adity4_?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D',
        linkedin: 'https://www.linkedin.com/in/aditya-tiwari-471289250',
        sAchievements: [
            "Winner of Enertia 2023 (TCET Cricket)",
            "Winner of Conquerer 2023 (TCET Cricket)",
            "Runner Up in HR Super League 2023 (TCET Cricket)",
            "Runner Up in KEM League 2023 (TCET Cricket)",
            "MCA Selected for Round 4"
        ]
    },
    {
        rollNo: 25,
        image: 'https://i.imgur.com/5KrDTE2.png',
        name: 'Kashish Tiwari',
        designation: 'SE COMPS Student',
        description: "I am extremely passionate and have a strong desire to learn.",
        instagram: 'https://instagram.com/tiwarikashish215?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D',
        linkedin: 'http://www.linkedin.com/in/kashish-tiwari-9218a8272',
        sAchievements: [
            "F.E. Pointers: 9.2, 9.5"
        ]
    },
    {
        rollNo: 26,
        image: 'https://i.imgur.com/zrzpTLK.png',
        name: 'Khushi Tiwari',
        designation: 'Full Stack Web Dev Enthusiast',
        description: "An avid learner and an ambivert. My hobbies are sketching and baking.",
        instagram: 'https://instagram.com/__khushitiwari____?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D',
        linkedin: 'https://www.linkedin.com/in/khushi-tiwari-a57b08256',
        github: 'https://github.com/khushi123go',
        sAchievements: [
            "Clubs: Rotract Club Of TCET (Shiksha-Working Community)",
            "Secured 1st position in Python Workshop Of Multicon",
            "Received multiple awards for Creative Writing",
            "F.E. Pointers: 9.87, 9.96"
        ]
    },
    {
        rollNo: 27,
        image: 'https://i.imgur.com/qsxCikM.png',
        name: 'Manjesh Tiwari',
        designation: 'SE COMPS Student',
        description: "I am Manjesh Tiwari studying BE in computer science at TCET Kandivali. I'm very passionate about leaning new things. I'm always open to learn something new and interesting",
        instagram: 'https://instagram.com/manjesh_501?igshid=NTc4MTIwNjQ2YQ==',
        linkedin: 'https://www.linkedin.com/in/manjesh-tiwari-06771a250',
        github: 'https://github.com/Manjesh501',
        sAchievements: [
            "Clubs: Rotract Club Of TCET",
            "F.E. Pointers: 8.65, 9.81"
        ]
    },
    {
        rollNo: 28,
        image: 'https://i.imgur.com/cfSmAhk.png',
        name: 'Pranay Tiwari',
        designation: 'Aspiring Software Developer',
        description: "I am a dynamic individual who thrives on learning, connecting with others, and being at the forefront of technological advancement. My passion for continuous growth in people and technology fills my drive to make a positive impact in both my personal and professional life.",
        instagram: 'https://www.instagram.com/pranaytiwariii',
        linkedin: 'https://www.linkedin.com/in/pranay-tiwari-949798256/',
        github: 'https://github.com/pranaytiwariii',
        sAchievements: [
            "Clubs: NCC, TCET Open Source (Frontend Developer)",
            "Built TCET NCC official website",
            "Managed and contributed to events like Kargil Vijay Diwas , Republic and Independence Day",
            "One of the team member to secure regional selection in GFG Solving For India hackathon.",
            "F.E. Pointers: 8.87, 7.75"
        ]
    },
    {
        rollNo: 29,
        image: 'https://i.imgur.com/evKM9SE.png',
        name: 'Sumit Tiwari',
        designation: 'SE COMPS Student',
        description: "I am highly enthusiastic about coding. The thrill of problem-solving, designing algorithms, and creating solutions through code is invigorating. I constantly seek to expand my skills and stay updated with the latest advancements in technology.",
        linkedin: 'https://www.linkedin.com/in/sumit-tiwari-0a25b9257',
        github: 'https://github.com/sumitti',
        sAchievements: []
    },
    {
        rollNo: 31,
        image: 'https://i.imgur.com/WGY1QZU.png',
        name: 'Utkarsh Tiwari',
        designation: 'SE COMPS Student',
        description: "My journey began with an insatiable curiosity about how computers work and a drive to create innovative solutions. From programming complex algorithms to designing hardware systems, I thrive on challenges that push the boundaries of technology.",
        instagram: ' https://instagram.com/utkarshtiwari175?utm_source=qr&igshid=NGExMmI2YTyZg%3D',
        linkedin: 'https://www.linkedin.com/in/utkarsh-tiwari-1a4b9125',
        github: 'https://github.com/UtkarshTiwari175',
        sAchievements: [
            "Clubs: TCET Shastra Coding Club",
            "5 ⭐ on HackerRank in C++",
            "F.E. Pointers: 10, 9.7"
        ]
    },
    {
        rollNo: 32,
        image: 'https://i.imgur.com/doyQ9Tt.png',
        name: 'Harsh Tripathi',
        designation: 'SE COMPS Student',
        description: "I stay curious.",
        instagram: 'https://instagram.com/hxrsh_007?igshid=OTk0YzhjMDVlZA==',
        sAchievements: [
            "F.E. Pointers: 7, 8.62"
        ]
    },
    {
        rollNo: 33,
        image: 'https://i.imgur.com/DGjIkBj.png',
        name: 'Devansh Trivedi',
        designation: 'SE COMPS Student',
        description: "A highly motivated and dedicated individual wishing to become a future Web Developer",
        instagram: 'https://instagram.com/_devansh_2203?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D',
        linkedin: 'https://www.linkedin.com/in/devansh-trivedi-317780257',
        github: 'https://github.com/devanshtrivedi2203',
        sAchievements: [
            "Clubs: RC-TCET",
            "Iste Working Committee (2022-23)",
            "F.E. Pointers: 9, 8.96"
        ]
    },
    {
        rollNo: 34,
        image: 'https://i.imgur.com/sgS3IGO.png',
        name: 'Jeet Trivedi',
        designation: 'SE COMPS Student',
        description: "I am interested in Competitve programming and like playing carrom and badminton.",
        sAchievements: [
            "Clubs: RC-TCET",
            "F.E. Pointers: 8.83, 9.92"
        ]
    },
    {
        rollNo: 35,
        image: 'https://i.imgur.com/JBJHBun.png',
        name: 'Udhay Singh',
        designation: 'SE COMPS Student',
        description: "......",
        instagram: 'https://www.instagram.com/Thakurudhay.26',
        sAchievements: [
            "Clubs: RC-TCET",
            "F.E. Pointers: 9.39, 9.62"
        ]
    },
    {
        rollNo: 36,
        image: 'https://i.imgur.com/SHETQQR.png',
        name: 'Karan Upadhyay',
        designation: 'SE COMPS Student',
        description: "I am well disciplined, cultured and well planned.",
        instagram: 'https://www.instagram.com/karanupadhyay361',
        github: 'https://github.com/KaranUpadhyay-123',
        sAchievements: [
            "Clubs: RC-TCET, Vyom Voyage, EWT",
            "F.E. Pointers: 7.87, 9.15"
        ]
    },
    {
        rollNo: 37,
        image: 'https://i.imgur.com/fJMikDu.png',
        name: 'Sanskar Varshney',
        designation: 'SE COMPS Student',
        description: "I'm a boy",
        sAchievements: [
            "Clubs: RC-TCET"
        ]
    },
    {
        rollNo: 39,
        image: 'https://i.imgur.com/Ozoxo30.png',
        name: 'Siddharth Vaishnav',
        designation: 'SE COMPS Student',
        description: "A highly motivated and dedicated individual wishing to become a future Web Developer",
        instagram: 'https://instagram.com/siddharthvaishnav70?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D',
        linkedin: 'https://www.linkedin.com/in/siddharth-vaishnav-5601472457',
        sAchievements: [
            "Clubs: RC-TCET",
            "F.E. Pointers: 8.61, 8.46"
        ]
    },
    {
        rollNo: 40,
        image: 'https://i.imgur.com/EOFLsiq.png',
        name: 'Shubham Virani',
        designation: 'Aspiring Formula 1 Driver',
        description: "My name is shubham virani",
        sAchievements: [
            "Clubs: RC-TCET",
            "First in school in 10th standard",
            "Comperer of school assembly for 3 years",
            "F.E. Pointers: 10, 9.96"
        ]
    },
    {
        rollNo: 41,
        image: 'https://i.imgur.com/xcSDKJe.png',
        name: 'Vishnu Sharma',
        designation: 'SE COMPS Student',
        description: "I'm a currently a second year student pursuing a degree in computer engineering at TCET. During my time here, I have had the opportunity to work on various projects like summer internship and ESD and had developed foundation in languages such as HTML, CSS and JS",
        instagram: 'https://instagram.com/me_.vish_?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D',
        linkedin: 'https://www.linkedin.com/in/vishnu-sharma-934154256',
        github: 'https://github.com/vish211',
        sAchievements: [
            "Clubs: RC-TCET",
            "F.E. Pointers: 8.1"
        ]
    },
    {
        rollNo: 42,
        image: 'https://i.imgur.com/nXgmsi6.png',
        name: 'Karan Vishwakarma',
        designation: 'SE COMPS Student',
        description: "Creative, discipline and hardworking. Aspiration to join ISRO",
        sAchievements: [
            "Clubs: RC-TCET",
            "F.E. Pointers: 9.72, 9.96"
        ]
    },
    {
        rollNo: 43,
        image: 'https://i.imgur.com/3amE6jz.png',
        name: 'Vrushank Vyas ',
        designation: 'SE COMPS Student',
        description: "Likes to learn new skills",
        sAchievements: [
            "Clubs: RC-TCET",
            "F.E. Pointers: 9.87, 9.81"
        ]
    },
    {
        rollNo: 44,
        image: 'https://i.imgur.com/sw2xxbk.png',
        name: 'Abhay Wadkar',
        designation: 'SE COMPS Student',
        description: "I am a cuber (skilled puzzle solver) always seeking new experiences and challenges.",
        instagram: 'https://instagram.com/anittsuuu?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D',
        linkedin: 'https://www.linkedin.com/in/abhay-wadkar-078b25283',
        sAchievements: [
            "Clubs: RC-TCET",
            "F.E. Pointers: 9.13, 8"
        ]
    },
    {
        rollNo: 45,
        image: 'https://i.imgur.com/PBk8eLR.png',
        name: 'Pratik Wagh',
        designation: 'SE COMPS Student',
        description: "I'm a cheerful person who likes to mix with other people and socialize. I also like football more than my parents",
        instagram: 'https://instagram.com/pratik.siiuuu?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D',
        linkedin: 'https://www.linkedin.com/in/pratik-wagh-3a2430252',
        sAchievements: [
            "Clubs: RC-TCET, TCET-ISTE, CSI",
            "Winner of techfest-Rowboatics",
            "Winner of techfest-Cozmoclech",
            "Winner of techfest-drone racing",
            "Technocanza-Bharathon Winner",
            "MSSA winner in football",
            "DIRECTOR club service (RC TCET)",
            "F.E. Pointers: 8.65, 8.8"
        ]
    },
    {
        rollNo: 47,
        image: 'https://i.imgur.com/Z8ze4gM.png',
        name: 'Smit Warang',
        designation: 'SE COMPS Student',
        description: ".",
        sAchievements: [
            "Clubs: RC-TCET"
        ]
    },
    {
        rollNo: 48,
        image: 'https://i.imgur.com/ulUMCWO.png',
        name: 'Aditi Yadav',
        designation: 'SE COMPS Student',
        description: "Hello I am Aditi yadav. I am pursuing computer science engineering from tcet. My hobbies is singing and playing musical instruments, even I know to play piano and i have won the prize in this platform.",
        instagram: 'https://instagram.com/adiiti.___?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D',
        sAchievements: [
            "Clubs: NSS",
            "F.E. Pointers: 7, 8"
        ],
        imgCover: true
    },
    {
        rollNo: 51,
        image: 'https://i.imgur.com/hZGpYv6.png',
        name: 'Dhruv Yadav',
        designation: 'SE COMPS Student',
        description: "A person who's always curious to explore and learn.",
        github: 'https://github.com/BarettM82',
        sAchievements: [
            "Shortlisted for Army SSB interview thrice",
            "F.E. Pointers: 8.65"
        ]
    },
    {
        rollNo: 52,
        image: 'https://i.imgur.com/d7gk9ZN.png',
        name: 'Kaushal Yadav',
        designation: 'SE COMPS Student',
        description: "I am a quick learner and tech enthusiast. I am dedicated towards my work and have keen interest in the various technological trends. 'Mere do chaar khwaab hai jinhe mein aasma se door chahta hu ,zindigi bhale bhi gumnaam ho par maut mein mashoor chahta hu'",
        sAchievements: [
            "Clubs: ISTE",
            "F.E. Pointers: 9.65, 9.42"
        ]
    },
    {
        rollNo: 53,
        image: 'https://i.imgur.com/s0U3x7N.png',
        name: 'Krutiksingh Yadav',
        designation: 'SE COMPS Student',
        description: "I am aiming to be a good software engineer in a company and live a happy and prosperous life in the future. A positive point about me is that if I want to achieve something I will try my best to achieve that thing without even thinking about the result",
        instagram: 'https://instagram.com/krutiksingh_yadav?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D',
        sAchievements: [
            "Clubs: NSS, RC-TCET",
            "F.E. Pointers: 9.13, 8.7"
        ]
    },
    {
        rollNo: 54,
        image: 'https://i.imgur.com/LqMk8a9.png',
        name: 'Madhu Yadav',
        designation: 'Aspiring Entrepreneur',
        description: "I want to become a businesswoman in future. My hobbies are to do creative things such as sketching, art and craft.",
        sAchievements: [
            "Clubs: SORT",
            "F.E. Pointers: 8.87, 9.73"
        ]
    },
    {
        rollNo: 59,
        image: 'https://i.imgur.com/FC18JKu.png',
        name: 'Saurabh Yadav',
        designation: 'SE COMPS Student',
        description: "I'm Saurabh Yadav pursuing Computer Engineering from TCET",
        sAchievements: [
            "Clubs: RC-TCET",
            "F.E. Pointers: 9.43"
        ]
    },
    {
        rollNo: 60,
        image: 'https://i.imgur.com/7jvUiVs.png',
        name: 'Shivam Yadav',
        designation: 'SE COMPS Student',
        description: "I'm a very ambitious person. I take up all learning opportunities that enhance my skills and know-how to cope up with failures. I like challenging myself to find creative solutions as quickly as possible and resolve any issues at hand.",
        instagram: 'https://instagram.com/yadavshivam310?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D',
        linkedin: 'https://www.linkedin.com/in/shivam-yadav-65701b260',
        github: 'https://github.com/Shivam200397',
        sAchievements: [
            "Clubs: RC-TCET",
            "F.E. Pointers: 8.1"
        ]
    },
    {
        rollNo: 61,
        image: 'https://i.imgur.com/5r5KRJy.png',
        name: 'Sonam Yadav',
        designation: 'Aspiring Skilled Software Engineer',
        description: "Throughout my academic journey, I have completed coursework in C++ and C language, which provided me with a strong foundation in programming. Apart from academics, I have a passion for dancing and watching thriller series.",
        instagram: 'https://www.instagram.com/sonamwhyyy',
        linkedin: 'https://www.linkedin.com/in/sonam-yadav-167553285',
        sAchievements: [
            "F.E. Pointers: 9.87, 9.92"
        ]
    },
    {
        rollNo: 62,
        image: 'https://i.imgur.com/GPNyHwB.png',
        name: 'Vishal R Yadav',
        designation: 'SE COMPS Student',
        description: "My name is Vishal Yadav a second year computer engineering student studying at Thakur college of engineering and technology.",
        instagram: 'https://instagram.com/vishal_yadav0129?igshid=NGExMmI2YTkyZg==',
        linkedin: 'https://www.linkedin.com/in/vishal-yadav-b72230270',
        sAchievements: [
            "Clubs: ISTE, RC-TCET",
            "F.E. Pointers: 9.78, 9.58"
        ]
    },
    {
        rollNo: 63,
        image: '/avatar.png',
        // https://i.imgur.com/mAmXtn1.png
        name: 'Vishal Yadav',
        designation: 'SE COMPS Student',
        description: "Just a person trying to do something meaningful.",
        instagram: 'https://instagram.com/whoisvishall?igshid=MzNlNGNkZWQ4Mg==',
        sAchievements: [
            "Clubs: RC-TCET",
            "F.E. Pointers: 9.09, 9"
        ]
    },
];

export default studentDetails;