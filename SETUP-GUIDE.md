# Setup Script with Google Sheets Integration

This enhanced setup script helps you configure your business template and optionally import data from Google Sheets to populate your site.

## Prerequisites

1. **Environment Setup**: Make sure your `.env` file contains Google Sheets API credentials:

   ```env
   GOOGLE_CLIENT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
   GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
   ```

2. **Google Sheets Permissions**: Your Google Sheet must be shared with the service account email address (found in `GOOGLE_CLIENT_EMAIL`). Give it "Viewer" access.

## Running the Setup

```bash
# Run the interactive setup script
pnpm setup
```

The setup will guide you through:

1. **Business Information**: Name, tagline, description, etc.
2. **Contact Information**: Phone, email, address details
3. **Branding**: Colors and fonts (generates CSS variables automatically)
4. **Website Information**: URL and domain
5. **Google Sheets Integration** (Optional): Import data from a shared Google Sheet

## Google Sheets Integration

### What it does:

- Connects to your Google Sheet using service account credentials
- Downloads all accessible sheets from the spreadsheet
- Converts data to structured JSON format
- Saves the data with timestamp for reference

### Supported data:

- Services and descriptions
- Service areas and coverage
- Team member information
- Testimonials and reviews
- FAQ content
- Any structured business data

### Data format:

The exported JSON includes:

```json
{
  "exportedAt": "2024-11-14T10:30:00.000Z",
  "businessName": "Your Business",
  "source": "Google Sheets via setup script",
  "sheets": {
    "Services": {
      "headers": ["Service Name", "Description", "Price"],
      "rows": [{ "Service Name": "Demolition", "Description": "...", "Price": "$500" }],
      "rawData": [
        ["Service Name", "Description", "Price"],
        ["Demolition", "...", "$500"]
      ]
    }
  }
}
```

## Testing Google Sheets Integration

Before running the full setup, you can test your Google Sheets integration:

```bash
# Test with a specific Google Sheets URL
pnpm test-sheets "https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID"
```

This will:

- Validate your credentials
- Test connection to the sheet
- Download and save sample data
- Show you what data will be available

## Common Issues

### "Google Sheets credentials not found"

- Check that your `.env` file contains `GOOGLE_CLIENT_EMAIL` and `GOOGLE_PRIVATE_KEY`
- Make sure the private key includes the full key with `-----BEGIN PRIVATE KEY-----` headers

### "Failed to fetch Google Sheets data"

- Verify the Google Sheet is shared with your service account email
- Check that the sheet URL is correct
- Ensure the service account has the necessary permissions

### "Could not access sheet [SheetName]"

- Some sheets may be protected or hidden
- The service account needs "Viewer" access to read the data
- Check if the sheet name contains special characters

## Output Files

The setup script generates:

1. **`src/config/business.config.ts`**: Main business configuration
2. **`src/styles/brand-colors.css`**: Generated color CSS variables
3. **`data/google-sheets-data-[timestamp].json`**: Google Sheets data (if used)

## Using the Data

The exported Google Sheets data can be used with:

- **AI Agents**: Feed the JSON to ChatGPT/Claude to generate content
- **Custom Scripts**: Parse the data to populate your site automatically
- **Manual Review**: Use as reference for content creation

## Example Workflow

1. Prepare a Google Sheet with your business data (services, areas, etc.)
2. Share it with your service account email
3. Run `pnpm setup` and provide the sheet URL
4. Use the exported JSON file to prompt an AI agent
5. Generate content for your entire site automatically

## Security Notes

- The `data/` directory is excluded from Git to protect sensitive information
- Never commit Google Sheets data that contains private business information
- Service account credentials should be kept secure and not shared
