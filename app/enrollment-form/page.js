"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const ALL_COURSES = {
  1: "Web Development Masterclass",
  2: "Cyber Security Fundamentals",
  3: "Advanced Web Development",
  4: "Ethical Hacking & Penetration Testing",
};

function generateStudentId() {
  const lastId = parseInt(localStorage.getItem("lastStudentId") || "0", 10);
  const newId = lastId + 1;
  localStorage.setItem("lastStudentId", newId);
  return `STUD${newId}`;
}

export default function EnrollmentFormPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const courseId = searchParams.get("courseId");
  const courseName = ALL_COURSES[courseId] || "Unknown Course";

  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [studentId, setStudentId] = useState("");
  const [showPayment, setShowPayment] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      studentId,
      courseId,
      courseName,
    };

    console.log("Form Data:", formData);
    setShowPayment(true); // Show payment button instead of alert
  };

  const handleBuyNow = () => {
    const newId = generateStudentId();
    setStudentId(newId);
    setShowForm(true);
  };

  const handleViewSyllabus = () => {
    router.push(`/syllabus?courseId=${courseId}`);
  };

  // Razorpay Integration (you can replace with your real payment gateway)
  const handlePayment = () => {
    alert("Redirecting to Payment Gateway...");
    router.push("/payment-gateway"); // Example: redirect to your Razorpay page
  };

  return (
    <div className="min-h-screen bg-gradient-to-br  from-white via-blue-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <motion.div
        initial={{ rotateX: -10, opacity: 0, scale: 0.9 }}
        animate={{ rotateX: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-md w-full space-y-8 p-10 bg-white/80 border border-blue-200 rounded-2xl shadow-2xl backdrop-blur-md"
      >
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-cyan-400 drop-shadow-lg">
            Enroll in a Course
          </h2>
          <p className="mt-2 text-xl text-black font-semibold">{courseName}</p>
          <p className="text-sm text-slate-400">
            Course ID: #{courseId || "N/A"}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Button
            onClick={handleBuyNow}
            disabled={loading}
            className="flex-1 bg-green-600 hover:bg-green-500 text-white font-semibold py-2 rounded-lg shadow-md hover:shadow-green-400/40 transition"
          >
            {loading ? "Processing..." : "Buy Now"}
          </Button>

          <Button
            variant="outline"
            onClick={handleViewSyllabus}
            className="flex-1 border border-slate-500 hover:bg-slate-700 text-slate-400 font-semibold py-2 rounded-lg shadow-md transition cursor-pointer"
          >
            View Syllabus
          </Button>
        </div>

        {/* Enrollment Form */}
        <AnimatePresence>
          {showForm && (
            <motion.form
              key="buy-form"
              onSubmit={handleFormSubmit}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mt-8 space-y-6"
            >
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-slate-300">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    className="mt-1 block w-full bg-slate-900/60 border border-slate-700 text-white placeholder:text-slate-500"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-slate-300">
                    Email ID
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="mt-1 block w-full bg-slate-900/60 border border-slate-700 text-white placeholder:text-slate-500"
                  />
                </div>

                <div>
                  <Label htmlFor="studentId" className="text-slate-300">
                    Student Unique ID
                  </Label>
                  <Input
                    id="studentId"
                    name="studentId"
                    type="text"
                    value={studentId}
                    readOnly
                    className="mt-1 block w-full bg-slate-900/60 border border-slate-700 text-cyan-400 font-semibold cursor-not-allowed"
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-white py-2 px-4 font-semibold rounded-lg shadow-md hover:shadow-cyan-500/40 transition"
              >
                Register
              </Button>
            </motion.form>
          )}
        </AnimatePresence>

        {/* Payment Section */}
        {showPayment && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-6"
          >
            <Button
              onClick={handlePayment}
              className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-yellow-400/40 transition"
            >
              Proceed to Payment
            </Button>
          </motion.div>
        )}

        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="text-center text-sm mt-4 text-green-400 font-medium"
        >
          Enrollment is almost full — Limited Seats Available!
        </motion.p>
      </motion.div>
    </div>
  );
}
