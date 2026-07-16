// src/lib/servicesImages.ts

export interface ServiceItem {
  id: string;
  title: string;
  imagePath: string;
  description: string;
  videoPath?: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "kitchen-strip",
    title: "Kitchen Strip Outs",
    imagePath: "/assets/kitchen-strip-out.jpeg",
    description: "Full kitchen dismantling, utility capping, and complete clearing of units and appliances.",
    videoPath: "/assets/kitchen-strip-demo.mp4" 
  },
  {
    id: "bathroom-strip",
    title: "Bathroom Strip Outs",
    imagePath: "/assets/bathroom-strip-out.jpeg",
    description: "Complete bathroom fixture removal including tiles, tubs, toilets, and pipework.",
    videoPath: "/assets/stripout-action.mp4" // Uses your silent, looping action video!
  },
  {
    id: "ceiling-strip",
    title: "Ceiling Removal & Strip Outs",
    imagePath: "/assets/ceiling-removal.jpeg",
    description: "Safe dismantling and removal of suspended ceilings, plasterboard, and ceiling structures.",
  },
  {
    id: "commercial-strip",
    title: "Commercial & Retail Strip Outs",
    imagePath: "/assets/commercial-strip-out.jpeg",
    description: "Soft strip services tailored for retail units, offices, shops, and light commercial spaces.",
  },
  {
    id: "residential-strip",
    title: "Residential Strip Outs",
    imagePath: "/assets/house-strip-out.jpeg",
    description: "Trusted internal strip outs for houses, flats, and domestic properties across Merseyside.",
  }
];

export const PROJECT_STAGES = {
  before: "/assets/kitchen-strip-out.jpeg",
  during: "/assets/partition-wall-removal.jpeg",
  completed: "/assets/property-preparation.jpeg"
};