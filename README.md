# exRNAlab website | GitHub Pages migration

A responsive, plain-HTML website rebuilt from your publicly accessible Owlstown website (`exrnalab.owlstown.net`) as of November 12, 2026. No paid hosting, third-party website-builder subscription, Python server, or build service is required once the files are uploaded.

## Included

- Homepage with original About copy
- All five research/outreach project pages with their text
- People page and three individual biographies, plus former lab members
- Publications page with 32 published entries, two submitted/preprint entries, DOI links, and client-side search/filter
- News archive with 16 standalone post pages
- Online academic CV with career, education, funding and a print-to-PDF option
- Accessible mobile navigation, responsive layouts, and an original illustrative RNA motif

## IMPORTANT: migration tasks before canceling Owlstown

1. **Export photos and original graphics from Owlstown.** The portrait currently loads from Owlstown's image CDN as a convenience; if the CDN is removed the new site will show a stylized RNA illustration instead. The original images for news posts, outreach and profile pages are not included because they were not available as downloadable assets in this environment. Export them from your Owlstown account and add them to the new site manually.
2. **Export the original full CV PDF** from Owlstown or your computer. `cv/index.html` includes a shortened, printable online CV, not your complete original 8-page PDF. To add your complete CV PDF, put it at `assets/Patricia_Baldrich_CV.pdf`, and add a download link to the homepage or CV page.
3. **Review publications.** This is a migration of the 32 published citations and two submitted/preprint citations visible on the old website. A newer October 2026 CV includes additional 2026 entries not yet on the old website; update these separately when ready. The PNAS leaf-surface DOI has been corrected using the newer CV (`10.1073/pnas.2409090121`).
4. **Review current team and grant information**, because the source pages may not be fully up to date.
5. **Do not cancel your Owlstown plan** until the new site is live, images/CV are moved, and you have verified all content and links.
6. **Old URL cannot be retained for free:** `exrnalab.owlstown.net` is Owlstown's subdomain and cannot simply be pointed at GitHub Pages. Choose a free GitHub Pages URL or buy/bring an independently owned domain. Update links to your old website in bios, directories, email signatures, and social profiles.

## Publish for free (GitHub Pages)

1. Sign into your free GitHub account at https://github.com/.
2. Create a new **public** repository named exactly `<your-github-username>.github.io` (replacing the placeholder with your username). This makes your free address `https://<your-github-username>.github.io/`.
3. Unzip the downloaded archive. Upload **the contents of the `exrnalab-github` folder** into the root of the new repository, retaining `index.html`, `assets/`, `projects/`, `people/`, `posts/`, `publications/`, and `cv/`. Do not upload the ZIP as the only file.
4. In your GitHub repository choose **Settings → Pages → Build and deployment → Deploy from a branch**, then select branch **main** and folder **/(root)**. Save.
5. Visit `https://<your-github-username>.github.io/` once Pages finishes deploying.

The site also works if uploaded to a different public repository as a **project site**. Its relative links do not depend on a fixed root URL.

**Reference:** https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Make changes

- Text: edit an individual HTML file.
- Colors, type, spacing: `assets/site.css` (CSS variables near the start).
- Navigation/search: `assets/site.js`.
- Images: use local `assets/` paths, which remain available after leaving Owlstown.
- For consistent future updates across all pages, the generator script and source data may be kept separately by your developer; only the generated static website files are necessary on GitHub Pages.

## Check before launch

- Check the mobile layout on your phone.
- Confirm your UC Davis email and all external profiles.
- Confirm academic authorship, funding periods and team affiliations.
- Ensure there are no remaining links or images dependent on Owlstown before subscription cancellation.
- Optionally replace the supplied online CV with the full current PDF.

## Privacy

The new website has no cookies, analytics scripts, contact forms, or visitor tracking. Email links open the visitor's own email application. Google Scholar/ORCID/Bluesky/DOI links go to their respective external sites.
