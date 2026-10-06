/* MODULE 2 - Meetkundige objecten in het vlak (Nando 1, meetkunde) */
(function () {
  'use strict';
  var V = window.Vragen, G = V.G, K = V.K;
  var SYM = ['∈', '∉', '⊂', '⊄', '='], JN = ['ja', 'neen'];
  var SOORT = ['nulhoek', 'scherpe hoek', 'rechte hoek', 'stompe hoek', 'gestrekte hoek'];
  var EENH = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
  function rijen(a) { return '<div class="rijen">' + a.map(function (x) { return '<div>' + x + '</div>'; }).join('') + '</div>'; }
  function r2(n) { return Math.round(n * 1000) / 1000; }
  /* punt op afstand r en onder een hoek (in graden) vanaf (x, y) */
  function pol(n, x, y, r, graden, extra) {
    var a = graden * Math.PI / 180;
    return Object.assign({ n: n, x: r2(x + r * Math.cos(a)), y: r2(y + r * Math.sin(a)) }, extra || {});
  }
  var H = { verberg: true };
  function klok(uur, naam) {
    var s = '<svg class="vrij" viewBox="0 0 120 142" width="120" height="142" role="img" aria-label="Klok ' + naam + ': ' + uur + ' uur"><circle cx="60" cy="58" r="52" fill="#fff" stroke="#2B2B2B" stroke-width="3"/>';
    for (var i = 0; i < 12; i++) {
      var a = i * 30 * Math.PI / 180, r1 = i % 3 === 0 ? 40 : 44;
      s += '<line x1="' + (60 + r1 * Math.sin(a)).toFixed(1) + '" y1="' + (58 - r1 * Math.cos(a)).toFixed(1) + '" x2="' + (60 + 48 * Math.sin(a)).toFixed(1) + '" y2="' + (58 - 48 * Math.cos(a)).toFixed(1) + '" stroke="#2B2B2B" stroke-width="' + (i % 3 === 0 ? 3 : 1.5) + '"/>';
    }
    var h = uur * 30 * Math.PI / 180;
    s += '<line x1="60" y1="58" x2="60" y2="18" stroke="#177A78" stroke-width="3.5" stroke-linecap="round"/>';
    s += '<line x1="60" y1="58" x2="' + (60 + 28 * Math.sin(h)).toFixed(1) + '" y2="' + (58 - 28 * Math.cos(h)).toFixed(1) + '" stroke="#177A78" stroke-width="5" stroke-linecap="round"/>';
    s += '<circle cx="60" cy="58" r="4" fill="#2B2B2B"/><text x="60" y="134" text-anchor="middle" font-family="Poppins, sans-serif" font-weight="700" font-size="16" fill="#2B2B2B">' + naam + '</text></svg>';
    return s;
  }
  var snijfiguur = function (labels) {
    return {
      b: 12, h: 6,
      punten: [{ n: 'S', x: 6, y: 3, lp: [0, -0.5] }, { n: 'x1', x: 1, y: 3, verberg: true }, { n: 'x2', x: 11, y: 3, verberg: true }, pol('y1', 6, 3, 5, 35, H), pol('y2', 6, 3, 5, 215, H)],
      lijnen: [{ t: 'rechte', p: ['x1', 'x2'] }, { t: 'rechte', p: ['y1', 'y2'] }],
      hoeken: [{ h: 'S', van: 'x2', naar: 'y1', n: labels[0], r: 1.3 }, { h: 'S', van: 'y1', naar: 'x1', n: labels[1], r: 0.8 }, { h: 'S', van: 'x1', naar: 'y2', n: labels[2], r: 1.3 }, { h: 'S', van: 'y2', naar: 'x2', n: labels[3], r: 0.8 }]
    };
  };

  window.registreerModule({
    id: 'm02', nummer: 2, titel: 'Meetkundige objecten in het vlak', domein: 'Meetkunde', standaardActief: true,

    theorie: {
      gereedschap: {
        titel: 'Zo teken en meet je op het scherm', html:
          '<ul><li>Kies bovenaan het tekenblad een gereedschap: <b>Punt</b>, <b>Lijnstuk</b>, <b>Halfrechte</b>, <b>Rechte</b> of <b>Passer</b>. Klik daarna op het tekenblad.</li>' +
          '<li>Voor een lijnstuk, halfrechte of rechte klik je op twee punten. Bij een halfrechte klik je eerst op het grenspunt.</li>' +
          '<li><b>Passer</b>: klik op twee punten om een afstand te nemen en klik daarna op het middelpunt. Je krijgt een cirkel met die afstand als straal.</li>' +
          '<li>Klik op <b>Geodriehoek</b> om je geodriehoek te tonen. Kies <b>Verplaats</b> en sleep de geodriehoek. De rode stip is het nulpunt. Draai met het oranje handvat of met de knoppen ↺ 1° en ↻ 1°.</li>' +
          '<li>Het nulpunt klikt vast op een punt als je er dichtbij komt. De tekenzijde klikt vast als ze bijna door een punt gaat.</li>' +
          '<li>Fout getekend? Kies <b>Gom</b> en klik op wat weg moet, of klik op <b>Wis alles</b>.</li></ul>'
      },
      vlakpunt: {
        titel: 'Vlak en punt', html:
          '<div class="def">Een <b>vlak</b> is een verzameling van oneindig veel punten. Je noteert een vlak met een Griekse letter: α (alfa), β (bèta), γ (gamma), δ (delta), π (pi).</div>' +
          '<div class="def">Een <b>punt</b> heeft geen afmetingen. Je stelt het voor door een stip en benoemt het met een hoofdletter.</div>' +
          '<p>A ∈ π lees je als "het punt A ligt in het vlak π".</p>'
      },
      rechte: {
        titel: 'Rechte', html:
          '<p>Een rechte is niet begrensd. Je benoemt een rechte met een kleine letter (a) of met twee punten die erop liggen (AB).</p>' +
          '<table><tr><th>in symbolen</th><th>lees je als</th></tr><tr><td>B ∈ a</td><td>het punt B ligt op de rechte a</td></tr><tr><td>G ∉ a</td><td>het punt G ligt niet op de rechte a</td></tr><tr><td>a ⊂ π</td><td>de rechte a ligt in het vlak π</td></tr><tr><td>a ∩ b = {E}</td><td>E is het snijpunt van de rechten a en b</td></tr></table>' +
          '<ul><li>Door twee verschillende punten kun je precies één rechte tekenen.</li><li>Door één punt gaan oneindig veel rechten.</li><li><b>Collineaire punten</b> zijn drie of meer punten die op eenzelfde rechte liggen.</li><li><b>Concurrente rechten</b> zijn rechten die door eenzelfde punt gaan.</li></ul>'
      },
      halfrechte: {
        titel: 'Halfrechte', html:
          '<div class="def">Een <b>halfrechte</b> is een deelverzameling van een rechte die aan één kant begrensd is.</div>' +
          '<p>Notatie: [AB is de halfrechte met <b>grenspunt</b> A die door B gaat. Het blokhaakje staat aan de begrensde kant.</p>' +
          '<p>[AB ≠ [BA, want de grenspunten zijn verschillend. Liggen Q en S aan dezelfde kant van P op een rechte, dan is [PQ = [PS.</p>' +
          '<p>De rechte waarop een halfrechte ligt, is de <b>drager</b> van die halfrechte: [AB ⊂ AB.</p>'
      },
      lijnstuk: {
        titel: 'Lijnstuk', html:
          '<div class="def">Een <b>lijnstuk</b> is een deelverzameling van een rechte die aan twee kanten begrensd is.</div>' +
          '<p>Notatie: [AB] met twee blokhaakjes. De grenspunten A en B horen bij het lijnstuk. [AB] = [BA].</p><p>|AB| is de <b>lengte</b> van het lijnstuk [AB].</p>' +
          '<table><tr><th>notatie</th><th>betekenis</th></tr><tr><td>AB</td><td>rechte door A en B</td></tr><tr><td>[AB</td><td>halfrechte met grenspunt A door B</td></tr><tr><td>[AB]</td><td>lijnstuk met grenspunten A en B</td></tr><tr><td>|AB|</td><td>lengte van het lijnstuk [AB]</td></tr></table>' +
          '<p>Een punt is een <b>element</b> (∈) van een rechte, halfrechte of lijnstuk. Een lijnstuk of halfrechte is een <b>deelverzameling</b> (⊂) van een rechte.</p>'
      },
      meten: {
        titel: 'Een lijnstuk meten', html:
          '<ol><li>Plaats de tekenzijde van de geodriehoek op het lijnstuk.</li><li>Verschuif de geodriehoek tot het nulpunt samenvalt met een grenspunt.</li><li>Lees de lengte af bij het andere grenspunt.</li></ol><p>Notatie: |AB| = 5,7 cm. Je meet tot op 1 mm nauwkeurig.</p>' +
          '<p>Lijnstukken die even lang zijn, duid je aan met hetzelfde merkteken. In symbolen: |XY| = |PQ|.</p>'
      },
      herleiden: {
        titel: 'Lengtematen herleiden', html:
          '<table><tr><th>km</th><th>hm</th><th>dam</th><th>m</th><th>dm</th><th>cm</th><th>mm</th></tr><tr><td>1000 m</td><td>100 m</td><td>10 m</td><td>1 m</td><td>0,1 m</td><td>0,01 m</td><td>0,001 m</td></tr></table>' +
          '<p>Elke stap naar rechts is maal 10, elke stap naar links is gedeeld door 10.</p><div class="vb">500 m = 0,5 km &nbsp; 12 m = 1200 cm &nbsp; 5,7 cm = 57 mm</div>' +
          '<p>Schaal 1 : 100 betekent: 1 cm op de tekening is 100 cm in werkelijkheid.</p>'
      },
      construeren: {
        titel: 'Schetsen, tekenen en construeren', html:
          '<ul><li><b>Schetsen</b>: met de vrije hand, zonder geodriehoek of passer.</li><li><b>Tekenen</b>: met de geodriehoek (en passer). Je mag meten.</li><li><b>Construeren</b>: je meet nooit. Je past afstanden af met de passer en tekent rechte lijnen met de liniaal.</li></ul>' +
          '<p><b>Een even lang lijnstuk construeren:</b></p><ol><li>Neem de lengte |CD| in de passer.</li><li>Plaats de passerpunt in E en teken een cirkelboog.</li><li>Kies een punt F op de boog en teken [EF].</li></ol>'
      },
      midden: {
        titel: 'Het midden van een lijnstuk', html:
          '<div class="def">Het <b>midden van een lijnstuk</b> is het punt van dat lijnstuk dat even ver ligt van beide grenspunten.<br>M is het midden van [AB] ⟺ M ∈ [AB] en |AM| = |MB|.</div><p>Meet het lijnstuk, deel de lengte door 2 en duid het midden aan.</p>'
      },
      hoek: {
        titel: 'Hoek: benamingen en notatie', html:
          '<p>Een hoek bestaat uit twee <b>benen</b> en een <b>hoekpunt</b>. De benen zijn halfrechten met het hoekpunt als gemeenschappelijk grenspunt.</p>' +
          '<p>Notatie voor de hoek met hoekpunt H en benen [HA en [HB: ^H, A^HB, B^HA of een Griekse letter zoals α. Het hoekpunt staat altijd in het midden. Zijn er meerdere hoeken in hetzelfde hoekpunt, dan gebruik je een index: ^H1, ^H2.</p>' +
          '<p>Hoeken meet je in graden. 1° = 60′ (minuten) en 1′ = 60″ (seconden). Een hoek van 22,5° is dus 22° 30′.</p>'
      },
      soorten: {
        titel: 'Soorten hoeken', html:
          '<table><tr><th>naam</th><th>grootte</th></tr><tr><td>nulhoek</td><td>0°</td></tr><tr><td>scherpe hoek</td><td>tussen 0° en 90°</td></tr><tr><td>rechte hoek</td><td>90°</td></tr><tr><td>stompe hoek</td><td>tussen 90° en 180°</td></tr><tr><td>gestrekte hoek</td><td>180°</td></tr><tr><td>volle hoek</td><td>360°</td></tr></table>' +
          '<p>Op een klok is de hoek tussen twee opeenvolgende uurcijfers 360° : 12 = 30°.</p>'
      },
      hoekmeten: {
        titel: 'Een hoek meten', html:
          '<ol><li>Plaats het nulpunt van de geodriehoek op het hoekpunt.</li><li>Plaats de tekenzijde van de geodriehoek op één been van de hoek.</li><li>Lees het getal af dat bij het tweede been staat. Bij een scherpe hoek kies je het kleinste getal, bij een stompe hoek het grootste.</li></ol>' +
          '<p>Schat altijd eerst: is de hoek scherp of stomp? Zo kies je het juiste getal.</p>'
      },
      hoektekenen: {
        titel: 'Een hoek tekenen', html:
          '<ol><li>Leg het nulpunt van de geodriehoek op het hoekpunt en de tekenzijde op het eerste been.</li><li>Plaats een hulppunt bij het gevraagde aantal graden.</li><li>Teken een halfrechte vanuit het hoekpunt door het hulppunt.</li><li>Duid de hoek aan met een boogje en noteer het aantal graden.</li></ol>' +
          '<p>Op het scherm: kies Halfrechte, klik eerst op het hoekpunt en daarna op de juiste plaats bij de gradenboog.</p>'
      },
      bissectrice: {
        titel: 'Bissectrice van een hoek', html:
          '<div class="def">Een <b>bissectrice</b> (of deellijn) van een hoek is de rechte door het hoekpunt die de hoek in twee even grote hoeken verdeelt.<br>b is de bissectrice van ^A ⟺ ^A1 = ^A2 en A ∈ b.</div>' +
          '<p><b>Zo teken je een bissectrice:</b></p><ol><li>Meet de grootte van de hoek.</li><li>Bereken de grootte van de halve hoek.</li><li>Plaats een hulppunt bij de halve hoek.</li><li>Teken een rechte door het hulppunt en het hoekpunt.</li><li>Duid de even grote hoeken aan met merktekens.</li></ol>'
      },
      overstaand: {
        titel: 'Overstaande hoeken', html:
          '<div class="def"><b>Overstaande hoeken</b> zijn twee hoeken waarvan de benen in elkaars verlengde liggen.</div><p>Eigenschap: overstaande hoeken zijn even groot. Je vindt ze bij twee snijdende rechten, recht tegenover elkaar.</p>'
      },
      complement: {
        titel: 'Complementaire en supplementaire hoeken', html:
          '<div class="def"><b>Complementaire hoeken</b> zijn twee hoeken waarvan de som 90° is. Het complement van α is 90° − α.</div><div class="vb">60° is het complement van 30°.</div>' +
          '<div class="def"><b>Supplementaire hoeken</b> zijn twee hoeken waarvan de som 180° is. Het supplement van α is 180° − α.</div><div class="vb">140° is het supplement van 40°.</div>' +
          '<p>Rekenen met minuten: 90° = 89° 60′. Zo is 90° − 35° 30′ = 54° 30′.</p>'
      },
      aanliggend: {
        titel: 'Aanliggende hoeken en nevenhoeken', html:
          '<div class="def"><b>Aanliggende hoeken</b> zijn twee hoeken met een gemeenschappelijk been, waarbij de andere benen aan weerszijden van dat gemeenschappelijk been liggen.</div>' +
          '<div class="def"><b>Nevenhoeken</b> zijn twee hoeken die aanliggend en supplementair zijn.</div><p>Een nevenhoek van een hoek krijg je door één been te verlengen voorbij het hoekpunt. Nevenhoeken vormen samen een gestrekte hoek van 180°.</p>'
      }
    },

    delen: [
      /* ============ 1 PUNT, RECHTE, LIJNSTUK EN HALFRECHTE ============ */
      {
        id: 'd1', nr: '1', titel: 'Punt, rechte, lijnstuk en halfrechte', hulp: ['rechte', 'halfrechte', 'lijnstuk'], vragen: [
          { id: 'v01', titel: 'Notaties koppelen', type: 'sleep', hulp: ['lijnstuk', 'halfrechte'], vraag: 'Koppel elke omschrijving aan de juiste notatie.',
            paren: [['lijnstuk met grenspunten A en B', '[AB]'], ['halfrechte met grenspunt A die door B gaat', '[AB'], ['halfrechte met grenspunt B die door A gaat', '[BA'], ['rechte door de punten A en B', 'AB'], ['lengte van het lijnstuk [AB]', '|AB|']],
            uitleg: 'Een blokhaakje staat aan een begrensde kant. Een rechte heeft geen haakjes, een halfrechte één en een lijnstuk twee. Verticale streepjes duiden de lengte aan.' },
          { id: 'v02', titel: 'Notatie van een vlak', type: 'mc', hulp: ['vlakpunt'], vraag: 'Hoe noteer je een vlak?',
            opties: ['Met een Griekse letter, zoals α of π.', 'Met een hoofdletter, zoals A.', 'Met een kleine letter, zoals a.', 'Met twee hoofdletters, zoals AB.'], juist: 0,
            uitleg: 'Een vlak noteer je met een Griekse letter. Een punt krijgt een hoofdletter en een rechte een kleine letter of twee hoofdletters.' },
          { id: 'v03', titel: 'Begrensd of niet', type: 'sleep', vraag: 'Sorteer de begrippen en notaties.',
            vakken: ['Niet begrensd', 'Aan één kant begrensd', 'Aan twee kanten begrensd'], items: [['rechte', 0], ['AB', 0], ['halfrechte', 1], ['[CD', 1], ['lijnstuk', 2], ['[EF]', 2]],
            uitleg: 'Een rechte loopt in beide richtingen oneindig door. Een halfrechte heeft één grenspunt, een lijnstuk heeft er twee.' },
          { id: 'v04', titel: 'Symbolen invullen', type: 'invul', hulp: ['lijnstuk', 'halfrechte', 'rechte'], vraag: 'Bekijk de figuur. Vul aan met ∈, ∉, ⊂, ⊄ of =.',
            figuur: { bord: { b: 11, h: 5, punten: [{ n: 'P', x: 2, y: 1.5, lp: [-0.15, 0.45] }, { n: 'Q', x: 5, y: 2.5, lp: [-0.15, 0.45] }, { n: 'R', x: 8, y: 3.5, lp: [-0.15, 0.45] }, { n: 'S', x: 8, y: 1.5 }], lijnen: [{ t: 'rechte', p: ['P', 'R'], n: 'z' }] } },
            sjabloon: rijen(['P [[a]] z', 'S [[b]] z', 'Q [[c]] [PR]', 'P [[d]] [QR', '[PQ [[e]] z', '[PQ [[f]] [PR', '[RS [[g]] z', 'PQ [[h]] z']),
            velden: { a: K(SYM, '∈'), b: K(SYM, '∉'), c: K(SYM, '∈'), d: K(SYM, '∉'), e: K(SYM, '⊂'), f: K(SYM, '='), g: K(SYM, '⊄'), h: K(SYM, '=') },
            tip: 'Gebruik ∈ en ∉ voor een punt. Gebruik ⊂, ⊄ en = om twee verzamelingen van punten te vergelijken.',
            uitleg: 'P ligt op z maar niet op de halfrechte [QR, want die vertrekt in Q en loopt weg van P. [PQ en [PR hebben hetzelfde grenspunt en dezelfde richting, dus ze zijn gelijk. De rechte PQ is dezelfde rechte als z.' },
          { id: 'v05', titel: 'Juist of fout', type: 'mc', meerdere: true, vast: true, hulp: ['lijnstuk', 'halfrechte'], vraag: 'A en B zijn twee verschillende punten. Welke uitspraken zijn juist?',
            opties: ['|AB| = |BA|', '[AB] = [BA]', 'AB = BA', '[AB = [BA'], juist: [0, 1, 2],
            uitleg: 'De halfrechten [AB en [BA hebben een ander grenspunt en zijn dus verschillend. Bij een lijnstuk, een rechte en een lengte speelt de volgorde van de letters geen rol.' },
          { id: 'v06', titel: 'Rechte, halfrechte en lijnstuk tekenen', type: 'teken', hulp: ['gereedschap', 'lijnstuk', 'halfrechte'], vraag: 'Teken de rechte AB, de halfrechte [CD en het lijnstuk [EF].',
            bord: { punten: [{ n: 'A', x: 2, y: 7.5 }, { n: 'B', x: 6, y: 8.5 }, { n: 'C', x: 9, y: 6.5 }, { n: 'D', x: 13, y: 8 }, { n: 'E', x: 4, y: 2.5 }, { n: 'F', x: 11, y: 3.5 }] },
            gereedschap: ['rechte', 'halfrechte', 'lijnstuk'],
            controle: [{ c: 'lijn', t: 'rechte', door: ['A', 'B'] }, { c: 'lijn', t: 'halfrechte', door: ['C', 'D'] }, { c: 'lijn', t: 'lijnstuk', door: ['E', 'F'] }],
            tip: 'Bij de halfrechte [CD klik je eerst op het grenspunt C.', uitleg: 'De rechte AB loopt aan beide kanten door. De halfrechte [CD begint in C en loopt door voorbij D. Het lijnstuk [EF] stopt in E en in F.' },
          { id: 'v07', titel: 'Collineaire punten', type: 'teken', hulp: ['gereedschap', 'rechte'], vraag: 'Plaats een punt H zodat A, C en H collineair zijn.',
            bord: { punten: [{ n: 'A', x: 4, y: 8 }, { n: 'C', x: 8, y: 5 }, { n: 'B', x: 13, y: 7.5 }, { n: 'D', x: 14, y: 3 }] }, gereedschap: ['rechte', 'punt'], nieuw: ['H'],
            controle: [{ c: 'punt', n: 'H', op: ['A', 'C'], niet: ['A', 'C'], opl: 1.6 }],
            tip: 'Teken eerst de rechte AC. Kies daarna Punt en klik op die rechte.', uitleg: 'Collineaire punten liggen op eenzelfde rechte. H moet dus op de rechte AC liggen.' },
          { id: 'v08', titel: 'Snijpunt aanduiden', type: 'teken', hulp: ['gereedschap', 'rechte'], vraag: 'Teken de rechten AD en BE. Duid daarna het snijpunt I aan, zodat AD ∩ BE = {I}.',
            bord: { punten: [{ n: 'A', x: 3, y: 8 }, { n: 'D', x: 12, y: 3 }, { n: 'B', x: 3, y: 3 }, { n: 'E', x: 13, y: 8.5 }] }, gereedschap: ['rechte', 'punt'], nieuw: ['I'],
            controle: [{ c: 'lijn', t: 'rechte', door: ['A', 'D'] }, { c: 'lijn', t: 'rechte', door: ['B', 'E'] }, { c: 'punt', n: 'I', snijpunt: [['A', 'D'], ['B', 'E']] }],
            tip: 'Kies na het tekenen van de twee rechten het gereedschap Punt en klik op de plaats waar ze elkaar snijden.', uitleg: 'Het snijpunt is het enige punt dat op beide rechten ligt.' },
          { id: 'v09', titel: 'Eigenschappen van rechten', type: 'invul', hulp: ['rechte'], vraag: 'Vul aan.',
            sjabloon: 'Door twee verschillende punten kun je [[a]] rechte(n) tekenen.<br>Door één punt gaan [[b]] rechten.<br>Drie of meer punten die op eenzelfde rechte liggen, noem je [[c]] punten.<br>Rechten die door eenzelfde punt gaan, noem je [[d]] rechten.',
            velden: { a: K(['geen', 'precies één', 'precies twee', 'oneindig veel'], 'precies één'), b: K(['geen', 'precies één', 'precies twee', 'oneindig veel'], 'oneindig veel'), c: K(['collineaire', 'concurrente', 'samenvallende'], 'collineaire'), d: K(['collineaire', 'concurrente', 'samenvallende'], 'concurrente') },
            uitleg: 'Een rechte wordt bepaald door twee verschillende punten. Door één punt gaan oneindig veel rechten. Collineair gaat over punten, concurrent over rechten.' },
          { id: 'v10', titel: 'Concurrente rechten tekenen', type: 'teken', hulp: ['gereedschap', 'rechte'], vraag: 'Teken drie verschillende concurrente rechten door het punt S.',
            bord: { punten: [{ n: 'S', x: 9, y: 5 }] }, gereedschap: ['rechte'], controle: [{ c: 'rechtenDoor', p: 'S', min: 3 }],
            tip: 'Klik voor elke rechte eerst op S en daarna op een andere plaats.', uitleg: 'Concurrente rechten gaan allemaal door hetzelfde punt, hier het punt S.' },
          { id: 'v11', titel: 'Drager en halfrechten', type: 'mc', meerdere: true, hulp: ['halfrechte'], vraag: 'Bekijk de figuur. Welke uitspraken zijn juist?',
            figuur: { bord: { b: 11, h: 5, punten: [{ n: 'S', x: 2, y: 1.5, lp: [-0.15, 0.45] }, { n: 'Q', x: 5, y: 2.5, lp: [-0.15, 0.45] }, { n: 'P', x: 8, y: 3.5, lp: [-0.15, 0.45] }], lijnen: [{ t: 'rechte', p: ['S', 'P'], n: 'r' }] } },
            opties: ['r is de drager van [PQ.', '[PQ = [PS', '[PQ = [QP', '[QS ⊂ r', 'P ∈ [QS'], juist: [0, 1, 3],
            uitleg: '[PQ en [PS vertrekken allebei in P en lopen in dezelfde richting, dus ze zijn gelijk. [QP heeft een ander grenspunt. De halfrechte [QS loopt van Q weg van P, dus P ligt er niet op.' }
        ]
      },

      /* ============ 2 LIJNSTUKKEN METEN ============ */
      {
        id: 'd2', nr: '2', titel: 'Lijnstukken meten', hulp: ['meten', 'herleiden'], vragen: [
          { id: 'v01', titel: 'Een lijnstuk meten', type: 'teken', hulp: ['gereedschap', 'meten'], vraag: 'Meet het lijnstuk [AB] met de geodriehoek. <span class="extra">Klik op Geodriehoek en sleep het nulpunt naar A.</span>',
            bord: { punten: [{ n: 'A', x: 3, y: 6.5 }, pol('B', 3, 6.5, 5.7, 10)], lijnen: [{ t: 'lijnstuk', p: ['A', 'B'] }] }, gereedschap: ['geo'],
            slot: '|AB| = [[a]] cm', velden: { a: G(5.7, { tol: 0.11 }) }, tip: 'Leg het nulpunt op A en draai de geodriehoek tot de tekenzijde op het lijnstuk ligt. Lees af bij B.',
            uitleg: 'Het lijnstuk [AB] is 5,7 cm lang. Je mag 1 mm afwijken.' },
          { id: 'v02', titel: 'Twee lijnstukken meten', type: 'teken', hulp: ['gereedschap', 'meten'], vraag: 'Meet de lijnstukken [CD] en [EF] tot op 1 mm nauwkeurig.',
            bord: { punten: [{ n: 'C', x: 2, y: 3 }, pol('D', 2, 3, 3.6, 35), { n: 'E', x: 8, y: 8 }, pol('F', 8, 8, 4.4, -20)], lijnen: [{ t: 'lijnstuk', p: ['C', 'D'] }, { t: 'lijnstuk', p: ['E', 'F'] }] }, gereedschap: ['geo'],
            slot: '|CD| = [[a]] cm<br>|EF| = [[b]] cm', velden: { a: G(3.6, { tol: 0.11 }), b: G(4.4, { tol: 0.11 }) },
            uitleg: '|CD| = 3,6 cm en |EF| = 4,4 cm.' },
          { id: 'v03', titel: 'Herleiden', type: 'invul', hulp: ['herleiden'], vraag: 'Herleid.',
            sjabloon: rijen(['5 dm = [[a]] cm', '326 mm = [[b]] cm', '37 m = [[c]] km', '89,5 cm = [[d]] m', '0,7 dm = [[e]] cm', '3012,5 m = [[f]] km']),
            velden: { a: G(50, { w: 6 }), b: G(32.6, { w: 6 }), c: G(0.037, { w: 6 }), d: G(0.895, { w: 6 }), e: G(7, { w: 6 }), f: G(3.0125, { w: 6 }) },
            uitleg: 'Per stap naar een kleinere eenheid vermenigvuldig je met 10, per stap naar een grotere eenheid deel je door 10. Van m naar km zijn dat drie stappen: delen door 1000.' },
          { id: 'v04', titel: 'Juiste eenheid', type: 'invul', hulp: ['herleiden'], vraag: 'Vul de ontbrekende lengte-eenheid in.',
            sjabloon: rijen(['3200 m = 3,2 [[a]]', '2,02 cm = 20,2 [[b]]', '15 km = 15 000 [[c]]', '0,03 km = 300 [[d]]', '823 mm = 0,823 [[e]]']),
            velden: { a: K(EENH, 'km'), b: K(EENH, 'mm'), c: K(EENH, 'm'), d: K(EENH, 'dm'), e: K(EENH, 'm') },
            uitleg: '0,03 km = 30 m = 300 dm. 823 mm = 82,3 cm = 0,823 m.' },
          { id: 'v05', titel: 'Lijnstuk van 5,5 cm tekenen', type: 'teken', hulp: ['gereedschap', 'meten'], vraag: 'Teken een lijnstuk [GH] met |GH| = 5,5 cm.',
            bord: { punten: [{ n: 'G', x: 4, y: 5 }] }, gereedschap: ['lijnstuk', 'geo'], nieuw: ['H'], controle: [{ c: 'lengte', van: 'G', cm: 5.5, oplHoek: 15 }],
            tip: 'Toon de geodriehoek en leg het nulpunt op G. Kies daarna Lijnstuk, klik op G en klik bij 5,5 op de tekenzijde.', uitleg: 'Het lijnstuk begint in G en is 5,5 cm lang. De richting kies je zelf.' },
          { id: 'v06', titel: 'Lijnstuk van 0,7 dm tekenen', type: 'teken', hulp: ['gereedschap', 'herleiden'], vraag: 'Teken een lijnstuk [MN] met |MN| = 0,7 dm.',
            bord: { punten: [{ n: 'M', x: 3, y: 4 }] }, gereedschap: ['lijnstuk', 'geo'], nieuw: ['N'], controle: [{ c: 'lengte', van: 'M', cm: 7, oplHoek: 10 }],
            tip: 'Herleid eerst naar centimeter.', uitleg: '0,7 dm = 7 cm. Het lijnstuk [MN] is dus 7 cm lang.' },
          { id: 'v07', titel: 'Het midden aanduiden', type: 'teken', hulp: ['gereedschap', 'midden'], vraag: 'Duid het midden M van het lijnstuk [RT] aan.',
            bord: { punten: [{ n: 'R', x: 3, y: 3 }, pol('T', 3, 3, 6, 20)], lijnen: [{ t: 'lijnstuk', p: ['R', 'T'] }] }, gereedschap: ['punt', 'geo'], nieuw: ['M'],
            controle: [{ c: 'punt', n: 'M', midden: ['R', 'T'] }], tip: 'Meet eerst [RT] en deel de lengte door 2.',
            uitleg: '|RT| = 6 cm, dus het midden M ligt op 3 cm van R en op 3 cm van T.' },
          { id: 'v08', titel: 'Even lang lijnstuk construeren', type: 'teken', hulp: ['gereedschap', 'construeren'], vraag: 'Construeer met de passer een lijnstuk [KL] dat even lang is als [GH]. Je mag niet meten.',
            bord: { punten: [{ n: 'G', x: 2, y: 8 }, { n: 'H', x: 6.3, y: 8.6 }, { n: 'K', x: 6, y: 3.5 }], lijnen: [{ t: 'lijnstuk', p: ['G', 'H'] }] }, gereedschap: ['passer', 'lijnstuk'], nieuw: ['L'],
            controle: [{ c: 'lengteGelijk', van: 'K', als: ['G', 'H'], tol: 0.1, oplHoek: -10 }],
            tip: 'Kies Passer, klik op G en op H en daarna op K. Kies dan Lijnstuk, klik op K en op een punt van de cirkel.',
            uitleg: 'Elk punt van de cirkel rond K ligt even ver van K als H van G. Daarom is |KL| = |GH|.' },
          { id: 'v09', titel: 'Schetsen, tekenen of construeren', type: 'sleep', hulp: ['construeren'], vraag: 'Bij welke manier van werken hoort elke omschrijving?',
            vakken: ['Schetsen', 'Tekenen', 'Construeren'], items: [['met de vrije hand', 0], ['zonder geodriehoek of passer', 0], ['met de geodriehoek, je mag meten', 1], ['je meet nooit', 2], ['afstanden afpassen met de passer', 2]],
            uitleg: 'Schetsen doe je uit de vrije hand. Bij tekenen mag je meten met de geodriehoek. Bij construeren gebruik je passer en liniaal zonder te meten.' },
          { id: 'v10', titel: 'Even lang in symbolen', type: 'mc', hulp: ['meten'], vraag: 'Hoe noteer je in symbolen dat de lijnstukken [KP] en [LM] even lang zijn?',
            opties: ['|KP| = |LM|', '[KP] = [LM]', 'KP = LM', '|KP| ≠ |LM|'], juist: 0,
            uitleg: 'Je vergelijkt de lengtes, dus je gebruikt de verticale streepjes: |KP| = |LM|. [KP] = [LM] zou betekenen dat het dezelfde lijnstukken zijn.' },
          { id: 'v11', titel: 'Midden in symbolen', type: 'mc', hulp: ['midden'], vraag: 'M is het midden van [AB]. Hoe noteer je dat in symbolen?',
            opties: ['M ∈ [AB] en |AM| = |MB|', 'M ∈ AB en |AM| ≠ |MB|', 'M ∉ [AB] en |AM| = |MB|', '|AM| = |AB|'], juist: 0,
            uitleg: 'Het midden ligt op het lijnstuk en even ver van beide grenspunten.' },
          { id: 'v12', titel: 'Rekenen met het midden', type: 'invul', hulp: ['midden'], vraag: 'Bereken.',
            sjabloon: '|RT| = 6 cm en U is het midden van [RT]. Dan is |RU| = [[a]] cm<br>|AB| = 9 cm en M is het midden van [AB]. Dan is |AM| = [[b]] cm<br>N is het midden van [CD] en |CN| = 2,7 cm. Dan is |CD| = [[c]] cm',
            velden: { a: G(3), b: G(4.5), c: G(5.4) }, uitleg: '6 : 2 = 3; 9 : 2 = 4,5; 2,7 · 2 = 5,4.' },
          { id: 'v13', titel: 'Werken met schaal', type: 'stappen', hulp: ['herleiden'], vraag: 'Op een plan met schaal 1 : 100 bestaat een route uit drie stukken van 5 cm, 7 cm en 7,4 cm. Hoe lang is de route in werkelijkheid?',
            stappen: ['Lengte op het plan: 5 + 7 + 7,4 = [[a]] cm', 'In werkelijkheid is dat 100 keer zoveel: [[b]] cm', 'Herleid naar meter: [[c]] m'], velden: { a: G(19.4), b: G(1940), c: G(19.4) },
            uitleg: '19,4 cm op het plan is 19,4 · 100 = 1940 cm = 19,4 m in werkelijkheid.' },
          { id: 'v14', titel: 'Collineaire punten en lengte', type: 'mc', meerdere: true, vast: true, compact: true, vraag: 'De punten A, B en C zijn collineair. |AB| = 4 cm en |BC| = 3 cm. Hoe lang kan [AC] zijn?',
            opties: ['1 cm', '3,5 cm', '7 cm', '12 cm'], juist: [0, 2], tip: 'C kan aan twee kanten van B liggen.',
            uitleg: 'Ligt B tussen A en C, dan is |AC| = 4 + 3 = 7 cm. Ligt C tussen A en B, dan is |AC| = 4 − 3 = 1 cm.' }
        ]
      },

      /* ============ 3 HOEKEN ============ */
      {
        id: 'd3', nr: '3', titel: 'Hoeken', hulp: ['hoek', 'soorten'], vragen: [
          { id: 'v01', titel: 'Soorten hoeken', type: 'sleep', hulp: ['soorten'], vraag: 'Welke soort hoek hoort bij elke hoekgrootte?',
            vakken: ['Nulhoek', 'Scherpe hoek', 'Rechte hoek', 'Stompe hoek', 'Gestrekte hoek', 'Volle hoek'],
            items: [['0°', 0], ['37°', 1], ['89°', 1], ['90°', 2], ['105°', 3], ['179°', 3], ['180°', 4], ['360°', 5]],
            uitleg: 'Scherp: tussen 0° en 90°. Recht: precies 90°. Stomp: tussen 90° en 180°. Gestrekt: 180°. Vol: 360°.' },
          { id: 'v02', titel: 'Notatie van een hoek', type: 'mc', meerdere: true, vast: true, compact: true, hulp: ['hoek'], vraag: 'Hoe mag je de aangeduide hoek noteren?',
            figuur: { bord: { b: 10, h: 5.5, punten: [{ n: 'H', x: 1.5, y: 2.5, lp: [-0.1, -0.5] }, { n: 'A', x: 7.5, y: 1.5, lp: [0, -0.5] }, { n: 'B', x: 7, y: 4.8, lp: [0, 0.45] }], lijnen: [{ t: 'halfrechte', p: ['H', 'A'] }, { t: 'halfrechte', p: ['H', 'B'] }], hoeken: [{ h: 'H', van: 'A', naar: 'B', n: 'α', r: 1.6 }] } },
            opties: ['^H', 'A^HB', 'B^HA', 'α', 'H^AB', '^A'], juist: [0, 1, 2, 3],
            uitleg: 'Het hoekpunt H krijgt het dakje en staat in het midden als je drie letters gebruikt. H^AB zou een hoek met hoekpunt A zijn.' },
          { id: 'v03', titel: 'Onderdelen van een hoek', type: 'invul', hulp: ['hoek'], vraag: 'Vul aan.',
            sjabloon: 'Een hoek bestaat uit twee [[a]] en een [[b]]<br>De benen van een hoek zijn [[c]]',
            velden: { a: K(['benen', 'rechten', 'lijnstukken'], 'benen'), b: K(['hoekpunt', 'grenspunt', 'midden'], 'hoekpunt'), c: K(['halfrechten', 'lijnstukken', 'rechten'], 'halfrechten') },
            uitleg: 'Een hoek heeft twee benen en een hoekpunt. De benen zijn halfrechten met het hoekpunt als gemeenschappelijk grenspunt.' },
          { id: 'v04', titel: 'Graden en minuten', type: 'invul', hulp: ['hoek'], vraag: 'Vul aan.',
            sjabloon: rijen(['1° = [[a]]′', '1′ = [[b]]″', '22,5° = 22° [[c]]′', '0,25° = [[d]]′', '2° = [[e]]′']), velden: { a: G(60, { w: 3 }), b: G(60, { w: 3 }), c: G(30, { w: 3 }), d: G(15, { w: 3 }), e: G(120, { w: 3 }) },
            uitleg: 'Eén graad is 60 minuten en één minuut is 60 seconden. 0,5° is dus 30′ en 0,25° is 15′.' },
          { id: 'v05', titel: 'Hoeken op de klok', type: 'invul', hulp: ['soorten'], vraag: 'Bepaal door te redeneren de kleinste hoek tussen de wijzers en geef de benaming.',
            figuur: { html: '<div style="display:flex;gap:16px;flex-wrap:wrap">' + klok(3, 'a') + klok(6, 'b') + klok(1, 'c') + klok(4, 'd') + '</div>' },
            sjabloon: rijen(['a: [[a1]]° [[a2]]', 'b: [[b1]]° [[b2]]', 'c: [[c1]]° [[c2]]', 'd: [[d1]]° [[d2]]']),
            velden: { a1: G(90, { w: 3 }), a2: K(SOORT, 'rechte hoek'), b1: G(180, { w: 3 }), b2: K(SOORT, 'gestrekte hoek'), c1: G(30, { w: 3 }), c2: K(SOORT, 'scherpe hoek'), d1: G(120, { w: 3 }), d2: K(SOORT, 'stompe hoek') },
            tip: 'Tussen twee opeenvolgende uurcijfers ligt 360° : 12 = 30°.', uitleg: '3 uur: 3 · 30° = 90°. 6 uur: 180°. 1 uur: 30°. 4 uur: 4 · 30° = 120°.' },
          { id: 'v06', titel: 'Maak een stompe hoek', type: 'teken', hulp: ['soorten'], vraag: 'Versleep het oranje punt B zodat ^A een stompe hoek is.',
            bord: { h: 9, punten: [{ n: 'A', x: 9, y: 2.5, lp: [0, -0.5] }, { n: 'C', x: 15, y: 2.5, lp: [0, -0.5] }, pol('B', 9, 2.5, 5, 40, { sleep: true, baan: { m: 'A', r: 5 }, lp: [0.4, 0.45] })], lijnen: [{ t: 'halfrechte', p: ['A', 'C'] }, { t: 'halfrechte', p: ['A', 'B'] }], hoeken: [{ h: 'A', van: 'C', naar: 'B', r: 1.2 }] },
            controle: [{ c: 'hoekGrootte', h: 'A', van: 'C', naar: 'B', min: 92, max: 178, fout: 'De hoek is nog niet stomp. Een stompe hoek is groter dan 90° en kleiner dan 180°.' }],
            uitleg: 'Een stompe hoek ligt tussen 90° en 180°: wijder open dan een rechte hoek, maar nog niet gestrekt.' },
          { id: 'v07', titel: 'Maak een gestrekte hoek', type: 'teken', hulp: ['soorten'], vraag: 'Versleep het oranje punt B zodat ^A een gestrekte hoek is.',
            bord: { h: 8, punten: [{ n: 'A', x: 9, y: 3, lp: [0, -0.5] }, { n: 'C', x: 15, y: 3, lp: [0, -0.5] }, pol('B', 9, 3, 5, 60, { sleep: true, baan: { m: 'A', r: 5 }, lp: [0.4, 0.45] })], lijnen: [{ t: 'halfrechte', p: ['A', 'C'] }, { t: 'halfrechte', p: ['A', 'B'] }], hoeken: [{ h: 'A', van: 'C', naar: 'B', r: 1.2 }] },
            controle: [{ c: 'hoekGrootte', h: 'A', van: 'C', naar: 'B', min: 178, max: 182, fout: 'De hoek is nog niet gestrekt. Bij een gestrekte hoek liggen de benen in elkaars verlengde.' }],
            uitleg: 'Een gestrekte hoek meet 180°. De twee benen vormen samen een rechte.' },
          { id: 'v08', titel: 'Hoek berekenen', type: 'stappen', hulp: ['soorten'], vraag: 'Bereken ^C1 zonder te meten.',
            figuur: { bord: { b: 12, h: 6.5, punten: [{ n: 'C', x: 6, y: 1.5, lp: [0, -0.5] }, { n: 'x', x: 1, y: 1.5, verberg: true }, { n: 'y', x: 11, y: 1.5, verberg: true }, pol('p', 6, 1.5, 4.5, 34, H), pol('q', 6, 1.5, 4.5, 115, H)], lijnen: [{ t: 'rechte', p: ['x', 'y'] }, { t: 'halfrechte', p: ['C', 'p'] }, { t: 'halfrechte', p: ['C', 'q'] }], hoeken: [{ h: 'C', van: 'y', naar: 'p', n: '34°', r: 1.5 }, { h: 'C', van: 'p', naar: 'q', n: '1', r: 1 }, { h: 'C', van: 'q', naar: 'x', n: '65°', r: 1.5 }] } },
            stappen: ['De drie hoeken vormen samen een [[s]] van [[g]]°', '^C1 = 180° − 34° − 65° = [[a]]°'], velden: { s: K(['rechte hoek', 'gestrekte hoek', 'volle hoek'], 'gestrekte hoek'), g: G(180, { w: 3 }), a: G(81, { w: 3 }) },
            uitleg: 'De drie hoeken liggen samen langs een rechte en vormen een gestrekte hoek: 180° − 34° − 65° = 81°.' },
          { id: 'v09', titel: 'Pizzastukken', type: 'invul', hulp: ['soorten'], vraag: 'Een ronde pizza wordt vanuit het midden in even grote stukken gesneden.',
            sjabloon: 'Bij 8 stukken is de hoek van één stuk [[a]]°<br>Drie van die stukken vormen samen een hoek van [[b]]°<br>Is de hoek van elk stuk 24°, dan zijn er [[c]] stukken.', velden: { a: G(45, { w: 3 }), b: G(135, { w: 3 }), c: G(15, { w: 3 }) },
            tip: 'Een volle hoek is 360°.', uitleg: '360° : 8 = 45°. Drie stukken: 3 · 45° = 135°. 360° : 24° = 15 stukken.' },
          { id: 'v10', titel: 'Benaming van hoeken', type: 'invul', hulp: ['soorten'], vraag: 'Geef de juiste benaming van elke hoek.',
            figuur: { bord: { b: 16, h: 4.6, punten: [{ n: 'A', x: 3, y: 1, lp: [0, -0.5] }, pol('a1', 3, 1, 3, 0, H), pol('a2', 3, 1, 3, 130, H), { n: 'B', x: 7.5, y: 1, lp: [0, -0.5] }, pol('b1', 7.5, 1, 3.4, 0, H), pol('b2', 7.5, 1, 3.4, 40, H), { n: 'C', x: 12.5, y: 1, lp: [0, -0.5] }, pol('c1', 12.5, 1, 3, 0, H), pol('c2', 12.5, 1, 3, 90, H)], lijnen: [{ t: 'lijnstuk', p: ['A', 'a1'] }, { t: 'lijnstuk', p: ['A', 'a2'] }, { t: 'lijnstuk', p: ['B', 'b1'] }, { t: 'lijnstuk', p: ['B', 'b2'] }, { t: 'lijnstuk', p: ['C', 'c1'] }, { t: 'lijnstuk', p: ['C', 'c2'] }], hoeken: [{ h: 'A', van: 'a1', naar: 'a2', r: 0.7 }, { h: 'B', van: 'b1', naar: 'b2', r: 1 }, { h: 'C', van: 'c1', naar: 'c2', recht: true }] } },
            sjabloon: rijen(['^A is een [[a]]', '^B is een [[b]]', '^C is een [[c]]']), velden: { a: K(SOORT, 'stompe hoek'), b: K(SOORT, 'scherpe hoek'), c: K(SOORT, 'rechte hoek') },
            uitleg: '^A is groter dan 90° en dus stomp. ^B is kleiner dan 90° en dus scherp. Het vierkantje bij ^C duidt een rechte hoek aan.' }
        ]
      },

      /* ============ 4 HOEKEN METEN EN TEKENEN ============ */
      {
        id: 'd4', nr: '4', titel: 'Hoeken meten en tekenen', hulp: ['gereedschap', 'hoekmeten', 'hoektekenen'], vragen: [
          { id: 'v01', titel: 'Een scherpe hoek meten', type: 'teken', hulp: ['gereedschap', 'hoekmeten'], vraag: 'Meet ^A met de geodriehoek.',
            bord: { punten: [{ n: 'A', x: 4, y: 2.5, lp: [-0.3, -0.4] }, pol('b', 4, 2.5, 7, 5, H), pol('c', 4, 2.5, 6, 43, H)], lijnen: [{ t: 'halfrechte', p: ['A', 'b'] }, { t: 'halfrechte', p: ['A', 'c'] }], hoeken: [{ h: 'A', van: 'b', naar: 'c', r: 1.1 }] },
            gereedschap: ['geo'], slot: '^A = [[a]]°', velden: { a: G(38, { tol: 2, w: 3 }) },
            tip: 'Leg het nulpunt op A en draai tot de tekenzijde op één been ligt. Dit is een scherpe hoek: kies het kleinste getal.', uitleg: '^A = 38°. Je mag 2° afwijken.' },
          { id: 'v02', titel: 'Een stompe hoek meten', type: 'teken', hulp: ['gereedschap', 'hoekmeten'], vraag: 'Meet ^D met de geodriehoek.',
            bord: { punten: [{ n: 'D', x: 9, y: 2.5, lp: [0, -0.5] }, pol('e', 9, 2.5, 6, 10, H), pol('f', 9, 2.5, 6, 135, H)], lijnen: [{ t: 'halfrechte', p: ['D', 'e'] }, { t: 'halfrechte', p: ['D', 'f'] }], hoeken: [{ h: 'D', van: 'e', naar: 'f', r: 1 }] },
            gereedschap: ['geo'], slot: '^D = [[a]]°', velden: { a: G(125, { tol: 2, w: 3 }) },
            tip: 'Dit is een stompe hoek: kies het grootste getal.', uitleg: '^D = 125°. Bij een stompe hoek lees je het grootste van de twee getallen af.' },
          { id: 'v03', titel: 'Hoeken schatten', type: 'invul', hulp: ['soorten'], vraag: 'Schat de grootte van de hoeken. Kies telkens de beste schatting.',
            figuur: { bord: { b: 16, h: 4.2, punten: [{ n: 'P', x: 2, y: 1, lp: [0, -0.5] }, pol('p1', 2, 1, 4.5, 0, H), pol('p2', 2, 1, 4.5, 30, H), { n: 'Q', x: 11.5, y: 1, lp: [0, -0.5] }, pol('q1', 11.5, 1, 3.5, 0, H), pol('q2', 11.5, 1, 3.5, 150, H)], lijnen: [{ t: 'lijnstuk', p: ['P', 'p1'] }, { t: 'lijnstuk', p: ['P', 'p2'] }, { t: 'lijnstuk', p: ['Q', 'q1'] }, { t: 'lijnstuk', p: ['Q', 'q2'] }], hoeken: [{ h: 'P', van: 'p1', naar: 'p2', r: 1.3 }, { h: 'Q', van: 'q1', naar: 'q2', r: 0.7 }] } },
            sjabloon: rijen(['^P is ongeveer [[a]]', '^Q is ongeveer [[b]]']), velden: { a: K(['30°', '60°', '90°', '120°', '150°'], '30°'), b: K(['30°', '60°', '90°', '120°', '150°'], '150°') },
            uitleg: '^P is een derde van een rechte hoek: ongeveer 30°. ^Q is bijna gestrekt: ongeveer 150°.' },
          { id: 'v04', titel: 'Stappenplan hoek meten', type: 'volgorde', hulp: ['hoekmeten'], vraag: 'Zet de stappen om een hoek te meten in de juiste volgorde.', boven: 'de eerste stap',
            items: ['Plaats het nulpunt van de geodriehoek op het hoekpunt.', 'Leg de tekenzijde van de geodriehoek op één been van de hoek.', 'Zoek de twee getallen bij het tweede been.', 'Kies het kleinste getal bij een scherpe hoek en het grootste bij een stompe hoek.'],
            uitleg: 'Eerst het nulpunt op het hoekpunt, dan de tekenzijde op een been, daarna aflezen bij het tweede been en het juiste getal kiezen.' },
          { id: 'v05', titel: 'Welk getal lees je af?', type: 'mc', hulp: ['hoekmeten'], vraag: 'Je meet een stompe hoek. Bij het tweede been staan op je geodriehoek de getallen 60 en 120. Hoe groot is de hoek?',
            opties: ['120°', '60°', '180°', '300°'], juist: 0, uitleg: 'Een stompe hoek is groter dan 90°. Je kiest dus het grootste getal: 120°.' },
          { id: 'v06', titel: 'Hoek van 50° tekenen', type: 'teken', hulp: ['gereedschap', 'hoektekenen'], vraag: 'Teken een hoek ^A van 50°. Het eerste been [AB is al getekend.',
            bord: { punten: [{ n: 'A', x: 5, y: 2.5, lp: [0, -0.5] }, { n: 'B', x: 12, y: 2.5, lp: [0, -0.5] }], lijnen: [{ t: 'halfrechte', p: ['A', 'B'] }] }, gereedschap: ['halfrechte', 'geo'],
            controle: [{ c: 'hoek', h: 'A', van: 'B', graden: 50 }], tip: 'Toon de geodriehoek, leg het nulpunt op A en de tekenzijde op [AB. Kies Halfrechte, klik op A en daarna bij 50 op de gradenboog.',
            uitleg: 'Het tweede been vertrekt in A en maakt een hoek van 50° met [AB. Je mag 2° afwijken.' },
          { id: 'v07', titel: 'Hoek van 145° tekenen', type: 'teken', hulp: ['gereedschap', 'hoektekenen'], vraag: 'Teken een hoek ^E van 145°. Het eerste been [EF is al getekend.',
            bord: { punten: [{ n: 'E', x: 9, y: 2.5, lp: [0, -0.5] }, { n: 'F', x: 15, y: 2.5, lp: [0, -0.5] }], lijnen: [{ t: 'halfrechte', p: ['E', 'F'] }] }, gereedschap: ['halfrechte', 'geo'],
            controle: [{ c: 'hoek', h: 'E', van: 'F', graden: 145 }], tip: '145° is een stompe hoek. Het tweede been helt dus naar de andere kant over.',
            uitleg: 'Het tweede been vertrekt in E en maakt een stompe hoek van 145° met [EF.' },
          { id: 'v08', titel: 'Hoek van 72° op een schuin been', type: 'teken', hulp: ['gereedschap', 'hoektekenen'], vraag: 'Teken een hoek ^O van 72°. Het eerste been [OP is al getekend.',
            bord: { punten: [{ n: 'O', x: 5, y: 2.5, lp: [-0.3, -0.4] }, pol('P', 5, 2.5, 6.5, 20, { lp: [0.2, -0.45] })], lijnen: [{ t: 'halfrechte', p: ['O', 'P'] }] }, gereedschap: ['halfrechte', 'geo'],
            controle: [{ c: 'hoek', h: 'O', van: 'P', graden: 72 }], tip: 'Draai de geodriehoek met het oranje handvat tot de tekenzijde op [OP ligt.',
            uitleg: 'Ook als het eerste been schuin ligt, leg je de tekenzijde van de geodriehoek op dat been en tel je 72° af.' },
          { id: 'v09', titel: 'Hoek instellen op 72°', type: 'teken', hulp: ['soorten'], vraag: 'Versleep het oranje punt B tot ^A precies 72° is.',
            bord: { h: 9, punten: [{ n: 'A', x: 7, y: 2.5, lp: [0, -0.5] }, { n: 'C', x: 13.5, y: 2.5, lp: [0, -0.5] }, pol('B', 7, 2.5, 5.5, 25, { sleep: true, baan: { m: 'A', r: 5.5 }, lp: [0.4, 0.45] })], lijnen: [{ t: 'halfrechte', p: ['A', 'C'] }, { t: 'halfrechte', p: ['A', 'B'] }], hoeken: [{ h: 'A', van: 'C', naar: 'B', r: 1.4, waarde: true }] },
            controle: [{ c: 'hoekGrootte', h: 'A', van: 'C', naar: 'B', min: 72, max: 72, fout: 'De hoek is nog geen 72°.' }],
            uitleg: 'Een hoek van 72° is een scherpe hoek, iets kleiner dan een rechte hoek.' },
          { id: 'v10', titel: 'Even grote hoek tekenen', type: 'teken', hulp: ['gereedschap', 'hoekmeten', 'hoektekenen'], vraag: 'Teken ^O zodat ^O = ^A. Meet eerst ^A. Het eerste been [OP is al getekend.',
            bord: { punten: [{ n: 'A', x: 2.5, y: 5.5, lp: [0, -0.5] }, pol('a1', 2.5, 5.5, 4, 0, H), pol('a2', 2.5, 5.5, 4, 65, H), { n: 'O', x: 10, y: 2, lp: [0, -0.5] }, { n: 'P', x: 16, y: 2, lp: [0, -0.5] }], lijnen: [{ t: 'lijnstuk', p: ['A', 'a1'] }, { t: 'lijnstuk', p: ['A', 'a2'] }, { t: 'halfrechte', p: ['O', 'P'] }], hoeken: [{ h: 'A', van: 'a1', naar: 'a2', r: 1 }] },
            gereedschap: ['halfrechte', 'geo'], controle: [{ c: 'hoek', h: 'O', van: 'P', graden: 65 }], tip: 'Meet ^A en teken daarna in O een hoek met dezelfde grootte.',
            uitleg: '^A = 65°. Je tekent dus in O een hoek van 65° op het been [OP.' }
        ]
      },

      /* ============ 5 BISSECTRICE ============ */
      {
        id: 'd5', nr: '5', titel: 'Bissectrice van een hoek', hulp: ['bissectrice'], vragen: [
          { id: 'v01', titel: 'Wat is een bissectrice?', type: 'mc', vraag: 'Wat is de bissectrice van een hoek?',
            opties: ['De rechte door het hoekpunt die de hoek in twee even grote hoeken verdeelt.', 'Een rechte die loodrecht staat op een been van de hoek.', 'Het lijnstuk dat de twee benen verbindt.', 'De rechte door het midden van een been.'], juist: 0,
            uitleg: 'De bissectrice of deellijn gaat door het hoekpunt en verdeelt de hoek in twee even grote hoeken.' },
          { id: 'v02', titel: 'Rekenen met de bissectrice', type: 'invul', vraag: 'De rechte b is telkens de bissectrice van de hoek. Vul aan.',
            sjabloon: '^A = 60°, dus ^A1 = ^A2 = [[a]]°<br>^B = 90°, dus ^B1 = ^B2 = [[b]]°<br>^C = 135°, dus ^C1 = ^C2 = [[c]]°<br>^D1 = 37°, dus ^D = [[d]]°',
            velden: { a: G(30, { w: 4 }), b: G(45, { w: 4 }), c: G(67.5, { w: 4 }), d: G(74, { w: 4 }) }, uitleg: '60° : 2 = 30°; 90° : 2 = 45°; 135° : 2 = 67,5°; 2 · 37° = 74°.' },
          { id: 'v03', titel: 'Is b de bissectrice?', type: 'invul', vraag: 'Is de rechte b de bissectrice van de hoek?',
            figuur: { bord: { b: 18, h: 5.2, punten: [{ n: 'A', x: 1.5, y: 1, lp: [0, -0.5] }, pol('a0', 1.5, 1, 3.6, 0, H), pol('a1', 1.5, 1, 3.6, 50, H), pol('a2', 1.5, 1, 3.6, 70, H), { n: 'B', x: 8, y: 1, lp: [0, -0.5] }, pol('b0', 8, 1, 3.6, 0, H), pol('b1', 8, 1, 3.6, 45, H), pol('b2', 8, 1, 3.6, 90, H), { n: 'C', x: 14.5, y: 1, lp: [0, -0.5] }, pol('c0', 14.5, 1, 3.4, 0, H), pol('c1', 14.5, 1, 3.4, 62, H), pol('c2', 14.5, 1, 3.4, 124, H)],
              lijnen: [{ t: 'lijnstuk', p: ['A', 'a0'] }, { t: 'lijnstuk', p: ['A', 'a1'], n: 'b', zij: -1 }, { t: 'lijnstuk', p: ['A', 'a2'] }, { t: 'lijnstuk', p: ['B', 'b0'] }, { t: 'lijnstuk', p: ['B', 'b1'], n: 'b', zij: -1 }, { t: 'lijnstuk', p: ['B', 'b2'] }, { t: 'lijnstuk', p: ['C', 'c0'] }, { t: 'lijnstuk', p: ['C', 'c1'], n: 'b', zij: -1 }, { t: 'lijnstuk', p: ['C', 'c2'] }],
              hoeken: [{ h: 'A', van: 'a0', naar: 'a1', n: '50°', r: 1.2 }, { h: 'A', van: 'a1', naar: 'a2', n: '20°', r: 2.4, lr: 3 }, { h: 'B', van: 'b0', naar: 'b1', n: '45°', r: 1.2 }, { h: 'B', van: 'b1', naar: 'b2', n: '45°', r: 1.2 }, { h: 'C', van: 'c0', naar: 'c1', n: '62°', r: 1.2 }, { h: 'C', van: 'c1', naar: 'c2', n: '62°', r: 1.2 }] } },
            sjabloon: rijen(['bij ^A: [[a]]', 'bij ^B: [[b]]', 'bij ^C: [[c]]']), velden: { a: K(JN, 'neen'), b: K(JN, 'ja'), c: K(JN, 'ja') },
            uitleg: 'Een bissectrice verdeelt de hoek in twee even grote hoeken. Bij ^A zijn de delen 50° en 20°: dat is geen bissectrice. Bij ^B (45° en 45°) en ^C (62° en 62°) wel.' },
          { id: 'v04', titel: 'Bissectrice tekenen (scherpe hoek)', type: 'teken', hulp: ['gereedschap', 'bissectrice'], vraag: 'Teken de bissectrice b van ^A.',
            bord: { punten: [{ n: 'A', x: 4, y: 2, lp: [-0.3, -0.4] }, { n: 'x', x: 11, y: 2, verberg: true }, pol('y', 4, 2, 7, 60, H)], lijnen: [{ t: 'halfrechte', p: ['A', 'x'] }, { t: 'halfrechte', p: ['A', 'y'] }], hoeken: [{ h: 'A', van: 'x', naar: 'y', r: 1 }] },
            gereedschap: ['rechte', 'geo'], controle: [{ c: 'bissectrice', h: 'A', p1: 'x', p2: 'y' }], tip: 'Meet eerst de hoek en deel door 2. Kies Rechte, klik op A en daarna bij de halve hoek op de gradenboog.',
            uitleg: '^A = 60°. De bissectrice gaat door A en maakt een hoek van 30° met elk been.' },
          { id: 'v05', titel: 'Bissectrice tekenen (stompe hoek)', type: 'teken', hulp: ['gereedschap', 'bissectrice'], vraag: 'Teken de bissectrice b van ^E.',
            bord: { punten: [{ n: 'E', x: 9, y: 2, lp: [0, -0.5] }, pol('x', 9, 2, 6, 10, H), pol('y', 9, 2, 6, 140, H)], lijnen: [{ t: 'halfrechte', p: ['E', 'x'] }, { t: 'halfrechte', p: ['E', 'y'] }], hoeken: [{ h: 'E', van: 'x', naar: 'y', r: 1 }] },
            gereedschap: ['rechte', 'geo'], controle: [{ c: 'bissectrice', h: 'E', p1: 'x', p2: 'y' }], tip: 'Draai de geodriehoek tot de tekenzijde op een been ligt. Meet de hoek en deel door 2.',
            uitleg: '^E = 130°. De bissectrice gaat door E en maakt een hoek van 65° met elk been.' },
          { id: 'v06', titel: 'Stappenplan bissectrice', type: 'volgorde', vraag: 'Zet de stappen om een bissectrice te tekenen in de juiste volgorde.', boven: 'de eerste stap',
            items: ['Meet de grootte van de hoek.', 'Bereken de grootte van de halve hoek.', 'Plaats een hulppunt bij de halve hoek.', 'Teken een rechte door het hulppunt en het hoekpunt.', 'Duid de even grote hoeken aan met merktekens.'],
            uitleg: 'Meten, halveren, hulppunt plaatsen, rechte tekenen en merktekens aanbrengen.' },
          { id: 'v07', titel: 'Bissectrices van nevenhoeken', type: 'stappen', hulp: ['bissectrice', 'aanliggend'], vraag: '^A1 = 50° en ^A2 = 130° zijn nevenhoeken. De rechte a is de bissectrice van ^A1 en de rechte b is de bissectrice van ^A2.',
            stappen: ['De helft van ^A1 is [[a]]°', 'De helft van ^A2 is [[b]]°', 'De hoek tussen a en b is de som van die twee helften: [[c]]°', 'De bissectrices a en b staan dus [[d]] op elkaar.'],
            velden: { a: G(25, { w: 3 }), b: G(65, { w: 3 }), c: G(90, { w: 3 }), d: K(['loodrecht', 'evenwijdig'], 'loodrecht') },
            uitleg: '25° + 65° = 90°. De bissectrices van twee nevenhoeken staan altijd loodrecht op elkaar.' },
          { id: 'v08', titel: 'Bissectrice instellen', type: 'teken', vraag: 'Versleep het oranje punt D zodat [AD op de bissectrice van B^AC ligt.',
            bord: { h: 9, punten: [{ n: 'A', x: 5, y: 2, lp: [-0.3, -0.4] }, { n: 'B', x: 12.5, y: 2, lp: [0, -0.5] }, pol('C', 5, 2, 6.5, 70, { lp: [-0.45, 0.2] }), pol('D', 5, 2, 5.5, 15, { sleep: true, baan: { m: 'A', r: 5.5 }, lp: [0.45, 0.4] })],
              lijnen: [{ t: 'halfrechte', p: ['A', 'B'] }, { t: 'halfrechte', p: ['A', 'C'] }, { t: 'halfrechte', p: ['A', 'D'] }], hoeken: [{ h: 'A', van: 'B', naar: 'D', n: '1', r: 2, waarde: true }, { h: 'A', van: 'D', naar: 'C', n: '2', r: 3.3, waarde: true }] },
            controle: [{ c: 'hoekGrootte', h: 'A', van: 'B', naar: 'D', min: 35, max: 35, fout: 'De twee hoeken zijn nog niet even groot.' }],
            uitleg: 'B^AC = 70°. De bissectrice verdeelt de hoek in twee hoeken van 35°.' }
        ]
      },

      /* ============ 6 VERBANDEN TUSSEN TWEE HOEKEN ============ */
      {
        id: 'd6', nr: '6', titel: 'Verbanden tussen twee hoeken', hulp: ['overstaand', 'complement', 'aanliggend'], vragen: [
          { id: 'v01', titel: 'Definities koppelen', type: 'sleep', vraag: 'Koppel elke omschrijving aan de juiste naam.',
            paren: [['twee hoeken waarvan de benen in elkaars verlengde liggen', 'overstaande hoeken'], ['twee hoeken waarvan de som 90° is', 'complementaire hoeken'], ['twee hoeken waarvan de som 180° is', 'supplementaire hoeken'], ['twee hoeken met een gemeenschappelijk been en de andere benen aan weerszijden ervan', 'aanliggende hoeken'], ['twee hoeken die aanliggend en supplementair zijn', 'nevenhoeken']],
            uitleg: 'Complementair: samen 90°. Supplementair: samen 180°. Aanliggend: een gemeenschappelijk been. Nevenhoeken: aanliggend en supplementair. Overstaand: benen in elkaars verlengde.' },
          { id: 'v02', titel: 'Complement en supplement', type: 'invul', hulp: ['complement'], vraag: 'Vul aan.',
            sjabloon: 'Het complement van 53° is [[a]]°<br>Het supplement van 38° is [[b]]°<br>Het supplement van 95° is [[c]]°<br>Het complement van het supplement van 140° is [[d]]°',
            velden: { a: G(37, { w: 3 }), b: G(142, { w: 3 }), c: G(85, { w: 3 }), d: G(50, { w: 3 }) }, uitleg: '90° − 53° = 37°; 180° − 38° = 142°; 180° − 95° = 85°. Het supplement van 140° is 40° en het complement daarvan is 50°.' },
          { id: 'v03', titel: 'Tabel complement en supplement', type: 'invul', hulp: ['complement'], vraag: 'Bereken telkens het complement en het supplement van α.',
            sjabloon: '<table><tr><th>α</th><th>complement van α</th><th>supplement van α</th></tr><tr><td>40°</td><td>[[a]]°</td><td>[[b]]°</td></tr><tr><td>75°</td><td>[[c]]°</td><td>[[d]]°</td></tr><tr><td>61°</td><td>[[e]]°</td><td>[[f]]°</td></tr><tr><td>88°</td><td>[[g]]°</td><td>[[h]]°</td></tr></table>',
            velden: { a: G(50, { w: 3 }), b: G(140, { w: 3 }), c: G(15, { w: 3 }), d: G(105, { w: 3 }), e: G(29, { w: 3 }), f: G(119, { w: 3 }), g: G(2, { w: 3 }), h: G(92, { w: 3 }) },
            uitleg: 'Complement: 90° − α. Supplement: 180° − α. Het supplement is altijd 90° groter dan het complement.' },
          { id: 'v04', titel: 'Snijdende rechten', type: 'invul', hulp: ['overstaand', 'aanliggend'], vraag: 'Twee rechten snijden elkaar in S. Bepaal de andere hoeken zonder te meten.',
            figuur: { bord: snijfiguur(['35°', '2', '3', '4']) }, sjabloon: rijen(['^S2 = [[a]]°', '^S3 = [[b]]°', '^S4 = [[c]]°']), velden: { a: G(145, { w: 3 }), b: G(35, { w: 3 }), c: G(145, { w: 3 }) },
            uitleg: '^S2 is een nevenhoek van de hoek van 35°: 180° − 35° = 145°. ^S3 is de overstaande hoek van 35° en is dus ook 35°. ^S4 is de overstaande hoek van ^S2: 145°.' },
          { id: 'v05', titel: 'Naam van het verband', type: 'invul', hulp: ['overstaand', 'aanliggend'], vraag: 'Welk verband is er tussen de hoeken? Kies de meest geschikte naam.',
            figuur: { bord: snijfiguur(['1', '2', '3', '4']) },
            sjabloon: '^S1 en ^S3 zijn [[a]]<br>^S1 en ^S2 zijn [[b]]<br>^S2 en ^S4 zijn [[c]]<br>^S3 en ^S4 zijn [[d]]',
            velden: { a: K(['overstaande hoeken', 'nevenhoeken', 'complementaire hoeken'], 'overstaande hoeken'), b: K(['overstaande hoeken', 'nevenhoeken', 'complementaire hoeken'], 'nevenhoeken'), c: K(['overstaande hoeken', 'nevenhoeken', 'complementaire hoeken'], 'overstaande hoeken'), d: K(['overstaande hoeken', 'nevenhoeken', 'complementaire hoeken'], 'nevenhoeken') },
            uitleg: 'Hoeken recht tegenover elkaar zijn overstaande hoeken. Hoeken naast elkaar die samen een gestrekte hoek vormen, zijn nevenhoeken.' },
          { id: 'v06', titel: 'Waar of niet waar', type: 'mc', meerdere: true, vraag: 'Duid alle ware uitspraken aan.',
            opties: ['Overstaande hoeken zijn altijd even groot.', 'Nevenhoeken zijn altijd supplementair.', 'Supplementaire hoeken zijn altijd nevenhoeken.', 'Complementaire hoeken zijn altijd aanliggend.', 'Twee supplementaire hoeken kunnen even groot zijn.', 'Aanliggende hoeken hebben een gemeenschappelijk been.'], juist: [0, 1, 4, 5],
            uitleg: 'Supplementaire hoeken hoeven niet naast elkaar te liggen, dus het zijn niet altijd nevenhoeken. Ook complementaire hoeken kunnen los van elkaar getekend zijn. Twee rechte hoeken zijn supplementair en even groot.' },
          { id: 'v07', titel: 'Nevenhoeken α en 4α', type: 'stappen', hulp: ['aanliggend'], vraag: 'Twee nevenhoeken meten α en 4α. Bereken α.',
            stappen: ['Nevenhoeken zijn supplementair: α + 4α = [[a]]°', '[[b]] · α = 180°', 'α = [[c]]°'], velden: { a: G(180, { w: 3 }), b: G(5, { w: 2 }), c: G(36, { w: 3 }) },
            uitleg: 'α + 4α = 5α = 180°, dus α = 180° : 5 = 36°.' },
          { id: 'v08', titel: 'Het dubbel van het complement', type: 'stappen', hulp: ['complement'], vraag: 'Een hoek α is het dubbel van zijn complement β. Hoe groot is α?',
            stappen: ['α en β zijn complementair: α + β = [[a]]°', 'Omdat α = 2β is 2β + β = 90°, dus [[b]] · β = 90°', 'β = [[c]]°', 'α = [[d]]°'], velden: { a: G(90, { w: 3 }), b: G(3, { w: 2 }), c: G(30, { w: 3 }), d: G(60, { w: 3 }) },
            uitleg: '3β = 90°, dus β = 30° en α = 2 · 30° = 60°.' },
          { id: 'v09', titel: 'Supplement is 58° groter', type: 'stappen', hulp: ['complement'], vraag: 'Het supplement van een hoek α is 58° groter dan de hoek zelf. Hoe groot is α?',
            stappen: ['α + (α + 58°) = [[a]]°', '2α = [[b]]°', 'α = [[c]]°'], velden: { a: G(180, { w: 3 }), b: G(122, { w: 3 }), c: G(61, { w: 3 }) },
            uitleg: '2α + 58° = 180°, dus 2α = 122° en α = 61°. Controle: het supplement is 119° en 119° − 61° = 58°.' },
          { id: 'v10', titel: 'Rekenen met minuten', type: 'invul', hulp: ['complement', 'hoek'], vraag: 'Vul aan.',
            sjabloon: 'Het complement van 35° 30′ is [[a]]° [[b]]′<br>Het supplement van 48° 30′ is [[c]]° [[d]]′',
            velden: { a: G(54, { w: 3 }), b: G(30, { w: 3 }), c: G(131, { w: 3 }), d: G(30, { w: 3 }) }, tip: 'Schrijf 90° als 89° 60′ en 180° als 179° 60′.',
            uitleg: '89° 60′ − 35° 30′ = 54° 30′ en 179° 60′ − 48° 30′ = 131° 30′.' },
          { id: 'v11', titel: 'Supplement instellen', type: 'teken', hulp: ['complement'], vraag: 'α meet 110°. Versleep het oranje punt Q zodat β het supplement is van α.',
            bord: { h: 8, punten: [{ n: 'A', x: 4.5, y: 2.5, lp: [0, -0.5] }, pol('a1', 4.5, 2.5, 4, 0, H), pol('a2', 4.5, 2.5, 4, 110, H), { n: 'P', x: 11.5, y: 2.5, lp: [0, -0.5] }, { n: 'r', x: 16.5, y: 2.5, verberg: true }, pol('Q', 11.5, 2.5, 4.5, 30, { sleep: true, baan: { m: 'P', r: 4.5 }, lp: [0.45, 0.4] })],
              lijnen: [{ t: 'lijnstuk', p: ['A', 'a1'] }, { t: 'lijnstuk', p: ['A', 'a2'] }, { t: 'lijnstuk', p: ['P', 'r'] }, { t: 'lijnstuk', p: ['P', 'Q'] }], hoeken: [{ h: 'A', van: 'a1', naar: 'a2', n: 'α = 110°', r: 0.9, lr: 2.1 }, { h: 'P', van: 'r', naar: 'Q', n: 'β', r: 1.2, waarde: true }] },
            controle: [{ c: 'hoekGrootte', h: 'P', van: 'r', naar: 'Q', min: 70, max: 70, fout: 'β is nog niet het supplement van α.' }], tip: 'Supplementaire hoeken zijn samen 180°.',
            uitleg: 'Het supplement van 110° is 180° − 110° = 70°.' },
          { id: 'v12', titel: 'Nevenhoek tekenen', type: 'teken', hulp: ['gereedschap', 'aanliggend'], vraag: 'Teken een nevenhoek van α.',
            bord: { punten: [{ n: 'B', x: 9, y: 3, lp: [0, -0.5] }, { n: 'A', x: 15, y: 3, lp: [0, -0.5] }, pol('C', 9, 3, 5, 50, { lp: [0.4, 0.3] })], lijnen: [{ t: 'halfrechte', p: ['B', 'A'] }, { t: 'halfrechte', p: ['B', 'C'] }], hoeken: [{ h: 'B', van: 'A', naar: 'C', n: 'α', r: 1.2 }] },
            gereedschap: ['rechte', 'halfrechte'], controle: [{ c: 'tegengesteld', h: 'B', van: ['A', 'C'] }],
            tip: 'Verleng één been voorbij het hoekpunt. Dat lukt het makkelijkst met Rechte: klik op B en op A.', uitleg: 'Als je het been [BA verlengt voorbij B, ontstaat naast α een hoek van 130°. Samen vormen ze een gestrekte hoek: het zijn nevenhoeken.' }
        ]
      }
    ]
  });
})();
