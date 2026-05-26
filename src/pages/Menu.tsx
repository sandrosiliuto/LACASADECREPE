import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { useSound } from '../components/SoundManager';

const embeddedStyles = `
  .menu-wrapper {
      font-family: system-ui, -apple-system, 'Segoe UI', 'Inter', 'Helvetica Neue', sans-serif;
      line-height: 1.4;
      background: #fefcf5;
      color: #2c2418;
      width: 100%;
      min-height: 100vh;
  }
  .menu-wrapper * {
      box-sizing: border-box;
  }
  .menu-wrapper .menu-container {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem 1.5rem 4rem;
  }
  .menu-wrapper .menu-header {
      text-align: center;
      margin-bottom: 3rem;
      border-bottom: 2px solid #e3d8cc;
      padding-bottom: 1.5rem;
  }
  .menu-wrapper .menu-header h1 {
      font-size: 2.5rem;
      letter-spacing: -0.02em;
      background: linear-gradient(135deg, #c49a6c, #7a4e2a);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      margin-bottom: 0.5rem;
      font-weight: bold;
  }
  .menu-wrapper .menu-header p {
      color: #7c6b5a;
      font-weight: 500;
  }
  .menu-wrapper .tab-nav {
      display: flex;
      justify-content: center;
      gap: 0.75rem;
      margin-bottom: 3rem;
      flex-wrap: wrap;
  }
  .menu-wrapper .tab-btn {
      background: transparent;
      border: none;
      padding: 0.75rem 2rem;
      font-size: 1.1rem;
      font-weight: 600;
      border-radius: 60px;
      cursor: pointer;
      transition: all 0.2s ease;
      font-family: inherit;
      color: #5e4b34;
      background: #f5efe8;
      letter-spacing: 0.3px;
  }
  .menu-wrapper .tab-btn.active {
      background: #c49a6c;
      color: white;
      box-shadow: 0 4px 12px rgba(196, 154, 108, 0.3);
  }
  .menu-wrapper .tab-btn:hover:not(.active) {
      background: #e9dfd5;
      transform: translateY(-1px);
  }
  .menu-wrapper .tab-content {
      display: none;
      animation: fadeInMenu 0.25s ease-out;
  }
  .menu-wrapper .tab-content.active {
      display: block;
  }
  @keyframes fadeInMenu {
      from { opacity: 0; transform: translateY(6px); }
      to { opacity: 1; transform: translateY(0); }
  }
  .menu-wrapper .menu-section {
      margin-bottom: 3rem;
      background: white;
      border-radius: 2rem;
      padding: 1.5rem 2rem;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02), 0 1px 2px rgba(0, 0, 0, 0.03);
      border: 1px solid #f0e7de;
  }
  .menu-wrapper .section-title {
      font-size: 1.8rem;
      font-weight: 700;
      border-left: 6px solid #c49a6c;
      padding-left: 1rem;
      margin-bottom: 1.6rem;
      color: #362812;
      letter-spacing: -0.3px;
  }
  .menu-wrapper .section-sub {
      font-size: 1.3rem;
      font-weight: 600;
      margin: 1.5rem 0 1rem 0;
      padding-bottom: 0.5rem;
      border-bottom: 1px dashed #e3d5c8;
      color: #7a5a3e;
  }
  .menu-wrapper .menu-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1rem;
  }
  .menu-wrapper .menu-item {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      flex-wrap: wrap;
      padding: 0.6rem 0;
      border-bottom: 1px solid #f0e8df;
      gap: 0.5rem;
  }
  .menu-wrapper .item-name {
      font-weight: 600;
      color: #2c2418;
      font-size: 1rem;
  }
  .menu-wrapper .item-desc {
      width: 100%;
      font-size: 0.85rem;
      color: #7a6b5a;
      margin-top: 0.2rem;
      line-height: 1.3;
  }
  .menu-wrapper .item-price {
      font-weight: 700;
      color: #c2813b;
      background: #fff4eb;
      padding: 0.2rem 0.6rem;
      border-radius: 30px;
      font-size: 0.9rem;
      white-space: nowrap;
  }
  .menu-wrapper .two-col {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      margin-top: 1rem;
  }
  .menu-wrapper .half {
      flex: 1 1 250px;
  }
  .menu-wrapper hr {
      margin: 1rem 0;
      border: none;
      border-top: 1px solid #ecdccc;
  }
  .menu-wrapper .badge-time {
      background: #f2eadf;
      display: inline-block;
      padding: 0.2rem 1rem;
      border-radius: 40px;
      font-size: 0.8rem;
      font-weight: 500;
      margin-bottom: 1.2rem;
      color: #ab7a4a;
  }
  @media (max-width: 680px) {
      .menu-wrapper .menu-container {
          padding: 1rem 1rem 2rem;
      }
      .menu-wrapper .menu-section {
          padding: 1rem 1.2rem;
      }
      .menu-wrapper .section-title {
          font-size: 1.5rem;
      }
      .menu-wrapper .tab-btn {
          padding: 0.5rem 1.2rem;
          font-size: 1rem;
      }
  }
  .menu-wrapper footer {
      text-align: center;
      margin-top: 3rem;
      color: #b9aa99;
      font-size: 0.8rem;
      border-top: 1px solid #ede3d9;
      padding-top: 2rem;
  }
`;

export default function Menu() {
  const [lang, setLang] = useState<'spanish' | 'english'>('spanish');
  const { playPop, playBell } = useSound();

  const handleLangToggle = (selectedLang: 'spanish' | 'english') => {
    setLang(selectedLang);
    playBell();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full flex-1 w-full"
    >
      <style dangerouslySetInnerHTML={{ __html: embeddedStyles }} />
      <div className="menu-wrapper">
        <div className="menu-container">
          <div className="menu-header">
            <h1>LA CASA DEL CREPE</h1>
            <p>🍽️ Sabores artesanos · El Médano · Desde 2012</p>
          </div>

          <div className="tab-nav">
            <button 
              className={`tab-btn ${lang === 'spanish' ? 'active' : ''}`}
              onClick={() => handleLangToggle('spanish')}
            >
              🇪🇸 Español
            </button>
            <button 
              className={`tab-btn ${lang === 'english' ? 'active' : ''}`}
              onClick={() => handleLangToggle('english')}
            >
              🇬🇧 English
            </button>
          </div>

          {lang === 'spanish' && (
            <div id="spanish" className="tab-content active">
              {/* DESAYUNOS / BRUNCH */}
              <div className="menu-section">
                <div className="section-title">🍳 DESAYUNOS (BRUNCH) 9:30 – 12:30h</div>
                <div className="badge-time">✨ Para compartir o disfrutar individualmente</div>
                <div className="menu-grid">
                  <div className="menu-item"><span className="item-name">Brunch Internacional</span><span className="item-price">12.90€ (1p) / 23.90€ (2p)</span><div className="item-desc">Salmón, mozzarella, langostino, queso semicurado, mini ensalada, mini crepe, pan, mantequilla, mermelada, Nutella, zumo naranja, yogur con fruta</div></div>
                  <div className="menu-item"><span className="item-name">Brunch Landres</span><span className="item-price">12.50€ (1p) / 23.50€ (2p)</span><div className="item-desc">Bacon, mozzarella, huevo frito, jamón serrano, mini ensalada, mini crepe, pan, mantequilla, mermelada, Nutella, zumo naranja</div></div>
                  <div className="menu-item"><span className="item-name">Brunch París</span><span className="item-price">10.90€</span><div className="item-desc">Yogur con fruta, mini crepe salado, mini crepe dulce, zumo de naranja</div></div>
                  <div className="menu-item"><span className="item-name">English Breakfast</span><span className="item-price">9.10€</span><div className="item-desc">Bacon, alubias, tomate, champiñones, huevo frito, salchicha, pan, mantequilla, zumo naranja</div></div>
                  <div className="menu-item"><span className="item-name">Brunch Barcelona</span><span className="item-price">5.20€</span><div className="item-desc">Tostada, jamón serrano, turraca, zumo naranja</div></div>
                  <div className="menu-item"><span className="item-name">Desayuno Clásico</span><span className="item-price">4.00€</span><div className="item-desc">Tostada, mantequilla, mermelada, zumo naranja o café</div></div>
                  <div className="menu-item"><span className="item-name">Yogur con fruta y muesli</span><span className="item-price">4.80€</span><div className="item-desc">Yogur natural, fruta fresca, muesli crujiente</div></div>
                </div>
              </div>

              {/* ENSALADAS */}
              <div className="menu-section">
                <div className="section-title">🥗 ENSALADAS</div>
                <div className="menu-grid">
                  <div className="menu-item"><span className="item-name">Griega</span><span className="item-price">10.80€</span><div className="item-desc">Lechuga, tomate, feta, pepino, cebolla, pimientos, aceitunas</div></div>
                  <div className="menu-item"><span className="item-name">Quinoa</span><span className="item-price">10.90€</span><div className="item-desc">Lechuga, rúcula, pico de gallo, pimiento, pepino, aceitunas</div></div>
                  <div className="menu-item"><span className="item-name">La Casa del Crepe</span><span className="item-price">11.50€</span><div className="item-desc">Lechuga, tomate, champiñones, atún, aguacate, huevo mojo</div></div>
                  <div className="menu-item"><span className="item-name">Hibiscus</span><span className="item-price">11.90€</span><div className="item-desc">Lechuga, rúcula, jamón serrano, queso de cabra, fresas, nueces</div></div>
                  <div className="menu-item"><span className="item-name">Chicken Run</span><span className="item-price">12.10€</span><div className="item-desc">Lechuga, pollo caliente, pimiento, queso de cabra, cebolla</div></div>
                  <div className="menu-item"><span className="item-name">César</span><span className="item-price">11.90€</span><div className="item-desc">Lechuga, rúcula, tomate, pollo caliente, pimiento, queso de cabra</div></div>
                  <div className="menu-item"><span className="item-name">Nemo</span><span className="item-price">11.90€</span><div className="item-desc">Lechuga, salmón, queso de cabra, alcaparras, pepino, salsa roja</div></div>
                  <div className="menu-item"><span className="item-name">Ethano</span><span className="item-price">11.90€</span><div className="item-desc">Lechuga, atún, cebolla, gambas, pimientos, pepino, salsa roja</div></div>
                </div>
              </div>

              {/* CREPES SALADOS */}
              <div className="menu-section">
                <div className="section-title">🧀 CREPES SALADOS</div>
                <div className="menu-grid">
                  <div className="menu-item"><span className="item-name">Fiona</span><span className="item-price">9.90€</span><div className="item-desc">Queso amarillo, pesto, tomate cherry, parmesano, rúcula, pepino, aceite</div></div>
                  <div className="menu-item"><span className="item-name">Lara Croft</span><span className="item-price">9.90€</span><div className="item-desc">Pepas, queso semicurado, champiñones, almagrote</div></div>
                  <div className="menu-item"><span className="item-name">Olivia</span><span className="item-price">10.10€</span><div className="item-desc">Queso amarillo, espinacas, queso azul, patatas, champiñones, cebolla, tostada</div></div>
                  <div className="menu-item"><span className="item-name">Cheeseland</span><span className="item-price">9.80€</span><div className="item-desc">Queso, almendro, queso azul, queso de cabra, queso semicurado, orégano</div></div>
                  <div className="menu-item"><span className="item-name">Alekay</span><span className="item-price">7.10€</span><div className="item-desc">Queso amarillo, salchicha, ketchup, cebolla crujiente</div></div>
                </div>
                <div className="section-sub">🇪🇸 Crepes con jamón serrano</div>
                <div className="menu-grid">
                  <div className="menu-item"><span className="item-name">Gaudí</span><span className="item-price">10.90€</span><div className="item-desc">Semicurado, jamón serrano, aguacate, tomate natural, rúcula, orégano</div></div>
                  <div className="menu-item"><span className="item-name">Darek</span><span className="item-price">10.90€</span><div className="item-desc">Queso, jamón serrano, mozzarella, champiñones, aceite, rúcula</div></div>
                  <div className="menu-item"><span className="item-name">Picasso</span><span className="item-price">9.90€</span><div className="item-desc">Queso, jamón serrano, champiñones, béchamel</div></div>
                  <div className="menu-item"><span className="item-name">Roma</span><span className="item-price">10.90€</span><div className="item-desc">Queso amarillo, jamón serrano, tomate cherry</div></div>
                </div>
                <div className="section-sub">🍖 Jamón y orégano</div>
                <div className="menu-grid">
                  <div className="menu-item"><span className="item-name">El Principito</span><span className="item-price">7.10€</span><div className="item-desc">Queso amarillo, jamón, béchamel</div></div>
                  <div className="menu-item"><span className="item-name">Mafalda</span><span className="item-price">7.80€</span><div className="item-desc">Queso amarillo, jamón, tomate, orégano</div></div>
                  <div className="menu-item"><span className="item-name">Bob Esponja</span><span className="item-price">8.10€</span><div className="item-desc">Queso amarillo, jamón, champiñones, béchamel</div></div>
                  <div className="menu-item"><span className="item-name">Popeye</span><span className="item-price">8.10€</span><div className="item-desc">Queso amarillo, jamón, espinacas, béchamel</div></div>
                </div>
                <div className="section-sub">🥩 Con carne</div>
                <div className="menu-grid">
                  <div className="menu-item"><span className="item-name">Naruto</span><span className="item-price">10.50€</span><div className="item-desc">Queso amarillo, carne molida, pico de gallo, jalapeños, huevo frito, mojo de aguacate</div></div>
                  <div className="menu-item"><span className="item-name">Daphne</span><span className="item-price">10.90€</span><div className="item-desc">Queso, bacon, jalapeños, carne molida, cebolla crujiente, salsa cheddar</div></div>
                  <div className="menu-item"><span className="item-name">Robin Hood</span><span className="item-price">9.10€</span><div className="item-desc">Queso amarillo, carne mechada, aguacate</div></div>
                  <div className="menu-item"><span className="item-name">Obelix</span><span className="item-price">10.50€</span><div className="item-desc">Queso, huevo frito, cebolla, carne molida, salchicha, salsa tomate, béchamel</div></div>
                  <div className="menu-item"><span className="item-name">Lily</span><span className="item-price">10.90€</span><div className="item-desc">Queso amarillo, carne molida, cebolla, bacon, queso de cabra</div></div>
                </div>
                <div className="section-sub">🥓 Bacon</div>
                <div className="menu-grid">
                  <div className="menu-item"><span className="item-name">Sheldon Cooper</span><span className="item-price">10.90€</span><div className="item-desc">Queso semicurado, bacon, aguacate, tomate natural, rúcula</div></div>
                  <div className="menu-item"><span className="item-name">Flash</span><span className="item-price">10.70€</span><div className="item-desc">Queso, bacon, champiñones, cebolla, huevo frito, rúcula, sirope de arce</div></div>
                  <div className="menu-item"><span className="item-name">Ainhoa</span><span className="item-price">10.90€</span><div className="item-desc">Queso amarillo, bacon, queso de cabra, cherry, rúcula, nueces, manzana, sirope de arce</div></div>
                </div>
              </div>

              {/* DULCES / TORTITAS AMERICANAS */}
              <div className="menu-section">
                <div className="section-title">🍫 CREPES / TORTITAS AMERICANAS DULCES</div>
                <div className="two-col">
                  <div className="half">
                      <div className="menu-item"><span className="item-name">Chocolate</span><span className="item-price">4.00€</span></div>
                      <div className="menu-item"><span className="item-name">Chocolate + almendras/nueces/coco</span><span className="item-price">5.00€</span></div>
                      <div className="menu-item"><span className="item-name">Chocolate + nata</span><span className="item-price">5.00€</span></div>
                      <div className="menu-item"><span className="item-name">Chocolate + helado</span><span className="item-price">5.00€</span></div>
                      <div className="menu-item"><span className="item-name">Crema de Pistacho</span><span className="item-price">6.10€</span></div>
                      <div className="menu-item"><span className="item-name">Nutella</span><span className="item-price">4.90€</span></div>
                      <div className="menu-item"><span className="item-name">Nutella + frutos secos</span><span className="item-price">5.90€</span></div>
                      <div className="menu-item"><span className="item-name">Nutella + plátano</span><span className="item-price">6.00€</span></div>
                  </div>
                  <div className="half">
                      <div className="menu-item"><span className="item-name">Dulce de leche</span><span className="item-price">4.60€</span></div>
                      <div className="menu-item"><span className="item-name">Dulce de leche + nueces</span><span className="item-price">5.80€</span></div>
                      <div className="menu-item"><span className="item-name">Mermelada</span><span className="item-price">3.90€</span></div>
                      <div className="menu-item"><span className="item-name">Mermelada + frutos secos</span><span className="item-price">4.90€</span></div>
                      <div className="menu-item"><span className="item-name">Jarabe de Arce</span><span className="item-price">4.80€</span></div>
                      <div className="menu-item"><span className="item-name">Azúcar / Azúcar glas</span><span className="item-price">3.40€</span></div>
                      <div className="menu-item"><span className="item-name">Azúcar + limón</span><span className="item-price">4.50€</span></div>
                      <div className="menu-item"><span className="item-name">Canela + azúcar</span><span className="item-price">4.50€</span></div>
                      <div className="menu-item"><span className="item-name">Miel / Miel de palma</span><span className="item-price">4.30€ / 4.80€</span></div>
                  </div>
                </div>
                <div className="section-sub">🌟 ESPECIALES DULCES</div>
                <div className="menu-grid">
                  <div className="menu-item"><span className="item-name">Osito amoroso</span><span className="item-price">7.90€</span><div className="item-desc">Helado de vainilla, nata, M&M’s, chocolate, leche condensada</div></div>
                  <div className="menu-item"><span className="item-name">Sofía</span><span className="item-price">7.90€</span><div className="item-desc">Helado de coco, nata, almendras crujientes, chocolate blanco, chocolate</div></div>
                  <div className="menu-item"><span className="item-name">Cheesecreepe</span><span className="item-price">6.90€</span><div className="item-desc">Mascarpone, mermelada de fresa, helado de vainilla</div></div>
                  <div className="menu-item"><span className="item-name">Heidi</span><span className="item-price">6.90€</span><div className="item-desc">Chispas, helado, chocolate, leche condensada</div></div>
                  <div className="menu-item"><span className="item-name">Oreo</span><span className="item-price">6.90€</span><div className="item-desc">Oreo, helado de vainilla, chocolate, azúcar glas</div></div>
                  <div className="menu-item"><span className="item-name">Kinder</span><span className="item-price">6.90€</span><div className="item-desc">Kinder bueno, helado de nata, chocolate, azúcar glas</div></div>
                  <div className="menu-item"><span className="item-name">Kit-Kat</span><span className="item-price">6.90€</span><div className="item-desc">Kit-Kat, helado de chocolate, dulce de leche, azúcar glas</div></div>
                  <div className="menu-item"><span className="item-name">Filipinos</span><span className="item-price">6.90€</span><div className="item-desc">Filipinos, helado de chocolate, chocolate blanco, azúcar glas</div></div>
                  <div className="menu-item"><span className="item-name">Gabriel</span><span className="item-price">7.90€</span><div className="item-desc">Helado de chocolate, chocolate blanco, fresa, almendras crujientes</div></div>
                  <div className="menu-item"><span className="item-name">Balu</span><span className="item-price">7.90€</span><div className="item-desc">Nutella, plátano, helado de vainilla, nata</div></div>
                  <div className="menu-item"><span className="item-name">Teletubies</span><span className="item-price">7.90€</span><div className="item-desc">Plátano, nata, fresa, dulce de leche, chocolate</div></div>
                  <div className="menu-item"><span className="item-name">Maya</span><span className="item-price">6.90€</span><div className="item-desc">Manzana, helado de vainilla, miel, canela</div></div>
                  <div className="menu-item"><span className="item-name">Bambi</span><span className="item-price">6.90€</span><div className="item-desc">Mascarpone, Nutella, coco</div></div>
                </div>
              </div>

              {/* BEBIDAS */}
              <div className="menu-section">
                <div className="section-title">🥤 BEBIDAS</div>
                <div className="two-col">
                  <div className="half">
                      <div className="menu-item"><span className="item-name">Café espresso</span><span className="item-price">1.10€</span></div>
                      <div className="menu-item"><span className="item-name">Americano</span><span className="item-price">1.50€</span></div>
                      <div className="menu-item"><span className="item-name">Cortado / con leche</span><span className="item-price">1.20€ / 1.30€</span></div>
                      <div className="menu-item"><span className="item-name">Café con leche</span><span className="item-price">1.70€</span></div>
                      <div className="menu-item"><span className="item-name">Capuchino</span><span className="item-price">1.80€</span></div>
                      <div className="menu-item"><span className="item-name">Latte macchiato</span><span className="item-price">2.80€</span></div>
                      <div className="menu-item"><span className="item-name">Barraquito con licor</span><span className="item-price">2.80€</span></div>
                      <div className="menu-item"><span className="item-name">Chocolate caliente / Nesquik</span><span className="item-price">2.80€ / 1.80€</span></div>
                      <div className="menu-item"><span className="item-name">Zumo de naranja natural</span><span className="item-price">3.50€</span></div>
                  </div>
                  <div className="half">
                      <div className="menu-item"><span className="item-name">Agua (0.5L / 1.5L)</span><span className="item-price">1.50€ / 2.10€</span></div>
                      <div className="menu-item"><span className="item-name">Coca-Cola / Zero</span><span className="item-price">2.30€</span></div>
                      <div className="menu-item"><span className="item-name">Fanta / Sprite / Nestea</span><span className="item-price">2.30€</span></div>
                      <div className="menu-item"><span className="item-name">Cerveza pequeña / grande</span><span className="item-price">1.80€ / 2.80€</span></div>
                      <div className="menu-item"><span className="item-name">Dorada (varias)</span><span className="item-price">1.90€ – 2.20€</span></div>
                      <div className="menu-item"><span className="item-name">Vino (copa)</span><span className="item-price">3.50€</span></div>
                      <div className="menu-item"><span className="item-name">Aperol Spritz / Sangría</span><span className="item-price">5.00€</span></div>
                      <div className="menu-item"><span className="item-name">Mojito / Piña colada</span><span className="item-price">6.00€</span></div>
                      <div className="menu-item"><span className="item-name">Leche de avena/soja (+0.20€)</span><span className="item-price"></span></div>
                  </div>
                </div>
              </div>

              {/* TOASTS */}
              <div className="menu-section">
                <div className="section-title">🍞 TOASTS (Tostadas especiales)</div>
                <div className="menu-grid">
                  <div className="menu-item"><span className="item-name">Queso de cabra</span><span className="item-price">7.80€</span><div className="item-desc">Bacon, rúcula, tomate cherry, nueces, miel de palma</div></div>
                  <div className="menu-item"><span className="item-name">Jamón serrano</span><span className="item-price">7.80€</span><div className="item-desc">Tumaca, parmesano, rúcula, aceite oliva, orégano</div></div>
                  <div className="menu-item"><span className="item-name">Atún</span><span className="item-price">7.10€</span><div className="item-desc">Guacamole, pico de gallo, huevo duro, pimientos, orégano</div></div>
                  <div className="menu-item"><span className="item-name">Salmón</span><span className="item-price">8.50€</span><div className="item-desc">Guacamole, pepino, rúcula, queso feta</div></div>
                  <div className="menu-item"><span className="item-name">Feta</span><span className="item-price">7.10€</span><div className="item-desc">Rúcula, pico de gallo, pepino, pimientos, salsa yogur, orégano</div></div>
                </div>
              </div>

              <div className="flex justify-center mt-8 pb-8">
                <img 
                  src="https://lh3.googleusercontent.com/d/1OM-4izyYhkDSro2z7SmSe_QklpSArW97=w1600" 
                  alt="Menú suplementario" 
                  className="w-full max-w-4xl rounded-2xl shadow-xl border-4 border-[#e3d8cc] object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          )}

          {lang === 'english' && (
            <div id="english" className="tab-content active">
              {/* BREAKFAST & BRUNCH */}
              <div className="menu-section">
                <div className="section-title">🍳 BREAKFAST (BRUNCH) 9:30–12:30hs</div>
                <div className="badge-time">✨ Traditional & international flavours</div>
                <div className="menu-grid">
                  <div className="menu-item"><span className="item-name">Brunch International</span><span className="item-price">12.90€ (1p) / 23.90€ (2p)</span><div className="item-desc">Salmon, mozzarella, king prawn, semi-hard cheese, mini salad, mini crepe, bread, butter, jam, Nutella, orange juice, yogurt with fruit</div></div>
                  <div className="menu-item"><span className="item-name">Brunch Landres</span><span className="item-price">12.50€ (1p) / 23.50€ (2p)</span><div className="item-desc">Bacon, mozzarella, fried egg, serrano ham, mini salad, mini crepe, bread, butter, jam, Nutella, orange juice</div></div>
                  <div className="menu-item"><span className="item-name">Brunch Paris</span><span className="item-price">10.90€</span><div className="item-desc">Yogurt with fruit, savoury mini crepe, sweet mini crepe, orange juice</div></div>
                  <div className="menu-item"><span className="item-name">English Breakfast</span><span className="item-price">9.10€</span><div className="item-desc">Bacon, baked beans, tomato, mushrooms, fried egg, sausage, bread, butter, orange juice</div></div>
                  <div className="menu-item"><span className="item-name">Brunch Barcelona</span><span className="item-price">5.20€</span><div className="item-desc">Toast, serrano ham, turraca, orange juice</div></div>
                  <div className="menu-item"><span className="item-name">Classic Breakfast</span><span className="item-price">4.00€</span><div className="item-desc">Toast, butter, jam, orange juice or coffee</div></div>
                  <div className="menu-item"><span className="item-name">Yogurt with fruit & muesli</span><span className="item-price">4.80€</span></div>
                </div>
              </div>

              {/* SALADS */}
              <div className="menu-section">
                <div className="section-title">🥗 SALADS</div>
                <div className="menu-grid">
                  <div className="menu-item"><span className="item-name">Greek Salad</span><span className="item-price">10.80€</span><div className="item-desc">Lettuce, tomato, feta, cucumber, onion, peppers, olives</div></div>
                  <div className="menu-item"><span className="item-name">Quinoa Salad</span><span className="item-price">10.90€</span><div className="item-desc">Lettuce, rocket, pico de gallo, peppers, cucumber, olives</div></div>
                  <div className="menu-item"><span className="item-name">La Casa del Crepe</span><span className="item-price">11.50€</span><div className="item-desc">Lettuce, tomato, mushrooms, tuna, avocado, mojo egg</div></div>
                  <div className="menu-item"><span className="item-name">Hibiscus</span><span className="item-price">11.90€</span><div className="item-desc">Lettuce, rocket, serrano ham, goat cheese, strawberries, walnuts</div></div>
                  <div className="menu-item"><span className="item-name">Chicken Run</span><span className="item-price">12.10€</span><div className="item-desc">Lettuce, warm chicken, pepper, goat cheese, onion</div></div>
                  <div className="menu-item"><span className="item-name">Caesar</span><span className="item-price">11.90€</span><div className="item-desc">Lettuce, rocket, tomato, warm chicken, peppers, goat cheese</div></div>
                  <div className="menu-item"><span className="item-name">Nemo</span><span className="item-price">11.90€</span><div className="item-desc">Lettuce, salmon, goat cheese, capers, cucumber, red sauce</div></div>
                  <div className="menu-item"><span className="item-name">Ethano</span><span className="item-price">11.90€</span><div className="item-desc">Lettuce, tuna, onion, prawns, peppers, cucumber, red sauce</div></div>
                </div>
              </div>

              {/* SAVORY CREPES */}
              <div className="menu-section">
                <div className="section-title">🧀 SAVORY CREPES</div>
                <div className="menu-grid">
                  <div className="menu-item"><span className="item-name">Fiona</span><span className="item-price">9.90€</span><div className="item-desc">Cheese, pesto, cherry tomato, parmesan, rocket, cucumber, olive oil</div></div>
                  <div className="menu-item"><span className="item-name">Lara Croft</span><span className="item-price">9.90€</span><div className="item-desc">White cheese, potatoes, mushrooms, almagrote</div></div>
                  <div className="menu-item"><span className="item-name">Olivia</span><span className="item-price">10.10€</span><div className="item-desc">Cheese, spinach, blue cheese, potatoes, mushrooms, onion, toast</div></div>
                  <div className="menu-item"><span className="item-name">Cheeseland</span><span className="item-price">9.80€</span><div className="item-desc">Cheese, almagro, blue cheese, goat cheese, white cheese, oregano</div></div>
                  <div className="menu-item"><span className="item-name">Alekay</span><span className="item-price">7.10€</span><div className="item-desc">Cheese, sausage, ketchup, crispy onion</div></div>
                </div>
                <div className="section-sub">🇪🇸 Serrano ham crepes</div>
                <div className="menu-grid">
                  <div className="menu-item"><span className="item-name">Gaudi</span><span className="item-price">10.90€</span><div className="item-desc">Semi-hard cheese, serrano ham, avocado, fresh tomato, rocket, oregano</div></div>
                  <div className="menu-item"><span className="item-name">Darek</span><span className="item-price">10.90€</span><div className="item-desc">Cheese, serrano ham, mozzarella, mushrooms, oil, rocket</div></div>
                  <div className="menu-item"><span className="item-name">Picasso</span><span className="item-price">9.90€</span><div className="item-desc">Cheese, serrano ham, mushrooms, béchamel</div></div>
                  <div className="menu-item"><span className="item-name">Roma</span><span className="item-price">10.90€</span><div className="item-desc">Cheese, serrano ham, cherry tomato</div></div>
                </div>
                <div className="section-sub">🍖 Ham & oregano</div>
                <div className="menu-grid">
                  <div className="menu-item"><span className="item-name">El Principito</span><span className="item-price">7.10€</span><div className="item-desc">Cheese, ham, béchamel</div></div>
                  <div className="menu-item"><span className="item-name">Mafalda</span><span className="item-price">7.80€</span><div className="item-desc">Cheese, ham, tomato, oregano</div></div>
                  <div className="menu-item"><span className="item-name">Bob Esponja</span><span className="item-price">8.10€</span><div className="item-desc">Cheese, ham, mushrooms, béchamel</div></div>
                  <div className="menu-item"><span className="item-name">Popeye</span><span className="item-price">8.10€</span><div className="item-desc">Cheese, ham, spinach, béchamel</div></div>
                </div>
                <div className="section-sub">🥩 Meat crepes</div>
                <div className="menu-grid">
                  <div className="menu-item"><span className="item-name">Naruto</span><span className="item-price">10.50€</span><div className="item-desc">Cheese, minced meat, pico de gallo, jalapeños, fried egg, avocado sauce</div></div>
                  <div className="menu-item"><span className="item-name">Daphne</span><span className="item-price">10.90€</span><div className="item-desc">Cheese, bacon, jalapeños, minced meat, crispy onion, cheddar sauce</div></div>
                  <div className="menu-item"><span className="item-name">Robin Hood</span><span className="item-price">9.10€</span><div className="item-desc">Cheese, shredded beef, avocado</div></div>
                  <div className="menu-item"><span className="item-name">Obelix</span><span className="item-price">10.50€</span><div className="item-desc">Cheese, fried egg, onion, minced meat, sausage, tomato sauce, béchamel</div></div>
                  <div className="menu-item"><span className="item-name">Lily</span><span className="item-price">10.90€</span><div className="item-desc">Cheese, minced meat, onion, bacon, goat cheese</div></div>
                </div>
                <div className="section-sub">🥓 Bacon crepes</div>
                <div className="menu-grid">
                  <div className="menu-item"><span className="item-name">Sheldon Cooper</span><span className="item-price">10.90€</span><div className="item-desc">Semi-hard cheese, bacon, avocado, fresh tomato, rocket</div></div>
                  <div className="menu-item"><span className="item-name">Flash</span><span className="item-price">10.70€</span><div className="item-desc">Cheese, bacon, mushrooms, onion, fried egg, rocket, maple syrup</div></div>
                  <div className="menu-item"><span className="item-name">Ainhoa</span><span className="item-price">10.90€</span><div className="item-desc">Cheese, bacon, goat cheese, cherry tomatoes, apple, rocket, walnuts, maple syrup</div></div>
                </div>
              </div>

              {/* SWEET CREPES / PANCAKES */}
              <div className="menu-section">
                <div className="section-title">🍫 SWEET CREPES & PANCAKES</div>
                <div className="two-col">
                  <div className="half">
                      <div className="menu-item"><span className="item-name">Chocolate</span><span className="item-price">4.00€</span></div>
                      <div className="menu-item"><span className="item-name">Chocolate + nuts/coconut</span><span className="item-price">5.00€</span></div>
                      <div className="menu-item"><span className="item-name">Chocolate + whipped cream</span><span className="item-price">5.00€</span></div>
                      <div className="menu-item"><span className="item-name">Chocolate + ice cream</span><span className="item-price">4.80€</span></div>
                      <div className="menu-item"><span className="item-name">Pistachio cream</span><span className="item-price">6.10€</span></div>
                      <div className="menu-item"><span className="item-name">Nutella</span><span className="item-price">4.90€</span></div>
                      <div className="menu-item"><span className="item-name">Nutella + nuts/coconut</span><span className="item-price">5.90€</span></div>
                      <div className="menu-item"><span className="item-name">Nutella + banana</span><span className="item-price">6.00€</span></div>
                  </div>
                  <div className="half">
                      <div className="menu-item"><span className="item-name">Caramel sauce</span><span className="item-price">4.60€</span></div>
                      <div className="menu-item"><span className="item-name">Caramel + banana/nuts</span><span className="item-price">5.90€</span></div>
                      <div className="menu-item"><span className="item-name">Jam</span><span className="item-price">3.90€</span></div>
                      <div className="menu-item"><span className="item-name">Jam + nuts/coconut</span><span className="item-price">4.90€</span></div>
                      <div className="menu-item"><span className="item-name">Maple syrup</span><span className="item-price">4.80€</span></div>
                      <div className="menu-item"><span className="item-name">Icing sugar / Sugar</span><span className="item-price">3.40€</span></div>
                      <div className="menu-item"><span className="item-name">Sugar + lemon</span><span className="item-price">4.50€</span></div>
                      <div className="menu-item"><span className="item-name">Sugar + cinnamon</span><span className="item-price">4.50€</span></div>
                      <div className="menu-item"><span className="item-name">Honey / Palm honey</span><span className="item-price">4.30€ / 4.80€</span></div>
                  </div>
                </div>
                <div className="section-sub">🌟 SPECIAL SWEET CREPES</div>
                <div className="menu-grid">
                  <div className="menu-item"><span className="item-name">Kinder</span><span className="item-price">6.90€</span><div className="item-desc">Kinder Bueno, vanilla ice cream, chocolate, icing sugar</div></div>
                  <div className="menu-item"><span className="item-name">Balu</span><span className="item-price">7.90€</span><div className="item-desc">Nutella, banana, vanilla ice cream, whipped cream</div></div>
                  <div className="menu-item"><span className="item-name">Oreo</span><span className="item-price">6.90€</span><div className="item-desc">Oreo, vanilla ice cream, chocolate, icing sugar</div></div>
                  <div className="menu-item"><span className="item-name">Cheesecreepe</span><span className="item-price">6.90€</span><div className="item-desc">Mascarpone, strawberry jam, vanilla ice cream</div></div>
                  <div className="menu-item"><span className="item-name">Heidi</span><span className="item-price">6.90€</span><div className="item-desc">Chips, honey, ice cream, chocolate, condensed milk</div></div>
                  <div className="menu-item"><span className="item-name">Maya</span><span className="item-price">6.90€</span><div className="item-desc">Apple, honey, vanilla ice cream, cinnamon</div></div>
                  <div className="menu-item"><span className="item-name">Teletubbies</span><span className="item-price">7.80€</span><div className="item-desc">Caramel sauce, banana, strawberries, whipped cream, chocolate</div></div>
                  <div className="menu-item"><span className="item-name">Bambi</span><span className="item-price">6.90€</span><div className="item-desc">Mascarpone, Nutella, coconut</div></div>
                  <div className="menu-item"><span className="item-name">Sofía</span><span className="item-price">7.90€</span><div className="item-desc">Coconut ice cream, crispy almonds, whipped cream, chocolate, white chocolate</div></div>
                  <div className="menu-item"><span className="item-name">Kit-Kat</span><span className="item-price">6.90€</span><div className="item-desc">Kit-Kat, chocolate ice cream, caramel sauce, icing sugar</div></div>
                  <div className="menu-item"><span className="item-name">Filipinos</span><span className="item-price">6.90€</span><div className="item-desc">Filipinos, chocolate ice cream, white chocolate, icing sugar</div></div>
                  <div className="menu-item"><span className="item-name">Gabriel</span><span className="item-price">7.90€</span><div className="item-desc">Chocolate ice cream, white chocolate, strawberries, crispy almonds</div></div>
                </div>
              </div>

              {/* DRINKS & BEVERAGES (English) */}
              <div className="menu-section">
                <div className="section-title">☕ DRINKS</div>
                <div className="two-col">
                  <div className="half">
                      <div className="menu-item"><span className="item-name">Espresso</span><span className="item-price">1.10€</span></div>
                      <div className="menu-item"><span className="item-name">Americano</span><span className="item-price">1.50€</span></div>
                      <div className="menu-item"><span className="item-name">Cortado (with/without milk)</span><span className="item-price">1.20€ - 1.30€</span></div>
                      <div className="menu-item"><span className="item-name">Coffee with milk</span><span className="item-price">1.70€</span></div>
                      <div className="menu-item"><span className="item-name">Cappuccino</span><span className="item-price">1.80€</span></div>
                      <div className="menu-item"><span className="item-name">Latte macchiato</span><span className="item-price">2.80€</span></div>
                      <div className="menu-item"><span className="item-name">Barraquito with liqueur</span><span className="item-price">2.80€</span></div>
                      <div className="menu-item"><span className="item-name">Hot chocolate / Nesquik</span><span className="item-price">2.80€ / 1.80€</span></div>
                      <div className="menu-item"><span className="item-name">Fresh orange juice</span><span className="item-price">3.50€</span></div>
                  </div>
                  <div className="half">
                      <div className="menu-item"><span className="item-name">Still water (0.5L / 1.5L)</span><span className="item-price">1.50€ / 2.10€</span></div>
                      <div className="menu-item"><span className="item-name">Sparkling water (0.5L)</span><span className="item-price">2.00€</span></div>
                      <div className="menu-item"><span className="item-name">Coca Cola / Zero / Fanta / Sprite</span><span className="item-price">2.30€</span></div>
                      <div className="menu-item"><span className="item-name">Small beer / Large beer</span><span className="item-price">1.80€ / 2.80€</span></div>
                      <div className="menu-item"><span className="item-name">Dorada (Pilsen, Toasted, Black)</span><span className="item-price">1.90€ – 2.20€</span></div>
                      <div className="menu-item"><span className="item-name">Glass of wine (red/white/rose)</span><span className="item-price">3.50€</span></div>
                      <div className="menu-item"><span className="item-name">Aperol Spritz / Sangría</span><span className="item-price">5.00€</span></div>
                      <div className="menu-item"><span className="item-name">Mojito / Piña colada</span><span className="item-price">6.00€</span></div>
                      <div className="menu-item"><span className="item-name">Oat / Soya milk (+0.20€)</span><span className="item-price"></span></div>
                  </div>
                </div>
              </div>

              {/* TOASTS */}
              <div className="menu-section">
                <div className="section-title">🍞 TOASTS</div>
                <div className="menu-grid">
                  <div className="menu-item"><span className="item-name">Goat cheese</span><span className="item-price">7.80€</span><div className="item-desc">Bacon, rocket, cherry tomatoes, nuts, palm honey</div></div>
                  <div className="menu-item"><span className="item-name">Serrano ham</span><span className="item-price">7.80€</span><div className="item-desc">Tumaca, parmesan, rocket, olive oil, oregano</div></div>
                  <div className="menu-item"><span className="item-name">Tuna</span><span className="item-price">7.10€</span><div className="item-desc">Guacamole, pico de gallo, boiled egg, peppers, oregano</div></div>
                  <div className="menu-item"><span className="item-name">Salmon</span><span className="item-price">8.50€</span><div className="item-desc">Guacamole, cucumber, rocket, feta cheese</div></div>
                  <div className="menu-item"><span className="item-name">Feta</span><span className="item-price">7.10€</span><div className="item-desc">Rocket, pico de gallo, cucumber, peppers, yogurt sauce, oregano</div></div>
                </div>
              </div>

              <div className="flex justify-center mt-8 pb-8">
                <img 
                  src="https://lh3.googleusercontent.com/d/1pBlqO8i-afFQq-QS-jD_czM9Lta5ADMF=w1600" 
                  alt="Supplementary Menu" 
                  className="w-full max-w-4xl rounded-2xl shadow-xl border-4 border-[#e3d8cc] object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          )}

          <footer>
            🧡 La Casa del Crepe – El Médano | Crepes artesanos desde 2012<br />
            📍 Avda. Juan Carlos I, Local 5 – Horario: 9:30 – 21:30
          </footer>
        </div>
      </div>
    </motion.div>
  );
}

