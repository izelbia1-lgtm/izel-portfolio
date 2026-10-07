# Concept 3 verification

Verified locally on 7 October 2026 against the production preview at http://127.0.0.1:4180/.

## Branch preservation

- `concept-3-creative-studio` was created from `main` before any design changes.
- `main` remains at `8e13356a27a34f59483aca9d1c3086d43633bbcc` (Concept 1).
- `concept-2-dark-tech` remains at `8d58102114bcd3838d79193bad1649e9b7db5f62` (Concept 2).
- Concept 3 was approved for its own branch commit and push. No merge or rebase was performed.
- The centralized factual data in `src/content.ts` is unchanged from Concept 1.

## Checks performed

- TypeScript and Vite production build passed. No runtime dependencies added.
- Responsive checks passed at 320, 375, 390, 430, 768, 1024, 1440, 1920 and 2560 pixels without horizontal overflow.
- Desktop and mobile screenshots reviewed, including the hero, website previews, services and contact layout.
- No browser console errors or failed local responses during the interaction suite.
- All local project images decode correctly. The portrait asset is preserved but not rendered.
- UTF-8 source scan found no broken encoding characters.
- Keyboard tests passed for skip link, mobile navigation, Escape, case-study focus containment and focus restoration. Heading hierarchy and image alternative text checked.
- Automated WCAG A/AA audits reported zero violations across all nine widths and the case-study dialog after secondary-text contrast corrections.
- Additional visible-label/accessibility-name check passed.
- Reduced-motion mode disables the hero entrance, hover transitions and smooth scrolling.
- Form validation, email drafting, mailto destination, clipboard success and clipboard fallback verified. No email was sent; the visitor explicitly sends through their own email application.
- CV download and internal anchors passed. All three public project sites, four repositories and GitHub profile returned HTTP 200.
- Existing metadata, Open Graph text, sitemap/robots build logic and CV preserved. Theme colour and favicon match Concept 3.
- Mobile body text increased for comfortable reading; final overflow and interaction checks repeated.

## Lighthouse

Final local mobile run: Performance 99, Accessibility 100, Best Practices 100, SEO 66. This is a local lab measurement, not a deployed-site guarantee. The SEO result reflects the preview's deliberate noindex/crawling restrictions until the final HTTPS SITE_URL is configured.

## Review status

The approved site was rechecked before its branch commit. No merge or website deployment was performed. Automated accessibility checks do not replace assistive-technology testing. The original downloadable CV remains unchanged.

## Approved final production check

The production build, encoding scan, responsive/keyboard suite, image loading, contact validation and draft/copy paths were repeated before committing. All eight external destinations returned HTTP 200 with the expected page titles. The approved visual design was unchanged. Both earlier branch hashes were recorded before the Concept 3 push for comparison afterward.
