import styles from './Section.module.css';

export default function Tourism() {
  return (
    <section className={styles.section}>
      <h2 className="section-title">Tourist Attractions in Slovakia</h2>
      <div className="divider" />
      <div className={styles.cards}>

        <div className={styles.card}>
          <h3 className={styles.cardHeading}>What to see in Presov region</h3>
          <p className={styles.cardBody}>
            Some of the region's highlights are mentioned on this (very non-exhaustive, even quite limited) website:{' '}
            <a href="https://slovakia.travel/en/presov-administrative-region" target="_blank" rel="noreferrer">https://slovakia.travel/en/presov-administrative-region</a>.
            The following link{' '}
            <a href="https://slovakia.travel/en/spis-region-will-surprise-you-with-a-soft-slovak-whiskey-and-a-tasty-unesco" target="_blank" rel="noreferrer">https://slovakia.travel/en/spis-region-will-surprise-you-with-a-soft-slovak-whiskey-and-a-tasty-unesco</a>{' '}
            gives you tips on tasting within the region – from home-style cuisine, cafes, local specialities, to Slovak whisky brewery Nestville.
          </p>
        </div>

        <h2 className="section-title" style={{ marginTop: 28 }}>UNESCO World Heritage places</h2>
        {/* <div className="divider" /> */}
        <div className={styles.card} style={{ borderLeft: 'none', paddingLeft: 0 }}>
          <p className={styles.cardBody}>
            The booklet available on this link{' '}
            <a href="https://slovakia.travel/en/places-to-go/unesco" target="_blank" rel="noreferrer">https://slovakia.travel/en/places-to-go/unesco</a>{' '}
            provides a great overview of the hidden and not-so-hidden gems of Slovakia. Below are some of the places and activities mentioned in it, with the focus on places relatively close to Presov.
          </p>
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardHeading}>Culture</h3>

          <p className={styles.cardSubheading}>Cities</p>
          <ul className={styles.list}>
            <li>Levoca</li>
            <li>Bardejov</li>
          </ul>

          <p className={styles.cardSubheading}>Castles</p>
          <ul className={styles.list}>
            <li>Spissky Hrad (castle)</li>
          </ul>

          <p className={styles.cardSubheading}>Wooden churches</p>
          <ul className={styles.list}>
            <li>Ladomirova – Greek Catholic Church of st. Michael the Archangel</li>
            <li>Ruska Bystra – Greek Catholic Church of st. Nicholas the Bishop</li>
            <li>Bodrudzal – Greek Catholic Church of st. Nicholas</li>
            <li>Hervatov – Roman Catholic Church of Francis of Assisi</li>
            <li>Kezmarok – Envangelical articular church of The Holy Trinity</li>
          </ul>

          <p className={styles.cardSubheading}>Living heritage</p>
          <ul className={styles.list}>
            <li>Falconry – with shows often taking place at different castles</li>
            <li>Puppetry</li>
            <li>Fujara music</li>
            <li>Bagpipes music</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardHeading}>Nature</h3>
          <p className={styles.cardBody}>
            Havesova – primeval forest, part of National park Poloniny, contains the tallest beech trees in Europe. A primeval forest is a forest that hasn't been exploited or cut down by man. If it has been in the past, then a sufficient amount of time has elapsed for the forest to become primeval again. If following the educational trail, the hike will take you around 2 hours.
          </p>
          <p className={styles.cardBody}>Vihorlat – primeval forest</p>
          <p className={styles.cardSubheading}>Caves</p>
          <p style={{ fontStyle: 'italic'}} > Coming Soon </p>
          <p className={styles.cardSubheading}>Living heritage, not necessarily close to Presov</p>
          <p className={styles.cardBody}>
            Modrotlac, lit. blueprinting – indigo printing. Slovakia is the only remaining European counterpart to Japan in terms of traditional indigo dyeing. It can be seen in museums and additionally, there is one still active family, with possibility to book workshops or buy ready-made products and fabrics{' '}
            <a href="https://www.modrotlac.sk/" target="_blank" rel="noreferrer">https://www.modrotlac.sk/</a>{' '}
            around Bratislava, as well as one artist in Central Slovakia{' '}
            <a href="https://atelierrabada.sk/o-nas/" target="_blank" rel="noreferrer">https://atelierrabada.sk/o-nas/</a>,
            selling clothes and offering group workshops as well, where one can create their own design.
          </p>
          <p className={styles.cardBody}>
            Drotarstvo – wire craft. Wire craft developed in the north-western parts of Slovakia in mid. 18th century, first as a way to repair kitchenware, but also via producing various (decorative) products from wire. It can be seen in museums and there are still some active craftsmen, e.g. Robert Hozak, whose products you can buy via{' '}
            <a href="https://shop.drotaria.sk/robert-hozak" target="_blank" rel="noreferrer">https://shop.drotaria.sk/robert-hozak</a>
          </p>
        </div>

        <h2 className="section-title">Non-UNESCO, but still amazing</h2>
        {/* <div className="divider" /> */}

        <div className={styles.card}>
          <p className={styles.cardBody}>
            Starina – viewing tower, Beskydsky Panteon – tourist attractions around the drinking water dam Starina, which was built from 1981 to 1988 by flooding the surrounding villages. The story of ruthenian people (national minority) who had to relocate, can be seen in the film from 2025 called Potopa (
            <a href="https://en.filmpotopa.sk/" target="_blank" rel="noreferrer">https://en.filmpotopa.sk/</a>
            ). Close to Starina is National park Poloniny.
          </p>
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardHeading}>Water</h3>
          <p className={styles.cardBody}>
            This website offers a good overview of swimming possibilities around Presov{' '}
            <a href="https://www.kupaliska.sk/m/presov/" target="_blank" rel="noreferrer">https://www.kupaliska.sk/m/presov/</a>
          </p>

          <p className={styles.cardSubheading}>City pools and water parks</p>
          <p className={styles.cardBody}>
            Summers in Slovakia are very hot and it's only natural to want to dip into water and cool down. In Presov, you have three pools – Plaza Beach{' '}
            <a href="https://www.plazabeach.sk/sk/letnekupalisko" target="_blank" rel="noreferrer">https://www.plazabeach.sk/sk/letnekupalisko</a>,
            Aquapark Delna{' '}
            <a href="https://aquaparkpresov.sk/" target="_blank" rel="noreferrer">https://aquaparkpresov.sk/</a>{' '}
            and Sun Park{' '}
            <a href="https://www.sunparkpresov.sk/" target="_blank" rel="noreferrer">https://www.sunparkpresov.sk/</a>.
          </p>
          <p className={styles.cardBody}>
            If you want to go to other aquaparks, one can recommend e.g. Aquacity Poprad{' '}
            <a href="https://aquacity.sk" target="_blank" rel="noreferrer">https://aquacity.sk</a>,
            Tatralandia Liptovsky Mikulas{' '}
            <a href="https://www.tatralandia.sk/" target="_blank" rel="noreferrer">https://www.tatralandia.sk/</a>,
            Besenova{' '}
            <a href="https://www.besenova.com/" target="_blank" rel="noreferrer">https://www.besenova.com/</a>.
          </p>

          <p className={styles.cardSubheading}>Spas</p>
          <p className={styles.cardBody}>
            Additionally, there is a rich culture of going to spa based on a wealth of mineral and thermal springs in Slovakia. A famous spa within the Presov region is Bardejovske kupele. Outside of the region, Trencianske kupele are very famous.
          </p>

          <p className={styles.cardSubheading}>Lakes and dams</p>
          <p className={styles.cardBody}>
            If you're looking for swimming in the nature, you can head to dams – e.g. Domasa, Sigord, Ruzin.
            These are some of the lakes within or close to the Presov region:
            Zemplinska Sirava, Palcmanska Masa, Liptovska Mara, Ruzin, Bukovec, Morske oko. They're surrounded by beautiful nature and quite popular during summer.
          </p>
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardHeading}>Other points of interest</h3>
          <p className={styles.cardBody}>
            Geyser in Herlany – expected eruption time published on{' '}
            <a href="https://www.herlany.sk/narodna-prirodna-pamiatka-herliansky-gejzir" target="_blank" rel="noreferrer">https://www.herlany.sk/narodna-prirodna-pamiatka-herliansky-gejzir</a>,
            it is recommended to arrive an hour earlier and the eruption can last about 25 minutes. The geyser erupts up to 22 metres high.
          </p>
          <p className={styles.cardBody}>
            Ganovce geyser – erupts mineral water in 30-60 min intervals. The discovery site of the cast of the skull of a Neanderthal is close by, can be visited in Geopark Neandertal{' '}
            <a href="https://www.geoparkganovce.sk/neanderthal-home.aspx" target="_blank" rel="noreferrer">https://www.geoparkganovce.sk/neanderthal-home.aspx</a>.
            Other points of interest in the area are e.g. Tomasovksy vyhlad, a beautiful hiking spot in Slovensky raj (National park Slovak Paradise).
          </p>
          <p className={styles.cardBody}>
            Slovenske technicke muzeum Solivar – museum of salt. The excursion takes you across some 7-10 different buildings in the village of Solivar, each of which had a different function in the process of salt production. A real must-see!
          </p>
        </div>

      </div>
    </section>
  );
}
