import React from 'react'
import styles from './About.css';

function About() {
    return (
        <div>
            <>
                {/* Header */}
                <header>
                    <a href="#" className="logo">
                        <box-icon name="bolt-circle" />
                    </a>
                    <div className="bx bx-menu" id="menu-icon" />
                    <ul className="navbar">
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#ride">Ride</a>
                        </li>
                        <li>
                            <a href="#services">Services</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="/">Booking</a>
                        </li>
                        <li>
                            <a href="#reviews">Reviews</a>
                        </li>
                    </ul>
                    <div className="header-btn">
                        <a href="/register" className="sign-up">
                            Sign up
                        </a>
                        <a href="/login" className="sign-in">
                            Sign in
                        </a>
                    </div>
                </header>
                {/* end of header */}
                {/* Home */}
                <section className="home" id="home">
                    <div className="text">
                        <h1>
                            <span>
                                Looking to <br />
                                rent a car
                            </span>
                        </h1>
                        <p>
                            {" "}
                            The future of driving is here, and it's electric! Experience the thrill
                            of driving without the emissions, and discover the joy of whisper-quiet
                            travels with our range of electric vehicles (EVs). Whether you're
                            environmentally conscious or just curious about the latest in automotive
                            technology, renting an electric car offers a unique experience that's
                            both sustainable and exhilarating.
                            <br />
                            <br />
                            Eletric fleet is diverse, catering to different needs — from compact
                            city rides to spacious family cars. Every vehicle is equipped with the
                            latest features ensuring safety, comfort, and a top-notch driving
                            experience. Plus, with an ever-growing network of charging stations,
                            range anxiety is a thing of the past.
                            <br />
                            <br />
                            Choose sustainability without compromising on performance. Drive green,
                            and embrace the electric revolution with us!{" "}
                        </p>
                        <div className="app-stores">
                            <img src="https://freeiconshop.com/wp-content/uploads/edd/app-store-badge.png" />
                            <img src="https://freeiconshop.com/wp-content/uploads/edd/google-play-badge.png" />
                        </div>
                    </div>
                    <div className="form-container">
                        <form action="">
                            <div className="input-box">
                                <span>Location</span>
                                <input type="search" name="" id="" placeholder="Search Places" />
                            </div>
                            <div className="input-box">
                                <span>Pick-up Date</span>
                                <input type="date" name="" id="" />
                            </div>
                            <div className="input-box">
                                <span>Return Date</span>
                                <input type="date" name="" id="" />
                            </div>
                            <input type="submit" name="" id="" className="btn" />
                        </form>
                    </div>
                </section>
                {/* End of home section*/}
               
                {/* Ride */}
                <section className="ride" id="ride">
                    <div className="heading">
                        <span>How Its Work</span>
                        <h1>Rent With 3 easy steps</h1>
                    </div>
                    <div className="ride-container">
                        <div className="box">
                            <box-icon type="solid" name="map" />
                            <h2>Choose a location</h2>
                            <p>
                                Begin your journey at a place that's most convenient for you. With
                                AZoom Car Rental's expansive network, you have the freedom to select
                                from a range of prime pick-up spots. Whether you're starting from the
                                bustling city center, a quiet suburb, or the airport, choose a
                                location that best suits your travel plans and let the adventure
                                begin./p&gt;
                            </p>
                        </div>
                        <div className="box">
                            <box-icon name="calendar-plus" />
                            <h2>Pick-up Date</h2>
                            <p>
                                Flexibility is key when you're on the move. With our user-friendly
                                scheduling system, select a pick-up date that aligns with your travel
                                itinerary. Whether you need a car for a spontaneous weekend getaway or
                                a pre-planned cross-country road trip, AZoom ensures your ride is
                                ready when you are.
                            </p>
                        </div>
                        <div className="box">
                            <box-icon name="car" type="solid" />
                            <h2>Book A Car</h2>
                            <p>
                                Dive into our diverse fleet of top-tier vehicles and find the one that
                                speaks to you. Whether you're into sleek sedans, robust SUVs, or
                                eco-friendly electric cars, AZoom has got you covered. Once you've
                                made your pick, proceed with our secure booking process. In just a few
                                clicks, your dream ride will be reserved, awaiting your arrival.
                            </p>
                        </div>
                    </div>
                </section>
                {/* End of Ride */}
               
                {/* About */}
                <section className="about" id="about">
                    <div className="heading">
                        <span>About Us</span>
                        <h1>Best Customer Experience</h1>
                    </div>
                    <div className="about-container">
                        <div className="about-img">
                            <img
                                src="https://w0.peakpx.com/wallpaper/803/225/HD-wallpaper-2014-brabus-800-ibusiness-based-on-mercedes-benz-g-65-amg-front-car.jpg"
                                alt="about-us"
                            />
                        </div>
                        <div className="about-text">
                            <span>About Us</span>
                            <p>
                                AZoom Car Rental - Driving the Future, Today!At AZoom Car Rental, we
                                are more than just a car rental company – we are pioneers in
                                sustainable travel solutions. Founded in 2015, our passion for
                                promoting a green future has paved the way for a revolutionary driving
                                experience in the heart of Asia.To lead the transition towards a
                                zero-emission travel landscape, one journey at a time.Empower our
                                community by providing eco-friendly mobility options, raising
                                awareness about sustainable transport, and driving innovation in the
                                electric vehicle industry.
                            </p>
                            <a href="#" className="btn">
                                Learn More
                            </a>
                        </div>
                    </div>
                </section>
                {/* End of About */}
                {/* Review */}
                <section className="reviews" id="reviews">
                    <div className="heading">
                        <span>Reviews</span>
                        <h1>What Our Customer Say</h1>
                    </div>
                    <div className="reviews-container">
                        <div className="box">
                            <div className="reviews-img">
                                <img
                                    src="https://w0.peakpx.com/wallpaper/803/225/HD-wallpaper-2014-brabus-800-ibusiness-based-on-mercedes-benz-g-65-amg-front-car.jpg"
                                    alt="reviews"
                                />
                            </div>
                            <h2>Someone Name</h2>
                            <div className="stars">
                                <box-icon type="solid" name="star" />
                                <box-icon type="solid" name="star" />
                                <box-icon type="solid" name="star" />
                                <box-icon type="solid" name="star" />
                            </div>
                            <p>
                                "My weekend was a breeze, thanks to AZoom Car Rental. I tried one of
                                their electric vehicles, and I was amazed at the performance and
                                comfort. The staff were fantastic, making sure I was well-informed and
                                confident. Can't wait for my next trip!"
                            </p>
                        </div>
                        <div className="box">
                            <div className="reviews-img">
                                <img
                                    src="https://w0.peakpx.com/wallpaper/803/225/HD-wallpaper-2014-brabus-800-ibusiness-based-on-mercedes-benz-g-65-amg-front-car.jpg"
                                    alt="reviews"
                                />
                            </div>
                            <h2>Someone Name</h2>
                            <div className="stars">
                                <box-icon type="solid" name="star" />
                                <box-icon type="solid" name="star" />
                                <box-icon type="solid" name="star" />
                                <box-icon type="solid" name="star" />
                                <box-icon name="star-half" type="solid" />
                            </div>
                            <p>
                                "First time going electric, and AZoom Car Rental made it an
                                unforgettable experience! Their team was super patient in explaining
                                the details, and the drive was incredibly smooth. Kudos to AZoom for
                                leading the charge towards a greener future!"
                            </p>
                        </div>
                        <div className="box">
                            <div className="reviews-img">
                                <img
                                    src="https://w0.peakpx.com/wallpaper/803/225/HD-wallpaper-2014-brabus-800-ibusiness-based-on-mercedes-benz-g-65-amg-front-car.jpg"
                                    alt="reviews"
                                />
                            </div>
                            <h2>Someone Name</h2>
                            <div className="stars">
                                <box-icon type="solid" name="star" />
                                <box-icon type="solid" name="star" />
                                <box-icon type="solid" name="star" />
                                <box-icon type="solid" name="star" />
                                <box-icon name="star-half" type="solid" />
                            </div>
                            <p>
                                "What a delightful experience with AZoom Car Rental! I never thought
                                going electric would be this simple. The car was a gem, and the entire
                                rental process was seamless. AZoom is genuinely ahead of the curve in
                                the rental space."
                            </p>
                        </div>
                        <div className="box">
                            <div className="reviews-img">
                                <img
                                    src="https://w0.peakpx.com/wallpaper/803/225/HD-wallpaper-2014-brabus-800-ibusiness-based-on-mercedes-benz-g-65-amg-front-car.jpg"
                                    alt="reviews"
                                />
                            </div>
                            <h2>Someone Name</h2>
                            <div className="stars">
                                <box-icon type="solid" name="star" />
                                <box-icon type="solid" name="star" />
                                <box-icon type="solid" name="star" />
                                <box-icon type="solid" name="star" />
                                <box-icon name="star-half" type="solid" />
                            </div>
                            <p>
                                "Having rented cars from various companies in the past, I can
                                confidently say AZoom offers an unparalleled experience. The electric
                                vehicle was pristine, the ride silent yet powerful, and the staff were
                                always ready to help. Cheers to AZoom and their excellent service!"
                            </p>
                        </div>
                        <div className="box">
                            <div className="reviews-img">
                                <img
                                    src="https://w0.peakpx.com/wallpaper/803/225/HD-wallpaper-2014-brabus-800-ibusiness-based-on-mercedes-benz-g-65-amg-front-car.jpg"
                                    alt="reviews"
                                />
                            </div>
                            <h2>Someone Name</h2>
                            <div className="stars">
                                <box-icon type="solid" name="star" />
                                <box-icon type="solid" name="star" />
                                <box-icon type="solid" name="star" />
                                <box-icon type="solid" name="star" />
                                <box-icon type="solid" name="star" />
                            </div>
                            <p>
                                "AZoom Car Rental stands out in the crowd! Their diverse electric
                                fleet, combined with their top-notch customer service, makes them the
                                best in the business. Traveling sustainably has never been this
                                exciting or easy."
                            </p>
                        </div>
                    </div>
                </section>
                {/* End of Review */}
                {/* Newsletter */}
                <section className="newsletter">
                    <h2>Subscribe to Newsletter</h2>
                    <div className="box">
                        <input type="text" placeholder="Enter your email..." />
                        <a href="#" className="btn">
                            Subscribe
                        </a>
                    </div>
                </section>
                {/* End newsletter */}
                <div className="copyright">
                    <p>© AZoom Car Rental All Right Reserved</p>
                    <div className="social">
                        <a href="#">
                            <box-icon name="facebook-square" type="logo" />
                        </a>
                        <a href="#">
                            <box-icon name="twitter" type="logo" />
                        </a>
                        <a href="#">
                            <box-icon name="instagram-alt" type="logo" />
                        </a>
                        <a href="#">
                            <box-icon name="tiktok" type="logo" />
                        </a>
                    </div>
                </div>
                {/* link to js */}
            </>

        </div>
    )
}

export default About
