import './Sidebar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@material-ui/icons';
import homelogo from '../../assets/img/homelogo.jpg';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import HomeIcon from '@material-ui/icons/Home';
import HistoryIcon from '@material-ui/icons/History';
import DateRangeIcon from '@material-ui/icons/DateRange';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import SettingsIcon from '@material-ui/icons/Settings';







const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return (

        
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id='sidebar'>
            <div className='sidebar__title'>
            <div className ='sidebar__img'>
                <a href='#'>
                <img src={homelogo} alt='logo'  width='150px'/>
                </a>
            </div>
            <div>
                <i className='fa fa-times text-white' id='sidebarIcon' onClick={() => closeSidebar()}></i>
                
            </div>
            </div>
            <hr style={{backgroundColor: '#9bc757'}} />
            
            <div className='sidebar__ menu'>
                <div className='wallet_balance'>
                    <i>
                        <AccountBalanceWalletIcon style={{ color:'#9bc757'}} />
                    </i>
                    <h6>Wallet balance</h6>
                    <h3 className='text-white text-center'>N100,789.00</h3>
                    <button className='justify-content-center btn-green mx-5'>VIEW WALLET</button>
                </div>
                <div className='mx-4'>
                    <div className='sidebar__link active_menu_link py-4'>
                        <a href='#'> <HomeIcon/> <span className='text-white mx-3'>Home</span> </a>
                    </div>
                    <div className='sidebar__link py-4'>
                        <a href='#'> <HistoryIcon/> <span className='text-white mx-3'>History</span> </a>
                    </div>
                    <div className='sidebar__link py-4'>
                        <a href='#'> <DateRangeIcon/> <span className='text-white mx-3'>Bookings</span> </a>
                    </div>
                    <div className='sidebar__link py-4'>
                        <a href='#'> <AccountBalanceWalletIcon/> <span className='text-white mx-3'>Wallet </span> </a>
                    </div>
                    <div className='sidebar__link py-4'>
                        <a href='#'> <HeadsetMicIcon/> <span className='text-white mx-3'>Support</span> </a>
                    </div>

                    <div className='sidebar__link py-3'>
                        <a href='#'> <SettingsIcon/> <span className='text-white mx-3'>Settings</span> </a>
                    </div>
                </div>
            </div>

            
        </div>
    );
}

export default Sidebar;