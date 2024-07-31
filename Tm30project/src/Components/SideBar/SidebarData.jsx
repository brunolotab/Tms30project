import { BiBookOpen, BiChevronRight } from "react-icons/bi";
import { FiShoppingBag } from "react-icons/fi";
import { TfiPieChart } from "react-icons/tfi";
import { TiFolder } from "react-icons/ti";


export const SideData = [
    {
        title: 'Dashboard',
        path : '/',
        icon: <TfiPieChart/>,
        indicator: <BiChevronRight/>
    },
    {
        title: 'Acquires',
        path : 'Acquires',
        icon: <FiShoppingBag/>,
        indicator: <BiChevronRight/>
    },
    {
        title: 'Merchants',
        path : 'Merchants',
        icon: <TfiPieChart/>,
        indicator: <BiChevronRight/>
    },
    {
        title: 'Terminals',
        path : 'Terminals',
        icon: <TiFolder/>,
        indicator: <BiChevronRight/>
    },
    {
        title: 'transactions',
        path : 'transactions',
        icon: <BiBookOpen/>,
        indicator: <BiChevronRight/>
    },
    {
        title: 'HSM',
        path : 'HSM',
        icon: <BiBookOpen/>,
        indicator: <BiChevronRight/>
    },
    {
        title: 'Processors',
        path : 'Processors',
        icon: <TiFolder/>,
        indicator: <BiChevronRight/>
    },
    {
        title: 'Primary Routing',
        path : 'PriRouting',
        icon: <BiBookOpen/>,
        indicator: <BiChevronRight/>
    },
    {
        title: 'Secondary Routing',
        path : 'SecRouting',
        icon: <BiBookOpen/>,
        indicator: <BiChevronRight/>
    },
    {
        title: 'Bin',
        path : 'Bin',
        icon: <BiBookOpen/>,
        indicator: <BiChevronRight/>
    },
    {
        title: 'Activity Log',
        path : 'logout',
        icon: <BiBookOpen/>,
        indicator: <BiChevronRight/>
    },
    {
        title: 'Setting',
        path : 'setting',
        icon: <BiBookOpen/>,
        indicator: <BiChevronRight/>
    },
 
    {
        title: 'Server Health',
        path : 'health',
        icon: <BiBookOpen/>,
        indicator: <BiChevronRight/>
    },
 
    {
        title: 'Liecencing',
        path : 'licensing',
        icon: <BiBookOpen/>,
        indicator: <BiChevronRight/>
    },
 
    {
        title: 'Notification Setting',
        path : 'notification',
        icon: <BiBookOpen/>,
        indicator: <BiChevronRight/>
    },
 
] 