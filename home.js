import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'

import Feature from './feature'
import Offer from './offer'
import Location from './location'
import Guide from './guide'
import Article from './article'
import projectStyles from '.style.module.css'
import styles from './home.module.css'

const Home = (props) => {
    return (
        <div className={styles['container']}>
            <section className={styles['hero']}>
                <div className={styles['main']}>
                    <div className={styles['video']}>
                        <video
                            src
                            poster="/hero-cover1-1500h.png"
                            className={styles['video1']}
                        ></video>
                        <div className={styles['tint']}></div>
                    </div>
                    <div className={styles['content']}>
                        <header data-thq="thq-navbar" className={styles['navbar']}>
                            <img alt="logo" src="/logo.svg" className={styles['logo']} />
                            <div data-thq="thq-burger-menu" className={styles['menu']}>
                                <div className={styles['links']}>
                                    <a
                                        href="#features"
                                        className={` ${styles['link']} ${projectStyles['link']} `}
                                    >
                                        Features
                                    </a>
                                    <span className={projectStyles['link']}>How it works</span>
                                    <span className={projectStyles['link']}>Prices</span>
                                    <a
                                        href="#find"
                                        className={` ${styles['link01']} ${projectStyles['link']} `}
                                    >
                                        Contact
                                    </a>
                                </div>
                                <button
                                    className={` ${styles['hamburger']} ${projectStyles['button']} `}
                                >
                                    <svg viewBox="0 0 1024 1024" className={styles['icon']}>
                                        <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                                    </svg>
                                </button>
                            </div>
                            <div data-thq="thq-mobile-menu" className={styles['mobile-menu']}>
                                <div
                                    data-thq="thq-mobile-menu-nav"
                                    data-role="Nav"
                                    className={styles['nav']}
                                >
                                    <div className={styles['container1']}>
                                        <img
                                            alt="logo"
                                            src="/logo.svg"
                                            className={styles['logo1']}
                                        />
                                        <div
                                            data-thq="thq-close-menu"
                                            className={styles['menu-close']}
                                        >
                                            <svg viewBox="0 0 1024 1024" className={styles['icon02']}>
                                                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <nav
                                        data-thq="thq-mobile-menu-nav-links"
                                        data-role="Nav"
                                        className={styles['nav1']}
                                    >
                                        <span className={styles['text02']}>About</span>
                                        <span className={styles['text03']}>Features</span>
                                        <span className={styles['text04']}>Pricing</span>
                                        <span className={styles['text05']}>Team</span>
                                        <span className={styles['text06']}>Blog</span>
                                    </nav>
                                    <div className={styles['container2']}>
                                        <button
                                            className={` ${styles['login']} ${projectStyles['button']} `}
                                        >
                                            Login
                                        </button>
                                        <button className={projectStyles['button']}>
                                            Register
                                        </button>
                                    </div>
                                </div>
                                <div className={styles['icon-group']}>
                                    <svg
                                        viewBox="0 0 950.8571428571428 1024"
                                        className={styles['icon04']}
                                    >
                                        <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                                    </svg>
                                    <svg
                                        viewBox="0 0 877.7142857142857 1024"
                                        className={styles['icon06']}
                                    >
                                        <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                                    </svg>
                                    <svg
                                        viewBox="0 0 602.2582857142856 1024"
                                        className={styles['icon08']}
                                    >
                                        <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                                    </svg>
                                </div>
                            </div>
                        </header>
                        <div className={styles['center']}>
                            <div className={styles['heading']}>
                                <h1 className={styles['header']}>See the world like a local</h1>
                                <p className={styles['caption']}>
                                    Find a local guide consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt.
                                </p>
                            </div>
                            <div className={styles['border']}>
                                <div className={styles['filter']}>
                                    <img
                                        alt="image"
                                        src="/location.svg"
                                        className={styles['image']}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Destination"
                                        className={` ${styles['textinput']} ${projectStyles['input']} `}
                                    />
                                    <input
                                        type="date"
                                        placeholder="Date"
                                        className={` ${styles['textinput1']} ${projectStyles['input']} `}
                                    />
                                    <input
                                        type="number"
                                        placeholder="Group size"
                                        className={` ${styles['textinput2']} ${projectStyles['input']} `}
                                    />
                                    <div className={styles['search']}>
                                        <img
                                            alt="image"
                                            src="/search.svg"
                                            className={styles['icon10']}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="features" className={styles['feaures']}>
                    <div className={styles['content01']}>
                        <Feature></Feature>
                        <Feature Icon="/headset.svg" Header="24/7 Support"></Feature>
                        <Feature Icon="/person.svg" Header="Private Tours"></Feature>
                    </div>
                </div>
            </section>
            <section id="tours" className={styles['quick-view']}>
                <div className={styles['main1']}>
                    <div className={styles['heading01']}>
                        <h2 className={styles['header01']}>See the world like a local</h2>
                        <p className={styles['caption01']}>
                            Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt.
                        </p>
                    </div>
                    <div className={styles['sorting']}>
                        <button
                            className={` ${styles['option-primary']} ${projectStyles['button']} `}
                        >
                            All
                        </button>
                        <button
                            className={` ${projectStyles['button-option']} ${projectStyles['button']} `}
                        >
                            Popular
                        </button>
                        <button
                            className={` ${projectStyles['button-option']} ${projectStyles['button']} `}
                        >
                            Featured
                        </button>
                        <button
                            className={` ${projectStyles['button-option']} ${projectStyles['button']} `}
                        >
                            Trending
                        </button>
                    </div>
                </div>
                <div className={styles['offers']}>
                    <Link to="/home">
                        <div className={styles['offer-container']}>
                            <Offer Image="/offers-11-1500w.png"></Offer>
                        </div>
                    </Link>
                    <Link to="/home">
                        <div className={styles['offer-container1']}>
                            <Offer
                                Image="/offers-21-1500w.png"
                                Guides="54 Local guides"
                                Location="Barcelona, Spain"
                            ></Offer>
                        </div>
                    </Link>
                    <Link to="/home">
                        <div className={styles['offer-container2']}>
                            <Offer
                                Image="/offers-31-1500w.png"
                                Guides="34 Local Guides"
                                Location="Machu Picchu, Peru"
                            ></Offer>
                        </div>
                    </Link>
                    <Link to="/home">
                        <div className={styles['offer-container3']}>
                            <Offer
                                Image="/offers-41-1500w.png"
                                Guides="1 Local guide"
                                Location="Doha, Quatar"
                            ></Offer>
                        </div>
                    </Link>
                    <Link to="/home">
                        <div className={styles['offer-container4']}>
                            <Offer
                                Image="/offers-51-1500w.png"
                                Guides="6 Local guides"
                                Location="Rhodes, Greece"
                            ></Offer>
                        </div>
                    </Link>
                    <Link to="/home">
                        <div className={styles['offer-container5']}>
                            <Offer
                                Image="/offers-61-1500w.png"
                                Guides="132 Local guides"
                                Location="New York, USA"
                            ></Offer>
                        </div>
                    </Link>
                    <Link to="/home">
                        <div className={styles['offer-container6']}>
                            <Offer
                                Image="/offers-71-1500w.png"
                                Guides="1 Local guide"
                                Location="Doha, Quatar"
                            ></Offer>
                        </div>
                    </Link>
                    <Link to="/home">
                        <div className={styles['offer-container7']}>
                            <Offer
                                Image="/offers-81-1500w.png"
                                Guides="6 Local guides"
                                Location="Rhodes, Greece"
                            ></Offer>
                        </div>
                    </Link>
                    <Link to="/home">
                        <div className={styles['offer-container8']}>
                            <Offer
                                Image="/offers-91-1500w.png"
                                Guides="132 Local guides"
                                Location="New York, USA"
                            ></Offer>
                        </div>
                    </Link>
                </div>
                <div className={styles['pagination']}>
                    <button
                        className={` ${styles['previous']} ${projectStyles['button-option']} ${projectStyles['button']} `}
                    >
                        <svg viewBox="0 0 1024 1024" className={styles['icon11']}>
                            <path d="M658 708l-60 60-256-256 256-256 60 60-196 196z"></path>
                        </svg>
                        <span className={styles['text07']}>Previous</span>
                    </button>
                    <div className={styles['pages']}>
                        <div className={styles['primary']}>
                            <div
                                className={` ${styles['number-current']} ${projectStyles['page-current']} ${projectStyles['page']} `}
                            >
                                <span className={styles['text08']}>1</span>
                            </div>
                            <div className={projectStyles['page']}>
                                <span className={styles['text09']}>2</span>
                            </div>
                            <div
                                className={` ${projectStyles['page']} ${styles['number1']} `}
                            >
                                <span className={styles['text10']}>3</span>
                            </div>
                        </div>
                        <img alt="image" src="/more.svg" className={styles['more']} />
                        <div className={projectStyles['page']}>
                            <span className={styles['text11']}>12</span>
                        </div>
                    </div>
                    <button
                        className={` ${styles['next']} ${projectStyles['button-option']} ${projectStyles['button']} `}
                    >
                        <span className={styles['text12']}>Next</span>
                        <svg viewBox="0 0 1024 1024" className={styles['icon13']}>
                            <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
                        </svg>
                    </button>
                </div>
            </section>
            <section className={styles['testimonials']}>
                <div className={styles['content02']}>
                    <div className={styles['heading02']}>
                        <span className={styles['title']}>Customer testimonial</span>
                        <p className={styles['quote']}>
                            “We’ve used Traveler to lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.”
                        </p>
                    </div>
                    <div className={styles['details']}>
                        <div className={styles['author']}>
                            <img
                                alt="image"
                                src="/quote-200h.png"
                                className={styles['avatar']}
                            />
                            <span className={styles['name']}>Michael McDonald</span>
                        </div>
                        <div className={styles['controls']}>
                            <div className={projectStyles['page']}>
                                <span className={styles['text13']}>&lt;</span>
                            </div>
                            <div className={` ${styles['next1']} ${projectStyles['page']} `}>
                                <span className={styles['text14']}>&lt;</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="how-it-works" className={styles['highlights']}>
                <div className={styles['highlight']}>
                    <div className={styles['content03']}>
                        <div className={styles['heading03']}>
                            <h2 className={styles['header02']}>
                                Excepteur sint occaecat cupidatat non proident
                            </h2>
                            <p className={styles['caption02']}>
                                Lorem ipsum dolor sit consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt.
                            </p>
                        </div>
                        <button
                            className={` ${projectStyles['button-arrow']} ${projectStyles['button']} `}
                        >
                            <span className={styles['text15']}>Read more</span>
                            <span className={styles['text16']}>&gt;</span>
                        </button>
                    </div>
                    <div className={styles['image1']}>
                        <img
                            alt="image"
                            src="/highlight-1-1500w.png"
                            className={styles['image2']}
                        />
                        <div className={styles['rectangle']}></div>
                    </div>
                </div>
                <div className={styles['highlight1']}>
                    <div className={styles['image3']}>
                        <img
                            alt="image"
                            src="/highlight-2-1500w.png"
                            className={styles['image4']}
                        />
                    </div>
                    <div className={styles['content04']}>
                        <div className={styles['heading04']}>
                            <h2 className={styles['header03']}>
                                Excepteur sint occaecat cupidatat non proident
                            </h2>
                            <p className={styles['caption03']}>
                <span>
                  Lorem ipsum dolor sit consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt.
                </span>
                                <br></br>
                                <br></br>
                                <span>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </span>
                                <br></br>
                            </p>
                        </div>
                        <button
                            className={` ${styles['find']} ${projectStyles['button']} `}
                        >
                            Find a local guide
                        </button>
                    </div>
                </div>
            </section>
            <section id="destinations" className={styles['destinations']}>
                <div className={styles['video-details']}>
                    <div className={styles['heading05']}>
                        <h2 className={styles['header04']}>Spotlight destinations</h2>
                        <p className={styles['caption04']}>
                            Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt.
                        </p>
                    </div>
                    <div className={styles['video-wrapper']}>
                        <div className={styles['tint1']}>
                            <img alt="image" src="/play.svg" className={styles['image5']} />
                        </div>
                        <video
                            src
                            poster="/spotlight-cover1-1500w.png"
                            className={styles['video2']}
                        ></video>
                    </div>
                </div>
                <p className={styles['caption05']}>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
                    ab illo inventore veritatis et quasi architecto.
                </p>
                <div className={styles['list']}>
                    <Link to="/home" className={styles['navlink09']}>
                        <div className={styles['location-wrapper']}>
                            <Location></Location>
                        </div>
                    </Link>
                    <Link to="/home" className={styles['navlink10']}>
                        <div className={styles['location-wrapper1']}>
                            <Location
                                Location="Paris, France"
                                Background="/destination-2-400h.png"
                            ></Location>
                        </div>
                    </Link>
                    <Link to="/home" className={styles['navlink11']}>
                        <div className={styles['location-wrapper2']}>
                            <Location
                                Location="Bruges, Belgium"
                                Background="/destination-3-400h.png"
                            ></Location>
                        </div>
                    </Link>
                    <Link to="/home" className={styles['navlink12']}>
                        <div className={styles['location-wrapper3']}>
                            <Location
                                Location="London, UK"
                                Background="/destination-4-400h.png"
                            ></Location>
                        </div>
                    </Link>
                </div>
                <button className={` ${styles['find1']} ${projectStyles['button']} `}>
                    Find a local guide
                </button>
            </section>
            <section id="guides" className={styles['guides']}>
                <div className={styles['heading06']}>
                    <h2 className={styles['header05']}>Meet our guides</h2>
                    <p className={styles['caption06']}>
                        Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt.
                    </p>
                </div>
                <div className={styles['list1']}>
                    <Link to="/home">
                        <div className={styles['guide-wrapper']}>
                            <Guide></Guide>
                        </div>
                    </Link>
                    <Link to="/home">
                        <div className={styles['guide-wrapper1']}>
                            <Guide
                                Location="Paris, France"
                                Portrait="/guide-2.png"
                                rootClassName="root-class-name2"
                            ></Guide>
                        </div>
                    </Link>
                    <Link to="/home">
                        <div className={styles['guide-wrapper2']}>
                            <Guide
                                Location="Bruges, Belgium"
                                Portrait="/guide-3.png"
                                rootClassName="root-class-name"
                            ></Guide>
                        </div>
                    </Link>
                    <Link to="/home">
                        <div className={styles['guide-wrapper3']}>
                            <Guide
                                Location="London, UK "
                                Portrait="/guide-4.png"
                                rootClassName="root-class-name1"
                            ></Guide>
                        </div>
                    </Link>
                </div>
            </section>
            <section className={styles['articles']}>
                <div id="articles" className={styles['content05']}>
                    <div className={styles['heading07']}>
                        <h2 className={styles['header06']}>
                            Excepteur sint occaecat cupidatat non proident
                        </h2>
                        <p className={styles['caption07']}>
                            Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt.
                        </p>
                    </div>
                    <div className={styles['list2']}>
                        <div className={styles['row']}>
                            <Article
                                Image="/articles-11-1500w.png"
                                rootClassName="root-class-name1"
                            ></Article>
                            <Article
                                Image="/articles-21-1500w.png"
                                Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                                rootClassName="root-class-name"
                            ></Article>
                        </div>
                        <div className={styles['row1']}>
                            <Article
                                Image="/articles-31-1500w.png"
                                Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                rootClassName="root-class-name2"
                            ></Article>
                            <Article
                                Image="/articles-41-1500w.png"
                                Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
                                rootClassName="root-class-name3"
                            ></Article>
                        </div>
                        <div className={styles['row2']}>
                            <button
                                className={` ${styles['read-all']} ${projectStyles['button-option']} ${projectStyles['button']} `}
                            >
                                Read all articles
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles['faq']}>
                <div id="faqs" className={styles['content06']}>
                    <div className={styles['heading08']}>
                        <h2 className={styles['header07']}>Frequently asked questions</h2>
                        <p className={styles['caption08']}>
                            Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt.
                        </p>
                    </div>
                    <div className={styles['accordion']}>
                        <div
                            data-role="accordion-container"
                            className={` ${projectStyles['accordion']} ${styles['element']} `}
                        >
                            <div className={styles['content07']}>
                <span className={styles['header08']}>
                  Lorem ipsum dolor sit ametetur elit?
                </span>
                                <span
                                    data-role="accordion-content"
                                    className={styles['description']}
                                >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </span>
                            </div>
                            <div className={styles['icon-container']}>
                                <svg
                                    viewBox="0 0 1024 1024"
                                    data-role="accordion-icon-closed"
                                    className={styles['icon15']}
                                >
                                    <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                                </svg>
                                <svg
                                    viewBox="0 0 1024 1024"
                                    data-role="accordion-icon-open"
                                    className={styles['icon17']}
                                >
                                    <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                                </svg>
                            </div>
                        </div>
                        <div
                            data-role="accordion-container"
                            className={` ${styles['element1']} ${projectStyles['accordion']} `}
                        >
                            <div className={styles['content08']}>
                <span className={styles['header09']}>
                  Excepteur sint occaecat cupidatat non sunt in culpa qui
                  officia deserunt mollit anim id est laborum?
                </span>
                                <span
                                    data-role="accordion-content"
                                    className={styles['description1']}
                                >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </span>
                            </div>
                            <div className={styles['icon-container1']}>
                                <svg
                                    viewBox="0 0 1024 1024"
                                    data-role="accordion-icon-closed"
                                    className={styles['icon19']}
                                >
                                    <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                                </svg>
                                <svg
                                    viewBox="0 0 1024 1024"
                                    data-role="accordion-icon-open"
                                    className={styles['icon21']}
                                >
                                    <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                                </svg>
                            </div>
                        </div>
                        <div
                            data-role="accordion-container"
                            className={` ${styles['element2']} ${projectStyles['accordion']} `}
                        >
                            <div className={styles['content09']}>
                <span className={styles['header10']}>
                  Tempor incididunt ut labore et dolore magna aliquat enim ad
                  minim?
                </span>
                                <span
                                    data-role="accordion-content"
                                    className={styles['description2']}
                                >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </span>
                            </div>
                            <div className={styles['icon-container2']}>
                                <svg
                                    viewBox="0 0 1024 1024"
                                    data-role="accordion-icon-closed"
                                    className={styles['icon23']}
                                >
                                    <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                                </svg>
                                <svg
                                    viewBox="0 0 1024 1024"
                                    data-role="accordion-icon-open"
                                    className={styles['icon25']}
                                >
                                    <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                                </svg>
                            </div>
                        </div>
                        <div
                            data-role="accordion-container"
                            className={` ${styles['element3']} ${projectStyles['accordion']} `}
                        >
                            <div className={styles['content10']}>
                <span className={styles['header11']}>
                  Lorem ipsum dolor sit ametetur elit?
                </span>
                                <span
                                    data-role="accordion-content"
                                    className={styles['description3']}
                                >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </span>
                            </div>
                            <div className={styles['icon-container3']}>
                                <svg
                                    viewBox="0 0 1024 1024"
                                    data-role="accordion-icon-closed"
                                    className={styles['icon27']}
                                >
                                    <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                                </svg>
                                <svg
                                    viewBox="0 0 1024 1024"
                                    data-role="accordion-icon-open"
                                    className={styles['icon29']}
                                >
                                    <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                                </svg>
                            </div>
                        </div>
                        <div
                            data-role="accordion-container"
                            className={` ${styles['element4']} ${projectStyles['accordion']} `}
                        >
                            <div className={styles['content11']}>
                <span className={styles['header12']}>
                  Incididunt ut labore et dolore?
                </span>
                                <span
                                    data-role="accordion-content"
                                    className={styles['description4']}
                                >
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </span>
                            </div>
                            <div className={styles['icon-container4']}>
                                <svg
                                    viewBox="0 0 1024 1024"
                                    data-role="accordion-icon-closed"
                                    className={styles['icon31']}
                                >
                                    <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                                </svg>
                                <svg
                                    viewBox="0 0 1024 1024"
                                    data-role="accordion-icon-open"
                                    className={styles['icon33']}
                                >
                                    <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="find" className={styles['find2']}>
                <div className={styles['heading09']}>
                    <h2 className={styles['header13']}>Find a local guide now</h2>
                    <p className={styles['caption09']}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam.
                    </p>
                </div>
                <button className={` ${styles['find3']} ${projectStyles['button']} `}>
                    Find a local guide
                </button>
            </section>
            <section className={styles['footer']}>
                <div className={styles['content12']}>
                    <div className={styles['main2']}>
                        <div className={styles['branding']}>
                            <div className={styles['heading10']}>
                                <img alt="image" src="/logo.svg" className={styles['image6']} />
                                <p className={styles['caption10']}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore
                                </p>
                            </div>
                        </div>
                        <div className={styles['links1']}>
                            <div className={styles['items']}>
                                <button
                                    className={` ${styles['link02']} ${projectStyles['button']} ${projectStyles['button-clean']} `}
                                >
                                    Find a guide
                                </button>
                                <a
                                    href="#destinations"
                                    className={` ${styles['link03']} ${projectStyles['button']} ${projectStyles['button-clean']} `}
                                >
                                    Find a tour
                                </a>
                                <a
                                    href="#destinations"
                                    className={` ${styles['link04']} ${projectStyles['button']} ${projectStyles['button-clean']} `}
                                >
                                    Visit a city
                                </a>
                                <a
                                    href="#destinations"
                                    className={` ${styles['link05']} ${projectStyles['button']} ${projectStyles['button-clean']} `}
                                >
                                    Visit a country
                                </a>
                            </div>
                            <div className={styles['items1']}>
                                <a
                                    href="#how-it-works"
                                    className={` ${styles['link06']} ${projectStyles['button']} ${projectStyles['button-clean']} `}
                                >
                                    How it works
                                </a>
                                <button
                                    className={` ${styles['link07']} ${projectStyles['button']} ${projectStyles['button-clean']} `}
                                >
                                    Cancelation policy
                                </button>
                                <button
                                    className={` ${styles['link08']} ${projectStyles['button']} ${projectStyles['button-clean']} `}
                                >
                                    Local guides
                                </button>
                                <button
                                    className={` ${styles['link09']} ${projectStyles['button']} ${projectStyles['button-clean']} `}
                                >
                                    Affiliate
                                </button>
                            </div>
                            <div className={styles['items2']}>
                                <button
                                    className={` ${styles['link10']} ${projectStyles['button']} ${projectStyles['button-clean']} `}
                                >
                                    About us
                                </button>
                                <button
                                    className={` ${styles['link11']} ${projectStyles['button']} ${projectStyles['button-clean']} `}
                                >
                                    Blog
                                </button>
                                <button
                                    className={` ${styles['link12']} ${projectStyles['button']} ${projectStyles['button-clean']} `}
                                >
                                    Partners
                                </button>
                                <button
                                    className={` ${styles['link13']} ${projectStyles['button']} ${projectStyles['button-clean']} `}
                                >
                                    Faqs
                                </button>
                                <button
                                    className={` ${styles['link14']} ${projectStyles['button']} ${projectStyles['button-clean']} `}
                                >
                                    Careers
                                </button>
                            </div>
                        </div>
                    </div>
                    <span className={styles['copyright']}>
            © 2022 Character. All Rights Reserved.
          </span>
                </div>
            </section>
            <div>
                <Script
                    html={`<script>
  function initAccordion() {
    /*
    Accordion - Code Embed
    */
    const accordionContainers = document.querySelectorAll(
      '[data-role="accordion-container"]'
    ); // All accordion containers
    const accordionContents = document.querySelectorAll(
      '[data-role="accordion-content"]'
    ); // All accordion content
    const accordionIconsClosed = document.querySelectorAll(
      '[data-role="accordion-icon-closed"]'
    ); // All accordion closed icons
    const accordionIconsOpen = document.querySelectorAll(
      '[data-role="accordion-icon-open"]'
    ); // All accordion open icons

    accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
    });

    accordionIconsClosed.forEach((icon) => {
      icon.style.display = "flex";
    });

    accordionIconsOpen.forEach((icon) => {
      icon.style.display = "none";
    });

    accordionContainers.forEach((accordionContainer, index) => {
      if (accordionContainer.classList.contains("initialised")) {
        return;
      }

      accordionContainer.classList.add("initiased");

      accordionContainer.addEventListener("click", () => {
        if (accordionContents[index].style.display === "flex") {
          // If the accordion is already open, close it
          accordionContents[index].style.display = "none";
          accordionIconsClosed[index].style.display = "flex";
          accordionIconsOpen[index].style.display = "none";
        } else {
          // If the accordion is closed, open it
          accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
          });

          accordionIconsClosed.forEach((accordionIcon) => {
            accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
          });

          accordionIconsOpen.forEach((accordionIcon) => {
            accordionIcon.style.display = "none";
          });

          accordionContents[index].style.display = "flex"; // Shows accordion content
          accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
          accordionIconsOpen[index].style.display = "flex";
        }
      });
    });
  }

  initAccordion();
</script>
`}
                ></Script>
            </div>
        </div>
    )
}

export default Home
