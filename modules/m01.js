/* MODULE 1 - Inzicht in getallen (Nando 1, getallenleer & algebra) */
(function () {
  'use strict';
  var V = window.Vragen, G = V.G, T = V.T, B = V.B, K = V.K;
  var POS = ['eenheden', 'tientallen', 'honderdtallen', 'duizendtallen', 'tienduizendtallen', 'honderdduizendtallen', 'tienden', 'honderdsten'];
  var BEGRIP = ['de termen', 'de som', 'het aftrektal', 'de aftrekker', 'het verschil', 'de factoren', 'het product', 'het deeltal', 'de deler', 'het quotiënt'];
  var ELT = ['∈', '∉'], DEEL = ['⊂', '⊄'], JN = ['ja', 'neen'], BEW = ['+', '−', '·', ':'];
  function rijen(a) { return '<div class="rijen">' + a.map(function (x) { return '<div>' + x + '</div>'; }).join('') + '</div>'; }

  window.registreerModule({
    id: 'm01', nummer: 1, titel: 'Inzicht in getallen', domein: 'Getallenleer en algebra', standaardActief: true,

    theorie: {
      talstelsels: {
        titel: 'Talstelsels door de eeuwen heen', html:
          '<ul><li><b>Egyptenaren</b> (meer dan 4000 jaar geleden): hiërogliefen. Je telt de waarde van alle symbolen op. De plaats van een symbool speelt geen rol. Dat noemen we een <b>additief talstelsel</b>.</li>' +
          '<li><b>Romeinse cijfers</b> (vanaf 200 voor Christus): I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000. Staat een kleiner symbool voor een groter, dan trek je het af: IV = 4, IX = 9, XL = 40.</li>' +
          '<li><b>Maya’s</b>: een twintigdelig stelsel met drie symbolen. Het is een <b>positiestelsel</b>: de plaats van een symbool is belangrijk.</li>' +
          '<li><b>Onze cijfers</b> (0 tot en met 9) bestaan sinds de tiende eeuw. Pas in de 18de eeuw verdrongen ze de Romeinse cijfers.</li>' +
          '<li><b>Simon Stevin</b> uit Brugge voerde rond 1600 de kommagetallen in.</li>' +
          '<li><b>Computers</b> rekenen in het tweedelig of <b>binair stelsel</b> met enkel 0 en 1. De plaatsen zijn van rechts naar links 1, 2, 4, 8, … waard. Zo is binair 10 = 2, binair 11 = 3 en binair 100 = 4.</li></ul>'
      },
      positie: {
        titel: 'Ons talstelsel', html:
          '<p>Wij gebruiken 10 cijfers: 0, 1, 2, 3, 4, 5, 6, 7, 8 en 9. Ons talstelsel is het <b>tiendelig stelsel</b>. De plaats van een cijfer bepaalt zijn waarde: het is een <b>positiestelsel</b>.</p>' +
          '<table><tr><th>getal</th><th>D</th><th>H</th><th>T</th><th>E</th><th>,</th><th>t</th><th>h</th><th>d</th></tr><tr><td>7304,956</td><td>7</td><td>3</td><td>0</td><td>4</td><td>,</td><td>9</td><td>5</td><td>6</td></tr></table>' +
          '<p>D = duizendtallen, H = honderdtallen, T = tientallen, E = eenheden, t = tienden, h = honderdsten, d = duizendsten. Links van de duizendtallen staan de tienduizendtallen en de honderdduizendtallen.</p>'
      },
      ordenen: {
        titel: 'Getallen ordenen', html:
          '<table><tr><th>symbool</th><th>lees je als</th></tr><tr><td>=</td><td>is gelijk aan</td></tr><tr><td>≠</td><td>is niet gelijk aan</td></tr><tr><td>&lt;</td><td>is kleiner dan</td></tr><tr><td>&gt;</td><td>is groter dan</td></tr><tr><td>⩽</td><td>is kleiner dan of gelijk aan</td></tr><tr><td>⩾</td><td>is groter dan of gelijk aan</td></tr></table>' +
          '<div class="vb">3 ⩽ 8 is waar, want 3 &lt; 8. Ook 4 ⩾ 4 is waar, want 4 = 4.</div><p>Tip: vergelijk kommagetallen cijfer per cijfer, van links naar rechts. Maak breuken eerst gelijknamig of zet ze om naar een kommagetal.</p>'
      },
      natuurlijk: {
        titel: 'Natuurlijke en gehele getallen', html:
          '<div class="def">Een <b>natuurlijk getal</b> is een telresultaat. ℕ = {0, 1, 2, 3, …}. ℕ₀ is de verzameling van de natuurlijke getallen zonder nul.</div>' +
          '<div class="def">De <b>gehele getallen</b>: ℤ = {…, −3, −2, −1, 0, 1, 2, 3, …}. ℤ⁺ zijn de positieve en ℤ⁻ de negatieve gehele getallen.</div>' +
          '<p>Het teken voor een getal is het <b>toestandsteken</b>. −24 is negatief, +16 = 16 is positief. Een duiker op 24 m onder de zeespiegel bevindt zich op −24 m.</p>'
      },
      rationaal: {
        titel: 'Rationale getallen', html:
          '<div class="def">Een <b>rationaal getal</b> is een getal dat je kunt noteren als een breuk met in de teller een geheel getal en in de noemer een geheel getal dat niet nul is. De verzameling noteren we als ℚ.</div>' +
          '<p>Elk rationaal getal kun je als breuk en in decimale vorm schrijven: {1/4} = 0,25 = 25 %.</p>' +
          '<p>Let op: {12/4} = 3 is ook een natuurlijk getal en −{12/6} = −2 is een geheel getal. Reken een breuk dus eerst uit.</p><p>Er bestaan ook getallen die niet rationaal zijn, zoals π.</p>'
      },
      symbolen: {
        titel: 'De symbolen ∈, ∉, ⊂ en ⊄', html:
          '<table><tr><th>symbool</th><th>lees je als</th><th>voorbeeld</th></tr><tr><td>∈</td><td>is een element van</td><td>2 ∈ ℕ</td></tr><tr><td>∉</td><td>is geen element van</td><td>−3 ∉ ℕ</td></tr><tr><td>⊂</td><td>is een deelverzameling van</td><td>ℕ ⊂ ℤ</td></tr><tr><td>⊄</td><td>is geen deelverzameling van</td><td>ℤ ⊄ ℕ</td></tr></table>' +
          '<p>Elk natuurlijk getal is een geheel getal en elk geheel getal is een rationaal getal: ℕ ⊂ ℤ ⊂ ℚ.</p><p>∈ gebruik je tussen een element en een verzameling. ⊂ gebruik je tussen twee verzamelingen.</p>'
      },
      procent: {
        titel: 'Procent, breuk en kommagetal', html:
          '<p>Procent betekent "per honderd". 20 % = {20/100} = {1/5} = 0,2.</p><table><tr><th>procent</th><th>breuk</th><th>kommagetal</th></tr><tr><td>25 %</td><td>{1/4}</td><td>0,25</td></tr><tr><td>80 %</td><td>{4/5}</td><td>0,8</td></tr><tr><td>250 %</td><td>{5/2}</td><td>2,5</td></tr></table>'
      },
      begrippen: {
        titel: 'Begrippen bij de hoofdbewerkingen', html:
          '<table><tr><th>bewerking</th><th>voorbeeld</th><th>begrippen</th></tr>' +
          '<tr><td>optelling</td><td>36 + 52 = 88</td><td>36 en 52 zijn de <b>termen</b>, 88 is de <b>som</b></td></tr>' +
          '<tr><td>aftrekking</td><td>92 − 19 = 73</td><td>92 is het <b>aftrektal</b>, 19 is de <b>aftrekker</b>, 73 is het <b>verschil</b></td></tr>' +
          '<tr><td>vermenigvuldiging</td><td>6 · 12 = 72</td><td>6 en 12 zijn de <b>factoren</b>, 72 is het <b>product</b></td></tr>' +
          '<tr><td>deling</td><td>126 : 3 = 42</td><td>126 is het <b>deeltal</b>, 3 is de <b>deler</b>, 42 is het <b>quotiënt</b></td></tr></table>' +
          '<p>Als maalteken gebruik je vanaf nu een gecentreerd punt: 4 · 6 = 24.</p>'
      },
      deling: {
        titel: 'Opgaande en niet-opgaande deling', html:
          '<div class="def">Een <b>opgaande deling</b> is een deling waarbij de rest nul is: D = d · q.</div>' +
          '<div class="def">Een <b>niet-opgaande deling</b> is een deling waarbij de rest groter is dan nul en kleiner dan de deler: D = d · q + r met 0 &lt; r &lt; d.</div>' +
          '<p>D is het deeltal, d de deler (niet nul), q het quotiënt en r de rest.</p><div class="vb">370 : 3 geeft quotiënt 123 en rest 1. Controle: 3 · 123 + 1 = 370.</div>'
      },
      veelvoud: {
        titel: 'Veelvouden en delers', html:
          '<div class="def">Een <b>veelvoud</b> van een natuurlijk getal is een product van dat getal met 0, 1, 2, 3, 4, … De veelvouden van 4 noteer je als 4ℕ = {0, 4, 8, 12, …}.</div>' +
          '<p>0 is een veelvoud van elk natuurlijk getal.</p>' +
          '<div class="def">2 is een <b>deler</b> van 10 want 10 : 2 = 5 is een opgaande deling. We noteren 2 | 10. De delers van 10: del 10 = {1, 2, 5, 10}.</div>' +
          '<p>1 is een deler van elk natuurlijk getal. Elk getal (niet nul) heeft zichzelf als deler. 0 is nooit een deler.</p><p>Tip: zoek delers in paren: 36 = 1 · 36 = 2 · 18 = 3 · 12 = 4 · 9 = 6 · 6.</p>'
      },
      priem: {
        titel: 'Priemgetallen', html:
          '<div class="def">Een <b>priemgetal</b> is een natuurlijk getal dat precies twee verschillende delers heeft: 1 en zichzelf.</div>' +
          '<p>De priemgetallen kleiner dan 30: 2, 3, 5, 7, 11, 13, 17, 19, 23 en 29. 2 is het enige even priemgetal. 1 is geen priemgetal, want 1 heeft maar één deler.</p>'
      },
      ontbinden: {
        titel: 'Ontbinden in priemfactoren', html:
          '<ol><li>Is het getal deelbaar door 2? Noteer rechts 2 en eronder links het quotiënt. Herhaal zolang het kan.</li><li>Doe hetzelfde met 3, daarna met 5, 7, 11, …</li><li>Stop als het quotiënt 1 is.</li><li>Het getal is het product van alle priemgetallen rechts.</li></ol>' +
          '<div class="vb"><table><tr><td>60</td><td>2</td></tr><tr><td>30</td><td>2</td></tr><tr><td>15</td><td>3</td></tr><tr><td>5</td><td>5</td></tr><tr><td>1</td><td></td></tr></table>60 = 2 · 2 · 3 · 5</div>'
      },
      kgv: {
        titel: 'Kleinste gemeenschappelijk veelvoud (kgv)', html:
          '<p><b>Door opsomming:</b> som de veelvouden op en neem het kleinste gemeenschappelijke veelvoud dat niet nul is.</p><div class="vb">20ℕ = {0, 20, 40, 60, 80, 100, 120, …} en 24ℕ = {0, 24, 48, 72, 96, 120, …}, dus kgv (20, 24) = 120.</div>' +
          '<p><b>Door priemfactorisatie:</b> neem alle priemfactoren die voorkomen, elk zo vaak als het <b>hoogste</b> aantal keer dat hij in één van de getallen staat.</p><div class="vb">20 = 2 · 2 · 5 en 24 = 2 · 2 · 2 · 3, dus kgv (20, 24) = 2 · 2 · 2 · 3 · 5 = 120.</div>'
      },
      ggd: {
        titel: 'Grootste gemeenschappelijke deler (ggd)', html:
          '<p><b>Door opsomming:</b> som de delers op en neem de grootste gemeenschappelijke deler.</p><div class="vb">del 20 = {1, 2, 4, 5, 10, 20} en del 24 = {1, 2, 3, 4, 6, 8, 12, 24}, dus ggd (20, 24) = 4.</div>' +
          '<p><b>Door priemfactorisatie:</b> neem alleen de <b>gemeenschappelijke</b> priemfactoren, elk zo vaak als het <b>laagste</b> aantal keer dat hij voorkomt.</p><div class="vb">20 = 2 · 2 · 5 en 24 = 2 · 2 · 2 · 3, dus ggd (20, 24) = 2 · 2 = 4.</div>' +
          '<p>Vraagstukken: verdelen in zo veel mogelijk gelijke groepen is een ggd. Iets dat opnieuw samenvalt of "minstens hoeveel" is meestal een kgv.</p>'
      },
      verzamelingen: {
        titel: 'Bewerkingen met verzamelingen', html:
          '<table><tr><th>symbool</th><th>naam</th><th>betekenis</th></tr><tr><td>A ∪ B</td><td>unie</td><td>alle elementen die in A <b>of</b> in B zitten (of in allebei)</td></tr><tr><td>A ∩ B</td><td>doorsnede</td><td>alle elementen die in A <b>en</b> in B zitten</td></tr><tr><td>A \\ B</td><td>verschil</td><td>alle elementen die in A zitten <b>maar niet</b> in B</td></tr></table>' +
          '<div class="vb">A = {Noah, Olivia, Lucas} en B = {Yara, Noah, Lucas}.<br>A ∪ B = {Noah, Olivia, Lucas, Yara}, A ∩ B = {Noah, Lucas}, A \\ B = {Olivia}.</div>'
      },
      pijlen: {
        titel: 'Implicatie en equivalentie', html:
          '<div class="def"><b>Implicatiepijl</b> a ⇒ b: "als a, dan b". Uit de eerste uitspraak volgt altijd de tweede.</div>' +
          '<div class="vb">x ∈ ℕ ⇒ x ∈ ℤ is waar. Omgekeerd klopt het niet. Een <b>tegenvoorbeeld</b>: −3 is een geheel getal, maar geen natuurlijk getal.</div>' +
          '<div class="def"><b>Equivalentiepijl</b> a ⇔ b: "a als en slechts als b". De implicatie is waar in beide richtingen.</div>' +
          '<div class="vb">Een getal is even ⇔ het getal is een veelvoud van 2.</div><p>Een tegenvoorbeeld voldoet aan de eerste uitspraak, maar niet aan de tweede.</p>'
      },
      vereenvoudigen: {
        titel: 'Breuken vereenvoudigen', html:
          '<p>Deel teller en noemer door een gemeenschappelijke deler, liefst door de ggd.</p><div class="vb">{36/48} = {3/4} (teller en noemer gedeeld door 12)</div>' +
          '<div class="def">Een <b>onvereenvoudigbare breuk</b> is een breuk waarbij teller en noemer geen gemeenschappelijke deler meer hebben behalve 1.</div>'
      },
      gelijknamig: {
        titel: 'Breuken gelijknamig maken', html:
          '<div class="def"><b>Gelijknamige breuken</b> zijn breuken met dezelfde noemer.</div><ol><li>Vereenvoudig de breuken.</li><li>Bepaal het kgv van de noemers. Pas de tellers aan zodat je gelijkwaardige breuken krijgt.</li></ol>' +
          '<div class="vb">{1/2} en {1/3}: kgv (2, 3) = 6, dus {1/2} = {3/6} en {1/3} = {2/6}.</div>'
      },
      breukenoptellen: {
        titel: 'Breuken optellen en aftrekken', html:
          '<ol><li>Vereenvoudig de breuken, als dat nuttig is.</li><li>Maak de breuken gelijknamig.</li><li>Tel de tellers op (of trek ze af). Behoud de noemer.</li><li>Vereenvoudig je resultaat tot een onvereenvoudigbare breuk.</li></ol>' +
          '<div class="vb">{1/2} + {1/3} = {3/6} + {2/6} = {5/6}</div><div class="vb">{3/4} − {1/3} = {9/12} − {4/12} = {5/12}</div><p>Een geheel schrijf je als een breuk met gelijke teller en noemer: 1 = {4/4}.</p>'
      }
    },

    delen: [
      /* ============ 1 TALSTELSELS ============ */
      {
        id: 'd1', nr: '1', titel: 'Talstelsels', hulp: ['talstelsels'], vragen: [
          { id: 'v01', titel: 'Additief talstelsel', type: 'mc', vraag: 'Het talstelsel van de Egyptenaren is een additief talstelsel. Wat betekent dat?',
            opties: ['Je telt de waarde van alle symbolen op. De plaats van een symbool speelt geen rol.', 'De plaats van een symbool bepaalt zijn waarde.', 'Er worden alleen de symbolen 0 en 1 gebruikt.', 'Elk symbool is twintig keer zoveel waard als het vorige.'], juist: 0,
            uitleg: 'Bij een additief talstelsel maak je gewoon de som van alle symbolen. Bij een positiestelsel, zoals het onze, is de plaats van een cijfer wel belangrijk.' },
          { id: 'v02', titel: 'Kenmerken van talstelsels', type: 'sleep', vraag: 'Bij welk talstelsel hoort elk kenmerk?',
            vakken: ['Egyptenaren', 'Maya’s', 'Ons talstelsel', 'Binair stelsel'],
            items: [['hiërogliefen', 0], ['additief talstelsel', 0], ['twintigdelig', 1], ['drie symbolen', 1], ['tiendelig', 2], ['cijfers 0 tot en met 9', 2], ['enkel 0 en 1', 3], ['gebruikt door computers', 3]],
            uitleg: 'Egyptenaren: hiërogliefen, additief. Maya’s: twintigdelig met drie symbolen. Wij: tiendelig met tien cijfers. Computers: binair met 0 en 1.' },
          { id: 'v03', titel: 'Romeinse cijfers', type: 'invul', vraag: 'Schrijf de Romeinse getallen in ons talstelsel.',
            sjabloon: rijen(['XXVI = [[a]]', 'LXXIV = [[b]]', 'CXL = [[c]]', 'MDCCC = [[d]]']), velden: { a: G(26), b: G(74), c: G(140), d: G(1800) },
            tip: 'Een kleiner symbool voor een groter symbool trek je af.',
            uitleg: 'XXVI = 10 + 10 + 5 + 1 = 26. LXXIV = 50 + 10 + 10 + 4 = 74. CXL = 100 + 40 = 140. MDCCC = 1000 + 500 + 300 = 1800.' },
          { id: 'v04', titel: 'Tijdlijn', type: 'volgorde', vraag: 'Zet de gebeurtenissen in de juiste volgorde op de tijdlijn.', boven: 'het oudste',
            items: ['Egyptenaren schrijven getallen met hiërogliefen.', 'De Romeinse cijfers komen in gebruik.', 'Onze cijfers 0 tot en met 9 ontstaan.', 'Simon Stevin voert de kommagetallen in.', 'Onze cijfers verdringen de Romeinse cijfers.'],
            uitleg: 'Hiërogliefen (meer dan 4000 jaar geleden), Romeinse cijfers (vanaf 200 voor Christus), onze cijfers (tiende eeuw), Simon Stevin (rond 1600), Romeinse cijfers verdrongen (18de eeuw).' },
          { id: 'v05', titel: 'Positietabel', type: 'invul', hulp: ['positie'], vraag: 'Schrijf de cijfers van het getal 5207,38 op de juiste plaats in de tabel.',
            sjabloon: '<table><tr><th>D</th><th>H</th><th>T</th><th>E</th><th>,</th><th>t</th><th>h</th></tr><tr><td>[[d]]</td><td>[[h]]</td><td>[[t]]</td><td>[[e]]</td><td>,</td><td>[[t2]]</td><td>[[h2]]</td></tr></table>',
            velden: { d: G(5, { w: 1 }), h: G(2, { w: 1 }), t: G(0, { w: 1 }), e: G(7, { w: 1 }), t2: G(3, { w: 1 }), h2: G(8, { w: 1 }) },
            uitleg: '5 duizendtallen, 2 honderdtallen, 0 tientallen, 7 eenheden, 3 tienden en 8 honderdsten.' },
          { id: 'v06', titel: 'Waarde van een cijfer', type: 'invul', hulp: ['positie'], vraag: 'Bekijk het getal 382 054,9. Vul aan.',
            sjabloon: rijen(['3 is het cijfer van de [[a]]', '0 is het cijfer van de [[b]]', '5 is het cijfer van de [[c]]', '9 is het cijfer van de [[d]]', '2 is het cijfer van de [[e]]']),
            velden: { a: K(POS, 'honderdduizendtallen'), b: K(POS, 'honderdtallen'), c: K(POS, 'tientallen'), d: K(POS, 'tienden'), e: K(POS, 'duizendtallen') },
            uitleg: 'Van rechts naar links voor de komma: 4 eenheden, 5 tientallen, 0 honderdtallen, 2 duizendtallen, 8 tienduizendtallen, 3 honderdduizendtallen. Na de komma: 9 tienden.' },
          { id: 'v07', titel: 'Kleinste en grootste getal', type: 'invul', hulp: ['positie'], vraag: 'Gebruik de cijfers 4, 0 en 7 elk precies één keer. Vorm het kleinste en het grootste natuurlijk getal van drie cijfers.',
            sjabloon: 'Kleinste getal: [[a]]<br>Grootste getal: [[b]]', velden: { a: G(407), b: G(740) },
            tip: 'Een getal van drie cijfers begint niet met 0.', uitleg: 'Het kleinste is 407 (het mag niet met 0 beginnen). Het grootste is 740.' },
          { id: 'v08', titel: 'Kleiner, groter of gelijk', type: 'invul', hulp: ['ordenen'], vraag: 'Vul aan met &lt;, &gt; of =.',
            sjabloon: rijen(['0,5 [[a]] 0,45', '12,30 [[b]] 12,3', '6,545 [[c]] 65,54', '{3/4} [[d]] {4/3}', '0,12 [[e]] 0,012', '{1/2} [[f]] 0,5']),
            velden: { a: K(['<', '>', '='], '>'), b: K(['<', '>', '='], '='), c: K(['<', '>', '='], '<'), d: K(['<', '>', '='], '<'), e: K(['<', '>', '='], '>'), f: K(['<', '>', '='], '=') },
            uitleg: '0,5 = 0,50 en dat is meer dan 0,45. Een nul achteraan verandert niets: 12,30 = 12,3. {3/4} is kleiner dan 1 en {4/3} is groter dan 1.' },
          { id: 'v09', titel: 'Ware uitspraken', type: 'mc', meerdere: true, hulp: ['ordenen'], vraag: 'Duid alle ware uitspraken aan.',
            opties: ['5 ⩽ 5', '23 ⩾ 24', '0,7 &lt; 0,07', '{1/3} = {2/6}', '100 ≠ 99', '8 &gt; 8'], juist: [0, 3, 4],
            uitleg: '5 ⩽ 5 is waar omdat 5 = 5. {1/3} = {2/6} en 100 is niet gelijk aan 99. De andere uitspraken zijn vals: 23 is kleiner dan 24, 0,7 is groter dan 0,07 en 8 is niet groter dan 8.' },
          { id: 'v10', titel: 'Van klein naar groot', type: 'volgorde', hulp: ['ordenen'], vraag: 'Rangschik de getallen van klein naar groot.', boven: 'het kleinste',
            items: ['0,07', '0,69', '0,7', '0,701', '{3/4}'], uitleg: '0,07 &lt; 0,69 &lt; 0,7 &lt; 0,701 &lt; 0,75. Schrijf alles met drie cijfers na de komma: 0,070; 0,690; 0,700; 0,701; 0,750.' },
          { id: 'v11', titel: 'Binair tellen', type: 'invul', vraag: 'Computers rekenen binair. Welk getal uit ons talstelsel hoort bij elk binair getal?',
            sjabloon: rijen(['binair 10 = [[a]]', 'binair 11 = [[b]]', 'binair 100 = [[c]]', 'binair 101 = [[d]]']), velden: { a: G(2), b: G(3), c: G(4), d: G(5) },
            tip: 'De plaatsen zijn van rechts naar links 1, 2 en 4 waard.', uitleg: 'Binair 101 = 1 · 4 + 0 · 2 + 1 · 1 = 5.' }
        ]
      },

      /* ============ 2 SOORTEN GETALLEN ============ */
      {
        id: 'd2', nr: '2', titel: 'Soorten getallen', hulp: ['natuurlijk', 'rationaal', 'symbolen'], vragen: [
          { id: 'v01', titel: 'Natuurlijk getal', type: 'mc', hulp: ['natuurlijk'], vraag: 'Wat is een natuurlijk getal?',
            opties: ['Een telresultaat: 0, 1, 2, 3, …', 'Elk getal zonder komma, positief of negatief.', 'Elk getal dat je als breuk kunt schrijven.', 'Elk getal dat groter is dan nul.'], juist: 0,
            uitleg: 'Een natuurlijk getal is een telresultaat. Ook 0 is een natuurlijk getal.' },
          { id: 'v02', titel: 'Getallen in het venndiagram', type: 'sleep', hulp: ['rationaal', 'symbolen'], vraag: 'In welk gebied van het venndiagram ℕ ⊂ ℤ ⊂ ℚ hoort elk getal? Kies telkens het kleinste gebied.',
            vakken: ['in ℕ', 'in ℤ, maar niet in ℕ', 'in ℚ, maar niet in ℤ'],
            items: [['25', 0], ['0', 0], ['{12/4}', 0], ['−9', 1], ['−{12/6}', 1], ['−4,2', 2], ['{8/5}', 2], ['12 %', 2], ['0,333…', 2]],
            tip: 'Reken de breuken eerst uit.', uitleg: '{12/4} = 3 is een natuurlijk getal en −{12/6} = −2 is een geheel getal. −4,2, {8/5}, 12 % en 0,333… zijn rationaal maar niet geheel.' },
          { id: 'v03', titel: 'Element of niet', type: 'invul', hulp: ['symbolen', 'rationaal'], vraag: 'Vul aan met ∈ of ∉.',
            sjabloon: rijen(['7 [[a]] ℕ', '−3 [[b]] ℕ', '−3 [[c]] ℤ', '{5/6} [[d]] ℤ', '{5/6} [[e]] ℚ', '0 [[f]] ℕ₀', '6,125 [[g]] ℚ', '{8/2} [[h]] ℕ']),
            velden: { a: K(ELT, '∈'), b: K(ELT, '∉'), c: K(ELT, '∈'), d: K(ELT, '∉'), e: K(ELT, '∈'), f: K(ELT, '∉'), g: K(ELT, '∈'), h: K(ELT, '∈') },
            uitleg: 'ℕ₀ bevat de natuurlijke getallen zonder nul, dus 0 ∉ ℕ₀. {8/2} = 4 is een natuurlijk getal. Elk kommagetal met een eindig aantal decimalen is rationaal.' },
          { id: 'v04', titel: 'Deelverzameling of niet', type: 'invul', hulp: ['symbolen'], vraag: 'Vul aan met ⊂ of ⊄.',
            sjabloon: rijen(['ℕ [[a]] ℤ', 'ℤ [[b]] ℕ', 'ℤ [[c]] ℚ', 'ℚ [[d]] ℤ', 'ℕ [[e]] ℚ', 'ℤ⁺ [[f]] ℤ']),
            velden: { a: K(DEEL, '⊂'), b: K(DEEL, '⊄'), c: K(DEEL, '⊂'), d: K(DEEL, '⊄'), e: K(DEEL, '⊂'), f: K(DEEL, '⊂') },
            uitleg: 'ℕ ⊂ ℤ ⊂ ℚ. Omgekeerd klopt het niet: −3 zit wel in ℤ maar niet in ℕ, en {1/2} zit wel in ℚ maar niet in ℤ.' },
          { id: 'v05', titel: 'Tot welke verzamelingen?', type: 'mc', meerdere: true, vast: true, compact: true, hulp: ['rationaal', 'symbolen'], vraag: 'Tot welke verzamelingen behoort −{20/5}?',
            opties: ['ℕ', 'ℤ', 'ℚ'], juist: [1, 2], uitleg: '−{20/5} = −4. Dat is een geheel getal en dus ook een rationaal getal, maar geen natuurlijk getal.' },
          { id: 'v06', titel: 'Gehele getallen in het dagelijks leven', type: 'invul', hulp: ['natuurlijk'], vraag: 'Noteer telkens het passende gehele getal.',
            sjabloon: 'Een duiker bevindt zich 18 m onder het zeeniveau: [[a]] m<br>Een bergtop ligt 2500 m boven het zeeniveau: [[b]] m<br>Het vriest 7 graden: [[c]] °C<br>Het toestandsteken van −24 is [[d]]',
            velden: { a: G(-18), b: G(2500), c: G(-7), d: K(['+', '−'], '−') }, uitleg: 'Onder het zeeniveau en onder nul noteer je met het toestandsteken −. Bij positieve getallen mag je het plusteken weglaten.' },
          { id: 'v07', titel: 'Gehele getallen op de getallenas', type: 'getallenas', hulp: ['natuurlijk'], vraag: 'Plaats de gehele getallen op de getallenas.',
            min: -5, max: 5, stap: 1, naam: 'ℤ', toon: [0, 1], punten: [{ l: '−4', w: -4 }, { l: '3', w: 3 }, { l: '−1', w: -1 }, { l: '5', w: 5 }],
            uitleg: 'Negatieve getallen liggen links van 0, positieve rechts. De afstand tussen 0 en 1 is de ijk.' },
          { id: 'v08', titel: 'Rationale getallen op de getallenas', type: 'getallenas', hulp: ['rationaal'], vraag: 'Plaats de rationale getallen op de getallenas. Elk streepje is een kwart.',
            min: -3, max: 3, stap: 0.25, naam: 'ℚ', punten: [{ l: '−1,5', w: -1.5 }, { l: '{1/2}', w: 0.5 }, { l: '2,25', w: 2.25 }, { l: '−{3/4}', w: -0.75 }, { l: '{7/4}', w: 1.75 }],
            uitleg: '{1/2} = 0,5; −{3/4} = −0,75 en {7/4} = 1,75. Tussen twee gehele getallen staan vier stapjes van 0,25.' },
          { id: 'v09', titel: 'Procent, breuk, kommagetal', type: 'invul', hulp: ['procent'], vraag: 'Vul de tabel aan. Noteer breuken onvereenvoudigbaar.',
            sjabloon: '<table><tr><th>procent</th><th>breuk</th><th>kommagetal</th></tr><tr><td>20 %</td><td>[[a]]</td><td>[[b]]</td></tr><tr><td>75 %</td><td>[[c]]</td><td>[[d]]</td></tr><tr><td>[[e]] %</td><td>{1/2}</td><td>0,5</td></tr><tr><td>[[f]] %</td><td>{1/10}</td><td>[[g]]</td></tr><tr><td>150 %</td><td>[[h]]</td><td>1,5</td></tr></table>',
            velden: { a: B(1, 5), b: G(0.2), c: B(3, 4), d: G(0.75), e: G(50, { w: 3 }), f: G(10, { w: 3 }), g: G(0.1), h: B(3, 2) },
            uitleg: '20 % = {20/100} = {1/5} = 0,2. 75 % = {3/4} = 0,75. {1/2} = 50 %. {1/10} = 10 % = 0,1. 150 % = {150/100} = {3/2}.' },
          { id: 'v10', titel: 'Waar of niet waar', type: 'mc', meerdere: true, vraag: 'Duid alle ware uitspraken aan.',
            opties: ['Alle natuurlijke getallen zijn rationale getallen.', 'Alle getallen met toestandsteken − zijn gehele getallen.', '1 op 5 komt overeen met 15 %.', 'Elk geheel getal is een natuurlijk getal.', '0 is een natuurlijk getal.', 'π is een rationaal getal.'], juist: [0, 4],
            uitleg: 'ℕ ⊂ ℚ en 0 ∈ ℕ. −4,2 is negatief maar niet geheel. 1 op 5 is 20 %. −3 is geheel maar niet natuurlijk. π kun je niet als breuk schrijven.' },
          { id: 'v11', titel: 'Opsomming van ℤ', type: 'mc', hulp: ['natuurlijk'], vraag: 'Welke opsomming stelt de verzameling ℤ voor?',
            opties: ['{…, −3, −2, −1, 0, 1, 2, 3, …}', '{0, 1, 2, 3, …}', '{1, 2, 3, …}', '{…, −3, −2, −1}'], juist: 0,
            uitleg: 'ℤ bevat alle negatieve gehele getallen, nul en alle positieve gehele getallen. {0, 1, 2, 3, …} is ℕ en {1, 2, 3, …} is ℕ₀.' }
        ]
      },

      /* ============ 3 HOOFDBEWERKINGEN ============ */
      {
        id: 'd3', nr: '3', titel: 'Hoofdbewerkingen met natuurlijke getallen', hulp: ['begrippen', 'deling'], vragen: [
          { id: 'v01', titel: 'Begrippen sorteren', type: 'sleep', hulp: ['begrippen'], vraag: 'Bij welke bewerking hoort elk begrip?',
            vakken: ['Optelling', 'Aftrekking', 'Vermenigvuldiging', 'Deling'],
            items: [['term', 0], ['som', 0], ['aftrektal', 1], ['aftrekker', 1], ['verschil', 1], ['factor', 2], ['product', 2], ['deeltal', 3], ['deler', 3], ['quotiënt', 3], ['rest', 3]],
            uitleg: 'Optelling: termen en som. Aftrekking: aftrektal, aftrekker en verschil. Vermenigvuldiging: factoren en product. Deling: deeltal, deler, quotiënt en rest.' },
          { id: 'v02', titel: 'Juiste begrip invullen', type: 'invul', hulp: ['begrippen'], vraag: 'Vul het juiste begrip in.',
            sjabloon: 'In 38 − 16 = 22 is 38 [[a]]<br>In 17 · 3 = 51 zijn 17 en 3 [[b]]<br>In 18 : 6 = 3 is 3 [[c]]<br>In 13 + 37 = 50 zijn 13 en 37 [[d]]<br>In 92 − 19 = 73 is 73 [[e]]<br>In 126 : 3 = 42 is 126 [[f]]',
            velden: { a: K(BEGRIP, 'het aftrektal'), b: K(BEGRIP, 'de factoren'), c: K(BEGRIP, 'het quotiënt'), d: K(BEGRIP, 'de termen'), e: K(BEGRIP, 'het verschil'), f: K(BEGRIP, 'het deeltal') },
            uitleg: 'Aftrektal − aftrekker = verschil. Factor · factor = product. Deeltal : deler = quotiënt. Term + term = som.' },
          { id: 'v03', titel: 'Hoofdrekenen', type: 'invul', vraag: 'Bereken uit het hoofd.',
            sjabloon: rijen(['168 + 22 = [[a]]', '109 − 26 = [[b]]', '7 · 8 = [[c]]', '144 : 4 = [[d]]', '250 − 75 = [[e]]', '12 · 5 = [[f]]']),
            velden: { a: G(190), b: G(83), c: G(56), d: G(36), e: G(175), f: G(60) }, uitleg: '168 + 22 = 190; 109 − 26 = 83; 7 · 8 = 56; 144 : 4 = 36; 250 − 75 = 175; 12 · 5 = 60.' },
          { id: 'v04', titel: 'Het maalteken', type: 'mc', hulp: ['begrippen'], vraag: 'Hoe schrijf je 6 + 6 + 6 + 6 korter als een vermenigvuldiging, met het maalteken dat je vanaf nu gebruikt?',
            opties: ['4 · 6', '4 x 6', '6 · 6', '4 + 6'], juist: 0, uitleg: 'Vier keer de term 6 schrijf je als 4 · 6. In het secundair gebruik je een gecentreerd punt als maalteken, geen x.' },
          { id: 'v05', titel: 'Vermenigvuldigen in stappen', type: 'stappen', vraag: 'Bereken 47 · 16 in stappen, zoals bij het cijferen.',
            stappen: ['47 · 6 = [[a]]', '47 · 10 = [[b]]', 'Tel beide resultaten op: 47 · 16 = [[c]]'], velden: { a: G(282), b: G(470), c: G(752) },
            uitleg: '47 · 6 = 282 en 47 · 10 = 470. Samen: 282 + 470 = 752.' },
          { id: 'v06', titel: 'Quotiënt en rest', type: 'invul', hulp: ['deling'], vraag: 'Vul de tabel aan.',
            sjabloon: '<table><tr><th>deeltal D</th><th>deler d</th><th>quotiënt q</th><th>rest r</th></tr><tr><td>26</td><td>12</td><td>[[a]]</td><td>[[b]]</td></tr><tr><td>45</td><td>7</td><td>[[c]]</td><td>[[d]]</td></tr><tr><td>202</td><td>10</td><td>[[e]]</td><td>[[f]]</td></tr><tr><td>96</td><td>8</td><td>[[g]]</td><td>[[h]]</td></tr></table>',
            velden: { a: G(2, { w: 3 }), b: G(2, { w: 3 }), c: G(6, { w: 3 }), d: G(3, { w: 3 }), e: G(20, { w: 3 }), f: G(2, { w: 3 }), g: G(12, { w: 3 }), h: G(0, { w: 3 }) },
            uitleg: '26 = 12 · 2 + 2; 45 = 7 · 6 + 3; 202 = 10 · 20 + 2; 96 = 8 · 12 + 0.' },
          { id: 'v07', titel: 'Opgaand of niet', type: 'sleep', hulp: ['deling'], vraag: 'Is de deling opgaand of niet-opgaand?',
            vakken: ['Opgaande deling', 'Niet-opgaande deling'], items: [['48 : 6', 0], ['144 : 4', 0], ['372 : 3', 0], ['370 : 3', 1], ['50 : 7', 1], ['100 : 8', 1]],
            uitleg: 'Een deling is opgaand als de rest 0 is. 370 : 3 heeft rest 1, 50 : 7 heeft rest 1 en 100 : 8 heeft rest 4.' },
          { id: 'v08', titel: 'Deling controleren', type: 'stappen', hulp: ['deling'], vraag: 'Je deelt 59 door 8. Bepaal het quotiënt en de rest en controleer met D = d · q + r.',
            stappen: ['Het quotiënt is [[q]]', 'De rest is [[r]]', 'Controle: 8 · [[q2]] + [[r2]] = [[D]]'], velden: { q: G(7), r: G(3), q2: G(7), r2: G(3), D: G(59) },
            uitleg: '8 · 7 = 56 en 59 − 56 = 3. Controle: 8 · 7 + 3 = 59.' },
          { id: 'v09', titel: 'Onmogelijke rest', type: 'mc', hulp: ['deling'], vraag: 'Je deelt een natuurlijk getal door 5. Welke rest is onmogelijk?',
            opties: ['5', '0', '3', '4'], juist: 0, uitleg: 'De rest is altijd kleiner dan de deler. Bij delen door 5 kan de rest dus 0, 1, 2, 3 of 4 zijn, maar nooit 5.' },
          { id: 'v10', titel: 'Het deeltal zoeken', type: 'invul', hulp: ['deling'], vraag: 'Bepaal telkens het deeltal.',
            sjabloon: 'De deler is 5, het quotiënt is 3 en de rest is 1. Het deeltal is [[a]]<br>De deler is 12, het quotiënt is 4 en de rest is 7. Het deeltal is [[b]]',
            velden: { a: G(16), b: G(55) }, tip: 'Gebruik D = d · q + r.', uitleg: '5 · 3 + 1 = 16 en 12 · 4 + 7 = 55.' },
          { id: 'v11', titel: 'Vraagstukken', type: 'invul', vraag: 'Kies de juiste bewerking en bereken.',
            sjabloon: 'Mila spaart 9 weken lang elke week € 7. Hoeveel euro spaart ze in totaal?<br>7 [[o1]] 9 = [[r1]]<br>Een stapel van 15 dezelfde blokken is 75 cm hoog. Hoe hoog is één blok (in cm)?<br>75 [[o2]] 15 = [[r2]]<br>Een spaarkaart telt 25 zegels. Noor heeft er al 17. Hoeveel zegels heeft ze nog nodig?<br>25 [[o3]] 17 = [[r3]]',
            velden: { o1: K(BEW, '·'), r1: G(63), o2: K(BEW, ':'), r2: G(5), o3: K(BEW, '−'), r3: G(8) },
            uitleg: '7 · 9 = 63 euro. 75 : 15 = 5 cm. 25 − 17 = 8 zegels.' }
        ]
      },

      /* ============ 4 VEELVOUDEN EN DELERS ============ */
      {
        id: 'd4', nr: '4', titel: 'Veelvouden en delers', hulp: ['veelvoud', 'priem'], vragen: [
          { id: 'v01', titel: 'Veelvouden opsommen', type: 'invul', hulp: ['veelvoud'], vraag: 'Noteer de eerste zes natuurlijke veelvouden van 7, van klein naar groot.',
            sjabloon: '{ [[a]] , [[b]] , [[c]] , [[d]] , [[e]] , [[f]] }', velden: { a: G(0, { w: 2 }), b: G(7, { w: 2 }), c: G(14, { w: 2 }), d: G(21, { w: 2 }), e: G(28, { w: 2 }), f: G(35, { w: 2 }) },
            tip: 'Het eerste veelvoud is 7 · 0.', uitleg: '0 is een veelvoud van elk getal. De eerste zes veelvouden van 7 zijn 0, 7, 14, 21, 28 en 35.' },
          { id: 'v02', titel: 'Delers van 36', type: 'mc', meerdere: true, vast: true, compact: true, hulp: ['veelvoud'], vraag: 'Duid alle delers van 36 aan.',
            opties: ['1', '2', '3', '4', '5', '6', '8', '9', '12', '16', '18', '24', '36'], juist: [0, 1, 2, 3, 5, 7, 8, 10, 12],
            uitleg: 'del 36 = {1, 2, 3, 4, 6, 9, 12, 18, 36}. Zoek paren: 1 · 36, 2 · 18, 3 · 12, 4 · 9 en 6 · 6.' },
          { id: 'v03', titel: 'Ware uitspraken', type: 'mc', meerdere: true, hulp: ['veelvoud'], vraag: 'Duid alle ware uitspraken aan.',
            opties: ['90 is een veelvoud van 6.', '7 is deelbaar door 35.', '28 is deelbaar door 14.', '0 is een deler van 17.', '4 | 28', '0 is een veelvoud van 17.', '80 is een veelvoud van 160.', '1 is een deler van elk natuurlijk getal.'], juist: [0, 2, 4, 5, 7],
            uitleg: '90 = 6 · 15, 28 = 14 · 2, 28 = 4 · 7 en 0 = 17 · 0. Let op de richting: 35 is deelbaar door 7 en 160 is een veelvoud van 80, niet omgekeerd. 0 is nooit een deler.' },
          { id: 'v04', titel: 'Priemgetal of niet', type: 'sleep', hulp: ['priem'], vraag: 'Is het getal een priemgetal?',
            vakken: ['Priemgetal', 'Geen priemgetal'], items: [['2', 0], ['13', 0], ['23', 0], ['29', 0], ['1', 1], ['9', 1], ['21', 1], ['27', 1], ['51', 1]],
            uitleg: 'Een priemgetal heeft precies twee delers. 1 heeft er maar één. 9 = 3 · 3, 21 = 3 · 7, 27 = 3 · 9 en 51 = 3 · 17.' },
          { id: 'v05', titel: 'Waarom is 1 geen priemgetal?', type: 'mc', hulp: ['priem'], vraag: 'Waarom is 1 geen priemgetal?',
            opties: ['Omdat 1 maar één deler heeft en een priemgetal er precies twee heeft.', 'Omdat 1 een oneven getal is.', 'Omdat 1 te klein is om te delen.', 'Omdat 1 een deler is van elk getal.'], juist: 0,
            uitleg: 'Een priemgetal heeft precies twee verschillende delers: 1 en zichzelf. Het getal 1 heeft alleen zichzelf als deler.' },
          { id: 'v06', titel: 'Ontbind 84', type: 'priem', hulp: ['ontbinden'], vraag: 'Ontbind 84 in priemfactoren.', getallen: [84], uitleg: '84 = 2 · 2 · 3 · 7' },
          { id: 'v07', titel: 'Ontbind 450', type: 'priem', hulp: ['ontbinden'], vraag: 'Ontbind 450 in priemfactoren.', getallen: [450], uitleg: '450 = 2 · 3 · 3 · 5 · 5' },
          { id: 'v08', titel: 'Vlinderdiagram', type: 'sleep', hulp: ['veelvoud'], vraag: 'Plaats de getallen in het vlinderdiagram van 3ℕ en 4ℕ.',
            vakken: ['alleen in 3ℕ', 'in 3ℕ ∩ 4ℕ', 'alleen in 4ℕ'], items: [['9', 0], ['15', 0], ['21', 0], ['0', 1], ['12', 1], ['24', 1], ['36', 1], ['8', 2], ['16', 2], ['20', 2]],
            uitleg: 'De doorsnede 3ℕ ∩ 4ℕ bevat de getallen die zowel een veelvoud van 3 als van 4 zijn: 0, 12, 24, 36, … Dat zijn de veelvouden van 12.' },
          { id: 'v09', titel: 'kgv door opsomming', type: 'stappen', hulp: ['kgv'], vraag: 'Bepaal kgv (12, 18) door opsomming.',
            stappen: ['12ℕ = {0, 12, 24, [[a]], 48, 60, [[b]], …}', '18ℕ = {0, 18, [[c]], 54, [[d]], …}', 'Het kleinste gemeenschappelijke veelvoud dat niet nul is: kgv (12, 18) = [[k]]'],
            velden: { a: G(36, { w: 3 }), b: G(72, { w: 3 }), c: G(36, { w: 3 }), d: G(72, { w: 3 }), k: G(36, { w: 3 }) },
            uitleg: 'De gemeenschappelijke veelvouden zijn 0, 36, 72, … Het kleinste dat niet nul is, is 36.' },
          { id: 'v10', titel: 'ggd door opsomming', type: 'stappen', hulp: ['ggd'], vraag: 'Bepaal ggd (18, 24) door opsomming.',
            stappen: ['del 18 = {1, 2, 3, [[a]], [[b]], 18}', 'del 24 = {1, 2, 3, 4, [[c]], 8, [[d]], 24}', 'De gemeenschappelijke delers zijn 1, 2, 3 en [[e]]', 'ggd (18, 24) = [[g]]'],
            velden: { a: G(6, { w: 3 }), b: G(9, { w: 3 }), c: G(6, { w: 3 }), d: G(12, { w: 3 }), e: G(6, { w: 3 }), g: G(6, { w: 3 }) },
            uitleg: 'del 18 = {1, 2, 3, 6, 9, 18} en del 24 = {1, 2, 3, 4, 6, 8, 12, 24}. De grootste gemeenschappelijke deler is 6.' },
          { id: 'v11', titel: 'ggd door priemfactorisatie', type: 'priem', hulp: ['ontbinden', 'ggd'], vraag: 'Bepaal ggd (84, 120) door priemfactorisatie.', getallen: [84, 120],
            slot: 'ggd (84, 120) = [[g]]', velden: { g: G(12) }, tip: 'Neem alleen de gemeenschappelijke priemfactoren.',
            uitleg: '84 = 2 · 2 · 3 · 7 en 120 = 2 · 2 · 2 · 3 · 5. Gemeenschappelijk: 2 · 2 · 3 = 12.' },
          { id: 'v12', titel: 'kgv door priemfactorisatie', type: 'priem', hulp: ['ontbinden', 'kgv'], vraag: 'Bepaal kgv (24, 90) door priemfactorisatie.', getallen: [24, 90],
            slot: 'kgv (24, 90) = [[k]]', velden: { k: G(360) }, tip: 'Neem elke priemfactor zo vaak als hij het meest voorkomt.',
            uitleg: '24 = 2 · 2 · 2 · 3 en 90 = 2 · 3 · 3 · 5. kgv = 2 · 2 · 2 · 3 · 3 · 5 = 360.' },
          { id: 'v13', titel: 'ggd en kgv uit het hoofd', type: 'invul', hulp: ['ggd', 'kgv'], vraag: 'Bepaal uit het hoofd.',
            sjabloon: rijen(['ggd (12, 20) = [[a]]', 'ggd (15, 25) = [[b]]', 'ggd (14, 15) = [[c]]', 'kgv (10, 15) = [[d]]', 'kgv (20, 30) = [[e]]', 'kgv (2, 3, 5) = [[f]]']),
            velden: { a: G(4), b: G(5), c: G(1), d: G(30), e: G(60), f: G(30) }, uitleg: '14 en 15 hebben alleen 1 als gemeenschappelijke deler. 2, 3 en 5 zijn priemgetallen, dus hun kgv is 2 · 3 · 5 = 30.' },
          { id: 'v14', titel: 'Vraagstukken met ggd en kgv', type: 'invul', hulp: ['ggd', 'kgv'], vraag: 'Los de vraagstukken op.',
            sjabloon: 'Buslijn A vertrekt om de 12 minuten, buslijn B om de 20 minuten. Om 8 uur vertrekken ze samen. Na hoeveel minuten vertrekken ze opnieuw samen?<br>Je zoekt [[w1]] van 12 en 20. Antwoord: na [[a]] minuten.<br>Een bloemist heeft 48 roze en 36 witte bloemen. Ze maakt zo veel mogelijk dezelfde boeketten en gebruikt alle bloemen. Hoeveel boeketten maakt ze?<br>Je zoekt [[w2]] van 48 en 36. Antwoord: [[b]] boeketten.',
            velden: { w1: K(['de ggd', 'het kgv'], 'het kgv'), a: G(60), w2: K(['de ggd', 'het kgv'], 'de ggd'), b: G(12) },
            uitleg: 'kgv (12, 20) = 60: na 60 minuten vertrekken de bussen weer samen. ggd (48, 36) = 12: ze maakt 12 boeketten met elk 4 roze en 3 witte bloemen.' }
        ]
      },

      /* ============ 5 SYMBOLEN EN VERZAMELINGEN ============ */
      {
        id: 'd5', nr: '5', titel: 'Werken met symbolen en verzamelingen', hulp: ['verzamelingen', 'pijlen'], vragen: [
          { id: 'v01', titel: 'Symbolen lezen', type: 'sleep', hulp: ['verzamelingen', 'pijlen', 'symbolen'], vraag: 'Koppel elk symbool aan de manier waarop je het leest.',
            paren: [['… is een element van …', '∈'], ['… is een deelverzameling van …', '⊂'], ['… doorsnede …', '∩'], ['… unie …', '∪'], ['… verschil …', '\\'], ['als … dan …', '⇒'], ['… als en slechts als …', '⇔']],
            uitleg: '∈ element van, ⊂ deelverzameling van, ∩ doorsnede, ∪ unie, \\ verschil, ⇒ als … dan …, ⇔ als en slechts als.' },
          { id: 'v02', titel: 'Kleur A ∩ B', type: 'venn', hulp: ['verzamelingen'], vraag: 'Duid het gebied A ∩ B aan.', sets: ['A', 'B'], juist: ['AB'],
            uitleg: 'De doorsnede A ∩ B is het gebied waar de twee verzamelingen elkaar overlappen: de elementen die in A en in B zitten.' },
          { id: 'v03', titel: 'Kleur A ∪ B', type: 'venn', hulp: ['verzamelingen'], vraag: 'Duid het gebied A ∪ B aan.', sets: ['A', 'B'], juist: ['A', 'AB', 'B'],
            uitleg: 'De unie A ∪ B bevat alles wat in A of in B zit. Dat zijn de drie gebieden samen.' },
          { id: 'v04', titel: 'Kleur B \\ A', type: 'venn', hulp: ['verzamelingen'], vraag: 'Duid het gebied B \\ A aan.', sets: ['A', 'B'], juist: ['B'],
            uitleg: 'Het verschil B \\ A bevat de elementen die in B zitten maar niet in A.' },
          { id: 'v05', titel: 'Kleur (A ∪ B) \\ C', type: 'venn', hulp: ['verzamelingen'], vraag: 'Duid het gebied (A ∪ B) \\ C aan.', sets: ['A', 'B', 'C'], juist: ['A', 'AB', 'B'],
            tip: 'Neem eerst alles van A en B samen. Haal daarna alles weg wat in C ligt.', uitleg: 'Je neemt alles wat in A of B zit en haalt weg wat ook in C zit. Er blijven drie gebieden over: alleen A, alleen B en het deel van A ∩ B buiten C.' },
          { id: 'v06', titel: 'Betekenis van M ∩ V', type: 'mc', hulp: ['verzamelingen'], vraag: 'M is de verzameling van de leerlingen die een muziekinstrument bespelen. V is de verzameling van de leerlingen die voetballen. Wie zit er in M ∩ V?',
            opties: ['De leerlingen die een instrument bespelen en voetballen.', 'De leerlingen die een instrument bespelen of voetballen.', 'De leerlingen die een instrument bespelen maar niet voetballen.', 'De leerlingen die voetballen maar geen instrument bespelen.'], juist: 0,
            uitleg: 'De doorsnede hoort bij het woord "en". De unie M ∪ V hoort bij "of". M \\ V zijn de muzikanten die niet voetballen.' },
          { id: 'v07', titel: 'Elementen van A ∩ B', type: 'mc', meerdere: true, vast: true, compact: true, hulp: ['verzamelingen'], vraag: 'A = del 12 = {1, 2, 3, 4, 6, 12} en B = del 18 = {1, 2, 3, 6, 9, 18}. Duid alle elementen van A ∩ B aan.',
            opties: ['1', '2', '3', '4', '6', '9', '12', '18'], juist: [0, 1, 2, 4], uitleg: 'A ∩ B = {1, 2, 3, 6}. Dat zijn de gemeenschappelijke delers van 12 en 18. De grootste is de ggd: 6.' },
          { id: 'v08', titel: 'Elementen van A \\ B', type: 'mc', meerdere: true, vast: true, compact: true, hulp: ['verzamelingen'], vraag: 'A = del 12 = {1, 2, 3, 4, 6, 12} en B = del 18 = {1, 2, 3, 6, 9, 18}. Duid alle elementen van A \\ B aan.',
            opties: ['1', '2', '3', '4', '6', '9', '12', '18'], juist: [3, 6], uitleg: 'A \\ B = {4, 12}: de delers van 12 die geen deler zijn van 18.' },
          { id: 'v09', titel: 'Aantal elementen', type: 'invul', hulp: ['verzamelingen'], vraag: 'A = {Noor, Sam, Lina, Tibo} en B = {Sam, Tibo, Yara}. Hoeveel elementen telt elke verzameling?',
            sjabloon: rijen(['A ∪ B telt [[a]] elementen', 'A ∩ B telt [[b]] elementen', 'A \\ B telt [[c]] elementen', 'B \\ A telt [[d]] element(en)']), velden: { a: G(5, { w: 2 }), b: G(2, { w: 2 }), c: G(2, { w: 2 }), d: G(1, { w: 2 }) },
            uitleg: 'A ∪ B = {Noor, Sam, Lina, Tibo, Yara}; A ∩ B = {Sam, Tibo}; A \\ B = {Noor, Lina}; B \\ A = {Yara}.' },
          { id: 'v10', titel: 'Volgt het ene uit het andere?', type: 'invul', hulp: ['pijlen'], vraag: 'Volgt uit de eerste uitspraak altijd de tweede uitspraak?',
            sjabloon: '<table><tr><th>eerste uitspraak</th><th>tweede uitspraak</th><th>implicatie?</th></tr><tr><td>x &gt; 27</td><td>x &gt; 0</td><td>[[a]]</td></tr><tr><td>x &lt; 14</td><td>x &lt; 11</td><td>[[b]]</td></tr><tr><td>x ∈ ℚ</td><td>x ∈ ℤ</td><td>[[c]]</td></tr><tr><td>x ∈ ℕ</td><td>x ∈ ℚ</td><td>[[d]]</td></tr><tr><td>x ∈ 4ℕ</td><td>x ∈ 2ℕ</td><td>[[e]]</td></tr><tr><td>x &gt; 5</td><td>x &gt; 10</td><td>[[f]]</td></tr></table>',
            velden: { a: K(JN, 'ja'), b: K(JN, 'neen'), c: K(JN, 'neen'), d: K(JN, 'ja'), e: K(JN, 'ja'), f: K(JN, 'neen') },
            uitleg: 'Tegenvoorbeelden: x = 12 is kleiner dan 14 maar niet kleiner dan 11; x = {6/5} is rationaal maar niet geheel; x = 6 is groter dan 5 maar niet groter dan 10. Elk viervoud is ook een tweevoud.' },
          { id: 'v11', titel: 'Tegenvoorbeeld', type: 'mc', hulp: ['pijlen'], vraag: '"Als x &gt; 5, dan is x &gt; 10." Deze implicatie is niet waar. Welk getal is een tegenvoorbeeld?',
            opties: ['6', '12', '3', '10,5'], juist: 0, uitleg: 'Een tegenvoorbeeld voldoet aan de eerste uitspraak maar niet aan de tweede. 6 is groter dan 5, maar niet groter dan 10.' },
          { id: 'v12', titel: 'Enkele of dubbele pijl', type: 'invul', hulp: ['pijlen'], vraag: 'Vul aan met ⇒ of ⇔. Kies ⇔ als de implicatie in beide richtingen waar is.',
            sjabloon: 'Een getal is even [[a]] het getal is een veelvoud van 2.<br>x is een natuurlijk getal [[b]] x is een geheel getal.<br>x is deelbaar door 10 [[c]] x is deelbaar door 5.<br>Een natuurlijk getal eindigt op 0 [[d]] het getal is deelbaar door 10.',
            velden: { a: K(['⇒', '⇔'], '⇔'), b: K(['⇒', '⇔'], '⇒'), c: K(['⇒', '⇔'], '⇒'), d: K(['⇒', '⇔'], '⇔') },
            uitleg: 'Even en veelvoud van 2 betekenen hetzelfde, net als eindigen op 0 en deelbaar zijn door 10. Een geheel getal is niet altijd natuurlijk (−3) en een vijfvoud is niet altijd een tienvoud (15).' }
        ]
      },

      /* ============ 6 BREUKEN ============ */
      {
        id: 'd6', nr: '6', titel: 'Eenvoudige breuken optellen en aftrekken', hulp: ['vereenvoudigen', 'gelijknamig', 'breukenoptellen'], vragen: [
          { id: 'v01', titel: 'Breuken vereenvoudigen', type: 'invul', hulp: ['vereenvoudigen'], vraag: 'Vereenvoudig tot een onvereenvoudigbare breuk.',
            sjabloon: rijen(['{36/48} = [[a]]', '{21/49} = [[b]]', '{40/70} = [[c]]', '{200/600} = [[d]]']), velden: { a: B(3, 4), b: B(3, 7), c: B(4, 7), d: B(1, 3) },
            uitleg: '{36/48}: deel door 12. {21/49}: deel door 7. {40/70}: deel door 10. {200/600}: deel door 200.' },
          { id: 'v02', titel: 'Onvereenvoudigbare breuk', type: 'mc', hulp: ['vereenvoudigen'], vraag: 'Welke breuk is onvereenvoudigbaar?',
            opties: ['{9/14}', '{6/15}', '{12/20}', '{21/28}'], juist: 0, uitleg: '9 en 14 hebben alleen 1 als gemeenschappelijke deler. {6/15} = {2/5}, {12/20} = {3/5} en {21/28} = {3/4}.' },
          { id: 'v03', titel: 'Gelijknamige breuken', type: 'mc', hulp: ['gelijknamig'], vraag: 'Wat zijn gelijknamige breuken?',
            opties: ['Breuken met dezelfde noemer.', 'Breuken met dezelfde teller.', 'Breuken die even groot zijn.', 'Breuken die je niet kunt vereenvoudigen.'], juist: 0,
            uitleg: 'Gelijknamige breuken hebben dezelfde noemer, bijvoorbeeld {3/4} en {1/4}.' },
          { id: 'v04', titel: 'Gelijknamig maken', type: 'stappen', hulp: ['gelijknamig'], vraag: 'Maak de breuken {5/6} en {3/4} gelijknamig.',
            stappen: ['kgv (6, 4) = [[k]]', '{5/6} = [[a]]', '{3/4} = [[b]]'], velden: { k: G(12, { w: 3 }), a: B(10, 12), b: B(9, 12) },
            uitleg: 'kgv (6, 4) = 12. {5/6} = {10/12} (maal 2) en {3/4} = {9/12} (maal 3).' },
          { id: 'v05', titel: 'Optellen in stappen', type: 'stappen', hulp: ['breukenoptellen'], vraag: 'Bereken {1/2} + {1/3}.',
            stappen: ['Maak gelijknamig: {1/2} = [[a]] en {1/3} = [[b]]', 'Tel de tellers op en behoud de noemer: {1/2} + {1/3} = [[c]]'], velden: { a: B(3, 6), b: B(2, 6), c: B(5, 6) },
            uitleg: '{1/2} + {1/3} = {3/6} + {2/6} = {5/6}' },
          { id: 'v06', titel: 'Aftrekken in stappen', type: 'stappen', hulp: ['breukenoptellen'], vraag: 'Bereken {3/4} − {1/3}.',
            stappen: ['Maak gelijknamig: {3/4} = [[a]] en {1/3} = [[b]]', 'Trek de tellers af en behoud de noemer: {3/4} − {1/3} = [[c]]'], velden: { a: B(9, 12), b: B(4, 12), c: B(5, 12) },
            uitleg: '{3/4} − {1/3} = {9/12} − {4/12} = {5/12}' },
          { id: 'v07', titel: 'Eerst vereenvoudigen', type: 'stappen', hulp: ['breukenoptellen'], vraag: 'Bereken {21/28} + {2/3}.',
            stappen: ['Vereenvoudig eerst: {21/28} = [[v]]', 'Maak gelijknamig: [[a]] + [[b]]', 'De som is [[c]]'], velden: { v: B(3, 4), a: B(9, 12), b: B(8, 12), c: B(17, 12) },
            uitleg: '{21/28} + {2/3} = {3/4} + {2/3} = {9/12} + {8/12} = {17/12}' },
          { id: 'v08', titel: 'Som en verschil', type: 'invul', hulp: ['breukenoptellen'], vraag: 'Bereken. Noteer je antwoord als een onvereenvoudigbare breuk.',
            sjabloon: rijen(['{7/4} + {3/2} = [[a]]', '{9/7} − {3/4} = [[b]]', '{13/12} + {2/3} = [[c]]', '{5/6} − {1/3} = [[d]]']), velden: { a: B(13, 4), b: B(15, 28), c: B(7, 4), d: B(1, 2) },
            uitleg: '{7/4} + {6/4} = {13/4}. {36/28} − {21/28} = {15/28}. {13/12} + {8/12} = {21/12} = {7/4}. {5/6} − {2/6} = {3/6} = {1/2}.' },
          { id: 'v09', titel: 'Breuken ordenen', type: 'volgorde', hulp: ['gelijknamig'], vraag: 'Rangschik de breuken van klein naar groot.', boven: 'de kleinste',
            items: ['{5/12}', '{1/2}', '{2/3}', '{3/4}'], tip: 'Maak de breuken gelijknamig met noemer 12.', uitleg: 'Met noemer 12: {5/12}, {6/12}, {8/12} en {9/12}.' },
          { id: 'v10', titel: 'Vraagstuk: het boek', type: 'stappen', hulp: ['breukenoptellen'], vraag: 'Noor leest op maandag {1/4} van haar boek en op dinsdag {2/5} van het boek. Welk deel moet ze nog lezen?',
            stappen: ['Samen gelezen: {1/4} + {2/5} = [[a]]', 'Nog te lezen: 1 − het gelezen deel = [[b]]'], velden: { a: B(13, 20), b: B(7, 20) },
            uitleg: '{1/4} + {2/5} = {5/20} + {8/20} = {13/20}. Het hele boek is {20/20}, dus er blijft {20/20} − {13/20} = {7/20} over.' },
          { id: 'v11', titel: 'Vraagstuk: de tank', type: 'invul', hulp: ['breukenoptellen'], vraag: 'Een volle tank water wordt gebruikt. Eerst gaat {1/2} van de tank weg, daarna nog {1/3} van de volle tank. Welk deel van de tank blijft over?',
            sjabloon: 'Er blijft [[a]] van de tank over.', velden: { a: B(1, 6) }, tip: 'Schrijf 1 als {6/6}.', uitleg: '1 − {1/2} − {1/3} = {6/6} − {3/6} − {2/6} = {1/6}' }
        ]
      }
    ]
  });
})();
