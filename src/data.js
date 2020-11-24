//Category = Phone//subCat = Apple//slug = iPhone11
import iPhone11 from "./images/imagesSlot/Apple/iphone11pro.jpg"
import img1 from "./images/imagesSlot/Apple/iphone11pro-2.jpg"
import img2 from "./images/imagesSlot/Apple/iphone11pro-2.jpg"
// import img2 from "./images/imagesSlot/Apple/iphone11pro-3.jpg"

//Category = Phone//subCat = Apple//slug = iPhone8
import iPhone8 from "./images/imagesSlot/Apple/iphone8.jpg"
import img3 from "./images/imagesSlot/Apple/iphone8.jpg"
import img4 from "./images/imagesSlot/Apple/iphone8.jpg"
// import img3 from "./images/imagesSlot/Apple/iphone8-3.jpg"
// import img3 from "./images/imagesSlot/Apple/iphone8-2.jpg"
// import img4 from "./images/imagesSlot/Apple/iphone8-3.jpg"

//Category = Phone//subCat = Apple//slug = iPhone7
import iPhone7 from "./images/imagesSlot/Apple/iphone7.jpg"
import img5 from "./images/imagesSlot/Apple/iphone7-2.jpg"
import img6 from "./images/imagesSlot/Apple/iphone7-3.jpg"

//Category = Phone//subCat = Samsung//slug = Note10
import samsungNote10 from "./images/imagesSlot/Samsung/galaxy-note-10.jpg"
import img7 from "./images/imagesSlot/Samsung/galaxy-note-10-2.jpg"
import img8 from "./images/imagesSlot/Samsung/galaxy-note-10-3.jpg"

//Category = Phone//subCat = Samsung//slug = Fold
import samsungFold from "./images/imagesSlot/Samsung/galaxy-fold.jpg"
import img9 from "./images/imagesSlot/Samsung/galaxy-fold-2.jpg"
import img10 from "./images/imagesSlot/Samsung/galaxy-fold-3.jpg"

//Category = Phone//subCat = Samsung//slug = galaxy a51
import samsunga51 from "./images/imagesSlot/Samsung/Samsung-Galaxy-A51.jpg"
import img11 from "./images/imagesSlot/Samsung/Samsung-Galaxy-A51-2.jpg"
import img12 from "./images/imagesSlot/Samsung/Samsung-Galaxy-A51-3.jpg"

export default [
  {
    sys: {
      id: "1"
    },
    fields: {
      id:"1",
      category: "phone",
      subCategory: "apple",
      name: "iPhone 11 Pro Dual Sim Plus",
      slug: "iPhone-11-Pro-Dual-Sim",
      price: 560000,
      ram: 4,
      rom: 128,
      img: iPhone11,
      installmentalPayment: false,
      warranty: true,
      featured: true,
      inCart: false,
      count: 0,
      total: 0,
      description:
        "Display: 5.8 OLED capacitive touchscreen, 1125 x 2436 pixels, 19.5:9 ratio, Processor -  iOS 13, Storage: 64GB/256GB/512GB ROM + 6GB RAM, Camera: Dual 12MP + 12MP + 12MP Rear/Dual 12MP + 3D ToF camera Front (With Quad-LED flash), Operating System: iOS 13,SIM: Dual SIM, Battery: Non-removable Li-Ion 3190 mAh battery, Network: 4G/ 3G/ 2G",
        extras: [
        "Qi wireless charging",
        "USB Power Delivery 3.0",
        "Siri natural language commands and dictation",
        "iCloud cloud service",
        "Front/rear glass + aluminium frame (7000 series)",
        "Audio editor, water-resistant (up to 4m for 30 mins)",
        "A-GPS support & Glonass"
      ],
      images: [
        {
          fields: {
            file: {
              url: iPhone11
            }
          }
        },
        {
          fields: {
            file: {
              url: img1
            }
          }
        },
        {
          fields: {
            file: {
              url: img2
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "2"
    },
    fields: {
        id:"2",
        category: "phone",
        subCategory: "apple",
        name: "iPhone 8",
        slug: "iPhone-8",
        price: 275000,
        ram: 3,
        rom: 128,
        installmentalPayment: false,
        warranty: true,
        featured: true,
        inCart: false,
        count: 0,
        img: iPhone8,
        total: 0,
        description:
          "Display: 5.8 OLED capacitive touchscreen, 1125 x 2436 pixels, 19.5:9 ratio, Processor -  iOS 13, Storage: 64GB/256GB/512GB ROM + 6GB RAM, Camera: Dual 12MP + 12MP + 12MP Rear/Dual 12MP + 3D ToF camera Front (With Quad-LED flash), Operating System: iOS 13,SIM: Dual SIM, Battery: Non-removable Li-Ion 3190 mAh battery, Network: 4G/ 3G/ 2G",
          extras: [
          "Qi wireless charging",
          "USB Power Delivery 3.0",
          "Siri natural language commands and dictation",
          "iCloud cloud service",
          "Front/rear glass + aluminium frame (7000 series)",
          "Audio editor, water-resistant (up to 4m for 30 mins)",
          "A-GPS support & Glonass"
        ],
        images: [
          {
            fields: {
              file: {
                url: iPhone8
              }
            }
          },
          {
            fields: {
              file: {
                url: img3
              }
            }
          },
          {
            fields: {
              file: {
                url: img4
              }
            }
          }
        ]
      }
  },
  {
    sys: {
      id: "3"
    },
    fields: {
        id:"3",
        category: "phone",
        subCategory: "apple",
        name: "iPhone 7",
        slug: "iPhone-7",
        price: 150000,
        ram: 3,
        rom: 256,
        installmentalPayment: false,
        warranty: true,
        featured: false,
        img: iPhone7,
        inCart: false,
        count: 0,
        total: 0,
        description:
          "Display: 5.8 OLED capacitive touchscreen, 1125 x 2436 pixels, 19.5:9 ratio, Processor -  iOS 13, Storage: 64GB/256GB/512GB ROM + 6GB RAM, Camera: Dual 12MP + 12MP + 12MP Rear/Dual 12MP + 3D ToF camera Front (With Quad-LED flash), Operating System: iOS 13,SIM: Dual SIM, Battery: Non-removable Li-Ion 3190 mAh battery, Network: 4G/ 3G/ 2G",
          extras: [
          "Qi wireless charging",
          "USB Power Delivery 3.0",
          "Siri natural language commands and dictation",
          "iCloud cloud service",
          "Front/rear glass + aluminium frame (7000 series)",
          "Audio editor, water-resistant (up to 4m for 30 mins)",
          "A-GPS support & Glonass"
        ],
        images: [
          {
            fields: {
              file: {
                url: iPhone7
              }
            }
          },
          {
            fields: {
              file: {
                url: img5
              }
            }
          },
          {
            fields: {
              file: {
                url: img6
              }
            }
          }
        ]
      }
  },
  {
    sys: {
      id: "4"
    },
    fields: {
        id: "4",
        category: "phone",
        subCategory: "samsung",
        name: "samsung galaxy note 10",
        slug: "samsung-galaxy-note-10",
        price: 428000,
        ram: 6,
        rom: 256,
        img: samsungNote10,
        installmentalPayment: false,
        warranty: true,
        featured: false,
        inCart: false,
        count: 0,
        total: 0,
        description:
          "Display: 5.8 OLED capacitive touchscreen, 1125 x 2436 pixels, 19.5:9 ratio, Processor -  iOS 13, Storage: 64GB/256GB/512GB ROM + 6GB RAM, Camera: Dual 12MP + 12MP + 12MP Rear/Dual 12MP + 3D ToF camera Front (With Quad-LED flash), Operating System: iOS 13,SIM: Dual SIM, Battery: Non-removable Li-Ion 3190 mAh battery, Network: 4G/ 3G/ 2G",
          extras: [
          "Qi wireless charging",
          "USB Power Delivery 3.0",
          "Siri natural language commands and dictation",
          "iCloud cloud service",
          "Front/rear glass + aluminium frame (7000 series)",
          "Audio editor, water-resistant (up to 4m for 30 mins)",
          "A-GPS support & Glonass"
        ],
        images: [
          {
            fields: {
              file: {
                url: samsungNote10
              }
            }
          },
          {
            fields: {
              file: {
                url: img7
              }
            }
          },
          {
            fields: {
              file: {
                url: img8
              }
            }
          }
        ]
      }
  },
  {
    sys: {
      id: "5"
    },
    fields: {
      id: "5",
        category: "phone",
        subCategory: "samsung",
        name: "samsung galaxy fold",
        slug: "samsung-galaxy-fold",
        price: 921000,
        ram: 12,
        rom: 512,
        img: samsungFold,
        installmentalPayment: true,
        warranty: true,
        featured: false,
        inCart: false,
        count: 0,
        total: 0,
        description:
          "Display: 5.8 OLED capacitive touchscreen, 1125 x 2436 pixels, 19.5:9 ratio, Processor -  iOS 13, Storage: 64GB/256GB/512GB ROM + 6GB RAM, Camera: Dual 12MP + 12MP + 12MP Rear/Dual 12MP + 3D ToF camera Front (With Quad-LED flash), Operating System: iOS 13,SIM: Dual SIM, Battery: Non-removable Li-Ion 3190 mAh battery, Network: 4G/ 3G/ 2G",
          extras: [
          "Qi wireless charging",
          "USB Power Delivery 3.0",
          "Siri natural language commands and dictation",
          "iCloud cloud service",
          "Front/rear glass + aluminium frame (7000 series)",
          "Audio editor, water-resistant (up to 4m for 30 mins)",
          "A-GPS support & Glonass"
        ],
        images: [
          {
            fields: {
              file: {
                url: samsungFold
              }
            }
          },
          {
            fields: {
              file: {
                url: img9
              }
            }
          },
          {
            fields: {
              file: {
                url: img10
              }
            }
          }
        ]
      }
  },
  {
    sys: {
      id: "6"
    },
    fields: {
      id: "6",
        category: "phone",
        subCategory: "samsung",
        name: "samsung galaxy A51",
        slug: "samsung-galaxy-A51",
        price: 69000,
        ram: 4,
        rom: 128,
        img: samsunga51,
        installmentalPayment: false,
        warranty: true,
        featured: true,
        inCart: false,
        count: 0,
        total: 0,
        description:
          "Display: 5.8 OLED capacitive touchscreen, 1125 x 2436 pixels, 19.5:9 ratio, Processor -  iOS 13, Storage: 64GB/256GB/512GB ROM + 6GB RAM, Camera: Dual 12MP + 12MP + 12MP Rear/Dual 12MP + 3D ToF camera Front (With Quad-LED flash), Operating System: iOS 13,SIM: Dual SIM, Battery: Non-removable Li-Ion 3190 mAh battery, Network: 4G/ 3G/ 2G",
          extras: [
          "Qi wireless charging",
          "USB Power Delivery 3.0",
          "Siri natural language commands and dictation",
          "iCloud cloud service",
          "Front/rear glass + aluminium frame (7000 series)",
          "Audio editor, water-resistant (up to 4m for 30 mins)",
          "A-GPS support & Glonass"
        ],
        images: [
          {
            fields: {
              file: {
                url: samsunga51
              }
            }
          },
          {
            fields: {
              file: {
                url: img11
              }
            }
          },
          {
            fields: {
              file: {
                url: img12
              }
            }
          }
        ]
      }
  }
];
