# ICCS 6°Stormo – Web App / PWA

Simulatori di **quiz** con modalità **Allenamento** e **Simulazione d’esame**.  
L’app è una **PWA**: installabile su **Android, iOS e Desktop**, funzionamento **offline**, tema **chiaro/scuro** e supporto **landscape** su tablet.

## ✨ Caratteristiche
- **PWA completa**: `manifest.webmanifest`, icone (maskable + Apple), `sw.js` con fallback navigazione e cache offline.
- **Installazione guidata**: pulsante **Installa** (FAB) con prompt nativo o **modale** di istruzioni (Android/iOS).
- **Compatibilità iOS**: `viewport-fit=cover`, **safe-area**, **status bar black-translucent**, **splash screen anche in landscape**.
- **Orientamento**: `orientation: "any"` (portrait/landscape).
- **Tema**: chiaro/scuro + **auto** (segue il sistema se l’utente non ha preferenze salvate).
- **UI quiz**: pill evidenziate (coerenti chiaro/scuro), selettore numero domande, ordine casuale, bilanciamento per materia.
- **Hardening**: link esterni con `rel="noopener noreferrer"`.

## 📁 Struttura del progetto
```
/
├─ index.html
├─ manifest.webmanifest
├─ sw.js
├─ 404.html
├─ icons/
│  ├─ icon-192.png
│  ├─ icon-512.png
│  ├─ maskable-512.png
│  └─ apple-touch-icon-180.png
└─ splash/
   ├─ apple-splash-*.png           # portrait
   └─ apple-splash-*-landscape.png # landscape
```

## ▶️ Avvio in locale
Serve un server HTTP (per attivare il Service Worker).

**Windows (PowerShell/CMD):**
```bash
python -m http.server 5500 --bind 127.0.0.1
# poi apri: http://localhost:5500/
```

**macOS / Linux:**
```bash
python3 -m http.server 5500 --bind 127.0.0.1
# poi apri: http://localhost:5500/
```

> Evita il doppio click (`file://`), altrimenti la PWA non si installa e il SW non funziona.

## 🚀 Deploy su GitHub Pages
1. Metti **tutti i file** indicati sopra nella **root del repository**.
2. Repo → **Settings → Pages** → *Deploy from a branch*  
   Seleziona **main** e **/(root)** → **Save**.
3. Attendi 1–2 minuti e visita:  
   `https://<username>.github.io/<repo>/`

### Deep-link / Refresh
- Il file **`404.html`** reindirizza alla home per gestire correttamente i refresh su Pages.

## 📲 Installazione come app
- **Android (Chrome)**: Menu ⋮ → **Installa app** / *Aggiungi a schermata Home*.
- **iOS (Safari)**: Condividi → **Aggiungi alla schermata Home**.
- **Desktop (Chrome/Edge)**: icona **Installa** nella barra degli indirizzi.

## 🔄 Aggiornamenti della PWA
La cache è gestita da `sw.js`.  
Quando modifichi file importanti, **incrementa** la costante `CACHE_NAME` in `sw.js` (es. da `iccs6-pwa-v20` a `iccs6-pwa-v21`) per forzare l’update degli utenti.

Dopo un deploy:
- ricarica la pagina con **Ctrl+F5**;
- se la PWA è già installata, chiudila e riaprila; in caso ostinato, disinstalla/reinstalla.

## 🧩 Accessibilità & UX
- Pulsanti icona con **`aria-label`**.
- Contrasto e focus coerenti in chiaro/scuro.
- Animazioni discrete (rispettano `prefers-reduced-motion`).

## ⚙️ Personalizzazione
- **Nome/icone**: aggiorna `name`, `short_name` e `icons` in `manifest.webmanifest`.
- **Colori tema**: il **meta `theme-color`** è sincronizzato col tema attivo.
- **Splash**: le immagini in `splash/` possono essere rigenerate con la tua grafica.

## 🛠️ Troubleshooting
- **Non vedo “Installa”**: verifica che l’app sia servita via **HTTPS** (o `localhost`), che `manifest.webmanifest` e `sw.js` siano raggiungibili (DevTools → *Application* → *Manifest* / *Service Workers*).
- **404 su iOS dalla Home**: elimina l’icona e **re-installa** dalla **home del sito**.
- **UI non a pieno schermo su iOS**: assicurati che `index.html` includa `viewport-fit=cover` e CSS `safe-area` (già presenti).


## 🙌 Credits
- **NicTasq993**

## 📄 Licenza
Aggiungi una licenza (es. MIT) creando un file `LICENSE` se vuoi distribuire pubblicamente.
