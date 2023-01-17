function BannerItem (props) {
    return (<a href={props.link} className='banner-item'>{props.text}</a>);
}

export default BannerItem;