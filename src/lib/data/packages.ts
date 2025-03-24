export interface TravelPackage {
    id: number;
    name: string;
    image: string;
    price: number;
    destination: string;
    duration: number;
    description: string;
    itinerary: string[];
  }
  
  export const packages: TravelPackage[] = [
    {
      id: 1,
      name: "Goa Beach Getaway",
      image: "https://via.placeholder.com/300x200",
      price: 15000,
      destination: "Goa",
      duration: 3,
      description: "Relax on sunny beaches of Goa.",
      itinerary: ["Day 1: Arrival", "Day 2: Beach Fun", "Day 3: Departure"],
    },
    {
      id: 2,
      name: "Kerala Backwaters",
      image: "https://via.placeholder.com/300x200",
      price: 20000,
      destination: "Kerala",
      duration: 5,
      description: "Explore serene backwaters.",
      itinerary: ["Day 1: Arrival", "Day 2: Houseboat", "Day 3-5: Sightseeing"],
    },
  ];