function ctaClick(creative) {
 const base_url = "https://app.adjust.com/i9if394?deep_link=https%3A%2F%2Fapp.kyte.com.br%2Fbilling&fallback_lp=https%3A%2F%2Fapps.apple.com%2Fus%2Fapp%2Fkyte-pos-online-catalog%2Fid1345983058%3Fuo%3D4%26at%3D11l6hc%26app%3Ditunes%26ct%3Dfnd&campaign=pt&adgroup={adgroup}&creative={creative}";
 const adgroup = window.location.pathname.replace(/\//g, '');
   const url = base_url.replace('{adgroup}', adgroup).replace('{creative}', creative);
 return window.open(url, '_blank');
}
function setCtaOnclick(creative) {
   try {
       document.getElementById(creative).onclick = () => ctaClick(creative);
   } catch(e) {
       console.log(e);
   }
}
window.onload=function(){
   setCtaOnclick('cta-menu');
   setCtaOnclick('cta-hero');
   setCtaOnclick('cta-hero-ab');
   setCtaOnclick('cta-mid-0');
   setCtaOnclick('cta-mid-1');
   setCtaOnclick('cta-mid-2');
   setCtaOnclick('cta-bottom');
   setCtaOnclick('cta-plan-0');
   setCtaOnclick('cta-plan-1');
   setCtaOnclick('cta-plan-m');
   setCtaOnclick('cta-plan-a');
   setCtaOnclick('cta-footer');
   setCtaOnclick('cta-blog-link');
   setCtaOnclick('cta-blog-bottom');
   setCtaOnclick('cta-menu-help');
   setCtaOnclick('cta-review');
 setCtaOnclick('play-store-cta');
   setCtaOnclick('app-store-cta');
   setCtaOnclick('cta-sib-hero');
};
