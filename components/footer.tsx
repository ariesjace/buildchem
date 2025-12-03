"use client"

import Image from "next/image"
import { Mail, Facebook, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer
      className="border-t py-12 md:py-16 px-4 md:px-12"
      style={{
        background: "linear-gradient(180deg, #261c12 0%, #000000 100%)",
        borderColor: "rgba(220, 180, 133, 0.2)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Logo Column */}
          <div>
            <Image
              src="/images/logo-footer.png"
              alt="VALUE ACQUISITIONS HOLDINGS INC."
              width={300}
              height={120}
              className="w-full h-auto mb-4 object-contain"
            />
          </div>

          {/* Links Column */}
          <div>
            <h4 className="font-semibold mb-4 text-sm md:text-base" style={{ color: "#DCB485" }}>
              QUCIK LINKS
            </h4>
            <ul className="space-y-2 text-xs md:text-sm" style={{ color: "#8b7765" }}>
              <li>
                <a href="/home" className="hover:opacity-80 transition-opacity" style={{ color: "#FFFFFF" }}>
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:opacity-80 transition-opacity" style={{ color: "#FFFFFF" }}>
                  About Us
                </a>
              </li>
              <li>
                <a href="/companies" className="hover:opacity-80 transition-opacity" style={{ color: "#FFFFFF" }}>
                  Companies
                </a>
              </li>
              <li>
                <a href="/solutions" className="hover:opacity-80 transition-opacity" style={{ color: "#FFFFFF" }}>
                  Solutions
                </a>
              </li>
              <li>
                <a href="/blogs" className="hover:opacity-80 transition-opacity" style={{ color: "#FFFFFF" }}>
                  Blogs
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:opacity-80 transition-opacity" style={{ color: "#FFFFFF" }}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Empty Column */}
          <div></div>

          {/* Contact Column */}
          <div className="md:col-span-2 lg:col-span-1">
            <h4 className="font-semibold mb-4 text-sm md:text-base" style={{ color: "#DCB485" }}>
              Connect With Us
            </h4>
            <p className="text-xs md:text-sm mb-4 leading-relaxed" style={{ color: "#FFFFFF" }}>
              Block 14, Brgy. Golden Mile Business Park, Lot 110TH Street, Maduya, Carmona, 4116 Cavite
            </p>
            <p className="font-semibold mb-6 text-sm md:text-base" style={{ color: "#DCB485" }}>
              09175142168
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" className="transition-colors" style={{ color: "#FFFFFF" }}>
                <Facebook size={18} />
              </a>
              <a href="#" className="transition-colors" style={{ color: "#FFFFFF" }}>
                <Instagram size={18} />
              </a>
              <a href="#" className="transition-colors" style={{ color: "#FFFFFF" }}>
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider - Updated border color to match theme */}
        <div
          className="border-t pt-6 md:pt-8 text-center text-xs md:text-sm"
          style={{ borderColor: "rgba(220, 180, 133, 0.2)", color: "#FFFFFF" }}
        >
          <p>&copy; 2025 Value Acquisitions Holdings Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
