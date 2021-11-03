import React, {useState} from 'react'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Form, Card, Input, Button } from "antd"
import { HomeOutlined,PhoneOutlined,MailOutlined, UserOutlined } from "@ant-design/icons"
import TextArea from 'rc-textarea'
const Contact = () => {

    const [form] = Form.useForm();
    const [status, setStatus] = useState("Submit");
    const [formElems, setFormElems] = useState({

        name : '',
        mail : '',
        phone : '',
        message : ''
    })

    const handleChange = (evt) => {
        console.log(evt.target.name)
        setFormElems({...formElems, [evt.target.name] : evt.target.value})
    }


    const handleSubmit = async (e) => {
        setStatus("Sending...");
        console.log(formElems)
        console.log("sending")
        let details = {
          name: formElems.name,
          email: formElems.mail,
          phone : formElems.phone,
          message: formElems.message,
        };
        let response = await fetch("http://localhost:3000/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        if(result.code == 200){

            alert("Email was sent !")
            setFormElems({name: '', mail: '', phone : '', message : ''})
        }else{
            alert("Email not sent ! retry")
        }
      };




    
    return(
<Layout>
      <SEO title="Contact" />
      <div className="h-screen bg-gray-100 pt-24 w-full">
      <div div=" w-full text-center">/
      <h1 className="text-center text-5xl text-teal-800">Contact Me</h1>
      <p className="text-center text-lg text-gray-500" >And I will see what I can do</p>
      <div className="my-8 w-1/2 mx-auto flex items-center justify-around">
          <div className="text-center  hover:bg-white p-8 rounded-lg">
          <HomeOutlined className="text-white" style={{fontSize : 80,color:"#14B8A6"}} />
          <p className="font-bold mt-2 text-teal-800">7 rue Pierre Laplace Besançon<br/> 25000 France</p>
          </div>
          <div className="text-center hover:bg-white p-8 rounded-lg">
          <PhoneOutlined className="text-white"style={{fontSize : 80,color:"#14B8A6"}}/>
          <p className="font-bold mt-2 text-teal-800">( +33 ) 7 58 25 93 60 </p>
          </div>
          <div className="text-center  hover:bg-white p-8 rounded-lg">
          <MailOutlined  style={{fontSize : 80,color:"#14B8A6"}}/>
          <p className="font-bold mt-2 text-teal-800">karam.tenes@gmail.com</p>
          </div>
      </div>
      <Card className="w-1/2" style={{marginLeft:'auto', marginRight: 'auto'}}>

      <Form form={form} onFinish={handleSubmit} >
            <Form.Item
            
            rules={[{ required: true, message: 'Please enter your Name!' }]}
        >
            <Input name="name"
            onChange={handleChange} className="rounded-lg" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Your Name!" />
            </Form.Item>
            <Form.Item
            
            rules={[{ required: true, message: 'Please enter your Phone number!' }]}
            >
            <Input onChange={handleChange}
            name="phone" className="rounded-lg" prefix={<PhoneOutlined className="site-form-item-icon" />} placeholder="Your Phone!" />
            </Form.Item>
            <Form.Item
            
            rules={[{ required: true, message: 'Please enter your E-Mail!' }]}>
            <Input onChange={handleChange}
            name="mail" className="rounded-lg" prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Your E-Mail!" />
            </Form.Item>
            
            <Form.Item
            
             
             rules={[{ required: true, message: 'Please insert your Message!' }]}>
            <TextArea name="message"
             onChange={(handleChange)} placeholder="Your Message!" rows={5} className="w-full p-2 border-2"/>
            </Form.Item>

            <Form.Item >
                <Button type="primary" style={{backgroundColor:"#14B8A6", textAlign: "center", borderColor:"#14B8A6"}} htmlType="submit">
                {status}
                </Button>
            </Form.Item>

        </Form>
    
        
      </Card>
      </div>
      </div>

</Layout>

)
    }

export default Contact