import DriveEtaIcon from '@mui/icons-material/DriveEta';
import PeopleIcon from '@mui/icons-material/People';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';

export const vehicleType = [
  {
    value: "pick-up",
    label: "Pick-up Truck ",
  },
  {
    value: "box-truck",
    label: "Box Truck",
  },
  {
    value: "flatbed",
    label: "Flatbed Truck",
  },
  {
    value: "van",
    label: "Van",
  },
  {
    value: "garbage",
    label: "Garbage Truck",
  },
  {
    value: "log",
    label: "Log Carrier ",
  },
  {
    value: "haul",
    label: "Haul Truck",
  },
  {
    value: "haul",
    label: "Heavy hauler",
  },
];

export const tripDestination = [
  {
    value: "riyadh",
    label: "Riyadh",
  },
  {
    value: "jeddah",
    label: "Jeddah",
  },
  {
    value: "mecca",
    label: "Mecca",
  },
  {
    value: "medina",
    label: "Medinah",
  },
  {
    value: "dammam",
    label: "Dammam",
  },
  {
    value: "taif",
    label: "Ta'if",
  },
  {
    value: "tabuk",
    label: "Tabuk",
  },
  {
    value: "buraidah",
    label: "Buraidah",
  },
  {
    value: "khamis",
    label: " Khamis Mushait",
  },
  {
    value: "abha",
    label: "Abha",
  },
  {
    value: "hofuf",
    label: "Hofuf",
  },
  {
    value: "al-khobar",
    label: "Al Khobar",
  },
];

export const TYPE = [
  {
    value: "DRIVER",
    label: "driver",
  },
  // {
  //   value: "ADMIN",
  //   label: "ADMIN",
  // },
];

export const headCount= [
  // {
  //      id: 1,
  //      number: "109",
  //      name: "Staff",
  //      icon: <DriveEtaIcon style={{fontSize: "2.7rem"}}/>
  // },
  {
       id: 2,
       number: "65", 
       name: "Driver",
       icon: <PeopleIcon style={{fontSize: "2.7rem", color: "rgb(54,54,54)", opacity:"0.7"}}/>

  },
  {
       id: 3,
       number: "44",
       name: "Customer",
       icon: <AirlineSeatReclineNormalIcon style={{fontSize: "2.7rem", color: "rgb(54,54,54)", opacity: "0.7"}}/>
  },
]

