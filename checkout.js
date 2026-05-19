<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Checkout — Lumière</title>
  <link rel="stylesheet" href="style.css" />
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap" rel="stylesheet"/>
  <style>
    .checkout-wrapper {
      max-width: 900px;
      margin: 4rem auto;
      padding: 0 2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
    }
    .checkout-title {
      font-family: 'Cormorant Garamond', serif;
      font-size: 2rem;
      font-weight: 300;
      margin-bottom: 2rem;
      grid-column: 1 / -1;
    }
    .form-group {
      display: flex;
      flex-direction: column;
      margin-bottom: 1.2rem;
    }
    .form-group label {
      font-size: 0.75rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--text-light);
      margin-bottom: 0.4rem;
    }
    .form-group input {
      background: var(--white);
      border: 1px solid var(--border);
      padding: 0.75rem 1rem;
      font-family: 'Jost', sans-serif;
      font-size: 0.9rem;
      color: var(--text);
      outline: none;
      transition: border-color 0.2s;
    }
    .form-group input:focus {
      border-color: var(--accent);
    }
    .resumo {
      background: var(--white);
      border: 1px solid var(--border);
      padding: 2rem;
      height: fit-content;
    }
    .resumo h3 {
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.5rem;
      font-weight: 400;
      margin-bottom: 1.5rem;
    }
    .resumo-item {
      display: flex;
      justify-content: space-between;
      font-size: 0.85rem;
      padding: 0.6rem 0;
      border-bottom: 1px solid var(--border);
      color: var(--text-light);
    }
    .resumo-total {
      display: flex;
      justify-content: space-between;
      font-size: 1rem;
      padding: 1rem 0 0;
      font
      