const products = [
    {
        id: 1,
        name: "PlayStation 5 Console",
        price: 507.99,
        category: "console",
        image: "https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21",
        description: "Experience lightning-fast loading with an ultra-high speed SSD."
    },
    {
        id: 2,
        name: "PS5 Digital Edition",
        price: 406.99,
        category: "console",
        image: "https://gmedia.playstation.com/is/image/SIEPDC/ps5-digital-edition-product-thumbnail-01-en-14sep21",
        description: "All digital gaming experience."
    },
    {
        id: 3,
        name: "DualSense Controller",
        price: 69.99,
        category: "accessory",
        image: "https://example.com/dualsense.jpg",
        description: "Next-gen gaming controller."
    },
    {
        id: 4,
        name: "Spider-Man 2",
        price: 69.99,
        category: "game",
        image: "https://example.com/spiderman2.jpg",
        description: "Swing through New York City."
    },
    {
        id: 5,
        name: "God of War Ragnarök",
        price: 59.99,
        category: "game",
        image: "https://example.com/gow.jpg",
        description: "Continue Kratos' journey."
    },
    {
        id: 6,
        name: "PULSE 3D Headset",
        price: 99.99,
        category: "accessory",
        image: "https://example.com/headset.jpg",
        description: "3D Audio for PS5."
    },
    {
        id: 7,
        name: "Xbox Series X",
        price: 499.99,
        category: "console",
        image: "https://example.com/xbox-series-x.jpg",
        description: "The most powerful Xbox ever. Play thousands of titles."
    },
    {
        id: 8,
        name: "Atari VCS",
        price: 299.99,
        category: "console",
        image: "https://example.com/atari-vcs.jpg",
        description: "Modern console with classic Atari gaming experience."
    },
    {
        id: 9,
        name: "R36S Gaming Console",
        price: 50.00,
        category: "toys",
        image: "https://example.com/r36s.jpg",
        description: "Portable gaming device with classic games preloaded."
    },
    {
        id: 10,
        name: "LED Levitating Gyroscope",
        price: 10.00,
        category: "toys",
        image: "https://example.com/gyroscope.jpg",
        description: "Light-emitting gyroscope with magnetic levitation. Perfect birthday gift!"
    },
    {
        id: 11,
        name: "Desert Eagle Toy Gun",
        price: 130.00,
        category: "toys",
        image: "https://example.com/desert-eagle.jpg",
        description: "Shell ejection airsoft pistol with soft foam bullets. For outdoor play only."
    },
    {
        id: 12,
        name: "RC Monster Truck",
        price: 45.99,
        category: "toys",
        image: "https://example.com/rc-truck.jpg",
        description: "4WD Remote Control Car with LED lights and shock absorption."
    },
    {
        id: 13,
        name: "Smart Robot Kit",
        price: 79.99,
        category: "toys",
        image: "https://example.com/robot-kit.jpg",
        description: "Educational robot building kit with remote control and programming features."
    },
    {
        id: 14,
        name: "Drone with HD Camera",
        price: 89.99,
        category: "toys",
        image: "https://example.com/drone.jpg",
        description: "WiFi FPV drone with altitude hold and headless mode."
    },
    {
        id: 15,
        name: "VR Headset for Phone",
        price: 29.99,
        category: "toys",
        image: "https://example.com/vr-headset.jpg",
        description: "Virtual Reality goggles compatible with most smartphones."
    },
    {
        id: 16,
        name: "Electronic Science Kit",
        price: 34.99,
        category: "toys",
        image: "https://example.com/science-kit.jpg",
        description: "Educational kit with 50+ projects to learn about electricity and circuits."
    },
    {
        id: 17,
        name: "Smart Watch X9 Pro",
        price: 52.99,
        category: "watches",
        image: "https://example.com/smartwatch-x9.jpg",
        description: "Fitness tracker with heart rate monitor, blood pressure measurement, and sleep tracking."
    },
    {
        id: 18,
        name: "HW16 Ultra Smart Watch",
        price: 37.99,
        category: "watches",
        image: "https://example.com/hw16-watch.jpg",
        description: "1.99 inch HD screen, Bluetooth calling, multiple sport modes."
    },
    {
        id: 19,
        name: "X8 Ultra Pro Max Watch",
        price: 67.99,
        category: "watches",
        image: "https://example.com/x8-ultra.jpg",
        description: "Split screen display, wireless charging, ECG monitoring."
    },
    {
        id: 20,
        name: "FK88 Pro Smart Watch",
        price: 46.99,
        category: "watches",
        image: "https://example.com/fk88-pro.jpg",
        description: "AI voice assistant, 100+ watch faces, IP68 waterproof."
    },
    {
        id: 21,
        name: "Smart Band M7",
        price: 25.99,
        category: "watches",
        image: "https://example.com/m7-band.jpg",
        description: "Slim fitness tracker with SpO2 monitoring and message notifications."
    },
    {
        id: 22,
        name: "DT100 Pro Kids Watch",
        price: 32.99,
        category: "watches",
        image: "https://example.com/dt100-kids.jpg",
        description: "Children's smart watch with GPS tracking and SOS button."
    },
    {
        id: 23,
        name: "Y68 D20 Smart Watch",
        price: 22.99,
        category: "watches",
        image: "https://example.com/y68-watch.jpg",
        description: "Basic fitness tracker with heart rate monitoring and step counter."
    },
    {
        id: 24,
        name: "T800 Ultra Watch",
        price: 77.99,
        category: "watches",
        image: "https://example.com/t800-ultra.jpg",
        description: "Premium smart watch with always-on display and body temperature monitoring."
    },
    {
        id: 25,
        name: "M8 Pro Retro Console",
        price: 97.99,
        category: "mini-console",
        image: "https://example.com/m8pro.jpg",
        description: "5.1 inch IPS screen, 10000+ games, PSP/PS1/N64/DC games support."
    },
    {
        id: 26,
        name: "Powkiddy X18S",
        price: 207.99,
        category: "mini-console",
        image: "https://example.com/powkiddy.jpg",
        description: "Android gaming handheld, 5.5 inch screen, PS2/PSP/Dreamcast emulation."
    },
    {
        id: 27,
        name: "RG353V Retro Console",
        price: 136.99,
        category: "mini-console",
        image: "https://example.com/rg353v.jpg",
        description: "Vertical handheld, dual boot Linux/Android, perfect for GBA games."
    },
    {
        id: 28,
        name: "Vape Pod System X9",
        price: 52.99,
        category: "lifestyle",
        image: "https://example.com/vape-x9.jpg",
        description: "1500mAh battery, adjustable airflow, mesh coils included."
    },
    {
        id: 29,
        name: "RGB Gaming Mouse",
        price: 36.99,
        category: "gaming",
        image: "https://example.com/gaming-mouse.jpg",
        description: "16000 DPI, programmable buttons, customizable lighting."
    },
    {
        id: 30,
        name: "Mechanical Gaming Keyboard",
        price: 67.99,
        category: "gaming",
        image: "https://example.com/keyboard.jpg",
        description: "Blue switches, RGB backlight, anti-ghosting technology."
    },
    {
        id: 31,
        name: "Mini Projector HD",
        price: 158.99,
        category: "electronics",
        image: "https://example.com/projector.jpg",
        description: "1080p support, WiFi, Bluetooth, perfect for gaming and movies."
    },
    {
        id: 32,
        name: "Portable Bluetooth Speaker",
        price: 45.99,
        category: "electronics",
        image: "https://example.com/speaker.jpg",
        description: "RGB lights, waterproof, 12 hours battery life."
    },
    {
        id: 33,
        name: "AK-47 Airsoft Rifle",
        price: 189.99,
        category: "airsoft",
        image: "https://example.com/ak47-airsoft.jpg",
        description: "Electric airsoft rifle, metal gearbox, 400 FPS, includes battery and charger. Soft bullet compatible."
    },
    {
        id: 34,
        name: "M4A1 Tactical Airsoft",
        price: 165.99,
        category: "airsoft",
        image: "https://example.com/m4a1-airsoft.jpg",
        description: "Full metal construction, adjustable hop-up, rail system for attachments. Includes 2 magazines."
    },
    {
        id: 35,
        name: "Desert Eagle Airsoft Pistol",
        price: 137.99,
        category: "airsoft",
        image: "https://example.com/desert-eagle-airsoft.jpg",
        description: "Full metal slide, blowback action, 20rd magazine. Realistic weight and feel."
    },
    {
        id: 36,
        name: "MP5 Electric Airsoft Gun",
        price: 145.99,
        category: "airsoft",
        image: "https://example.com/mp5-airsoft.jpg",
        description: "Folding stock, 300rd high-capacity magazine, perfect for CQB."
    },
    {
        id: 37,
        name: "Tactical Vest Kit",
        price: 54.99,
        category: "airsoft",
        image: "https://example.com/tactical-vest.jpg",
        description: "Adjustable vest with magazine pouches, includes safety goggles and mask."
    },
    {
        id: 38,
        name: "5000 Soft Bullets Pack",
        price: 24.99,
        category: "airsoft",
        image: "https://example.com/soft-bullets.jpg",
        description: "6mm soft bullets, compatible with most airsoft guns. High quality."
    },
    {
        id: 39,
        name: "Glock 17 Airsoft Pistol",
        price: 85.99,
        category: "airsoft",
        image: "https://example.com/glock-airsoft.jpg",
        description: "Gas blowback pistol, metal slide, realistic weight and action."
    },
    {
        id: 40,
        name: "Sniper Rifle M24",
        price: 199.99,
        category: "airsoft",
        image: "https://example.com/m24-sniper.jpg",
        description: "Bolt action sniper rifle, adjustable cheek rest, includes scope and bipod."
    },
    {
        id: 41,
        name: "Golden Desert Eagle Airsoft",
        price: 159.99,
        category: "airsoft",
        image: "https://example.com/golden-desert-eagle.jpg",
        description: "Limited Edition Golden Desert Eagle with shell ejection, metal construction, includes foam bullets."
    },
    {
        id: 42,
        name: "RG353VS Mini Console",
        price: 127.99,
        category: "mini-console",
        image: "https://example.com/rg353vs.jpg",
        description: "3.5 inch IPS screen, 128GB storage, supports PS1/PSP/N64/GBA games."
    },
    {
        id: 43,
        name: "Powkiddy RGB10 MAX 3",
        price: 185.99,
        category: "mini-console",
        image: "https://example.com/rgb10max.jpg",
        description: "5.5 inch screen, Android system, powerful emulation capabilities."
    },
    {
        id: 44,
        name: "Mini Arcade Machine",
        price: 45.99,
        category: "mini-console",
        image: "https://example.com/mini-arcade.jpg",
        description: "3000+ classic games, 4.3 inch screen, rechargeable battery."
    },
    {
        id: 45,
        name: "LED Drone with Camera",
        price: 89.99,
        category: "electronics",
        image: "https://example.com/led-drone.jpg",
        description: "Foldable drone with 4K camera, LED lights, 20min flight time."
    },
    {
        id: 46,
        name: "Smart Robot Dog",
        price: 55.99,
        category: "toys",
        image: "https://example.com/robot-dog.jpg",
        description: "Programmable robot pet, voice control, does tricks and dances."
    },
    {
        id: 47,
        name: "Magnetic Levitating Globe",
        price: 42.99,
        category: "toys",
        image: "https://example.com/floating-globe.jpg",
        description: "LED light-up floating globe, perfect desk decoration."
    },
    {
        id: 48,
        name: "Gaming LED Strip Lights",
        price: 29.99,
        category: "electronics",
        image: "https://example.com/led-strip.jpg",
        description: "USB powered RGB lights, music sync, remote control included."
    },
    {
        id: 49,
        name: "Mini Karaoke Microphone",
        price: 35.99,
        category: "electronics",
        image: "https://example.com/karaoke-mic.jpg",
        description: "Bluetooth speaker + microphone, LED lights, echo effect."
    },
    {
        id: 50,
        name: "Holographic LED Fan",
        price: 89.99,
        category: "electronics",
        image: "https://example.com/holo-fan.jpg",
        description: "3D holographic display fan, WiFi control, customizable images."
    }
]; 