const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const targetDir = path.resolve(__dirname, '../public/images');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const imagesToProcess = [
  // 1. Homepage Hero Banner
  {
    target: 'car-buying-guide-india-hero.webp',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Mumbai-Pune_Expressway_1.JPG',
    crop: '1200x675^',
    quality: 75,
    description: 'Mumbai-Pune Expressway with modern vehicles'
  },
  // 2. First Car Buying Guide
  {
    target: 'first-car-buying-guide.webp',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/40/HK_Wan_Chai_56_Gloucester_Road_BEA_Harbour_View_Centre_shop_Jaguar_showroom_interior_white_car_Nov-2012.JPG',
    crop: '1000x562^',
    quality: 72,
    description: 'Modern automotive showroom with new white vehicle'
  },
  // 3. Monsoon Car Care Tips
  {
    target: 'monsoon-car-care-tips.webp',
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Wipers_clear_rain_from_a_blue_car_as_droplets_cling_to_the_windshield_in_a_green_environment.jpg',
    crop: '900x506^',
    quality: 68,
    description: 'Car wipers clearing monsoon rain on wet road'
  },
  // 4. Car Insurance Guide India
  {
    target: 'car-insurance-guide-india.webp',
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Legal_Contract_%26_Signature_-_Warm_Tones.jpg',
    crop: '1000x562^',
    quality: 72,
    description: 'Insurance policy document, legal contract and signature'
  },
  // 5. Manual vs Automatic Cars
  {
    target: 'manual-vs-automatic-cars-india.webp',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Car_interior_view_showing_gear_shift_and_remote_on_console_in_modern_vehicle.jpg',
    crop: '1000x562^',
    quality: 70,
    description: 'Modern car automatic transmission gear selector and center console'
  },
  // 6. Car Mileage Tips India
  {
    target: 'car-mileage-tips-india.webp',
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Car_dashboard_on_highway_%28Unsplash%29.jpg',
    crop: '1000x562^',
    quality: 70,
    description: 'Digital car dashboard cruising on open expressway'
  },
  // 7. Car Inspection & PDI
  {
    target: 'car-inspection-pdi.webp',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Mechanic_works_on_car_engine_performing_routine_maintenance_and_inspections_on_vehicle_parts.jpg',
    crop: '1000x562^',
    quality: 70,
    description: 'Technician conducting vehicle engine and component inspection'
  },
  // 8. Cars Catalog - Real Cars
  {
    target: 'hyundai-venue-new.webp',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/95/2025_Hyundai_Venue_Turbo_%28front%29%2C_Pakuwon_Mall%2C_West_Surabaya.jpg',
    crop: '800x500^',
    quality: 70,
    description: 'Hyundai Venue Turbo'
  },
  {
    target: 'kia-seltos-new-gen.webp',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/57/White_KIA_Seltos_%28Front%29.jpg',
    crop: '800x500^',
    quality: 70,
    description: 'Kia Seltos SUV'
  },
  {
    target: 'skoda-kushaq-facelift.webp',
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/29/2021_%C5%A0koda_Kushaq_%28India%29_front_view.png',
    crop: '800x500^',
    quality: 72,
    description: 'Skoda Kushaq India'
  },
  {
    target: 'renault-duster-new-gen.webp',
    url: 'https://upload.wikimedia.org/wikipedia/commons/4/48/2026_Renault_Duster_1.3_Turbo_%28India%29.png',
    crop: '800x500^',
    quality: 72,
    description: 'Renault Duster Turbo'
  },
  {
    target: 'nissan-gravite.webp',
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/90/2020_Nissan_Magnite_front_view_%28India%29_01.png',
    crop: '800x500^',
    quality: 72,
    description: 'Nissan Magnite SUV'
  },
  {
    target: 'mahindra-xuv-7xo.webp',
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/2021_Mahindra_XUV700_2.2_AX7_%28India%29_front_view.png',
    crop: '800x500^',
    quality: 75,
    description: 'Mahindra XUV700 AX7'
  },
  {
    target: 'maruti-suzuki-victoris.webp',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Suzuki_Grand_Vitara_%E2%80%93_Front.png',
    crop: '800x500^',
    quality: 72,
    description: 'Suzuki Grand Vitara'
  },
  {
    target: 'maruti-suzuki-e-vitara.webp',
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Suzuki_e_Vitara_Z_4WD.jpg',
    crop: '800x500^',
    quality: 70,
    description: 'Suzuki e Vitara Z 4WD EV'
  },
  {
    target: 'mahindra-xev-9s.webp',
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/2023_Mahindra_XUV_400_EL_EV_%2C_Ashiana_Brahmananda%2C_Jamshedpur%2C_Jharkhand%2C_India_%28_Ank_Kumar%2C_Infosys_Limited_%29_01.jpg',
    crop: '800x500^',
    quality: 70,
    description: 'Mahindra XUV 400 EV'
  },
  {
    target: 'tata-sierra.webp',
    url: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Tata_Curvv.EV.jpg',
    crop: '800x500^',
    quality: 70,
    description: 'Tata Curvv / Sierra EV'
  }
];

async function processAll() {
  console.log('Downloading and optimizing real car photos...\n');
  for (const item of imagesToProcess) {
    const rawPath = `/tmp/raw_${item.target}`;
    const outPath = path.join(targetDir, item.target);
    try {
      console.log(`Fetching ${item.description}...`);
      const res = await fetch(item.url, {
        headers: {
          'User-Agent': 'DriveSmartIndia/1.0 (info@drivesmart.org; educational car guide)'
        }
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(rawPath, buf);

      // Convert using ImageMagick
      // Gravity center with crop
      let quality = item.quality;
      execSync(`convert "${rawPath}" -gravity center -resize "${item.crop}" -extent "${item.crop.replace('^', '')}" -quality ${quality} -define webp:method=6 webp:"${outPath}"`);

      // Check size, if > 98KB, recompress with lower quality
      let stat = fs.statSync(outPath);
      while (stat.size > 98 * 1024 && quality > 40) {
        quality -= 5;
        execSync(`convert "${rawPath}" -gravity center -resize "${item.crop}" -extent "${item.crop.replace('^', '')}" -quality ${quality} -define webp:method=6 webp:"${outPath}"`);
        stat = fs.statSync(outPath);
      }

      console.log(`-> Saved ${item.target}: ${(stat.size / 1024).toFixed(1)} KB (Quality: ${quality})`);
    } catch (err) {
      console.error(`Failed ${item.target}:`, err.message);
    }
  }

  // Ensure dist has updated images too if dist exists
  const distDir = path.resolve(__dirname, '../dist/images');
  if (fs.existsSync(distDir)) {
    execSync(`cp -r "${targetDir}"/* "${distDir}"/ 2>/dev/null || true`);
    console.log('Synced to dist/images');
  }

  console.log('\nAll real images processed successfully!');
}

processAll();
