import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';

const SideBar = () => {
    return (
        <div className="fixed top-0 left-0 h-16  w-screen m-0 flex justify-center bg-gray-900 text-white shadow-lg">
            <SideBarIcon icon={<BsPlus size="45" />} />
            <SideBarIcon icon={<BsFillLightningFill size="28" />} />
            <SideBarIcon icon={<BsGearFill size="28" />} />
            <SideBarIcon icon={<FaFire size="28" />} />
            <SideBarIcon icon={<FaPoo size="28" />} />

        </div>
    );
};

const SideBarIcon = ({ icon }) => (
    <div className="sidebar-icon">
        {icon}
    </div>
);


    export default SideBar;