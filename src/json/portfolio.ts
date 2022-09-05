import ghostpng from "../imgs/portfolio/ghost.png";
import arblunapng from "../imgs/portfolio/arbluna.png";
import hyphenminepng from "../imgs/portfolio/hyphenmine.png";
import hyarbpng from "../imgs/portfolio/hyarb.png";

export const portfolio = [
  {
    header: "GhostHunter",
    img: ghostpng,
    desc: "A etherscan like block explorer for AAVE",
    href: "https://ghost-hunter-aave.herokuapp.com/",
    icons: ['react','js','gql']
  },
  {
    header: "Hyphen Bridge",
    img: hyphenminepng,
    desc: "Dashboard tracking Hyphen bridge activity on 6 different chains",
    href: "https://bico-hyphen.vercel.app/",
    icons: ['next','js','sql']
  },
  {
    header: "Luna Arbitrage Aggregator",
    img: arblunapng,
    desc: "[now defunct] Aggregates LUNA derivatives arbitrage opportunities",
    href: "https://luna-arb.herokuapp.com/",
    icons: ['react','js','jsonrpc']
  },
  {
    header: "Hyphen on Arbitrum",
    img: hyarbpng,
    desc: "Flipside Dashboard tracking Hyphen bridge activity on Arbitrum",
    href: "https://app.flipsidecrypto.com/dashboard/hyphen-bridge-on-arbitrum-oSUXhe",
    icons: ['sql','fs']
  },
];
