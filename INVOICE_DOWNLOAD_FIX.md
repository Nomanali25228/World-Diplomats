# Invoice Download Fix - ERR_SOCKET_NOT_CONNECTED

## Problem
Users were experiencing intermittent failures when downloading invoices. Sometimes clicking "Download Invoice" would work, other times it would fail with `ERR_SOCKET_NOT_CONNECTED` error.

## Root Cause
The application was trying to directly download PDFs from Stripe's S3 URLs using a simple anchor tag click. This approach had several issues:

1. **CORS (Cross-Origin Resource Sharing)** - S3 URLs may not allow direct downloads from your domain
2. **Network Timing** - S3 signed URLs can expire or have connection issues
3. **Browser Security** - Modern browsers block automatic downloads from external domains

## Solution Implemented

### 1. Created Proxy Download API Route
**File:** `src/app/api/download-invoice/route.js`

This new API endpoint:
- Accepts the Stripe S3 PDF URL
- Fetches the PDF server-side (avoiding CORS)
- Streams the PDF back to the client with proper headers
- Ensures reliable downloads

### 2. Updated All Payment Pages
Updated the invoice download logic in:
- `src/app/Dubaipayment/[Dubai]/page.js`
- `src/app/Istanbulpayment/[Istanbul]/page.js`
- `src/app/Malaysiapayment/[Malaysia]/page.js`
- `src/app/Londonpayment/[London]/page.js`
- `src/app/Saudipayment/[Saudi]/page.js`

### Changes Made:
**Before (Unreliable):**
```javascript
const link = document.createElement('a');
link.href = data.invoicePdf; // Direct S3 URL
link.download = 'invoice.pdf';
link.click();
```

**After (Reliable):**
```javascript
// Download PDF through proxy to avoid CORS issues
const downloadRes = await fetch('/api/download-invoice', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ invoicePdfUrl: data.invoicePdf }),
});

if (!downloadRes.ok) {
  throw new Error('Failed to download invoice');
}

// Create blob and download
const blob = await downloadRes.blob();
const url = window.URL.createObjectURL(blob);
const link = document.createElement('a');
link.href = url;
link.download = `invoice-${Date.now()}.pdf`;
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
window.URL.revokeObjectURL(url); // Clean up memory
```

## Benefits

1. ✅ **Reliable Downloads** - Server-side fetching eliminates CORS issues
2. ✅ **Better Error Handling** - Proper error messages if download fails
3. ✅ **Memory Management** - Blob URLs are properly cleaned up
4. ✅ **Unique Filenames** - Each invoice gets a timestamp-based filename
5. ✅ **Cross-Browser Compatible** - Works consistently across all modern browsers

## Testing
Test the invoice download functionality on all payment pages:
1. Navigate to any payment page (Dubai, Istanbul, Malaysia, London, Saudi)
2. Click "Choose Now" on any plan
3. Click "Invoice ↓" button
4. Verify the PDF downloads successfully every time

## Notes
- The fix maintains the existing loading state and error handling
- No changes needed to the invoice creation API
- The solution is scalable and can be used for other file downloads in the future
