import React from 'react'
import styles from './home.module.css'
import Link from 'next/link'
import homepage from '@/constants/content/homepage'


const Homepage = () => {
  const {projects} = homepage
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.navbarHeader}>
          </div>
          <div className={styles.content}>
            <img src="/images/home/Group.svg" className={styles.pic} />
            <p>A friendly bunch of thinkers, designers & techies constantly <span style={{ color: 'seagreen' }}>delivering good stuff.</span></p>
          </div>
        </div>


        <div className={styles.list}>
          <ul>
            <li><span style={{ color: 'seagreen' }}>Web</span> Design</li>
            <li><span style={{ color: 'seagreen' }}>Blockchain</span> Development</li>
            <li><span style={{ color: 'seagreen' }}>Mobile</span> Apps</li>
            <li><span style={{ color: 'seagreen' }}>Social Media &</span> Web Marketing</li>
          </ul>
        </div>
      </nav>

      <div className={styles.items}>
        <div className={styles.first}>
          <p>Projects</p>
          <h2>We have built some insane apps and websites.</h2>
        </div>
        <div className={styles.left}>
          <ul>
            <li><span style={{ color: 'black' }}>Featured</span></li>
            <li className={styles.hover}>
              <Link href="/">Health-tech</Link>
            </li>
            <li className={styles.hover}>
              <Link href="/">Agri-tech</Link>
            </li>
            <li className={styles.hover}>
              <Link href="/">Consumer internet</Link>
            </li>
            <li className={styles.hover}>
              <Link href="/">Retail</Link>
            </li>
            <li className={styles.hover}>
              <Link href="/">Fintech</Link>
            </li>
            <li className={styles.hover}>
              <Link href="/">Saas</Link>
            </li>
          </ul>
        </div>

        <div>
          <div className={styles.right}>
            <div className={styles.macbook}>
              <img src="/images/home/MacBook Pro-logo.svg" alt="" />
            </div>
            <img src="/images/home/Mayeka-logo.svg" alt="" />
            <h3>A B2B SMS Portal </h3>
            <p>A cloud-based platform to reach,</p>
            <p>engage and manage customer</p>
            <p>communication globally</p>
            <h4>Website</h4>
            <p1>CRM</p1>


          </div>
          <div className={styles.right2}>
            <div className={styles.samsumg}>
              <img src="/images/home/Galaxy S21 Ultra.svg" alt="" />
            </div>
            <img src="/images/home/khat-logo.svg" alt="" />
            <h3>Digital Khata</h3>
            <p>Keep track of all Udhar credit or debit</p>
            <p>transaction of consumers for every</p>
            <p>business.</p>
            <h4>Mobile App</h4>
            <p1>Merchant / Shopkeepers</p1>
          </div>
        </div>
      </div>

      <div className={styles.end}>
        <div className={styles.first}>
          <p>Services</p>
          <h2>What we are Good at</h2>
        </div>
        <div className={styles.bottom}>
          <h5>Blockchain Development </h5>
          <p>Enim diam vulputate <span style={{ color: 'seagreen' }}>ut pharetra.</span> Id eu nisl nunc mi ipsum faucibus vitae <span style={{ color: 'seagreen' }}> aliquet.</span></p>
        </div>

        <div className={styles.bottom2}>
          <h5>Blockchain Development </h5>
          <p>Enim diam vulputate <span style={{ color: 'seagreen' }}>ut pharetra.</span> Id eu nisl nunc mi ipsum faucibus vitae <span style={{ color: 'seagreen' }}> aliquet.</span></p>
        </div>

        <div className={styles.bottom3}>
          <h5>Social Media and Web Marketing</h5>
          <p>Enim diam vulputate <span style={{ color: 'seagreen' }}>ut pharetra.</span> Id eu nisl nunc mi ipsum faucibus vitae <span style={{ color: 'seagreen' }}> aliquet.</span></p>
        </div>

        <div className={styles.bottom4}>
          <h5>Design and Development</h5>
          <p>Enim diam vulputate <span style={{ color: 'seagreen' }}>ut pharetra.</span> Id eu nisl nunc mi ipsum faucibus vitae <span style={{ color: 'seagreen' }}> aliquet.</span></p>
        </div>
      </div>

      <div>
        <div className={styles.main}>
          <p>Found us a good fit for your project?</p>
          <p1>Let’s create something together!</p1>
        </div>
        <div className={styles.button}>
          <p>Get in touch</p>
        </div>
      </div>

      <div className={styles.mid}>
        <div className={styles.first}>
          <p>Testimonials</p>
          <h2>Some Awesome Words by our Clients</h2>
        </div>
      </div>

      <div className={styles.lower}>
        <p>“Viverra orci sagittis eu volutpat odio facilisis mauris. Neque viverra justo nec ultrices dui sapien eget mi proin”.</p>
        <p1>Christina jhonson</p1>
        <p2>CEO • Locatee </p2>
        <img src="/images/home/Group 41.svg" alt="" />
        <div className={styles.left}>
          <img src="/images/home/Group 79.svg" alt="" />
        </div>
        <div className={styles.on}>
          <img src="/images/home/Group 78.svg" alt="" />
        </div>
      </div>

      <div className={styles.cover}>
        <p>Our Clients</p>
        <p1>Tincidunt eget nullam non nisi est sit amet facilisis. Imperdiet massa tincidunt nunc pulvinar sapien et. Risus in hendrerit gravida rutrum quisque non tellus orci.</p1>

        <div className={styles.finance}>
          <img src="/images/home/1-Finance-logo.svg" alt="" />
          <div className={styles.bank}>
            <img src="/images/home/bank.svg" alt="" />
            <div className={styles.shepays}>
              <img src="/images/home/shepays.svg" alt="" />
              <div className={styles.Ruloans}>
                <img src="/images/home/Ruloans.svg" alt="" />
                <div className={styles.qube}>
                  <img src="/images/home/qube.svg" alt="" />
                  <div className={styles.bharat}>
                    <img src="/images/home/bharat.svg" alt="" />
                    <div className={styles.marwadi}>
                      <img src="/images/home/marwari.svg" alt="" />
                      <div className={styles.dhanvarsha}>
                        <img src="/images/home/dhanvarsha.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.row}>
          <div className={styles.col}>
            <img src="/images/footer/novostack-brand-name-logo.png" className={styles.novo} />
            <p>A network of globally positioned CDN's crafting multi-lingual, multi-currency and far stretched e-commerce solutions.</p>
          </div>
          <div className={styles.hq}>
            <h3>HQ INDIA</h3>
            <p>Ground Floor, A-31, Block A, Sector 3, Noida, Uttar Pradesh 201301</p>
          </div>
          <div className={styles.col1}>
            <h3>Navigation</h3>
            <ul>
              <li>Home</li>
              <li>Projects</li>
              <li>Services</li>
              <li>About Us</li>
              <li>Lets Talk</li>
            </ul>
          </div>
          <div className={styles.col2}>
            <h3>Services Offered</h3>
            <ul>
              <li>Design & Development</li>
              <li>Blockchain Developmwnt</li>
              <li>SEO & Digital Marketing</li>
            </ul>
          </div>
        </div>
        <hr></hr>
        <p className={styles.copy}>© 2020 NovoStack Pvt. Ltd.</p>
        <p className={styles.term}>Cookies • Privacy Policy • Terms of Service</p>
      </div>

    </>
  )
}


export default Homepage;