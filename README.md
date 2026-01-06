# Next.js Rendering Strategies (App Router)

This project demonstrates Static (SSG), Dynamic (SSR), and Hybrid (ISR) rendering using the Next.js App Router.

## Pages & Rendering Modes
- **/about** → Static Rendering (SSG)  
  Pre-rendered at build time for maximum speed.

- **/** → Dynamic Rendering (SSR)  
  Rendered on every request using `cache: 'no-store'` for real-time data.

- **/news** → Hybrid Rendering (ISR)  
  Static page that revalidates every 60 seconds using `revalidate`.

## Why These Choices
- SSG for fast, rarely changing content  
- SSR for fresh, real-time or personalized data  
- ISR to balance performance and data freshness

## Trade-offs & Reflection
Static rendering scales best but can become stale.  
SSR ensures freshness but increases server cost.  
ISR provides the best balance for most shared content.

If the app had 10× more users, SSR would be limited to only critical pages, while static and hybrid rendering would handle most traffic.
