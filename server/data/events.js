// adding in event data and location data, events have a foreign key mapping them to the location 
export const eventData = [
    {
    event_id: 1,
    name: "LiSA Live in Boston",
    date: "2025-11-08 19:30:00",
    // location: "TD Garden",
    location_id: 1
  },
  {
    event_id: 2,
    name: "Aimer: Hoshikuzu Tour",
    date: "2025-11-15 20:30:00",
    // location: "House of Blues Boston",
    location_id: 3
  },
  {
    event_id: 3,
    name: "MAN WITH A MISSION × milet Collaboration Live",
    date: "2025-12-02 19:00:00",
    // location: "Gillette Stadium",
    location_id: 2
  },
  {
    event_id: 4,
    name: "FLOW: Fighting Dreamers Tour",
    date: "2025-10-26 21:30:00",
    // location: "Orpheum Theatre",
    location_id: 4
  },
  {
    event_id: 5,
    name: "Hiroshi Kitadani: One Piece Heroes Night",
    date: "2025-12-14 21:00:00",
    // location: "House of Blues Boston",
    location_id: 3
  },
  {
    event_id: 6,
    name: "YOASOBI: Idol World Tour",
    date: "2025-11-30 20:00:00",
    // location: "TD Garden",
    location_id: 1
  },
  {
    event_id: 7,
    name: "QUEEN BEE (Ziyoou-vachi): Villains Live",
    date: "2025-12-21 19:00:00",
    // location: "Orpheum Theatre",
    location_id: 4
  },
  {
    event_id: 8,
    name: "Eir Aoi: Sirius Tour",
    date: "2025-10-18 19:00:00",
    // location: "House of Blues Boston",
    location_id: 3
  },
  {
    event_id: 9,
    name: "Radwimps: Weathering the Boston Night",
    date: "2025-11-22 19:30:00",
    // location: "TD Garden",
    location_id: 1
  },
  {
    event_id: 10,
    name: "Ado: The Diva of Uta World Tour",
    date: "2025-10-12 21:00:00",
    // location: "Gillette Stadium",
    location_id: 2
  },
  {
    event_id: 11,
    name: "Kenshi Yonezu: Lemon World Live",
    date: "2025-12-06 20:00:00",
    // location: "Orpheum Theatre",
    location_id: 4
  },
  {
    event_id: 12,
    name: "Supercell ft. EGOIST: Departure Live",
    date: "2025-11-02 20:30:00",
    // location: "House of Blues Boston",
    location_id: 3
  },
  {
    event_id: 13,
    name: "ReoNa: Scar Pain Tour",
    date: "2025-11-10 20:00:00",
    // location: "TD Garden",
    location_id: 1
  },
  {
    event_id: 14,
    name: "Ling Tosite Sigure: unravel Live",
    date: "2025-11-28 20:00:00",
    // location: "Gillette Stadium",
    location_id: 2
  },
  {
    event_id: 15,
    name: "Yuki Kajiura × FictionJunction: Harmonia Boston",
    date: "2025-12-18 19:00:00",
    // location: "Orpheum Theatre",
    location_id: 4
  }
]

export const locationData = [
    { location_id: 1,
        name: "TD Garden", 
        address: "100 Legends Way, Boston, MA" 
    },
    { location_id: 2, 
        name: "Gillette Stadium", 
        address: "1 Patriot Pl, Foxborough, MA" 
    },
    { location_id: 3, 
        name: "House of Blues Boston", 
        address: "15 Lansdowne St, Boston, MA" 
    },
    { location_id: 4, 
        name: "Orpheum Theatre", 
        address: "1 Hamilton Pl, Boston, MA" 
    }
]

// export default  {
//     eventData, locationData
// }