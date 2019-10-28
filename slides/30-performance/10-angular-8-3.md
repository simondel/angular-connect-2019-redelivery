### Angular 8.3 build performance
Faster prod builds for differential loading

---

### Differential loading
Build two versions of the app: 
* ES2015 bundles for modern browsers
* ES5 bundles (with polyfills) legacy browsers

---

### Angular 8
1. Build ES2015 bits from scratch
2. Build ES5 bits from scratch  

2x build time 😢

---

### Angular 8.3
1. Build ES2015 bits from scratch
2. Downgrade ES2015 bundles to ES5

33% build time decrease 🚀
