# Blazing Star Therapy — Pages CMS handoff

This branch is an **unpublished CMS integration**. It does not modify the production `main` branch.

## What it does
- The existing five homepage sections load their text, phone numbers, insurance plans, booking link, and featured image paths from `src/content/homepage.json`.
- `.pages.yml` exposes this JSON as the **Homepage** editor in [Pages CMS](https://pagescms.org/).
- Styling, layout, animation, and booking service remain as-is. No database, CMS server, or hosting migration.
- Do **not** enter patient data or private clinical records in this public repository.

## Activate and review
1. Review this pull request; do not merge it until the build and visual tests pass.
2. Open https://app.pagescms.org/, sign in using GitHub with the repository administrator account, and authorize access to this repository.
3. Select `DarlingMarketingandTech/eads-private-practice-site`; choose branch `feat/pages-cms-owner-editor-20261010` for initial testing. Verify the **Homepage** file editor appears.
4. Make a harmless temporary text edit on the **test branch only**, save, and confirm the content file changes.
5. Run `npm ci && npm run build` and compare desktop/mobile screenshots against the production website before merging.
6. Configure the deployment workflow and verify the live site is wired to the intended branch. Only after approval, merge the pull request and select `main` in Pages CMS for publishing.
7. In Pages CMS, invite Tucker as a collaborator via the app's collaborators interface, using his preferred email address. He doesn't need to use a CLI, Cursor, or GitHub directly.
8. Test editing and media upload with Tucker's account, and verify content publishes successfully.

## Editorial safety
- Pages CMS writes directly to the selected Git branch; do not select `main` during testing.
- The editor is for public-facing copy and public images only.
- Preserve the site's current layout and text unless Tucker requests changes.
- A saved content change on a production-connected branch may trigger immediate redeployment.
- Changes to list lengths (such as insurance plans or approach cards) may alter page layout; review before publishing.

## Rollback
Return to the previous Git commit or revert the pull request. All public site content remains in the repository and does not depend on Pages CMS uptime.
