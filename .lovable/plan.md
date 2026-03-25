

## Site do Psicólogo Daniel Camaforte

### Identidade Visual
- **Background**: #ffffff
- **Primária (Ocre/Ouro)**: #e3cb85 — botões, destaques, bordas
- **Secundária (Azul)**: #606f95 — textos, menus, navbar
- **Fontes**: Playfair Display (títulos) + Inter (corpo) via Google Fonts
- Atualizar CSS variables e Tailwind config com as novas cores

### Componentes a Criar

1. **Navbar** (`components/Navbar.tsx`)
   - Transparente no topo, fundo sólido branco ao fazer scroll (hook de scroll)
   - Nome "DANIEL CAMAFORTE" em caixa alta com Playfair Display
   - Links: Início, Sobre, Cursos, Contato
   - Botão CTA "Agendar Consulta" em ocre
   - Menu hambúrguer para mobile

2. **HeroSection** (`components/HeroSection.tsx`)
   - Layout dividido (grid 2 colunas, stack no mobile)
   - Esquerda: título elegante, subtítulo, botão "Agendar Consulta" (ocre)
   - Direita: imagem placeholder circular com borda ocre (referência a image_3.png)

3. **InstitutionalSection** (`components/InstitutionalSection.tsx`)
   - Seção espaçosa sobre o profissional
   - Tipografia focada em leitura, linhas finas decorativas
   - Ícones/elementos gráficos sutis

4. **CourseCard** + **CoursesSection** (`components/CourseCard.tsx`, `components/CoursesSection.tsx`)
   - Grid de 3 cards usando shadcn Card
   - Cada card: imagem placeholder, título do curso, preço
   - Hover sutil com sombra

5. **Footer** (`components/Footer.tsx`)
   - Minimalista, fundo azul secundário
   - Ícones de redes sociais (Instagram, LinkedIn, WhatsApp)
   - Links legais (Política de Privacidade, Termos)

### Página Index
- Composição: Navbar → Hero → Institucional → Cursos → Footer
- Scroll suave entre seções

