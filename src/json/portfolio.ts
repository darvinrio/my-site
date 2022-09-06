import thispagepng from "../imgs/portfolio/thispage.png";
import ghostpng from "../imgs/portfolio/ghost.png";
import arblunapng from "../imgs/portfolio/arbluna.png";
import hyphenminepng from "../imgs/portfolio/hyphenmine.png";
import hyarbpng from "../imgs/portfolio/hyarb.png";
import opti_gov from "../imgs/portfolio/opti_gov.png";
import celsius_sushi from "../imgs/portfolio/celsius_sushi.png";
import osmo_unstake from "../imgs/portfolio/osmo_unstake.png";
import polygon_block_comp from "../imgs/portfolio/polygon_block_comp.png";

import anc_token_use from "../imgs/portfolio/anc_token_use.png";
import anchor_bonds from "../imgs/portfolio/anchor_bonds.png";
import curve_slippage from "../imgs/portfolio/curve_slippage.png";
import dex_price from "../imgs/portfolio/dex_price.png";
import maker_collateral from "../imgs/portfolio/maker_collateral.png";
import sol_performance from "../imgs/portfolio/sol_performance.png";
import sushi_powah from "../imgs/portfolio/sushi_powah.png";
import velo_lock from "../imgs/portfolio/velo_lock.png";
import visr_tvl from "../imgs/portfolio/visr_tvl.png";

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
  {
    header: "Optimism Governance",
    img: opti_gov,
    desc: "Flipside Dashboard tracking Optimism Governance distribution",
    href: "https://app.flipsidecrypto.com/dashboard/optimism-governance-l5WXpo",
    git: null,
    icons: ["sql", "fs"],
  },
  {
    header: "Celsius on Sushiswap Ecosystem",
    img: celsius_sushi,
    desc: "Flipside Dashboard analysing Celsius wallets activity on Sushiswap ecosystem before bankruptcy",
    href: "https://app.flipsidecrypto.com/dashboard/celsius-on-sushi-LCkFLn",
    git: null,
    icons: ["sql", "fs"],
  },
  {
    header: "Polygon Block Performance",
    img: polygon_block_comp,
    desc: "Flipside Dashboard comparing Polygon's block times with other competing L2s",
    href: "https://app.flipsidecrypto.com/dashboard/polygon-block-performance-jUjpDa",
    git: null,
    icons: ["sql", "fs"],
  },
  {
    header: "Osmosis unstakers",
    img: osmo_unstake,
    desc: "Flipside Dashboard analysing and tracking destination of OSMO post-unstaking",
    href: "https://app.flipsidecrypto.com/dashboard/osmosis-unstakers-sj3Ldh",
    git: null,
    icons: ["sql", "fs"],
  },
  {
    header: "Visor TVL",
    img: visr_tvl,
    desc: "Flipside Dashboard tracking Visor's TVL",
    href: "https://app.flipsidecrypto.com/dashboard/visor-tvl-volatility-ReNjLM",
    git: null,
    icons: ["sql", "fs"],
  },
  {
    header: "Velodrome ve Lockers",
    img: velo_lock,
    desc: "Flipside Dashboard tracking veLockers of Velodrome on Optimism in the first month of initiation",
    href: "https://app.flipsidecrypto.com/dashboard/velodrome-locks-cWsrkS",
    git: null,
    icons: ["sql", "fs"],
  },
  {
    header: "Sushiswap Governance",
    img: sushi_powah,
    desc: "Flipside Dashboard tracking SUSHI-POWAH (SUSHI-eco governance power) distribution",
    href: "https://app.flipsidecrypto.com/dashboard/sushi-governance-2l7n3p",
    git: null,
    icons: ["sql", "fs"],
  },
  {
    header: "Dex Token Price History Comparison",
    img: dex_price,
    desc: "Flipside Dashboard Comparing DEX governance token's historical price appreciation",
    href: "https://app.flipsidecrypto.com/dashboard/sushi-price-status-mj9231",
    git: null,
    icons: ["sql", "fs"],
  },
  {
    header: "Collaterals on Maker",
    img: maker_collateral,
    desc: "Flipside Dashboard tracking Collaterals on Maker",
    href: "https://app.flipsidecrypto.com/dashboard/maker-collateral-impact-zHrFmd",
    git: null,
    icons: ["sql", "fs"],
  },
  {
    header: "Slippage Losses on Curve",
    img: curve_slippage,
    desc: "Flipside Dashboard analysing historical value lost on Curve stableswaps",
    href: "https://app.flipsidecrypto.com/dashboard/curve-impermanent-losses-6ouO-H",
    git: null,
    icons: ["sql", "fs"],
  },
  {
    header: "Anchor Bonds distribution",
    img: anchor_bonds,
    desc: "Flipside Dashboard analysing distribution of bonded-Asset on Anchor Borrow",
    href: "https://app.flipsidecrypto.com/dashboard/anchor-financial-imagineering-nCQ4vQ",
    git: null,
    icons: ["sql", "fs"],
  },
  {
    header: "ANC usage",
    img: anc_token_use,
    desc: "Flipside Dashboard analysing ANC use-cases",
    href: "https://app.flipsidecrypto.com/dashboard/anchor-rewards-destination-xasS5M",
    git: null,
    icons: ["sql", "fs"],
  },
  {
    header: "Solana Performance",
    img: sol_performance,
    desc: "Flipside Dashboard tracking Solana's overall performance metrics",
    href: "https://app.flipsidecrypto.com/dashboard/solana-network-performance-4pAr-b",
    git: null,
    icons: ["sql", "fs"],
  },
];
