import styles from './Section.module.css';

const sections = [
  {
    heading: 'Basics',
    rows: [
      ['Hello (formal)', 'Dobrý deň', 'doh-bree den'],
      ['Hello (informal)', 'Ahoj', 'ah-hoy'],
      ['Goodbye (formal)', 'Dovidenia', 'doh-vee-den-ya'],
      ['Goodbye (informal)', 'Čau', 'chow'],
      ['Please / You\'re welcome', 'Prosím', 'proh-seem'],
      ['Thank you', 'Ďakujem', 'jah-koo-yem'],
      ['Yes', 'Áno', 'ah-no'],
      ['No', 'Nie', 'nyeh'],
      ['Excuse me / Sorry', 'Prepáčte', 'preh-pahch-teh'],
      ['I don\'t understand', 'Nerozumiem', 'neh-roh-zoo-myem'],
      ['Do you speak English?', 'Hovoríte po anglicky?', 'hoh-voh-ree-teh poh ang-lits-kee'],
    ],
  },
  {
    heading: 'Food & Drink',
    rows: [
      ['Water', 'Voda', 'voh-dah'],
      ['Beer', 'Pivo', 'pee-voh'],
      ['Wine', 'Víno', 'vee-noh'],
      ['Coffee', 'Káva', 'kah-vah'],
      ['Menu', 'Jedálny lístok', 'yeh-dahl-nee lees-tok'],
      ['The bill, please', 'Účet, prosím', 'oo-chet proh-seem'],
      ['Cheers!', 'Na zdravie!', 'nah zdrah-vyeh'],
      ['Delicious!', 'Vynikajúce!', 'vih-nih-kah-yoo-tseh'],
    ],
  },
  {
    heading: 'Wedding Words',
    rows: [
      ['Wedding', 'Svadba', 'svahd-bah'],
      ['Bride', 'Nevesta', 'neh-veh-stah'],
      ['Groom', 'Ženích', 'zheh-neekh'],
      ['Congratulations', 'Gratulujeme', 'grah-too-loo-yeh-meh'],
      ['Love', 'Láska', 'lahs-kah'],
      ['Dance', 'Tanec', 'tah-nets'],
      ['Music', 'Hudba', 'hood-bah'],
      ['Toast', 'Prípitok', 'pree-pee-tok'],
    ],
  },
  {
    heading: 'Getting Around',
    rows: [
      ['Where is…?', 'Kde je…?', 'gdeh yeh'],
      ['Left', 'Vľavo', 'vlyah-voh'],
      ['Right', 'Vpravo', 'vprah-voh'],
      ['Straight ahead', 'Rovno', 'rov-noh'],
      ['Train station', 'Vlaková stanica', 'vlah-koh-vah stah-nyee-tsah'],
      ['Bus stop', 'Autobusová zastávka', 'ow-toh-boo-soh-vah zahs-tahv-kah'],
      ['Hotel', 'Hotel', 'hoh-tel'],
      ['Airport', 'Letisko', 'leh-tees-koh'],
      ['Hospital', 'Nemocnica', 'neh-mots-nyee-tsah'],
    ],
  },
];

export default function Slovak() {
  return (
    <section className={styles.section}>
      <h2 className="section-title">Slovak Language</h2>
      <div className="divider" />
      <div className={styles.prose} style={{ maxWidth: 720, marginBottom: 40 }}>
      </div>
      <div className={styles.cards}>
        {sections.map((sec) => (
          <div key={sec.heading} className={styles.card}>
            <h3 className={styles.cardHeading}>{sec.heading}</h3>
            <table className={styles.translationTable}>
              <thead>
                <tr>
                  <th>English</th>
                  <th>Slovak</th>
                  <th>Sounds like</th>
                </tr>
              </thead>
              <tbody>
                {sec.rows.map(([en, sk, pron]) => (
                  <tr key={en}>
                    <td>{en}</td>
                    <td className={styles.translationSlovak}>{sk}</td>
                    <td className={styles.translationPronunciation}>{pron}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </section>
  );
}
