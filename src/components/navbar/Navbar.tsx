"use client";
import { useState } from "react";
import Image from "next/image";
import "../../styles/navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className="navbar d-flex justify-content-between align-items-center">

      <div className="navbar-left d-flex">
        <div className="d-flex align-items-center gap-1">
          <span className="logo">
            <Image src="/images/logo.png" alt="uteach logo" width={32} height={32} />
          </span>
          <h4 className="mb-0">teach</h4>
        </div>

        <div className="navbar-center d-flex">
          <a href="#">Products</a>
          <a href="#">Solutions</a>
          <a href="#">Pricing</a>
          <a href="#">Resources</a>
        </div>
      </div>

      <div className="navbar-right d-flex align-items-center">
        <a href="#">Log in</a>
        <button className="btn btn-outline-dark">Sign Up Now</button>

        <div className="hamburger" onClick={() => setOpen(!open)}>
          ☰
        </div>
      </div>

      {open && (
        <div className="mobile-menu">
          <a href="#">Products</a>
          <a href="#">Solutions</a>
          <a href="#">Pricing</a>
          <a href="#">Resources</a>
          <a href="#">Log in</a>
          <button>Sign Up Now</button>
        </div>
      )}
    </nav>
  );
}