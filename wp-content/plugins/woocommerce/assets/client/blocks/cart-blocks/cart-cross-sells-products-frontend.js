(self.webpackChunkwebpackWcBlocksJsonp=self.webpackChunkwebpackWcBlocksJsonp||[]).push([[6737],{7121:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var c=r(9196),a=r(2629),n=r(3849),o=r.n(n);r(333);const s=({className:e="",disabled:t=!1,name:r,permalink:n="",target:s,rel:l,style:i,onClick:u,...d})=>{const m=o()("wc-block-components-product-name",e);if(t){const e=d;return(0,c.createElement)("span",{className:m,...e,dangerouslySetInnerHTML:{__html:(0,a.decodeEntities)(r)}})}return(0,c.createElement)("a",{className:m,href:n,target:s,...d,dangerouslySetInnerHTML:{__html:(0,a.decodeEntities)(r)},style:i})}},3088:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var c=r(9196),a=r(5736),n=r(711),o=r(3849),s=r.n(o),l=r(4293),i=r(9307);r(6645);const u=({currency:e,maxPrice:t,minPrice:r,priceClassName:o,priceStyle:i={}})=>(0,c.createElement)(c.Fragment,null,(0,c.createElement)("span",{className:"screen-reader-text"},(0,a.sprintf)(/* translators: %1$s min price, %2$s max price */ /* translators: %1$s min price, %2$s max price */
(0,a.__)("Price between %1$s and %2$s","woocommerce"),(0,l.formatPrice)(r),(0,l.formatPrice)(t))),(0,c.createElement)("span",{"aria-hidden":!0},(0,c.createElement)(n.FormattedMonetaryAmount,{className:s()("wc-block-components-product-price__value",o),currency:e,value:r,style:i})," — ",(0,c.createElement)(n.FormattedMonetaryAmount,{className:s()("wc-block-components-product-price__value",o),currency:e,value:t,style:i}))),d=({currency:e,regularPriceClassName:t,regularPriceStyle:r,regularPrice:o,priceClassName:l,priceStyle:i,price:u})=>(0,c.createElement)(c.Fragment,null,(0,c.createElement)("span",{className:"screen-reader-text"},(0,a.__)("Previous price:","woocommerce")),(0,c.createElement)(n.FormattedMonetaryAmount,{currency:e,renderText:e=>(0,c.createElement)("del",{className:s()("wc-block-components-product-price__regular",t),style:r},e),value:o}),(0,c.createElement)("span",{className:"screen-reader-text"},(0,a.__)("Discounted price:","woocommerce")),(0,c.createElement)(n.FormattedMonetaryAmount,{currency:e,renderText:e=>(0,c.createElement)("ins",{className:s()("wc-block-components-product-price__value","is-discounted",l),style:i},e),value:u})),m=({align:e,className:t,currency:r,format:a="<price/>",maxPrice:o,minPrice:l,price:m,priceClassName:p,priceStyle:g,regularPrice:y,regularPriceClassName:_,regularPriceStyle:v,style:N})=>{const b=s()(t,"price","wc-block-components-product-price",{[`wc-block-components-product-price--align-${e}`]:e});a.includes("<price/>")||(a="<price/>",console.error("Price formats need to include the `<price/>` tag."));const w=y&&m&&m<y;let h=(0,c.createElement)("span",{className:s()("wc-block-components-product-price__value",p)});return w?h=(0,c.createElement)(d,{currency:r,price:m,priceClassName:p,priceStyle:g,regularPrice:y,regularPriceClassName:_,regularPriceStyle:v}):void 0!==l&&void 0!==o?h=(0,c.createElement)(u,{currency:r,maxPrice:o,minPrice:l,priceClassName:p,priceStyle:g}):m&&(h=(0,c.createElement)(n.FormattedMonetaryAmount,{className:s()("wc-block-components-product-price__value",p),currency:r,value:m,style:g})),(0,c.createElement)("span",{className:b,style:N},(0,i.createInterpolateElement)(a,{price:h}))}},5044:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>Q});var c=r(9196),a=r(9659),n=r(2864),o=r(9307),s=r(5736),l=r(3849),i=r.n(l),u=r(4617),d=r(7998),m=r(3243),p=r(7427),g=r(2289);function y(e={}){const t={};return(0,g.getCSSRules)(e,{selector:""}).forEach((e=>{t[e.key]=e.value})),t}function _(e,t){return e&&t?`has-${(0,p.o)(t)}-${e}`:""}const v=e=>{const t=(e=>{const t=(0,d.Kn)(e)?e:{style:{}};let r=t.style;return(0,m.H)(r)&&(r=JSON.parse(r)||{}),(0,d.Kn)(r)||(r={}),{...t,style:r}})(e),r=function(e){var t,r,c,a,n,o,s;const{backgroundColor:l,textColor:u,gradient:m,style:p}=e,g=_("background-color",l),v=_("color",u),N=function(e){if(e)return`has-${e}-gradient-background`}(m),b=N||(null==p||null===(t=p.color)||void 0===t?void 0:t.gradient);return{className:i()(v,N,{[g]:!b&&!!g,"has-text-color":u||(null==p||null===(r=p.color)||void 0===r?void 0:r.text),"has-background":l||(null==p||null===(c=p.color)||void 0===c?void 0:c.background)||m||(null==p||null===(a=p.color)||void 0===a?void 0:a.gradient),"has-link-color":(0,d.Kn)(null==p||null===(n=p.elements)||void 0===n?void 0:n.link)?null==p||null===(o=p.elements)||void 0===o||null===(s=o.link)||void 0===s?void 0:s.color:void 0}),style:y({color:(null==p?void 0:p.color)||{}})}}(t),c=function(e){var t;const r=(null===(t=e.style)||void 0===t?void 0:t.border)||{};return{className:function(e){var t;const{borderColor:r,style:c}=e,a=r?_("border-color",r):"";return i()({"has-border-color":!!r||!(null==c||null===(t=c.border)||void 0===t||!t.color),[a]:!!a})}(e),style:y({border:r})}}(t),a=function(e){var t;return{className:void 0,style:y({spacing:(null===(t=e.style)||void 0===t?void 0:t.spacing)||{}})}}(t),n=(e=>{const t=(0,d.Kn)(e.style.typography)?e.style.typography:{},r=(0,m.H)(t.fontFamily)?t.fontFamily:"";return{className:e.fontFamily?`has-${e.fontFamily}-font-family`:r,style:{fontSize:e.fontSize?`var(--wp--preset--font-size--${e.fontSize})`:t.fontSize,fontStyle:t.fontStyle,fontWeight:t.fontWeight,letterSpacing:t.letterSpacing,lineHeight:t.lineHeight,textDecoration:t.textDecoration,textTransform:t.textTransform}}})(t);return{className:i()(n.className,r.className,c.className,a.className),style:{...n.style,...r.style,...c.style,...a.style}}};var N=r(721),b=r(8360),w=r(711);r(3902);const h=(0,N.withProductDataContext)((e=>{const{className:t,align:r}=e,a=v(e),{parentClassName:o}=(0,n.useInnerBlockLayoutContext)(),{product:l}=(0,n.useProductDataContext)();if(!(l.id&&l.on_sale||e.isDescendentOfSingleProductTemplate))return null;const u="string"==typeof r?`wc-block-components-product-sale-badge--align-${r}`:"";return(0,c.createElement)("div",{className:i()("wc-block-components-product-sale-badge",t,u,{[`${o}__product-onsale`]:o},a.className),style:a.style},(0,c.createElement)(w.Label,{label:(0,s.__)("Sale","woocommerce"),screenReaderLabel:(0,s.__)("Product on sale","woocommerce")}))}));r(3030);let f=function(e){return e.SINGLE="single",e.THUMBNAIL="thumbnail",e}({});const E=e=>(0,c.createElement)("img",{...e,src:u.PLACEHOLDER_IMG_SRC,alt:"",width:void 0,height:void 0}),k=({image:e,loaded:t,showFullSize:r,fallbackAlt:a,width:n,scale:s,height:l,aspectRatio:i})=>{const{thumbnail:u,src:d,srcset:m,sizes:p,alt:g}=e||{},y={alt:g||a,hidden:!t,src:u,...r&&{src:d,srcSet:m,sizes:p}},_={height:l,width:n,objectFit:s,aspectRatio:i};return(0,c.createElement)(o.Fragment,null,y.src&&(0,c.createElement)("img",{style:_,"data-testid":"product-image",...y}),!e&&(0,c.createElement)(E,{style:_}))},C=e=>{const{className:t,imageSizing:r=f.SINGLE,showProductLink:a=!0,showSaleBadge:l,saleBadgeAlign:u="right",height:d,width:m,scale:p,aspectRatio:g,...y}=e,_=v(e),{parentClassName:N}=(0,n.useInnerBlockLayoutContext)(),{product:w,isLoading:C}=(0,n.useProductDataContext)(),{dispatchStoreEvent:P}=(0,b.n)();if(!w.id)return(0,c.createElement)("div",{className:i()(t,"wc-block-components-product-image",{[`${N}__product-image`]:N},_.className),style:_.style},(0,c.createElement)(E,null));const S=!!w.images.length,x=S?w.images[0]:null,L=a?"a":o.Fragment,$=(0,s.sprintf)(/* translators: %s is referring to the product name */ /* translators: %s is referring to the product name */
(0,s.__)("Link to %s","woocommerce"),w.name),D={href:w.permalink,...!S&&{"aria-label":$},onClick:()=>{P("product-view-link",{product:w})}};return delete y.style,(0,c.createElement)("div",{className:i()(t,"wc-block-components-product-image",{[`${N}__product-image`]:N},_.className),style:_.style},(0,c.createElement)(L,{...a&&D},!!l&&(0,c.createElement)(h,{align:u,...y}),(0,c.createElement)(k,{fallbackAlt:w.name,image:x,loaded:!C,showFullSize:r!==f.THUMBNAIL,width:m,height:d,scale:p,aspectRatio:g})))};(0,N.withProductDataContext)(C);var P=r(8752),S=r(7121);r(9375);const x=({children:e,headingLevel:t,elementType:r=`h${t}`,...a})=>(0,c.createElement)(r,{...a},e),L=e=>{const{className:t,headingLevel:r=2,showProductLink:a=!0,linkTarget:o,align:s}=e,l=v(e),{parentClassName:u}=(0,n.useInnerBlockLayoutContext)(),{product:d}=(0,n.useProductDataContext)(),{dispatchStoreEvent:m}=(0,b.n)();return d.id?(0,c.createElement)(x,{headingLevel:r,className:i()(t,l.className,"wc-block-components-product-title",{[`${u}__product-title`]:u,[`wc-block-components-product-title--align-${s}`]:s&&(0,P.uq)()}),style:(0,P.uq)()?l.style:{}},(0,c.createElement)(S.Z,{disabled:!a,name:d.name,permalink:d.permalink,target:o,onClick:()=>{m("product-view-link",{product:d})}})):(0,c.createElement)(x,{headingLevel:r,className:i()(t,l.className,"wc-block-components-product-title",{[`${u}__product-title`]:u,[`wc-block-components-product-title--align-${s}`]:s&&(0,P.uq)()}),style:(0,P.uq)()?l.style:{}})};(0,N.withProductDataContext)(L);var $=r(9060);r(6006);const D=e=>({width:e/5*100+"%"}),R=({parentClassName:e})=>{const t=D(0);return(0,c.createElement)("div",{className:i()("wc-block-components-product-rating-stars__norating-container",`${e}-product-rating-stars__norating-container`)},(0,c.createElement)("div",{className:"wc-block-components-product-rating-stars__norating",role:"img"},(0,c.createElement)("span",{style:t})),(0,c.createElement)("span",null,(0,s.__)("No Reviews","woocommerce")))},A=e=>{const{rating:t,reviews:r,parentClassName:a}=e,n=D(t),o=(0,s.sprintf)(/* translators: %f is referring to the average rating value */ /* translators: %f is referring to the average rating value */
(0,s.__)("Rated %f out of 5","woocommerce"),t),l={__html:(0,s.sprintf)(/* translators: %1$s is referring to the average rating value, %2$s is referring to the number of ratings */ /* translators: %1$s is referring to the average rating value, %2$s is referring to the number of ratings */
(0,s._n)("Rated %1$s out of 5 based on %2$s customer rating","Rated %1$s out of 5 based on %2$s customer ratings",r,"woocommerce"),(0,s.sprintf)('<strong class="rating">%f</strong>',t),(0,s.sprintf)('<span class="rating">%d</span>',r))};return(0,c.createElement)("div",{className:i()("wc-block-components-product-rating-stars__stars",`${a}__product-rating-stars__stars`),role:"img","aria-label":o},(0,c.createElement)("span",{style:n,dangerouslySetInnerHTML:l}))},I=e=>{const{textAlign:t,shouldDisplayMockedReviewsWhenProductHasNoReviews:r}=e,a=v(e),{parentClassName:o}=(0,n.useInnerBlockLayoutContext)(),{product:s}=(0,n.useProductDataContext)(),l=(e=>{const t=parseFloat(e.average_rating);return Number.isFinite(t)&&t>0?t:0})(s),u=(e=>{const t=(0,$.h)(e.review_count)?e.review_count:parseInt(e.review_count,10);return Number.isFinite(t)&&t>0?t:0})(s),d=i()(a.className,"wc-block-components-product-rating-stars",{[`${o}__product-rating`]:o,[`has-text-align-${t}`]:t}),m=r?(0,c.createElement)(R,{parentClassName:o}):null,p=u?(0,c.createElement)(A,{rating:l,reviews:u,parentClassName:o}):m;return(0,c.createElement)("div",{className:d,style:a.style},(0,c.createElement)("div",{className:"wc-block-components-product-rating-stars__container"},p))};(0,N.withProductDataContext)(I);var F=r(3088),T=r(4293);const B=e=>{var t,r;const{className:a,textAlign:o,isDescendentOfSingleProductTemplate:s}=e,l=v(e),{parentName:u,parentClassName:d}=(0,n.useInnerBlockLayoutContext)(),{product:m}=(0,n.useProductDataContext)(),p="woocommerce/all-products"===u,g=i()("wc-block-components-product-price",a,l.className,{[`${d}__product-price`]:d});if(!m.id&&!s){const e=(0,c.createElement)(F.Z,{align:o,className:g});return p?(0,c.createElement)("div",{className:"wp-block-woocommerce-product-price"},e):e}const y=m.prices,_=s?(0,T.getCurrencyFromPriceResponse)():(0,T.getCurrencyFromPriceResponse)(y),N="5000",b=y.price!==y.regular_price,w=i()({[`${d}__product-price__value`]:d,[`${d}__product-price__value--on-sale`]:b}),h=(0,c.createElement)(F.Z,{align:o,className:g,style:l.style,regularPriceStyle:l.style,priceStyle:l.style,priceClassName:w,currency:_,price:s?N:y.price,minPrice:null==y||null===(t=y.price_range)||void 0===t?void 0:t.min_amount,maxPrice:null==y||null===(r=y.price_range)||void 0===r?void 0:r.max_amount,regularPrice:s?N:y.regular_price,regularPriceClassName:i()({[`${d}__product-price__regular`]:d})});return p?(0,c.createElement)("div",{className:"wp-block-woocommerce-product-price"},h):h};var z=r(9818),M=r(4801),O=r(2629);const H=(e,t)=>{const r=e.find((({id:e})=>e===t));return r?r.quantity:0};r(4466);const Z=({product:e,className:t,style:r})=>{const{id:n,permalink:l,add_to_cart:d,has_options:m,is_purchasable:p,is_in_stock:g}=e,{dispatchStoreEvent:y}=(0,b.n)(),{cartQuantity:_,addingToCart:v,addToCart:N}=(e=>{const{addItemToCart:t}=(0,z.useDispatch)(M.CART_STORE_KEY),{cartItems:r,cartIsLoading:c}=(0,a.b)(),{createErrorNotice:n,removeNotice:s}=(0,z.useDispatch)("core/notices"),[l,i]=(0,o.useState)(!1),u=(0,o.useRef)(H(r,e));return(0,o.useEffect)((()=>{const t=H(r,e);t!==u.current&&(u.current=t)}),[r,e]),{cartQuantity:Number.isFinite(u.current)?u.current:0,addingToCart:l,cartIsLoading:c,addToCart:(r=1)=>(i(!0),t(e,r).then((()=>{s("add-to-cart")})).catch((e=>{n((0,O.decodeEntities)(e.message),{id:"add-to-cart",context:"wc/all-products",isDismissible:!0})})).finally((()=>{i(!1)})))}})(n),w=Number.isFinite(_)&&_>0,h=!m&&p&&g,f=(0,O.decodeEntities)((null==d?void 0:d.description)||""),E=w?(0,s.sprintf)(/* translators: %s number of products in cart. */ /* translators: %s number of products in cart. */
(0,s._n)("%d in cart","%d in cart",_,"woocommerce"),_):(0,O.decodeEntities)((null==d?void 0:d.text)||(0,s.__)("Add to cart","woocommerce")),k=h?"button":"a",C={};return h?C.onClick=async()=>{await N(),y("cart-add-item",{product:e});const{cartRedirectAfterAdd:t}=(0,u.getSetting)("productsSettings");t&&(window.location.href=P.fh)}:(C.href=l,C.rel="nofollow",C.onClick=()=>{y("product-view-link",{product:e})}),(0,c.createElement)(k,{...C,"aria-label":f,disabled:v,className:i()(t,"wp-block-button__link","wp-element-button","add_to_cart_button","wc-block-components-product-button__button",{loading:v,added:w}),style:r},E)},j=({className:e,style:t})=>(0,c.createElement)("button",{className:i()("wp-block-button__link","wp-element-button","add_to_cart_button","wc-block-components-product-button__button","wc-block-components-product-button__button--placeholder",e),style:t,disabled:!0}),W=e=>{const{className:t,textAlign:r}=e,a=v(e),{parentClassName:o}=(0,n.useInnerBlockLayoutContext)(),{product:s}=(0,n.useProductDataContext)();return(0,c.createElement)("div",{className:i()(t,"wp-block-button","wc-block-components-product-button",{[`${o}__product-add-to-cart`]:o,[`align-${r}`]:r})},s.id?(0,c.createElement)(Z,{product:s,style:a.style,className:a.className}):(0,c.createElement)(j,{style:a.style,className:a.className}))},q=((0,N.withProductDataContext)(W),({product:e})=>(0,c.createElement)("div",{className:"cross-sells-product"},(0,c.createElement)(n.InnerBlockLayoutContextProvider,{parentName:"woocommerce/cart-cross-sells-block",parentClassName:"wp-block-cart-cross-sells-product"},(0,c.createElement)(n.ProductDataContextProvider,{isLoading:!1,product:e},(0,c.createElement)("div",null,(0,c.createElement)(C,{className:"",showSaleBadge:!0,productId:e.id,showProductLink:!0,saleBadgeAlign:"left",imageSizing:f.SINGLE,isDescendentOfQueryLoop:!1,scale:"cover",aspectRatio:"1:1"}),(0,c.createElement)(L,{align:"",headingLevel:3,showProductLink:!0}),(0,c.createElement)(I,{isDescendentOfQueryLoop:!1,isDescendentOfSingleProductBlock:!1,productId:e.id,postId:0,shouldDisplayMockedReviewsWhenProductHasNoReviews:!1}),(0,c.createElement)(B,null)),(0,c.createElement)(W,null))))),K=({products:e,columns:t})=>{const r=e.map(((e,r)=>r>=t?null:(0,c.createElement)(q,{isLoading:!1,product:e,key:e.id})));return(0,c.createElement)("div",null,r)};var G=r(4398);const Q=({className:e,columns:t})=>{const{crossSellsProducts:r}=(0,a.b)();return void 0===t&&(t=G.attributes.columns.default),(0,c.createElement)(K,{className:e,columns:t,products:r})}},112:(e,t,r)=>{"use strict";r.d(t,{$:()=>n});var c=r(3112),a=r(7090);function n(e,t){return void 0===t&&(t={}),(0,a.B)(e,(0,c.pi)({delimiter:"."},t))}},4466:()=>{},3030:()=>{},6006:()=>{},3902:()=>{},9375:()=>{},333:()=>{},6645:()=>{},3569:(e,t,r)=>{"use strict";function c(e){return e.toLowerCase()}r.d(t,{U:()=>c})},7090:(e,t,r)=>{"use strict";r.d(t,{B:()=>o});var c=r(3569),a=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],n=/[^A-Z0-9]+/gi;function o(e,t){void 0===t&&(t={});for(var r=t.splitRegexp,o=void 0===r?a:r,l=t.stripRegexp,i=void 0===l?n:l,u=t.transform,d=void 0===u?c.U:u,m=t.delimiter,p=void 0===m?" ":m,g=s(s(e,o,"$1\0$2"),i,"\0"),y=0,_=g.length;"\0"===g.charAt(y);)y++;for(;"\0"===g.charAt(_-1);)_--;return g.slice(y,_).split("\0").map(d).join(p)}function s(e,t,r){return t instanceof RegExp?e.replace(t,r):t.reduce((function(e,t){return e.replace(t,r)}),e)}},7427:(e,t,r)=>{"use strict";r.d(t,{o:()=>n});var c=r(3112),a=r(112);function n(e,t){return void 0===t&&(t={}),(0,a.$)(e,(0,c.pi)({delimiter:"-"},t))}},3112:(e,t,r)=>{"use strict";r.d(t,{pi:()=>c});var c=function(){return c=Object.assign||function(e){for(var t,r=1,c=arguments.length;r<c;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},c.apply(this,arguments)};Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError}}]);