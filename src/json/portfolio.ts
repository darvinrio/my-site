import ghostpng from "../imgs/ghost.png";
import arblunapng from "../imgs/arbluna.png";
import hyphenminepng from "../imgs/hyphenmine.png";

export const portfolio = [
  {
    header: "GhostHunter",
    img: ghostpng,
    desc: "A etherscan like block explorer for AAVE",
    href: "https://ghost-hunter-aave.herokuapp.com/",
  },
  {
    header: "Hyphen Bridge",
    img: hyphenminepng,
    desc: "Tracking hyphen bridge activity on 6 different chains",
    href: "https://bico-hyphen.vercel.app/",
  },
  {
    header: "Luna Arbitrage Aggregator",
    img: arblunapng,
    desc: "[now defunct] Aggregates LUNA derivatives arbitrage opportunities",
    href: "https://luna-arb.herokuapp.com/",
  },
];
