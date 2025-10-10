// adding in event data and location data, events have a foreign key mapping them to the location 
export const eventData = [
    {
    event_id: 1,
    name: "LiSA Live in Boston",
    date: "2025-11-08 19:30:00",
    image: "https://static.wikia.nocookie.net/jpop/images/a/a1/LiSA_-_ReawakeR.jpg",
    location_id: 1
  },
  {
    event_id: 2,
    name: "Aimer: Hoshikuzu Tour",
    date: "2025-11-15 20:30:00",
    image: "https://static.wikia.nocookie.net/jpop/images/b/bc/Aimer_-_escalate.jpg",
    location_id: 3
  },
  {
    event_id: 3,
    name: "MAN WITH A MISSION × milet Collaboration Live",
    date: "2025-12-02 19:00:00",
    image: "https://static.wikia.nocookie.net/jpop/images/9/9d/MWAM.jpg",
    location_id: 2
  },
  {
    event_id: 4,
    name: "FLOW: Fighting Dreamers Tour",
    date: "2025-10-26 21:30:00",
    image: "https://static.wikia.nocookie.net/jpop/images/9/9e/FLOW_-_DICE.jpg",
    location_id: 4
  },
  {
    event_id: 5,
    name: "Hiroshi Kitadani: One Piece Heroes Night",
    date: "2025-12-14 21:00:00",
    image: "https://static.wikia.nocookie.net/jpop/images/e/e8/Kitadani_Hiroshi.jpg",
    location_id: 3
  },
  {
    event_id: 6,
    name: "YOASOBI: Idol World Tour",
    date: "2025-11-30 20:00:00",
    image: "https://static.wikia.nocookie.net/jpop/images/7/72/YOASOBI_Dec2021.jpg",
    location_id: 1
  },
  {
    event_id: 7,
    name: "QUEEN BEE (Ziyoou-vachi): Villains Live",
    date: "2025-12-21 19:00:00",
    image: "https://static.wikia.nocookie.net/jpop/images/7/7c/Ziyoou-Vachi_-_Yaten.jpg",
    location_id: 4
  },
  {
    event_id: 8,
    name: "Eir Aoi: Sirius Tour",
    date: "2025-10-18 19:00:00",
    image: "https://static.wikia.nocookie.net/jpop/images/3/3e/Aoi_Eir_-_Shinzou.jpg",
    location_id: 3
  },
  {
    event_id: 9,
    name: "Radwimps: Weathering the Boston Night",
    date: "2025-11-22 19:30:00",
    image: "https://static.wikia.nocookie.net/jpop/images/3/3d/RADWIMPS_20thanniversary.png",
    location_id: 1
  },
  {
    event_id: 10,
    name: "Ado: The Diva of Uta World Tour",
    date: "2025-10-12 21:00:00",
    image: "https://static.wikia.nocookie.net/jpop/images/f/fe/Ado.jpg",
    location_id: 2
  },
  {
    event_id: 11,
    name: "Kenshi Yonezu: Lemon World Live",
    date: "2025-12-06 20:00:00",
    image: "https://static.wikia.nocookie.net/jpop/images/1/19/Yonezukenshi-tsukiwomiteita2.jpg",
    location_id: 4
  },
  {
    event_id: 12,
    name: "Supercell ft. EGOIST: Departure Live",
    date: "2025-11-02 20:30:00",
    image: "https://static.wikia.nocookie.net/jpop/images/8/8d/Supercell-band-a919801e-d695-407b-82f0-987aa8c622b-resize-750.jpg",
    location_id: 3
  },
  {
    event_id: 13,
    name: "ReoNa: Scar Pain Tour",
    date: "2025-11-10 20:00:00",
    image: "https://static.wikia.nocookie.net/jpop/images/9/94/ReoNa_-_End_of_Days.jpg",
    location_id: 1
  },
  {
    event_id: 14,
    name: "Ling Tosite Sigure: unravel Live",
    date: "2025-11-28 20:00:00",
    image: "https://static.wikia.nocookie.net/jpop/images/f/f2/Ling_tosite_sigure_November_2022.webp",
    location_id: 2
  },
  {
    event_id: 15,
    name: "Yuki Kajiura × FictionJunction: Harmonia Boston",
    date: "2025-12-18 19:00:00",
    image: "https://static.wikia.nocookie.net/jpop/images/0/08/KajiuraYuki.jpg",
    location_id: 4
  }
]

export const locationData = [
    { location_id: 1,
        name: "TD Garden", 
        address: "100 Legends Way, Boston, MA",
        image: "https://images.unsplash.com/photo-1649785118522-34139e0d0385?q=80&w=663&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { location_id: 2, 
        name: "Gillette Stadium", 
        address: "1 Patriot Pl, Foxborough, MA",
        image: "https://images.unsplash.com/photo-1587583777328-c17781b72d6d?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { location_id: 3, 
        name: "House of Blues Boston", 
        address: "15 Lansdowne St, Boston, MA",
        image: "https://th.bing.com/th/id/R.9b1412bc412909208777118b7f046b5e?rik=IjQe4OfhY61prA&riu=http%3a%2f%2fwww.theuntz.com%2fmedia%2fartists%2f6%2f4%2f6%2f64677%2fhouse-of-blues-boston_raw.jpg&ehk=SpFB2ItzF9BXUPl%2bEmSGL%2bBHWidnnAQgFEw8JiDEIlY%3d&risl=&pid=ImgRaw&r=0"
    },
    { location_id: 4, 
        name: "Orpheum Theatre", 
        address: "1 Hamilton Pl, Boston, MA",
        image: "https://images.unsplash.com/photo-1631294751374-5c89b94d5bf9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
    }
]
