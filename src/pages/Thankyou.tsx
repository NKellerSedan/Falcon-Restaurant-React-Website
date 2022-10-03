import '../styles/bookings.css'

const Thankyou = () => {
    return (
        <div>
            <div className='container thanks-img'>
                <img src={require("../images/thankyou.webp")} />
            </div>
            <div className="thanks">

                <p>Thank you for booking with us</p>
                <p>You should receive an email of your booking details</p>
            </div>
            <br />
            <br />
        </div>
    )
}
export default Thankyou