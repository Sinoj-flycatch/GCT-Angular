export const allowedUsers = {
    superAdmin:"super_admin",
    staff:"staff"
}
export const menuItems = [
  {
    item: "Dashboard",
    icon: "/icons/dashboard-black.svg",
    iconActive:"/icons/dashboard-white.svg",
    path:["/dashboard","/profile-info"],
    allowedUser:[allowedUsers.staff,allowedUsers.superAdmin]
  },
  {
    item: "Branches",
    icon: "/icons/branches-black.svg",
    iconActive:"/icons/branches-white.svg",
    path:["/branches"],
    allowedUser:[allowedUsers.superAdmin]
  },
  {
    item: "Staffs",
    icon: "/icons/customers-black.svg",
    iconActive:"/icons/customers-white.svg",
    path:["/staffs"],
    allowedUser:[allowedUsers.superAdmin]
  },
//    {
//     item: "Services",
//     icon: "/icons/services-black.svg",
//     iconActive:"/icons/services-white.svg",
//     path:["/services"],
//     allowedUser:[allowedUsers.superAdmin]
//   },
//    {
//     item: "Makes",
//     icon: "/icons/car-black.svg",
//     iconActive:"/icons/car-white.svg",
//     path:["/makes"],
//     allowedUser:[allowedUsers.superAdmin]
//   },
//    {
//     item: "Models",
//     icon: "/icons/make-black.svg",
//     iconActive:"/icons/make-white.svg",
//     path:["/models"],
//     allowedUser:[allowedUsers.superAdmin]
//   },
  {
    item: "Customers",
    icon: "/icons/customers-black.svg",
    iconActive:"/icons/customers-white.svg",
    path:["/customers"],
    allowedUser:[allowedUsers.staff]
  },
  {
    item: "Bookings",
    icon: "/icons/bookings-black.svg",
    iconActive:"/icons/bookings-white.svg",
    path:["/bookings","/dashboard/bookings/:month/:date"],
    allowedUser:[allowedUsers.staff]
  },
  {
    item: "Reports",
    icon: "/icons/reports-black.svg",
    iconActive:"/icons/reports-white.svg",
    path:["/reports"],
    allowedUser:[allowedUsers.staff,allowedUsers.superAdmin]
  },
];