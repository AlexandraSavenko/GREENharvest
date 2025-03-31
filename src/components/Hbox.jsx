import HarvestBox_1x_min from "../images/HarvestBox_1x_min.jpg"
import HarvestBox_2x_min from "../images/HarvestBox_2x_min.jpg"
import '../scss/Hbox.scss'
import { Formik, Form, Field } from "formik";


export default function Hbox (){
    return <section className='harvestBox-section'>
        <div className="container harvestBox">
            <h2>FRESH <span>HARVEST</span> BOX HAS GOT YOU COVERED</h2>
    <p>Our boxes are packed with delicious, nutritious vegetables, perfect for anyone looking to eat healthier or support local farmers. Order your box today and start enjoying the best nature has to offer!</p>
<div className='box-wrapper'>
<div className='formWrapper'>
    <h3>ordering <span>from us</span>  is quick and easy! Fill out <span>this form</span>  below and we will contact you!</h3>
    <Formik initialValues={{
        username: '',
        email: '',
        comment: '',
    }} onSubmit={(value, action)=> {
        console.log(value)
        action.resetForm()
    }}>
      <Form className="hbox-form">
        <Field placeholder='' className='hbox-input hbox-name' type="text" name="username"/>
        <Field placeholder='' className='hbox-input hbox-email' type="email" name="email"/>
        <Field placeholder='' className='hbox-input hbox-comment' as="textarea" name="comment" rows="5" />
        <button type="submit">send</button>
      </Form>
    </Formik>
</div>
    <div className='socMedia'>
        <div className="socMedia-image">
        <img srcSet={`${HarvestBox_2x_min}, ${HarvestBox_1x_min}`} src={HarvestBox_1x_min} alt="a woman is squizing lemon juice into a jar or some vegetables" width={200}/>
        <div className="overlay"></div>
        </div>
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