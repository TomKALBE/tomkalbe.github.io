var APP_DATA = {
  "scenes": [
    {
      "id": "0-exterieur",
      "name": "Exterieur",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.029086460666167824,
          "pitch": 0.4296973281250569,
          "rotation": 0,
          "target": "1-entre"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-entre",
      "name": "Entrée",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8133910721606554,
          "pitch": 0.39971715305932953,
          "rotation": 0,
          "target": "2-salon"
        },
        {
          "yaw": 0.9728548321029784,
          "pitch": 0.34178920298831805,
          "rotation": 0,
          "target": "3-salle-a-manger"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-salon",
      "name": "Salon",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.279025713442639,
          "pitch": 0.30799199264063404,
          "rotation": 0,
          "target": "1-entre"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-salle-a-manger",
      "name": "Salle a manger",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8089777292330602,
          "pitch": 0.2834324857107262,
          "rotation": 0,
          "target": "1-entre"
        },
        {
          "yaw": 0.4484006463705654,
          "pitch": 0.44529237635234864,
          "rotation": 0,
          "target": "4-cuisine"
        },
        {
          "yaw": -0.8632620841561511,
          "pitch": 0.3397359837222247,
          "rotation": 12.566370614359176,
          "target": "8-palier"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-cuisine",
      "name": "Cuisine",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.7262851068714555,
          "pitch": 0.27139499965477754,
          "rotation": 0,
          "target": "3-salle-a-manger"
        },
        {
          "yaw": -2.3276418967141197,
          "pitch": 0.3317868545139788,
          "rotation": 0,
          "target": "5-couloir"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-couloir",
      "name": "Couloir",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.076157634452475,
          "pitch": 0.44755213897312984,
          "rotation": 0,
          "target": "4-cuisine"
        },
        {
          "yaw": -0.5276034421216256,
          "pitch": 0.3063822326909147,
          "rotation": 0,
          "target": "2-salon"
        },
        {
          "yaw": -0.01462485419794568,
          "pitch": 0.33262985800427636,
          "rotation": 0,
          "target": "7-couloir"
        },
        {
          "yaw": 0.7828910799048394,
          "pitch": 0.6271239712101035,
          "rotation": 0,
          "target": "6-salle-deau"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-salle-deau",
      "name": "Salle d'eau",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.105506986108084,
          "pitch": 0.420839674269363,
          "rotation": 0,
          "target": "5-couloir"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-couloir",
      "name": "Couloir",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6295598557165434,
          "pitch": 0.5080181093076988,
          "rotation": 0,
          "target": "5-couloir"
        },
        {
          "yaw": 1.9929335609688348,
          "pitch": 0.4723082741884248,
          "rotation": 0,
          "target": "2-salon"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.2849932103442274,
          "pitch": 0.2495910745893859,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Amoire</font></font>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">1m3</font></font>"
        },
        {
          "yaw": -0.314543224271846,
          "pitch": 0.10005201757245352,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Amoire</font></font>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">2 m3</font></font>"
        },
        {
          "yaw": -0.49335588466958846,
          "pitch": 0.09713876159850976,
          "title": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Amoire</font></font>",
          "text": "<font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">1m3</font></font>"
        }
      ]
    },
    {
      "id": "8-palier",
      "name": "Palier",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7239505532772395,
          "pitch": 0.947283884989572,
          "rotation": 0,
          "target": "3-salle-a-manger"
        },
        {
          "yaw": -0.2624237766503601,
          "pitch": 0.4259063902141218,
          "rotation": 10.995574287564278,
          "target": "9-chambre"
        },
        {
          "yaw": 1.0103717996112245,
          "pitch": 0.2311049636682707,
          "rotation": 1.5707963267948966,
          "target": "12-salle-de-bain"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-chambre",
      "name": "Chambre",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0013475092235193,
          "pitch": 0.4221295348471301,
          "rotation": 0,
          "target": "10-balcon"
        },
        {
          "yaw": 1.0936796764004413,
          "pitch": 0.2529762842295753,
          "rotation": 0,
          "target": "11-dressing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-balcon",
      "name": "Balcon",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "11-dressing",
      "name": "Dressing",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "12-salle-de-bain",
      "name": "Salle de bain",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.012968998477774,
          "pitch": 0.30167504941197976,
          "rotation": 1.5707963267948966,
          "target": "8-palier"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
