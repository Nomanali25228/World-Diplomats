import { Suspense } from "react";
import RegisterNowClient from "../component/Register-Now/RegisterNowClient";


export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RegisterNowClient />
    </Suspense>
  );
}
