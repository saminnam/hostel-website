import { Assets } from '../../Assets/Assets';

const generateGoogleMapLink = (address) => {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

const PropertyList = [
    {
        Id: 1,
        Image: Assets.hostel_1,
        Address: "PG at Vadapalani",
        RoomAddress: "9/1A, Saidapet Rd, near V.K Enterprises, Sarvamangala Colony, Aruna Colony, Vadapalani, Chennai, Tamil Nadu 600026",
        Title: "Rent starts from",
        Title1: "Starting from",
        Brand: "Brindhavanam",
        Rent: "Rs: 6,500/-",
        Tag: "Male",
        Button: "View More",
        Image1: Assets.home_1_1_img,
        Image2: Assets.home_1_2_img,
        Image3: Assets.home_1_3_img,
        Image4: Assets.home_2_1_img,
        Image5: Assets.home_2_2_img,
        Image6: Assets.home_2_3_img,
        AboutInfo: "Bid farewell to your discomfort. Wave goodbye to mundane PG accommodations and welcome the world of Brindhavanam Hi Tech mens PG's. Here, you'll unlock the doors to fully furnished.",
        RoomInfo: "All room type have some variants that are larger in size or have extra Amenities.",
        FoodInfo: "Weekdays 3 times veg and weekly once Non-veg",
        PayInfoTitle: "Electricity Charges: Based On Actuals",
        PayInfoContent: "As applicable under the relevant State Electricity Board Charges, plus necessary convenience charges wherever applicable.Electricity charges are not included in the monthly payment.",
        PayInfoSubTitle: "Maintenance Charges: NIL",
        PayInfoSubContent: "No Maintenance Charges. Any loss or damage to the Property is subjected to the deduction in Security Deposit.",
        BreakfastTime: "- Breakfast - 08:00AM - 10:00AM",
        LunchTime: "- Lunch - 1:30PM - 3:00PM",
        DinnerTime: "- Dinner - 8:00PM - 9:30PM",
        GoogleMapLink: generateGoogleMapLink("9/1A, Saidapet Rd, near V.K Enterprises, Sarvamangala Colony, Aruna Colony, Vadapalani, Chennai, Tamil Nadu 600026")
    },
    {
        Id: 2,
        Image: Assets.hostel_2,
        Address: "PG at Ramapuram",
        RoomAddress: "4/25, 3rd Main Rd, Rayala Nagar, Ramapuram, Chennai, Tamil Nadu 600089",
        Title: "Rent starts from",
        Title1: "Starting from",
        Brand: "Brindhavanam",
        Rent: "Rs: 12,500/-",
        Tag: "Male",
        Button: "View More",
        Image1: Assets.home_3_1_img,
        Image2: Assets.home_3_2_img,
        Image3: Assets.home_3_3_img,
        Image4: Assets.home_4_1_img,
        Image5: Assets.home_4_2_img,
        Image6: Assets.home_1_3_img,
        AboutInfo: "Bid farewell to your discomfort. Wave goodbye to mundane PG accommodations and welcome the world of Brindhavanam Hi Tech mens PG's. Here, you'll unlock the doors to fully furnished.",
        FoodInfo: "Weekdays 2 Times And Weekends 3 Times Foods Available here ",
        RoomInfo: "All room type have some variants that are larger in size or have extra Amenities.Sofa, Study table, Chair, A/C, Attached bathroom, Gester, Washing machine, Indiction stove, Ro-water and Individual cupboard.",
        PayInfoTitle: "Electricity Charges: Based On Actuals",
        PayInfoContent: "As applicable under the relevant State Electricity Board Charges, plus necessary convenience charges wherever applicable.Electricity charges are not included in the monthly payment.",
        PayInfoSubTitle: "Maintenance Charges: NIL",
        PayInfoSubContent: "No Maintenance Charges. Any loss or damage to the Property is subjected to the deduction in Security Deposit.",
        GoogleMapLink: generateGoogleMapLink("4/25, 3rd Main Rd, Rayala Nagar, Ramapuram, Chennai, Tamil Nadu 600089")
    },
    {
        Id: 3,
        Image: Assets.hostel_3,
        Address: "Guest House at Vadapalani",
        RoomAddress: "210, Arcot Rd, Sarvamangala Colony, Vadapalani, Chennai, Tamil Nadu 600026",
        Title: "Rent starts from",
        Title1: "Starting from",
        Brand: "Brindhavanam",
        Rent: "Rs: 8,000/-",
        Tag: "Male",
        Button: "View More",
        Image1: Assets.home_3_1_img,
        Image2: Assets.home_3_2_img,
        Image3: Assets.home_3_3_img,
        Image4: Assets.home_4_1_img,
        Image5: Assets.home_4_2_img,
        Image6: Assets.home_1_3_img,
        FoodInfo: "Food's not available here",
        AboutInfo: "Bid farewell to your discomfort. Wave goodbye to mundane PG accommodations and welcome the world of Brindhavanam Hi Tech mens PG's. Here, you'll unlock the doors to fully furnished.",
        RoomInfo: "All room type have some variants that are larger in size or have extra Amenities like Attached bathroom, Wifi, Ro-water and Individual cupboard",
        PayInfoTitle: "Electricity Charges: Based On Actuals",
        PayInfoContent: "As applicable under the relevant State Electricity Board Charges, plus necessary convenience charges wherever applicable.Electricity charges are not included in the monthly payment.",
        PayInfoSubTitle: "Maintenance Charges: NIL",
        PayInfoSubContent: "No Maintenance Charges. Any loss or damage to the Property is subjected to the deduction in Security Deposit.",
        GoogleMapLink: generateGoogleMapLink("210, Arcot Rd, Sarvamangala Colony, Vadapalani, Chennai, Tamil Nadu 600026")
    },
    {
        Id: 4,
        Image: Assets.hostel_4,
        Address: "Appartment at Ramapuram",
        RoomAddress: " 210, Arcot Rd, Sarvamangala Colony, Vadapalani, Chennai, Tamil Nadu 600026",
        Title: "Rent starts from",
        Title1: "Starting from",
        Brand: "Brindhavanam",
        Rent: "Rs: 10,000/-",
        Tag: "Male",
        Button: "View More",
        Image1: Assets.home_3_1_img,
        Image2: Assets.home_3_2_img,
        Image3: Assets.home_3_3_img,
        Image4: Assets.home_4_1_img,
        Image5: Assets.home_4_2_img,
        Image6: Assets.home_1_3_img,
        AboutInfo: "Bid farewell to your discomfort. Wave goodbye to mundane Gurst house accommodations and welcome the world of Brindhavanam Hi Tech mens PG's. Here, you'll unlock the doors to fully furnished.",
        FoodInfo: "No Foods Available here ",
        RoomInfo: "All room type have some variants that are larger in size or have extra Amenities.Sofa, Study table, Chair, A/C, Attached bathroom, Gester, Washing machine, Indiction stove, Ro-water and Individual cupboard.",
        PayInfoTitle: "Electricity Charges: Based On Actuals",
        PayInfoContent: "As applicable under the relevant State Electricity Board Charges, plus necessary convenience charges wherever applicable.Electricity charges are not included in the monthly payment.",
        PayInfoSubTitle: "Maintenance Charges: NIL",
        PayInfoSubContent: "No Maintenance Charges. Any loss or damage to the Property is subjected to the deduction in Security Deposit.",
        GoogleMapLink: generateGoogleMapLink(" 210, Arcot Rd, Sarvamangala Colony, Vadapalani, Chennai, Tamil Nadu 600026")
    },
    {
        Id: 5,
        Image: Assets.hostel_5,
        Address: "PG at Kodambakkam",
        RoomAddress: "29, Senthamil Nagar Rd, Kothari Nagar, Annai Sathya Nagar, West Jafferkhanpet, Chennai, Tamil Nadu 600078",
        Title: "Rent starts from",
        Title1: "Starting from",
        Brand: "Brindhavanam",
        Rent: "Rs: 12,000/-",
        Tag: "Male",
        Button: "View More",
        Image1: Assets.home_3_1_img,
        Image2: Assets.home_3_2_img,
        Image3: Assets.home_3_3_img,
        Image4: Assets.home_4_1_img,
        Image5: Assets.home_4_2_img,
        Image6: Assets.home_1_3_img,
        AboutInfo: "Bid farewell to your discomfort. Wave goodbye to mundane PG accommodations and welcome the world of Brindhavanam Hi Tech mens PG's. Here, you'll unlock the doors to fully furnished.",
        FoodInfo: "No Foods Available here ",
        RoomInfo: "All room type have some variants that are larger in size or have extra Amenities.Sofa, Study table, Chair, A/C, Attached bathroom, Gester, Washing machine, Indiction stove, Ro-water and Individual cupboard.",
        PayInfoTitle: "Electricity Charges: Based On Actuals",
        PayInfoContent: "As applicable under the relevant State Electricity Board Charges, plus necessary convenience charges wherever applicable.Electricity charges are not included in the monthly payment.",
        PayInfoSubTitle: "Maintenance Charges: NIL",
        PayInfoSubContent: "No Maintenance Charges. Any loss or damage to the Property is subjected to the deduction in Security Deposit.",
        GoogleMapLink: generateGoogleMapLink("29, Senthamil Nagar Rd, Kothari Nagar, Annai Sathya Nagar, West Jafferkhanpet, Chennai, Tamil Nadu 600078")
    },
    {
        Id: 6,
        Image: Assets.hostel_3,
        Address: "PG at Kodambakkam",
        RoomAddress: " 10A, 2nd St, Corporation Colony, Rangarajapuram, Kodambakkam, Chennai, Tamil Nadu 600024",
        Title: "Rent starts from",
        Title1: "Starting from",
        Brand: "Brindhavanam",
        Rent: "Rs: 12,000/-",
        Tag: "Male",
        Button: "View More",
        Image1: Assets.home_3_1_img,
        Image2: Assets.home_3_2_img,
        Image3: Assets.home_3_3_img,
        Image4: Assets.home_4_1_img,
        Image5: Assets.home_4_2_img,
        Image6: Assets.home_1_3_img,
        AboutInfo: "Bid farewell to your discomfort. Wave goodbye to mundane PG accommodations and welcome the world of Brindhavanam Hi Tech mens PG's. Here, you'll unlock the doors to fully furnished.",
        FoodInfo: "No Foods Available here",
        RoomInfo: "All room type have some variants that are larger in size or have extra Amenities.Sofa, Study table, Chair, A/C, Attached bathroom, Gester, Washing machine, Indiction stove, Ro-water and Individual cupboard.",
        PayInfoTitle: "Electricity Charges: Based On Actuals",
        PayInfoContent: "As applicable under the relevant State Electricity Board Charges, plus necessary convenience charges wherever applicable.Electricity charges are not included in the monthly payment.",
        PayInfoSubTitle: "Maintenance Charges: NIL",
        PayInfoSubContent: "No Maintenance Charges. Any loss or damage to the Property is subjected to the deduction in Security Deposit.",
        GoogleMapLink: generateGoogleMapLink("10A, 2nd St, Corporation Colony, Rangarajapuram, Kodambakkam, Chennai, Tamil Nadu 600024")
    },
];

export default PropertyList;
