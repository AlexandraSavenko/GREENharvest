import HarvestBox_1x_min from "../images/HarvestBox_1x_min.jpg"
import HarvestBox_2x_min from "../images/HarvestBox_2x_min.jpg"
import '../scss/Hbox.scss'

export default function Hbox (){
    return <section className='harvestBox-section'>
        <div className="container harvestBox">
            <h2>FRESH <span>HARVEST</span> BOX HAS GOT YOU COVERED</h2>
    <p>Our boxes are packed with delicious, nutritious vegetables, perfect for anyone looking to eat healthier or support local farmers. Order your box today and start enjoying the best nature has to offer!</p>
<div className='box-wrapper'>
<div className='formWrapper'>
    <h3>ordering from us is quick and easy! Fill out this form below and we will contact you!</h3>
</div>
    <div className='socMedia'>
        <img srcSet={`${HarvestBox_2x_min}, ${HarvestBox_1x_min}`} src={HarvestBox_1x_min} alt="a woman is squizing lemon juice into a jar or some vegetables" width={200}/>
        <p>Follow us on our social networks:</p>
        <ul className='socMediaLinks'>
            <li><a href="">instagram</a></li>
            <li><a href="">facebook</a></li>
            <li><a href="">youtube</a></li>
        </ul>
        
        
        
    </div>
    </div>
    </div>
        
    </section>
}