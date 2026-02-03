# antipa.at - AEM Edge Delivery Services

Personal portfolio website for Damien Antipa, built with Adobe AEM Edge Delivery Services using Google Drive as a content source.

## Architecture

This project uses Adobe AEM (formerly Franklin) Edge Delivery Services with a minimal custom build approach:

- **Code Repository:** GitHub (this repo)
- **Content Source:** Google Drive
- **Delivery:** AEM Edge Delivery Services
- **Design:** Minimalist monospace aesthetic with 90s-inspired background pattern

## Project Structure

```
.
├── scripts/          # JavaScript files
│   ├── aem.js       # AEM core library (from adobe/aem-boilerplate)
│   ├── scripts.js   # Custom initialization and decoration logic
│   └── delayed.js   # Non-critical functionality (RUM tracking)
├── styles/          # CSS files
│   ├── styles.css   # Critical path styles (monospace, layout, background)
│   └── lazy-styles.css  # Non-critical styles loaded after render
├── blocks/          # Custom blocks (empty - none needed currently)
├── icons/           # SVG icons and assets
├── head.html        # HTML head template
└── 404.html         # Custom error page
```

## Content Structure (Google Drive)

Content is authored in Google Drive at `~/Google Drive/Blog/`:

- **index** - Main portfolio content
- **nav** - Navigation (minimal)
- **footer** - Footer (minimal)

Content is authored using Google Docs with sections separated by `---`.

## Development

### Prerequisites

- Node.js 18+
- npm 9+
- Google Drive folder shared with `helix@adobe.com`
- AEM Sidekick Chrome extension

### Local Development

```bash
# Install dependencies
npm install

# Run linting
npm run lint

# Lint JavaScript only
npm run lint:js

# Lint CSS only
npm run lint:css
```

### Content Authoring Workflow

1. Edit content in Google Docs (in shared Drive folder)
2. Click AEM Sidekick extension
3. Click "Preview" to see changes in preview environment
4. Click "Publish" to push changes live

## Design Features

- **Monospace Typography:** Courier New throughout
- **Minimal Styling:** Black on white, simple borders
- **Background Pattern:** 90s-inspired SVG grid (5% opacity)
- **Fixed Positioning:** Container at 16.18vw left, 10vh top
- **Hover Effects:** Smooth border transitions on links
- **Responsive:** Adjusts positioning for mobile devices

## Deployment

The site is automatically deployed via AEM Edge Delivery Services:

- **Preview:** `https://main--antipa-at-aem-google-drive--[owner].aem.page/`
- **Live:** `https://antipa-at-aem-google-drive--[owner].aem.page/`
- **Production:** `https://antipa.at/`

Changes to the repository are automatically deployed. Content changes require preview/publish via Sidekick.

## Configuration

### AEM Site Configuration

Configure via [AEM Site Admin](https://labs.aem.live/tools/site-admin/index.html):

- GitHub Repository: This repo
- Content Source: Google Drive
- Google Drive Folder: `~/Google Drive/Blog`
- Production Host: `antipa.at`

### DNS Configuration

For custom domain (antipa.at):

```
CNAME: www.antipa.at → main--antipa-at-aem-google-drive--[owner].hlx.page
```

SSL is configured automatically by AEM.

## Performance

Built for optimal Core Web Vitals:

- LCP target: < 2.5s
- Minimal JavaScript (AEM core + custom init)
- Critical CSS only in initial load
- Lazy-loaded non-critical styles
- System font (no web font requests)

## License

Apache-2.0

## Resources

- [AEM Documentation](https://www.aem.live)
- [AEM Developer Tutorial](https://www.aem.live/developer/tutorial)
- [AEM Boilerplate](https://github.com/adobe/aem-boilerplate)
- [Google Drive Setup Guide](./aem-google-drive-setup.md)
