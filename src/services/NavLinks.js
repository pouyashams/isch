const navLinks = [

    {
        path: "/vaziyat-prozhe-amaliyati",
        name: "وضعیت پروژه عملیاتی",
        icon: "fa fa-sliders",
    },
    {
        path: "/tarkib-darayi",
        name: "ترکیب دارایی ها",
        icon: "fa fa-sliders",
    },
    {
        path: "/motalebat-movagh",
        name: "مطالبات معوق",
        icon: "fa fa-sliders",
    },
    {
        path: "/gozaresh-mamuriyat-kharej-keshvar",
        name: "گزارش مامورت خارج کشور",
        icon: "fa fa-sliders",
    },
    {
        path: "/gozaresh-hesabresi-mostaghel",
        name: "گزارش حسابرسی مستقل",
        icon: "fa fa-sliders",
    },  {
        path: "/gharardadhaye-mohem",
        name: "قرارداد های مهم",
        icon: "fa fa-sliders",
    },
    {
        path: "/etelaat-paye-sherkati",
        name: "اطلاعات پایه شرکت ها",
        icon: "fa fa-sliders",
    },
];

const getNavLinks = () => {
    return [...navLinks];
};

export default getNavLinks;
