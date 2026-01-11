export async function POST(req) {
  try {
    const body = await req.json();
    const { invoicePdfUrl } = body;

    if (!invoicePdfUrl) {
      return new Response(
        JSON.stringify({ error: "Invoice PDF URL is required." }),
        { status: 400 }
      );
    }

    // Fetch the PDF from Stripe's S3
    const response = await fetch(invoicePdfUrl);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch PDF: ${response.statusText}`);
    }

    // Get the PDF as a buffer
    const pdfBuffer = await response.arrayBuffer();

    // Return the PDF with proper headers
    return new Response(pdfBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="invoice.pdf"',
        'Cache-Control': 'no-cache',
      },
    });

  } catch (error) {
    console.error("Error downloading invoice:", error.message);

    return new Response(
      JSON.stringify({ error: error.message || "Failed to download invoice." }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
