import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      console.error("STRIPE_SECRET_KEY is not defined");
      return new Response(
        JSON.stringify({ error: "Server configuration error" }),
        { status: 500 }
      );
    }

    const { email: rawEmail } = await request.json();
    const email = rawEmail?.trim()?.toLowerCase();

    console.log("Processing Customer for Email:", email);

    if (!email) {
      return new Response(
        JSON.stringify({ error: "Email is required" }),
        { status: 400 }
      );
    }

    // Check if customer already exists
    const customers = await stripe.customers.list({
      email: email,
      limit: 1
    });

    let customer;

    if (customers.data.length > 0) {
      customer = customers.data[0];
      console.log("Existing Customer Found:", customer.id);
    } else {
      // Create a new customer if none exists
      customer = await stripe.customers.create({
        email: email,
        description: "Customer created during registration"
      });
      console.log("New Customer Created:", customer.id);
    }

    return new Response(
      JSON.stringify({ customerId: customer.id }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in get-or-create-customer:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to process request",
        message: error.message,
        type: error.type // Useful for Stripe errors (e.g., 'StripeAuthenticationError')
      }),
      { status: 500 }
    );
  }
}
