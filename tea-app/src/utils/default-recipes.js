import blackTeaPic from '../images/blacktea.png'
import greenTeaPic from '../images/greentea.png'
import herbalTeaPic from '../images/herbaltea.png'
import oolongTeaPic from '../images/oolongtea.png'
import rooibosTeaPic from '../images/rooibostea.png'
import whiteTeaPic from '../images/whitetea.png'

const recipeData1 = [
  {
    _id: 1,
    steepTime: 150,
    temperature: 212,
    picture: blackTeaPic,
    note: "Black teas undergo the most dramatic metamorphosis from harvest to consumer of the teas. They require more heat and time to show their flavor, but keep an eye out for oversteeping. If your brew is turning bitter you will want to take a few seconds off of your steep time. Flavored black teas may benefit from steep times as long as 5 minutes. Milk and sugar can balance out a more robust brew.",
    tea: {
      type: 'Black Tea',
      name: 'Black Tea'
    },
    extra: [
      'Milk',
      'Sweetner',
      'Lemon'
    ]
  },
  {
    _id: 2,
    steepTime: 90,
    temperature: 175,
    picture: greenTeaPic,
    note: "Green teas are typically dried, shaped, then heated (steamed pan fried, or roasted). This is not a lot of processing for tea so Green Tea's flavors are readily available. When brewed with caution, they have little to no bitterness, a delightful chlorophyll tang, and flavors evocative of all green plant life from hops to grass.",
    tea: {
      type: 'Green Tea',
      name: 'Green Tea'
    },
    extra: [
      'Lemon',
      'Soy Milk',
      'Sugar'
    ]
  },
  {
    _id: 3,
    steepTime: 240,
    temperature: 212,
    picture: oolongTeaPic,
    note: "Oolong teas are chameleons with flavors that straddle green and black teas. They have a golden hue that ranges from a soft dawn to a robust marigold. Each Oolong will be steeped a little differently, but a good rule of thumb is to steep blade shaped teas for about 2 minutes, twisted teas for about 3 minutes, and furled/balled teas for about 5 minutes. The more tightly coiled oolong tea is, the more brews you can get out of it! Additional brews benefit from longer steep times and hotter water.",
    extra: [],
    tea: {
      type: 'Oolong Tea',
      name: 'Oolong Tea'
    }
  },
  {
    _id: 4,
    steepTime: 120,
    temperature: 150,
    picture: whiteTeaPic,
    note: "White Teas have the most subtle palate of all preparations of tea. It is usually only shaped and dried. Certain exquisite white teas are only harvested at particular times and their rarity and quality are denoted by their flush. A first flush white tea picked at the peak of the season can and should run you a pretty penny. Flavored white teas are a great entry point for new drinkers because they are typically a little less expensive and provide more of a story for your palate while you hone in on what you like from a white tea.",
    tea: {
      type: 'White Tea',
      name: 'White Tea'
    },
    extra: [
      'Sugar'
    ]
  },
  {
    _id: 5,
    steepTime: 300,
    temperature: 212,
    picture: herbalTeaPic,
    note: "It is best practice, especially if you are steeping for health benefits, to follow the instructions on the packaging for steeping herbs. It is worth noting that while decaffeinated teas have small amounts of caffeine, herbal infusions do not contain tea leaves so they can be absolutely caffeine free. Always read the package because certain popular herbs contain extraordinary amounts of caffeine.",
    tea: {
      type: 'Herbal',
      name: 'Herbal'
    },
    extra: [
      'Lemon',
      'Sugar'
    ]
  },
  {
    _id: 6,
    steepTime: 300,
    temperature: 212,
    picture: rooibosTeaPic,
    note: "Rooibos infusions have a robust flavor with little tannins that lends itself to additions. They are completely caffeine free, and a worthy pursuit for anyone looking to drink a nuanced brew without increasing their heart rate. You can steep them like a regular tea or try putting the shavings directly in your kettle and boiling the water whenever you would like a fresh pot.",
    tea: {
      type: 'Rooibos',
      name: 'Rooibos'
    },
    extra: [
      'Lemon',
      'Sugar',
      'Milk'
    ]
  }
];

export default recipeData1;
