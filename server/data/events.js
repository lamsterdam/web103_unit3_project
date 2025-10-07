// adding in event data and location data, events have a foreign key mapping them to the location 
const eventData = [
    {
    id: 1,
    name: "LiSA Live in Boston",
    date: "2025-11-08",
    location: "TD Garden",
    location_id: 1
  },
  {
    id: 2,
    name: "Aimer: Hoshikuzu Tour",
    date: "2025-11-15",
    location: "House of Blues Boston",
    location_id: 3
  },
  {
    id: 3,
    name: "MAN WITH A MISSION × milet Collaboration Live",
    date: "2025-12-02",
    location: "Gillette Stadium",
    location_id: 2
  },
  {
    id: 4,
    name: "FLOW: Fighting Dreamers Tour",
    date: "2025-10-26",
    location: "Orpheum Theatre",
    location_id: 4
  },
  {
    id: 5,
    name: "Hiroshi Kitadani: One Piece Heroes Night",
    date: "2025-12-14",
    location: "House of Blues Boston",
    location_id: 3
  },
  {
    id: 6,
    name: "YOASOBI: Idol World Tour",
    date: "2025-11-30",
    location: "TD Garden",
    location_id: 1
  },
  {
    id: 7,
    name: "QUEEN BEE (Ziyoou-vachi): Villains Live",
    date: "2025-12-21",
    location: "Orpheum Theatre",
    location_id: 4
  },
  {
    id: 8,
    name: "Eir Aoi: Sirius Tour",
    date: "2025-10-18",
    location: "House of Blues Boston",
    location_id: 3
  },
  {
    id: 9,
    name: "Radwimps: Weathering the Boston Night",
    date: "2025-11-22",
    location: "TD Garden",
    location_id: 1
  },
  {
    id: 10,
    name: "Ado: The Diva of Uta World Tour",
    date: "2025-10-12",
    location: "Gillette Stadium",
    location_id: 2
  },
  {
    id: 11,
    name: "Kenshi Yonezu: Lemon World Live",
    date: "2025-12-06",
    location: "Orpheum Theatre",
    location_id: 4
  },
  {
    id: 12,
    name: "Supercell ft. EGOIST: Departure Live",
    date: "2025-11-02",
    location: "House of Blues Boston",
    location_id: 3
  },
  {
    id: 13,
    name: "ReoNa: Scar Pain Tour",
    date: "2025-11-10",
    location: "TD Garden",
    location_id: 1
  },
  {
    id: 14,
    name: "Ling Tosite Sigure: unravel Live",
    date: "2025-11-28",
    location: "Gillette Stadium",
    location_id: 2
  },
  {
    id: 15,
    name: "Yuki Kajiura × FictionJunction: Harmonia Boston",
    date: "2025-12-18",
    location: "Orpheum Theatre",
    location_id: 4
  }
]

const locationData = [
    { id: 1,
        name: "TD Garden", 
        address: "100 Legends Way, Boston, MA" 
    },
    { id: 2, 
        name: "Gillette Stadium", 
        address: "1 Patriot Pl, Foxborough, MA" 
    },
    { id: 3, 
        name: "House of Blues Boston", 
        address: "15 Lansdowne St, Boston, MA" 
    },
    { id: 4, 
        name: "Orpheum Theatre", 
        address: "1 Hamilton Pl, Boston, MA" 
    }
]

export default  {
    eventData, locationData
}