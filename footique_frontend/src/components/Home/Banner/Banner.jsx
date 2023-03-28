import "./Banner.scss";
import BannerIMG from '../../../assets/products/sports-prod-3.png'
// import BannerIMG from '../../../assets/banner-img.png'

const Banner = () => {
    return <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>SALES</h1>
                <p>
                You can wear anything as long as you put a nice pair of shoes with it.
                </p>
                <div className="ctas">
                    <div className="banner-cta">Read More</div>
                    <div className="banner-cta v2">Shop Now</div>
                </div>
            </div>
            <img className="banner-img" src={BannerIMG} alt="" />
        </div>
    </div>;
};

export default Banner;
