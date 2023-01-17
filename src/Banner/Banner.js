import BannerItem from '../BannerItem/BannerItem';

function Banner (props) {
    return (
        <div className="banner">
            <BannerItem link='/' text='Home'/>
            <BannerItem link='/about' text='About'/>
        </div>
    );
}

export default Banner;