# Google Sheets Data Export

This directory contains JSON files with data exported from Google Sheets during the setup process.

## Structure

When you run `pnpm setup` and provide a Google Sheets URL, the script will:

1. Connect to Google Sheets using the credentials in your `.env` file
2. Download all accessible sheets from the spreadsheet
3. Convert the data to JSON format
4. Save it with a timestamp for reference

## Example Data Structure

```json
{
  "exportedAt": "2024-11-14T10:30:00.000Z",
  "businessName": "Your Business Name",
  "source": "Google Sheets via setup script",
  "sheets": {
    "Services": {
      "headers": ["Service Name", "Description", "Price", "Category"],
      "rows": [
        {
          "Service Name": "Kitchen Remodel",
          "Description": "Complete kitchen renovation",
          "Price": "$15,000",
          "Category": "Remodeling"
        }
      ],
      "rawData": [
        ["Service Name", "Description", "Price", "Category"],
        ["Kitchen Remodel", "Complete kitchen renovation", "$15,000", "Remodeling"]
      ]
    },
    "Service Areas": {
      "headers": ["City", "State", "ZIP", "Active"],
      "rows": [
        {
          "City": "Salt Lake City",
          "State": "UT",
          "ZIP": "84101",
          "Active": "Yes"
        }
      ],
      "rawData": [
        ["City", "State", "ZIP", "Active"],
        ["Salt Lake City", "UT", "84101", "Yes"]
      ]
    }
  }
}
```

## Usage with AI Agents

Use the exported JSON file as context for AI agents to:

- Generate service pages automatically
- Create service area pages
- Populate business information
- Generate SEO content
- Create blog posts or FAQs

## File Naming

Files are saved with the format: `google-sheets-data-YYYY-MM-DDTHH-mm-ss-sssZ.json`

This timestamp format ensures unique filenames and easy sorting by export date.
