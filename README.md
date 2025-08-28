# DJH Website

A Next.js website for Direct Journey Line Holdings, featuring truck parking infrastructure and company information.

## Brand Colors

The website uses the following brand color scheme:

### DJH Colors
- **Primary**: `#000000` (Black)
- **Light**: `#f5f5f5` (Light Gray)
- **Dark**: `#011b34` (Navy)

### Riggy's Colors
- **Green**: `#74d603` (Riggy's Green)
- **Navy**: `#011b34` (Riggy's Navy)

### Journeyline Properties Colors
- **Blue**: `#2563eb` (JP Blue)

### Truckbays Colors
- **Blue**: `#2563eb` (Same blue as JP)

## Logo Requirements

The following logos have been integrated into the website:

### DJH Logos
- **Navigation & Footer**: Uses `djh-white.png` (transparent background, white logo)
- **Hero Section**: Uses `djh-full-white.png` (full company name, white logo)
- **Company Pages**: Uses `djh-full-white.png` in headers
- **Company Cards**: Uses `djh-full-black.png` (full company name, black logo)

### Riggy's Logo
- **Current**: Uses `riggys-original.jpg` (original image with background)
- **Required**: Remove background and make logo white for better integration

### Logo Processing Needed
For the Riggy's logo (`riggys-truck-parking.jpg`):
1. Remove the background completely
2. Make the logo elements white
3. Save as PNG with transparent background
4. Use the new file in place of `riggys-original.jpg`

## Color Usage by Page

### Main Page
- **Hero Section**: DJH full white logo
- **Brand Logos**: Company cards with respective brand colors
- **Why Work With Us**: DJH black and Riggy's green accents

### Riggy's Page
- **Header**: Riggy's green (`#74d603`) background
- **Text**: Riggy's navy (`#011b34`) for headings
- **Accents**: Riggy's green for icons and highlights

### Journeyline Properties Page
- **Header**: JP blue (`#2563eb`) background
- **Accents**: JP blue for icons, buttons, and highlights

### Truckbays Page
- **Header**: Truckbays blue (`#2563eb`) background
- **Accents**: Truckbays blue for icons, buttons, and highlights

### Truck Parking Page
- **Header**: Riggy's green (`#74d603`) background
- **Text**: Riggy's navy (`#011b34`) for headings
- **Accents**: Riggy's green for icons and highlights

## Development

This is a Next.js 14 project with TypeScript and Tailwind CSS.

### Running Locally
```bash
npm install
npm run dev
```

The website will be available at `http://localhost:3000`