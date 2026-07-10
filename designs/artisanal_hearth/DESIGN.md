---
name: Artisanal Hearth
colors:
  surface: '#fff8f4'
  surface-dim: '#e9d7c8'
  surface-bright: '#fff8f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff1e7'
  surface-container: '#fdebdb'
  surface-container-high: '#f7e5d6'
  surface-container-highest: '#f1dfd0'
  on-surface: '#231a11'
  on-surface-variant: '#4e453d'
  inverse-surface: '#392f24'
  inverse-on-surface: '#ffeee0'
  outline: '#80756c'
  outline-variant: '#d2c4ba'
  surface-tint: '#725a42'
  primary: '#33210d'
  on-primary: '#ffffff'
  primary-container: '#4b3621'
  on-primary-container: '#bd9f83'
  inverse-primary: '#e1c1a4'
  secondary: '#60603e'
  on-secondary: '#ffffff'
  secondary-container: '#e6e5b9'
  on-secondary-container: '#666643'
  tertiary: '#371c25'
  on-tertiary: '#ffffff'
  tertiary-container: '#50313a'
  on-tertiary-container: '#c299a3'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#fedcbe'
  primary-fixed-dim: '#e1c1a4'
  on-primary-fixed: '#291806'
  on-primary-fixed-variant: '#59422c'
  secondary-fixed: '#e6e5b9'
  secondary-fixed-dim: '#cac99f'
  on-secondary-fixed: '#1d1d03'
  on-secondary-fixed-variant: '#484828'
  tertiary-fixed: '#ffd9e2'
  tertiary-fixed-dim: '#e7bbc6'
  on-tertiary-fixed: '#2d141c'
  on-tertiary-fixed-variant: '#5e3e47'
  background: '#fff8f4'
  on-background: '#231a11'
  surface-variant: '#f1dfd0'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

The brand personality is artisanal, sophisticated, and deeply welcoming. It targets a premium demographic that values the tactile beauty of slow-living and the sensory delight of high-end pastry. The design narrative centers on "Warm Minimalism"—a style that strips away digital noise to focus on the organic textures and golden hues of the products.

The visual language balances the precision of luxury fashion with the comfort of a home kitchen. By utilizing a heavy amount of whitespace (or "cream-space"), the UI allows high-resolution photography of baked goods to act as the primary visual driver. The emotional response is one of calm indulgence and trust in quality.

## Colors

The palette is rooted in the natural ingredients of the bakery. 
- **Warm Chocolate (#4B3621):** Used for primary typography and structural elements to ensure high contrast and a sense of grounding.
- **Soft Cream (#FFFDD0):** The foundational canvas. It replaces pure white to reduce eye strain and evoke the color of unbleached flour and rich butter.
- **Pastel Pink (#FFD1DC):** An accent for interactive soft-elements, highlights, and delicate decorative flourishes.
- **Honey Gold (#FFC000):** Reserved for primary calls-to-action and "premium" markers, reflecting the golden crust of a perfect croissant.

## Typography

Typography in this design system uses high-contrast pairings to signify quality. **Playfair Display** provides an editorial, high-end feel for headlines, utilizing its elegant serifs to suggest tradition. **Montserrat** is used for body copy and UI labels; its geometric clarity ensures legibility across digital interfaces while maintaining a modern edge.

Large display type should be treated as a design element itself, often overlapping with images or sitting in expansive margins. Labels use increased letter-spacing and uppercase styling to provide a clean, organized hierarchy in navigation and meta-data.

## Layout & Spacing

The layout follows a fluid 12-column grid on desktop with generous outer margins to maintain the "premium" boutique feel. Spacing is governed by an 8px base unit, but the design system prioritizes "breathability" over density.

- **Desktop:** 12 columns, 64px margins, 24px gutters.
- **Tablet:** 8 columns, 32px margins, 16px gutters.
- **Mobile:** 4 columns, 20px margins, 16px gutters.

Elements like product cards and editorial text blocks should often use "asymmetric" placement—shifting slightly off-center—to mimic the curated look of a high-fashion magazine.

## Elevation & Depth

Depth is conveyed through **Ambient Shadows** and **Tonal Layering**. We avoid harsh black shadows in favor of shadows tinted with the primary chocolate brown color at very low opacities (e.g., 4-8%).

- **Level 1 (Cards):** Very soft, diffused shadow (0px 4px 20px) with a subtle 1px border in a slightly darker cream to define the edge.
- **Level 2 (Dropdowns/Modals):** Larger blur radius (0px 12px 40px) to simulate significant lift from the base cream surface.
- **Interactions:** Hovering over a card or button should slightly increase the shadow spread and lift the element by 2-4px, creating a tactile "squishy" response.

## Shapes

The shape language is "Rounded" to reflect the soft, organic nature of dough and pastries. Sharp corners are avoided entirely to maintain a friendly and approachable aesthetic.

- **Standard Elements:** (Inputs, Buttons) use `0.5rem` (8px).
- **Large Elements:** (Product Cards, Image Containers) use `rounded-lg` (16px).
- **Special Elements:** (CTAs, Chips) may use `rounded-xl` (24px) for a softer, pill-like feel.
- **Decorative:** Subtle use of circular "blobs" or organic SVG shapes in the Pastel Pink color can be used as background textures.

## Components

### Buttons
- **Primary ('Schedule a Meeting'):** Solid Honey Gold (#FFC000) background with Chocolate Brown text. High-contrast, bold, and rounded.
- **Secondary ('Contact Us'):** Outlined Chocolate Brown border (1.5px) with transparent or Soft Cream background.
- **Hover States:** A subtle scale-up (1.02x) and a darkening of the background color or border.

### Artistic Product Cards
Cards feature a high-aspect-ratio image at the top with a generous bottom padding for the title (Playfair) and price (Montserrat). The background is always the Soft Cream, sitting on a slightly darker background to create a "card-on-table" effect.

### Elegant Contact Forms
Inputs use a "minimalist floating label" style. Only a bottom border in Chocolate Brown is visible initially; upon focus, a soft Pastel Pink glow appears around the field.

### Lists & Menus
Menu items for baked goods should include a small "dot" or "dash" in Honey Gold to separate the item name from the price, keeping the look clean and structured.

### Chips/Tags
Used for dietary labels (e.g., "Gluten-Free," "Vegan"). These use the Pastel Pink background with a darker pink text, using pill-shaped rounding for a soft, friendly look.