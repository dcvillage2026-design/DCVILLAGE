var APP_DATA = {
  "scenes": [
    {
      "id": "0-parking",
      "name": "Parking",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6567654318325928,
          "pitch": 0.08051602592120766,
          "rotation": 0,
          "target": "1-terrace"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-terrace",
      "name": "Terrace",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6875207976080482,
          "pitch": 0.1684712200921492,
          "rotation": 0,
          "target": "3-living-room"
        },
        {
          "yaw": 0.1833359391148015,
          "pitch": 0.10076800143125375,
          "rotation": 0,
          "target": "2-sala"
        },
        {
          "yaw": 1.9157029803954906,
          "pitch": 0.09808004358933076,
          "rotation": 0,
          "target": "0-parking"
        },
        {
          "yaw": -3.0099620072423043,
          "pitch": 0.04028053237037277,
          "rotation": 1.5707963267948966,
          "target": "6-bed-room1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-sala",
      "name": "Sala",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.2021023473586201,
          "pitch": 0.08328298256546418,
          "rotation": 0,
          "target": "1-terrace"
        },
        {
          "yaw": -0.6618595091703376,
          "pitch": 0.048511156775431274,
          "rotation": 0,
          "target": "0-parking"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-living-room",
      "name": "Living Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.47653969894285986,
          "pitch": 0.10523298587150265,
          "rotation": 0,
          "target": "6-bed-room1"
        },
        {
          "yaw": -1.459773356202625,
          "pitch": 0.44172192775797114,
          "rotation": 0,
          "target": "1-terrace"
        },
        {
          "yaw": 1.8168881701781023,
          "pitch": 0.4010194178578743,
          "rotation": 0,
          "target": "4-kitchen-1"
        },
        {
          "yaw": 2.3734496286711373,
          "pitch": 0.11113121554965133,
          "rotation": 0,
          "target": "5-kitchen-2"
        },
        {
          "yaw": 0.6874445945637966,
          "pitch": 0.2657120775797317,
          "rotation": 0.7853981633974483,
          "target": "9-stair"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kitchen-1",
      "name": "Kitchen-1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.042426904977777014,
          "pitch": 0.2122192479537972,
          "rotation": 0,
          "target": "5-kitchen-2"
        },
        {
          "yaw": 1.7092151813978447,
          "pitch": 0.37170472357681916,
          "rotation": 0,
          "target": "3-living-room"
        },
        {
          "yaw": 1.6891735891773099,
          "pitch": 0.11178582079534216,
          "rotation": 0,
          "target": "1-terrace"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-kitchen-2",
      "name": "Kitchen-2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.04696596614288673,
          "pitch": 0.27816033056830847,
          "rotation": 0,
          "target": "4-kitchen-1"
        },
        {
          "yaw": -0.524314322478288,
          "pitch": 0.10509474182169676,
          "rotation": 0,
          "target": "3-living-room"
        },
        {
          "yaw": -0.8899213709910399,
          "pitch": 0.055743673443283015,
          "rotation": 0,
          "target": "1-terrace"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bed-room1",
      "name": "Bed Room1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.397247221446511,
          "pitch": 0.5160528349168949,
          "rotation": 0,
          "target": "7-walk-in-closet-room1"
        },
        {
          "yaw": 2.1300826325983264,
          "pitch": 0.3073759761043551,
          "rotation": 6.283185307179586,
          "target": "3-living-room"
        },
        {
          "yaw": 1.1827502420474296,
          "pitch": 0.17567285738791583,
          "rotation": 4.71238898038469,
          "target": "8-bath-room1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-walk-in-closet-room1",
      "name": "Walk in Closet Room1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3535080409327307,
          "pitch": 0.49280358663221335,
          "rotation": 0,
          "target": "6-bed-room1"
        },
        {
          "yaw": 0.8735519073000795,
          "pitch": 0.19480309316231015,
          "rotation": 0,
          "target": "3-living-room"
        },
        {
          "yaw": 2.8818941248493113,
          "pitch": 0.3451382144231694,
          "rotation": 0,
          "target": "8-bath-room1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-bath-room1",
      "name": "Bath Room1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.1923459011783226,
          "pitch": 0.33369583172551387,
          "rotation": 0,
          "target": "7-walk-in-closet-room1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-stair",
      "name": "Stair",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.05183736975207687,
          "pitch": 0.4725375688830482,
          "rotation": 0,
          "target": "3-living-room"
        },
        {
          "yaw": 0.21451998768923097,
          "pitch": 0.5308604154466838,
          "rotation": 1.5707963267948966,
          "target": "6-bed-room1"
        },
        {
          "yaw": 0.05318814959224483,
          "pitch": -0.18791479534511168,
          "rotation": 0,
          "target": "10-hall"
        },
        {
          "yaw": -0.2982614426001966,
          "pitch": -0.18189180954236228,
          "rotation": 4.71238898038469,
          "target": "11-sub-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-hall",
      "name": "Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4989846063635497,
          "pitch": 0.3461541990491863,
          "rotation": 0,
          "target": "9-stair"
        },
        {
          "yaw": -0.7064169159279547,
          "pitch": 0.1410094870577474,
          "rotation": 0,
          "target": "11-sub-hall"
        },
        {
          "yaw": -2.20708995109554,
          "pitch": 0.1936195243781853,
          "rotation": 0,
          "target": "16-bed-room3"
        },
        {
          "yaw": 2.08508410730851,
          "pitch": 0.17797563015882645,
          "rotation": 0,
          "target": "20-bed-room4"
        },
        {
          "yaw": -0.47705645608077063,
          "pitch": 0.060662499549478,
          "rotation": 0,
          "target": "12-bed-room2"
        },
        {
          "yaw": -0.026504438289309817,
          "pitch": 0.924890149596564,
          "rotation": 0,
          "target": "3-living-room"
        },
        {
          "yaw": -0.5502224931929103,
          "pitch": 0.6978755743783189,
          "rotation": 4.71238898038469,
          "target": "4-kitchen-1"
        },
        {
          "yaw": 0.5849348547110296,
          "pitch": 0.7999300384349421,
          "rotation": 6.283185307179586,
          "target": "1-terrace"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-sub-hall",
      "name": "Sub Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.08657205586705174,
          "pitch": 0.08494011155958248,
          "rotation": 0,
          "target": "10-hall"
        },
        {
          "yaw": 0.7653101789008261,
          "pitch": 0.0635314092130912,
          "rotation": 1.5707963267948966,
          "target": "9-stair"
        },
        {
          "yaw": -0.163084497393438,
          "pitch": 0.07055626920528546,
          "rotation": 0,
          "target": "20-bed-room4"
        },
        {
          "yaw": 0.349653035726341,
          "pitch": 0.08415253900378161,
          "rotation": 1.5707963267948966,
          "target": "16-bed-room3"
        },
        {
          "yaw": 3.0618051886516238,
          "pitch": 0.16852609731078694,
          "rotation": 0,
          "target": "12-bed-room2"
        },
        {
          "yaw": -0.8630653755571522,
          "pitch": 1.079129996751334,
          "rotation": 0,
          "target": "3-living-room"
        },
        {
          "yaw": -0.915537698808226,
          "pitch": 0.7817246442995724,
          "rotation": 0,
          "target": "1-terrace"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-bed-room2",
      "name": "Bed Room2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.0761994394968184,
          "pitch": 0.6334705235304288,
          "rotation": 0,
          "target": "13-bed-room2-1"
        },
        {
          "yaw": 1.1057462076892222,
          "pitch": 0.5289440767069173,
          "rotation": 0,
          "target": "14-walk-in-closet-room2"
        },
        {
          "yaw": 1.216340191645303,
          "pitch": 0.13476499219862603,
          "rotation": 1.5707963267948966,
          "target": "15-bath-room2"
        },
        {
          "yaw": 3.1057400487894657,
          "pitch": 0.209551603229011,
          "rotation": 0,
          "target": "11-sub-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-bed-room2-1",
      "name": "Bed Room2-1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5155974383445212,
          "pitch": 0.7168646497077127,
          "rotation": 0,
          "target": "12-bed-room2"
        },
        {
          "yaw": -1.5236740570806226,
          "pitch": 0.2516597577170856,
          "rotation": 0,
          "target": "11-sub-hall"
        },
        {
          "yaw": -1.8609653498575174,
          "pitch": 0.24668986290922845,
          "rotation": 4.71238898038469,
          "target": "14-walk-in-closet-room2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-walk-in-closet-room2",
      "name": "Walk in Closet Room2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6134388583553712,
          "pitch": 0.3164988528257524,
          "rotation": 0,
          "target": "15-bath-room2"
        },
        {
          "yaw": -0.6743588178404671,
          "pitch": 0.11303362741606726,
          "rotation": 0,
          "target": "11-sub-hall"
        },
        {
          "yaw": -0.6255676251694524,
          "pitch": 0.45069547252911946,
          "rotation": 0,
          "target": "12-bed-room2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-bath-room2",
      "name": "Bath Room2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4875637241667672,
          "pitch": 0.351043949643719,
          "rotation": 0,
          "target": "14-walk-in-closet-room2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-bed-room3",
      "name": "Bed Room3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5990633852898775,
          "pitch": 0.2362457496594157,
          "rotation": 0,
          "target": "10-hall"
        },
        {
          "yaw": -1.2291939018522307,
          "pitch": 0.44993964918505114,
          "rotation": 0,
          "target": "17-walk-in-closet-room3"
        },
        {
          "yaw": -1.0854609988396753,
          "pitch": 0.19941668572892723,
          "rotation": 1.5707963267948966,
          "target": "18-bath-room3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-walk-in-closet-room3",
      "name": "Walk in Closet Room3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.2857315946633161,
          "pitch": 0.3923698763787833,
          "rotation": 0,
          "target": "16-bed-room3"
        },
        {
          "yaw": 0.42889464190011495,
          "pitch": 0.1326649559802231,
          "rotation": 1.5707963267948966,
          "target": "10-hall"
        },
        {
          "yaw": -1.450273937590035,
          "pitch": 0.19426444031291012,
          "rotation": 0,
          "target": "18-bath-room3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-bath-room3",
      "name": "Bath Room3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3058963753851085,
          "pitch": 0.18131319048953998,
          "rotation": 0,
          "target": "17-walk-in-closet-room3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-walk-in-closet-room4",
      "name": "Walk in Closet Room4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7355143901063315,
          "pitch": 0.17714084879076886,
          "rotation": 0,
          "target": "10-hall"
        },
        {
          "yaw": 2.1085428005067666,
          "pitch": 0.24552832511115597,
          "rotation": 0,
          "target": "22-bath-room4"
        },
        {
          "yaw": 2.5834336863061083,
          "pitch": 0.3747787541340504,
          "rotation": 0,
          "target": "20-bed-room4"
        },
        {
          "yaw": 2.9162960839510905,
          "pitch": 0.256257020314127,
          "rotation": 1.5707963267948966,
          "target": "21-bed-room4-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-bed-room4",
      "name": "Bed Room4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.38437087952168625,
          "pitch": 0.4498224789351184,
          "rotation": 0,
          "target": "21-bed-room4-1"
        },
        {
          "yaw": 1.2304786044846878,
          "pitch": 0.22731755797193465,
          "rotation": 7.853981633974483,
          "target": "22-bath-room4"
        },
        {
          "yaw": 1.0464561803255226,
          "pitch": 0.3337984927630142,
          "rotation": 0,
          "target": "19-walk-in-closet-room4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-bed-room4-1",
      "name": "Bed Room4-1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5173943469342603,
          "pitch": 0.4674720075199872,
          "rotation": 0,
          "target": "20-bed-room4"
        },
        {
          "yaw": -1.492655607475296,
          "pitch": 0.11461166180941618,
          "rotation": 0,
          "target": "22-bath-room4"
        },
        {
          "yaw": -1.5369905345152368,
          "pitch": 0.27484137731022784,
          "rotation": 4.71238898038469,
          "target": "19-walk-in-closet-room4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-bath-room4",
      "name": "Bath Room4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6326211352120197,
          "pitch": 0.2508587691538189,
          "rotation": 0,
          "target": "20-bed-room4"
        },
        {
          "yaw": -2.6068668273628983,
          "pitch": 0.9581833943505522,
          "rotation": 0,
          "target": "23-bath-room4-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-bath-room4-1",
      "name": "Bath Room4-1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.715798775043833,
          "pitch": 0.21326175403936531,
          "rotation": 4.71238898038469,
          "target": "20-bed-room4"
        },
        {
          "yaw": -1.3400542555083437,
          "pitch": 0.7569413488538359,
          "rotation": 0,
          "target": "22-bath-room4"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "DC VILLAGE",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
