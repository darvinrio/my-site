import thispagepng from "../imgs/portfolio/thispage.png";
import ghostpng from "../imgs/portfolio/ghost.png";
import arblunapng from "../imgs/portfolio/arbluna.png";
import hyphenminepng from "../imgs/portfolio/hyphenmine.png";
import hyarbpng from "../imgs/portfolio/hyarb.png";

export interface proProp {
  header: string;
  img: any;
  desc: string;
  href: string;
  git: string | null;
  icons: string[];
}

export const portfolio: proProp[] = [
  {
    header: "My page",
    img: thispagepng,
    desc: "My portfolio website",
    href: "/",
    git: "https://github.com/darvinrio/my-site",
    icons: ["astro", "js", "ts", "tw"],
  },
  {
    header: "GhostHunter",
    img: ghostpng,
    desc: "A etherscan like block explorer for AAVE",
    href: "https://ghost-hunter-aave.herokuapp.com/",
    git: "https://github.com/darvinrio/ghost-hunter",
    icons: ["react", "js", "ts", "gql", "sty"],
  },
  {
    header: "Hyphen Bridge",
    img: hyphenminepng,
    desc: "Dashboard tracking Hyphen bridge activity on 6 different chains",
    href: "https://bico-hyphen.vercel.app/",
    git: "https://github.com/darvinrio/bico-hyphen",
    icons: ["next", "js", "ts", "sql", "sty"],
  },
  {
    header: "Luna Arbitrage Aggregator",
    img: arblunapng,
    desc: "[now defunct] Aggregates LUNA derivatives arbitrage opportunities",
    href: "https://luna-arb.herokuapp.com/",
    git: "https://github.com/darvinrio/luna_arb_react",
    icons: ["react", "js", "sty", "terra"],
  },
  {
    header: "Hyphen on Arbitrum",
    img: hyarbpng,
    desc: "Flipside Dashboard tracking Hyphen bridge activity on Arbitrum",
    href: "https://app.flipsidecrypto.com/dashboard/hyphen-bridge-on-arbitrum-oSUXhe",
    git: null,
    icons: ["sql", "fs"],
  },
];
