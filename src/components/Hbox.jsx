import HarvestBox_1x_min from "../images/HarvestBox_1x_min.jpg"
import HarvestBox_2x_min from "../images/HarvestBox_2x_min.jpg"
import '../scss/Hbox.scss'
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from 'react-toastify';




export default function Hbox (){

    const FeedbackSchema = Yup.object().shape({
        username: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
        email: Yup.string().email("Must be a valid email!").required("Required"),
        comment: Yup.string().min(2, "Too short").max(256, "Too long").required("Required"),
      });
    return <section  id="hbox" className='harvestBox-section'>
        <div className="container harvestBox">
            <h2>FRESH <span>HARVEST</span> BOX HAS GOT YOU COVERED</h2>
    <p>Our boxes are packed with delicious, nutritious vegetables, perfect for anyone looking to eat healthier or support local farmers. Order your box today and start enjoying the best nature has to offer!</p>
<div className='box-wrapper'>
<div className='formWrapper'>
    <h3>ordering <span>from us</span>  is quick and easy! Fill out <span>this form</span>  below and we will contact you!</h3>
    <Formik 
    initialValues={{
        username: '',
        email: '',
        comment: '',
    }} 
    onSubmit={(value, action)=> {
        toast.success("Form submitted successfully!");
        console.log(value)
        action.resetForm()
    }}
    validationSchema={FeedbackSchema}

    >
      <Form className="hbox-form">
        <Field placeholder='Full Name' className='hbox-input hbox-name' type="text" name="username"/>
        <Field placeholder='Email' className='hbox-input hbox-email' type="email" name="email"/>
        <Field placeholder='Comment' className='hbox-input hbox-comment' as="textarea" name="comment" rows="5" />
        <button type="submit">send</button>
      <ToastContainer/>
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
            <li><a target="_blank" href="http://www.linkedin.com/in/sasha-savenko">instagram</a></li>
            <li><a target="_blank" href="http://www.linkedin.com/in/sasha-savenko">facebook</a></li>
            <li><a target="_blank" href="http://www.linkedin.com/in/sasha-savenko">youtube</a></li>
        </ul>
    </div>
    </div>
    </div>
        
    </section>
}