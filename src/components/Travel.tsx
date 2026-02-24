import styles from './Section.module.css';

export default function Travel() {
  return (
    <section className={styles.section}>
      <h2 className="section-title">Travel Tips</h2>
      <div className="divider" />
      <div className={styles.cards}>

        {/* WHERE TO STAY */}
        <div className={styles.card}>
          <h3 className={styles.cardHeading}>Where to Stay</h3>
          <p className={styles.cardBody}>
            Our wedding will take place at{' '}
            <a href="https://www.severovychod.sk/en/trip/kastiel-fintice/" target="_blank" rel="noreferrer">
              Kastiel Fintice
            </a>
            , on the outskirts of Prešov. We recommend booking accommodation in Prešov, ideally
            in the city centre around Hlavná(Main Street), Slovenská ulica(Close to Main Street), or Jarková(Close to Main Street). A shuttle will be
            running between the centre and the venue all night, so staying central means you can
            make the most of it — see Getting to the Wedding from Prešov below.
          </p>
          <p className={styles.cardSubheading}>Apartments &amp; Guesthouses</p>
          <ul className={styles.linkList}>
            <li><a href="https://www.booking.com/hotel/sk/retro-apartments-bosak.sk.html" target="_blank" rel="noreferrer">Retro Apartments Bosak</a></li>
            <li><a href="https://www.booking.com/hotel/sk/novy-apartmanovy-dom-v-srdci-presova.sk.html" target="_blank" rel="noreferrer">Nový Apartmánový Dom</a></li>
            <li><a href="https://www.booking.com/Share-JusZ8b" target="_blank" rel="noreferrer">Poetika</a></li>
            <li><a href="https://www.booking.com/hotel/sk/sk-apartments.sk.html" target="_blank" rel="noreferrer">SK Apartments</a></li>
            <li><a href="https://www.booking.com/hotel/sk/penzion-a-restauracia-bella-sicilia.sk.html" target="_blank" rel="noreferrer">Penzión Bella Sicilia</a></li>
          </ul>
          <p className={styles.cardSubheading}>Hotels</p>
          <ul className={styles.list}>
            <li>Hotel Dukla</li>
            <li>Hotel Belier</li>
            <li>Linneas Hotel</li>
          </ul>
        </div>

        {/* GETTING TO THE VENUE */}
        <div className={styles.card}>
          <h3 className={styles.cardHeading}>Getting to the Wedding from Prešov</h3>
          <p className={styles.cardBody}>
            No need to worry about the journey between the city and Kastiel Fintice. A taxi
            shuttle will be running throughout the evening, picking up and dropping off at a
            central location in Prešov (TBD) and the venue. It will run all night so you can
            come and go as it suits you.
          </p>
          <p className={styles.cardBody}>
            More details on the exact pickup point will be shared closer to the date.
          </p>
        </div>

        {/* GETTING TO PREŠOV */}
        <div className={styles.card}>
          <h3 className={styles.cardHeading}>Getting to Prešov</h3>

          <p className={styles.cardSubheading}>By Air</p>
          <p className={styles.cardBody}>
            Prešov only has a military airport, but Košice Airport is nearby. There are regular
            flights via Vienna (Austrian Airlines) and Warsaw (LOT). From Košice, you can rent a
            car, take a taxi, or take bus 23 to the train and bus station (~20 min), then a
            bus or train to Prešov (~30 min to Železničná stanica).
          </p>

          <p className={styles.cardSubheading}>By Train</p>
          <p className={styles.cardBody}>
            There are good connections from Vienna and Bratislava. First class is comfortable and
            cheap — there's a restaurant carriage with warm food, snacks, and drinks (card or cash).
            The route passes through the mountains and stops at Vysoké Tatry.
          </p>
          <p className={styles.cardBody}>
            Note: trains do not go directly to Prešov — you'll change at Kysak (~20 km away), with
            a connecting service 15–20 minutes later.
          </p>
          <ul className={styles.linkList}>
            <li><a href="https://www.zssk.sk/en/" target="_blank" rel="noreferrer">zssk.sk — Slovak train booking</a></li>
            <li><a href="https://cp.sk/en/vlakbusmhd/spojenie/" target="_blank" rel="noreferrer">cp.sk — Check bus &amp; train connections</a></li>
          </ul>

          <p className={styles.cardSubheading}>By Bus</p>
          <p className={styles.cardBody}>
            Buses run from Vienna Airport to Bratislava (Slovak Lines or Flixbus — Slovak Lines is
            more comfortable), and from Bratislava to Prešov via DAKA (direct). Arrive at the
            platform at least 15 minutes early.
          </p>
          <p className={styles.cardBody}>
            <strong>Layover in Bratislava:</strong> The Bus Terminal is in a renovated shopping
            mall with plenty of restaurants. The Main Train Station is older with fewer options —
            toilets there are paid and cash only.
          </p>

          <p className={styles.cardSubheading}>By Car</p>
          <p className={styles.cardBody}>
            There are several routes from Vienna; a recently opened tunnel has made one of them the
            fastest. Along the off-highway stretches in Central Slovakia, look out for roadside
            stands selling traditional cheese, honey, and fruit — watch for big <em>SYR</em> signs
            (syr = cheese in Slovak).
          </p>
          <p className={styles.cardBody}>
            A highway vignette is required:{' '}
            <a href="https://ndsas.sk/spoplatnenie/elektronicka-dialnicna-znamka" target="_blank" rel="noreferrer">
              ndsas.sk
            </a>{' '}
            — 1-day €8.10 · 10-day €10.80. (The English version of the site may not load; the
            Slovak version works fine.)
          </p>
        </div>

        {/* TRANSPORT WITHIN PREŠOV */}
        <div className={styles.card}>
          <h3 className={styles.cardHeading}>Transport within Prešov</h3>

          <p className={styles.cardSubheading}>Public Transport</p>
          <p className={styles.cardBody}>
            Prešov has good and cheap buses and trolleybuses. Check connections at{' '}
            <a href="http://www.dpmp.sk" target="_blank" rel="noreferrer">dpmp.sk</a> (Slovak only)
            or use one of these apps: <strong>Ubian</strong>, <strong>MHD Prešov</strong>,{' '}
            <strong>iMHD Prešov</strong>. Note that Google Maps has poor coverage here.
          </p>
          <p className={styles.cardBody}>
            On dpmp.sk, select <em>Pracovný deň – prázdniny</em> for weekdays and{' '}
            <em>Sobota, Nedeľa, sviatok</em> for weekends.
          </p>
          <p className={styles.cardBody}>
            Tickets can be bought at orange machines at each stop or by card directly on the
            vehicle. Remember to also buy a ticket for luggage. Tickets are sold for 15 min, 60
            min, and 24 hours — for travel within Prešov you need <strong>1. pásmo</strong>.
            Children under 6 travel free; ages 6+ use a discounted (<em>Zľavnený</em>) ticket;
            adults buy <em>Celý</em>.
          </p>

          <p className={styles.cardSubheading}>Taxi</p>
          <ul className={styles.list}>
            <li>Alfa Taxi — <a href="tel:+421940545556">+421 940 54 55 56</a></li>
            <li>Halo Taxi — <a href="tel:+421908303909">+421 908 30 39 09</a></li>
            <li>Easy Taxi — <a href="tel:+421907252525">+421 907 25 25 25</a></li>
          </ul>
          <p className={styles.cardBody}>Bolt is also available in the city.</p>
        </div>

      </div>
    </section>
  );
}
