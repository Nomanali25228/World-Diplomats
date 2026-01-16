# Destination Selection & Email Routing Flow

## Overview
When a user selects a destination in the registration form, the system automatically maps it to the corresponding API route endpoint and sends a confirmation email.

---

## 1. Destination Selection Mapping

### In [src/app/component/Register-Now/RegisterNowClient.js](src/app/component/Register-Now/RegisterNowClient.js#L32)

The destination is mapped to Strapi API endpoints:

```javascript
const DEST_API_MAP = {
  "Istanbul, Turkey": "firstnames",
  "Dubai, UAE": "secondenames",
  "Baku, Azerbaijan": "thirdnames",
  "Riyadh, Saudi Arabia": "fivenames",
  "London, UK": "fivthnames",
  "Kuala Lumpur, Malaysia": "fournames",
};
```

---

## 2. How User Selects Destination

### Step 1: User enters destination in form
- User selects a destination from the dropdown in Step 1
- State updates: `form.destination = "Dubai, UAE"`

### Step 2: API endpoint is determined
- When `form.destination` changes, a useEffect hook triggers:

```javascript
useEffect(() => {
  const dest = (form.destination || "").trim();
  const newApi = DEST_API_MAP[dest] || "firstnames";
  if (newApi !== changeApi) {
    setChangeApi(newApi);
  }
}, [form.destination, changeApi, DEST_API_MAP]);
```

- For Dubai: `changeApi` becomes `"secondenames"`

---

## 3. Form Submission & API Route Selection

### In [handleSubmit()](src/app/component/Register-Now/RegisterNowClient.js#L226)

When user submits the form:

```javascript
const res = await fetch(`https://world-diplomats-backend.onrender.com/ api/${changeApi}`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ data: payload }),
});
```

**Example for Dubai:**
- Route called: `https://world-diplomats-backend.onrender.com/ api/secondenames`
- This sends data to Strapi CMS

---

## 4. Email Sending Routes

After successful registration in Strapi, a confirmation email is sent based on destination:

### Route Mapping for Emails:

| Destination | API Route | Email Endpoint |
|---|---|---|
| Istanbul, Turkey | firstnames | `/api/register` |
| Dubai, UAE | secondenames | `/api/DubaiUAEMail` |
| Baku, Azerbaijan | thirdnames | `/api/BakuAzerbaijanMail` |
| Kuala Lumpur, Malaysia | fournames | `/api/KualaLumpurMalaysiaMail` |
| London, UK | fivthnames | `/api/LondonUKMail` |
| Riyadh, Saudi Arabia | fivenames | `/api/RiyadhSaudiArabiaMail` |

### Email Sending Code

In [RegisterNowClient.js](src/app/component/Register-Now/RegisterNowClient.js#L296):

```javascript
try {
  await fetch(`/api/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ 
      email: form.email || groupEmail, 
      name: form.name, 
      data: payload, 
      destination: form.destination 
    }),
  });
} catch (_) {}
```

---

## 5. Email Content

### Dynamic Email Subjects

In [src/app/api/register/route.js](src/app/api/register/route.js#L16):

```javascript
const subjectMap = {
  'Istanbul, Turkey': 'World Diplomats — Registration Received (Istanbul, Turkey)',
  'Dubai, UAE': 'World Diplomats — Registration Received (Dubai, UAE)',
  'Kuala Lumpur, Malaysia': 'World Diplomats — Registration Received (Kuala Lumpur, Malaysia)',
  'London, UK': 'World Diplomats — Registration Received (London, UK)',
  'Riyadh, Saudi Arabia': 'World Diplomats — Registration Received (Riyadh, Saudi Arabia)',
  'Baku, Azerbaijan': 'World Diplomats — Registration Received (Baku, Azerbaijan)',
};

const subject = subjectMap[destination] || 'World Diplomats — Registration Received';
```

Each destination-specific email route (e.g., `/api/DubaiUAEMail/route.js`) sends a customized email confirming the registration for that specific location.

---

## Complete Flow Summary

```
1. User selects destination (e.g., "Dubai, UAE")
   ↓
2. changeApi state updates to "secondenames"
   ↓
3. Form submitted to Strapi: https://world-diplomats-backend.onrender.com/ api/secondenames
   ↓
4. After successful Strapi response
   ↓
5. Confirmation email sent via /api/DubaiUAEMail
   ↓
6. User receives destination-specific confirmation email
```

---

## Files Involved

- [RegisterNowClient.js](src/app/component/Register-Now/RegisterNowClient.js) - Form & routing logic
- [src/app/api/register/route.js](src/app/api/register/route.js) - Main email sending
- [src/app/api/DubaiUAEMail/route.js](src/app/api/DubaiUAEMail/route.js) - Dubai-specific email
- [src/app/api/IstanbulTurkeyMail/route.js](src/app/api/IstanbulTurkeyMail/route.js) - Istanbul-specific email
- Similar routes for other destinations...
