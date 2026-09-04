# Mamuyovwi Temisa site, flat build

Every file lives in one folder, no subfolders.

## Uploading to GitHub

Drag every file in this folder into the repo root, replacing anything with a
matching name. This is a full re-upload: the footer changed, and the footer
sits on all sixteen pages, so all sixteen need to go in together this time.

`rename-to-index.html` is the home page. Rename it to `index.html` once
you've confirmed it's safe to overwrite what's live.

## What changed this round

- Footer bio line no longer says "Lagos, Nigeria." It now reads "Product
  strategy for founders building in emerging markets across Africa."
- Work With Me, Testimonials, and Writing were reported as not rendering
  (unstyled, same symptom as the earlier book page issue). They render
  correctly in this build. If they still look broken after this upload, the
  problem is specific to how GitHub is serving those three files, not the
  files themselves, and worth a hard refresh or checking the file directly in
  the repo.

## Files

- `rename-to-index.html` home page, rename to `index.html` when ready
- `about.html`, `book.html`, `framework.html`, `case-studies.html`,
  `writing.html`, `media.html`, `testimonials.html`, `work-with-me.html`,
  `contact.html`
- `interswitch.html`, `m-pesa.html`, `moniepoint.html`, `paystack.html`,
  `wave.html`, `flutterwave.html`
- `site.css`, `site.js`
- `temisa-studio.jpg`, `temisa-studio-sm.jpg`, `temisa-library.jpg`,
  `temisa-library-sm.jpg`

## Editing

Footer text: `site.css`/`shell.py` source, or just search any page for
"across Africa" to find it directly in the HTML.
Rates and card copy: `work-with-me.html`, search `svc-card`.
Colors and type: top of `site.css`, the `:root` block.
Buy-the-book link: same URL everywhere, `https://temisawave.gumroad.com/l/ppqjvu`.

## Still needed before launch

1. DNS access for temisacircle.com.
2. Real testimonials for `testimonials.html`.
3. Press links for `media.html`.
4. Article drafts to replace the "In the queue" rows on `writing.html`.
