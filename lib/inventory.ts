export type Part = {
  icon: string
  title: string
  sku: string
  price: string
  condition: string
  partType: string
}

export const makes = [
  "Acura", "BMW", "Buick", "Cadillac", "Chevrolet", "Chrysler", "Dodge", "Ford",
  "GMC", "Honda", "Hyundai", "Infiniti", "Jeep", "Kia", "Lexus", "Lincoln",
  "Mazda", "Mercedes-Benz", "Mitsubishi", "Nissan", "Ram", "Subaru", "Tesla",
  "Toyota", "Volkswagen", "Volvo",
]

export const partTypes = [
  "Engine", "Transmission", "Alternator", "Starter", "Door Panel", "Hood",
  "Fender", "Bumper", "Headlight", "Taillight", "Radiator", "A/C Compressor",
  "Axle / CV Axle", "Control Arm", "Wheel / Rim", "Seat", "Other",
]

export const categories = [
  { icon: "\u{1F527}", name: "Engines" },
  { icon: "\u2699", name: "Transmissions" },
  { icon: "\u{1F695}", name: "Body Parts" },
  { icon: "\u{1F4A1}", name: "Electrical" },
  { icon: "\u{1F3C6}", name: "Wheels & Tires" },
  { icon: "\u2744", name: "A/C & Heating" },
  { icon: "\u{1F553}", name: "Suspension" },
  { icon: "\u{1F600}", name: "Interior" },
]

export const featuredParts: Part[] = [
  { icon: "\u{1F527}", title: "2018 Toyota Camry 2.5L Engine (4-Cyl)", sku: "ENG-18-CAM-2500", price: "$1,295", condition: "Grade A – Tested", partType: "Engine" },
  { icon: "\u{1F527}", title: "2016 Ford F-150 5.0L V8 Engine", sku: "ENG-16-F150-5000", price: "$2,450", condition: "Grade A – Tested", partType: "Engine" },
  { icon: "\u2699", title: "2019 Honda Accord 1.5T CVT Transmission", sku: "TRN-19-ACC-CVT", price: "$875", condition: "Grade B – Good Condition", partType: "Transmission" },
  { icon: "\u2699", title: "2017 Chevy Silverado 6L80E 6-Speed Auto Trans.", sku: "TRN-17-SIL-6L80E", price: "$1,100", condition: "Grade A – Tested", partType: "Transmission" },
  { icon: "\u{1F695}", title: "2020 Toyota Corolla Front Bumper Assembly", sku: "BMP-20-COR-FRT", price: "$195", condition: "Grade A – Like New", partType: "Bumper" },
  { icon: "\u{1F695}", title: "2018 Nissan Altima Passenger Door Shell", sku: "DR-18-ALT-RH", price: "$145", condition: "Grade B – Minor Scratches", partType: "Door Panel" },
  { icon: "\u{1F4A1}", title: "2015 Ford Escape 1.6L Alternator", sku: "ALT-15-ESC-16", price: "$89", condition: "Grade A – Tested", partType: "Alternator" },
  { icon: "\u{1F4A1}", title: "2017 Jeep Grand Cherokee ECU/PCM", sku: "ECU-17-GC-V6", price: "$225", condition: "Grade A – Tested", partType: "Other" },
]
