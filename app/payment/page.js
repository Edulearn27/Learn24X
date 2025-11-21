"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function PaymentPage() {
  const [seconds, setSeconds] = useState(60);
  const router = useRouter();

  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      // Redirect to home after 60 seconds
      router.push("/");
    }
  }, [seconds, router]);

  return (
    <div className="p-8 w-full min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h2 className="text-2xl font-semibold mb-4">Payment</h2>
      <p className="mb-6">This is the payment page.</p>

      <div className="qr-code mb-6">
        <img
          src="/My_QR_Code_1-1024.jpeg"
          alt="QR Code"
          className="w-64 h-64 mx-auto rounded-lg shadow-lg"
        />
      </div>

      <h3 className="text-lg font-medium mb-4">Scan Here To Pay</h3>

      <div className="text-center text-gray-700 text-lg mt-4">
        Redirecting to home in{" "}
        <span className="font-bold text-red-500">{seconds}</span> seconds...
      </div>
    </div>
  );
}

export default PaymentPage;
