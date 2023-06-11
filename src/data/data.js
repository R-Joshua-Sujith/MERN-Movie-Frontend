const movies = [
    {
        id: 101,
        src: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/cvsXj3I9Q2iyyIo95AecSd1tad7.jpg",
        name: "Creed III",
        desc: "After dominating the boxing world, Adonis Creed has been thriving in both his career and family life. When a childhood friend and former boxing prodigy, Damian Anderson, resurfaces after serving a long sentence in prison, he is eager to prove that he deserves his shot in the ring. The face-off between former friends is more than just a fight. To settle the score, Adonis must put his future on the line to battle Damian — a fighter who has",
        rating: "4",
        category: "action",
        link: "https://www.youtube.com/embed/AHmCH7iB_IM",
    }, {
        id: 102,
        src: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
        name: "John Wick: Chapter 4",
        desc: "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
        rating: "4.5",
        category: "action",
        link: "https://www.youtube.com/embed/qEVUtrk8_B4",
    },
    {
        id: 103,
        src: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3BSxAjiporlwQTWzaHZ9Yrl5C9D.jpg",
        name: "AKA",
        desc: "A steely special ops agent finds his morality put to the test when he infiltrates a crime syndicate and unexpectedly bonds with the boss' young son.",
        rating: "4.1",
        category: "action",
        link: "https://www.youtube.com/embed/044PUmZQd1g",
    },
    {
        id: 104,
        src: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vNVFt6dtcqnI7hqa6LFBUibuFiw.jpg",
        name: "Train to Busan",
        desc: "When a zombie virus pushes Korea into a state of emergency, those trapped on an express train to Busan must fight for their own survival.",
        rating: "4.8",
        category: "action",
        link: "https://www.youtube.com/embed/pyWuHv2-Abk"
    },
    {
        id: 105,
        src: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dHx5yuBb05U9vNaNhIBD7jWyxPk.jpg",
        name: "Sisu",
        desc: "Deep in the wilderness of Lapland, Aatami Korpi is searching for gold but after he stumbles upon Nazi patrol, a breathtaking and gold-hungry chase through the destroyed and mined Lapland wilderness begins.",
        rating: "3.9",
        category: "action",
        link: "https://www.youtube.com/embed/2NnPzpuU5ao"
    },
    {
        id: 106,
        src: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/p6yUjhvNGQpFZilKwOKbxQ1eHlo.jpg",
        name: "Renfield",
        desc: "Having grown sick and tired of his centuries as Dracula's lackey, Renfield finds a new lease on life — and maybe even redemption — when he falls for feisty, perennially angry traffic cop Rebecca Quincy.",
        rating: "4.1",
        category: "action",
        link: "https://www.youtube.com/embed/ICydLkeXq3w"
    },
    {
        id: 107,
        src: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/m23ltq04OwldiYGmHX8gA4kCtoP.jpg",
        name: "To Catch a Killer",
        desc: "Baltimore. New Year's Eve. A talented but troubled police officer is recruited by the FBI's chief investigator to help profile and track down a mass murderer.",
        rating: "4.2",
        category: "action",
        link: "https://www.youtube.com/embed/WEUX9HwlF5c"
    },
    {
        id: 108,
        src: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8eJf0hxgIhE6QSxbtuNCekTddy1.jpg",
        name: "The Last Kingdom",
        desc: "A show of heroic deeds and epic battles with a thematic depth that embraces politics, religion, warfare, courage, love, loyalty and our universal search for identity. Combining real historical figures and events with fictional characters, it is the story of how a people combined their strength under one of the most iconic kings of history in order to reclaim their land for themselves and build a place they call home.",
        rating: "4.5",
        category: "action",
        link: "https://www.youtube.com/embed/WxPApTGWwas"
    },
    {
        id: 109,
        src: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg",
        name: "PREY",
        desc: "When danger threatens her camp, the fierce and highly skilled Comanche warrior Naru sets out to protect her people. But the prey she stalks turns out to be a highly evolved alien predator with a technically advanced arsenal.",
        category: "action",
        rating: "4.8",
        link: "https://www.youtube.com/embed/1m3Xtveofg0"
    },
    {
        id: 110,
        src: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg",
        name: "Spider-Man Home Coming",
        desc: "Following the events of Captain America: Civil War, Peter Parker, with the help of his mentor Tony Stark, tries to balance his life as an ordinary high school student in Queens, New York City, with fighting crime as his superhero alter ego Spider-Man as a new threat, the Vulture, emerges.",
        category: "marvel",
        rating: "5",
        link: "https://youtube.com/embed/rk-dF1lIbIg"
    }, {
        id: 111,
        src: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
        name: "Avengers Infinity War",
        desc: "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
        category: "marvel",
        rating: "4",
        link: "https://www.youtube.com/embed/pVxOVlm_lE8"
    },
    {
        id: 112,
        src: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5UsK3grJvtQrtzEgqNlDljJW96w.jpg",
        name: "Batman vs Superman",
        desc: "Fearing the actions of a god-like Super Hero left unchecked, Gotham City’s own formidable, forceful vigilante takes on Metropolis’s most revered, modern-day savior, while the world wrestles with what sort of hero it really needs. And with Batman and Superman at war with one another, a new threat quickly arises, putting mankind in greater danger than it’s ever known before.",
        category: "marvel",
        rating: "3.9",
        link: "https://www.youtube.com/embed/0WWzgGyAH6Y"
    },
    {
        id: 113,
        src: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/to0spRl1CMDvyUbOnbb4fTk3VAd.jpg",
        name: "Deadpool 2",
        desc: "Wisecracking mercenary Deadpool battles the evil and powerful Cable and other bad guys to save a boy's life.",
        category: "marvel",
        rating: "4.1",
        link: "https://www.youtube.com/embed/D86RtevtfrA"
    },
    {
        id: 114,
        src: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rg8N7x27Ef6PvlIiioLStf9ZaIO.jpg",
        name: "The Flash",
        desc: "After a particle accelerator causes a freak storm, CSI Investigator Barry Allen is struck by lightning and falls into a coma. Months later he awakens with the power of super speed, granting him the ability to move through Central City like an unseen guardian angel. ",
        category: "marvel",
        rating: "4.2",
        link: "https://www.youtube.com/embed/hebWYacbdvc"
    },
    {
        id: 115,
        src: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
        name: "Black Adam",
        desc: "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
        category: "marvel",
        rating: "4.5",
        link: "https://www.youtube.com/embed/X0tOpBuYasI"
    },
    {
        id: 116,
        src: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/KoYWXbnYuS3b0GyQPkbuexlVK9.jpg",
        name: "Supernatural",
        desc: "When they were boys, Sam and Dean Winchester lost their mother to a mysterious and demonic supernatural force. Subsequently, their father raised them to be soldiers. He taught them about the paranormal evil that lives in the dark corners and on the back roads of America ... and he taught them how to kill it. Now, the Winchester brothers crisscross the country in their '67 Chevy Impala, battling every kind of supernatural threat they encounter along the way.",
        category: "marvel",
        rating: "4.6",
        link: "https://www.youtube.com/embed/_hlkNQL5Ecg"
    },
    {
        id: 117,
        src: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vSNxAJTlD0r02V9sPYpOjqDZXUK.jpg",
        name: "Captain America The First Avenger",
        desc: "During World War II, Steve Rogers is a sickly man from Brooklyn who's transformed into super-soldier Captain America to aid in the war effort. Rogers must stop the Red Skull – Adolf Hitler's ruthless head of weaponry, and the leader of an organization that intends to use a mysterious device of untold powers for world domination.",
        category: "marvel",
        rating: "4.7",
        link: "https://www.youtube.com/embed/qi5UTD7kEr0"
    },
    {
        id: 118,
        src: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/cj2gWN7TdH1iUG6pUQyqv9N2AXc.jpg",
        name: "Ant-Man",
        desc: "Armed with the astonishing ability to shrink in scale but increase in strength, master thief Scott Lang must embrace his inner-hero and help his mentor, Doctor Hank Pym, protect the secret behind his spectacular Ant-Man suit from a new generation of towering threats. Against seemingly insurmountable obstacles, Pym and Lang must plan and pull off a heist that will save the world.",
        category: "marvel",
        rating: "4.8",
        link: "https://www.youtube.com/embed/pWdKf3MneyI"
    },


]

export default movies;