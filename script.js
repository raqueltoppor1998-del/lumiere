const produtos = [
  {
    id: 1,
    nome: "Pasta de Pistache",
    desc: "Cremosa, artesanal, sem adição de açúcar refinado.",
    preco: 42.90,
    unidade: "pote de 200g",
    img: "Pasta de pistache.jpg"
  },
  {
    id: 2,
    nome: "Trufas de Maracujá",
    desc: "Acidez tropical com cobertura de chocolate 70% cacau.",
    preco: 38.90,
    unidade: "caixa com 9 unidades",
    img: "Trufa de Maracujá.jpg"
  },
  {
    id: 3,
    nome: "Trufas de Limão Siciliano",
    desc: "Frescor cítrico com ganache suave e cobertura branca.",
    preco: 38.90,
    unidade: "caixa com 9 unidades",
    img: "Trufa de Limão.jpg"
  },
  {
    id: 4,
    nome: "Trufas de Café",
    desc: "Para os amantes de café — intenso, amargo e irresistível.",
    preco: 38.90,
    unidade: "caixa com 9 unidades",
    img: "Trufa de café.jpg"
  },
  {
    id: 5,
    nome: "Biscoitos Recheados",
    desc: "Crocantes por fora, macios por dentro. Recheio de baunilha.",
    preco: 29.90,
    unidade: "pacote com 12 unidades",
    img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80"
  },
  {
    id: 6,
    nome: "Pasta de Avelã",
    desc: "A versão saudável do seu creme favorito. Sem óleo de palma.",
    preco: 44.90,
    unidade: "pote de 200g",
    img: "Pasta de avelã.jpg"
  }
];

let carrinho = [];
let quantidades = {};

produtos.forEach(p => quantidades[p.id] = 1);

function renderProdutos() {
  const grid = document.getElementById('produtos-grid');
  grid.innerHTML = produtos.map(p => `
    <div class="produto-card">
      <img src="${p.img}" alt="${p.nome}" />
      <div class="produto-info">
        <h3>${p.nome}</h3>
        <p>${p.desc}</p>
        <div class="produto-footer">
          <span class="produto-preco">R$ ${p.preco.toFixed(2).replace('.', ',')}</span>
          <span class="produto-unidade">${p.unidade}</span>
          <div class="qty-controls">
            <button class="qty-btn" onclick="alterarQty(${p.id}, -1)">−</button>
            <span class="qty-num" id="qty-${p.id}">1</span>
            <button class="qty-btn" onclick="alterarQty(${p.id}, 1)">+</button>
          </div>
          <button class="add-btn" onclick="addCarrinho(${p.id})">Adicionar ao carrinho</button>
        </div>
      </div>
    </div>
  `).join('');
}

function alterarQty(id, delta) {
  quantidades[id] = Math.max(1, (quantidades[id] || 1) + delta);
  document.getElementById(`qty-${id}`).textContent = quantidades[id];
}

function addCarrinho(id) {
  const produto = produtos.find(p => p.id === id);
  const qty = quantidades[id] || 1;
  const existente = carrinho.find(p => p.id === id);
  if (existente) {
    existente.qtd += qty;
  } else {
    carrinho.push({ ...produto, qtd: qty });
  }
  updateCarrinho();
  abrirCart();
}

function updateCarrinho() {
  const total = carrinho.reduce((acc, p) => acc + p.preco * p.qtd, 0);
  const count = carrinho.reduce((acc, p) => acc + p.qtd, 0);
  document.getElementById('cart-count').textContent = count;
  document.getElementById('cart-total').textContent = total.toFixed(2).replace('.', ',');
  const lista = document.getElementById('cart-list');
  lista.innerHTML = carrinho.map(p => `
    <li class="cart-item">
      <span class="cart-item-name">${p.nome} x${p.qtd}</span>
      <span class="cart-item-price">R$ ${(p.preco * p.qtd).toFixed(2).replace('.', ',')}</span>
      <button class="cart-item-remove" onclick="removerItem(${p.id})">✕</button>
    </li>
  `).join('');
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

function removerItem(id) {
  carrinho = carrinho.filter(p => p.id !== id);
  updateCarrinho();
}

function toggleCart() {
  document.getElementById('cart-drawer').classList.toggle('open');
  document.getElementById('cart-overlay').classList.toggle('open');
}

function abrirCart() {
  document.getElementById('cart-drawer').classList.add('open');
  document.getElementById('cart-overlay').classList.add('open');
}

renderProdutos();
