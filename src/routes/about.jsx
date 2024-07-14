function About(){
    return(
        <>
        <section className=" flex flex-row p-5 gap-1 h-screen">
        <div className="bg-slate-200 p-3 rounded-lg flex flex-col justify-evenly">
            <h3 className="text-lg">our mission</h3>
            <p className="text-sm ">our mission is to provide an unparalleled online shopping experience by delivering the latest trends in fashion, exceptional customer service, and a seamless user interface. We strive to empower our customers to express their unique styles and build confidence through high-quality, affordable clothing. Our commitment to sustainability and ethical practices ensures that every purchase contributes to a better world.</p>
        </div>
        <div className=" bg-slate-200 p-3 rounded-lg flex flex-col justify-evenly">
            <h3 className="text-lg">our vision</h3>
            <p className="text-sm">Our vision is to become a global leader in the e-commerce fashion industry, known for our innovative approach and unwavering dedication to customer satisfaction. We envision a world where fashion is accessible to everyone, transcending boundaries and promoting diversity and inclusivity. Through continuous innovation, sustainable practices, and a customer-centric focus, we aim to inspire and connect fashion enthusiasts worldwide, setting new standards for the industry.</p>
        </div>
        </section>
        
        </>
    )
}
export default About;