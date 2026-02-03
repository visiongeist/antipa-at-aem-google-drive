# Setting Up Google Drive as a Content Source for Adobe AEM

This guide explains how to configure and use Google Drive as a content source for Adobe Experience Manager (AEM) sites.

## Prerequisites

- Complete the Developer Tutorial
- Active Google account
- GitHub repository for your AEM project

## Initial Setup Steps

### 1. Create and Share a Folder

Create a dedicated folder in your Google Drive and share it with the Adobe Experience Manager service account:

**Service Account:** `helix@adobe.com`

This grants AEM access to your content files stored in Google Drive.

### 2. Copy Sample Content

To understand the structural requirements, copy these three key files from the example content (available in a read-only folder):

- `index` - Represents typical project content pages
- `nav` - Navigation document (specialized formatting, relatively static)
- `footer` - Footer document (specialized formatting, relatively static)

**Important:** When importing downloaded `.docx` files, convert them back to native Google Docs format before uploading to your Drive folder.

## Configuration Connection

Link your Google Drive content to your GitHub repository through the Site Configuration service.

**Administrative Tool:** `https://labs.aem.live/tools/site-admin/index.html`

Use this tool to create or modify site configuration settings that connect your Google Drive folder to your AEM project.

## Authoring and Publishing Workflow

### Install the Sidekick Extension

1. Download the **AEM Sidekick** Chrome extension from the Chrome Web Store
2. Pin the extension to your browser toolbar for easier access
3. Navigate to your shared Google Drive folder
4. Click the Sidekick extension icon
5. Select **"Add this project"** to establish the connection

### Preview and Publish Content

1. Open a document in Google Drive (e.g., index, nav, or footer)
2. Make your edits to the content
3. Activate the AEM Sidekick extension
4. Click either:
   - **Preview** button - to see changes in preview environment
   - **Publish** button - to publish changes to live site

**Note:** Each document (index, nav, footer) maintains independent preview and publication cycles.

## Important Considerations

- **404 Errors:** After updating site configuration, expect 404 errors until content is promoted to preview or live stages
- **Complete Setup:** Ensure all three primary documents (index, nav, footer) are previewed and published to populate your site correctly
- **File Format:** Always use native Google Docs format rather than uploaded Word documents for best compatibility
- **Content Organization:** The folder structure in Google Drive mirrors your site structure

## Content Structure

- **Index files:** Regular content pages that make up your site
- **Nav file:** Controls site navigation (special formatting)
- **Footer file:** Controls site footer (special formatting)
- **Static vs Dynamic:** Nav and footer remain relatively static, while index files represent dynamic content

## Summary

Google Drive integration with Adobe AEM provides a content authoring environment where:
- Content authors work in familiar Google Docs
- Changes can be previewed before publishing
- Content is synced to your AEM project through the Sidekick
- No technical knowledge required for content updates
