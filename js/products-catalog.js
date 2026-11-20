const PRODUCTS_DATA = [
      // =======================================================================
      // CATEGORY 1: NEW PCS & WORKSTATIONS (10 ITEMS)
      // =======================================================================
      {
        id: "pc-1",
        image: "assets/products/pc-1.jpg",
        name: "Krishna Core Workstation Elite (i9-14900K)",
        category: "pcs",
        badge: "new",
        badgeText: "BRAND NEW OEM",
        categoryTitle: "WORKSTATION • HEAVY COMPUTE",
        summary: "24 Cores / 32 Threads, 64GB DDR5, RTX 4080 Super 16GB, 2TB Gen4 NVMe, 360mm Liquid AIO.",
        unitPrice: 245000,
        priceFormatted: "₹2,45,000",
        specs: {
          "Processor (CPU)": "Intel Core i9-14900K (24 Cores / 32 Threads, up to 6.0 GHz Max Turbo)",
          "Motherboard": "Intel Z790 DDR5 Ultra-Durable Motherboard with PCIe 5.0",
          "Memory (RAM)": "64GB DDR5 5600MHz Kingston Fury Beast (Dual Channel Kit)",
          "Storage Drive": "2TB PCIe Gen4 NVMe M.2 SSD (7,400 MB/s Sequential Read Speed)",
          "Graphics Card (GPU)": "NVIDIA GeForce RTX 4080 Super 16GB GDDR6X (Dual HDMI, 3x DP)",
          "Thermal Cooling": "360mm AIO Liquid Cooling System with Triple ARGB PWM Fans",
          "Power Supply": "850W 80+ Gold Certified Fully Modular High-Efficiency PSU",
          "Operating System": "Genuine Windows 11 Pro 64-bit Pre-installed & Fully Activated",
          "Form Factor": "High-Airflow E-ATX Tempered Glass Mid-Tower Case",
          "Warranty & Support": "3-Year On-Site Manufacturer Warranty with Local Krishna Infotech AMC"
        },
        warranty: "✓ 3-Year On-Site Manufacturer Warranty"
      },
      {
        id: "pc-2",
        image: "assets/products/pc-2.jpg",
        name: "Krishna Commercial Pro Desktop (i7-14700)",
        category: "pcs",
        badge: "new",
        badgeText: "BRAND NEW OEM",
        categoryTitle: "COMMERCIAL DESKTOP • PRO OFFICE",
        summary: "20 Cores / 28 Threads, 32GB DDR5, 1TB Gen4 NVMe, SFF micro-tower, triple 4K display ready.",
        unitPrice: 74500,
        priceFormatted: "₹74,500",
        specs: {
          "Processor (CPU)": "Intel Core i7-14700 (20 Cores / 28 Threads, up to 5.4 GHz)",
          "Memory (RAM)": "32GB DDR5 5200MHz Crucial Business RAM",
          "Storage Drive": "1TB NVMe PCIe Gen4 High-Speed M.2 SSD with Heat Shield",
          "Graphics": "Intel UHD Graphics 770 (Supports Triple Independent 4K Displays)",
          "Form Factor": "Compact SFF Micro-Tower with Dual Front USB 3.2 Gen 2",
          "Network Connectivity": "Intel 2.5GbE LAN Port + Intel Wi-Fi 6E & Bluetooth 5.3",
          "Power Supply": "500W 80+ Bronze Quiet Power Supply",
          "Operating System": "Genuine Windows 11 Pro Pre-installed",
          "Warranty & Support": "3-Year Official Brand Hardware Warranty"
        },
        warranty: "✓ 3-Year Official Hardware Warranty"
      },
      {
        id: "pc-3",
        image: "assets/products/pc-3.jpg",
        name: "Krishna Executive Tower (Ryzen 7 7800X3D)",
        category: "pcs",
        badge: "new",
        badgeText: "BRAND NEW OEM",
        categoryTitle: "HIGH-COMPUTE • TRADING / 3D STUDIO",
        summary: "8C/16T, 104MB 3D V-Cache, 32GB DDR5 6000MHz, RTX 4070 Ti Super 16GB, 1TB WD Black.",
        unitPrice: 185000,
        priceFormatted: "₹1,85,000",
        specs: {
          "Processor (CPU)": "AMD Ryzen 7 7800X3D (8 Cores / 16 Threads, 104MB 3D V-Cache)",
          "Memory (RAM)": "32GB DDR5 6000MHz CL30 AMD EXPO Low Latency RAM",
          "Storage Drive": "1TB Western Digital Black SN850X PCIe Gen4 NVMe SSD",
          "Graphics Card (GPU)": "NVIDIA GeForce RTX 4070 Ti Super 16GB GDDR6X",
          "Chassis": "Dual Tempered Glass Showcase with 4x PWM Quiet Fluid Bearing Fans",
          "Power Supply": "750W 80+ Gold Certified with Japanese Capacitors",
          "Warranty & Support": "3-Year On-Site Brand Warranty"
        },
        warranty: "✓ 3-Year On-Site Brand Warranty"
      },
      {
        id: "pc-4",
        image: "assets/products/pc-4.jpg",
        name: "Krishna Business Essential (i5-13400)",
        category: "pcs",
        badge: "new",
        badgeText: "BRAND NEW OEM",
        categoryTitle: "BUSINESS ESSENTIAL • OFFICE DEPLOYMENT",
        summary: "10 Cores / 16 Threads, 16GB DDR4, 512GB NVMe, compact office tower for billing & administration.",
        unitPrice: 42000,
        priceFormatted: "₹42,000",
        specs: {
          "Processor (CPU)": "Intel Core i5-13400 (10 Cores / 16 Threads, up to 4.6 GHz)",
          "Memory (RAM)": "16GB DDR4 3200MHz Kingston ValueRAM",
          "Storage Drive": "512GB M.2 NVMe PCIe Solid State Drive",
          "Graphics": "Intel UHD Graphics 730 (HDMI + DisplayPort Dual Monitor)",
          "Form Factor": "Micro-ATX Corporate Matte Black Tower",
          "Ports": "Gigabit Ethernet, 6x USB 3.0, Front Audio Jack, High-Speed Wi-Fi",
          "Warranty & Support": "3-Year Standard Brand Warranty"
        },
        warranty: "✓ 3-Year Standard Brand Warranty"
      },
      {
        id: "pc-5",
        image: "assets/products/pc-5.jpg",
        name: "Krishna Retail POS Mini PC (i3-12100)",
        category: "pcs",
        badge: "new",
        badgeText: "BRAND NEW OEM",
        categoryTitle: "RETAIL POS • ULTRA-COMPACT 1-LITRE",
        summary: "1-Litre VESA mountable mini chassis, 8GB DDR4, 256GB SSD, RS-232 COM port for barcode/thermal printer.",
        unitPrice: 26500,
        priceFormatted: "₹26,500",
        specs: {
          "Processor (CPU)": "Intel Core i3-12100 (4 Cores / 8 Threads, 4.3 GHz)",
          "Memory (RAM)": "8GB DDR4 3200MHz SO-DIMM (Expandable to 32GB)",
          "Storage Drive": "256GB PCIe NVMe SSD (Instant Boot)",
          "Form Factor": "Ultra-Compact 1-Litre VESA Mountable Case (Fits behind monitor)",
          "Ports": "6x USB Ports, 1x RS-232 COM Port (Barcode / Thermal), HDMI",
          "Power Adapter": "Low-power 65W external adapter (Zero heat, continuous duty)",
          "Warranty & Support": "2-Year Hardware Replacement Warranty"
        },
        warranty: "✓ 2-Year Hardware Replacement Warranty"
      },
      {
        id: "pc-6",
        image: "assets/products/pc-6.jpg",
        name: "Krishna CAD Architecture Rig (Ryzen 9 7900X)",
        category: "pcs",
        badge: "new",
        badgeText: "BRAND NEW OEM",
        categoryTitle: "CAD & ENGINEERING • ISV CERTIFIED",
        summary: "12C/24T, 64GB DDR5 ECC, 2TB SSD + 4TB HDD, NVIDIA RTX A4000 16GB ISV certified.",
        unitPrice: 195000,
        priceFormatted: "₹1,95,000",
        specs: {
          "Processor (CPU)": "AMD Ryzen 9 7900X (12 Cores / 24 Threads, up to 5.6 GHz)",
          "Memory (RAM)": "64GB DDR5 5600MHz ECC Workstation Memory",
          "Storage": "2TB Gen4 NVMe SSD + 4TB Enterprise Storage HDD",
          "Graphics Card (GPU)": "NVIDIA RTX A4000 16GB GDDR6 (ISV Certified for Revit, AutoCAD, 3ds Max)",
          "Thermal Cooling": "Dual-Tower High CFM Air Cooler with Zero-Maintenance",
          "Power Supply": "850W Platinum Rated Workstation PSU",
          "Warranty & Support": "3-Year Comprehensive AMC Warranty"
        },
        warranty: "✓ 3-Year Comprehensive AMC Warranty"
      },
      {
        id: "pc-7",
        image: "assets/products/pc-7.jpg",
        name: "Krishna AI Deep Learning Developer Station",
        category: "pcs",
        badge: "new",
        badgeText: "BRAND NEW OEM",
        categoryTitle: "AI / DEEP LEARNING • DUAL GPU",
        summary: "Intel i9-14900KF, 128GB DDR5, Dual RTX 4090 24GB GPUs (48GB VRAM), Dual 2TB Gen4 RAID 0.",
        unitPrice: 620000,
        priceFormatted: "₹6,20,000",
        specs: {
          "Processor (CPU)": "Intel Core i9-14900KF (24 Cores / 32 Threads)",
          "Memory (RAM)": "128GB DDR5 5600MHz (4x32GB Quad Kit)",
          "Storage": "Dual 2TB Samsung 990 Pro NVMe SSDs (RAID 0, 14,000 MB/s)",
          "Graphics (Dual GPU)": "Dual NVIDIA GeForce RTX 4090 24GB (48GB Total VRAM for local LLMs)",
          "Power Supply": "1600W 80+ Titanium Enterprise Server PSU",
          "Chassis": "E-ATX High-Static-Pressure Server Grade Chassis",
          "Warranty & Support": "3-Year Enterprise SLA & Dedicated Engineer"
        },
        warranty: "✓ 3-Year Enterprise SLA & Support"
      },
      {
        id: "pc-8",
        image: "assets/products/pc-8.jpg",
        name: "Krishna Financial Quad-Display Station",
        category: "pcs",
        badge: "new",
        badgeText: "BRAND NEW OEM",
        categoryTitle: "FINANCIAL TRADING • 4-SCREEN SUPPORT",
        summary: "32GB DDR5, 1TB NVMe, Quad 4K DisplayPort multi-monitor trading station with dual LAN.",
        unitPrice: 88000,
        priceFormatted: "₹88,000",
        specs: {
          "Processor (CPU)": "Intel Core i7-13700 (16 Cores / 24 Threads)",
          "Memory (RAM)": "32GB DDR5 5200MHz Dual Channel",
          "Storage": "1TB NVMe Gen4 SSD (Fast tick-by-tick caching)",
          "Display Capability": "Quad 4K DisplayPort Output (Drives 4 Independent Screens simultaneously)",
          "Network": "Dual Intel Gigabit Ethernet for Redundant Internet Lines",
          "Acoustic": "Ultra-quiet acoustic damping for trading floors",
          "Warranty & Support": "3-Year Trading Desk Care Warranty"
        },
        warranty: "✓ 3-Year Trading Desk Care Warranty"
      },
      {
        id: "pc-9",
        image: "assets/products/pc-9.jpg",
        name: "Krishna Studio Silent Video Editor (i7-14700K)",
        category: "pcs",
        badge: "new",
        badgeText: "BRAND NEW OEM",
        categoryTitle: "STUDIO AUDIO/VIDEO • ZERO NOISE",
        summary: "64GB DDR5, 2TB NVMe + 8TB Archive, RTX 4070 12GB, BeQuiet! sound-damped chassis (<18 dB).",
        unitPrice: 155000,
        priceFormatted: "₹1,55,000",
        specs: {
          "Processor (CPU)": "Intel Core i7-14700K (20 Cores, up to 5.6 GHz)",
          "Memory (RAM)": "64GB DDR5 5600MHz Low-Latency RAM",
          "Storage": "2TB PCIe Gen4 NVMe OS Drive + 8TB Heavy Media Archive HDD",
          "Graphics Card (GPU)": "NVIDIA GeForce RTX 4070 12GB (Dual NVENC AV1 Hardware Encoders)",
          "Acoustic Insulation": "Sound-insulated BeQuiet! Silent Base 802 Chassis (<18 dB operation)",
          "I/O Ports": "Thunderbolt 4 Ready + High-Fidelity Shielded Audio",
          "Warranty & Support": "3-Year Sound-Damped Care Warranty"
        },
        warranty: "✓ 3-Year Sound-Damped Care Warranty"
      },
      {
        id: "pc-10",
        image: "assets/products/pc-10.jpg",
        name: "Krishna Industrial MIDC Tough-Duty PC",
        category: "pcs",
        badge: "new",
        badgeText: "BRAND NEW OEM",
        categoryTitle: "FACTORY & MIDC • FANLESS INDUSTRIAL",
        summary: "100% Fanless IP50 dust-resistant extruded aluminum chassis, 9–36V DC wide input, 4x Serial COM ports.",
        unitPrice: 68000,
        priceFormatted: "₹68,000",
        specs: {
          "Processor (CPU)": "Intel Core i5-12500TE Low-Power Industrial CPU",
          "Cooling": "100% Fanless passively cooled extruded aluminum finned heatsink",
          "Ingress Protection": "IP50 Dust-resistant fully sealed industrial housing",
          "Memory & Storage": "16GB Wide-Temp DDR4 + 512GB Industrial Grade SSD",
          "Power Input": "9V–36V DC Wide Voltage Input with Surge & Reverse Polarity Protection",
          "Ports": "4x RS232/422/485 Serial COM Ports, Dual Intel Industrial GbE LAN",
          "Warranty & Support": "5-Year Industrial Grade Warranty"
        },
        warranty: "✓ 5-Year Industrial Grade Warranty"
      },

      // =======================================================================
      // CATEGORY 2: CCTV CAMERAS & SURVEILLANCE SYSTEMS (10 ITEMS)
      // =======================================================================
      {
        id: "cctv-1",
        image: "assets/products/cctv-1.jpg",
        name: "Hikvision 4K ColorVu IP Bullet (DS-2CD2087G2-LU)",
        category: "cctv",
        badge: "new",
        badgeText: "BRAND NEW OEM",
        categoryTitle: "IP SURVEILLANCE • 4K FULL-COLOR",
        summary: "8MP, 24/7 Full Color with F1.0 aperture, AcuSense AI, built-in mic, IP67 weather-rated.",
        unitPrice: 8850,
        priceFormatted: "₹8,850",
        specs: {
          "Resolution": "8MP Ultra HD (3840 x 2160) @ 20fps",
          "Night Vision": "24/7 Full Color with F1.0 Super-Aperture (40m White Light Array)",
          "AI Analytics": "AcuSense deep learning Human & Vehicle target classification",
          "Audio": "Built-in noise-filtering microphone for live audio recording",
          "Enclosure": "IP67 Weatherproof solid aluminum alloy housing",
          "Power Supply": "PoE (802.3af standard) or 12V DC input",
          "Warranty": "2-Year Hikvision India Brand Warranty"
        },
        warranty: "✓ 2-Year Hikvision India Brand Warranty"
      },
      {
        id: "cctv-2",
        image: "assets/products/cctv-2.jpg",
        name: "Dahua WizSense 5MP Active Eyeball (IPC-HDW3549H)",
        category: "cctv",
        badge: "new",
        badgeText: "BRAND NEW OEM",
        categoryTitle: "ACTIVE DETERRENCE • ALARM & STROBE",
        summary: "Red/Blue strobe alarm, 110dB siren, two-way audio talkback, Starlight 5MP CMOS.",
        unitPrice: 6450,
        priceFormatted: "₹6,450",
        specs: {
          "Sensor": "5MP (2592 x 1944) high-sensitivity Starlight CMOS",
          "Active Defense": "Red & Blue flashing strobe alarm + 110dB siren upon unauthorized entry",
          "Two-Way Audio": "Built-in dual microphone and high-output loudspeaker",
          "Smart Motion": "SMD Plus reduces false alarms from leaves, rain & small animals",
          "Illuminators": "Dual illuminators (IR 30m + Warm Light 30m)",
          "Weather Rating": "IP67 all-weather outdoor certified",
          "Warranty": "2-Year Dahua Official Warranty"
        },
        warranty: "✓ 2-Year Dahua Official Warranty"
      },
      {
        id: "cctv-3",
        image: "assets/products/cctv-3.jpg",
        name: "CP Plus 4MP Motorized Zoom Bullet (TA41ZL4)",
        category: "cctv",
        badge: "new",
        badgeText: "BRAND NEW OEM",
        categoryTitle: "MOTORIZED ZOOM • PERIMETER GUARD",
        summary: "2.7–12mm 4x optical zoom, 50m Smart IR, 120dB WDR for license plate reading.",
        unitPrice: 7200,
        priceFormatted: "₹7,200",
        specs: {
          "Optics": "2.7mm–12mm Motorized Varifocal Lens (4x Optical Zoom via NVR / App)",
          "Resolution": "4MP Real-time Quad HD (2560 x 1440) @ 30fps",
          "Night Vision": "50 Meters Smart IR Array with auto-attenuation",
          "WDR Technology": "120dB True WDR (Clear vehicle number plates under direct headlights)",
          "Video Compression": "Instastream H.265+ (Saves up to 70% storage bandwidth)",
          "Housing": "Full Metal IP67 Vandal and Weather Resistant",
          "Warranty": "2-Year CP Plus India Warranty"
        },
        warranty: "✓ 2-Year CP Plus India Warranty"
      },
      {
        id: "cctv-4",
        image: "assets/products/cctv-4.jpg",
        name: "Hikvision 32-Channel 4K NVR (DS-7732NI-M4)",
        category: "cctv",
        badge: "new",
        badgeText: "BRAND NEW OEM",
        categoryTitle: "COMMERCIAL NVR • 32-CHANNEL 4K",
        summary: "4 SATA bays (up to 64TB), 320 Mbps throughput, dual independent 4K HDMI outputs.",
        unitPrice: 32500,
        priceFormatted: "₹32,500",
        specs: {
          "Video Channels": "32 IP Video Inputs (Supports up to 32MP ultra-high resolution per cam)",
          "Storage Capacity": "4x SATA Bays (Supports up to 16TB per drive = 64TB Max Storage)",
          "Bandwidth": "320 Mbps incoming bandwidth / 400 Mbps outgoing bandwidth",
          "Display": "Independent HDMI 1 (4K) + HDMI 2 + VGA monitor outputs",
          "Network Ports": "Dual 10/100/1000 Mbps self-adaptive Gigabit RJ45 ports",
          "Remote Access": "Free Hik-Connect app for live smartphone remote access",
          "Warranty": "2-Year Comprehensive Brand Warranty"
        },
        warranty: "✓ 2-Year Comprehensive Brand Warranty"
      },
      {
        id: "cctv-5",
        image: "assets/products/cctv-5.jpg",
        name: "Secureye 2MP Dual-Light Indoor Dome",
        category: "cctv",
        badge: "new",
        badgeText: "BRAND NEW OEM",
        categoryTitle: "INDOOR SECURITY • DUAL-LIGHT DOME",
        summary: "Smart IR + warm light switch, IK10 vandal-resistant dome, discrete microphone.",
        unitPrice: 2150,
        priceFormatted: "₹2,150",
        specs: {
          "Resolution": "1080p Full HD (1920 x 1080) sharp sensor",
          "Smart Dual Light": "Quiet IR night vision switches to warm white on detection",
          "Vandal Rating": "IK10 Impact-resistant polycarbonate dome bubble",
          "Audio": "Integrated high-sensitivity discrete mic for office reception",
          "Form Factor": "Low-profile ceiling flush mount (Corridors, elevators, lobbies)",
          "Compatibility": "ONVIF Profile S/G compliant with all major NVRs",
          "Warranty": "2-Year Secureye Hardware Warranty"
        },
        warranty: "✓ 2-Year Secureye Hardware Warranty"
      },
      {
        id: "cctv-6",
        image: "assets/products/cctv-6.jpg",
        name: "Dahua 25x Starlight PTZ Camera (SD49225XA)",
        category: "cctv",
        badge: "new",
        badgeText: "BRAND NEW OEM",
        categoryTitle: "SPEED DOME PTZ • 25X OPTICAL ZOOM",
        summary: "25x optical telephoto zoom, 100m IR, 360° endless pan, auto-tracking AI.",
        unitPrice: 48500,
        priceFormatted: "₹48,500",
        specs: {
          "Optical Zoom": "25x Optical Zoom (4.8mm–120mm focal length telephoto lens)",
          "Movement Range": "360° Endless Pan & -15° to 90° Tilt (Preset speed up to 240°/s)",
          "Night Vision Range": "Up to 100 Meters powerful night illumination",
          "Smart Auto-Tracking": "Auto-tracks trespassing personnel and unauthorized vehicles",
          "Low-Light": "Starlight sensor delivers color in near-total darkness (0.005 Lux)",
          "Ingress Rating": "IP66 Heavy-duty outdoor housing with lightning surge suppression",
          "Warranty": "2-Year Dahua Enterprise Warranty"
        },
        warranty: "✓ 2-Year Dahua Enterprise Warranty"
      },
      {
        id: "cctv-7",
        image: "assets/products/cctv-7.jpg",
        name: "CP Plus 16-Channel 4K NVR with 16 PoE Ports",
        category: "cctv",
        badge: "new",
        badgeText: "BRAND NEW OEM",
        categoryTitle: "ALL-IN-ONE NVR • 16 POE PORTS",
        summary: "Integrated 16-port PoE switch (direct Cat6 plug-and-play), 20TB storage support.",
        unitPrice: 19800,
        priceFormatted: "₹19,800",
        specs: {
          "PoE Built-in": "16 Independent PoE Ports (Plug Cat6 cables directly into NVR)",
          "Video Resolution": "Supports up to 8MP (4K) recording on all 16 channels",
          "Storage Support": "2 SATA HDD Bays (Supports up to 20TB Total Storage)",
          "Decoding": "Smart H.265+ dual-stream encoding for maximum efficiency",
          "Plug & Play": "Zero manual IP assignment needed (Instant auto-discovery)",
          "Mobile Access": "gCMOB mobile app for remote monitoring on Android & iOS",
          "Warranty": "2-Year CP Plus Brand Warranty"
        },
        warranty: "✓ 2-Year CP Plus Brand Warranty"
      },
      {
        id: "cctv-8",
        image: "assets/products/cctv-8.jpg",
        name: "Hikvision AI Face Recognition (DS-K1T673DX)",
        category: "cctv",
        badge: "new",
        badgeText: "BRAND NEW OEM",
        categoryTitle: "BIOMETRIC ACCESS • AI FACE TERMINAL",
        summary: "7-inch curved touchscreen, 0.2s matching, anti-spoof dual cameras, EM lock relay.",
        unitPrice: 34000,
        priceFormatted: "₹34,000",
        specs: {
          "Screen Display": "7-inch Curved Glass Touchscreen (1024 x 600 resolution)",
          "Matching Speed": "0.2s matching speed with 50,000 face database capacity",
          "Anti-Spoofing": "Dual 2MP lenses prevent photo, video, or 3D mask spoofing",
          "Access Modes": "Face + Fingerprint + Mifare RFID Card + Pin + QR Code",
          "Relay Control": "Direct connection to Electromagnetic door locks & exit buttons",
          "Software Sync": "Direct sync with attendance and payroll management software",
          "Warranty": "2-Year Official Brand Warranty"
        },
        warranty: "✓ 2-Year Official Brand Warranty"
      },
      {
        id: "cctv-9",
        image: "assets/products/cctv-9.jpg",
        name: "Krishna 8-Camera 4K ColorVu Complete Society Kit",
        category: "cctv",
        badge: "new",
        badgeText: "TURNKEY BUNDLE",
        categoryTitle: "COMPLETE PACKAGE • SOCIETY BUNDLE",
        summary: "8x ColorVu night cameras, 8-Ch PoE NVR, 4TB WD Purple HDD, 200m Cat6 solid copper bundle.",
        unitPrice: 68500,
        priceFormatted: "₹68,500",
        specs: {
          "Cameras Included": "8x Hikvision 4MP ColorVu 24/7 Full-Color Night Bullet Cameras",
          "NVR Included": "1x 8-Channel 4K NVR with 8-Port integrated PoE switch",
          "Surveillance Storage": "1x 4TB Western Digital Purple Surveillance HDD (30+ days continuous log)",
          "Network Cabling": "2x 100m Cat6 100% Solid Copper D-Link Cable Bundles",
          "Accessories": "High-grade weatherproof junction boxes, RJ45 crimps, HDMI cable",
          "Installation & Setup": "Fluke testing, on-site installation & mobile app configuration",
          "Warranty & AMC": "2-Year Hardware + 1-Year Free Maintenance Contract"
        },
        warranty: "✓ 2-Year Hardware + 1-Year Free AMC"
      },
      {
        id: "cctv-10",
        image: "assets/products/cctv-10.jpg",
        name: "Heavy-Duty 1200 lbs Electromagnetic Lock Kit",
        category: "cctv",
        badge: "new",
        badgeText: "BRAND NEW OEM",
        categoryTitle: "ACCESS CONTROL • EM DOOR SECURITY",
        summary: "1200 lbs holding force, fail-safe fire release, battery backup PSU, touchless exit sensor.",
        unitPrice: 6800,
        priceFormatted: "₹6,800",
        specs: {
          "Holding Force": "1200 lbs (545 kg) linear magnetic holding power",
          "Housing": "Anodized heavy aircraft aluminum casing (Anti-corrosion)",
          "Fail-Safe Operation": "Automatic unlock upon fire alarm trigger for emergency egress",
          "Sensors": "Magnetic bond sensor with dual-color LED status indicator",
          "Power Backup": "Dedicated 12V DC power box with 12V 7Ah sealed battery backup",
          "Exit Sensor": "Touchless infrared exit wave sensor and emergency break glass",
          "Warranty": "2-Year Comprehensive Warranty"
        },
        warranty: "✓ 2-Year Comprehensive Warranty"
      },

      // =======================================================================
      // CATEGORY 3: REFURBISHED & 2ND HAND PCS & LAPTOPS (10 ITEMS)
      // =======================================================================
      {
        id: "refurb-1",
        image: "assets/products/refurb-1.jpg",
        name: "Dell Latitude 7490 Business Laptop",
        category: "refurbished",
        badge: "refurbished",
        badgeText: "REFURBISHED / 2ND HAND",
        categoryTitle: "GRADE A++ • CORPORATE LAPTOP",
        summary: "Intel Core i7-8650U, 16GB DDR4, 512GB NVMe, 14.0\" FHD IPS, backlit keyboard, carbon fiber unibody.",
        unitPrice: 24500,
        priceFormatted: "₹24,500",
        specs: {
          "Processor": "Intel Core i7-8650U (4 Cores / 8 Threads, up to 4.2 GHz Turbo)",
          "Memory (RAM)": "16GB DDR4 2400MHz (Dual SO-DIMM, Expandable to 32GB)",
          "Storage Drive": "512GB M.2 PCIe NVMe Solid State Drive (New High-Speed SSD)",
          "Display Screen": "14.0\" Full HD (1920 x 1080) Anti-Glare IPS Matte Panel",
          "Keyboard": "Spill-resistant Backlit Corporate Keyboard with Precision Trackpad",
          "Battery Health": "Verified 85%+ Original Battery Health (4-6 Hours Test Backup)",
          "Chassis & Material": "Carbon-Fiber Reinforced Magnesium Alloy Unibody (1.4 kg)",
          "Ports & I/O": "USB Type-C DisplayPort, 3x USB 3.1, HDMI, RJ45 LAN, MicroSD",
          "Condition Grade": "Grade A++ Corporate Lease Return (Clean, Zero Dents)",
          "Inspection Checklist": "Passed 48-Point Hardware Diagnostic & Component Stress Test",
          "Warranty": "6-Month Tested Replacement Warranty + 1-Month Instant Exchange"
        },
        warranty: "● 48-Point Tested • 6-Month Replacement Warranty"
      },
      {
        id: "refurb-2",
        image: "assets/products/refurb-2.jpg",
        name: "Lenovo ThinkPad T480 Ultrabook",
        category: "refurbished",
        badge: "refurbished",
        badgeText: "REFURBISHED / 2ND HAND",
        categoryTitle: "GRADE A+ • LEGENDARY T-SERIES",
        summary: "Intel Core i5-8350U vPro, 16GB DDR4, 512GB SSD, PowerBridge Dual Battery (7 hrs), spill-resistant keyboard.",
        unitPrice: 22800,
        priceFormatted: "₹22,800",
        specs: {
          "Processor": "Intel Core i5-8350U vPro (4 Cores / 8 Threads, 3.6 GHz)",
          "Memory (RAM)": "16GB DDR4 RAM (Dual SO-DIMM slots)",
          "Storage": "512GB PCIe NVMe SSD (Clean OS image)",
          "Dual Battery System": "PowerBridge Dual Battery System (Up to 7 hrs continuous work)",
          "Keyboard": "Spill-resistant ergonomic ThinkPad keyboard with TrackPoint",
          "Ports": "Thunderbolt 3 (USB-C), HDMI, RJ45 Gigabit Ethernet, SD Card",
          "Condition Grade": "Grade A+ Commercial Clean",
          "Inspection": "Passed 48-Point Diagnostic & Battery Runtime Test",
          "Warranty": "6-Month Tested Replacement Warranty"
        },
        warranty: "● 48-Point Tested • 6-Month Replacement Warranty"
      },
      {
        id: "refurb-3",
        image: "assets/products/refurb-3.jpg",
        name: "HP EliteBook 840 G6 Slim Ultrabook",
        category: "refurbished",
        badge: "refurbished",
        badgeText: "REFURBISHED / 2ND HAND",
        categoryTitle: "GRADE A+ • SLIM ALUMINUM",
        summary: "Intel Core i5-8265U, 16GB DDR4, 256GB SSD, 14.0\" FHD IPS, Bang & Olufsen sound, scratch-free silver aluminum.",
        unitPrice: 25500,
        priceFormatted: "₹25,500",
        specs: {
          "Processor": "Intel Core i5-8265U (Whiskey Lake 4C/8T, up to 3.9 GHz)",
          "Memory (RAM)": "16GB DDR4 2400MHz High-Speed RAM",
          "Storage": "256GB M.2 NVMe SSD (Upgrade to 512GB available)",
          "Display": "14.0\" Full HD (1920 x 1080) Ultra-Slim IPS Display",
          "Audio & Security": "Bang & Olufsen Tuned Speakers + Fingerprint Reader",
          "Body Material": "Pristine scratch-free silver aluminum unibody",
          "Condition Grade": "Grade A+ Pristine Silver Body",
          "Warranty": "6-Month Tested Replacement Warranty"
        },
        warranty: "● 48-Point Tested • 6-Month Replacement Warranty"
      },
      {
        id: "refurb-4",
        image: "assets/products/refurb-4.jpg",
        name: "Dell OptiPlex 7060 SFF Desktop PC",
        category: "refurbished",
        badge: "refurbished",
        badgeText: "REFURBISHED / 2ND HAND",
        categoryTitle: "GRADE A • COMPACT SFF DESKTOP",
        summary: "Intel Core i7-8700 (6C/12T, 4.6 GHz), 16GB DDR4, 512GB NVMe SSD + 1TB HDD, Dual DisplayPort.",
        unitPrice: 21500,
        priceFormatted: "₹21,500",
        specs: {
          "Processor": "Intel Core i7-8700 (6 Cores / 12 Threads, 4.6 GHz Turbo)",
          "Memory (RAM)": "16GB DDR4 2666MHz RAM (4x DIMM Slots)",
          "Storage": "512GB NVMe SSD (New) + 1TB Secondary Data HDD",
          "Display Outputs": "2x DisplayPort 1.2 + HDMI (Dual Monitor Ready)",
          "Thermal Maintenance": "Fresh Arctic MX-4 thermal paste + fan ultrasonic cleaned",
          "Chassis": "Heavy-duty commercial metal Small Form Factor",
          "Condition Grade": "Grade A Enterprise Pull (Stress-tested)",
          "Warranty": "6-Month Tested Hardware Warranty"
        },
        warranty: "● 48-Point Tested • 6-Month Hardware Warranty"
      },
      {
        id: "refurb-5",
        image: "assets/products/refurb-5.jpg",
        name: "HP ProDesk 600 G4 Mini Micro PC",
        category: "refurbished",
        badge: "refurbished",
        badgeText: "REFURBISHED / 2ND HAND",
        categoryTitle: "GRADE A+ • TINY 1-LITRE MICRO PC",
        summary: "Intel Core i5-8500T (6 Cores), 16GB RAM, 256GB SSD, ultra-small 1-Litre footprint (1.2 kg).",
        unitPrice: 17500,
        priceFormatted: "₹17,500",
        specs: {
          "Processor": "Intel Core i5-8500T (6 Physical Cores, up to 3.5 GHz Turbo)",
          "Memory (RAM)": "16GB DDR4 SO-DIMM RAM",
          "Storage": "256GB NVMe High-Speed Solid State Drive",
          "Dimensions": "Ultra-Small (17.7 x 17.5 x 3.4 cm, weights 1.2 kg)",
          "Connectivity": "6x USB 3.1, USB Type-C front, Dual DisplayPort, Gigabit LAN",
          "Power Adapter": "Includes genuine HP original 65W power brick",
          "Condition Grade": "Grade A+ Ultra-compact, silent running",
          "Warranty": "6-Month Tested Replacement Warranty"
        },
        warranty: "● 48-Point Tested • 6-Month Replacement Warranty"
      },
      {
        id: "refurb-6",
        image: "assets/products/refurb-6.jpg",
        name: "Lenovo ThinkCentre M720q Tiny PC",
        category: "refurbished",
        badge: "refurbished",
        badgeText: "REFURBISHED / 2ND HAND",
        categoryTitle: "GRADE A • DESKTOP MINI TOWER",
        summary: "Intel Core i5-8400T (6 Cores), 8GB DDR4, 256GB M.2 SSD, USB Type-C, DP + HDMI, 35W low power.",
        unitPrice: 15500,
        priceFormatted: "₹15,500",
        specs: {
          "Processor": "Intel Core i5-8400T (6 Cores / 6 Threads, 3.3 GHz)",
          "Memory (RAM)": "8GB DDR4 RAM (Expandable to 32GB)",
          "Storage": "256GB M.2 PCIe SSD + Free 2.5\" SATA Bay",
          "Ports": "USB 3.1 Gen 2, Type-C, DisplayPort, HDMI, Audio Jack",
          "Features": "Internal speaker, Kensington lock slot, low 35W power",
          "Condition Grade": "Grade A Tested & Benchmarked",
          "Warranty": "6-Month Tested Hardware Warranty"
        },
        warranty: "● 48-Point Tested • 6-Month Hardware Warranty"
      },
      {
        id: "refurb-7",
        image: "assets/products/refurb-7.jpg",
        name: "Dell Precision 7530 Mobile Workstation",
        category: "refurbished",
        badge: "refurbished",
        badgeText: "REFURBISHED / 2ND HAND",
        categoryTitle: "GRADE A • MOBILE WORKSTATION",
        summary: "Intel Core i7-8850H (6C/12T), 32GB RAM, 1TB NVMe, NVIDIA Quadro P2000 4GB CAD GPU, 15.6\" UltraSharp.",
        unitPrice: 44500,
        priceFormatted: "₹44,500",
        specs: {
          "Processor": "Intel Core i7-8850H (6 Cores / 12 Threads, 4.3 GHz)",
          "Memory (RAM)": "32GB DDR4 RAM (4x DIMM slots up to 128GB)",
          "Storage": "1TB NVMe Gen3 High-Capacity SSD",
          "GPU": "NVIDIA Quadro P2000 4GB Dedicated CAD Workstation GPU",
          "Display": "15.6\" UltraSharp Full HD 72% Color Gamut Anti-Glare",
          "Thermal": "Dual heavy copper cooling pipes for 24/7 rendering",
          "Condition Grade": "Grade A Heavy CAD & Video Editing Workhorse",
          "Warranty": "6-Month Commercial Warranty"
        },
        warranty: "● 48-Point Tested • 6-Month Workstation Warranty"
      },
      {
        id: "refurb-8",
        image: "assets/products/refurb-8.jpg",
        name: "Apple MacBook Pro 13\" Retina (Space Grey)",
        category: "refurbished",
        badge: "refurbished",
        badgeText: "REFURBISHED / 2ND HAND",
        categoryTitle: "GRADE A • RETINA DISPLAY",
        summary: "Intel Core i5 2.3 GHz, 8GB RAM, 256GB Apple PCIe SSD, Retina display (2560x1600), low cycle battery.",
        unitPrice: 38500,
        priceFormatted: "₹38,500",
        specs: {
          "Processor": "Intel Core i5 Dual-Core 2.3 GHz (Turbo Boost to 3.6 GHz)",
          "Memory (RAM)": "8GB LPDDR3 2133MHz On-board RAM",
          "Storage": "256GB Apple High-Speed PCIe Flash SSD",
          "Display Screen": "13.3\" IPS Retina Display (2560 x 1600, 500 nits, P3 Color)",
          "Battery Health": "Certified original battery with low cycle count (Under 350 cycles)",
          "Ports": "Dual Thunderbolt 3 (USB-C) ports with 40Gbps throughput",
          "Condition Grade": "Grade A Space Grey, clean chassis",
          "Warranty": "3-Month Tested Store Warranty"
        },
        warranty: "● Tested Battery • 3-Month Store Warranty"
      },
      {
        id: "refurb-9",
        image: "assets/products/refurb-9.jpg",
        name: "HP Z440 Heavy Engineering Workstation",
        category: "refurbished",
        badge: "refurbished",
        badgeText: "REFURBISHED / 2ND HAND",
        categoryTitle: "GRADE A • HEAVY INDUSTRIAL TOWER",
        summary: "Intel Xeon E5-1650 v4 (6C/12T), 64GB ECC RAM, 512GB SSD + 2TB HDD, NVIDIA Quadro K4200 4GB.",
        unitPrice: 36000,
        priceFormatted: "₹36,000",
        specs: {
          "Processor": "Intel Xeon E5-1650 v4 (6 Cores / 12 Threads, 3.6–4.0 GHz)",
          "Memory (RAM)": "64GB DDR4 ECC Registered Server Memory",
          "Storage": "512GB Enterprise SSD + 2TB Secondary Storage HDD",
          "GPU": "NVIDIA Quadro K4200 4GB 256-bit Workstation Card",
          "Power Supply": "700W 90% High Efficiency Tool-less Server PSU",
          "Application": "CNC machinery control, SolidWorks, 3D structural analysis",
          "Condition Grade": "Grade A Industrial Server-Grade Reliability",
          "Warranty": "6-Month Tested Workstation Warranty"
        },
        warranty: "● 48-Point Tested • 6-Month Heavy Duty Warranty"
      },
      {
        id: "refurb-10",
        image: "assets/products/refurb-10.jpg",
        name: "Lenovo ThinkPad X1 Carbon 6th Gen",
        category: "refurbished",
        badge: "refurbished",
        badgeText: "REFURBISHED / 2ND HAND",
        categoryTitle: "GRADE A+ • FEATHERWEIGHT 1.1 KG",
        summary: "Intel Core i7-8650U vPro, 16GB RAM, 512GB NVMe SSD, 14\" WQHD 2K (2560x1440), featherweight 1.13 kg.",
        unitPrice: 32500,
        priceFormatted: "₹32,500",
        specs: {
          "Processor": "Intel Core i7-8650U vPro (4 Cores / 8 Threads, 4.2 GHz)",
          "Memory (RAM)": "16GB LPDDR3 RAM",
          "Storage": "512GB PCIe NVMe Ultra-Fast SSD",
          "Display Screen": "14.0\" WQHD 2K (2560 x 1440) Anti-Glare IPS 300 nits",
          "Weight & Build": "Carbon-Fiber reinforced unibody weighing only 1.13 kg",
          "Battery Health": "RapidCharge battery with 5+ hours verified test runtime",
          "Condition Grade": "Grade A+ Executive Travel Condition",
          "Warranty": "6-Month Tested Replacement Warranty"
        },
        warranty: "● 48-Point Tested • 6-Month Replacement Warranty"
      },

      // =======================================================================
      // CATEGORY 4: IN-HOUSE SOFTWARE SUITE (3 PLATFORMS)
      // =======================================================================
      {
        id: "soft-1",
        image: "assets/products/soft-1.jpg",
        name: "KrishnaERP (GST Billing & Inventory Suite)",
        category: "software",
        badge: "software",
        badgeText: "PROPRIETARY CLOUD",
        categoryTitle: "CLOUD ERP • KRISHNAERP.ONLINE",
        summary: "GST billing, direct e-invoicing & e-Way bill QR generation, multi-warehouse batch tracking, party ledgers.",
        unitPrice: 12000,
        priceFormatted: "₹12,000 / yr",
        specs: {
          "GST Compliance": "Direct GST portal e-invoicing with dynamic QR code & e-Way bill IRN",
          "Inventory Engine": "Multi-warehouse batch tracking, barcode scanning, stock re-orders",
          "Ledger Sync": "Automated party ledger synchronization & WhatsApp statement share",
          "Deployment Modes": "Secure cloud HTTPS or on-premises local NAS server installation",
          "User Permissions": "Role-based access for Admin, Accountant, Sales, and Storekeeper",
          "Updates & Support": "Lifetime feature updates with direct KDesk remote engineering support"
        },
        warranty: "✓ Lifetime Updates & KDesk Remote Assistance"
      },
      {
        id: "soft-2",
        image: "assets/products/soft-2.jpg",
        name: "AMSKRISHNA (AMC Contract Platform)",
        category: "software",
        badge: "software",
        badgeText: "PROPRIETARY CLOUD",
        categoryTitle: "SERVICE PLATFORM • AMSKRISHNA.ONLINE",
        summary: "Multi-role AMC platform for Admin, Manager, Field Engineer & Customer with paperless digital service sign-offs.",
        unitPrice: 18000,
        priceFormatted: "₹18,000 / yr",
        specs: {
          "Role Portals": "Dedicated role logins for Admin, Manager, Engineer & Client",
          "Field Workflow": "Paperless digital service slips with on-screen client signatures",
          "Maintenance Calendar": "Automated quarterly preventive maintenance calendar triggers",
          "Contract Pipelines": "30-day auto alert pipeline before contract expiration",
          "Asset Tracking": "Serial number & warranty tracking across all client sites",
          "Mobile Access": "Responsive PWA mobile interface for on-site field technicians"
        },
        warranty: "✓ Active Production Platform across Maharashtra"
      },
      {
        id: "soft-3",
        image: "assets/products/soft-3.jpg",
        name: "KDesk (Encrypted Remote Support Tool)",
        category: "software",
        badge: "software",
        badgeText: "PROPRIETARY TOOL",
        categoryTitle: "SECURE REMOTE • 256-BIT AES",
        summary: "Lightweight 256-bit AES encrypted remote desktop support tool for instant client troubleshooting.",
        unitPrice: 6000,
        priceFormatted: "₹6,000 / yr",
        specs: {
          "Encryption Protocol": "256-Bit TLS/AES end-to-end encrypted remote tunneling",
          "Zero Installation": "Lightweight standalone client requiring zero administrative rights",
          "Unattended Support": "Unattended diagnostic access for contracted corporate systems",
          "Codec Optimization": "High frame rate video codec optimized for cellular hotspots",
          "Audit Trails": "Complete session start/end timestamps and technician ID logs"
        },
        warranty: "✓ Zero Latency Instant Helpdesk Integration"
      }
    ];

    // =========================================================================
    // BESPOKE CUSTOM PC RIG CONFIGURATOR DATA (From Mouse Pad to RTX 5090)
    // =========================================================================
    const CUSTOM_COMPONENTS = {
      cpu: {
        title: "Processor (CPU)",
        subtitle: "Select the compute engine",
        step: "01",
        items: [
          {
        id: "cpu-1",
        image: "assets/components/cpu.jpg",
        name: "Intel Core i5-14400F",
            desc: "10 Cores (6P + 4E), 16 Threads, up to 4.7 GHz, 20MB Cache",
            price: 14200,
            watts: 65,
            socket: "LGA1700",
            tags: ["LGA1700", "65W TDP", "Intel 14th Gen"]
          },
          {
        id: "cpu-2",
        image: "assets/components/cpu.jpg",
        name: "Intel Core i7-14700K",
            desc: "20 Cores (8P + 12E), 28 Threads, up to 5.6 GHz, 33MB Smart Cache",
            price: 36900,
            watts: 125,
            socket: "LGA1700",
            tags: ["LGA1700", "125W TDP", "Unlocked Overclock"]
          },
          {
        id: "cpu-3",
        image: "assets/components/cpu.jpg",
        name: "Intel Core i9-14900KS",
            desc: "24 Cores (8P + 16E), 32 Threads, up to 6.2 GHz Special Edition",
            price: 58500,
            watts: 150,
            socket: "LGA1700",
            tags: ["LGA1700", "150W TDP", "6.2 GHz Extreme"]
          },
          {
        id: "cpu-4",
        image: "assets/components/cpu.jpg",
        name: "AMD Ryzen 5 7600X",
            desc: "6 Cores / 12 Threads, 4.7 GHz base, up to 5.3 GHz Boost, 32MB L3",
            price: 19800,
            watts: 105,
            socket: "AM5",
            tags: ["AM5", "105W TDP", "PCIe 5.0"]
          },
          {
        id: "cpu-5",
        image: "assets/components/cpu.jpg",
        name: "AMD Ryzen 7 7800X3D",
            desc: "8 Cores / 16 Threads, 96MB 3D V-Cache, #1 Pure Gaming CPU",
            price: 39400,
            watts: 120,
            socket: "AM5",
            tags: ["AM5", "120W TDP", "3D V-Cache"]
          },
          {
        id: "cpu-6",
        image: "assets/components/cpu.jpg",
        name: "AMD Ryzen 9 9950X",
            desc: "16 Cores / 32 Threads, Zen 5, up to 5.7 GHz Boost, 80MB Cache",
            price: 59900,
            watts: 170,
            socket: "AM5",
            tags: ["AM5", "170W TDP", "Zen 5 Flagship"]
          },
          {
        id: "cpu-7",
        image: "assets/components/cpu.jpg",
        name: "AMD Ryzen Threadripper 7960X",
            desc: "24 Cores / 48 Threads, 128MB Cache, Quad Channel DDR5 HEDT",
            price: 148000,
            watts: 350,
            socket: "sTR5",
            tags: ["sTR5", "350W TDP", "Workstation HEDT"]
          }
        ]
      },
      motherboard: {
        title: "Motherboard & Platform",
        subtitle: "Chipset, socket architecture & expansion",
        step: "02",
        items: [
          {
        id: "mb-1",
        image: "assets/components/motherboard.jpg",
        name: "MSI PRO B760M-A WiFi DDR5",
            desc: "Intel LGA1700, 4x DDR5 Slots, 2x M.2 Gen4, 2.5G LAN, Wi-Fi 6E",
            price: 14800,
            socket: "LGA1700",
            tags: ["LGA1700", "Micro-ATX", "Wi-Fi 6E"]
          },
          {
        id: "mb-2",
        image: "assets/components/motherboard.jpg",
        name: "ASUS ROG STRIX Z790-E Gaming WiFi II",
            desc: "Intel LGA1700, PCIe 5.0 x16, 5x M.2 Slots, Wi-Fi 7, 18+1+2 VRM",
            price: 44500,
            socket: "LGA1700",
            tags: ["LGA1700", "ATX", "Wi-Fi 7", "PCIe 5.0"]
          },
          {
        id: "mb-3",
        image: "assets/components/motherboard.jpg",
        name: "MSI B650 Gaming Plus WiFi",
            desc: "AMD AM5, 4x DDR5, Dual M.2 PCIe 4.0, 2.5G LAN, Extended Heatsink",
            price: 16200,
            socket: "AM5",
            tags: ["AM5", "ATX", "Wi-Fi 6E"]
          },
          {
        id: "mb-4",
        image: "assets/components/motherboard.jpg",
        name: "ASUS ROG CROSSHAIR X670E HERO",
            desc: "AMD AM5, Dual PCIe 5.0, Dual USB4 40Gbps, Wi-Fi 6E, ESS Quad-DAC",
            price: 59000,
            socket: "AM5",
            tags: ["AM5", "ATX", "Dual USB4", "Extreme VRM"]
          },
          {
        id: "mb-5",
        image: "assets/components/motherboard.jpg",
        name: "ASUS Pro WS TRX50-SAGE WiFi",
            desc: "AMD sTR5 Threadripper, 36 Power Stages, Triple PCIe 5.0 x16, 10G LAN",
            price: 89500,
            socket: "sTR5",
            tags: ["sTR5", "CEB", "10GbE LAN", "Threadripper Ready"]
          }
        ]
      },
      gpu: {
        title: "Graphics Card (GPU)",
        subtitle: "From daily display out to extreme NVIDIA RTX 5090 32GB",
        step: "03",
        items: [
          {
        id: "gpu-0",
        image: "assets/components/gpu.jpg",
        name: "Integrated Graphics / Basic Video Out",
            desc: "CPU internal UHD / Radeon display engine (No discrete card)",
            price: 0,
            watts: 0,
            tags: ["0W Added", "Office Productivity"]
          },
          {
        id: "gpu-1",
        image: "assets/components/gpu.jpg",
        name: "NVIDIA GeForce RTX 4060 8GB GDDR6",
            desc: "ZOTAC Twin Edge / ASUS Dual, DLSS 3 Frame Gen, 1080p Ultra",
            price: 28500,
            watts: 115,
            tags: ["115W TDP", "8GB GDDR6", "Ray Tracing"]
          },
          {
        id: "gpu-2",
        image: "assets/components/gpu.jpg",
        name: "NVIDIA GeForce RTX 4070 SUPER 12GB GDDR6X",
            desc: "MSI Ventus 3X, 7168 CUDA Cores, 1440p High-FPS Ray Tracing & Blender",
            price: 59800,
            watts: 220,
            tags: ["220W TDP", "12GB GDDR6X", "1440p King"]
          },
          {
        id: "gpu-3",
        image: "assets/components/gpu.jpg",
        name: "NVIDIA GeForce RTX 4080 SUPER 16GB GDDR6X",
            desc: "ASUS TUF Gaming, 10,240 CUDA Cores, 256-bit, 4K Gaming & Local LLM AI",
            price: 99500,
            watts: 320,
            tags: ["320W TDP", "16GB GDDR6X", "4K Ultra / AI"]
          },
          {
        id: "gpu-4",
        image: "assets/components/gpu.jpg",
        name: "NVIDIA GeForce RTX 4090 24GB GDDR6X",
            desc: "ASUS ROG Strix / MSI Suprim, 16,384 CUDA Cores, 384-bit, Heavyweight LLM",
            price: 189000,
            watts: 450,
            tags: ["450W TDP", "24GB GDDR6X", "Deep Learning"]
          },
          {
        id: "gpu-5",
        image: "assets/components/rtx-5090.jpg",
        name: "⭐ NVIDIA GeForce RTX 5090 32GB GDDR7",
            desc: "Blackwell B200 Architecture, 512-bit bus, 28 Gbps, 24,576 CUDA Cores, DLSS 4, Quantum AI Compute Flagship",
            price: 249000,
            watts: 600,
            tags: ["⭐ RTX 5090 FLAGSHIP", "600W TDP", "32GB GDDR7", "512-Bit"]
          },
          {
        id: "gpu-6",
        image: "assets/components/gpu.jpg",
        name: "AMD Radeon RX 7800 XT 16GB GDDR6",
            desc: "Sapphire Pulse, 3840 Stream Processors, 256-bit, 16GB VRAM Raster King",
            price: 49900,
            watts: 263,
            tags: ["263W TDP", "16GB GDDR6", "High Rasterization"]
          }
        ]
      },
      ram: {
        title: "Memory (RAM)",
        subtitle: "High-speed DDR5 multi-channel memory",
        step: "04",
        items: [
          {
        id: "ram-1",
        image: "assets/components/ram.jpg",
        name: "16GB (1x16GB) DDR5-5200 Corsair Vengeance",
            desc: "Single module, low profile aluminum heatspreader, On-die ECC",
            price: 4200,
            tags: ["16GB", "DDR5-5200", "Single Channel"]
          },
          {
        id: "ram-2",
        image: "assets/components/ram.jpg",
        name: "32GB (2x16GB) DDR5-6000 CL30 G.Skill Ripjaws S5",
            desc: "Dual channel kit, ultra-low CL30 latency, optimized for AMD EXPO & XMP",
            price: 9400,
            tags: ["32GB Dual", "DDR5-6000 CL30", "Low Latency"]
          },
          {
        id: "ram-3",
        image: "assets/components/ram.jpg",
        name: "64GB (2x32GB) DDR5-6000 CL30 Kingston Fury Beast RGB",
            desc: "Dual channel high-capacity kit, customizable dynamic RGB lighting",
            price: 18600,
            tags: ["64GB Dual", "DDR5-6000", "RGB Lighting"]
          },
          {
        id: "ram-4",
        image: "assets/components/ram.jpg",
        name: "128GB (4x32GB) DDR5-5600 Corsair Dominator Titanium",
            desc: "Quad-channel matched kit, patented DHX cooling, top creator grade",
            price: 42500,
            tags: ["128GB Quad", "DDR5-5600", "Dominator DHX"]
          },
          {
        id: "ram-5",
        image: "assets/components/ram.jpg",
        name: "256GB (8x32GB) DDR5 ECC Registered Workstation Memory",
            desc: "Octa-channel server-grade ECC error-correcting memory for Threadripper",
            price: 98000,
            tags: ["256GB Octa", "ECC Registered", "HEDT Certified"]
          }
        ]
      },
      ssd: {
        title: "Primary Storage (M.2 NVMe SSD)",
        subtitle: "High-speed OS and application drive",
        step: "05",
        items: [
          {
        id: "ssd-1",
        image: "assets/components/ssd.jpg",
        name: "500GB Kingston NV2 PCIe 4.0 NVMe SSD",
            desc: "Up to 3,500 MB/s Read, 2,100 MB/s Write, Single-sided M.2 2280",
            price: 3600,
            tags: ["500GB", "PCIe 4.0", "3500 MB/s"]
          },
          {
        id: "ssd-2",
        image: "assets/components/ssd.jpg",
        name: "1TB WD Black SN850X PCIe 4.0 NVMe SSD",
            desc: "Up to 7,300 MB/s Read, 6,300 MB/s Write, Game Mode 2.0, Low Latency",
            price: 8900,
            tags: ["1TB", "PCIe 4.0", "7300 MB/s"]
          },
          {
        id: "ssd-3",
        image: "assets/components/ssd.jpg",
        name: "2TB Samsung 990 PRO PCIe 4.0 NVMe with Heatsink",
            desc: "Up to 7,450 MB/s Read, 6,900 MB/s Write, Integrated Aluminum Heatsink",
            price: 17500,
            tags: ["2TB", "PCIe 4.0", "7450 MB/s", "Heatsink"]
          },
          {
        id: "ssd-4",
        image: "assets/components/ssd.jpg",
        name: "4TB Crucial T705 PCIe 5.0 Extreme NVMe SSD",
            desc: "Next-gen PCIe 5.0 flagship: Up to 14,500 MB/s Read, 12,700 MB/s Write",
            price: 46000,
            tags: ["4TB", "PCIe 5.0", "14,500 MB/s Flagship"]
          }
        ]
      },
      hdd: {
        title: "Secondary Storage (Bulk Data)",
        subtitle: "High-capacity storage for video files, CCTV feeds & archives",
        step: "06",
        items: [
          {
        id: "hdd-0",
        image: "assets/components/hdd.jpg",
        name: "None / Primary NVMe SSD Only",
            desc: "Keep system all-flash without secondary bulk hard drive",
            price: 0,
            tags: ["0 MB Storage Added"]
          },
          {
        id: "hdd-1",
        image: "assets/components/hdd.jpg",
        name: "2TB Seagate Barracuda 7200RPM SATA HDD",
            desc: "256MB Cache, SATA 6Gb/s, Multi-tier caching technology",
            price: 5400,
            tags: ["2TB HDD", "7200 RPM", "256MB Cache"]
          },
          {
        id: "hdd-2",
        image: "assets/components/hdd.jpg",
        name: "4TB WD Purple High-Endurance 24x7 HDD",
            desc: "AllFrame 4K AI technology, rated for 24x7 always-on CCTV & archiving",
            price: 8800,
            tags: ["4TB HDD", "24x7 Rated", "High Endurance"]
          },
          {
        id: "hdd-3",
        image: "assets/components/hdd.jpg",
        name: "8TB Seagate IronWolf NAS Pro Enterprise HDD",
            desc: "7200RPM, 256MB Cache, AgileArray, 300TB/year workload limit",
            price: 18900,
            tags: ["8TB HDD", "Enterprise", "7200 RPM"]
          },
          {
        id: "hdd-4",
        image: "assets/components/hdd.jpg",
        name: "2TB Crucial MX500 SATA III High-Endurance SSD",
            desc: "Solid-state silent secondary drive, 560 MB/s Read, Integrated Power Loss Immunity",
            price: 12400,
            tags: ["2TB Silent SSD", "SATA III"]
          }
        ]
      },
      cooler: {
        title: "CPU Cooling Solution",
        subtitle: "Thermal management for sustained peak clocks",
        step: "07",
        items: [
          {
        id: "cool-1",
        image: "assets/components/cooler.jpg",
        name: "DeepCool AG400 ARGB Single Tower Air Cooler",
            desc: "4 direct-contact heat pipes, 120mm PWM ARGB fan, up to 220W TDP capacity",
            price: 1950,
            tags: ["Air Cooler", "220W TDP", "120mm ARGB"]
          },
          {
        id: "cool-2",
        image: "assets/components/cooler.jpg",
        name: "Noctua NH-D15 chromax.black Dual-Tower Cooler",
            desc: "Dual NF-A15 140mm fans, 6 heat pipes, whisper-quiet Austrian engineering",
            price: 9800,
            tags: ["Elite Air", "Dual 140mm", "Whisper Quiet"]
          },
          {
        id: "cool-3",
        image: "assets/components/cooler.jpg",
        name: "DeepCool LT520 240mm AIO Liquid Cooler",
            desc: "4th gen high-efficiency water pump, multidimensional infinity mirror block",
            price: 6900,
            tags: ["240mm Liquid", "Infinity Mirror"]
          },
          {
        id: "cool-4",
        image: "assets/components/cooler.jpg",
        name: "Lian Li Galahad II Trinity 360mm ARGB Liquid Cooler",
            desc: "Triple 120mm Daisy-Chain ARGB fans, 3200RPM pump, 3 swappable pump caps",
            price: 13400,
            tags: ["360mm Liquid", "Daisy Chain Fans"]
          },
          {
        id: "cool-5",
        image: "assets/components/cooler.jpg",
        name: "NZXT Kraken Elite 360 RGB Liquid Cooler with LCD",
            desc: "2.36\" 640x640 60Hz Wide-Angle TFT LCD display for temps/GIFs, Asetek pump",
            price: 24800,
            tags: ["360mm Liquid", "2.36\" LCD Display", "Extreme"]
          }
        ]
      },
      psu: {
        title: "Power Supply Unit (PSU)",
        subtitle: "Clean power delivery & PCIe 5.0 12V-2x6 connectors",
        step: "08",
        items: [
          {
        id: "psu-1",
        image: "assets/components/psu.jpg",
        name: "Cooler Master MWE 650W Bronze V2",
            desc: "80+ Bronze Certified, Flat black cables, 120mm HDB silent fan",
            price: 4900,
            watts: 650,
            tags: ["650W", "80+ Bronze"]
          },
          {
        id: "psu-2",
        image: "assets/components/psu.jpg",
        name: "Corsair RM850e 850W 80+ Gold Fully Modular",
            desc: "ATX 3.0 & PCIe 5.0 12VHPWR native cable, 105°C Japanese capacitors",
            price: 10800,
            watts: 850,
            tags: ["850W", "80+ Gold", "ATX 3.0", "PCIe 5.0"]
          },
          {
        id: "psu-3",
        image: "assets/components/psu.jpg",
        name: "Seasonic Focus GX-1000 1000W 80+ Gold Modular",
            desc: "ATX 3.0 Ready, 135mm FDB fan with Hybrid Silent Fan Control, 10-Yr warranty",
            price: 16900,
            watts: 1000,
            tags: ["1000W", "80+ Gold", "ATX 3.0", "Seasonic"]
          },
          {
        id: "psu-4",
        image: "assets/components/psu.jpg",
        name: "Corsair HX1200 1200W 80+ Platinum Modular",
            desc: "Industrial-grade 80+ Platinum efficiency, Zero RPM fan mode, Heavy duty",
            price: 23500,
            watts: 1200,
            tags: ["1200W", "80+ Platinum", "Multi-GPU Ready"]
          },
          {
        id: "psu-5",
        image: "assets/components/psu.jpg",
        name: "ASUS ROG Thor 1600W Titanium ATX 3.0",
            desc: "GaN MOSFETs, OLED real-time wattage display, 135mm Axial-tech PWM fan (Recommended for RTX 5090)",
            price: 48000,
            watts: 1600,
            tags: ["1600W", "80+ Titanium", "OLED Wattage Meter", "RTX 5090 Ready"]
          }
        ]
      },
      chassis: {
        title: "Chassis / Cabinet",
        subtitle: "Airflow dynamics, clearance & tempered glass aesthetics",
        step: "09",
        items: [
          {
        id: "case-1",
        image: "assets/components/chassis.jpg",
        name: "Antec AX61 Elite ARGB Mid-Tower",
            desc: "Full mesh front panel, 4x 120mm ARGB fans included, tempered glass side",
            price: 3900,
            tags: ["Mid Tower", "4x ARGB Fans", "Mesh Front"]
          },
          {
        id: "case-2",
        image: "assets/components/chassis.jpg",
        name: "Corsair 4000D Airflow High-Airflow Mid-Tower",
            desc: "Steel front panel, RapidRoute cable management, supports up to 360mm rad",
            price: 6800,
            tags: ["Mid Tower", "RapidRoute", "Steel Airflow"]
          },
          {
        id: "case-3",
        image: "assets/components/chassis.jpg",
        name: "NZXT H9 Flow Dual-Chamber Panoramic ATX",
            desc: "Seamless wrap-around tempered glass, dual chamber thermal isolation, 10 fan mounts",
            price: 14500,
            tags: ["Dual Chamber", "Panoramic Glass", "High Airflow"]
          },
          {
        id: "case-4",
        image: "assets/components/chassis.jpg",
        name: "Lian Li O11 Dynamic EVO XL Full Tower",
            desc: "Supports 420mm radiators, upright GPU mounting, maximum clearance for RTX 5090",
            price: 21900,
            tags: ["Full Tower", "RTX 5090 Ready", "Showcase"]
          }
        ]
      },
      os: {
        title: "Operating System & Security",
        subtitle: "Licensed operating system & administrative toolchains",
        step: "10",
        items: [
          {
        id: "os-0",
        image: "assets/components/os.jpg",
        name: "Install My Own OS (FreeDOS / Linux Self-Install)",
            desc: "Zero pre-installed OS license; system is stress tested using diagnostic boot environment",
            price: 0,
            tags: ["₹0", "Self Install"]
          },
          {
        id: "os-1",
        image: "assets/components/os.jpg",
        name: "Ubuntu 24.04 LTS Linux (AI & Developer Suite)",
            desc: "Configured with Linux 6.8 kernel, NVIDIA CUDA drivers & Docker toolchains pre-installed",
            price: 0,
            tags: ["Free Open-Source", "CUDA Ready"]
          },
          {
        id: "os-2",
        image: "assets/components/os.jpg",
        name: "Genuine Windows 11 Home 64-bit OEM License",
            desc: "Lifetime official Microsoft OEM digital license & COA certificate",
            price: 8900,
            tags: ["Windows 11 Home", "Official OEM"]
          },
          {
        id: "os-3",
        image: "assets/components/os.jpg",
        name: "Genuine Windows 11 Pro 64-bit Commercial OEM",
            desc: "Includes BitLocker drive encryption, Remote Desktop Host & Windows Sandbox",
            price: 11900,
            tags: ["Windows 11 Pro", "BitLocker & RDP"]
          }
        ]
      },
      monitor: {
        title: "Display / Monitor",
        subtitle: "High refresh gaming & color-calibrated studio displays",
        step: "11",
        items: [
          {
        id: "mon-0",
        image: "assets/components/monitor.jpg",
        name: "No Monitor (Tower Unit Only)",
            desc: "Client supplies existing monitor setup",
            price: 0,
            tags: ["Tower Only"]
          },
          {
        id: "mon-1",
        image: "assets/components/monitor.jpg",
        name: "24\" Dell Professional FHD (1920x1080) 75Hz IPS",
            desc: "Anti-glare IPS, height/tilt/swivel adjustable stand, ComfortView Plus",
            price: 11200,
            tags: ["24-Inch FHD", "IPS", "Height Adjustable"]
          },
          {
        id: "mon-2",
        image: "assets/components/monitor.jpg",
        name: "27\" LG UltraGear QHD (2560x1440) 180Hz 1ms Nano IPS",
            desc: "HDR400, 98% DCI-P3 color gamut, NVIDIA G-SYNC & AMD FreeSync Premium",
            price: 23800,
            tags: ["27-Inch 1440p", "180Hz 1ms", "Nano IPS"]
          },
          {
        id: "mon-3",
        image: "assets/components/monitor.jpg",
        name: "32\" BenQ PD3205U 4K UHD (3840x2160) Designer Monitor",
            desc: "100% sRGB & Rec.709, Calman verified, Thunderbolt 3 65W power delivery",
            price: 54500,
            tags: ["32-Inch 4K", "Calman Verified", "Color Accurate"]
          },
          {
        id: "mon-4",
        image: "assets/components/monitor.jpg",
        name: "34\" Samsung Odyssey OLED G8 Curved Ultrawide (3440x1440)",
            desc: "175Hz, 0.03ms response time, Neo Quantum Processor, Silver metal chassis",
            price: 89000,
            tags: ["34-Inch OLED", "0.03ms Ultrawide", "175Hz"]
          },
          {
        id: "mon-5",
        image: "assets/components/monitor.jpg",
        name: "49\" Samsung Odyssey Neo G9 Dual QHD 240Hz 1000R Curve",
            desc: "Quantum Mini-LED, 2048 local dimming zones, HDR2000, 32:9 Super Ultrawide",
            price: 145000,
            tags: ["49-Inch Dual QHD", "Mini-LED", "240Hz"]
          }
        ]
      },
      keyboard_mouse: {
        title: "Keyboard & Mouse",
        subtitle: "Productivity combos & mechanical switches",
        step: "12",
        items: [
          {
        id: "km-0",
        image: "assets/components/keyboard_mouse.jpg",
        name: "None / Bring My Own",
            desc: "Client supplies existing input peripherals",
            price: 0,
            tags: ["Peripheral Excluded"]
          },
          {
        id: "km-1",
        image: "assets/components/keyboard_mouse.jpg",
        name: "Logitech MK120 Wired Keyboard & Optical Mouse",
            desc: "Spill-resistant keyboard, 1000 DPI high-definition optical tracking",
            price: 750,
            tags: ["Wired Combo", "Spill Resistant"]
          },
          {
        id: "km-2",
        image: "assets/components/keyboard_mouse.jpg",
        name: "Logitech MK295 Silent Wireless Combo",
            desc: "SilentTouch technology removes 90% of typing sound, 2.4GHz USB nano receiver",
            price: 1950,
            tags: ["Wireless Silent", "36-Mo Battery"]
          },
          {
        id: "km-3",
        image: "assets/components/keyboard_mouse.jpg",
        name: "Redragon K552 RGB Mechanical Keyboard + Razer DeathAdder",
            desc: "Dust-proof blue mechanical switches + Razer 6400 DPI optical sensor mouse",
            price: 4400,
            tags: ["RGB Mechanical", "Razer DeathAdder"]
          },
          {
        id: "km-4",
        image: "assets/components/keyboard_mouse.jpg",
        name: "Keychron V1 QMK Custom Mechanical + Logitech G502 HERO",
            desc: "Hot-swappable Keychron K Pro switches, PBT keycaps + 25,600 DPI HERO sensor",
            price: 11200,
            tags: ["Keychron Custom", "Logitech G502 HERO"]
          }
        ]
      },
      mousepad: {
        title: "Mouse Pad & Desk Mat",
        subtitle: "From compact non-slip rubber pads to military Cordura desk mats",
        step: "13",
        items: [
          {
        id: "pad-0",
        image: "assets/components/mousepad.jpg",
        name: "None / Not Needed",
            desc: "No mouse pad included",
            price: 0,
            tags: ["₹0", "None"]
          },
          {
        id: "pad-1",
        image: "assets/components/mousepad.jpg",
        name: "Standard Non-Slip Rubber Base Fabric Mouse Pad",
            desc: "250 x 210 x 3mm compact weave fabric, textured rubber non-slip underside",
            price: 250,
            tags: ["250x210mm", "Non-Slip Rubber"]
          },
          {
        id: "pad-2",
        image: "assets/components/mousepad-rgb.jpg",
        name: "Krishna Infotech Speed Matrix Extended Desk Mat",
            desc: "900 x 400 x 4mm extra-large desk mat, heavy anti-fray stitched border, water-resistant micro-texture",
            price: 799,
            tags: ["900x400mm Extended", "Anti-Fray Stitched", "Water Resistant"]
          },
          {
        id: "pad-3",
        image: "assets/components/mousepad-rgb.jpg",
        name: "Razer Gigantus V2 XXL Thick Cloth Gaming Desk Mat",
            desc: "940 x 410 x 4mm high-density rubber foam, textured micro-weave cloth for speed & control",
            price: 1950,
            tags: ["940x410mm XXL", "Razer Micro-Weave"]
          },
          {
        id: "pad-4",
        image: "assets/components/mousepad.jpg",
        name: "Cordura Military Cloth Ultra-Glide Pro Desk Mat",
            desc: "1000 x 500 x 4mm ballistic Cordura fabric, impervious to liquid stains, ultra-low dynamic friction",
            price: 2800,
            tags: ["1000x500mm Giant", "Ballistic Cordura", "Military Grade"]
          }
        ]
      },
      audio: {
        title: "Audio & Communication",
        subtitle: "Team communication headsets & reference studio monitors",
        step: "14",
        items: [
          {
        id: "audio-0",
        image: "assets/components/audio.jpg",
        name: "None / Not Needed",
            desc: "Audio peripherals not required",
            price: 0,
            tags: ["None"]
          },
          {
        id: "audio-1",
        image: "assets/components/audio.jpg",
        name: "Ant Esports H530 RGB Over-Ear Gaming Headset",
            desc: "40mm directional drivers, omnidirectional noise isolation mic, 3.5mm + USB",
            price: 950,
            tags: ["40mm Drivers", "RGB"]
          },
          {
        id: "audio-2",
        image: "assets/components/audio.jpg",
        name: "HyperX Cloud II 7.1 Surround Sound Headset",
            desc: "53mm drivers, hardware audio control box, noise-cancelling detachable mic",
            price: 6800,
            tags: ["7.1 Surround", "53mm Drivers", "HyperX"]
          },
          {
        id: "audio-3",
        image: "assets/components/audio.jpg",
        name: "Audio-Technica ATH-M50x Professional Studio Headphones",
            desc: "45mm large-aperture drivers, 90° swiveling earcups, exceptional acoustic clarity",
            price: 13500,
            tags: ["Studio Reference", "Acoustic Accuracy"]
          }
        ]
      },
      ups: {
        title: "UPS & Voltage Protection",
        subtitle: "Battery backup, AVR & pure sine wave line protection",
        step: "15",
        items: [
          {
        id: "ups-0",
        image: "assets/components/ups.jpg",
        name: "None / Client Facility UPS",
            desc: "Location has dedicated inverter or commercial UPS grid",
            price: 0,
            tags: ["Excluded"]
          },
          {
        id: "ups-1",
        image: "assets/components/ups.jpg",
        name: "APC Back-UPS 600VA / 360W Compact Battery Backup",
            desc: "3 battery-backed India 3-pin sockets, surge protection for basic desktop",
            price: 3600,
            tags: ["600VA / 360W", "APC by Schneider"]
          },
          {
        id: "ups-2",
        image: "assets/components/ups.jpg",
        name: "APC Back-UPS Pro 1100VA / 660W Line-Interactive UPS",
            desc: "LCD status screen, Automatic Voltage Regulation (AVR), 4x 6A battery sockets",
            price: 8900,
            tags: ["1100VA / 660W", "Line Interactive", "AVR"]
          },
          {
        id: "ups-3",
        image: "assets/components/ups.jpg",
        name: "APC Smart-UPS 2200VA / 1980W Pure Sine Wave Online LCD",
            desc: "Zero transfer time, pure sine wave output (Mandatory for RTX 4090 & RTX 5090 rigs)",
            price: 38500,
            tags: ["2200VA / 1980W", "Pure Sine Wave", "RTX 5090 Certified"]
          }
        ]
      },
      assembly: {
        title: "Precision Assembly & Multi-Stage Quality Assurance",
        subtitle: "Engineering labor & certified 48-hour burn-in stress testing",
        step: "16",
        items: [
          {
        id: "serv-1",
        image: "assets/components/assembly.jpg",
        name: "Krishna Infotech In-House Master Assembly & 48-Hour Burn-In Stress Certification",
            desc: "Multi-stage Velcro cable routing, Thermal Grizzly Kryonaut application, Dual BIOS update, MemTest86, 48-Hour Prime95 & FurMark burn-in testing certificate",
            price: 0,
            tags: ["FREE COMPLIMENTARY", "₹3,500 Value Included", "48-Hr Certified"]
          }
        ]
      }
    };

    // Preset Configurations
    const BUILDER_PRESETS = {
      office: {
        cpu: "cpu-1",
        motherboard: "mb-1",
        gpu: "gpu-0",
        ram: "ram-1",
        ssd: "ssd-1",
        hdd: "hdd-0",
        cooler: "cool-1",
        psu: "psu-1",
        chassis: "case-1",
        os: "os-2",
        monitor: "mon-1",
        keyboard_mouse: "km-1",
        mousepad: "pad-1",
        audio: "audio-0",
        ups: "ups-1",
        assembly: "serv-1"
      },
      gaming: {
        cpu: "cpu-5",
        motherboard: "mb-3",
        gpu: "gpu-2",
        ram: "ram-2",
        ssd: "ssd-2",
        hdd: "hdd-0",
        cooler: "cool-3",
        psu: "psu-2",
        chassis: "case-2",
        os: "os-3",
        monitor: "mon-2",
        keyboard_mouse: "km-3",
        mousepad: "pad-2",
        audio: "audio-2",
        ups: "ups-2",
        assembly: "serv-1"
      },
      studio: {
        cpu: "cpu-2",
        motherboard: "mb-2",
        gpu: "gpu-3",
        ram: "ram-3",
        ssd: "ssd-3",
        hdd: "hdd-2",
        cooler: "cool-4",
        psu: "psu-3",
        chassis: "case-3",
        os: "os-3",
        monitor: "mon-3",
        keyboard_mouse: "km-4",
        mousepad: "pad-3",
        audio: "audio-3",
        ups: "ups-2",
        assembly: "serv-1"
      },
      rtx5090: {
        cpu: "cpu-6",
        motherboard: "mb-4",
        gpu: "gpu-5",
        ram: "ram-3",
        ssd: "ssd-4",
        hdd: "hdd-3",
        cooler: "cool-5",
        psu: "psu-5",
        chassis: "case-4",
        os: "os-3",
        monitor: "mon-4",
        keyboard_mouse: "km-4",
        mousepad: "pad-4",
        audio: "audio-2",
        ups: "ups-3",
        assembly: "serv-1"
      }
    };

    // Active User Custom Rig State
    let currentBuild = { ...BUILDER_PRESETS.gaming };

    // Mode Switcher: 'catalog' | 'builder'
    window.switchViewMode = function(mode) {
      const catalogWrapper = document.getElementById('catalog-view-wrapper');
      const builderSection = document.getElementById('custom-builder-section');
      const catalogBtn = document.getElementById('view-mode-catalog-btn');
      const builderBtn = document.getElementById('view-mode-builder-btn');
      const announcementBanner = document.getElementById('builder-announcement-banner');

      if (mode === 'builder') {
        if (catalogWrapper) catalogWrapper.style.display = 'none';
        if (builderSection) builderSection.style.display = 'block';
        if (catalogBtn) catalogBtn.classList.remove('active');
        if (builderBtn) builderBtn.classList.add('active');
        if (announcementBanner) announcementBanner.style.display = 'none';
        builderSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        if (catalogWrapper) catalogWrapper.style.display = 'block';
        if (builderSection) builderSection.style.display = 'none';
        if (catalogBtn) catalogBtn.classList.add('active');
        if (builderBtn) builderBtn.classList.remove('active');
        if (announcementBanner) announcementBanner.style.display = 'flex';
      }
    };

    // Render Custom Builder Category Steps
    function renderCustomBuilder() {
      const container = document.getElementById('builder-steps-container');
      if (!container) return;

      container.innerHTML = Object.entries(CUSTOM_COMPONENTS).map(([catKey, cat]) => {
        const selectedId = currentBuild[catKey];

        const tilesHtml = cat.items.map(item => {
          const isSelected = item.id === selectedId;
          const selectedClass = isSelected ? 'selected' : '';
          const isFlagshipGpu = item.id === 'gpu-5';
          const isStandaloneEligible = item.price > 0;

          return `
            <div class="component-tile ${selectedClass}" id="tile-${item.id}" onclick="selectComponent('${catKey}', '${item.id}')">
              <div class="tile-top-row">
                <span class="tile-name" style="${isFlagshipGpu ? 'color: var(--accent-ink);' : ''}">${item.name}</span>
                <div class="tile-radio"></div>
              </div>
              <p class="tile-specs-desc">${item.desc}</p>
              
              <div class="tile-meta-tags">
                ${(item.tags || []).map(t => `<span class="tile-tag ${t.includes('5090') || t.includes('FREE') ? 'highlight' : ''}">${t}</span>`).join('')}
              </div>

              <div class="tile-bottom-row">
                <span class="tile-price">${item.price === 0 ? 'Included (₹0)' : formatINR(item.price)}</span>
                ${isStandaloneEligible ? `
                  <button type="button" class="btn-tile-standalone" onclick="addStandaloneComponentToCart('${catKey}', '${item.id}', event)" title="Add this item individually to cart">
                    + Cart Only
                  </button>
                ` : ''}
              </div>
            </div>
          `;
        }).join('');

        return `
          <div class="builder-step-card" id="step-card-${catKey}">
            <div class="builder-step-header">
              <div class="builder-step-title-wrap">
                <img src="assets/components/${catKey}.jpg" alt="${cat.title}" class="step-cat-thumb" onerror="this.style.display='none'">
                <div>
                  <div style="display: flex; align-items: center; gap: 8px;">
                    <span class="builder-step-num">STEP ${cat.step}</span>
                    <h3 class="builder-step-title" style="margin: 0;">${cat.title}</h3>
                  </div>
                  <span class="builder-step-subtitle">${cat.subtitle}</span>
                </div>
              </div>
            </div>
            <div class="builder-tiles-grid">
              ${tilesHtml}
            </div>
          </div>
        `;
      }).join('');

      updateBuilderUI();
    }

    // Select Component & Harmonize
    window.selectComponent = function(catKey, itemId) {
      currentBuild[catKey] = itemId;

      // Socket Auto-Harmonization between CPU and Motherboard
      if (catKey === 'cpu') {
        const cpuItem = CUSTOM_COMPONENTS.cpu.items.find(i => i.id === itemId);
        const currentMb = CUSTOM_COMPONENTS.motherboard.items.find(i => i.id === currentBuild.motherboard);
        if (cpuItem && currentMb && cpuItem.socket !== currentMb.socket) {
          const matchingMb = CUSTOM_COMPONENTS.motherboard.items.find(m => m.socket === cpuItem.socket);
          if (matchingMb) {
            currentBuild.motherboard = matchingMb.id;
            showToast(`Auto-harmonized Motherboard to ${matchingMb.name} for socket ${cpuItem.socket}`);
          }
        }
      } else if (catKey === 'motherboard') {
        const mbItem = CUSTOM_COMPONENTS.motherboard.items.find(i => i.id === itemId);
        const currentCpu = CUSTOM_COMPONENTS.cpu.items.find(i => i.id === currentBuild.cpu);
        if (mbItem && currentCpu && mbItem.socket !== currentCpu.socket) {
          const matchingCpu = CUSTOM_COMPONENTS.cpu.items.find(c => c.socket === mbItem.socket);
          if (matchingCpu) {
            currentBuild.cpu = matchingCpu.id;
            showToast(`Auto-harmonized CPU to ${matchingCpu.name} for socket ${mbItem.socket}`);
          }
        }
      }

      // Re-render tiles active states
      const cat = CUSTOM_COMPONENTS[catKey];
      if (cat) {
        cat.items.forEach(it => {
          const tile = document.getElementById(`tile-${it.id}`);
          if (tile) {
            if (it.id === currentBuild[catKey]) tile.classList.add('selected');
            else tile.classList.remove('selected');
          }
        });
      }

      if (catKey === 'cpu') {
        CUSTOM_COMPONENTS.motherboard.items.forEach(it => {
          const tile = document.getElementById(`tile-${it.id}`);
          if (tile) {
            if (it.id === currentBuild.motherboard) tile.classList.add('selected');
            else tile.classList.remove('selected');
          }
        });
      }

      updateBuilderUI();
    };

    // Calculate Metrics (Wattage, Sockets, Totals)
    function calculateCustomBuildMetrics() {
      let totalWatts = 90; // base mobo, fans, ram, chipsets
      let totalPrice = 0;
      let selectedItems = {};

      for (const [catKey, catData] of Object.entries(CUSTOM_COMPONENTS)) {
        const selectedId = currentBuild[catKey];
        const item = catData.items.find(i => i.id === selectedId) || catData.items[0];
        selectedItems[catKey] = item;
        totalPrice += item.price;
        if (item.watts) totalWatts += item.watts;
      }

      const selectedPsu = selectedItems.psu;
      const psuCapacity = selectedPsu ? (selectedPsu.watts || 850) : 850;
      const psuHeadroomPercent = Math.round(((psuCapacity - totalWatts) / psuCapacity) * 100);

      // Check socket compatibility
      const cpuSocket = selectedItems.cpu ? selectedItems.cpu.socket : null;
      const mbSocket = selectedItems.motherboard ? selectedItems.motherboard.socket : null;
      let isCompatible = true;
      let compatMessage = "System Configuration Verified: 100% Component Compatibility";

      if (cpuSocket && mbSocket && cpuSocket !== mbSocket) {
        isCompatible = false;
        compatMessage = `⚠️ Socket Mismatch: ${selectedItems.cpu.name} (${cpuSocket}) requires compatible ${cpuSocket} motherboard.`;
      } else if (psuCapacity < totalWatts) {
        isCompatible = false;
        compatMessage = `⚠️ PSU Insufficient: Peak power draw (${totalWatts}W) exceeds selected PSU (${psuCapacity}W). Upgrade PSU.`;
      } else if (selectedItems.gpu && selectedItems.gpu.id === 'gpu-5' && psuCapacity < 1000) {
        isCompatible = false;
        compatMessage = `⚠️ RTX 5090 Advisory: Minimum 1000W+ PSU mandatory for 600W GPU power envelope.`;
      }

      const cgst = Math.round(totalPrice * 0.09);
      const sgst = Math.round(totalPrice * 0.09);
      const grandTotal = totalPrice + cgst + sgst;

      return {
        totalPrice,
        cgst,
        sgst,
        grandTotal,
        totalWatts,
        psuCapacity,
        psuHeadroomPercent,
        isCompatible,
        compatMessage,
        selectedItems
      };
    }

    // Refresh Sticky Summary Deck
    function updateBuilderUI() {
      const metrics = calculateCustomBuildMetrics();

      // Live Rig Image Preview
      const liveRigImg = document.getElementById('builder-live-rig-img');
      const liveRigLabel = document.getElementById('deck-rig-label');
      if (liveRigImg) {
        if (currentBuild.gpu === 'gpu-5') {
          liveRigImg.src = 'assets/components/rtx-5090.jpg';
          if (liveRigLabel) liveRigLabel.textContent = 'RTX 5090 32GB FLAGSHIP RIG';
        } else if (currentBuild.cpu === 'cpu-3' || currentBuild.cpu === 'cpu-6') {
          liveRigImg.src = 'assets/products/pc-1.jpg';
          if (liveRigLabel) liveRigLabel.textContent = 'EXTREME LIQUID WORKSTATION';
        } else {
          liveRigImg.src = 'assets/products/pc-3.jpg';
          if (liveRigLabel) liveRigLabel.textContent = 'CUSTOM DESKTOP RIG';
        }
      }

      // Wattage Meter
      const wattageNumElem = document.getElementById('builder-wattage-num');
      const wattageBarElem = document.getElementById('builder-wattage-bar');
      const headroomElem = document.getElementById('builder-psu-headroom');

      if (wattageNumElem) wattageNumElem.textContent = `${metrics.totalWatts}W`;
      if (wattageBarElem) {
        const percent = Math.min(100, Math.round((metrics.totalWatts / metrics.psuCapacity) * 100));
        wattageBarElem.style.width = `${percent}%`;
        if (percent > 90) {
          wattageBarElem.style.background = '#ef4444';
        } else if (percent > 75) {
          wattageBarElem.style.background = '#f59e0b';
        } else {
          wattageBarElem.style.background = 'linear-gradient(90deg, #10b981 0%, #7c3aed 100%)';
        }
      }
      if (headroomElem) {
        headroomElem.textContent = `Selected PSU: ${metrics.psuCapacity}W (${metrics.psuHeadroomPercent}% Safety Headroom)`;
      }

      // Compatibility Badge
      const compatStatusElem = document.getElementById('builder-compat-status');
      const compatTextElem = document.getElementById('builder-compat-text');
      if (compatStatusElem && compatTextElem) {
        compatTextElem.textContent = metrics.compatMessage;
        if (metrics.isCompatible) {
          compatStatusElem.className = 'compat-status-card ok';
          compatStatusElem.innerHTML = `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg><span>${metrics.compatMessage}</span>`;
        } else {
          compatStatusElem.className = 'compat-status-card warning';
          compatStatusElem.innerHTML = `<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg><span>${metrics.compatMessage}</span>`;
        }
      }

      // Selected Items List
      const selectedListElem = document.getElementById('builder-selected-items-list');
      if (selectedListElem) {
        selectedListElem.innerHTML = Object.entries(metrics.selectedItems).map(([key, item]) => `
          <div class="deck-item-row">
            <span class="deck-item-label">${CUSTOM_COMPONENTS[key].title.split(' ')[0]}:</span>
            <span class="deck-item-val" title="${item.name}">${item.name}</span>
            <span class="deck-item-price">${item.price === 0 ? '₹0' : formatINR(item.price)}</span>
          </div>
        `).join('');
      }

      // Financials
      const subtotalElem = document.getElementById('builder-subtotal');
      const gstElem = document.getElementById('builder-gst');
      const grandTotalElem = document.getElementById('builder-grand-total');

      if (subtotalElem) subtotalElem.textContent = formatINR(metrics.totalPrice);
      if (gstElem) gstElem.textContent = `${formatINR(metrics.cgst + metrics.sgst)} (18%)`;
      if (grandTotalElem) grandTotalElem.textContent = formatINR(metrics.grandTotal);
    }

    // Apply Presets
    window.applyPreset = function(presetKey) {
      const preset = BUILDER_PRESETS[presetKey];
      if (!preset) return;
      currentBuild = { ...preset };
      renderCustomBuilder();
      const names = {
        office: "Office / Productivity (₹43k)",
        gaming: "1440p Esports Rig (₹1.44L)",
        studio: "4K AI Studio (₹2.78L)",
        rtx5090: "RTX 5090 Flagship Rig (₹5.68L)"
      };
      showToast(`Loaded Preset: ${names[presetKey] || presetKey}`);
    };

    // Reset Custom Build
    window.resetCustomBuild = function() {
      applyPreset('gaming');
    };

    // Add Complete Custom Rig to Cart
    window.addCustomBuildToCart = function() {
      const metrics = calculateCustomBuildMetrics();
      const cpuShort = metrics.selectedItems.cpu.name.split(' (')[0];
      const gpuShort = metrics.selectedItems.gpu.name.split(' (')[0];
      const buildName = `Custom Rig: ${cpuShort} + ${gpuShort}`;
      const customId = 'CUSTOM-PC-' + Date.now();

      const specsList = {};
      for (const [key, item] of Object.entries(metrics.selectedItems)) {
        specsList[CUSTOM_COMPONENTS[key].title] = `${item.name} (${item.price === 0 ? '₹0' : formatINR(item.price)})`;
      }

      const cartItem = {
        id: customId,
        name: buildName,
        image: 'assets/products/pc-1.jpg',
        unitPrice: metrics.totalPrice,
        priceFormatted: formatINR(metrics.totalPrice),
        warrantyText: '✓ 3-Year Component Warranty + 1-Year Free Onsite Service',
        categoryTitle: 'BESPOKE WORKSTATION & GAMING RIG',
        quantity: 1,
        isCustomBuild: true,
        specs: specsList
      };

      shoppingCart.push(cartItem);
      saveCart();
      toggleCartDrawer(true);
      showToast(`Added Bespoke Custom Rig to Cart (${formatINR(metrics.totalPrice)})`);
    };

    // Add Standalone Component to Cart
    window.addStandaloneComponentToCart = function(catKey, compId, event) {
      if (event) event.stopPropagation();
      const cat = CUSTOM_COMPONENTS[catKey];
      if (!cat) return;
      const item = cat.items.find(i => i.id === compId);
      if (!item || item.price === 0) return;

      const existingIndex = shoppingCart.findIndex(i => i.id === item.id);
      if (existingIndex > -1) {
        shoppingCart[existingIndex].quantity += 1;
      } else {
        shoppingCart.push({
          id: item.id,
          name: item.name,
          image: item.image || ('assets/components/' + catKey + '.jpg'),
          unitPrice: item.price,
          priceFormatted: formatINR(item.price),
          warrantyText: '✓ Official Brand Warranty',
          categoryTitle: `${cat.title.toUpperCase()} • COMPONENT`,
          quantity: 1
        });
      }
      saveCart();
      showToast(`Added "${item.name}" to Cart (${formatINR(item.price)})`);
    };

    // Order Custom Rig Direct via WhatsApp
    window.orderCustomRigViaWhatsApp = function() {
      const metrics = calculateCustomBuildMetrics();
      const cpuShort = metrics.selectedItems.cpu.name.split(' (')[0];
      const gpuShort = metrics.selectedItems.gpu.name.split(' (')[0];

      let msg = `Hello Vikrant,%0A%0A*CUSTOM PC RIG ORDER REQUEST:*%0A*Rig Title:* Custom ${cpuShort} + ${gpuShort}%0A*Power Draw:* ${metrics.totalWatts}W (PSU: ${metrics.psuCapacity}W)%0A%0A*Configured Component Breakdown:*%0A`;
      for (const [key, item] of Object.entries(metrics.selectedItems)) {
        msg += `• *${CUSTOM_COMPONENTS[key].title.split(' ')[0]}:* ${item.name} (${item.price === 0 ? '₹0' : formatINR(item.price)})%0A`;
      }
      msg += `%0A*Subtotal:* ${formatINR(metrics.totalPrice)}%0A*GST (18%):* ${formatINR(metrics.cgst + metrics.sgst)}%0A*Grand Total:* ${formatINR(metrics.grandTotal)}%0A%0APlease share delivery schedule and official GST invoice.`;

      window.open(`https://wa.me/919819557374?text=${msg}`, '_blank');
    };

    // Copy Build Specs to Clipboard
    window.copyBuildSpecs = function() {
      const metrics = calculateCustomBuildMetrics();
      let text = `=== KRISHNA INFOTECH BESPOKE PC RIG SPEC SHEET ===\n`;
      text += `Configuration: ${metrics.selectedItems.cpu.name.split(' (')[0]} + ${metrics.selectedItems.gpu.name.split(' (')[0]}\n`;
      text += `Estimated Peak Power: ${metrics.totalWatts}W | PSU Capacity: ${metrics.psuCapacity}W (${metrics.psuHeadroomPercent}% Headroom)\n`;
      text += `Status: ${metrics.compatMessage}\n\n`;
      text += `COMPONENT BREAKDOWN:\n`;
      for (const [key, item] of Object.entries(metrics.selectedItems)) {
        text += `- ${CUSTOM_COMPONENTS[key].title}: ${item.name} [${item.price === 0 ? '₹0' : formatINR(item.price)}]\n`;
      }
      text += `\nFINANCIALS:\n`;
      text += `Subtotal (Taxable): ${formatINR(metrics.totalPrice)}\n`;
      text += `GST (18% CGST + SGST): ${formatINR(metrics.cgst + metrics.sgst)}\n`;
      text += `Grand Total: ${formatINR(metrics.grandTotal)}\n`;
      text += `Warranty: 3-Year Component Warranty + 1-Year Free Onsite Service\n`;

      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
          showToast('✓ Custom PC Spec Sheet copied to clipboard!');
        }).catch(() => {
          showToast('Spec sheet ready in console.');
        });
      } else {
        showToast('Spec sheet generated.');
      }
    };

    // =========================================================================
    // SHOPPING CART & SPEC MODAL ENGINE
    // =========================================================================
    let shoppingCart = JSON.parse(localStorage.getItem('krishna_cart') || '[]');

    function formatINR(number) {
      return '₹' + number.toLocaleString('en-IN');
    }

    function saveCart() {
      localStorage.setItem('krishna_cart', JSON.stringify(shoppingCart));
      updateCartUI();
    }

    function calculateCartFinancials() {
      const subtotal = shoppingCart.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);
      const cgst = Math.round(subtotal * 0.09);
      const sgst = Math.round(subtotal * 0.09);
      const grandTotal = subtotal + cgst + sgst;
      return { subtotal, cgst, sgst, grandTotal };
    }

    function updateCartUI() {
      const totalCount = shoppingCart.reduce((sum, item) => sum + item.quantity, 0);
      const headerCount = document.getElementById('header-cart-count');
      const mobileCount = document.getElementById('mobile-cart-count');
      const listContainer = document.getElementById('cart-items-list');
      const detailsFormBox = document.getElementById('cart-details-form-box');

      const subtotalElem = document.getElementById('cart-subtotal');
      const gstElem = document.getElementById('cart-gst');
      const grandTotalElem = document.getElementById('cart-grand-total');

      if (headerCount) headerCount.textContent = totalCount;
      if (mobileCount) mobileCount.textContent = totalCount;

      const { subtotal, cgst, sgst, grandTotal } = calculateCartFinancials();
      if (subtotalElem) subtotalElem.textContent = formatINR(subtotal);
      if (gstElem) gstElem.textContent = `${formatINR(cgst + sgst)} (18%)`;
      if (grandTotalElem) grandTotalElem.textContent = formatINR(grandTotal);

      if (detailsFormBox) {
        detailsFormBox.style.display = shoppingCart.length > 0 ? 'block' : 'none';
      }

      if (!listContainer) return;

      if (shoppingCart.length === 0) {
        listContainer.innerHTML = `
          <div class="cart-empty-state">
            <svg width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" style="margin: 0 auto 12px; display: block; opacity: 0.5;"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
            <p style="font-size: 14px; margin-bottom: 8px; color: #fff;">Your cart is currently empty</p>
            <span style="font-size: 12px;">Click "Add to Cart" on any PC, CCTV camera, or refurbished laptop.</span>
          </div>
        `;
      } else {
        listContainer.innerHTML = shoppingCart.map((item, index) => {
          let customSpecsHtml = '';
          if (item.isCustomBuild && item.specs) {
            const specsEntries = Object.entries(item.specs);
            customSpecsHtml = `
              <div style="margin-top: 6px;">
                <button type="button" class="btn-tile-standalone" onclick="toggleCartCustomSpecs(${index})" style="font-size: 11px; padding: 2px 7px;">
                  View Rig Specs (${specsEntries.length} Parts) ▾
                </button>
                <div id="cart-custom-specs-${index}" style="display: none; margin-top: 6px; padding: 8px; background: rgba(0,0,0,0.4); border-radius: 4px; font-size: 11px; max-height: 160px; overflow-y: auto;">
                  ${specsEntries.map(([k, v]) => `
                    <div style="display: flex; justify-content: space-between; gap: 6px; margin-bottom: 3px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 2px;">
                      <span style="color: var(--text-muted);">${k}:</span>
                      <span style="color: #ffffff; text-align: right;">${v}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            `;
          }

          return `
            <div class="cart-item-card">
              <div style="display: flex; gap: 12px; align-items: flex-start;">
                <img src="${item.image || 'assets/products/' + item.id + '.jpg'}" alt="${item.name}" class="cart-item-thumb" onerror="this.onerror=null; this.src='assets/logo-emblem.png'">
                <div style="flex: 1; min-width: 0;">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px;">
                    <div class="cart-item-title">${item.name}</div>
                    <button class="cart-item-remove-btn" onclick="removeFromCart(${index})" title="Remove item">✕</button>
                  </div>
                  <div class="cart-item-meta">${item.warrantyText}</div>
                  ${customSpecsHtml}
                  <div class="cart-item-actions">
                    <div class="cart-qty-stepper">
                      <button class="cart-qty-btn" onclick="changeQuantity(${index}, -1)">-</button>
                      <span class="cart-qty-num">${item.quantity}</span>
                      <button class="cart-qty-btn" onclick="changeQuantity(${index}, 1)">+</button>
                    </div>
                    <span style="font-size: 13px; font-weight: 600; font-family: var(--font-mono); color: var(--accent-ink);">
                      ${formatINR(item.unitPrice * item.quantity)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          `;
        }).join('');
      }
    }

    window.toggleCartCustomSpecs = function(index) {
      const el = document.getElementById(`cart-custom-specs-${index}`);
      if (el) {
        el.style.display = el.style.display === 'none' ? 'block' : 'none';
      }
    };

    window.toggleCartDrawer = function(open) {
      const drawer = document.getElementById('cart-drawer');
      const overlay = document.getElementById('cart-drawer-overlay');
      if (open) {
        drawer.classList.add('open');
        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
      } else {
        drawer.classList.remove('open');
        overlay.classList.remove('open');
        document.body.style.overflow = '';
      }
    };

    window.addToCart = function(productId, e) {
      if (e) e.stopPropagation();
      const product = PRODUCTS_DATA.find(p => p.id === productId);
      if (!product) return;

      const existingIndex = shoppingCart.findIndex(i => i.id === productId);
      if (existingIndex > -1) {
        shoppingCart[existingIndex].quantity += 1;
      } else {
        shoppingCart.push({
          id: product.id,
          name: product.name,
          image: product.image || ('assets/products/' + product.id + '.jpg'),
          unitPrice: product.unitPrice,
          priceFormatted: product.priceFormatted,
          warrantyText: product.warranty,
          categoryTitle: product.categoryTitle,
          quantity: 1
        });
      }

      saveCart();
      showToast(`Added to Cart: "${product.name}"`);
    };

    window.changeQuantity = function(index, delta) {
      if (!shoppingCart[index]) return;
      shoppingCart[index].quantity += delta;
      if (shoppingCart[index].quantity <= 0) {
        shoppingCart.splice(index, 1);
      }
      saveCart();
    };

    window.removeFromCart = function(index) {
      shoppingCart.splice(index, 1);
      saveCart();
    };

    window.clearCart = function() {
      shoppingCart = [];
      saveCart();
    };

    window.buyNow = function(productId, e) {
      if (e) e.stopPropagation();
      const product = PRODUCTS_DATA.find(p => p.id === productId);
      if (!product) return;

      const orderText = `Hello Vikrant,%0A%0A*INSTANT 1-CLICK ORDER REQUEST:*%0A• *Product:* ${encodeURIComponent(product.name)}%0A• *Category:* ${encodeURIComponent(product.categoryTitle)}%0A• *Unit Price:* ${encodeURIComponent(product.priceFormatted)}%0A• *Warranty:* ${encodeURIComponent(product.warranty)}%0A• *Quantity:* 1 Unit%0A%0APlease provide dispatch timeline & official GST invoice for Mumbai/Thane.`;
      window.open(`https://wa.me/919819557374?text=${orderText}`, '_blank');
    };

    // =========================================================================
    // OFFICIAL WHATSAPP QUOTATION ENGINE (Customer Name, Phone, Address & Total)
    // =========================================================================
    window.lastDispatchedWAMessage = "";

    window.sendQuotationToWhatsApp = function() {
      if (shoppingCart.length === 0) {
        showToast('Your cart is currently empty. Please add equipment before requesting a quotation.', true);
        return;
      }

      const nameInput = document.getElementById('cust-name');
      const phoneInput = document.getElementById('cust-phone');
      const addrInput = document.getElementById('cust-address') || document.getElementById('cust-location');
      const emailInput = document.getElementById('cust-email');

      const name = nameInput ? nameInput.value.trim() : '';
      const phone = phoneInput ? phoneInput.value.trim() : '';
      const address = addrInput ? addrInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';

      // Validate required customer details
      if (!name) {
        showToast('Please enter your Full Name / Company Name to dispatch quotation.', true);
        if (nameInput) {
          nameInput.classList.add('input-error');
          nameInput.focus();
          setTimeout(() => nameInput.classList.remove('input-error'), 1800);
        }
        return;
      }

      if (!phone) {
        showToast('Please enter your Mobile / WhatsApp Number to dispatch quotation.', true);
        if (phoneInput) {
          phoneInput.classList.add('input-error');
          phoneInput.focus();
          setTimeout(() => phoneInput.classList.remove('input-error'), 1800);
        }
        return;
      }

      if (!address) {
        showToast('Please enter your Full Delivery Address with Pincode to dispatch quotation.', true);
        if (addrInput) {
          addrInput.classList.add('input-error');
          addrInput.focus();
          setTimeout(() => addrInput.classList.remove('input-error'), 1800);
        }
        return;
      }

      // Save customer profile locally for convenience
      try {
        localStorage.setItem('krishna_customer', JSON.stringify({ name, phone, address, email }));
      } catch (e) {}

      // Calculate exact financials
      const { subtotal, cgst, sgst, grandTotal } = calculateCartFinancials();
      const quoteRef = 'KI-QT-2026-' + Math.floor(1000 + Math.random() * 9000);
      const now = new Date();
      const dateStr = now.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
      const timeStr = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });

      // Construct itemized equipment lines
      let itemsLines = '';
      shoppingCart.forEach((item, idx) => {
        const lineTotal = item.unitPrice * item.quantity;
        itemsLines += `${idx + 1}. *${item.name}*\n`;
        itemsLines += `   • Quantity: ${item.quantity} | Rate: ${formatINR(item.unitPrice)} | Total: ${formatINR(lineTotal)}
`;
        
        if (item.isCustomBuild && item.specs) {
          itemsLines += `   • *Configured Specifications:*\n`;
          Object.entries(item.specs).forEach(([k, v]) => {
            itemsLines += `     - ${k}: ${v}\n`;
          });
        } else if (item.components && Array.isArray(item.components)) {
          itemsLines += `   • *Components:* ${item.components.map(c => c.name).join(', ')}\n`;
        }
        itemsLines += `\n`;
      });

      // Construct official structured message
      let msg = `🏢 *KRISHNA INFOTECH — OFFICIAL HARDWARE QUOTATION*\n`;
      msg += `━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
      msg += `📄 *Quotation Ref:* ${quoteRef}\n`;
      msg += `📅 *Date & Time:* ${dateStr}, ${timeStr}\n`;
      msg += `━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;

      msg += `👤 *CUSTOMER & DELIVERY DETAILS:*\n`;
      msg += `• *Name / Business:* ${name}\n`;
      msg += `• *Phone / WhatsApp:* ${phone}\n`;
      msg += `• *Delivery Address:* ${address}\n`;
      if (email) {
        msg += `• *Email Address:* ${email}\n`;
      }
      msg += `\n━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
      msg += `📦 *ITEMIZED EQUIPMENT QUOTATION:*\n\n`;
      msg += itemsLines;
      msg += `━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
      msg += `💰 *FINANCIAL SUMMARY:*\n`;
      msg += `• *Taxable Subtotal:* ${formatINR(subtotal)}\n`;
      msg += `• *GST (18% CGST + SGST):* ${formatINR(cgst + sgst)}\n`;
      msg += `• *Doorstep Delivery:* FREE (Mumbai, Thane, Navi Mumbai & Badlapur)\n`;
      msg += `• *GRAND TOTAL (INR):* ${formatINR(grandTotal)}\n`;
      msg += `━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;

      msg += `🛡️ *TERMS & DISPATCH ASSURANCE:*\n`;
      msg += `• 100% Genuine Boxed Products with Manufacturer Warranty\n`;
      msg += `• Same-day / Next-day dispatch & onsite physical verification\n`;
      msg += `• Official GST Tax Invoice included upon order confirmation\n\n`;

      msg += `📍 *ISSUED BY:*\n`;
      msg += `*Krishna Infotech*\n`;
      msg += `Proprietor: Vikrant Madane\n`;
      msg += `Badlapur East, Thane, Maharashtra\n`;
      msg += `GSTIN: 27AOAPM2539L1ZR\n`;
      msg += `Direct Helpdesk: +91 9819557374 | vikrant2005@gmail.com`;

      window.lastDispatchedWAMessage = msg;

      // Launch WhatsApp with prefilled message
      const waUrl = 'https://wa.me/919819557374?text=' + encodeURIComponent(msg);
      window.open(waUrl, '_blank');

      // Copy text to clipboard
      if (navigator.clipboard) {
        navigator.clipboard.writeText(msg).catch(() => {});
      }

      // Display on-screen confirmation modal
      showWAQuotationConfirmationModal(name, phone, address, grandTotal, msg, waUrl);
    };

    window.checkoutCartViaWhatsApp = window.sendQuotationToWhatsApp;

    // Show Confirmation Modal
    function showWAQuotationConfirmationModal(name, phone, address, total, msgText, waUrl) {
      const nameEl = document.getElementById('wa-modal-cust-name');
      const phoneEl = document.getElementById('wa-modal-cust-phone');
      const addrEl = document.getElementById('wa-modal-cust-address');
      const totalEl = document.getElementById('wa-modal-grand-total');
      const prevEl = document.getElementById('wa-modal-preview-text');
      const linkEl = document.getElementById('wa-modal-open-link');

      if (nameEl) nameEl.textContent = name;
      if (phoneEl) phoneEl.textContent = phone;
      if (addrEl) addrEl.textContent = address;
      if (totalEl) totalEl.textContent = formatINR(total);
      if (prevEl) prevEl.textContent = msgText;
      if (linkEl) linkEl.href = waUrl;

      openModal('whatsapp-confirm-modal');
    }

    window.copyWAMessageFromModal = function() {
      if (window.lastDispatchedWAMessage && navigator.clipboard) {
        navigator.clipboard.writeText(window.lastDispatchedWAMessage).then(() => {
          showToast('✓ Quotation message copied to clipboard!');
        });
      } else {
        showToast('Quotation text ready in preview.');
      }
    };

    // =========================================================================
    // AUTO-GENERATE OFFICIAL QUOTATION & LAUNCH GMAIL-IDENTICAL CUSTOM UI
    // =========================================================================
    window.generateAndShowGmailQuotation = function() {
      if (shoppingCart.length === 0) {
        showToast('Your cart is empty. Please add items to generate a quotation.', true);
        return;
      }

      const nameInput = document.getElementById('cust-name');
      const phoneInput = document.getElementById('cust-phone');
      const emailInput = document.getElementById('cust-email');
      const locInput = document.getElementById('cust-address') || document.getElementById('cust-location');

      const name = nameInput?.value.trim() || '';
      const phone = phoneInput?.value.trim() || '';
      const email = emailInput?.value.trim() || '';
      const loc = locInput?.value.trim() || '';

      if (!name || !phone || !email || !loc) {
        showToast('Please fill in your Name, Phone, Email & Address in the cart form.', true);
        if (!name && nameInput) nameInput.focus();
        else if (!phone && phoneInput) phoneInput.focus();
        else if (!email && emailInput) emailInput.focus();
        else if (!loc && locInput) locInput.focus();
        return;
      }

      // 1. Generate Quotation Reference and Date
      const quoteRef = 'KI-QT-2026-' + Math.floor(1000 + Math.random() * 9000);
      const now = new Date();
      const dateString = now.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
      const timeString = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });

      // 2. Populate Gmail Header & Metadata
      document.getElementById('gmail-subject-text').textContent = `[Quotation & Order Dispatch #${quoteRef}] - ${name} - vikrant2005@gmail.com`;
      document.getElementById('gmail-sender-initial').textContent = name.charAt(0).toUpperCase();
      document.getElementById('gmail-sender-name').textContent = name;
      document.getElementById('gmail-sender-email').textContent = `<${email}>`;
      document.getElementById('gmail-timestamp').textContent = `${dateString}, ${timeString} (just now)`;

      // 3. Populate Quotation Content Inside Email Card
      document.getElementById('email-ref-no').textContent = quoteRef;
      document.getElementById('email-date').textContent = dateString;
      document.getElementById('email-bill-name').textContent = name;
      document.getElementById('email-bill-phone').textContent = phone;
      document.getElementById('email-bill-email').textContent = email;
      document.getElementById('email-ship-loc').textContent = loc;

      // 4. Line Items Table
      const { subtotal, cgst, sgst, grandTotal } = calculateCartFinancials();
      const tbody = document.getElementById('email-items-tbody');

      tbody.innerHTML = shoppingCart.map((item, idx) => {
        const lineTotal = item.unitPrice * item.quantity;
        let customDetailsHtml = '';
        if (item.isCustomBuild && item.specs) {
          customDetailsHtml = `
            <div style="margin-top: 6px; padding: 8px 10px; background: #f8f9fa; border-left: 3px solid #7c3aed; font-size: 11px; color: #444746; border-radius: 2px;">
              <strong style="color: #1f1f1f;">Custom PC Rig Configured Specification:</strong>
              <div style="display: grid; grid-template-columns: 1fr; gap: 2px; margin-top: 4px;">
                ${Object.entries(item.specs).map(([k, v]) => `<div>• <strong>${k}:</strong> ${v}</div>`).join('')}
              </div>
            </div>
          `;
        }

        return `
          <tr>
            <td>${idx + 1}</td>
            <td>
              <div style="display: flex; gap: 10px; align-items: center;">
                <img src="${item.image || 'assets/products/' + item.id + '.jpg'}" alt="${item.name}" style="width: 40px; height: 40px; object-fit: cover; border-radius: 4px; border: 1px solid #dadce0;" onerror="this.style.display='none'">
                <div>
                  <strong style="color: #202124;">${item.name}</strong><br>
                  <span style="font-size: 11.5px; color: #5f6368;">${item.categoryTitle || 'Enterprise Hardware'}</span>
                </div>
              </div>
              ${customDetailsHtml}
            </td>
            <td><span style="font-size: 12px; color: #137333; font-weight: 500;">${item.warrantyText}</span></td>
            <td style="text-align: center; font-weight: 600;">${item.quantity}</td>
            <td style="text-align: right; font-family: monospace;">${formatINR(item.unitPrice)}</td>
            <td style="text-align: right; font-family: monospace; font-weight: 700; color: #1f1f1f;">${formatINR(lineTotal)}</td>
          </tr>
        `;
      }).join('');

      document.getElementById('email-subtotal-val').textContent = formatINR(subtotal);
      document.getElementById('email-cgst-val').textContent = formatINR(cgst);
      document.getElementById('email-sgst-val').textContent = formatINR(sgst);
      document.getElementById('email-grandtotal-val').textContent = formatINR(grandTotal);

      // 5. Setup Action Links
      const itemLines = shoppingCart.map((i, idx) => {
        let line = `${idx + 1}. ${i.name} x${i.quantity} = Rs. ${Number(i.unitPrice * i.quantity).toLocaleString('en-IN')} (${i.warrantyText})`;
        if (i.isCustomBuild && i.specs) {
          const specEntries = Object.entries(i.specs).map(([k, v]) => `   - ${k}: ${v}`).join('\n');
          line += '\n' + specEntries;
        }
        return line;
      }).join('\n');

      const plainEmailBody = [
        `Official Quotation Reference: ${quoteRef}`,
        `Client: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        `Delivery / Site Location: ${loc}`,
        '',
        'Items Ordered:',
        itemLines,
        '',
        `Taxable Subtotal: Rs. ${Number(subtotal).toLocaleString('en-IN')}`,
        `18% GST (CGST + SGST): Rs. ${Number(cgst + sgst).toLocaleString('en-IN')}`,
        `Grand Total: Rs. ${Number(grandTotal).toLocaleString('en-IN')}`,
        '',
        'Please confirm GST invoice & dispatch schedule.'
      ].join('\n');

      const emailSubject = `[Quotation & Order #${quoteRef}] ${name}`;
      window.lastGeneratedQuotationText = `To: vikrant2005@gmail.com\nSubject: ${emailSubject}\n\n${plainEmailBody}`;

      // 100% Valid URI-encoded URLs (prevents Google 502 Bad Gateway)
      const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=vikrant2005@gmail.com&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(plainEmailBody)}`;
      const mailtoUrl = `mailto:vikrant2005@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(plainEmailBody)}`;
      const waOrderUrl = `https://wa.me/919819557374?text=${encodeURIComponent(`Hello Vikrant, I have generated Quotation #${quoteRef}:\nClient: ${name}\nPhone: ${phone}\nLocation: ${loc}\nGrand Total: Rs. ${Number(grandTotal).toLocaleString('en-IN')}\nPlease confirm dispatch.`)}`;

      const gmailWebLink = document.getElementById('gmail-open-web-link');
      if (gmailWebLink) gmailWebLink.href = gmailComposeUrl;

      const mailtoLink = document.getElementById('gmail-open-mailto-link');
      if (mailtoLink) mailtoLink.href = mailtoUrl;

      const waLink = document.getElementById('gmail-open-wa-link');
      if (waLink) waLink.href = waOrderUrl;

      // Close cart drawer & Open Gmail UI Modal
      toggleCartDrawer(false);
      const gmailModal = document.getElementById('gmail-modal');
      gmailModal.classList.add('open');
      document.body.style.overflow = 'hidden';

      showToast(`Quotation #${quoteRef} generated! Email options ready.`);
    };

    window.copyQuotationEmailText = function() {
      const textToCopy = window.lastGeneratedQuotationText || '';
      if (!textToCopy) {
        showToast('No quotation generated to copy yet.', true);
        return;
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast('Quotation email text copied to clipboard! Ready to paste.');
        }).catch(() => {
          fallbackCopyText(textToCopy);
        });
      } else {
        fallbackCopyText(textToCopy);
      }
    };

    function fallbackCopyText(text) {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
        showToast('Quotation email text copied to clipboard! Ready to paste.');
      } catch (err) {
        showToast('Could not auto-copy. Please manually copy the preview.', true);
      }
      ta.remove();
    }

    window.closeGmailModal = function() {
      const gmailModal = document.getElementById('gmail-modal');
      if (gmailModal) {
        gmailModal.classList.remove('open');
        document.body.style.overflow = '';
      }
    };

    // =========================================================================
    // PRODUCT HANDLERS
    // =========================================================================
    window.openProductSpecs = function(productId) {
      // Specs modal removed per user preference
    };

    // =========================================================================
    // CATALOG RENDER & FILTER ENGINE
    // =========================================================================
    function renderCatalogGrid() {
      const container = document.getElementById('catalog-items-container');
      if (!container) return;

      container.innerHTML = PRODUCTS_DATA.map(p => {
        let badgeClass = 'badge-corner-new';
        if (p.badge === 'refurbished') badgeClass = 'badge-corner-refurbished';
        if (p.badge === 'software') badgeClass = 'badge-corner-software';

        let warrantyClass = p.badge === 'refurbished' ? 'refurb-warranty' : 'new-warranty';

        return `
          <article class="product-card-item" data-category="${p.category}" data-id="${p.id}">
            <div class="product-card-media">
              <img src="${p.image || 'assets/products/' + p.id + '.jpg'}" alt="${p.name}" class="product-card-img" loading="lazy" onerror="this.onerror=null; this.src='assets/logo.png'">
              <div class="${badgeClass}">${p.badgeText}</div>
            </div>

            <div class="product-card-content">
              <div>
                <span class="product-item-category">${p.categoryTitle}</span>
                <h3 class="product-item-title">${p.name}</h3>
                <p style="font-size: 13.5px; color: var(--text-secondary); line-height: 1.55; margin-bottom: 12px;">
                  ${p.summary}
                </p>
              </div>

              <div>
                <div style="font-family: var(--font-mono); font-size: 16px; font-weight: 700; color: #ffffff; margin-bottom: 8px;">
                  ${p.priceFormatted}
                </div>

                <div class="product-warranty-banner ${warrantyClass}">
                  <span>${p.warranty}</span>
                </div>

                <!-- Action Buttons Row -->
                <div class="product-card-actions">
                  <button class="btn-buy-now" onclick="buyNow('${p.id}', event)">
                    Instant Order
                  </button>
                  <button class="btn-add-cart" onclick="addToCart('${p.id}', event)">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </article>
        `;
      }).join('');
    }

    // Filter and search functionality
    function initSearchAndFilter() {
      const searchInput = document.getElementById('catalog-search');
      const filterButtons = document.querySelectorAll('.cat-filter-btn');
      const visibleCountElem = document.getElementById('visible-count');

      let currentCategory = 'all';
      let currentQuery = '';

      function filterCatalog() {
        const cards = document.querySelectorAll('.product-card-item');
        let visibleCount = 0;
        const q = currentQuery.toLowerCase().trim();

        cards.forEach(card => {
          const cat = card.getAttribute('data-category');
          const id = card.getAttribute('data-id');
          const product = PRODUCTS_DATA.find(p => p.id === id);

          const matchesCategory = (currentCategory === 'all' || cat === currentCategory);
          const fullText = (product ? `${product.name} ${product.summary} ${Object.values(product.specs).join(' ')}` : card.innerText).toLowerCase();
          const matchesQuery = !q || fullText.includes(q);

          if (matchesCategory && matchesQuery) {
            card.style.display = 'flex';
            visibleCount++;
          } else {
            card.style.display = 'none';
          }
        });

        if (visibleCountElem) visibleCountElem.textContent = visibleCount;
      }

      if (searchInput) {
        searchInput.addEventListener('input', (e) => {
          currentQuery = e.target.value;
          filterCatalog();
        });
      }

      filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          filterButtons.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          currentCategory = btn.getAttribute('data-filter') || 'all';
          filterCatalog();
        });
      });
    }


    // =========================================================================
    // MD-COMPUTERS INSPIRED PRE-BUILT RIGS & HOT SELLING ITEMS DATA
    // =========================================================================
    const MD_PREBUILTS = [
      {
        id: "prebuilt-gamerx",
        name: "GamerX Pre-Built Gaming PC",
        subtitle: "7 components",
        price: 85790,
        mrp: 90407,
        save: 4617,
        priceFormatted: "₹85,790",
        mrpFormatted: "₹90,407",
        saveFormatted: "Save ₹4,617",
        image: "assets/md/prebuilt_gamerx.jpg",
        heroImage: "assets/md/gamerx_hero.jpg",
        components: [
          { category: "PROCESSOR (CPU)", name: "Intel Core i5-10400 Processor", part: "BX8070110400", price: 14850, priceFormatted: "₹14,850", qty: 1, image: "assets/md/comp_cpu.jpg" },
          { category: "MOTHERBOARD", name: "Asus Prime H510M-E R2.0 M-ATX Motherboard", part: "PRIME-H510M-E-R2-0", price: 10150, priceFormatted: "₹10,150", qty: 1, image: "assets/md/comp_mb.jpg" },
          { category: "MEMORY (RAM)", name: "G.Skill Aegis 16GB 3200MHz CL16 DDR4 RAM", part: "F4-3200C16S-16GIS", price: 12260, priceFormatted: "₹12,260", qty: 1, image: "assets/md/comp_ram.jpg" },
          { category: "SOLID STATE DRIVE (M.2 SSD)", name: "Crucial P310 NVMe 1TB Gen4 SSD with Heatsink", part: "CT1000P310SSD5", price: 16960, priceFormatted: "₹16,960", qty: 1, image: "assets/md/comp_ssd.jpg" },
          { category: "GRAPHICS CARD (GPU/VGA)", name: "MSI GeForce RTX 3050 Ventus 2X E 6GB OC GDDR6", part: "RTX-3050-VENTUS-2X-E-6G-OC", price: 29988, priceFormatted: "₹29,988", qty: 1, image: "assets/md/comp_gpu.jpg" },
          { category: "POWER SUPPLY UNIT (SMPS/PSU)", name: "Antec Atom V550 V2 SMPS", part: "ATOM-V550-V2", price: 2200, priceFormatted: "₹2,200", qty: 1, image: "assets/md/comp_smps.jpg" },
          { category: "CABINET (CASE)", name: "Ant Esports Crystal Neo Mini ARGB M-ATX Case", part: "CRYSTAL-NEO-MINI", price: 3999, priceFormatted: "₹3,999", qty: 1, image: "assets/md/comp_case.jpg" }
        ]
      },
      {
        id: "prebuilt-streamerx",
        name: "StreamerX Pre-Built Streaming PC",
        subtitle: "8 components",
        price: 157190,
        mrp: 162420,
        save: 5230,
        priceFormatted: "₹1,57,190",
        mrpFormatted: "₹1,62,420",
        saveFormatted: "Save ₹5,230",
        image: "assets/md/prebuilt_streamerx.jpg",
        heroImage: "assets/md/prebuilt_streamerx.jpg",
        components: [
          { category: "PROCESSOR (CPU)", name: "AMD Ryzen 7 7800X3D 8-Core 16-Thread 5.0GHz 3D V-Cache", part: "100-100000910WOF", price: 38990, priceFormatted: "₹38,990", qty: 1, image: "assets/md/comp_cpu.jpg" },
          { category: "MOTHERBOARD", name: "MSI B650 Gaming Plus WiFi AM5 ATX Motherboard", part: "B650-GAMING-PLUS-WIFI", price: 16450, priceFormatted: "₹16,450", qty: 1, image: "assets/md/comp_mb.jpg" },
          { category: "MEMORY (RAM)", name: "Corsair Vengeance RGB 32GB (2x16GB) 6000MHz DDR5", part: "CMH32GX5M2B6000C30", price: 11800, priceFormatted: "₹11,800", qty: 1, image: "assets/md/comp_ram.jpg" },
          { category: "GRAPHICS CARD (GPU)", name: "ZOTAC Gaming GeForce RTX 4070 Super Twin Edge 12GB GDDR6X", part: "ZT-D40720E-10M", price: 59990, priceFormatted: "₹59,990", qty: 1, image: "assets/md/comp_gpu.jpg" },
          { category: "M.2 NVME SSD", name: "WD Black SN850X 1TB Gen4 NVMe M.2 SSD 7300MB/s", part: "WDS100T2X0E", price: 8990, priceFormatted: "₹8,990", qty: 1, image: "assets/md/comp_ssd.jpg" },
          { category: "LIQUID COOLER", name: "Deepcool Castle 240EX A-RGB 240mm Liquid CPU Cooler", part: "DP-GS-H12-CSL240EX-AR", price: 6450, priceFormatted: "₹6,450", qty: 1, image: "assets/components/cooler.jpg" },
          { category: "POWER SUPPLY (SMPS)", name: "Corsair RM750e 750W 80 Plus Gold Fully Modular ATX 3.0", part: "CP-9020262-IN", price: 8990, priceFormatted: "₹8,990", qty: 1, image: "assets/md/comp_smps.jpg" },
          { category: "CABINET (CASE)", name: "NZXT H5 Flow RGB Mid-Tower High Airflow Black", part: "CC-H51FB-R1", price: 8500, priceFormatted: "₹8,500", qty: 1, image: "assets/md/prebuilt_streamerx.jpg" }
        ]
      },
      {
        id: "prebuilt-creatorx",
        name: "CreatorX Pre-Built Video Editing PC",
        subtitle: "8 components",
        price: 185810,
        mrp: 190652,
        save: 4842,
        priceFormatted: "₹1,85,810",
        mrpFormatted: "₹1,90,652",
        saveFormatted: "Save ₹4,842",
        image: "assets/md/prebuilt_creatorx.jpg",
        heroImage: "assets/md/prebuilt_creatorx.jpg",
        components: [
          { category: "PROCESSOR (CPU)", name: "Intel Core i7-14700K 20-Core (8P+12E) up to 5.6 GHz", part: "BX8071514700K", price: 39490, priceFormatted: "₹39,490", qty: 1, image: "assets/md/comp_cpu.jpg" },
          { category: "MOTHERBOARD", name: "ASUS TUF Gaming Z790-Plus WiFi DDR5", part: "TUF-GAMING-Z790-PLUS-WIFI", price: 24800, priceFormatted: "₹24,800", qty: 1, image: "assets/md/comp_mb.jpg" },
          { category: "MEMORY (RAM)", name: "G.Skill Ripjaws S5 64GB (2x32GB) 6000MHz CL32 DDR5", part: "F5-6000J3238G32GX2-RS5K", price: 19950, priceFormatted: "₹19,950", qty: 1, image: "assets/md/comp_ram.jpg" },
          { category: "GRAPHICS CARD (GPU)", name: "MSI GeForce RTX 4070 Ti Super 16GB Gaming X Slim", part: "RTX-4070-TI-SUPER-16G", price: 81990, priceFormatted: "₹81,990", qty: 1, image: "assets/md/comp_gpu.jpg" },
          { category: "M.2 NVME SSD", name: "Samsung 990 PRO 2TB PCIe 4.0 NVMe SSD with Heatsink", part: "MZ-V9P2T0CW", price: 17990, priceFormatted: "₹17,990", qty: 1, image: "assets/md/comp_ssd.jpg" },
          { category: "LIQUID COOLER", name: "Lian Li Galahad II Trinity 360 ARGB Liquid Cooler", part: "GA2T36B", price: 12490, priceFormatted: "₹12,490", qty: 1, image: "assets/components/cooler.jpg" },
          { category: "POWER SUPPLY (SMPS)", name: "Antec NeoECO Gold 850W 80+ Gold Fully Modular", part: "NE850G-M", price: 9400, priceFormatted: "₹9,400", qty: 1, image: "assets/md/comp_smps.jpg" },
          { category: "CABINET (CASE)", name: "Lian Li O11 Dynamic EVO Black Dual-Chamber", part: "O11D-EVO-BLACK", price: 14200, priceFormatted: "₹14,200", qty: 1, image: "assets/md/prebuilt_creatorx.jpg" }
        ]
      },
      {
        id: "prebuilt-arielx",
        name: "ArielX Pre-Built AI-ML Supercomputer PC",
        subtitle: "8 components",
        price: 417413,
        mrp: 435712,
        save: 18299,
        priceFormatted: "₹4,17,413",
        mrpFormatted: "₹4,35,712",
        saveFormatted: "Save ₹18,299",
        image: "assets/md/prebuilt_arielx.jpg",
        heroImage: "assets/md/prebuilt_arielx.jpg",
        components: [
          { category: "PROCESSOR (CPU)", name: "Intel Core i9-14900KS 24-Core Special Edition 6.2 GHz", part: "BX8071514900KS", price: 58990, priceFormatted: "₹58,990", qty: 1, image: "assets/md/comp_cpu.jpg" },
          { category: "MOTHERBOARD", name: "ASUS ROG Maximus Z790 Dark Hero DDR5", part: "ROG-MAXIMUS-Z790-DARK-HERO", price: 62490, priceFormatted: "₹62,490", qty: 1, image: "assets/md/comp_mb.jpg" },
          { category: "MEMORY (RAM)", name: "Corsair Dominator Titanium 128GB (4x32GB) 6400MHz DDR5", part: "CMP128GX5M4B6400C32", price: 46800, priceFormatted: "₹46,800", qty: 1, image: "assets/md/comp_ram.jpg" },
          { category: "GRAPHICS CARD (GPU)", name: "ASUS ROG Strix GeForce RTX 4090 OC Edition 24GB GDDR6X", part: "ROG-STRIX-RTX4090-O24G", price: 194990, priceFormatted: "₹1,94,990", qty: 1, image: "assets/md/comp_gpu.jpg" },
          { category: "M.2 NVME SSD", name: "Crucial T700 2TB Gen5 NVMe SSD 12400MB/s with Heatsink", part: "CT2000T700SSD5", price: 26500, priceFormatted: "₹26,500", qty: 1, image: "assets/md/comp_ssd.jpg" },
          { category: "LIQUID COOLER", name: "Corsair iCUE LINK H150i LCD Liquid CPU Cooler 360mm", part: "CW-9061008-WW", price: 24900, priceFormatted: "₹24,900", qty: 1, image: "assets/components/cooler.jpg" },
          { category: "POWER SUPPLY (SMPS)", name: "Corsair HX1200 1200W 80 Plus Platinum Fully Modular", part: "CP-9020140-IN", price: 21800, priceFormatted: "₹21,800", qty: 1, image: "assets/md/comp_smps.jpg" },
          { category: "CABINET (CASE)", name: "Cooler Master HAF 700 EVO High Airflow Full Tower", part: "H700E-IGNN-S00", price: 38900, priceFormatted: "₹38,900", qty: 1, image: "assets/md/prebuilt_arielx.jpg" }
        ]
      },
      {
        id: "prebuilt-tridentx",
        name: "TridentX Pre-Built Graphics Design PC",
        subtitle: "7 components",
        price: 65930,
        mrp: 70398,
        save: 4468,
        priceFormatted: "₹65,930",
        mrpFormatted: "₹70,398",
        saveFormatted: "Save ₹4,468",
        image: "assets/md/prebuilt_tridentx.jpg",
        heroImage: "assets/md/prebuilt_tridentx.jpg",
        components: [
          { category: "PROCESSOR (CPU)", name: "AMD Ryzen 5 5600 6-Core 12-Thread up to 4.4 GHz", part: "100-100000927BOX", price: 11490, priceFormatted: "₹11,490", qty: 1, image: "assets/md/comp_cpu.jpg" },
          { category: "MOTHERBOARD", name: "Gigabyte B550M DS3H AC AM4 Ultra Durable", part: "B550M-DS3H-AC", price: 8990, priceFormatted: "₹8,990", qty: 1, image: "assets/md/comp_mb.jpg" },
          { category: "MEMORY (RAM)", name: "Corsair Vengeance LPX 16GB (2x8GB) 3200MHz DDR4", part: "CMK16GX4M2E3200C16", price: 3850, priceFormatted: "₹3,850", qty: 1, image: "assets/md/comp_ram.jpg" },
          { category: "GRAPHICS CARD (GPU)", name: "ASUS Dual GeForce RTX 3060 V2 OC Edition 12GB GDDR6", part: "DUAL-RTX3060-O12G-V2", price: 24990, priceFormatted: "₹24,990", qty: 1, image: "assets/md/comp_gpu.jpg" },
          { category: "M.2 NVME SSD", name: "Kingston NV2 1TB PCIe 4.0 NVMe M.2 2280 SSD", part: "SNV2S/1000G", price: 5490, priceFormatted: "₹5,490", qty: 1, image: "assets/md/comp_ssd.jpg" },
          { category: "POWER SUPPLY (SMPS)", name: "Cooler Master MWE 550W 80 Plus Bronze V2", part: "MPE-5501-ACABW-BIN", price: 3990, priceFormatted: "₹3,990", qty: 1, image: "assets/md/comp_smps.jpg" },
          { category: "CABINET (CASE)", name: "Ant Esports 211TG ARGB Gaming Mid Tower Black", part: "211TG-BLACK", price: 3600, priceFormatted: "₹3,600", qty: 1, image: "assets/md/prebuilt_tridentx.jpg" }
        ]
      }
    ];

    const MD_HOT_ITEMS = [
      {
        id: "hot-ps5",
        name: "Sony PlayStation 5 DualSense Red Wireless Game Controller",
        price: 6390,
        mrp: 6390,
        priceFormatted: "₹6,390",
        mrpFormatted: "₹6,390",
        discount: "SOLD OUT",
        isSoldOut: true,
        image: "assets/md/hot_ps5.jpg"
      },
      {
        id: "hot-gskill",
        name: "G.Skill Trident Z5 RGB 16GB 6000MHz CL36 DDR5 RAM",
        price: 29480,
        mrp: 47960,
        priceFormatted: "₹29,480",
        mrpFormatted: "₹47,960",
        discount: "-38%",
        isSoldOut: false,
        image: "assets/md/hot_gskill.jpg"
      },
      {
        id: "hot-nvidia-dgx",
        name: "NVIDIA DGX Spark 4TB Desktop AI Supercomputer",
        price: 722999,
        mrp: 799999,
        priceFormatted: "₹7,22,999",
        mrpFormatted: "₹7,99,999",
        discount: "-9%",
        isSoldOut: false,
        image: "assets/md/hot_nvidia_dgx.jpg"
      },
      {
        id: "hot-lg-monitor",
        name: "LG UltraGear 39GX900A-B 39 Inch Curved Gaming Monitor 240Hz OLED",
        price: 99990,
        mrp: 180000,
        priceFormatted: "₹99,990",
        mrpFormatted: "₹1,80,000",
        discount: "-44%",
        isSoldOut: false,
        image: "assets/md/hot_lg_monitor.jpg"
      },
      {
        id: "hot-crucial-ssd",
        name: "Crucial P510 1TB NVMe Gen5 SSD (13,600 MB/s Read Speed)",
        price: 22540,
        mrp: 25000,
        priceFormatted: "₹22,540",
        mrpFormatted: "₹25,000",
        discount: "-9%",
        isSoldOut: false,
        image: "assets/md/hot_crucial_ssd.jpg"
      },
      {
        id: "hot-ryzen",
        name: "AMD Ryzen 7 5800X3D Processor 10th Anniversary 3D V-Cache",
        price: 38199,
        mrp: 66000,
        priceFormatted: "₹38,199",
        mrpFormatted: "₹66,000",
        discount: "-42%",
        isSoldOut: false,
        image: "assets/md/hot_ryzen.jpg"
      }
    ];

    let currentActiveRig = MD_PREBUILTS[0];

    // Render MD Pre-built PCs
    function renderMDPrebuilts() {
      const container = document.getElementById('md-prebuilt-container');
      if (!container) return;

      container.innerHTML = MD_PREBUILTS.map(rig => `
        <article class="md-prebuilt-card">
          <div class="md-prebuilt-card-media">
            <img src="${rig.image}" alt="${rig.name}" class="md-prebuilt-card-img" loading="lazy">
          </div>
          <div>
            <h3 class="md-prebuilt-title">${rig.name}</h3>
            <div class="md-price-block">
              <div class="md-price-row">
                <span class="md-current-price">${rig.priceFormatted}</span>
                <span class="md-mrp-price">${rig.mrpFormatted}</span>
              </div>
              <span class="md-save-badge">${rig.saveFormatted}</span>
              <span class="md-tax-note">(Inc of all taxes)</span>
            </div>
          </div>
          <div class="md-card-actions" style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
            <button class="btn-view-build" onclick="openMDViewBuild('${rig.id}')">
              View Build
            </button>
            <button class="btn-prebuilt-cart" onclick="addMDPrebuiltToCart('${rig.id}', event)">
              Add to Cart
            </button>
          </div>
        </article>
      `).join('');
    }

    // Render MD Hot Selling Hardware
    function renderMDHotSales() {
      const container = document.getElementById('md-hotsale-container');
      if (!container) return;

      container.innerHTML = MD_HOT_ITEMS.map(item => `
        <article class="md-hotsale-card">
          ${item.isSoldOut ? `<span class="md-soldout-badge">SOLD OUT</span>` : `<span class="md-discount-badge">${item.discount}</span>`}
          <div class="md-hotsale-media">
            <img src="${item.image}" alt="${item.name}" class="md-hotsale-img" loading="lazy">
          </div>
          <div>
            <h3 class="md-hotsale-title">${item.name}</h3>
            <div class="md-price-row" style="margin-bottom: 8px;">
              <span class="md-current-price" style="font-size: 15px;">${item.priceFormatted}</span>
              <span class="md-mrp-price">${item.mrpFormatted}</span>
            </div>
          </div>
          <div>
            ${item.isSoldOut ? `
              <button class="btn-add-hotsale disabled" disabled>Sold Out</button>
            ` : `
              <button class="btn-add-hotsale" onclick="addMDHotItemToCart('${item.id}')">
                Add to cart
              </button>
            `}
          </div>
        </article>
      `).join('');
    }

    // Open MD View Build Modal
    window.openMDViewBuild = function(rigId) {
      const rig = MD_PREBUILTS.find(r => r.id === rigId);
      if (!rig) return;
      currentActiveRig = rig;

      const imgEl = document.getElementById('md-modal-rig-img');
      const titleEl = document.getElementById('md-modal-rig-title');
      const countEl = document.getElementById('md-modal-comp-count');
      const priceEl = document.getElementById('md-modal-price');
      const mrpEl = document.getElementById('md-modal-mrp');
      const saveEl = document.getElementById('md-modal-save');
      const compListEl = document.getElementById('md-modal-components-list');

      if (imgEl) imgEl.src = rig.heroImage || rig.image;
      if (titleEl) titleEl.textContent = rig.name;
      if (countEl) countEl.textContent = `${rig.components.length} components`;
      if (priceEl) priceEl.textContent = rig.priceFormatted;
      if (mrpEl) mrpEl.textContent = rig.mrpFormatted;
      if (saveEl) saveEl.textContent = rig.saveFormatted;

      if (compListEl) {
        compListEl.innerHTML = rig.components.map(c => `
          <div class="md-comp-row">
            <div class="md-comp-thumb-box">
              <img src="${c.image}" alt="${c.name}" class="md-comp-thumb-img" onerror="this.onerror=null; this.src='assets/components/cpu.jpg'">
            </div>
            <div class="md-comp-info">
              <span class="md-comp-cat-label">${c.category}</span>
              <span class="md-comp-name">${c.name}</span>
              <span class="md-comp-partno">${c.part || ''}</span>
            </div>
            <div class="md-comp-pricing">
              <span class="md-comp-price">${c.priceFormatted}</span>
              <span class="md-comp-qty">Qty ${c.qty}</span>
            </div>
          </div>
        `).join('');
      }

      openModal('md-view-build-modal');
    };

    // Add Pre-Built Rig to Cart directly
    window.addMDPrebuiltToCart = function(rigId, e) {
      if (e) e.stopPropagation();
      const rig = MD_PREBUILTS.find(r => r.id === rigId);
      if (!rig) return;

      const customSpecs = {};
      rig.components.forEach(c => {
        customSpecs[c.category] = `${c.name} (${c.priceFormatted})`;
      });

      const existingIndex = shoppingCart.findIndex(i => i.id === rig.id);
      if (existingIndex > -1) {
        shoppingCart[existingIndex].quantity += 1;
      } else {
        shoppingCart.push({
          id: rig.id,
          name: rig.name,
          unitPrice: rig.price,
          priceFormatted: rig.priceFormatted,
          image: rig.image,
          warrantyText: '3-Year Boxed Component Warranty + 1-Year Free Onsite Service',
          categoryTitle: 'Pre-Built Desktop Rig',
          isCustomBuild: true,
          specs: customSpecs,
          components: rig.components,
          quantity: 1
        });
      }

      saveCart();
      toggleCartDrawer(true);
      showToast(`✓ Added "${rig.name}" to Cart!`);
    };

    // Add Current Rig from Modal to Cart
    window.addCurrentRigToCart = function() {
      if (!currentActiveRig) return;
      window.addMDPrebuiltToCart(currentActiveRig.id);
      closeModal('md-view-build-modal');
    };

    // Customize Current Rig in Studio

    // Direct WhatsApp Quotation for Pre-built Rig
    window.orderCurrentRigViaWhatsApp = function() {
      if (!currentActiveRig) return;
      const rig = currentActiveRig;

      const nameInput = document.getElementById('cust-name');
      const phoneInput = document.getElementById('cust-phone');
      const addrInput = document.getElementById('cust-address') || document.getElementById('cust-location');

      const name = nameInput ? nameInput.value.trim() : '';
      const phone = phoneInput ? phoneInput.value.trim() : '';
      const address = addrInput ? addrInput.value.trim() : '';

      if (!name || !phone || !address) {
        window.addMDPrebuiltToCart(rig.id);
        closeModal('md-view-build-modal');
        toggleCartDrawer(true);
        showToast('Please provide your Full Name, Phone & Address in the cart form to dispatch quotation.', true);
        const formBox = document.getElementById('cart-details-form-box');
        if (formBox) formBox.scrollIntoView({ behavior: 'smooth' });
        return;
      }

      // If already filled, send direct quotation
      window.addMDPrebuiltToCart(rig.id);
      closeModal('md-view-build-modal');
      window.sendQuotationToWhatsApp();
    };

    window.customizeCurrentRig = function() {
      if (!currentActiveRig) return;
      closeModal('md-view-build-modal');
      switchViewMode('builder');

      // Map to builder selections if GamerX or other
      if (currentActiveRig.id === 'prebuilt-gamerx') {
        currentBuild.cpu = 'cpu-1';
        currentBuild.motherboard = 'mb-1';
        currentBuild.ram = 'ram-1';
        currentBuild.gpu = 'gpu-1';
        currentBuild.ssd = 'ssd-1';
        currentBuild.psu = 'psu-1';
        currentBuild.case = 'case-1';
      }

      renderCustomBuilder();
      const el = document.getElementById('custom-builder-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      showToast(`Loaded ${currentActiveRig.name} into Custom Studio!`);
    };

    // Copy Current Rig Specs
    window.copyCurrentRigSpecs = function() {
      if (!currentActiveRig) return;
      const rig = currentActiveRig;
      let text = `=== KRISHNA INFOTECH PRE-BUILT PC SPEC SHEET ===\n`;
      text += `Model: ${rig.name}\n`;
      text += `Price: ${rig.priceFormatted} (MRP ${rig.mrpFormatted} - ${rig.saveFormatted})\n\n`;
      text += `COMPONENTS:\n`;
      rig.components.forEach(c => {
        text += `• ${c.category}: ${c.name} [${c.part}] - ${c.priceFormatted}\n`;
      });
      text += `\nReady for dispatch. Inquire: +91 9819557374 / vikrant2005@gmail.com`;

      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
          showToast('✓ Spec sheet copied to clipboard!');
        });
      }
    };

    // Add Hot Item to Cart
    window.addMDHotItemToCart = function(itemId, e) {
      if (e) e.stopPropagation();
      const item = MD_HOT_ITEMS.find(h => h.id === itemId);
      if (!item || item.isSoldOut) return;

      const existingIndex = shoppingCart.findIndex(i => i.id === item.id);
      if (existingIndex > -1) {
        shoppingCart[existingIndex].quantity += 1;
      } else {
        shoppingCart.push({
          id: item.id,
          name: item.name,
          unitPrice: item.price,
          priceFormatted: item.priceFormatted,
          image: item.image,
          warrantyText: 'Official Manufacturer Warranty',
          categoryTitle: 'High-Demand Hardware',
          quantity: 1
        });
      }

      saveCart();
      toggleCartDrawer(true);
      showToast(`✓ Added "${item.name}" to Cart!`);
    };

    // Filter by Category Helper
    window.filterByCat = function(category) {
      switchViewMode('catalog');
      const filterBtns = document.querySelectorAll('.cat-filter-btn');
      filterBtns.forEach(btn => {
        if (btn.getAttribute('data-filter') === category) {
          btn.click();
        }
      });
      const bar = document.getElementById('catalog-controls-bar');
      if (bar) bar.scrollIntoView({ behavior: 'smooth' });
    };

    // Select specific step in Custom Builder
    window.selectBuilderStep = function(stepKey) {
      setTimeout(() => {
        const stepHeader = document.querySelector(`.builder-step-card[data-step="${stepKey}"]`);
        if (stepHeader) stepHeader.scrollIntoView({ behavior: 'smooth' });
      }, 200);
    };

    // =========================================================================
    // 3D HARDWARE SPOTLIGHT ENGINE & PARALLAX RIG
    // =========================================================================
    const SPOTLIGHT_MODELS = [
      {
        id: "prebuilt-gamerx",
        tag: "FLAGSHIP ESPORTS RIG",
        title: "GamerX Pre-Built Gaming PC",
        summary: "Intel Core i5-14400F • ASUS B760M • RTX 4060 • 16GB DDR5",
        price: 85790,
        priceFormatted: "₹85,790",
        mrpFormatted: "MRP ₹90,407",
        image: "assets/md/gamerx_hero.jpg",
        hotspot1Title: "RTX 4060 8GB GDDR6",
        hotspot1Sub: "Dual Axial Fan • 0dB Silent Tech",
        hotspot2Title: "Kingston 1TB Gen4 NVMe",
        hotspot2Sub: "5,000 MB/s Read • Fast Boot",
        isPrebuilt: true
      },
      {
        id: "hot-nvidia-dgx",
        tag: "AI WORKSTATION MATRIX",
        title: "NVIDIA DGX / RTX Deep Learning Rig",
        summary: "Liquid Cooled Enterprise AI & Scientific Compute Workstation",
        price: 185000,
        priceFormatted: "₹1,85,000",
        mrpFormatted: "MRP ₹2,10,000",
        image: "assets/md/hot_nvidia_dgx.jpg",
        hotspot1Title: "Enterprise CUDA Compute",
        hotspot1Sub: "Multi-Precision Tensor Cores",
        hotspot2Title: "ECC Registered Memory",
        hotspot2Sub: "Zero Corruption Enterprise RAM",
        isPrebuilt: false
      },
      {
        id: "cctv-1",
        tag: "4K SURVEILLANCE MATRIX",
        title: "Hikvision 4K 8MP ColorVu CCTV System",
        summary: "ColorVu 24/7 Color Night Vision • AI AcuSense Detection",
        price: 3850,
        priceFormatted: "₹3,850",
        mrpFormatted: "MRP ₹5,200",
        image: "assets/products/cctv-1.jpg",
        hotspot1Title: "F1.0 Super Aperture",
        hotspot1Sub: "True Full-Color 24/7 in 0 Lux",
        hotspot2Title: "IP67 Weatherproof",
        hotspot2Sub: "Heavy-Duty Metal Housing",
        isPrebuilt: false
      }
    ];

    let currentSpotlightIdx = 0;

    window.switchSpotlightModel = function(idx) {
      if (idx < 0 || idx >= SPOTLIGHT_MODELS.length) return;
      currentSpotlightIdx = idx;
      const model = SPOTLIGHT_MODELS[idx];

      const tagEl = document.getElementById('spotlight-tag');
      const titleEl = document.getElementById('spotlight-title');
      const summaryEl = document.getElementById('spotlight-summary');
      const priceEl = document.getElementById('spotlight-price');
      const mrpEl = document.getElementById('spotlight-mrp');
      const imgEl = document.getElementById('spotlight-img');

      const hs1Title = document.getElementById('hotspot-1-title');
      const hs1Sub = document.getElementById('hotspot-1-sub');
      const hs2Title = document.getElementById('hotspot-2-title');
      const hs2Sub = document.getElementById('hotspot-2-sub');

      if (tagEl) tagEl.textContent = model.tag;
      if (titleEl) titleEl.textContent = model.title;
      if (summaryEl) summaryEl.textContent = model.summary;
      if (priceEl) priceEl.textContent = model.priceFormatted;
      if (mrpEl) mrpEl.textContent = model.mrpFormatted;

      if (hs1Title) hs1Title.textContent = model.hotspot1Title;
      if (hs1Sub) hs1Sub.textContent = model.hotspot1Sub;
      if (hs2Title) hs2Title.textContent = model.hotspot2Title;
      if (hs2Sub) hs2Sub.textContent = model.hotspot2Sub;

      if (imgEl) {
        imgEl.style.opacity = '0';
        imgEl.style.transform = 'scale(0.92) translateZ(10px)';
        setTimeout(() => {
          imgEl.src = model.image;
          imgEl.style.opacity = '1';
          imgEl.style.transform = 'scale(1) translateZ(20px)';
        }, 180);
      }

      for (let i = 0; i < SPOTLIGHT_MODELS.length; i++) {
        const btn = document.getElementById(`dock-btn-${i}`);
        if (btn) {
          if (i === idx) btn.classList.add('active');
          else btn.classList.remove('active');
        }
      }

      const inspectBtn = document.getElementById('spotlight-inspect-btn');
      if (inspectBtn) {
        inspectBtn.style.display = model.isPrebuilt ? 'inline-flex' : 'none';
      }
    };

    window.spotlightAddToCart = function() {
      const model = SPOTLIGHT_MODELS[currentSpotlightIdx];
      if (model.isPrebuilt) {
        window.addMDPrebuiltToCart(model.id);
      } else if (model.id.startsWith('hot-')) {
        window.addMDHotItemToCart(model.id);
      } else {
        window.addToCart(model.id);
      }
    };

    window.spotlightOrderViaWhatsApp = function() {
      const model = SPOTLIGHT_MODELS[currentSpotlightIdx];
      if (model.isPrebuilt) {
        currentActiveRig = MD_PREBUILTS.find(r => r.id === model.id) || MD_PREBUILTS[0];
        window.orderCurrentRigViaWhatsApp();
      } else {
        window.addToCart(model.id);
        window.sendQuotationToWhatsApp();
      }
    };

    window.spotlightInspect = function() {
      const model = SPOTLIGHT_MODELS[currentSpotlightIdx];
      if (model.isPrebuilt) {
        window.openMDViewBuild(model.id);
      }
    };

    // 3D Interactive Parallax Mouse Tilt
    function init3DHeroParallax() {
      const stage = document.getElementById('hero-3d-stage');
      const card = document.getElementById('hero-tilt-card');
      if (!stage || !card) return;

      stage.addEventListener('mousemove', (e) => {
        const rect = stage.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        card.style.transform = `rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
      });

      stage.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateX(0deg) rotateY(0deg)';
      });
    }

    // Scroll to Catalog & Focus Search (Keyboard / shortcut)
    window.scrollToCatalogAndFocusSearch = function() {
      switchViewMode('catalog');
      const el = document.getElementById('catalog-controls-bar');
      const searchInput = document.getElementById('catalog-search');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (searchInput) {
        setTimeout(() => searchInput.focus(), 350);
      }
    };

    // Keyboard shortcut /
    document.addEventListener('keydown', (e) => {
      if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
        e.preventDefault();
        window.scrollToCatalogAndFocusSearch();
      }
    });

    // Category Subnav Quick Dropdown Menu Controls
    window.toggleCategoryQuickMenu = function(e) {
      if (e) e.stopPropagation();
      const menu = document.getElementById('subnav-dropdown-menu');
      if (menu) {
        menu.style.display = menu.style.display === 'none' ? 'flex' : 'none';
      }
    };

    window.closeCategoryQuickMenu = function() {
      const menu = document.getElementById('subnav-dropdown-menu');
      if (menu) menu.style.display = 'none';
    };

    document.addEventListener('click', (e) => {
      const btn = document.getElementById('cat-quick-menu-btn');
      const menu = document.getElementById('subnav-dropdown-menu');
      if (menu && menu.style.display !== 'none') {
        if (!menu.contains(e.target) && (!btn || !btn.contains(e.target))) {
          menu.style.display = 'none';
        }
      }
    });

    window.scrollToCatalog = function() {
      const el = document.getElementById('catalog-controls-bar');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    window.filterBySearch = function(query) {
      switchViewMode('catalog');
      const searchInput = document.getElementById('catalog-search');
      if (searchInput) {
        searchInput.value = query;
        searchInput.dispatchEvent(new Event('input'));
      }
    };

    function loadSavedCustomerInfo() {
      try {
        const saved = JSON.parse(localStorage.getItem('krishna_customer') || '{}');
        if (saved.name) {
          const el = document.getElementById('cust-name');
          if (el) el.value = saved.name;
        }
        if (saved.phone) {
          const el = document.getElementById('cust-phone');
          if (el) el.value = saved.phone;
        }
        if (saved.address) {
          const el = document.getElementById('cust-address') || document.getElementById('cust-location');
          if (el) el.value = saved.address;
        }
        if (saved.email) {
          const el = document.getElementById('cust-email');
          if (el) el.value = saved.email;
        }
      } catch (e) {}
    }

    // Run on load
    document.addEventListener('DOMContentLoaded', () => {
      loadSavedCustomerInfo();
      init3DHeroParallax();

      renderMDPrebuilts();
      renderMDHotSales();
      renderCatalogGrid();
      initSearchAndFilter();
      renderCustomBuilder();
      updateCartUI();

      // Check URL hash for direct builder link
      if (window.location.hash === '#custom-pc-builder' || window.location.hash === '#builder') {
        switchViewMode('builder');
      }
    });